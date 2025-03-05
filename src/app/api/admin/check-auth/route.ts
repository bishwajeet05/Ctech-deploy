import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    const user = await prisma.user.findUnique({
      where: { email },
      select: { role: true }
    })

    const isAdmin = user?.role === 'ADMIN'

    if (!isAdmin) {
      return NextResponse.json({ isAdmin: false }, { status: 403 })
    }

    return NextResponse.json({ isAdmin: true })
  } catch (error) {
    console.error('Admin check error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 