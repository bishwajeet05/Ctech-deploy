import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Log the query attempt
    console.log('Attempting to fetch users...');

    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    console.log('Fetched users count:', users.length);

    const formattedUsers = users.map(user => ({
      id: user.id,
      name: user.name || 'N/A',
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
    }));

    return NextResponse.json(formattedUsers);

  } catch (error) {
    // Log the full error
    console.error("Detailed error:", error);

    // If this is a build-time static generation, return empty data
    if (process.env.NODE_ENV === 'production' && process.env.NEXT_PHASE === 'build') {
      console.log('Returning empty data during build');
      return NextResponse.json([]);
    }

    return NextResponse.json(
      { 
        error: "Failed to fetch users", 
        details: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 500 }
    );
  }
} 