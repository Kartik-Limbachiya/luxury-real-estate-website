'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { supabase, User } from './supabase'
import { useRouter } from 'next/navigation'

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (emailOrPhone: string) => Promise<{ success: boolean; error?: string }>
  signUp: (data: { fullName: string; email: string; mobileNumber: string }) => Promise<{ success: boolean; error?: string }>
  verifyOTP: (otp: string) => Promise<{ success: boolean; error?: string }>
  completeProfile: (data: { state: string; city: string; area?: string }) => Promise<{ success: boolean; error?: string }>
  signOut: () => Promise<void>
  sendOTP: (mobileNumber: string) => Promise<{ success: boolean; error?: string }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if Supabase is configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL === 'https://placeholder.supabase.co') {
      setLoading(false)
      return
    }

    // Get initial session
    const getInitialSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        if (session?.user) {
          await fetchUserProfile(session.user.id)
        }
      } catch (error) {
        console.error('Error getting session:', error)
      }
      setLoading(false)
    }

    getInitialSession()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        await fetchUserProfile(session.user.id)
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const fetchUserProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single()

      if (error) throw error
      setUser(data)
    } catch (error) {
      console.error('Error fetching user profile:', error)
      setUser(null)
    }
  }

  const signIn = async (emailOrPhone: string): Promise<{ success: boolean; error?: string }> => {
    try {
      setLoading(true)
      
      // Check if Supabase is configured
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL === 'https://placeholder.supabase.co') {
        return { success: false, error: 'Supabase is not configured. Please check your environment variables.' }
      }
      
      // Check if input is email or phone
      const isEmail = emailOrPhone.includes('@')
      
      if (isEmail) {
        const { error } = await supabase.auth.signInWithOtp({
          email: emailOrPhone,
          options: {
            shouldCreateUser: false,
          }
        })
        if (error) throw error
      } else {
        const { error } = await supabase.auth.signInWithOtp({
          phone: `+91${emailOrPhone}`,
          options: {
            shouldCreateUser: false,
          }
        })
        if (error) throw error
      }

      return { success: true }
    } catch (error: any) {
      return { success: false, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  const signUp = async (data: { fullName: string; email: string; mobileNumber: string }): Promise<{ success: boolean; error?: string }> => {
    try {
      setLoading(true)
      
      const { error } = await supabase.auth.signUp({
        email: data.email,
        phone: `+91${data.mobileNumber}`,
        password: Math.random().toString(36).slice(-8), // Random password for OTP-only auth
        options: {
          data: {
            full_name: data.fullName,
            mobile_number: data.mobileNumber,
          }
        }
      })

      if (error) throw error
      return { success: true }
    } catch (error: any) {
      return { success: false, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  const verifyOTP = async (otp: string): Promise<{ success: boolean; error?: string }> => {
    try {
      setLoading(true)
      
      const { error } = await supabase.auth.verifyOtp({
        token: otp,
        type: 'email' // or 'sms' based on the signup method
      })

      if (error) throw error
      return { success: true }
    } catch (error: any) {
      return { success: false, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  const completeProfile = async (data: { state: string; city: string; area?: string }): Promise<{ success: boolean; error?: string }> => {
    try {
      setLoading(true)
      
      const { data: { user: authUser } } = await supabase.auth.getUser()
      if (!authUser) throw new Error('User not authenticated')

      const { error } = await supabase
        .from('users')
        .upsert({
          id: authUser.id,
          full_name: authUser.user_metadata.full_name,
          email: authUser.email!,
          mobile_number: authUser.user_metadata.mobile_number,
          state: data.state,
          city: data.city,
          is_verified: true,
          last_login: new Date().toISOString(),
        })

      if (error) throw error
      
      await fetchUserProfile(authUser.id)
      return { success: true }
    } catch (error: any) {
      return { success: false, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  const sendOTP = async (mobileNumber: string): Promise<{ success: boolean; error?: string }> => {
    try {
      // This is a stub - in production, you would integrate with SMS service
      // For now, we'll use Supabase's built-in OTP
      const { error } = await supabase.auth.signInWithOtp({
        phone: `+91${mobileNumber}`,
      })

      if (error) throw error
      return { success: true }
    } catch (error: any) {
      return { success: false, error: error.message }
    }
  }

  const signOut = async () => {
    try {
      setLoading(true)
      await supabase.auth.signOut()
      setUser(null)
      router.push('/auth/login')
    } catch (error) {
      console.error('Error signing out:', error)
    } finally {
      setLoading(false)
    }
  }

  const value = {
    user,
    loading,
    signIn,
    signUp,
    verifyOTP,
    completeProfile,
    signOut,
    sendOTP,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
