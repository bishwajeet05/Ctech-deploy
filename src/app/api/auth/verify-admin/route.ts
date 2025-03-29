import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user) {
      return NextResponse.json({ isAdmin: false, error: "Not authenticated" }, { status: 401 })
    }

    // Check if the user has the ADMIN role
    const isAdmin = session.user.role === 'ADMIN'

    if (!isAdmin) {
      return NextResponse.json({ isAdmin: false, error: "Not authorized" }, { status: 403 })
    }

    return NextResponse.json({ isAdmin: true, user: session.user })
  } catch (error) {
    console.error('Verify admin error:', error)
    return NextResponse.json({ isAdmin: false, error: "Server error" }, { status: 500 })
  }
} 