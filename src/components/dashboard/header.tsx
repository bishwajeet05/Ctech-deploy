"use client"

import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "@/components/theme-switcher"

interface DashboardHeaderProps {
  userName?: string | null
}

export function DashboardHeader({ userName }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold">Cadratec</span>
          <span className="text-sm text-muted-foreground">Client Portal</span>
        </div>

        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          
          <div className="flex items-center gap-2">
            <span className="text-sm">Welcome, {userName || 'Client'}</span>
            <Button
              variant="outline"
              onClick={() => signOut({ callbackUrl: '/auth/login' })}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
} 