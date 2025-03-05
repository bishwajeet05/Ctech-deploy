import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"

export async function GET() {
  try {
    // Create admin user
    const adminPassword = await bcrypt.hash("admin123", 10)
    await prisma.user.upsert({
      where: { email: "admin@test.com" },
      update: {},
      create: {
        email: "admin@test.com",
        hashedPassword: adminPassword,
        role: "ADMIN",
        name: "Admin User"
      }
    })

    // Create regular user
    const userPassword = await bcrypt.hash("user123", 10)
    await prisma.user.upsert({
      where: { email: "user@test.com" },
      update: {},
      create: {
        email: "user@test.com",
        hashedPassword: userPassword,
        role: "USER",
        name: "Regular User"
      }
    })

    return NextResponse.json({ 
      message: "Test users created successfully",
      users: {
        admin: "admin@test.com",
        user: "user@test.com"
      }
    })
  } catch (error) {
    console.error("Error creating test users:", error)
    return NextResponse.json({ error: "Failed to create test users" }, { status: 500 })
  }
} 