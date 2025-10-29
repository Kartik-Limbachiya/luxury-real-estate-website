// app/auth/login-verify/page.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
// Import the Server Actions
import { verifyLoginOtpAction, sendOtpAction } from '@/app/auth/actions'
import Link from 'next/link'
import { ArrowLeft, Shield } from 'lucide-react'
// Import UI components if needed
// import { Button } from '@/components/ui/button' // Example

export default function LoginVerifyPage() {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [loading, setLoading] = useState(false)
  const [resending, setResending] = useState(false)
  const [countdown, setCountdown] = useState(60)
  const [mobileNumber, setMobileNumber] = useState<string | null>(null)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const router = useRouter()

  useEffect(() => {
    // Get mobile number from sessionStorage stored during login
    const mobile = sessionStorage.getItem('login_mobile')
    if (!mobile) {
      toast.error('Login session missing. Please start from the login page.')
      router.push('/auth/login')
      return
    }
    setMobileNumber(mobile)
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
    if (filledOtp.length === 6 && value) {
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
    if (!mobileNumber) {
        toast.error('Mobile number missing. Please go back to login.')
        return
    }
     // Ensure OTP is exactly 6 digits before proceeding
    if (otpValue.length !== 6 || !/^\d{6}$/.test(otpValue)) {
        toast.error('Please enter a valid 6-digit OTP.')
        return;
    }

    setLoading(true)

    try {
      // Call Server Action to verify OTP AND log in
      const result = await verifyLoginOtpAction(mobileNumber, otpValue)

      if (result.success) {
        sessionStorage.removeItem('login_mobile') // Clear the temp storage
        toast.success('Login successful!')
        router.push('/') // Redirect to the home page or dashboard
        router.refresh() // Force refresh to update auth state across the app
      } else {
        toast.error(result.error || 'Invalid OTP. Please try again.')
        setOtp(['', '', '', '', '', '']) // Clear OTP fields on error
        inputRefs.current[0]?.focus()    // Focus the first input on error
      }
    } catch (error: any) {
      console.error("Verify Login OTP Error:", error);
      toast.error(error.message || 'Verification failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleResend = async () => {
    if (!mobileNumber || countdown > 0) return

    setResending(true)

    try {
      // Call Server Action to resend OTP
      const result = await sendOtpAction(mobileNumber)

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

  // Prevents rendering errors if mobileNumber isn't loaded yet
  if (!mobileNumber) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            Loading... {/* Or a proper loading spinner */}
        </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 p-4">
      <div className="w-full max-w-md">
        <Link
          href="/auth/login"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Login
        </Link>

        <div className="glass-card p-8 rounded-2xl shadow-2xl border border-amber-200/50">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Verify OTP
            </h1>
            <p className="text-gray-600 mt-2">
              Enter the code sent to
            </p>
            <p className="font-semibold text-gray-900">
              +91 {mobileNumber}
            </p>
          </div>

          <div className="flex justify-center gap-3 mb-6" onPaste={handlePaste}>
            {otp.map((digit, index) => (
              <input
                key={index}
                // Correct ref assignment with curly braces
                ref={(el: HTMLInputElement | null) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                disabled={loading}
                autoFocus={index === 0}
              />
            ))}
          </div>

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

          <button
            onClick={() => handleVerify(otp.join(''))}
            disabled={loading || otp.some(digit => digit === '')}
            className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Verifying...
              </>
            ) : (
              'Verify & Login'
            )}
          </button>
        </div>
      </div>
    </div>
  )
}