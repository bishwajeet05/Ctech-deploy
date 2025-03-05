"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface SidebarProps {
  open: boolean
  setOpen: (open: boolean) => void
  children: React.ReactNode
}

interface SidebarBodyProps {
  children: React.ReactNode
  className?: string
}

interface SidebarLinkProps {
  link: {
    label: string
    href: string
    icon: React.ReactNode
  }
  className?: string
}

export function Sidebar({ open, setOpen, children }: SidebarProps) {
  return (
    <>
      <div
        className={cn(
          "fixed inset-y-0 z-50 flex w-72 flex-col border-r bg-background transition-transform duration-300 lg:static lg:translate-x-0",
          !open && "-translate-x-full"
        )}
      >
        {children}
        <button
          type="button"
          className="absolute -right-4 top-16 hidden h-8 w-8 items-center justify-center rounded-full border bg-background text-muted-foreground shadow-sm lg:flex"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
          <span className="sr-only">Toggle sidebar</span>
        </button>
      </div>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  )
}

export function SidebarBody({ children, className }: SidebarBodyProps) {
  return (
    <div className={cn("flex h-full flex-col p-4", className)}>
      {children}
    </div>
  )
}

export function SidebarLink({ link, className }: SidebarLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === link.href

  return (
    <Link
      href={link.href}
      className={cn(
        "group flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors",
        isActive
          ? "bg-muted text-foreground"
          : "text-muted-foreground hover:bg-muted hover:text-foreground",
        className
      )}
    >
      {link.icon}
      <span className="ml-3">{link.label}</span>
    </Link>
  )
} 