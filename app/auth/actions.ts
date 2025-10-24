// // app/auth/actions.ts
// 'use server'

// import { createClient } from '@/lib/supabase/server' // User-context server client
// import { createAdminClient } from '@/lib/supabase/admin' // Admin client (bypasses RLS)
// import { Database } from '@/lib/supabase/database.types'

// const MSG91_AUTH_KEY = process.env.NEXT_PUBLIC_MSG91_AUTH_KEY
// const MSG91_TEMPLATE_ID = process.env.NEXT_PUBLIC_MSG91_TEMPLATE_ID

// /**
//  * Sends an OTP via MSG91 and stores it in the database.
//  */
// export async function sendOtpAction(mobileNumber: string) {
//   try {
//     // Use the ADMIN client to bypass RLS for the 'otps' table
//     const supabaseAdmin = createAdminClient()
//     const otp = Math.floor(100000 + Math.random() * 900000).toString()
//     const expiresAt = new Date(Date.now() + 10 * 60 * 1000).toISOString() // 10 minutes

//     // Send OTP via MSG91 (This is now on the server!)
//     const response = await fetch('https://control.msg91.com/api/v5/otp', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         authkey: MSG91_AUTH_KEY!,
//       },
//       body: JSON.stringify({
//         template_id: MSG91_TEMPLATE_ID,
//         mobile: `91${mobileNumber}`,
//         otp: otp,
//       }),
//     })

//     const data = await response.json()

//     if (!response.ok) {
//       throw new Error(data.message || 'Failed to send OTP')
//     }

//     // Store OTP in Supabase using the ADMIN client
//     const { error: dbError } = await supabaseAdmin.from('otps').upsert(
//       {
//         mobile_number: mobileNumber,
//         otp_code: otp, // SECURITY NOTE: In production, hash this!
//         expires_at: expiresAt,
//         attempts: 0,
//       },
//       { onConflict: 'mobile_number' }
//     )

//     if (dbError) {
//       throw new Error('Database error: ' + dbError.message)
//     }

//     return { success: true }
//   } catch (error: any) {
//     console.error('sendOtpAction Error:', error)
//     return { success: false, error: error.message }
//   }
// }

// /**
//  * Verifies an OTP for the SIGNUP flow.
//  * It just checks the code.
//  */
// export async function verifySignupOtpAction(
//   mobileNumber: string,
//   otp: string
// ): Promise<{ success: boolean; error?: string }> {
//   try {
//     // Use the ADMIN client to read/delete from 'otps' table
//     const supabaseAdmin = createAdminClient()

//     // Get OTP from DB
//     const { data: otpData, error: dbError } = await supabaseAdmin
//       .from('otps')
//       .select('*')
//       .eq('mobile_number', mobileNumber)
//       .single()

//     if (dbError || !otpData) {
//       return { success: false, error: 'OTP not found. Please request a new one.' }
//     }

//     // Check expiration
//     if (new Date() > new Date(otpData.expires_at)) {
//       await supabaseAdmin.from('otps').delete().eq('id', otpData.id)
//       return { success: false, error: 'OTP expired. Please request a new one.' }
//     }

//     // Check attempts
//     if (otpData.attempts >= 3) {
//       await supabaseAdmin.from('otps').delete().eq('id', otpData.id)
//       return {
//         success: false,
//         error: 'Too many incorrect attempts. Please request a new OTP.',
//       }
//     }

//     // Verify OTP
//     if (otpData.otp_code !== otp) {
//       await supabaseAdmin
//         .from('otps')
//         .update({ attempts: otpData.attempts + 1 })
//         .eq('id', otpData.id)
//       return { success: false, error: 'Invalid OTP. Please try again.' }
//     }

//     // OTP verified successfully - clean up
//     await supabaseAdmin.from('otps').delete().eq('id', otpData.id)
//     return { success: true }
//   } catch (error: any) {
//     return { success: false, error: error.message || 'Verification failed' }
//   }
// }

// /**
//  * Verifies an OTP for the LOGIN flow.
//  * If successful, it signs the user in.
//  */
// export async function verifyLoginOtpAction(
//   mobileNumber: string,
//   otp: string
// ): Promise<{ success: boolean; error?: string }> {
  
//   // Use the REGULAR server client for user-context operations
//   const supabase = createClient() 
//   // Use the ADMIN client for 'otps' table and 'users' table lookup
//   const supabaseAdmin = createAdminClient()

//   try {
//     // 1. Verify the OTP (using admin client, via the function)
//     const verifyResult = await verifySignupOtpAction(mobileNumber, otp) // Reuses admin client
//     if (!verifyResult.success) {
//       return verifyResult
//     }

//     // 2. Find the user by mobile number (using admin client to read 'users' table)
//     const { data: user, error: userError } = await supabaseAdmin
//       .from('users')
//       .select('id, email')
//       .eq('mobile_number', mobileNumber)
//       .single()

//     if (userError || !user) {
//       return { success: false, error: 'User not found.' }
//     }

//     // 3. Log the user in (using the REGULAR user-context client)
//     const { error: signInError } = await supabase.auth.signInWithPassword({
//       email: user.email,
//       password: `temp_pass_${mobileNumber}`, // Use the deterministic password
//     })

//     if (signInError) {
//       return { success: false, error: 'Login failed. Please try again.' }
//     }

//     // 4. Update last_login (using admin client to write to 'users' table)
//     await supabaseAdmin
//       .from('users')
//       .update({ last_login: new Date().toISOString() })
//       .eq('id', user.id)

//     return { success: true }
//   } catch (error: any) {
//     return { success: false, error: error.message || 'Login failed' }
//   }
// }

// // app/auth/actions.ts
// 'use server'

// import { createClient } from '@/lib/supabase/server'
// import { createAdminClient } from '@/lib/supabase/admin' // Keep admin client for profile operations if needed later
// import { Database } from '@/lib/supabase/database.types'
// import { redirect } from 'next/navigation' // For redirecting after link click

// /**
//  * Sends a Magic Link email via Supabase for login or signup confirmation.
//  */
// export async function sendMagicLinkAction(email: string) {
//   try {
//     const supabase = createClient()
//     // REMOVED explicit redirectUrl construction

//     const { error } = await supabase.auth.signInWithOtp({
//       email: email,
//       options: {
//         // REMOVED emailRedirectTo - let Supabase use the default Site URL + /auth/callback
//         shouldCreateUser: true,
//       },
//     })

//     if (error) {
//       console.error('Supabase signInWithOtp Error:', error)
//       // Check for specific rate limit error
//       if (error.message.includes('rate limit')) {
//            throw new Error('Rate limit exceeded. Please wait before trying again.');
//        }
//       throw new Error(error.message || 'Failed to send magic link.')
//     }

//     return { success: true }
//   } catch (error: any) {
//     console.error('sendMagicLinkAction Error:', error)
//     return { success: false, error: error.message }
//   }
// }
// // We no longer need verifyOtpAction as Supabase handles it via the callback route

// /**
//  * Checks if a user exists in the 'users' table (needed for profile completion logic).
//  * Uses admin client to bypass RLS for this check.
//  */
// export async function checkUserProfileExistsAction(userId: string): Promise<{ exists: boolean }> {
//     try {
//         const supabaseAdmin = createAdminClient();
//         const { data, error } = await supabaseAdmin
//             .from('users')
//             .select('id')
//             .eq('id', userId)
//             .maybeSingle();

//         if (error && error.code !== 'PGRST116') { // Ignore "relation does not exist" type errors during checks
//             console.error("Error checking profile existence:", error);
//             return { exists: false }; // Fail safe
//         }
//         return { exists: !!data };
//     } catch (error) {
//         console.error("Unexpected error in checkUserProfileExistsAction:", error);
//         return { exists: false };
//     }
// }

// // app/auth/actions.ts
// 'use server'

// import { createClient } from '@/lib/supabase/server'
// import { createAdminClient } from '@/lib/supabase/admin'
// import { Database } from '@/lib/supabase/database.types'
// // No longer need redirect from 'next/navigation' here

// export async function sendMagicLinkAction(email: string) {
//   try {
//     const supabase = createClient()
    
//     // Build the correct redirect URL
//     const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
//     const redirectUrl = `${baseUrl}/auth/callback`

//     console.log('[sendMagicLinkAction] Sending magic link to:', email)
//     console.log('[sendMagicLinkAction] Redirect URL:', redirectUrl)

//     const { error } = await supabase.auth.signInWithOtp({
//       email: email,
//       options: {
//         emailRedirectTo: redirectUrl,
//         shouldCreateUser: true, // Allow signup via magic link
//       },
//     })

//     if (error) {
//       console.error('[sendMagicLinkAction] Supabase error:', error)
//       throw new Error(error.message || 'Failed to send magic link.')
//     }

//     console.log('[sendMagicLinkAction] Magic link sent successfully')
//     return { success: true }
//   } catch (error: any) {
//     console.error('[sendMagicLinkAction] Unexpected error:', error)
//     return { success: false, error: error.message }
//   }
// }
// // Ensure checkUserProfileExistsAction is still here
// export async function checkUserProfileExistsAction(userId: string): Promise<{ exists: boolean }> {
//     try {
//         const supabaseAdmin = createAdminClient();
//         const { data, error } = await supabaseAdmin
//             .from('users')
//             .select('id')
//             .eq('id', userId)
//             .maybeSingle();

//         if (error && error.code !== 'PGRST116') {
//             console.error("Error checking profile existence:", error);
//             return { exists: false };
//         }
//         return { exists: !!data };
//     } catch (error) {
//         console.error("Unexpected error in checkUserProfileExistsAction:", error);
//         return { exists: false };
//     }
// }
// 'use server'

// import { createClient } from '@/lib/supabase/route-handler' // <-- CHANGED
// import { createClient as createAdminClient } from '@/lib/supabase/admin'
// import { Database } from '@/lib/supabase/database.types'

// /**
//  * Sends a Magic Link email via Supabase
//  */
// export async function sendMagicLinkAction(email: string) {
//   try {
//     const supabase = createClient()
    
//     const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
//     const redirectUrl = `${baseUrl}/auth/callback`

//     console.log('[sendMagicLinkAction] Sending to:', email)
//     console.log('[sendMagicLinkAction] Redirect URL:', redirectUrl)

//     const { error } = await supabase.auth.signInWithOtp({
//       email: email,
//       options: {
//         emailRedirectTo: redirectUrl,
//         shouldCreateUser: true,
//       },
//     })

//     if (error) {
//       console.error('[sendMagicLinkAction] Error:', error)
//       throw new Error(error.message)
//     }

//     console.log('[sendMagicLinkAction] Success')
//     return { success: true }
//   } catch (error: any) {
//     console.error('[sendMagicLinkAction] Catch:', error)
//     return { success: false, error: error.message }
//   }
// }

// /**
//  * Checks if user profile exists
//  */
// export async function checkUserProfileExistsAction(userId: string): Promise<{ exists: boolean }> {
//   try {
//     const supabaseAdmin = createAdminClient()
    
//     const { data, error } = await supabaseAdmin
//       .from('users')
//       .select('id')
//       .eq('id', userId)
//       .maybeSingle()

//     if (error && error.code !== 'PGRST116') {
//       console.error('[checkUserProfileExistsAction] Error:', error)
//       return { exists: false }
//     }
    
//     return { exists: !!data }
//   } catch (error) {
//     console.error('[checkUserProfileExistsAction] Catch:', error)
//     return { exists: false }
//   }
// }

'use server'

import { createClient } from '@/lib/supabase/route-handler'
import { createAdminClient } from '@/lib/supabase/admin'
import { Database } from '@/lib/supabase/database.types'

/**
 * Sends a Magic Link for signup with user metadata
 */
export async function sendMagicLinkWithMetadataAction(
  email: string,
  metadata: { full_name: string; mobile_number: string }
) {
  try {
    const supabase = createClient()
    
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    const redirectUrl = `${baseUrl}/auth/callback`

    console.log('[sendMagicLinkWithMetadataAction] Sending to:', email)
    console.log('[sendMagicLinkWithMetadataAction] Metadata:', metadata)

    const { error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: redirectUrl,
        shouldCreateUser: true,
        data: {
          full_name: metadata.full_name,
          mobile_number: metadata.mobile_number,
          signup_flow: true, // Flag to identify signup vs login
        },
      },
    })

    if (error) {
      console.error('[sendMagicLinkWithMetadataAction] Error:', error)
      throw new Error(error.message)
    }

    console.log('[sendMagicLinkWithMetadataAction] Success')
    return { success: true }
  } catch (error: any) {
    console.error('[sendMagicLinkWithMetadataAction] Catch:', error)
    return { success: false, error: error.message }
  }
}

/**
 * Sends a Magic Link email via Supabase (for login)
 */
export async function sendMagicLinkAction(email: string) {
  try {
    const supabase = createClient()
    
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    const redirectUrl = `${baseUrl}/auth/callback`

    console.log('[sendMagicLinkAction] Sending to:', email)
    console.log('[sendMagicLinkAction] Redirect URL:', redirectUrl)

    const { error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: redirectUrl,
        shouldCreateUser: true,
      },
    })

    if (error) {
      console.error('[sendMagicLinkAction] Error:', error)
      throw new Error(error.message)
    }

    console.log('[sendMagicLinkAction] Success')
    return { success: true }
  } catch (error: any) {
    console.error('[sendMagicLinkAction] Catch:', error)
    return { success: false, error: error.message }
  }
}

/**
 * Checks if user profile exists
 */
export async function checkUserProfileExistsAction(userId: string): Promise<{ exists: boolean }> {
  try {
    const supabaseAdmin = createAdminClient()
    
    const { data, error } = await supabaseAdmin
      .from('users')
      .select('id')
      .eq('id', userId)
      .maybeSingle()

    if (error && error.code !== 'PGRST116') {
      console.error('[checkUserProfileExistsAction] Error:', error)
      return { exists: false }
    }
    
    return { exists: !!data }
  } catch (error) {
    console.error('[checkUserProfileExistsAction] Catch:', error)
    return { exists: false }
  }
}