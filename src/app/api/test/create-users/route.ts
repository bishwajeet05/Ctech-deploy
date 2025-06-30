import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";

export const dynamic = 'force-dynamic';

export async function POST() {
  try {
    // If we're in build mode, return mock data
    if (process.env.SKIP_DB_DURING_BUILD === 'true') {
      return NextResponse.json({ 
        users: [
          { id: 'mock-id-1', email: 'mock1@example.com', role: 'USER' },
          { id: 'mock-id-2', email: 'mock2@example.com', role: 'ADMIN' }
        ],
        message: 'Mock users created during build'
      });
    }

    const hashedPassword = await hash("password123", 10);
    async function upsertUser(email, hashedPassword, role) {
      const existing = await db.select().from(users).where(eq(users.email, email)).then(r => r[0]);
      if (existing) return existing;
      return await db.insert(users).values({
        id: nanoid(),
        email,
          hashedPassword,
        role,
      }).returning().then(r => r[0]);
    }
    const usersArr = await Promise.all([
      upsertUser("user@example.com", hashedPassword, "USER"),
      upsertUser("admin@example.com", hashedPassword, "ADMIN"),
    ]);

    return NextResponse.json({ users: usersArr });
  } catch (error) {
    console.error("Error creating test users:", error);
    return NextResponse.json(
      { error: "Failed to create test users", details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 