// // middleware.ts (in ROOT directory)

// import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import type { Database } from '@/lib/supabase/database.types'; // Use alias path

// export async function middleware(req: NextRequest) {
//   // Add a log to see WHEN and WHERE the middleware runs
//   console.log('[Middleware] Running for path:', req.nextUrl.pathname);
  
//   // Create response object needed by Supabase client
//   const res = NextResponse.next();

//   // Create Supabase client configured for middleware
//   const supabase = createMiddlewareClient<Database>({ req, res });

//   // IMPORTANT: Refresh session cookie - handles PKCE, session expiry etc.
//   await supabase.auth.getSession();

//   // Return response (potentially with updated cookies)
//   return res;
// }

// // Configuration: Run middleware on relevant paths
// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      * - api/ (API routes)
//      * - auth pages (login, signup, etc.)
//      *
//      * It MUST run on '/auth/callback' to handle the auth flow.
//      */
//     '/((?!_next/static|_next/image|favicon.ico|api/|auth/login|auth/signup|auth/complete-profile).*)',
//   ],
// };

// // middleware.ts (in ROOT directory)

// import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import type { Database } from '@/lib/supabase/database.types'; // Use alias path

// export async function middleware(req: NextRequest) {
//   // Add log to confirm middleware execution
//   console.log('[Middleware] Running for path:', req.nextUrl.pathname);

//   const res = NextResponse.next();
//   const supabase = createMiddlewareClient<Database>({ req, res });

//   // Refresh session cookie - CRITICAL for auth helpers and server components
//   await supabase.auth.getSession();

//   return res;
// }

// // Configuration: Run middleware on relevant paths
// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      * - api/ (API routes, if any)
//      * - Specific asset files (svg, png, jpg, etc.)
//      *
//      * It MUST run on '/auth/callback'.
//      * It MAY run on other pages (like '/', '/profile') to keep session fresh.
//      * It SHOULD generally NOT run on '/auth/login', '/auth/signup', etc. if causing loops.
//      * The pattern below includes `/auth/callback` while excluding static assets.
//      */
//     '/((?!_next/static|_next/image|favicon.ico|api/|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
//   ],
// };


// import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
// import type { Database } from '@/lib/supabase/database.types'

// export async function middleware(req: NextRequest) {
//   const res = NextResponse.next()
//   const supabase = createMiddlewareClient<Database>({ req, res })

//   // CRITICAL: This refreshes the session and handles PKCE
//   // It MUST run before any auth checks
//   const {
//     data: { session },
//   } = await supabase.auth.getSession()

//   // Log for debugging (remove in production)
//   console.log('[Middleware]', req.nextUrl.pathname, 'Session:', !!session)

//   return res
// }

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths EXCEPT:
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      * - public folder files
//      */
//     '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
//   ],
// }

import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import type { Database } from '@/lib/supabase/database.types'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient<Database>({ req, res })

  // Refresh session
  const {
    data: { session },
  } = await supabase.auth.getSession()

  console.log('[Middleware]', req.nextUrl.pathname, 'Session:', !!session)

  return res
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}