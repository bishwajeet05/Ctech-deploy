import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { nanoid } from "nanoid";

export const dynamic = 'force-dynamic';

export async function POST() {
  try {
    // If we're in build mode, return mock data
    if (process.env.SKIP_DB_DURING_BUILD === 'true') {
      return NextResponse.json({ 
        id: 'mock-id',
        email: 'mock@example.com',
        role: 'USER',
        message: 'Mock user created during build'
      });
    }

    const hashedPassword = await hash("password123", 10);
    const user = await db.insert(users).values({
      id: nanoid(),
      email: "test@example.com",
      hashedPassword,
      role: "USER",
    }).returning().then(r => r[0]);

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error creating test user:", error);
    return NextResponse.json(
      { error: "Failed to create test user", details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 