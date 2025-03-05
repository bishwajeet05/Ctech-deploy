import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Test database connection first
    await prisma.$connect();
    
    // Log the query attempt
    console.log('Attempting to fetch clients...');

    const clients = await prisma.client.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        companyName: true,
        isActive: true,
        createdAt: true,
        lastLoginAt: true,
      },
      where: {
        deletedAt: null,
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    console.log('Fetched clients count:', clients.length);

    const formattedClients = clients.map(client => ({
      id: client.id.toString(),
      name: client.name,
      email: client.email,
      location: client.companyName || 'N/A',
      flag: '🏢',
      status: client.isActive ? 'Active' : 'Inactive',
      balance: 0,
    }));

    return NextResponse.json(formattedClients);

  } catch (error) {
    // Log the full error
    console.error("Detailed error:", error);

    return NextResponse.json(
      { 
        error: "Failed to fetch clients", 
        details: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 