'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function demoLogin() {
  try {
    const admin = await prisma.admin.findUnique({
      where: {
        email: 'admin@admin.com'
      }
    })

    if (!admin || !admin.password || !admin.isActive) {
      throw new Error('Invalid credentials')
    }

    const isPasswordValid = await bcrypt.compare('admin123', admin.password)

    if (!isPasswordValid) {
      throw new Error('Invalid credentials')
    }

    // Set session cookie
    const cookieStore = cookies()
    cookieStore.set('session', JSON.stringify({
      user: {
        id: admin.id.toString(),
        email: admin.email,
        name: admin.name,
        role: admin.role || 'admin',
        type: 'admin'
      }
    }), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 30 * 24 * 60 * 60 // 30 days
    })

    redirect('/admin')
  } catch (error) {
    console.error('Login error:', error)
    throw new Error('Authentication failed')
  }
} 