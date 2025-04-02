"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { NavHeader } from "@/components/marketing/nav-header"

export default function LoginPage() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(event.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/client"
      })

      if (result?.error) {
        setError(result.error)
        return
      }

      if (result?.url) {
        router.push(result.url)
      } else {
        router.push("/client")
      }
    } catch (error) {
      console.error("Login error:", error)
      setError("An error occurred while signing in. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F2F3F4]">
      <NavHeader />
      
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/10 via-transparent to-[#ffffff]/20" />
        
        {/* Decorative Circle */}
        <div className="absolute -top-[30%] -right-[10%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-[#c4a484]/20 via-[#b8860b]/10 to-transparent blur-3xl" />
        
        {/* Bottom Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-[#F2F3F4] to-transparent" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(#00000009 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      {/* Login Card Container */}
      <div className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center pt-16">
        <Card className="w-[400px] relative overflow-hidden border-none bg-white/[0.7] backdrop-blur-[12px] backdrop-saturate-[180%] shadow-[0_2px_4px_rgba(0,0,0,0.02),0_1px_6px_rgba(0,0,0,0.03)]">
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-white/20 pointer-events-none" />
          
          <CardHeader className="space-y-1 relative">
            <CardTitle className="text-2xl font-medium tracking-tight text-gray-900">Welcome back</CardTitle>
            <CardDescription className="text-neutral-600">
              Sign in to your account
            </CardDescription>
          </CardHeader>
          
          <CardContent className="relative">
            <form onSubmit={onSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50/80 backdrop-blur-sm text-red-600 p-3 rounded-md text-sm">
                  {error}
                </div>
              )}
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-neutral-800">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="user@example.com"
                  autoComplete="email"
                  required
                  className="w-full rounded-md border border-neutral-200/80 bg-white/60 px-3 py-2 text-sm text-black ring-offset-background placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:border-neutral-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-neutral-800">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                  className="w-full rounded-md border border-neutral-200/80 bg-white/60 px-3 py-2 text-sm text-black ring-offset-background placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:border-neutral-300"
                />
              </div>

              <div className="flex items-center justify-between">
                <Link
                  href="/auth/forgot-password"
                  className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="space-y-4">
                <Button 
                  type="submit" 
                  className="w-full bg-neutral-900 hover:bg-neutral-800 text-white transition-colors" 
                  disabled={loading}
                >
                  {loading ? "Signing in..." : "Sign in"}
                </Button>
              </div>
            </form>
          </CardContent>
          
          <CardFooter className="relative">
            <div className="text-center space-y-2 w-full">
              <p className="text-sm text-neutral-600">
                Protected by secure authentication
              </p>
              <Link
                href="/auth/admin/login"
                className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors hover:underline block"
              >
                Admin Login →
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
} 