// Run: node scripts/migrate.mjs
// Creates the contact_submissions table in NeonDB

import { neon } from "@neondatabase/serverless";

const DATABASE_URL =
  process.env.DATABASE_URL ||
  "postgresql://neondb_owner:npg_4Z1rEGwPeInF@ep-wandering-wave-a1ul7hj9-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require";

const sql = neon(DATABASE_URL);

async function migrate() {
  console.log("Creating contact_submissions table...");

  await sql`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      phone VARCHAR(50) NOT NULL,
      business VARCHAR(255) DEFAULT '',
      message TEXT DEFAULT '',
      submitted_at TIMESTAMPTZ DEFAULT NOW(),
      ip_address VARCHAR(45) DEFAULT '',
      user_agent TEXT DEFAULT ''
    )
  `;

  console.log("✅ Table created successfully!");

  // Verify
  const result = await sql`
    SELECT column_name, data_type 
    FROM information_schema.columns 
    WHERE table_name = 'contact_submissions'
    ORDER BY ordinal_position
  `;

  console.log("\nTable structure:");
  result.forEach(col => {
    console.log(`  ${col.column_name}: ${col.data_type}`);
  });
}

migrate().catch(err => {
  console.error("Migration failed:", err);
  process.exit(1);
});
