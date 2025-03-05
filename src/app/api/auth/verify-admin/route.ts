import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ isAdmin: false }, { status: 401 })
    }

    // Check if the user has the ADMIN role
    const isAdmin = session.user.role === 'ADMIN'

    return NextResponse.json({ isAdmin })
  } catch (error) {
    return NextResponse.json({ isAdmin: false }, { status: 500 })
  }
} 