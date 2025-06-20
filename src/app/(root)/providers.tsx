"use client"

import { PropsWithChildren } from "react"
import { ThemeProvider } from "next-themes"
import { SessionProvider } from "next-auth/react"

export function Providers({ children }: PropsWithChildren) {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </SessionProvider>
  )
} 