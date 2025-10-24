// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import { useRouter } from 'next/navigation'
// import { toast } from 'sonner'
// import { verifyOTP, sendOTP } from '@/lib/auth/auth-helpers'
// import Link from 'next/link'
// import { ArrowLeft, Shield } from 'lucide-react'

// export default function VerifyOTPPage() {
//   const [otp, setOtp] = useState(['', '', '', '', '', ''])
//   const [loading, setLoading] = useState(false)
//   const [resending, setResending] = useState(false)
//   const [countdown, setCountdown] = useState(60)
//   const [signupData, setSignupData] = useState<any>(null)
//   const inputRefs = useRef<(HTMLInputElement | null)[]>([])
//   const router = useRouter()

//   useEffect(() => {
//     // Get signup data from sessionStorage
//     const data = sessionStorage.getItem('signup_data')
//     if (!data) {
//       toast.error('Please complete signup first')
//       router.push('/auth/signup')
//       return
//     }
//     setSignupData(JSON.parse(data))
//   }, [router])

//   useEffect(() => {
//     if (countdown > 0) {
//       const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
//       return () => clearTimeout(timer)
//     }
//   }, [countdown])

//   const handleChange = (index: number, value: string) => {
//     if (value.length > 1) return
//     if (!/^\d*$/.test(value)) return

//     const newOtp = [...otp]
//     newOtp[index] = value
//     setOtp(newOtp)

//     // Auto-focus next input
//     if (value && index < 5) {
//       inputRefs.current[index + 1]?.focus()
//     }

//     // Auto-submit when all filled
//     if (newOtp.every(digit => digit !== '') && value) {
//       handleVerify(newOtp.join(''))
//     }
//   }

//   const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
//     if (e.key === 'Backspace' && !otp[index] && index > 0) {
//       inputRefs.current[index - 1]?.focus()
//     }
//   }

//   const handlePaste = (e: React.ClipboardEvent) => {
//     e.preventDefault()
//     const pastedData = e.clipboardData.getData('text').slice(0, 6)
//     if (!/^\d+$/.test(pastedData)) return

//     const newOtp = pastedData.split('')
//     setOtp([...newOtp, ...Array(6 - newOtp.length).fill('')])
    
//     if (pastedData.length === 6) {
//       handleVerify(pastedData)
//     }
//   }

//   const handleVerify = async (otpValue: string) => {
//     if (!signupData) return
    
//     setLoading(true)
    
//     try {
//       const result = await verifyOTP(signupData.mobileNumber, otpValue)
      
//       if (result.success) {
//         if (result.isExistingUser) {
//           // User already exists, redirect to home
//           toast.success('Welcome back!')
//           router.push('/')
//         } else {
//           // New user, go to profile completion
//           toast.success('OTP verified successfully!')
//           router.push('/auth/complete-profile')
//         }
//       } else {
//         toast.error(result.error || 'Invalid OTP. Please try again.')
//         setOtp(['', '', '', '', '', ''])
//         inputRefs.current[0]?.focus()
//       }
//     } catch (error) {
//       toast.error('Verification failed. Please try again.')
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleResend = async () => {
//     if (!signupData || countdown > 0) return
    
//     setResending(true)
    
//     try {
//       const result = await sendOTP(signupData.mobileNumber)
      
//       if (result.success) {
//         toast.success('OTP resent successfully!')
//         setCountdown(60)
//         setOtp(['', '', '', '', '', ''])
//         inputRefs.current[0]?.focus()
//       } else {
//         toast.error('Failed to resend OTP')
//       }
//     } catch (error) {
//       toast.error('Something went wrong')
//     } finally {
//       setResending(false)
//     }
//   }

//   if (!signupData) {
//     return null
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 p-4">
//       <div className="w-full max-w-md">
//         {/* Back Button */}
//         <Link 
//           href="/auth/signup"
//           className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
//         >
//           <ArrowLeft className="w-5 h-5" />
//           Back to Signup
//         </Link>

//         {/* Card */}
//         <div className="glass-card p-8 rounded-2xl shadow-2xl border border-amber-200/50">
//           {/* Header */}
//           <div className="text-center mb-8">
//             <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full mb-4">
//               <Shield className="w-8 h-8 text-white" />
//             </div>
//             <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
//               Verify OTP
//             </h1>
//             <p className="text-gray-600 mt-2">
//               We've sent a 6-digit code to
//             </p>
//             <p className="font-semibold text-gray-900">
//               +91 {signupData.mobileNumber}
//             </p>
//           </div>

//           {/* OTP Input */}
//           <div className="flex justify-center gap-3 mb-6" onPaste={handlePaste}>
//             {otp.map((digit, index) => (
//               <input
//                 key={index}
//                 ref={(el) => (inputRefs.current[index] = el)}
//                 type="text"
//                 inputMode="numeric"
//                 maxLength={1}
//                 value={digit}
//                 onChange={(e) => handleChange(index, e.target.value)}
//                 onKeyDown={(e) => handleKeyDown(index, e)}
//                 className="w-12 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
//                 disabled={loading}
//                 autoFocus={index === 0}
//               />
//             ))}
//           </div>

//           {/* Resend OTP */}
//           <div className="text-center mb-6">
//             {countdown > 0 ? (
//               <p className="text-gray-600">
//                 Resend OTP in <span className="font-semibold text-amber-600">{countdown}s</span>
//               </p>
//             ) : (
//               <button
//                 onClick={handleResend}
//                 disabled={resending}
//                 className="text-amber-600 hover:text-amber-700 font-semibold disabled:opacity-50"
//               >
//                 {resending ? 'Resending...' : 'Resend OTP'}
//               </button>
//             )}
//           </div>

//           {/* Verify Button */}
//           <button
//             onClick={() => handleVerify(otp.join(''))}
//             disabled={loading || otp.some(digit => digit === '')}
//             className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {loading ? (
//               <>
//                 <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//                 Verifying...
//               </>
//             ) : (
//               'Verify OTP'
//             )}
//           </button>

//           {/* Help Text */}
//           <p className="text-center text-sm text-gray-500 mt-6">
//             Didn't receive the code? Check your messages or request a new one.
//           </p>
//         </div>

//         {/* Progress Indicator */}
//         <div className="mt-6 flex items-center justify-center gap-2">
//           <div className="w-3 h-3 rounded-full bg-amber-600"></div>
//           <div className="w-3 h-3 rounded-full bg-amber-600"></div>
//           <div className="w-3 h-3 rounded-full bg-gray-300"></div>
//           <div className="w-3 h-3 rounded-full bg-gray-300"></div>
//         </div>
//         <p className="text-center text-sm text-gray-600 mt-2">Step 2 of 4</p>
//       </div>
//     </div>
//   )
// }

// app/auth/verify-otp/page.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
// Import the Server Actions
import { verifySignupOtpAction, sendOtpAction } from '@/app/auth/actions'
import Link from 'next/link'
import { ArrowLeft, Shield } from 'lucide-react'
// Import UI components if they aren't already imported (assuming they are)
// import { Button } from '@/components/ui/button' // Example

export default function VerifyOTPPage() {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [loading, setLoading] = useState(false)
  const [resending, setResending] = useState(false)
  const [countdown, setCountdown] = useState(60)
  const [signupData, setSignupData] = useState<any>(null)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const router = useRouter()

  useEffect(() => {
    // Get signup data from sessionStorage
    const data = sessionStorage.getItem('signup_data')
    if (!data) {
      toast.error('Signup data not found. Please start over.')
      router.push('/auth/signup')
      return
    }
    try {
        setSignupData(JSON.parse(data))
    } catch (e) {
        toast.error('Invalid signup data. Please start over.')
        router.push('/auth/signup')
    }
  }, [router])

  useEffect(() => {
    // Countdown timer effect
    let timer: NodeJS.Timeout | null = null;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000)
    }
    // Cleanup timer on component unmount or when countdown changes
    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [countdown])

  const handleChange = (index: number, value: string) => {
    // Allow only single digit numbers
    if (value.length > 1 || !/^\d*$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto-focus next input
    if (value && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus()
    }

    // Auto-submit when all filled and the last input received a value
    const filledOtp = newOtp.join('');
    if (filledOtp.length === 6 && value) { // Check length and if the last action was adding a value
      handleVerify(filledOtp)
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Move focus backward on backspace if current input is empty
    if (e.key === 'Backspace' && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').slice(0, 6)
    // Ensure pasted data is only digits
    if (!/^\d+$/.test(pastedData)) return

    const newOtp = pastedData.split('')
    // Fill the rest with empty strings if pasted data is less than 6 digits
    const filledOtpArray = [...newOtp, ...Array(6 - newOtp.length).fill('')];
    setOtp(filledOtpArray)

    // Focus the next empty input or the last one if full
    const focusIndex = Math.min(newOtp.length, 5); // Focus next available or last
     if (inputRefs.current[focusIndex]) {
        inputRefs.current[focusIndex]?.focus();
     }

    // If pasted data filled all 6 digits, attempt verification
    if (pastedData.length === 6) {
      handleVerify(pastedData)
    }
  }

  const handleVerify = async (otpValue: string) => {
    if (!signupData) {
        toast.error('Signup data missing. Please go back.')
        return
    }
    // Ensure OTP is exactly 6 digits before proceeding
    if (otpValue.length !== 6 || !/^\d{6}$/.test(otpValue)) {
        toast.error('Please enter a valid 6-digit OTP.')
        return;
    }

    setLoading(true)

    try {
      // Call Server Action to verify OTP for signup flow
      const result = await verifySignupOtpAction(signupData.mobileNumber, otpValue)

      if (result.success) {
        // Just move to profile completion. User creation happens there.
        toast.success('OTP verified successfully!')
        // No need to store userId here, it's handled in the complete profile step
        router.push('/auth/complete-profile')
      } else {
        toast.error(result.error || 'Invalid OTP. Please try again.')
        setOtp(['', '', '', '', '', '']) // Clear OTP fields on error
        inputRefs.current[0]?.focus()    // Focus the first input on error
      }
    } catch (error: any) {
      console.error("Verify OTP Error:", error);
      toast.error(error.message || 'Verification failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleResend = async () => {
    if (!signupData || countdown > 0) return

    setResending(true)

    try {
      // Call Server Action to resend OTP
      const result = await sendOtpAction(signupData.mobileNumber)

      if (result.success) {
        toast.success('OTP resent successfully!')
        setCountdown(60) // Reset countdown timer
        setOtp(['', '', '', '', '', '']) // Clear OTP fields
        inputRefs.current[0]?.focus()    // Focus the first input
      } else {
        toast.error(result.error || 'Failed to resend OTP')
      }
    } catch (error: any) {
      console.error("Resend OTP Error:", error);
      toast.error(error.message || 'Something went wrong')
    } finally {
      setResending(false)
    }
  }

  // Prevents rendering errors if signupData isn't loaded yet
  if (!signupData) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            Loading... {/* Or a proper loading spinner */}
        </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 p-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <Link
          href="/auth/signup"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Signup
        </Link>

        {/* Card */}
        <div className="glass-card p-8 rounded-2xl shadow-2xl border border-amber-200/50">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Verify OTP
            </h1>
            <p className="text-gray-600 mt-2">
              We've sent a 6-digit code to
            </p>
            <p className="font-semibold text-gray-900">
              +91 {signupData.mobileNumber}
            </p>
          </div>

          {/* OTP Input */}
          <div className="flex justify-center gap-3 mb-6" onPaste={handlePaste}>
            {otp.map((digit, index) => (
              <input
                key={index}
                // Correct ref assignment
                ref={(el) => { // Use curly braces for a block
                  inputRefs.current[index] = el; // Perform assignment as a statement
                }} // Implicitly returns void                type="text" // Use text to allow single character input control
                inputMode="numeric" // Hint for mobile keyboards
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                disabled={loading}
                autoFocus={index === 0} // Autofocus the first input
              />
            ))}
          </div>

          {/* Resend OTP */}
          <div className="text-center mb-6">
            {countdown > 0 ? (
              <p className="text-gray-600">
                Resend OTP in <span className="font-semibold text-amber-600">{countdown}s</span>
              </p>
            ) : (
              <button
                onClick={handleResend}
                disabled={resending}
                className="text-amber-600 hover:text-amber-700 font-semibold disabled:opacity-50"
              >
                {resending ? 'Resending...' : 'Resend OTP'}
              </button>
            )}
          </div>

          {/* Verify Button */}
          <button
            // Join the OTP array and pass it to handleVerify
            onClick={() => handleVerify(otp.join(''))}
            // Disable button if loading or if any OTP digit is empty
            disabled={loading || otp.some(digit => digit === '')}
            className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Verifying...
              </>
            ) : (
              'Verify OTP'
            )}
          </button>

          {/* Help Text */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Didn't receive the code? Check your messages or request a new one.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <div className="w-3 h-3 rounded-full bg-amber-600"></div>
          <div className="w-3 h-3 rounded-full bg-amber-600"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        </div>
        <p className="text-center text-sm text-gray-600 mt-2">Step 2 of 4</p>
      </div>
    </div>
  )
}