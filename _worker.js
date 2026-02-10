/**
 * Cloudflare Worker — serves Next.js static export + handles /api/contact
 */

async function handleContactAPI(request, env) {
  // Only allow POST
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const body = await request.json();
    const { name, phone, business, message } = body;

    // Validate required fields
    if (!name || !phone) {
      return new Response(
        JSON.stringify({ error: "Name and phone are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    // Sanitize inputs
    const sanitized = {
      name: String(name).slice(0, 255),
      phone: String(phone).slice(0, 50),
      business: String(business || "").slice(0, 255),
      message: String(message || "").slice(0, 2000),
    };

    // Get database URL from env
    const databaseUrl = env.DATABASE_URL;
    if (!databaseUrl) {
      console.error("DATABASE_URL not configured");
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      );
    }

    // Get client info
    const ip =
      request.headers.get("cf-connecting-ip") ||
      request.headers.get("x-forwarded-for") ||
      "";
    const userAgent = request.headers.get("user-agent") || "";

    // Call Neon SQL-over-HTTP API directly
    const dbUrl = new URL(databaseUrl);
    const host = dbUrl.hostname;

    const dbResponse = await fetch(`https://${host}/sql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Neon-Connection-String": databaseUrl,
      },
      body: JSON.stringify({
        query:
          "INSERT INTO contact_submissions (name, phone, business, message, ip_address, user_agent) VALUES ($1, $2, $3, $4, $5, $6)",
        params: [
          sanitized.name,
          sanitized.phone,
          sanitized.business,
          sanitized.message,
          ip,
          userAgent,
        ],
      }),
    });

    if (!dbResponse.ok) {
      const errorText = await dbResponse.text();
      console.error("Neon API error:", dbResponse.status, errorText);
      return new Response(
        JSON.stringify({ error: "Failed to save submission" }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to save submission" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Handle API routes
    if (path === "/api/contact" || path === "/api/contact/") {
      return handleContactAPI(request, env);
    }

    // Serve static assets
    let response = await env.ASSETS.fetch(request);

    // If 404 and looks like a page route (no extension), try index.html
    if (response.status === 404 && !path.includes(".")) {
      const normalizedPath = path.replace(/\/$/, "");
      const indexRequest = new Request(
        new URL(`${normalizedPath}/index.html`, request.url).toString(),
        request,
      );
      response = await env.ASSETS.fetch(indexRequest);
    }

    // Fallback to 404 page
    if (response.status === 404) {
      const notFoundRequest = new Request(
        new URL("/404.html", request.url).toString(),
        request,
      );
      response = await env.ASSETS.fetch(notFoundRequest);
    }

    return response;
  },
};
