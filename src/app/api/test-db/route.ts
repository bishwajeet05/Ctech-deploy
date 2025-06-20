import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Test database connection first
    await prisma.$connect();
    console.log('Successfully connected to database');
    console.log('Connection URL:', process.env.DATABASE_URL?.replace(/(.*?:\/\/.*?:).*?@/, '$1****:****@'));

    // If we're in build mode, return mock data
    if (process.env.SKIP_DB_DURING_BUILD === 'true') {
      return NextResponse.json({ userCount: 0, message: 'Mock data during build' });
    }

    // Count users
    const userCount = await prisma.user.count();
    return NextResponse.json({ userCount });

  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json(
      { error: "Failed to connect to database", details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 