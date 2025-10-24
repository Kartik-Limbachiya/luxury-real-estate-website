// // import { createClient } from '@/lib/supabase/client'
// // import { sendOTPViaMSG91, verifyOTPViaMSG91 } from '@/lib/services/msg91'

// // export async function sendOTP(mobileNumber: string) {
// //   try {
// //     const result = await sendOTPViaMSG91(mobileNumber)
    
// //     if (result.success) {
// //       // Store pending verification in sessionStorage
// //       sessionStorage.setItem('pending_otp_mobile', mobileNumber)
// //       return { success: true }
// //     } else {
// //       return { success: false, error: result.error }
// //     }
// //   } catch (error: any) {
// //     return { success: false, error: error.message }
// //   }
// // }

// // export async function verifyOTP(mobileNumber: string, otp: string) {
// //   const supabase = createClient()
  
// //   try {
// //     // First verify OTP with MSG91
// //     const otpResult = await verifyOTPViaMSG91(mobileNumber, otp)
    
// //     if (!otpResult.success) {
// //       return { success: false, error: otpResult.error }
// //     }

// //     // OTP verified - now check if user exists in our database
// //     const { data: existingUser, error: checkError } = await supabase
// //       .from('users')
// //       .select('id, email, full_name')
// //       .eq('mobile_number', mobileNumber)
// //       .single()

// //     if (existingUser) {
// //       // User exists - create session using their email
// //       const { data, error } = await supabase.auth.signInWithPassword({
// //         email: existingUser.email,
// //         password: `temp_${mobileNumber}_${existingUser.id}`, // Temporary password based on mobile
// //       })

// //       if (error) {
// //         // If password login fails, create a new session using admin
// //         // This requires service role key, so we'll use a different approach
// //         // Create a magic link session instead
// //         const { data: magicData, error: magicError } = await supabase.auth.signInWithOtp({
// //           email: existingUser.email,
// //           options: {
// //             shouldCreateUser: false,
// //           }
// //         })

// //         if (magicError) {
// //           // Fallback: Create session manually
// //           return { 
// //             success: true, 
// //             data: { 
// //               user: { 
// //                 id: existingUser.id,
// //                 email: existingUser.email,
// //               } 
// //             },
// //             isExistingUser: true,
// //           }
// //         }

// //         return { success: true, data: magicData, isExistingUser: true }
// //       }

// //       return { success: true, data, isExistingUser: true }
// //     } else {
// //       // New user - return success, profile completion needed
// //       return { success: true, isExistingUser: false }
// //     }
// //   } catch (error: any) {
// //     return { success: false, error: error.message }
// //   }
// // }

// // export async function checkUserExists(email: string, mobileNumber: string) {
// //   const supabase = createClient()
  
// //   try {
// //     const { data, error } = await supabase
// //       .from('users')
// //       .select('id')
// //       .or(`email.eq.${email},mobile_number.eq.${mobileNumber}`)
// //       .maybeSingle() // Use maybeSingle instead of single to avoid error when not found
    
// //     return { exists: !!data, user: data }
// //   } catch (error) {
// //     return { exists: false, user: null }
// //   }
// // }

// // export async function createUserProfile(data: {
// //   full_name: string
// //   email: string
// //   mobile_number: string
// //   state: string
// //   city: string
// // }) {
// //   const supabase = createClient()
  
// //   try {
// //     // First create auth user with email
// //     const { data: authData, error: authError } = await supabase.auth.signUp({
// //       email: data.email,
// //       password: `temp_${data.mobile_number}_${Date.now()}`, // Temporary password
// //       options: {
// //         data: {
// //           full_name: data.full_name,
// //           mobile_number: data.mobile_number,
// //         }
// //       }
// //     })

// //     if (authError) throw authError
// //     if (!authData.user) throw new Error('Failed to create user')

// //     // Then create profile in users table
// //     const { error: profileError } = await supabase
// //       .from('users')
// //       .insert({
// //         id: authData.user.id,
// //         full_name: data.full_name,
// //         email: data.email,
// //         mobile_number: data.mobile_number,
// //         state: data.state,
// //         city: data.city,
// //         is_verified: true,
// //       })

// //     if (profileError) throw profileError

// //     return { success: true, userId: authData.user.id }
// //   } catch (error: any) {
// //     console.error('Create user profile error:', error)
// //     return { success: false, error: error.message }
// //   }
// // }

// // lib/auth/auth-helpers.ts
// import { createClient } from '@/lib/supabase/client'

// // sendOTP and verifyOTP functions are removed as they are now handled by Server Actions in app/auth/actions.ts

// /**
//  * Checks if a user already exists based on email or mobile number.
//  * This is safe to call from the client side for signup validation.
//  */
// export async function checkUserExists(email: string, mobileNumber: string) {
//   const supabase = createClient()

//   try {
//     // Check if a user exists with either the provided email OR mobile number
//     const { data, error } = await supabase
//       .from('users')
//       .select('id')
//       .or(`email.eq.${email},mobile_number.eq.${mobileNumber}`)
//       .maybeSingle() // Use maybeSingle to return null instead of error if no user found

//     // If there's an error during the query (not related to user not found)
//     if (error && error.code !== 'PGRST116') { // PGRST116: "relation \"users\" does not exist" or similar
//         console.error('Error checking user existence:', error);
//         // Depending on desired behavior, you might want to throw or return differently
//         return { exists: false, user: null };
//     }

//     // Return true if data exists (user found), false otherwise
//     return { exists: !!data, user: data }
//   } catch (error) {
//     // Catch any unexpected errors
//     console.error('Unexpected error in checkUserExists:', error);
//     return { exists: false, user: null }
//   }
// }

// /**
//  * Creates a Supabase Auth user and a corresponding profile in the public 'users' table.
//  * Uses a deterministic temporary password based on the mobile number.
//  */
// export async function createUserProfile(data: {
//   full_name: string
//   email: string
//   mobile_number: string
//   state: string
//   city: string
// }) {
//   const supabase = createClient()

//   try {
//     // Step 1: Create the Supabase Auth user using email and a deterministic password
//     const { data: authData, error: authError } = await supabase.auth.signUp({
//       email: data.email,
//       // Use a deterministic password for later login via OTP verification
//       password: `temp_pass_${data.mobile_number}`,
//       options: {
//         // Store some initial metadata if needed (optional)
//         data: {
//           full_name: data.full_name,
//           mobile_number: data.mobile_number, // Storing here might be redundant if also in 'users' table
//         }
//       }
//     })

//     // Handle Auth signup errors
//     if (authError) {
//       console.error('Supabase auth signup error:', authError);
//       // More specific error handling could be added here based on authError.code
//       throw new Error(authError.message || 'Failed to create auth user');
//     }
//     if (!authData.user) {
//       throw new Error('Auth user creation did not return a user object.')
//     }

//     // Step 2: Insert the user profile into the public 'users' table
//     const { error: profileError } = await supabase
//       .from('users')
//       .insert({
//         id: authData.user.id, // Link to the auth user using its ID
//         full_name: data.full_name,
//         email: data.email,
//         mobile_number: data.mobile_number,
//         state: data.state,
//         city: data.city,
//         is_verified: true, // Mark as verified since OTP was completed
//         // created_at is handled by default value in DB
//         // last_login will be updated on actual login
//       })

//     // Handle Profile insertion errors
//     if (profileError) {
//        console.error('Supabase profile insert error:', profileError);
//        // Attempt to clean up the created auth user if profile insert fails
//        await supabase.auth.admin.deleteUser(authData.user.id); // Requires service_role key - **This MUST be done in a Server Action/Edge Function**
//        throw new Error(profileError.message || 'Failed to create user profile after auth signup.');
//        // **** IMPORTANT: The cleanup MUST happen server-side ****
//        // You might need a separate Server Action for cleanup on failure.
//        // For now, we'll just throw the error.
//     }

//     // If both steps succeed
//     return { success: true, userId: authData.user.id }

//   } catch (error: any) {
//     // Catch errors from either step
//     console.error('Create user profile error:', error)
//     return { success: false, error: error.message }
//   }
// }


// lib/auth/auth-helpers.ts
import { createClient } from '@/lib/supabase/client'

/**
 * Checks if a user already exists in the public 'users' table based on email or mobile number.
 * Safe to call from client side for signup validation.
 */
export async function checkUserExists(email: string, mobileNumber: string) {
  const supabase = createClient() // Use client-side client

  try {
    const { data, error } = await supabase
      .from('users')
      .select('id')
      .or(`email.eq.${email},mobile_number.eq.${mobileNumber}`)
      .maybeSingle() // Returns data or null, doesn't error if not found

    // Log errors other than 'not found'
    if (error && error.code !== 'PGRST116') { // PGRST116 indicates 0 rows found with maybeSingle
      console.error('Error checking user existence:', error.message);
      // Depending on policy, might return { exists: false } even on error
    }

    // Return true if data is not null (user found)
    return { exists: !!data, user: data }
  } catch (error: any) {
    console.error('Unexpected error in checkUserExists:', error.message);
    return { exists: false, user: null } // Fail safe
  }
}

/**
 * Creates a user profile in the public 'users' table for the currently authenticated user.
 * Assumes the Supabase Auth user (auth.users) already exists (created via magic link).
 * Safe to call from client-side component (e.g., complete-profile page) AFTER user is authenticated.
 */
export async function createUserProfile(data: {
  full_name: string
  email: string         // Should match the authenticated user's email
  mobile_number: string // From localStorage initially
  state: string
  city: string
}) {
  const supabase = createClient() // Use client-side client

  try {
    // Get the currently authenticated user session from the client-side helper
    const { data: { user }, error: userError } = await supabase.auth.getUser()

    if (userError || !user) {
      throw new Error('User not authenticated. Cannot create profile.')
    }

    // Ensure the email provided matches the logged-in user for consistency
    if (user.email !== data.email) {
        console.warn(`Attempting to create profile with email (${data.email}) different from authenticated user (${user.email}). Using authenticated user's email.`);
        // Optionally throw an error or just proceed using user.email
    }

    // Insert profile data into the public 'users' table
    const { error: profileError } = await supabase
      .from('users')
      .insert({
        id: user.id, // Use the actual authenticated user's ID
        full_name: data.full_name,
        email: user.email!, // Use authenticated user's email definitively
        mobile_number: data.mobile_number, // Use mobile from input data
        state: data.state,
        city: data.city,
        is_verified: true, // Mark profile as complete/verified
      })

    // Handle potential profile insertion errors (e.g., duplicate ID if run twice)
    if (profileError) {
      console.error('Profile insert error:', profileError);
      // Check for unique violation (code 23505) which might mean profile exists
      if (profileError.code === '23505') {
        throw new Error('User profile already exists.');
      }
      throw new Error(profileError.message || 'Failed to save user profile.');
    }

    // Success
    return { success: true, userId: user.id }

  } catch (error: any) {
    console.error('Create user profile helper error:', error)
    return { success: false, error: error.message }
  }
}