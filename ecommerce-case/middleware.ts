import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/request';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Define protected routes
  const protectedRoutes = [
    '/checkout',
    '/my-account',
    '/order-complete',
  ];

  const isProtectedRoute = protectedRoutes.some((route) => 
    pathname.startsWith(route)
  );

  // Get auth state from cookie (since we are in middleware)
  // Note: Persist middleware by default uses localStorage which is not accessible here.
  // For production, we should store the token in a cookie.
  // For this case, we'll assume a cookie named 'auth-token' exists.
  const token = request.cookies.get('auth-token')?.value;

  if (isProtectedRoute && !token) {
    // Redirect to sign-in if accessing a protected route without a token
    const url = request.nextUrl.clone();
    url.pathname = '/sign-in';
    return NextResponse.redirect(url);
  }

  // If user is logged in and tries to access sign-in, redirect to home
  if (pathname === '/sign-in' && token) {
    const url = request.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/checkout/:path*',
    '/my-account/:path*',
    '/order-complete/:path*',
    '/sign-in',
  ],
};
