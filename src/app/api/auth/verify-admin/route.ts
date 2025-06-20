import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth/auth-options'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const isAdmin = session.user?.role === 'ADMIN'
    return NextResponse.json({ isAdmin })
  } catch (error) {
    console.error('Verify admin error:', error)

    // If this is a build-time static generation, return a default response
    if (process.env.NODE_ENV === 'production' && process.env.NEXT_PHASE === 'build') {
      console.log('Returning default response during build')
      return NextResponse.json({ isAdmin: false })
    }

    return NextResponse.json(
      { error: "Failed to verify admin status" }, 
      { status: 500 }
    )
  }
} 