'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth-context'
import { useToast } from '@/lib/use-toast'
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react'

export default function DemoPage() {
  const { user, loading } = useAuth()
  const { toast } = useToast()
  const [isSupabaseConfigured, setIsSupabaseConfigured] = useState(false)

  const checkSupabaseConfig = () => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    
    if (url && url !== 'https://placeholder.supabase.co' && key && key !== 'placeholder-key') {
      setIsSupabaseConfigured(true)
      toast({
        title: "Supabase Configured",
        description: "Your Supabase environment variables are properly set up!",
        variant: "success",
      })
    } else {
      setIsSupabaseConfigured(false)
      toast({
        title: "Supabase Not Configured",
        description: "Please set up your Supabase environment variables in .env.local",
        variant: "destructive",
      })
    }
  }

  const testSignup = async () => {
    toast({
      title: "Demo Mode",
      description: "In demo mode, authentication is simulated. Set up Supabase for real authentication.",
      variant: "default",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Authentication System Demo</h1>
          <p className="text-gray-600">Test the authentication system and check configuration status</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Configuration Status */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="w-5 h-5 mr-2" />
                Configuration Status
              </CardTitle>
              <CardDescription>
                Check if Supabase is properly configured
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Supabase URL:</span>
                <span className={`px-2 py-1 rounded text-sm ${
                  process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder.supabase.co'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Configured' : 'Not Set'}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span>Supabase Key:</span>
                <span className={`px-2 py-1 rounded text-sm ${
                  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== 'placeholder-key'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Configured' : 'Not Set'}
                </span>
              </div>

              <Button onClick={checkSupabaseConfig} className="w-full">
                Check Configuration
              </Button>
            </CardContent>
          </Card>

          {/* Authentication Status */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                {loading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-amber-600 mr-2"></div>
                ) : user ? (
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-600 mr-2" />
                )}
                Authentication Status
              </CardTitle>
              <CardDescription>
                Current user authentication state
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {loading ? (
                <p className="text-gray-600">Loading...</p>
              ) : user ? (
                <div className="space-y-2">
                  <p><strong>Name:</strong> {user.full_name}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Mobile:</strong> {user.mobile_number}</p>
                  <p><strong>Location:</strong> {user.city}, {user.state}</p>
                  <p><strong>Verified:</strong> {user.is_verified ? 'Yes' : 'No'}</p>
                </div>
              ) : (
                <p className="text-gray-600">No user logged in</p>
              )}
            </CardContent>
          </Card>

          {/* Test Actions */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Test Actions</CardTitle>
              <CardDescription>
                Test the authentication flow
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button asChild className="w-full">
                <a href="/auth/signup">Go to Signup</a>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <a href="/auth/login">Go to Login</a>
              </Button>
              <Button onClick={testSignup} variant="secondary" className="w-full">
                Test Signup (Demo)
              </Button>
            </CardContent>
          </Card>

          {/* Setup Instructions */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Setup Instructions</CardTitle>
              <CardDescription>
                How to configure Supabase for full functionality
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm space-y-2">
                <p>1. Create a Supabase project at supabase.com</p>
                <p>2. Get your project URL and anon key</p>
                <p>3. Update .env.local with your credentials</p>
                <p>4. Run the SQL schema from AUTHENTICATION_SETUP.md</p>
                <p>5. Restart the development server</p>
              </div>
              <Button asChild variant="outline" className="w-full">
                <a href="/AUTHENTICATION_SETUP.md" target="_blank">View Setup Guide</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}









