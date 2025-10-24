// // // // app/auth/callback/route.ts
// // // import { createClient } from '@/lib/supabase/server'
// // // import { NextResponse } from 'next/server'
// // // import type { NextRequest } from 'next/server'
// // // import { checkUserProfileExistsAction } from '@/app/auth/actions'

// // // export async function GET(request: NextRequest) {
// // //   const requestUrl = new URL(request.url)
// // //   const code = requestUrl.searchParams.get('code')
// // //   const next = requestUrl.searchParams.get('next') ?? '/' // Default redirect after login

// // //   console.log('[Callback Route] Received request. Code:', code); // Log 1

// // //   if (code) {
// // //     const supabase = createClient()
// // //     // Attempt to exchange the code for a session
// // //     const { data: { session }, error } = await supabase.auth.exchangeCodeForSession(code)

// // //     console.log('[Callback Route] Session exchange result:', { session: !!session, error: error?.message || null }); // Log 2

// // //     if (error) {
// // //       console.error('[Callback Route] Error exchanging code for session:', error.message)
// // //       // Redirect to login with a specific error message
// // //       const errorDescription = error.message.toLowerCase().includes('code not found') ? 'Invalid or expired link.' : 'Authentication failed.';
// // //       const errorUrl = new URL(`/auth/login?error=${encodeURIComponent(errorDescription + ' Please try again.')}`, requestUrl.origin)
// // //       console.log('[Callback Route] Redirecting to error URL:', errorUrl.toString()); // Log Error Redirect
// // //       return NextResponse.redirect(errorUrl)
// // //     }

// // //     if (session?.user) {
// // //         console.log('[Callback Route] Session obtained for user:', session.user.id); // Log 3
// // //         try {
// // //             // Check if the user profile exists in your public 'users' table
// // //             const { exists } = await checkUserProfileExistsAction(session.user.id);
// // //             console.log('[Callback Route] Profile exists check result:', exists); // Log 4

// // //             if (exists) {
// // //                 // User has a profile, redirect to intended page or home
// // //                 console.log('[Callback Route] Redirecting existing user to:', next); // Log 5
// // //                 const redirectURL = new URL(next, requestUrl.origin);
// // //                 return NextResponse.redirect(redirectURL)
// // //             } else {
// // //                 // User authenticated but profile needs completion
// // //                  console.log('[Callback Route] Redirecting new user to complete profile'); // Log 6
// // //                  // Ensure localStorage 'pending_signup_data' was set during signup
// // //                  const completeProfileUrl = new URL('/auth/complete-profile', requestUrl.origin)
// // //                  return NextResponse.redirect(completeProfileUrl)
// // //             }
// // //         } catch (profileCheckError: any) {
// // //              console.error('[Callback Route] Error checking user profile existence:', profileCheckError.message); // Log 7
// // //              const errorUrl = new URL(`/auth/login?error=${encodeURIComponent('Failed to check profile. Please try again.')}`, requestUrl.origin)
// // //              console.log('[Callback Route] Redirecting to error URL (profile check failed):', errorUrl.toString());
// // //              return NextResponse.redirect(errorUrl)
// // //         }
// // //     } else {
// // //         // Fallback case: No error, but no session either (shouldn't happen often)
// // //         console.error('[Callback Route] Session exchange successful but no session/user object found.'); // Log 8
// // //          const errorUrl = new URL(`/auth/login?error=${encodeURIComponent('Authentication session error. Please try again.')}`, requestUrl.origin)
// // //          console.log('[Callback Route] Redirecting to error URL (no session):', errorUrl.toString());
// // //         return NextResponse.redirect(errorUrl)
// // //     }
// // //   } else {
// // //     // No 'code' parameter in the URL
// // //     console.log('[Callback Route] No code found in callback URL.'); // Log 9
// // //     const errorUrl = new URL(`/auth/login?error=${encodeURIComponent('Invalid callback URL. Please try logging in again.')}`, requestUrl.origin)
// // //     console.log('[Callback Route] Redirecting to error URL (no code):', errorUrl.toString());
// // //     return NextResponse.redirect(errorUrl)
// // //   }
// // // }

// // // app/auth/callback/route.ts
// // import { createClient } from '@/lib/supabase/server' // Use server client here
// // import { NextResponse } from 'next/server'
// // import type { NextRequest } from 'next/server'

// // export async function GET(request: NextRequest) {
// //   const requestUrl = new URL(request.url)
// //   const code = requestUrl.searchParams.get('code')
// //   const next = requestUrl.searchParams.get('next') ?? '/' // Intended redirect after successful login

// //   console.log('[Callback Route] Received request. Code parameter present:', !!code);

// //   if (code) {
// //     const supabase = createClient() // Create server client

// //     // Exchange the code for a session
// //     const { data: { session }, error } = await supabase.auth.exchangeCodeForSession(code)

// //     console.log('[Callback Route] Session exchange attempt complete. Session obtained:', !!session, 'Error:', error?.message || 'None');

// //     if (error) {
// //       console.error('[Callback Route] Error exchanging code for session:', error.message)
// //       // Redirect back to login with a generic error
// //       return NextResponse.redirect(
// //         new URL(`/auth/login?error=${encodeURIComponent('Authentication link invalid or expired. Please try again.')}`, requestUrl.origin)
// //       )
// //     }

// //     if (session?.user) {
// //         console.log('[Callback Route] Session obtained for user:', session.user.id);
// //         // Now check if a profile exists in the public 'users' table
// //         try {
// //             // Use the same server client to check the profile
// //             const { data: profile, error: profileError } = await supabase
// //                 .from('users')
// //                 .select('id, is_verified') // Select only needed fields
// //                 .eq('id', session.user.id)
// //                 .maybeSingle(); // Use maybeSingle to handle null gracefully

// //              console.log('[Callback Route] Profile check result. Profile found:', !!profile, 'Error:', profileError?.message || 'None');

// //             if (profileError && profileError.code !== 'PGRST116') { // Handle potential DB errors during check
// //                 console.error('[Callback Route] Error checking user profile:', profileError.message);
// //                 throw new Error('Database error checking profile.'); // Throw to be caught below
// //             }

// //             // Redirect based on profile status
// //             if (profile?.is_verified) {
// //                 // Profile exists and is verified - redirect to intended destination (usually home)
// //                 console.log('[Callback Route] User has verified profile, redirecting to:', next);
// //                 return NextResponse.redirect(new URL(next, requestUrl.origin))
// //             } else {
// //                 // No profile found, or profile exists but is_verified is false/null
// //                 // This means the user needs to complete the profile creation step
// //                 console.log('[Callback Route] User needs profile completion, redirecting to /auth/complete-profile');
// //                 // Make sure pending_signup_data was set in localStorage during signup step
// //                 return NextResponse.redirect(new URL('/auth/complete-profile', requestUrl.origin))
// //             }
// //         } catch (dbError: any) {
// //              console.error('[Callback Route] Caught DB error during profile check:', dbError.message);
// //              return NextResponse.redirect(
// //                 new URL(`/auth/login?error=${encodeURIComponent('Error checking profile. Please try again.')}`, requestUrl.origin)
// //             )
// //         }
// //     } else {
// //         // Fallback: Exchange didn't error, but no session returned (unlikely)
// //         console.error('[Callback Route] Code exchange successful but no session object returned.');
// //         return NextResponse.redirect(
// //             new URL(`/auth/login?error=${encodeURIComponent('Session creation failed. Please try again.')}`, requestUrl.origin)
// //         )
// //     }
// //   } else {
// //     // No 'code' parameter found in the URL query string
// //     console.log('[Callback Route] No code parameter found in callback URL.');
// //     return NextResponse.redirect(
// //       new URL(`/auth/login?error=${encodeURIComponent('Invalid callback request.')}`, requestUrl.origin)
// //     )
// //   }
// // }

// // app/auth/callback/route.ts
// import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'; // <--- Use this client
// import { cookies } from 'next/headers'; // <--- Import cookies helper
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import type { Database } from '@/lib/supabase/database.types'; // Import Database type
// // Keep action import if needed, though we can query profile here too
// import { checkUserProfileExistsAction } from '@/app/auth/actions';

// export async function GET(request: NextRequest) {
//   const requestUrl = new URL(request.url);
//   const code = requestUrl.searchParams.get('code');
//   const next = requestUrl.searchParams.get('next') ?? '/'; // Default redirect after success

//   console.log('[Callback Route] Received request. Code parameter present:', !!code);

//   if (code) {
//     // Use createRouteHandlerClient, requires cookies()
//     const cookieStore = cookies();
//     const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore });

//     // Attempt to exchange the authorization code for a session
//     const { data: { session }, error } = await supabase.auth.exchangeCodeForSession(code);

//     console.log('[Callback Route] Session exchange attempt complete. Session obtained:', !!session, 'Error:', error?.message || 'None');

//     if (error) {
//       console.error('[Callback Route] Error exchanging code for session:', error.message);
//       // Provide a clearer error message based on the actual error if possible
//       const errorMessage = error.message.includes('verifier')
//         ? 'Authentication flow error. Please try logging in again.'
//         : 'Authentication link invalid or expired. Please try again.';
//       return NextResponse.redirect(
//         new URL(`/auth/login?error=${encodeURIComponent(errorMessage)}`, requestUrl.origin)
//       );
//     }

//     if (session?.user) {
//         console.log('[Callback Route] Session obtained for user:', session.user.id);
//         // Now check if a profile exists in the public 'users' table
//         // We can use the same route handler client here, respects RLS if needed
//         // Or stick with the Server Action which uses Admin Client (bypasses RLS)
//         try {
//             // Using Server Action (requires Admin Client if RLS restricts SELECT)
//              const { exists } = await checkUserProfileExistsAction(session.user.id);

//             // Alternative: Using route handler client (respects RLS - requires SELECT policy)
//             // const { data: profile, error: profileError } = await supabase
//             //     .from('users')
//             //     .select('id, is_verified')
//             //     .eq('id', session.user.id)
//             //     .maybeSingle();
//             // const exists = !!profile;
//             // if (profileError) throw profileError; // Handle DB error separately

//             console.log('[Callback Route] Profile exists check result:', exists);

//             if (exists) {
//                 // Profile exists - redirect to intended destination (usually home)
//                 console.log('[Callback Route] User has profile, redirecting to:', next);
//                 return NextResponse.redirect(new URL(next, requestUrl.origin));
//             } else {
//                 // No profile found - user needs to complete the profile creation step
//                 console.log('[Callback Route] User needs profile completion, redirecting to /auth/complete-profile');
//                 // Ensure pending_signup_data was set in localStorage during signup step
//                 return NextResponse.redirect(new URL('/auth/complete-profile', requestUrl.origin));
//             }
//         } catch (dbError: any) {
//              console.error('[Callback Route] Caught DB error during profile check:', dbError.message);
//              return NextResponse.redirect(
//                 new URL(`/auth/login?error=${encodeURIComponent('Error checking profile. Please try again.')}`, requestUrl.origin)
//             );
//         }
//     } else {
//         // Fallback: Exchange didn't error, but no session returned
//         console.error('[Callback Route] Code exchange successful but no session object returned.');
//         return NextResponse.redirect(
//             new URL(`/auth/login?error=${encodeURIComponent('Session creation failed. Please try again.')}`, requestUrl.origin)
//         );
//     }
//   } else {
//     // No 'code' parameter found in the URL query string
//     console.log('[Callback Route] No code parameter found in callback URL.');
//     return NextResponse.redirect(
//       new URL(`/auth/login?error=${encodeURIComponent('Invalid callback request.')}`, requestUrl.origin)
//     );
//   }
// }

// // app/auth/callback/route.ts
// import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
// import { cookies } from 'next/headers';
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import type { Database } from '@/lib/supabase/database.types';

// export async function GET(request: NextRequest) {
//   const requestUrl = new URL(request.url);
//   const code = requestUrl.searchParams.get('code');
//   const next = requestUrl.searchParams.get('next') ?? '/'; // Default redirect after success

//   console.log('[Callback Route - Simple] Received request. Code:', code);

//   if (code) {
//     const cookieStore = cookies();
//     const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore });

//     // Attempt to exchange the authorization code for a session
//     const { data: { session }, error } = await supabase.auth.exchangeCodeForSession(code);

//     console.log('[Callback Route - Simple] Session exchange result:', { session: !!session, error: error?.message || null });

//     if (error) {
//       console.error('[Callback Route - Simple] Error exchanging code:', error.message);
//       const errorMessage = 'Authentication failed. Link invalid/expired or session issue.';
//       return NextResponse.redirect(
//         new URL(`/auth/login?error=${encodeURIComponent(errorMessage)}`, requestUrl.origin)
//       );
//     }

//     if (session) {
//         // *** TEMPORARILY JUST REDIRECT HOME ***
//         // We'll add the profile check back later if this works.
//         console.log('[Callback Route - Simple] Session obtained! Redirecting home.');
//         return NextResponse.redirect(new URL(next, requestUrl.origin));
//     } else {
//         // Fallback: No error, but no session
//         console.error('[Callback Route - Simple] Exchange successful but no session object.');
//         return NextResponse.redirect(
//             new URL(`/auth/login?error=${encodeURIComponent('Session creation failed.')}`, requestUrl.origin)
//         );
//     }
//   } else {
//     // No 'code' parameter
//     console.log('[Callback Route - Simple] No code parameter found.');
//     return NextResponse.redirect(
//       new URL(`/auth/login?error=${encodeURIComponent('Invalid callback request.')}`, requestUrl.origin)
//     );
//   }
// }

// // app/auth/callback/route.ts
// import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
// import { cookies } from 'next/headers';
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import type { Database } from '@/lib/supabase/database.types';
// // Import the action to check profile existence
// import { checkUserProfileExistsAction } from '@/app/auth/actions';

// export async function GET(request: NextRequest) {
//   const requestUrl = new URL(request.url);
//   const code = requestUrl.searchParams.get('code');
//   const next = requestUrl.searchParams.get('next') ?? '/'; // Default redirect after successful login

//   console.log('[Callback Route - Full Logic] Received request. Code parameter present:', !!code);

//   if (code) {
//     const cookieStore = cookies();
//     const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore });

//     // Exchange the authorization code for a session
//     const { data: { session }, error } = await supabase.auth.exchangeCodeForSession(code);

//     console.log('[Callback Route - Full Logic] Session exchange attempt complete. Session obtained:', !!session, 'Error:', error?.message || 'None');

//     if (error) {
//       console.error('[Callback Route - Full Logic] Error exchanging code for session:', error.message);
//       const errorMessage = error.message.includes('verifier')
//         ? 'Authentication flow error. Please try logging in again.'
//         : 'Authentication link invalid or expired. Please try again.';
//       return NextResponse.redirect(
//         new URL(`/auth/login?error=${encodeURIComponent(errorMessage)}`, requestUrl.origin)
//       );
//     }

//     if (session?.user) {
//         console.log('[Callback Route - Full Logic] Session obtained for user:', session.user.id);
//         // Now check if a profile exists in the public 'users' table
//         try {
//             // Using Server Action (requires Admin Client to bypass RLS for SELECT if needed)
//              const { exists } = await checkUserProfileExistsAction(session.user.id);

//             console.log('[Callback Route - Full Logic] Profile exists check result:', exists);

//             if (exists) {
//                 // Profile exists - redirect to intended destination (usually home)
//                 console.log('[Callback Route - Full Logic] User has profile, redirecting to:', next);
//                 return NextResponse.redirect(new URL(next, requestUrl.origin));
//             } else {
//                 // No profile found - user needs to complete the profile creation step
//                 console.log('[Callback Route - Full Logic] User needs profile completion, redirecting to /auth/complete-profile');
//                 // Ensure pending_signup_data was set in localStorage during signup step
//                 return NextResponse.redirect(new URL('/auth/complete-profile', requestUrl.origin));
//             }
//         } catch (dbError: any) {
//              console.error('[Callback Route - Full Logic] Caught DB error during profile check:', dbError.message);
//              return NextResponse.redirect(
//                 new URL(`/auth/login?error=${encodeURIComponent('Error checking profile. Please try again.')}`, requestUrl.origin)
//             );
//         }
//     } else {
//         // Fallback: Exchange didn't error, but no session returned
//         console.error('[Callback Route - Full Logic] Code exchange successful but no session object returned.');
//         return NextResponse.redirect(
//             new URL(`/auth/login?error=${encodeURIComponent('Session creation failed. Please try again.')}`, requestUrl.origin)
//         );
//     }
//   } else {
//     // No 'code' parameter found in the URL query string
//     console.log('[Callback Route - Full Logic] No code parameter found in callback URL.');
//     return NextResponse.redirect(
//       new URL(`/auth/login?error=${encodeURIComponent('Invalid callback request.')}`, requestUrl.origin)
//     );
//   }
// }

// // app/auth/callback/route.ts
// import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'; // Use server component client
// import { cookies } from 'next/headers';
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import type { Database } from '@/lib/supabase/database.types';
// import { checkUserProfileExistsAction } from '@/app/auth/actions';

// // Ensure this runs dynamically
// export const dynamic = 'force-dynamic';

// export async function GET(request: NextRequest) {
//   const requestUrl = new URL(request.url);
//   const code = requestUrl.searchParams.get('code');
//   const next = requestUrl.searchParams.get('next') ?? '/';

//   console.log('[Callback Route - ServerComponentClient] Received request. Code:', code);

//   if (code) {
//     const cookieStore = cookies();
//     // Create client using the server component helper
//     const supabase = createServerComponentClient<Database>({ cookies: () => cookieStore });

//     // Exchange the code for a session
//     const { data: { session }, error } = await supabase.auth.exchangeCodeForSession(code);

//     console.log('[Callback Route - ServerComponentClient] Session exchange attempt complete. Session obtained:', !!session, 'Error:', error?.message || 'None');

//     if (error) {
//       console.error('[Callback Route - ServerComponentClient] Error exchanging code:', error.message);
//       const errorMessage = error.message.includes('verifier')
//         ? 'Authentication flow error (Verifier). Please try logging in again.'
//         : 'Authentication link invalid or expired. Please try again.';
//       return NextResponse.redirect(
//         new URL(`/auth/login?error=${encodeURIComponent(errorMessage)}`, requestUrl.origin)
//       );
//     }

//     if (session?.user) {
//         console.log('[Callback Route - ServerComponentClient] Session obtained for user:', session.user.id);
//         try {
//              const { exists } = await checkUserProfileExistsAction(session.user.id);
//             console.log('[Callback Route - ServerComponentClient] Profile exists check result:', exists);

//             if (exists) {
//                 console.log('[Callback Route - ServerComponentClient] User has profile, redirecting to:', next);
//                 return NextResponse.redirect(new URL(next, requestUrl.origin));
//             } else {
//                 console.log('[Callback Route - ServerComponentClient] User needs profile completion, redirecting to /auth/complete-profile');
//                 return NextResponse.redirect(new URL('/auth/complete-profile', requestUrl.origin));
//             }
//         } catch (dbError: any) {
//              console.error('[Callback Route - ServerComponentClient] Caught DB error during profile check:', dbError.message);
//              return NextResponse.redirect(
//                 new URL(`/auth/login?error=${encodeURIComponent('Error checking profile. Please try again.')}`, requestUrl.origin)
//             );
//         }
//     } else {
//         console.error('[Callback Route - ServerComponentClient] Exchange successful but no session object returned.');
//         return NextResponse.redirect(
//             new URL(`/auth/login?error=${encodeURIComponent('Session creation failed.')}`, requestUrl.origin)
//         );
//     }
//   } else {
//     console.log('[Callback Route - ServerComponentClient] No code parameter found.');
//     return NextResponse.redirect(
//       new URL(`/auth/login?error=${encodeURIComponent('Invalid callback request.')}`, requestUrl.origin)
//     );
//   }
// }

// import { createClient } from '@/lib/supabase/server'
// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// export async function GET(request: NextRequest) {
//   const requestUrl = new URL(request.url)
//   const code = requestUrl.searchParams.get('code')
//   const next = requestUrl.searchParams.get('next') ?? '/'

//   console.log('[Callback Route] Received request. Code parameter present:', !!code)

//   if (code) {
//     const supabase = createClient()

//     // Exchange the code for a session
//     const { data, error } = await supabase.auth.exchangeCodeForSession(code)

//     console.log('[Callback Route] Session exchange attempt complete. Session obtained:', !!data.session, 'Error:', error?.message)

//     if (error) {
//       console.error('[Callback Route] Error exchanging code for session:', error.message)
//       return NextResponse.redirect(
//         new URL(
//           `/auth/login?error=${encodeURIComponent('Authentication link invalid or expired. Please try again.')}`,
//           requestUrl.origin
//         )
//       )
//     }

//     if (data.session?.user) {
//       console.log('[Callback Route] Session obtained for user:', data.session.user.id)

//       try {
//         // Check if user profile exists
//         const { data: profile, error: profileError } = await supabase
//           .from('users')
//           .select('id, is_verified')
//           .eq('id', data.session.user.id)
//           .maybeSingle()

//         console.log('[Callback Route] Profile check - exists:', !!profile, 'verified:', profile?.is_verified)

//         if (profileError) {
//           console.error('[Callback Route] Error checking profile:', profileError)
//         }

//         if (profile?.is_verified) {
//           // User has completed profile
//           console.log('[Callback Route] Redirecting existing user to:', next)
//           return NextResponse.redirect(new URL(next, requestUrl.origin))
//         } else {
//           // User needs to complete profile
//           console.log('[Callback Route] Redirecting new user to complete profile')
//           return NextResponse.redirect(new URL('/auth/complete-profile', requestUrl.origin))
//         }
//       } catch (profileCheckError: any) {
//         console.error('[Callback Route] Unexpected error checking profile:', profileCheckError)
//         return NextResponse.redirect(
//           new URL(`/auth/login?error=${encodeURIComponent('Failed to verify account. Please try again.')}`, requestUrl.origin)
//         )
//       }
//     }
//   }

//   // No code provided or session exchange failed
//   console.log('[Callback Route] No code or invalid session')
//   return NextResponse.redirect(
//     new URL(`/auth/login?error=${encodeURIComponent('Invalid callback URL. Please try logging in again.')}`, requestUrl.origin)
//   )
// }

import { createClient } from '@/lib/supabase/route-handler' // <-- CHANGED: Use route-handler client
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const next = requestUrl.searchParams.get('next') ?? '/'

  console.log('[Callback Route] Received request. Code parameter present:', !!code)
  console.log('[Callback Route] Full URL:', requestUrl.toString())

  if (code) {
    const supabase = createClient()

    // Exchange the code for a session
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)

    console.log('[Callback Route] Session exchange result:', {
      hasSession: !!data.session,
      hasUser: !!data.session?.user,
      errorMessage: error?.message,
    })

    if (error) {
      console.error('[Callback Route] Error exchanging code:', error)
      return NextResponse.redirect(
        new URL(
          `/auth/login?error=${encodeURIComponent('Authentication failed. Please try again.')}`,
          requestUrl.origin
        )
      )
    }

    if (data.session?.user) {
      console.log('[Callback Route] Session obtained for user:', data.session.user.id)

      // Check if user profile exists
      const { data: profile, error: profileError } = await supabase
        .from('users')
        .select('id, is_verified')
        .eq('id', data.session.user.id)
        .maybeSingle()

      console.log('[Callback Route] Profile check:', {
        exists: !!profile,
        isVerified: profile?.is_verified,
        error: profileError?.message,
      })

      if (profile?.is_verified) {
        // User has completed profile - redirect to home
        console.log('[Callback Route] Redirecting to:', next)
        return NextResponse.redirect(new URL(next, requestUrl.origin))
      } else {
        // User needs to complete profile
        console.log('[Callback Route] Redirecting to complete profile')
        return NextResponse.redirect(new URL('/auth/complete-profile', requestUrl.origin))
      }
    }
  }

  // No code or session exchange failed
  console.log('[Callback Route] Invalid callback - no code or no session')
  return NextResponse.redirect(
    new URL(
      `/auth/login?error=${encodeURIComponent('Invalid callback. Please try again.')}`,
      requestUrl.origin
    )
  )
}

// Force dynamic rendering (important for Route Handlers with auth)
export const dynamic = 'force-dynamic'