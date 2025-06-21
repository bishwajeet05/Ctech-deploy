import { db } from "@/lib/db";
import { users as usersTable } from "@/lib/db/schema";
import { NextResponse } from "next/server";
import { desc } from "drizzle-orm";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Log the query attempt
    console.log('Attempting to fetch users...');

    const users = await db.select({
      id: usersTable.id,
      name: usersTable.name,
      email: usersTable.email,
      role: usersTable.role,
      createdAt: usersTable.createdAt,
    }).from(usersTable).orderBy(desc(usersTable.createdAt));

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