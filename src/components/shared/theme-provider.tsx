"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

const availableThemes = [
  "theme-modern-light",
  "theme-elegant-dark",
  "theme-nature-light",
  "theme-royal-dark",
  "theme-sunset-light",
  "theme-ocean-dark",
  "theme-minimal-light",
  "theme-neon-dark",
]

export function ThemeProvider({
  children,
  defaultTheme = "theme-modern-light",
}: {
  children: React.ReactNode
  defaultTheme?: string
}) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={defaultTheme}
      themes={availableThemes}
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  )
} 