// // 'use client'

// // import { createContext, useContext, useEffect, useState } from 'react'
// // import { User } from '@supabase/supabase-js'
// // import { createClient } from '@/lib/supabase/client'
// // import { useRouter } from 'next/navigation'
// // import { toast } from 'sonner'

// // type UserProfile = {
// //   id: string
// //   full_name: string
// //   email: string
// //   mobile_number: string
// //   state: string
// //   city: string
// //   is_verified: boolean
// // }

// // type AuthContextType = {
// //   user: User | null
// //   profile: UserProfile | null
// //   loading: boolean
// //   signOut: () => Promise<void>
// //   refreshProfile: () => Promise<void>
// // }

// // const AuthContext = createContext<AuthContextType | undefined>(undefined)

// // export function AuthProvider({ children }: { children: React.ReactNode }) {
// //   const [user, setUser] = useState<User | null>(null)
// //   const [profile, setProfile] = useState<UserProfile | null>(null)
// //   const [loading, setLoading] = useState(true)
// //   const router = useRouter()
// //   const supabase = createClient()

// //   const fetchProfile = async (userId: string) => {
// //     try {
// //       const { data, error } = await supabase
// //         .from('users')
// //         .select('*')
// //         .eq('id', userId)
// //         .single()

// //       if (error) throw error
// //       setProfile(data)
      
// //       // Update last_login
// //       await supabase
// //         .from('users')
// //         .update({ last_login: new Date().toISOString() })
// //         .eq('id', userId)
// //     } catch (error) {
// //       console.error('Error fetching profile:', error)
// //       setProfile(null)
// //     }
// //   }

// //   const refreshProfile = async () => {
// //     if (user) {
// //       await fetchProfile(user.id)
// //     }
// //   }

// //   useEffect(() => {
// //     // Get initial session
// //     supabase.auth.getSession().then(({ data: { session } }) => {
// //       setUser(session?.user ?? null)
// //       if (session?.user) {
// //         fetchProfile(session.user.id)
// //       }
// //       setLoading(false)
// //     })

// //     // Listen for auth changes
// //     const {
// //       data: { subscription },
// //     } = supabase.auth.onAuthStateChange((_event, session) => {
// //       setUser(session?.user ?? null)
// //       if (session?.user) {
// //         fetchProfile(session.user.id)
// //       } else {
// //         setProfile(null)
// //       }
// //       setLoading(false)
// //     })

// //     return () => subscription.unsubscribe()
// //   }, [])

// //   const signOut = async () => {
// //     try {
// //       await supabase.auth.signOut()
// //       setUser(null)
// //       setProfile(null)
// //       toast.success('Logged out successfully')
// //       router.push('/auth/login')
// //     } catch (error) {
// //       toast.error('Error logging out')
// //     }
// //   }

// //   return (
// //     <AuthContext.Provider
// //       value={{
// //         user,
// //         profile,
// //         loading,
// //         signOut,
// //         refreshProfile,
// //       }}
// //     >
// //       {children}
// //     </AuthContext.Provider>
// //   )
// // }

// // export const useAuth = () => {
// //   const context = useContext(AuthContext)
// //   if (context === undefined) {
// //     throw new Error('useAuth must be used within an AuthProvider')
// //   }
// //   return context
// // }

// // 'use client'

// // import { createContext, useContext, useEffect, useState } from 'react'
// // import { User } from '@supabase/supabase-js'
// // import { createClient } from '@/lib/supabase/client'
// // import { useRouter } from 'next/navigation'
// // import { toast } from 'sonner'

// // type UserProfile = {
// //   id: string
// //   full_name: string
// //   email: string
// //   mobile_number: string
// //   state: string
// //   city: string
// //   is_verified: boolean
// // }

// // type AuthContextType = {
// //   user: User | null
// //   profile: UserProfile | null
// //   loading: boolean
// //   signOut: () => Promise<void>
// //   refreshProfile: () => Promise<void>
// // }

// // const AuthContext = createContext<AuthContextType | undefined>(undefined)

// // export function AuthProvider({ children }: { children: React.ReactNode }) {
// //   const [user, setUser] = useState<User | null>(null)
// //   const [profile, setProfile] = useState<UserProfile | null>(null)
// //   const [loading, setLoading] = useState(true)
// //   const router = useRouter()
// //   const supabase = createClient()

// //   const fetchProfile = async (userId: string) => {
// //     try {
// //       console.log('[AuthContext] Fetching profile for user:', userId)
      
// //       const { data, error } = await supabase
// //         .from('users')
// //         .select('*')
// //         .eq('id', userId)
// //         .maybeSingle() // Use maybeSingle instead of single

// //       console.log('[AuthContext] Profile fetch result:', { data, error })

// //       if (error) {
// //         console.error('[AuthContext] Error fetching profile:', error)
// //         setProfile(null)
// //         return
// //       }

// //       if (data) {
// //         console.log('[AuthContext] Profile loaded successfully:', data)
// //         setProfile(data)

// //         // Update last_login
// //         await supabase
// //           .from('users')
// //           .update({ last_login: new Date().toISOString() })
// //           .eq('id', userId)
// //       } else {
// //         console.log('[AuthContext] No profile found for user')
// //         setProfile(null)
// //       }
      
// //     } catch (error) {
// //       console.error('[AuthContext] Exception fetching profile:', error)
// //       setProfile(null)
// //     }
// //   }

// //   const refreshProfile = async () => {
// //     console.log('[AuthContext] Refreshing profile...')
// //     if (user) {
// //       await fetchProfile(user.id)
// //     }
// //   }

// //   useEffect(() => {
// //     console.log('[AuthContext] Initializing...')
    
// //     // Get initial session
// //     supabase.auth.getSession().then(({ data: { session } }) => {
// //       console.log('[AuthContext] Initial session:', !!session)
// //       setUser(session?.user ?? null)
// //       if (session?.user) {
// //         fetchProfile(session.user.id)
// //       } else {
// //         setLoading(false)
// //       }
// //     })

// //     // Listen for auth changes
// //     const {
// //       data: { subscription },
// //     } = supabase.auth.onAuthStateChange((_event, session) => {
// //       console.log('[AuthContext] Auth state changed:', _event, !!session)
// //       setUser(session?.user ?? null)
// //       if (session?.user) {
// //         fetchProfile(session.user.id).finally(() => setLoading(false))
// //       } else {
// //         setProfile(null)
// //         setLoading(false)
// //       }
// //     })

// //     return () => subscription.unsubscribe()
// //   }, [])

// //   // Mark loading as false once profile fetch completes
// //   useEffect(() => {
// //     if (user && profile) {
// //       console.log('[AuthContext] User and profile loaded, setting loading to false')
// //       setLoading(false)
// //     } else if (user && profile === null) {
// //       // User exists but no profile yet
// //       console.log('[AuthContext] User exists but no profile loaded yet')
// //       setLoading(false)
// //     }
// //   }, [user, profile])

// //   const signOut = async () => {
// //     try {
// //       await supabase.auth.signOut()
// //       setUser(null)
// //       setProfile(null)
// //       toast.success('Logged out successfully')
// //       router.push('/auth/login')
// //     } catch (error) {
// //       toast.error('Error logging out')
// //     }
// //   }

// //   return (
// //     <AuthContext.Provider
// //       value={{
// //         user,
// //         profile,
// //         loading,
// //         signOut,
// //         refreshProfile,
// //       }}
// //     >
// //       {children}
// //     </AuthContext.Provider>
// //   )
// // }

// // export const useAuth = () => {
// //   const context = useContext(AuthContext)
// //   if (context === undefined) {
// //     throw new Error('useAuth must be used within an AuthProvider')
// //   }
// //   return context
// // }



// 'use client'

// import { createContext, useContext, useEffect, useState } from 'react'
// import { User } from '@supabase/supabase-js'
// import { createClient } from '@/lib/supabase/client'
// import { useRouter } from 'next/navigation'
// import { toast } from 'sonner'

// type UserProfile = {
//   id: string
//   full_name: string
//   email: string
//   mobile_number: string
//   state: string
//   city: string
//   is_verified: boolean
// }

// type AuthContextType = {
//   user: User | null
//   profile: UserProfile | null
//   loading: boolean
//   signOut: () => Promise<void>
//   refreshProfile: () => Promise<void>
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined)

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = useState<User | null>(null)
//   const [profile, setProfile] = useState<UserProfile | null>(null)
//   const [loading, setLoading] = useState(true)
//   const router = useRouter()
//   const supabase = createClient()

//   const fetchProfile = async (userId: string): Promise<void> => {
//     try {
//       console.log('[AuthContext] Fetching profile for user:', userId)
      
//       const { data, error } = await supabase
//         .from('users')
//         .select('*')
//         .eq('id', userId)
//         .maybeSingle()

//       console.log('[AuthContext] Profile fetch result:', { data, error })

//       if (error) {
//         console.error('[AuthContext] Error fetching profile:', error)
//         setProfile(null)
//         return
//       }

//       if (data) {
//         console.log('[AuthContext] Profile loaded successfully:', data)
//         setProfile(data)

//         // Update last_login (don't await this)
//         supabase
//           .from('users')
//           .update({ last_login: new Date().toISOString() })
//           .eq('id', userId)
//           .then(() => console.log('[AuthContext] Last login updated'))
//           .catch(err => console.error('[AuthContext] Error updating last login:', err))
//       } else {
//         console.log('[AuthContext] No profile found for user')
//         setProfile(null)
//       }
      
//     } catch (error) {
//       console.error('[AuthContext] Exception fetching profile:', error)
//       setProfile(null)
//     }
//   }

//   const refreshProfile = async () => {
//     console.log('[AuthContext] Refreshing profile...')
//     if (user) {
//       setLoading(true)
//       await fetchProfile(user.id)
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     console.log('[AuthContext] Initializing...')
    
//     let mounted = true

//     // Get initial session
//     const initializeAuth = async () => {
//       try {
//         const { data: { session } } = await supabase.auth.getSession()
//         console.log('[AuthContext] Initial session:', !!session)
        
//         if (!mounted) return

//         setUser(session?.user ?? null)
        
//         if (session?.user) {
//           await fetchProfile(session.user.id)
//         }
//       } catch (error) {
//         console.error('[AuthContext] Error initializing auth:', error)
//       } finally {
//         if (mounted) {
//           setLoading(false)
//         }
//       }
//     }

//     initializeAuth()

//     // Listen for auth changes
//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange(async (_event, session) => {
//       console.log('[AuthContext] Auth state changed:', _event, !!session)
      
//       if (!mounted) return

//       setUser(session?.user ?? null)
      
//       if (session?.user) {
//         setLoading(true)
//         await fetchProfile(session.user.id)
//         setLoading(false)
//       } else {
//         setProfile(null)
//         setLoading(false)
//       }
//     })

//     return () => {
//       mounted = false
//       subscription.unsubscribe()
//     }
//   }, [])

//   const signOut = async () => {
//     try {
//       await supabase.auth.signOut()
//       setUser(null)
//       setProfile(null)
//       toast.success('Logged out successfully')
//       router.push('/auth/login')
//     } catch (error) {
//       toast.error('Error logging out')
//     }
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         profile,
//         loading,
//         signOut,
//         refreshProfile,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export const useAuth = () => {
//   const context = useContext(AuthContext)
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider')
//   }
//   return context
// }


'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

type UserProfile = {
  id: string
  full_name: string
  email: string
  mobile_number: string
  state: string
  city: string
  is_verified: boolean
}

type AuthContextType = {
  user: User | null
  profile: UserProfile | null
  loading: boolean
  signOut: () => Promise<void>
  refreshProfile: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  const fetchProfile = async (userId: string): Promise<void> => {
    try {
      console.log('[AuthContext] Fetching profile for user:', userId)
      
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .maybeSingle()

      console.log('[AuthContext] Profile fetch result:', { 
        hasData: !!data, 
        error: error?.message,
        isVerified: data?.is_verified 
      })

      if (error) {
        console.error('[AuthContext] Error fetching profile:', error)
        setProfile(null)
        return
      }

      if (data) {
        console.log('[AuthContext] Profile loaded successfully')
        setProfile(data)

        // Update last_login (fire and forget)
        supabase
          .from('users')
          .update({ last_login: new Date().toISOString() })
          .eq('id', userId)
          .catch(err => console.error('[AuthContext] Error updating last login:', err))
      } else {
        console.log('[AuthContext] No profile found for user')
        setProfile(null)
      }
      
    } catch (error) {
      console.error('[AuthContext] Exception fetching profile:', error)
      setProfile(null)
    }
  }

  const refreshProfile = async () => {
    console.log('[AuthContext] Refreshing profile...')
    if (user) {
      await fetchProfile(user.id)
    }
  }

  useEffect(() => {
    console.log('[AuthContext] Initializing auth context...')
    
    let mounted = true
    let timeoutId: NodeJS.Timeout

    const initializeAuth = async () => {
      try {
        // Set a timeout to prevent infinite loading
        timeoutId = setTimeout(() => {
          if (mounted && loading) {
            console.warn('[AuthContext] Loading timeout reached, forcing loading to false')
            setLoading(false)
          }
        }, 5000) // 5 second timeout

        const { data: { session }, error } = await supabase.auth.getSession()
        
        console.log('[AuthContext] Initial session check:', { 
          hasSession: !!session, 
          hasUser: !!session?.user,
          error: error?.message 
        })
        
        if (!mounted) return

        if (error) {
          console.error('[AuthContext] Session error:', error)
          setUser(null)
          setProfile(null)
          setLoading(false)
          return
        }

        setUser(session?.user ?? null)
        
        if (session?.user) {
          console.log('[AuthContext] User authenticated, fetching profile...')
          await fetchProfile(session.user.id)
        } else {
          console.log('[AuthContext] No authenticated user')
        }
        
      } catch (error) {
        console.error('[AuthContext] Error initializing auth:', error)
      } finally {
        if (mounted) {
          clearTimeout(timeoutId)
          console.log('[AuthContext] Initialization complete, setting loading to false')
          setLoading(false)
        }
      }
    }

    initializeAuth()

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('[AuthContext] Auth state changed:', event, { hasSession: !!session })
      
      if (!mounted) return

      setUser(session?.user ?? null)
      
      if (session?.user) {
        setLoading(true)
        await fetchProfile(session.user.id)
        setLoading(false)
      } else {
        setProfile(null)
        setLoading(false)
      }
    })

    return () => {
      mounted = false
      clearTimeout(timeoutId)
      subscription.unsubscribe()
      console.log('[AuthContext] Cleanup complete')
    }
  }, []) // Empty dependency array - only run once

  const signOut = async () => {
    try {
      await supabase.auth.signOut()
      setUser(null)
      setProfile(null)
      toast.success('Logged out successfully')
      router.push('/auth/login')
    } catch (error) {
      console.error('[AuthContext] Sign out error:', error)
      toast.error('Error logging out')
    }
  }

  console.log('[AuthContext] Current state:', { 
    hasUser: !!user, 
    hasProfile: !!profile, 
    loading,
    isVerified: profile?.is_verified 
  })

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        loading,
        signOut,
        refreshProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}