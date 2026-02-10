import { neon } from "@neondatabase/serverless";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

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

    const sql = neon(databaseUrl);

    // Get client info
    const ip =
      request.headers.get("cf-connecting-ip") ||
      request.headers.get("x-forwarded-for") ||
      "";
    const userAgent = request.headers.get("user-agent") || "";

    // Insert into database
    await sql`
      INSERT INTO contact_submissions (name, phone, business, message, ip_address, user_agent)
      VALUES (${sanitized.name}, ${sanitized.phone}, ${sanitized.business}, ${sanitized.message}, ${ip}, ${userAgent})
    `;

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to save submission" },
      { status: 500 },
    );
  }
}
