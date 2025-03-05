import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        role: true,
        createdAt: true,
      }
    })

    return NextResponse.json({ users })
  } catch (error) {
    console.error('Debug route error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 