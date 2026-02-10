import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

// Use Neon's SQL-over-HTTP API directly via fetch — avoids bundling issues on Cloudflare Workers
async function queryNeon(
  connectionString: string,
  query: string,
  params: (string | null)[],
) {
  const url = new URL(connectionString);
  const host = url.hostname;

  const response = await fetch(`https://${host}/sql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Neon-Connection-String": connectionString,
    },
    body: JSON.stringify({ query, params }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Neon API error ${response.status}: ${errorText}`);
  }

  return response.json();
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, business, message } = body;

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required" },
        { status: 400 },
      );
    }

    // Sanitize inputs
    const sanitized = {
      name: String(name).slice(0, 255),
      phone: String(phone).slice(0, 50),
      business: String(business || "").slice(0, 255),
      message: String(message || "").slice(0, 2000),
    };

    // Get the database URL from environment variable
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      console.error("DATABASE_URL not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 },
      );
    }

    // Get client info
    const ip =
      request.headers.get("cf-connecting-ip") ||
      request.headers.get("x-forwarded-for") ||
      "";
    const userAgent = request.headers.get("user-agent") || "";

    // Insert into database via Neon HTTP API
    await queryNeon(
      databaseUrl,
      "INSERT INTO contact_submissions (name, phone, business, message, ip_address, user_agent) VALUES ($1, $2, $3, $4, $5, $6)",
      [
        sanitized.name,
        sanitized.phone,
        sanitized.business,
        sanitized.message,
        ip,
        userAgent,
      ],
    );

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to save submission" },
      { status: 500 },
    );
  }
}
