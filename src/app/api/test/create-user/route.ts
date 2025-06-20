import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { hash } from "bcryptjs";

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
    const user = await prisma.user.create({
      data: {
        email: "test@example.com",
        hashedPassword,
        role: "USER",
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error creating test user:", error);
    return NextResponse.json(
      { error: "Failed to create test user", details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 