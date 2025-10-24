// app/page.tsx
import { SewasHome } from '@/components/sewas-home'; // Use curly braces
import { ProtectedRoute } from "@/components/auth/protected-route"
import Link from "next/link"

export default function HomePage() {
  // Check if Supabase is configured
  const isSupabaseConfigured = process.env.NEXT_PUBLIC_SUPABASE_URL && 
    process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder.supabase.co'

  if (!isSupabaseConfigured) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 glass-card">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to 800 SEWAS City</h1>
            <p className="text-gray-600 mb-6">
              The authentication system is ready, but Supabase needs to be configured for full functionality.
            </p>
            <div className="space-y-4">
              <Link 
                href="/demo" 
                className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
              >
                View Demo & Setup Guide
              </Link>
              <p className="text-sm text-gray-500">
                Or configure Supabase in your .env.local file to enable authentication
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <ProtectedRoute>
      <SewasHome />
    </ProtectedRoute>
  )
}
