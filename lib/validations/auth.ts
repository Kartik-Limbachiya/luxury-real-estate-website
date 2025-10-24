import { z } from 'zod'

export const signupSchema = z.object({
  fullName: z.string().min(3, 'Full name must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  mobileNumber: z.string()
    .length(10, 'Mobile number must be 10 digits')
    .regex(/^[6-9]\d{9}$/, 'Invalid mobile number'),
})

export const otpSchema = z.object({
  otp: z.string().length(6, 'OTP must be 6 digits').regex(/^\d+$/, 'OTP must contain only numbers'),
})

export const locationSchema = z.object({
  state: z.string().min(1, 'Please select a state'),
  city: z.string().min(1, 'Please select a city'),
  termsAccepted: z.boolean().refine(val => val === true, {
    message: 'You must accept the terms and conditions',
  }),
  privacyAccepted: z.boolean().refine(val => val === true, {
    message: 'You must accept the privacy policy',
  }),
})

export type SignupInput = z.infer<typeof signupSchema>
export type OTPInput = z.infer<typeof otpSchema>
export type LocationInput = z.infer<typeof locationSchema>
