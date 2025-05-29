import { getToken } from "next-auth/jwt"
import { type NextRequest, NextResponse } from "next/server"

export async function middleware(req: NextRequest) {
  const token = await getToken({ req })
  const isAuthenticated = !!token

  // Define protected routes that require authentication
  const protectedPaths = ["/profile", "/messages", "/saved"]
  const isProtectedPath = protectedPaths.some((path) => req.nextUrl.pathname.startsWith(path))

  if (isProtectedPath && !isAuthenticated) {
    // Redirect to login if trying to access protected route while not authenticated
    const url = new URL("/auth/login", req.url)
    url.searchParams.set("callbackUrl", req.nextUrl.pathname)
    return NextResponse.redirect(url)
  }

  // If already logged in and trying to access auth pages, redirect to home
  if (isAuthenticated && req.nextUrl.pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all protected routes
    "/profile/:path*",
    "/messages/:path*",
    "/saved/:path*",
    // Match auth routes
    "/auth/:path*",
  ],
}
