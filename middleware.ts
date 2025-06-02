import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Check if the user is authenticated
  const isAuthenticated = !!session

  // Define protected routes that require authentication
  const isProtectedRoute = req.nextUrl.pathname.startsWith("/app") || req.nextUrl.pathname.startsWith("/onboarding")

  // Define auth routes (login/signup)
  const isAuthRoute = req.nextUrl.pathname.startsWith("/login") || req.nextUrl.pathname.startsWith("/signup")

  // Redirect logic
  if (isProtectedRoute && !isAuthenticated) {
    // Redirect unauthenticated users trying to access protected routes to login
    return NextResponse.redirect(new URL("/login", req.url))
  }

  if (isAuthRoute && isAuthenticated) {
    // Redirect authenticated users trying to access auth routes to app
    return NextResponse.redirect(new URL("/app", req.url))
  }

  return res
}

// Specify which routes this middleware should run on
export const config = {
  matcher: ["/app/:path*", "/onboarding/:path*", "/login", "/signup"],
}