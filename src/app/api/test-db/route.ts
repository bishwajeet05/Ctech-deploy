import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await prisma.$connect();
    
    // Try a simple query
    const count = await prisma.client.count();
    
    return NextResponse.json({ 
      success: true, 
      message: 'Database connection successful',
      clientCount: count 
    });
    
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to connect to database' 
    }, { 
      status: 500 
    });
  } finally {
    await prisma.$disconnect();
  }
} 