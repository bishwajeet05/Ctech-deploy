import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Export the middleware using withAuth
export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })
  const isAuthPage = ["/auth/login", "/auth/admin/login"].includes(request.nextUrl.pathname)

  // Redirect authenticated users away from auth pages
  if (isAuthPage && token) {
    if (token.type === "admin") {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url))
    }
    return NextResponse.redirect(new URL("/client", request.url))
  }

  // Protect admin routes (except auth pages)
  if (request.nextUrl.pathname.startsWith("/admin") && !request.nextUrl.pathname.startsWith("/auth/admin")) {
    if (!token) {
      return NextResponse.redirect(
        new URL(`/auth/admin/login?from=${request.nextUrl.pathname}`, request.url)
      )
    }
    if (token.type !== "admin") {
      return NextResponse.redirect(new URL("/auth/login", request.url))
    }
  }

  // Protect client routes
  if (request.nextUrl.pathname.startsWith("/client")) {
    if (!token) {
      return NextResponse.redirect(
        new URL(`/auth/login?from=${request.nextUrl.pathname}`, request.url)
      )
    }
    if (token.type !== "client") {
      return NextResponse.redirect(new URL("/auth/admin/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/auth/login",
    "/auth/admin/login",
    "/admin/:path*",
    "/client/:path*",
  ],
} 