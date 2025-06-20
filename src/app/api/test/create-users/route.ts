import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { hash } from "bcryptjs";

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
    const users = await Promise.all([
      prisma.user.upsert({
        where: { email: "user@example.com" },
        update: {},
        create: {
          email: "user@example.com",
          hashedPassword,
          role: "USER",
        },
      }),
      prisma.user.upsert({
        where: { email: "admin@example.com" },
        update: {},
        create: {
          email: "admin@example.com",
          hashedPassword,
          role: "ADMIN",
        },
      }),
    ]);

    return NextResponse.json({ users });
  } catch (error) {
    console.error("Error creating test users:", error);
    return NextResponse.json(
      { error: "Failed to create test users", details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 