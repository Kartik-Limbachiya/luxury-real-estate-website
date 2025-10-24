// 'use client'

// import { useAuth } from '@/lib/context/auth-context'
// import { useRouter } from 'next/navigation'
// import { useEffect } from 'react'

// export function ProtectedRoute({ children }: { children: React.ReactNode }) {
//   const { user, profile, loading } = useAuth()
//   const router = useRouter()

//   useEffect(() => {
//     if (!loading) {
//       if (!user) {
//         router.push('/auth/login')
//       } else if (user && !profile?.is_verified) {
//         router.push('/auth/complete-profile')
//       }
//     }
//   }, [user, profile, loading, router])

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
//       </div>
//     )
//   }

//   if (!user || !profile?.is_verified) {
//     return null
//   }

//   return <>{children}</>
// }

// components/auth/protected-route.tsx
'use client'

import { useAuth } from '@/lib/context/auth-context'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect } from 'react'

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, profile, loading: authLoading } = useAuth() // Use consistent naming 'authLoading'
  const router = useRouter()
  const pathname = usePathname() // Get the current path

  useEffect(() => {
    // Wait until authentication status is determined
    if (!authLoading) {

      // CASE 1: No authenticated user found
      if (!user) {
        // If not on a public auth page already, redirect to login
        if (pathname !== '/auth/login' && pathname !== '/auth/signup') {
            console.log('[ProtectedRoute] No user found, redirecting to login.');
            router.push('/auth/login')
        }
        return // Stop further checks if no user
      }

      // CASE 2: User is authenticated, BUT profile is incomplete/not verified
      // `profile` might be null initially while loading, `profile?.is_verified` handles this
      if (user && !profile?.is_verified) {
        // If the user is ALREADY on the complete-profile page, do nothing (allow them to complete it)
        if (pathname !== '/auth/complete-profile') {
            console.log('[ProtectedRoute] User logged in but profile incomplete, redirecting to complete-profile.');
            // Redirect ANY other page to complete-profile
            router.push('/auth/complete-profile')
        }
        return // Stop further checks if profile incomplete
      }

      // CASE 3: User is authenticated AND profile is complete/verified
      // If they somehow landed on an auth page (login/signup/complete), redirect them home
      if (user && profile?.is_verified) {
          if (pathname === '/auth/login' || pathname === '/auth/signup' || pathname === '/auth/complete-profile') {
              console.log('[ProtectedRoute] User logged in and verified, redirecting from auth page to home.');
              router.push('/');
          }
          // Otherwise, they are on a protected route and allowed to be there.
      }
    }
  }, [user, profile, authLoading, router, pathname]) // Add pathname to dependency array

  // Show loading state while determining auth status
  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-amber-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading...</p>
        </div>
      </div>
    )
  }

  // Conditions to prevent rendering children prematurely or incorrectly:
  // 1. If still loading (already handled above)
  // 2. If no user and NOT on a public auth page (useEffect will redirect)
  if (!user && (pathname !== '/auth/login' && pathname !== '/auth/signup')) {
      return null; // Prevent flash of content before redirect
  }
  // 3. If user exists but profile incomplete and NOT on complete-profile page (useEffect will redirect)
  if (user && !profile?.is_verified && pathname !== '/auth/complete-profile') {
      return null; // Prevent flash of content before redirect
  }
  // 4. If user exists, profile complete, but currently on an auth page (useEffect will redirect)
   if (user && profile?.is_verified && (pathname === '/auth/login' || pathname === '/auth/signup' || pathname === '/auth/complete-profile')) {
       return null; // Prevent flash of content before redirect
   }


  // If none of the redirect conditions met, render the children
  return <>{children}</>
}