import { Metadata } from "next"
import { Inter, Gilda_Display } from "next/font/google"
import "./globals.css"

import { Providers } from "@/app/(root)/providers"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
})

const gilda = Gilda_Display({
  weight: '400',
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-gilda',
})

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
      <body className={`${inter.variable} ${gilda.variable}`}>
        <Providers>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </Providers>
      </body>
    </html>
  )
} 