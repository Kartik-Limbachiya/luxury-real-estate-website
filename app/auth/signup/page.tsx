// // 'use client'

// // import { useState } from 'react'
// // import { useForm } from 'react-hook-form'
// // import { zodResolver } from '@hookform/resolvers/zod'
// // import { signupSchema, SignupInput } from '@/lib/validations/auth'
// // import { sendOTP, checkUserExists } from '@/lib/auth/auth-helpers'
// // import { useRouter } from 'next/navigation'
// // import { toast } from 'sonner'
// // import Link from 'next/link'
// // import { ArrowRight, User, Mail, Phone } from 'lucide-react'

// // export default function SignupPage() {
// //   const [loading, setLoading] = useState(false)
// //   const router = useRouter()
  
// //   const {
// //     register,
// //     handleSubmit,
// //     formState: { errors },
// //   } = useForm<SignupInput>({
// //     resolver: zodResolver(signupSchema),
// //   })

// //   const onSubmit = async (data: SignupInput) => {
// //     setLoading(true)
    
// //     try {
// //       // Check if user already exists
// //       const { exists } = await checkUserExists(data.email, data.mobileNumber)
      
// //       if (exists) {
// //         toast.error('User with this email or mobile number already exists')
// //         setLoading(false)
// //         return
// //       }

// //       // Send OTP via MSG91
// //       const result = await sendOTP(data.mobileNumber)
      
// //       if (result.success) {
// //         // Store signup data in sessionStorage for later use
// //         sessionStorage.setItem('signup_data', JSON.stringify(data))
// //         toast.success('OTP sent to your mobile number!')
// //         router.push('/auth/verify-otp')
// //       } else {
// //         toast.error(result.error || 'Failed to send OTP')
// //       }
// //     } catch (error) {
// //       toast.error('Something went wrong. Please try again.')
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 p-4">
// //       <div className="w-full max-w-md">
// //         {/* Card */}
// //         <div className="glass-card p-8 rounded-2xl shadow-2xl border border-amber-200/50">
// //           {/* Header */}
// //           <div className="text-center mb-8">
// //             <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
// //               Join 800 SEWAS
// //             </h1>
// //             <p className="text-gray-600 mt-2">Create your account to get started</p>
// //           </div>

// //           {/* Form */}
// //           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
// //             {/* Full Name */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 Full Name
// //               </label>
// //               <div className="relative">
// //                 <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
// //                 <input
// //                   {...register('fullName')}
// //                   type="text"
// //                   placeholder="Enter your full name"
// //                   className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
// //                 />
// //               </div>
// //               {errors.fullName && (
// //                 <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
// //               )}
// //             </div>

// //             {/* Email */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 Email Address
// //               </label>
// //               <div className="relative">
// //                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
// //                 <input
// //                   {...register('email')}
// //                   type="email"
// //                   placeholder="your.email@example.com"
// //                   className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
// //                 />
// //               </div>
// //               {errors.email && (
// //                 <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
// //               )}
// //             </div>

// //             {/* Mobile Number */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 Mobile Number
// //               </label>
// //               <div className="relative">
// //                 <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
// //                 <div className="absolute left-11 top-1/2 transform -translate-y-1/2 text-gray-600 font-medium">
// //                   +91
// //                 </div>
// //                 <input
// //                   {...register('mobileNumber')}
// //                   type="tel"
// //                   placeholder="9876543210"
// //                   maxLength={10}
// //                   className="w-full pl-20 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
// //                 />
// //               </div>
// //               {errors.mobileNumber && (
// //                 <p className="mt-1 text-sm text-red-600">{errors.mobileNumber.message}</p>
// //               )}
// //             </div>

// //             {/* Submit Button */}
// //             <button
// //               type="submit"
// //               disabled={loading}
// //               className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
// //             >
// //               {loading ? (
// //                 <>
// //                   <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
// //                   Sending OTP...
// //                 </>
// //               ) : (
// //                 <>
// //                   Continue
// //                   <ArrowRight className="w-5 h-5" />
// //                 </>
// //               )}
// //             </button>
// //           </form>

// //           {/* Footer */}
// //           <div className="mt-6 text-center">
// //             <p className="text-gray-600">
// //               Already have an account?{' '}
// //               <Link href="/auth/login" className="text-amber-600 hover:text-amber-700 font-semibold">
// //                 Login
// //               </Link>
// //             </p>
// //           </div>
// //         </div>

// //         {/* Progress Indicator */}
// //         <div className="mt-6 flex items-center justify-center gap-2">
// //           <div className="w-3 h-3 rounded-full bg-amber-600"></div>
// //           <div className="w-3 h-3 rounded-full bg-gray-300"></div>
// //           <div className="w-3 h-3 rounded-full bg-gray-300"></div>
// //           <div className="w-3 h-3 rounded-full bg-gray-300"></div>
// //         </div>
// //         <p className="text-center text-sm text-gray-600 mt-2">Step 1 of 4</p>
// //       </div>
// //     </div>
// //   )
// // }

// // app/auth/signup/page.tsx
// 'use client'

// import { useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { signupSchema, SignupInput } from '@/lib/validations/auth'
// // Removed sendOTP import, checkUserExists is still needed
// import { checkUserExists } from '@/lib/auth/auth-helpers'
// import { sendOtpAction } from '@/app/auth/actions' // <-- Import Server Action
// import { useRouter } from 'next/navigation'
// import { toast } from 'sonner'
// import Link from 'next/link'
// import { ArrowRight, User, Mail, Phone } from 'lucide-react'

// export default function SignupPage() {
//   const [loading, setLoading] = useState(false)
//   const router = useRouter()

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<SignupInput>({
//     resolver: zodResolver(signupSchema),
//   })

//   const onSubmit = async (data: SignupInput) => {
//     setLoading(true)

//     try {
//       // Check if user already exists (this is fine on client)
//       const { exists } = await checkUserExists(data.email, data.mobileNumber)

//       if (exists) {
//         toast.error('User with this email or mobile number already exists')
//         setLoading(false)
//         return
//       }

//       // Call Server Action to send OTP
//       const result = await sendOtpAction(data.mobileNumber) // <-- Use Server Action

//       if (result.success) {
//         // Store signup data in sessionStorage for OTP page
//         sessionStorage.setItem('signup_data', JSON.stringify(data))
//         toast.success('OTP sent to your mobile number!')
//         router.push('/auth/verify-otp')
//       } else {
//         toast.error(result.error || 'Failed to send OTP')
//       }
//     } catch (error) {
//       toast.error('Something went wrong. Please try again.')
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
//             <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
//               Join 800 SEWAS
//             </h1>
//             <p className="text-gray-600 mt-2">Create your account to get started</p>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//             {/* Full Name */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Full Name
//               </label>
//               <div className="relative">
//                 <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   {...register('fullName')}
//                   type="text"
//                   placeholder="Enter your full name"
//                   className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
//                 />
//               </div>
//               {errors.fullName && (
//                 <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
//               )}
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   {...register('email')}
//                   type="email"
//                   placeholder="your.email@example.com"
//                   className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
//                 />
//               </div>
//               {errors.email && (
//                 <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
//               )}
//             </div>

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
//                   {...register('mobileNumber')}
//                   type="tel"
//                   placeholder="9876543210"
//                   maxLength={10}
//                   className="w-full pl-20 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
//                 />
//               </div>
//               {errors.mobileNumber && (
//                 <p className="mt-1 text-sm text-red-600">{errors.mobileNumber.message}</p>
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
//                 <>
//                   Continue
//                   <ArrowRight className="w-5 h-5" />
//                 </>
//               )}
//             </button>
//           </form>

//           {/* Footer */}
//           <div className="mt-6 text-center">
//             <p className="text-gray-600">
//               Already have an account?{' '}
//               <Link href="/auth/login" className="text-amber-600 hover:text-amber-700 font-semibold">
//                 Login
//               </Link>
//             </p>
//           </div>
//         </div>

//         {/* Progress Indicator */}
//         <div className="mt-6 flex items-center justify-center gap-2">
//           <div className="w-3 h-3 rounded-full bg-amber-600"></div>
//           <div className="w-3 h-3 rounded-full bg-gray-300"></div>
//           <div className="w-3 h-3 rounded-full bg-gray-300"></div>
//           <div className="w-3 h-3 rounded-full bg-gray-300"></div>
//         </div>
//         <p className="text-center text-sm text-gray-600 mt-2">Step 1 of 4</p>
//       </div>
//     </div>
//   )
// }

// app/auth/signup/page.tsx
'use client'
import { sendMagicLinkWithMetadataAction } from '@/app/auth/actions'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signupSchema, SignupInput } from '@/lib/validations/auth'
import { checkUserExists } from '@/lib/auth/auth-helpers' // Keep this client-side check
import { sendMagicLinkAction } from '@/app/auth/actions' // Import Server Action
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import Link from 'next/link'
import { ArrowRight, User, Mail, Phone } from 'lucide-react'

export default function SignupPage() {
  const [loading, setLoading] = useState(false)
  const [showWaitingMessage, setShowWaitingMessage] = useState(false); // State for email message
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
  })

  const onSubmit = async (data: SignupInput) => {
    setLoading(true)
    setShowWaitingMessage(false)
  
    try {
      // Check if user already exists
      const { exists } = await checkUserExists(data.email, data.mobileNumber)
  
      if (exists) {
        toast.error('User with this email or mobile number already exists. Try logging in.')
        setLoading(false)
        return
      }
  
      // Store signup data in localStorage (for fallback)
      localStorage.setItem('pending_signup_data', JSON.stringify(data))
  
      // Send Magic Link with metadata
      const result = await sendMagicLinkWithMetadataAction(data.email, {
        full_name: data.fullName,
        mobile_number: data.mobileNumber,
      })
  
      if (result.success) {
        toast.success('Check your email for the signup link!')
        setShowWaitingMessage(true)
      } else {
        toast.error(result.error || 'Failed to send signup link.')
      }
    } catch (error: any) {
      console.error("Signup submit error:", error)
      toast.error(error.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 p-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="glass-card p-8 rounded-2xl shadow-2xl border border-amber-200/50">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Join 800 SEWAS
            </h1>
            <p className="text-gray-600 mt-2">Create your account to get started</p>
          </div>

          {/* Form */}
          {!showWaitingMessage ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input {...register('fullName')} type="text" placeholder="Enter your full name" className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"/>
                  </div>
                  {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>}
                </div>
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input {...register('email')} type="email" placeholder="your.email@example.com" className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"/>
                  </div>
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                </div>
                {/* Mobile Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <div className="absolute left-11 top-1/2 transform -translate-y-1/2 text-gray-600 font-medium">+91</div>
                    <input {...register('mobileNumber')} type="tel" placeholder="9876543210" maxLength={10} className="w-full pl-20 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"/>
                  </div>
                  {errors.mobileNumber && <p className="mt-1 text-sm text-red-600">{errors.mobileNumber.message}</p>}
                </div>
                {/* Submit Button */}
                <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                  {loading ? ( <><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div> Sending Link...</> ) : ( <> Continue <ArrowRight className="w-5 h-5" /> </> )}
                </button>
              </form>
          ) : (
             <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
                <h2 className="text-xl font-semibold text-green-800">Check Your Email!</h2>
                <p className="text-gray-700 mt-2">A login link has been sent to your email address. Please click the link to continue.</p>
                <p className="text-sm text-gray-500 mt-4">(You can close this window)</p>
             </div>
          )}

          {/* Footer */}
          {!showWaitingMessage && (
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link href="/auth/login" className="text-amber-600 hover:text-amber-700 font-semibold">
                  Login
                </Link>
              </p>
            </div>
          )}
        </div>
        {/* Progress Indicator (Optional for Magic Link) */}
        {/* <div className="mt-6 flex items-center justify-center gap-2">...</div> */}
      </div>
    </div>
  )
}