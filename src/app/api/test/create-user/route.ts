import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"

export async function GET() {
  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email: "admin@test.com"
      }
    })

    if (existingUser) {
      return NextResponse.json({ message: "Test user already exists" })
    }

    // Create test user
    const hashedPassword = await bcrypt.hash("password123", 10)
    
    const user = await prisma.user.create({
      data: {
        email: "admin@test.com",
        hashedPassword: hashedPassword,
        role: "ADMIN",
        name: "Admin User"
      }
    })

    return NextResponse.json({ 
      message: "Test user created successfully",
      user: {
        email: user.email,
        role: user.role
      }
    })
  } catch (error) {
    console.error("Error creating test user:", error)
    return NextResponse.json({ error: "Failed to create test user" }, { status: 500 })
  }
} 