// // 'use client'

// // import { useState } from 'react'
// // import { useRouter } from 'next/navigation'
// // import { toast } from 'sonner'
// // import { sendOtpAction } from '@/app/auth/actions'
// // import Link from 'next/link'
// // import { LogIn, Phone } from 'lucide-react'
// // import { createClient } from '@/lib/supabase/client'

// // export default function LoginPage() {
// //   const [mobileNumber, setMobileNumber] = useState('')
// //   const [loading, setLoading] = useState(false)
// //   const [error, setError] = useState('')
// //   const router = useRouter()

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault()
// //     setError('')
    
// //     if (!/^[6-9]\d{9}$/.test(mobileNumber)) {
// //       setError('Please enter a valid 10-digit mobile number')
// //       return
// //     }
    
// //     setLoading(true)
    
// //     try {
// //       const supabase = createClient()
      
// //       // Check if user exists
// //       const { data: userData } = await supabase
// //         .from('users')
// //         .select('id, mobile_number')
// //         .eq('mobile_number', mobileNumber)
// //         .maybeSingle()
      
// //       if (!userData) {
// //         toast.error('No account found. Please sign up first.')
// //         setLoading(false)
// //         return
// //       }
      
// //       // Send OTP
// //       const result = await sendOTP(mobileNumber)
      
// //       if (result.success) {
// //         sessionStorage.setItem('login_mobile', mobileNumber)
// //         toast.success('OTP sent successfully!')
// //         router.push('/auth/login-verify')
// //       } else {
// //         toast.error(result.error || 'Failed to send OTP')
// //       }
// //     } catch (error) {
// //       console.error('Login error:', error)
// //       toast.error('Something went wrong. Please try again.')
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// // app/auth/login/page.tsx
// 'use client'

// import { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { toast } from 'sonner'
// // REMOVE THIS: import { sendOTP } from '@/lib/auth/auth-helpers' 
// import { sendOtpAction } from '@/app/auth/actions' // <-- ADD THIS
// import Link from 'next/link'
// import { LogIn, Phone } from 'lucide-react'
// import { createClient } from '@/lib/supabase/client' // Keep this for user check

// export default function LoginPage() {
//   const [mobileNumber, setMobileNumber] = useState('')
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState('')
//   const router = useRouter()

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setError('')

//     if (!/^[6-9]\d{9}$/.test(mobileNumber)) {
//       setError('Please enter a valid 10-digit mobile number')
//       return
//     }

//     setLoading(true)

//     try {
//       const supabase = createClient()

//       // Check if user exists
//       const { data: userData } = await supabase
//         .from('users')
//         .select('id, mobile_number')
//         .eq('mobile_number', mobileNumber)
//         .maybeSingle()

//       if (!userData) {
//         toast.error('No account found. Please sign up first.')
//         setLoading(false)
//         return
//       }

//       // Send OTP using Server Action
//       const result = await sendOtpAction(mobileNumber) // <-- Use Server Action

//       if (result.success) {
//         sessionStorage.setItem('login_mobile', mobileNumber)
//         toast.success('OTP sent successfully!')
//         router.push('/auth/login-verify')
//       } else {
//         toast.error(result.error || 'Failed to send OTP')
//       }
//     } catch (error: any) { // Catch potential errors during action call
//       console.error('Login error:', error)
//       toast.error(error.message || 'Something went wrong. Please try again.')
//     } finally {
//       setLoading(false)
//     }
//   }
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 p-4">
//       <div className="w-full max-w-md">
//         {/* Card */}
//         <div className="glass-card p-8 rounded-2xl shadow-2xl border border-amber-200/50">
//           {/* Header */}
//           <div className="text-center mb-8">
//             <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full mb-4">
//               <LogIn className="w-8 h-8 text-white" />
//             </div>
//             <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
//               Welcome Back
//             </h1>
//             <p className="text-gray-600 mt-2">Login to your 800 SEWAS account</p>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Mobile Number */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Mobile Number
//               </label>
//               <div className="relative">
//                 <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <div className="absolute left-11 top-1/2 transform -translate-y-1/2 text-gray-600 font-medium">
//                   +91
//                 </div>
//                 <input
//                   type="tel"
//                   value={mobileNumber}
//                   onChange={(e) => setMobileNumber(e.target.value)}
//                   placeholder="9876543210"
//                   maxLength={10}
//                   className="w-full pl-20 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
//                 />
//               </div>
//               {error && (
//                 <p className="mt-1 text-sm text-red-600">{error}</p>
//               )}
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {loading ? (
//                 <>
//                   <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//                   Sending OTP...
//                 </>
//               ) : (
//                 'Send OTP'
//               )}
//             </button>
//           </form>

//           {/* Info Box */}
//           <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
//             <p className="text-sm text-blue-800">
//               We'll send a 6-digit OTP to verify your mobile number
//             </p>
//           </div>

//           {/* Footer */}
//           <div className="mt-6 text-center">
//             <p className="text-gray-600">
//               Don't have an account?{' '}
//               <Link href="/auth/signup" className="text-amber-600 hover:text-amber-700 font-semibold">
//                 Sign Up
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// app/auth/login/page.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { sendMagicLinkAction } from '@/app/auth/actions' // <-- Import Server Action
import Link from 'next/link'
import { LogIn, Mail } from 'lucide-react' // Use Mail icon
import { createClient } from '@/lib/supabase/client' // Keep for user check
import { Button } from '@/components/ui/button' // Assuming Button import

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showWaitingMessage, setShowWaitingMessage] = useState(false);
  // const router = useRouter(); // Keep if used elsewhere

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setShowWaitingMessage(false);

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);

    try {
      // REMOVE THE CHECK FOR USER EXISTENCE HERE
      /*
      const supabase = createClient()
      const { data: userData, error: userError } = await supabase
        .from('users')
        // ... check logic ...
      if (!userData) { ... }
      */

      // Directly send the Magic Link using Server Action
      const result = await sendMagicLinkAction(email); // Supabase handles existing/new users

      if (result.success) {
        toast.success('Check your email for the login link!');
        setShowWaitingMessage(true); // Show waiting message
      } else {
        // Handle specific Supabase errors if needed, e.g., user not found if shouldCreateUser was false
         toast.error(result.error || 'Failed to send login link.');
      }
    } catch (error: any) {
      console.error('Login error:', error);
      toast.error(error.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 p-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="glass-card p-8 rounded-2xl shadow-2xl border border-amber-200/50">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full mb-4">
              <LogIn className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Welcome Back
            </h1>
            <p className="text-gray-600 mt-2">Login to your 800 SEWAS account</p>
          </div>

          {/* Form or Waiting Message */}
          {!showWaitingMessage ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                      aria-label="Email Address"
                    />
                  </div>
                  {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
                </div>

                {/* Submit Button */}
                <Button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                  {loading ? ( <><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div> Sending Link...</> ) : ( 'Send Login Link' )}
                </Button>
              </form>
            ) : (
                <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h2 className="text-xl font-semibold text-green-800">Check Your Email!</h2>
                    <p className="text-gray-700 mt-2">A login link has been sent to your email address. Please click the link to sign in.</p>
                    <p className="text-sm text-gray-500 mt-4">(You can close this window)</p>
                </div>
            )}

          {/* Info Box */}
          {!showWaitingMessage && (
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                We'll send a magic link to your email to log you in securely.
              </p>
            </div>
          )}

          {/* Footer */}
          {!showWaitingMessage && (
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <Link href="/auth/signup" className="text-amber-600 hover:text-amber-700 font-semibold">
                  Sign Up
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}