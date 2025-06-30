import "dotenv/config";
import db from "../src/lib/db/index";
import { users } from "../src/lib/db/schema";

async function main() {
  try {
    // Try a simple query: fetch the first user
    const result = await db.select().from(users).limit(1);
    console.log("DB connection successful! First user:", result[0] ?? "No users found");
    process.exit(0);
  } catch (err) {
    console.error("DB connection failed:", err);
    process.exit(1);
  }
}

main(); 