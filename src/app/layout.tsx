import { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { Providers } from "@/app/(root)/providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cadratec - Professional Solutions",
  description: "Professional solutions for your business",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
} 