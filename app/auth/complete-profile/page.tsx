// // 'use client'

// // import { useState, useEffect } from 'react'
// // import { useForm } from 'react-hook-form'
// // import { zodResolver } from '@hookform/resolvers/zod'
// // import { locationSchema, LocationInput } from '@/lib/validations/auth'
// // import { createUserProfile } from '@/lib/auth/auth-helpers'
// // import { useRouter } from 'next/navigation'
// // import { toast } from 'sonner'
// // import { states, getDistrictsForState } from '@/lib/location-data'
// // import { MapPin, CheckCircle2 } from 'lucide-react'

// // export default function CompleteProfilePage() {
// //   const [loading, setLoading] = useState(false)
// //   const [signupData, setSignupData] = useState<any>(null)
// //   const [selectedState, setSelectedState] = useState('')
// //   const [cities, setCities] = useState<string[]>([])
// //   const router = useRouter()
  
// //   const {
// //     register,
// //     handleSubmit,
// //     formState: { errors },
// //     watch,
// //     setValue,
// //   } = useForm<LocationInput>({
// //     resolver: zodResolver(locationSchema),
// //   })

// //   const stateValue = watch('state')

// //   useEffect(() => {
// //     // Get signup data
// //     const data = sessionStorage.getItem('signup_data')
    
// //     if (!data) {
// //       toast.error('Please complete previous steps')
// //       router.push('/auth/signup')
// //       return
// //     }
    
// //     setSignupData(JSON.parse(data))
// //   }, [router])

// //   useEffect(() => {
// //     if (stateValue) {
// //       const districts = getDistrictsForState(stateValue as any)
// //       setCities(districts)
// //       setValue('city', '') // Reset city when state changes
// //     }
// //   }, [stateValue, setValue])

// //   const onSubmit = async (formData: LocationInput) => {
// //     if (!signupData) return
    
// //     setLoading(true)
    
// //     try {
// //       const result = await createUserProfile({
// //         full_name: signupData.fullName,
// //         email: signupData.email,
// //         mobile_number: signupData.mobileNumber,
// //         state: formData.state,
// //         city: formData.city,
// //       })
      
// //       if (result.success) {
// //         // Clear session storage
// //         sessionStorage.removeItem('signup_data')
// //         sessionStorage.removeItem('pending_otp_mobile')
        
// //         toast.success('Profile completed successfully! Redirecting...')
        
// //         // Small delay before redirect
// //         setTimeout(() => {
// //           router.push('/')
// //           router.refresh()
// //         }, 1000)
// //       } else {
// //         toast.error(result.error || 'Failed to create profile')
// //       }
// //     } catch (error) {
// //       console.error('Profile completion error:', error)
// //       toast.error('Something went wrong. Please try again.')
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   if (!signupData) {
// //     return null
// //   }

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 p-4">
// //       <div className="w-full max-w-md">
// //         {/* Card */}
// //         <div className="glass-card p-8 rounded-2xl shadow-2xl border border-amber-200/50">
// //           {/* Header */}
// //           <div className="text-center mb-8">
// //             <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full mb-4">
// //               <MapPin className="w-8 h-8 text-white" />
// //             </div>
// //             <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
// //               Complete Your Profile
// //             </h1>
// //             <p className="text-gray-600 mt-2">
// //               Select your location to explore services in your area
// //             </p>
// //           </div>

// //           {/* User Info Preview */}
// //           <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
// //             <div className="flex items-center gap-3 mb-2">
// //               <CheckCircle2 className="w-5 h-5 text-green-600" />
// //               <p className="font-semibold text-gray-900">{signupData.fullName}</p>
// //             </div>
// //             <p className="text-sm text-gray-600 ml-8">{signupData.email}</p>
// //             <p className="text-sm text-gray-600 ml-8">+91 {signupData.mobileNumber}</p>
// //           </div>

// //           {/* Form */}
// //           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
// //             {/* State Selection */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 Select State <span className="text-red-500">*</span>
// //               </label>
// //               <select
// //                 {...register('state')}
// //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
// //               >
// //                 <option value="">Choose your state</option>
// //                 {states.map((state) => (
// //                   <option key={state} value={state}>
// //                     {state}
// //                   </option>
// //                 ))}
// //               </select>
// //               {errors.state && (
// //                 <p className="mt-1 text-sm text-red-600">{errors.state.message}</p>
// //               )}
// //             </div>

// //             {/* City Selection */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 Select City <span className="text-red-500">*</span>
// //               </label>
// //               <select
// //                 {...register('city')}
// //                 disabled={!stateValue}
// //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition disabled:bg-gray-100 disabled:cursor-not-allowed"
// //               >
// //                 <option value="">Choose your city</option>
// //                 {cities.map((city) => (
// //                   <option key={city} value={city}>
// //                     {city}
// //                   </option>
// //                 ))}
// //               </select>
// //               {errors.city && (
// //                 <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
// //               )}
// //             </div>

// //             {/* Terms & Conditions */}
// //             <div className="space-y-3">
// //               <div className="flex items-start gap-3">
// //                 <input
// //                   {...register('termsAccepted')}
// //                   type="checkbox"
// //                   id="terms"
// //                   className="mt-1 w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
// //                 />
// //                 <label htmlFor="terms" className="text-sm text-gray-700">
// //                   I accept the{' '}
// //                   <a href="/policies/terms-conditions" target="_blank" className="text-amber-600 hover:text-amber-700 font-semibold">
// //                     Terms & Conditions
// //                   </a>
// //                 </label>
// //               </div>
// //               {errors.termsAccepted && (
// //                 <p className="text-sm text-red-600">{errors.termsAccepted.message}</p>
// //               )}

// //               <div className="flex items-start gap-3">
// //                 <input
// //                   {...register('privacyAccepted')}
// //                   type="checkbox"
// //                   id="privacy"
// //                   className="mt-1 w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
// //                 />
// //                 <label htmlFor="privacy" className="text-sm text-gray-700">
// //                   I accept the{' '}
// //                   <a href="/policies/privacy" target="_blank" className="text-amber-600 hover:text-amber-700 font-semibold">
// //                     Privacy Policy
// //                   </a>
// //                 </label>
// //               </div>
// //               {errors.privacyAccepted && (
// //                 <p className="text-sm text-red-600">{errors.privacyAccepted.message}</p>
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
// //                   Completing Profile...
// //                 </>
// //               ) : (
// //                 <>
// //                   Complete Profile
// //                   <CheckCircle2 className="w-5 h-5" />
// //                 </>
// //               )}
// //             </button>
// //           </form>

// //           {/* Info Box */}
// //           <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
// //             <p className="text-sm text-blue-800">
// //               <strong>Note:</strong> You can change your location anytime from your profile settings.
// //             </p>
// //           </div>
// //         </div>

// //         {/* Progress Indicator */}
// //         <div className="mt-6 flex items-center justify-center gap-2">
// //           <div className="w-3 h-3 rounded-full bg-amber-600"></div>
// //           <div className="w-3 h-3 rounded-full bg-amber-600"></div>
// //           <div className="w-3 h-3 rounded-full bg-amber-600"></div>
// //           <div className="w-3 h-3 rounded-full bg-gray-300"></div>
// //         </div>
// //         <p className="text-center text-sm text-gray-600 mt-2">Step 3 of 4</p>
// //       </div>
// //     </div>
// //   )
// // }


// // app/auth/complete-profile/page.tsx
// 'use client'

// import { useState, useEffect } from 'react'
// import { useForm, Controller } from 'react-hook-form' // Import Controller
// import { zodResolver } from '@hookform/resolvers/zod'
// import { locationSchema, LocationInput } from '@/lib/validations/auth'
// import { createUserProfile } from '@/lib/auth/auth-helpers' // Keep using this
// import { useAuth } from '@/lib/context/auth-context' // Import useAuth
// import { useRouter } from 'next/navigation'
// import { toast } from 'sonner'
// import { states, getDistrictsForState, StateName } from '@/lib/location-data' // Ensure StateName is exported or adjust type
// import { MapPin, CheckCircle2 } from 'lucide-react'

// // Shadcn UI Imports (Make sure these are correctly pathed)
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
// import { Button } from '@/components/ui/button'
// // import { Input } from '@/components/ui/input' // Not needed if showing data only
// import { Checkbox } from '@/components/ui/checkbox'
// import { Label } from '@/components/ui/label'
// // Import Card components if using them
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card' // Example

// export default function CompleteProfilePage() {
//   const [loading, setLoading] = useState(false)
//   const [initialData, setInitialData] = useState<any>(null) // To store data from localStorage
//   const [cities, setCities] = useState<string[]>([])
//   const router = useRouter()
//   const { user, refreshProfile, loading: authLoading } = useAuth(); // Get user and loading state

//   const {
//     handleSubmit,
//     formState: { errors },
//     watch,
//     setValue,
//     reset,
//     control // <-- Get control from useForm
//   } = useForm<LocationInput>({
//     resolver: zodResolver(locationSchema),
//     defaultValues: { // Set default values for checkboxes
//        termsAccepted: false,
//        privacyAccepted: false,
//        state: '', // Default state value
//        city: '', // Default city value
//     }
//   })

//   const stateValue = watch('state')

//   useEffect(() => {
//     if (authLoading) return; // Wait for auth state to load

//     // Get pending signup data from localStorage
//     const dataString = localStorage.getItem('pending_signup_data')

//     if (!user) {
//         // If user isn't authenticated when reaching this page, redirect
//         toast.error('Authentication required. Please click the link in your email again.')
//         router.push('/auth/login')
//         return;
//     }

//     if (dataString) {
//       try {
//         const parsedData = JSON.parse(dataString);
//         setInitialData(parsedData);
//       } catch (e) {
//          toast.error('Invalid initial data. Please start signup again.');
//          localStorage.removeItem('pending_signup_data'); // Clear invalid data
//          router.push('/auth/signup');
//       }
//     } else {
//          // If user is here but no pending data, maybe they refreshed or already completed?
//          // Check profile status from useAuth. If profile exists and is verified, redirect home.
//          // This check happens in ProtectedRoute now, but an extra check here is okay.
//          toast.info('No pending profile data found. Redirecting...');
//          router.push('/');
//     }

//   }, [router, user, authLoading]) // Depend on user and authLoading

//   useEffect(() => {
//     // Populate cities when stateValue changes
//     if (stateValue) {
//       // Cast stateValue to StateName if your types require it
//       const districts = getDistrictsForState(stateValue as StateName)
//       setCities(districts)
//       setValue('city', '') // Reset city selection when state changes
//     } else {
//         setCities([]); // Clear cities if no state selected
//     }
//   }, [stateValue, setValue])

//   const onSubmit = async (locationData: LocationInput) => {
//     // User must be authenticated here (checked in useEffect)
//     // initialData should contain name, email, mobile from localStorage
//     if (!initialData || !user) {
//         toast.error('Missing required data or user session. Please start signup again.');
//         router.push('/auth/signup');
//         return;
//     }

//     setLoading(true)

//     try {
//       // Call helper to create profile in 'users' table, linking via user.id
//       const result = await createUserProfile({
//         full_name: initialData.fullName,
//         email: user.email!, // Use email from the authenticated user object
//         mobile_number: initialData.mobileNumber, // Use mobile from stored data
//         state: locationData.state,
//         city: locationData.city,
//       })

//       if (result.success) {
//         // Clear stored data
//         localStorage.removeItem('pending_signup_data')

//         // Refresh the profile in AuthContext to get the new profile data
//         await refreshProfile();

//         toast.success('Profile completed successfully! Redirecting...')

//         setTimeout(() => {
//           router.push('/') // Redirect home
//           // No need for router.refresh() usually, as AuthProvider state update triggers re-render
//         }, 1000)
//       } else {
//         toast.error(result.error || 'Failed to create profile. The user profile might already exist.')
//       }
//     } catch (error: any) {
//       console.error('Profile completion error:', error)
//       toast.error(error.message || 'Something went wrong. Please try again.')
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Display loading states
//   if (authLoading || !initialData) {
//     return (
//         <div className="min-h-screen flex items-center justify-center">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
//         </div>
//     )
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 p-4">
//       <div className="w-full max-w-md">
//         {/* Card */}
//         <div className="glass-card p-8 rounded-2xl shadow-2xl border border-amber-200/50">
//           {/* Header */}
//           <div className="text-center mb-8">
//             <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full mb-4">
//               <MapPin className="w-8 h-8 text-white" />
//             </div>
//             <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
//               Complete Your Profile
//             </h1>
//             <p className="text-gray-600 mt-2">
//               Select your location to finalize your account
//             </p>
//           </div>

//           {/* User Info Preview */}
//           <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
//             <div className="flex items-center gap-3 mb-2">
//               <CheckCircle2 className="w-5 h-5 text-green-600" />
//               <p className="font-semibold text-gray-900">{initialData.fullName}</p>
//             </div>
//             <p className="text-sm text-gray-600 ml-8">{initialData.email}</p>
//             <p className="text-sm text-gray-600 ml-8">+91 {initialData.mobileNumber}</p>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//             {/* State Selection */}
//             <div>
//               <Label htmlFor="state-select">Select State <span className="text-red-500">*</span></Label>
//               {/* Use Shadcn Select */}
//               <Controller
//                  name="state"
//                  control={control}
//                  render={({ field }) => (
//                     <Select onValueChange={field.onChange} value={field.value} name={field.name}>
//                         <SelectTrigger id="state-select" className="w-full">
//                           <SelectValue placeholder="Choose your state" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           {states.map((state) => (
//                             <SelectItem key={state} value={state}>
//                               {state}
//                             </SelectItem>
//                           ))}
//                         </SelectContent>
//                     </Select>
//                  )}
//               />
//               {errors.state && (
//                 <p className="mt-1 text-sm text-red-600">{errors.state.message}</p>
//               )}
//             </div>

//             {/* City Selection */}
//             <div>
//               <Label htmlFor="city-select">Select City <span className="text-red-500">*</span></Label>
//                {/* Use Shadcn Select */}
//                <Controller
//                  name="city"
//                  control={control}
//                  render={({ field }) => (
//                     <Select onValueChange={field.onChange} value={field.value} name={field.name} disabled={!stateValue || cities.length === 0}>
//                         <SelectTrigger id="city-select" className="w-full">
//                           <SelectValue placeholder={!stateValue ? "Select state first" : "Choose your city"} />
//                         </SelectTrigger>
//                         <SelectContent>
//                           {cities.map((city) => (
//                             <SelectItem key={city} value={city}>
//                               {city}
//                             </SelectItem>
//                           ))}
//                         </SelectContent>
//                     </Select>
//                   )}
//                 />
//               {errors.city && (
//                 <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
//               )}
//             </div>

//             {/* Terms & Conditions - Using Shadcn Checkbox with Controller */}
//             <div className="space-y-3">
//                <Controller
//                     name="termsAccepted"
//                     control={control}
//                     render={({ field }) => (
//                         <div className="flex items-start gap-3">
//                             <Checkbox
//                                 id="terms"
//                                 checked={field.value}
//                                 onCheckedChange={field.onChange}
//                                 onBlur={field.onBlur} // Optional but good practice
//                                 ref={field.ref} // Pass the ref
//                                 aria-invalid={errors.termsAccepted ? "true" : "false"}
//                             />
//                             <div className="grid gap-1.5 leading-none">
//                                 <Label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
//                                     I accept the{' '}
//                                     <a href="/policies/terms-conditions" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 font-semibold underline">
//                                         Terms & Conditions
//                                     </a>
//                                 </Label>
//                                 {errors.termsAccepted && <p className="text-sm text-red-600">{errors.termsAccepted.message}</p>}
//                             </div>
//                         </div>
//                     )}
//                 />

//                <Controller
//                     name="privacyAccepted"
//                     control={control}
//                     render={({ field }) => (
//                         <div className="flex items-start gap-3">
//                             <Checkbox
//                                 id="privacy"
//                                 checked={field.value}
//                                 onCheckedChange={field.onChange}
//                                 onBlur={field.onBlur}
//                                 ref={field.ref}
//                                 aria-invalid={errors.privacyAccepted ? "true" : "false"}
//                             />
//                             <div className="grid gap-1.5 leading-none">
//                                 <Label htmlFor="privacy" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
//                                   I accept the{' '}
//                                   <a href="/policies/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 font-semibold underline">
//                                     Privacy Policy
//                                   </a>
//                                 </Label>
//                                 {errors.privacyAccepted && <p className="text-sm text-red-600">{errors.privacyAccepted.message}</p>}
//                             </div>
//                         </div>
//                     )}
//                 />
//             </div>


//             {/* Submit Button */}
//             <Button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {loading ? (
//                 <>
//                   <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//                   Completing Profile...
//                 </>
//               ) : (
//                 <>
//                   Complete Profile
//                   <CheckCircle2 className="w-5 h-5" />
//                 </>
//               )}
//             </Button>
//           </form>

//           {/* Info Box */}
//           <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
//             <p className="text-sm text-blue-800">
//               <strong>Note:</strong> You can update your location later from your profile settings.
//             </p>
//           </div>
//         </div>

//         {/* Progress Indicator */}
//         <div className="mt-6 flex items-center justify-center gap-2">
//           <div className="w-3 h-3 rounded-full bg-amber-600"></div>
//           <div className="w-3 h-3 rounded-full bg-amber-600"></div>
//           <div className="w-3 h-3 rounded-full bg-amber-600"></div>
//           <div className="w-3 h-3 rounded-full bg-amber-600"></div> {/* Mark final step */}
//         </div>
//         <p className="text-center text-sm text-gray-600 mt-2">Step 4 of 4</p>
//       </div>
//     </div>
//   )
// }

// // app/auth/complete-profile/page.tsx
// 'use client'

// import { useState, useEffect } from 'react'
// import { useForm, Controller } from 'react-hook-form' // Import Controller
// import { zodResolver } from '@hookform/resolvers/zod'
// import { locationSchema, LocationInput } from '@/lib/validations/auth'
// import { createUserProfile } from '@/lib/auth/auth-helpers' // Keep using this helper
// import { useAuth } from '@/lib/context/auth-context' // Import useAuth hook
// import { useRouter } from 'next/navigation'
// import { toast } from 'sonner'
// import { states, getDistrictsForState, StateName } from '@/lib/location-data' // Ensure StateName is exported or adjust type
// import { MapPin, CheckCircle2 } from 'lucide-react'

// // Shadcn UI Imports (Make sure these paths are correct for your project setup)
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
// import { Button } from '@/components/ui/button'
// import { Checkbox } from '@/components/ui/checkbox'
// import { Label } from '@/components/ui/label'
// // Import Card components if using them for styling the container
// // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// export default function CompleteProfilePage() {
//   const [loading, setLoading] = useState(false)
//   const [initialData, setInitialData] = useState<any>(null) // To store data from localStorage
//   const [cities, setCities] = useState<string[]>([])
//   const router = useRouter()
//   // Ensure profile and authLoading are destructured from useAuth
//   const { user, profile, refreshProfile, loading: authLoading } = useAuth();

//   const {
//     handleSubmit,
//     formState: { errors },
//     watch,
//     setValue,
//     reset, // Use reset if needed, though defaultValues might suffice
//     control // <-- Get control from useForm
//   } = useForm<LocationInput>({
//     resolver: zodResolver(locationSchema),
//     defaultValues: { // Set default values for the form fields
//        termsAccepted: false,
//        privacyAccepted: false,
//        state: '', // Default state value
//        city: '', // Default city value
//     }
//   })

//   // Watch the 'state' field to dynamically update cities
//   const stateValue = watch('state')

//   // Effect to load initial data and check auth/profile status
//   useEffect(() => {
//     if (authLoading) return; // Wait for authentication state to resolve

//     // Get pending signup data stored during the signup step
//     const dataString = localStorage.getItem('pending_signup_data')

//     if (!user) {
//       // Should not happen if ProtectedRoute works, but good safeguard.
//       // If user isn't authenticated when reaching this page, redirect to login.
//       toast.error('Authentication session expired. Please log in again.')
//       router.push('/auth/login')
//       return;
//     }

//     // If pending data exists in localStorage
//     if (dataString) {
//       try {
//         const parsedData = JSON.parse(dataString);
//         setInitialData(parsedData); // Store data needed for profile creation (name, mobile, email)
//         // Optionally pre-fill parts of the form using reset, though onSubmit uses initialData
//         // reset({ state: '', city: '', termsAccepted: false, privacyAccepted: false });
//       } catch (e) {
//          toast.error('Invalid signup data found. Please start the signup process again.');
//          localStorage.removeItem('pending_signup_data'); // Clear corrupted data
//          router.push('/auth/signup');
//       }
//     } else {
//       // No pending signup data found in localStorage.
//       // Check if the profile ALREADY exists and is verified (user might have refreshed or navigated back).
//       if (profile?.is_verified) {
//         // User is logged in and profile is already complete. Don't stay here.
//         toast.info('Your profile is already complete! Redirecting home...');
//         router.push('/'); // Redirect to the main page
//       } else {
//         // User is logged in, no pending data, profile incomplete. This indicates a lost state.
//         console.warn("User authenticated, profile incomplete, but no pending signup data found in localStorage.");
//         toast.error('Could not find necessary signup details. Please start the signup process again.');
//         router.push('/auth/signup'); // Redirect to signup as essential data (name, mobile) is lost
//       }
//     }
//   // Add `profile` to dependency array to react to profile loading
//   }, [router, user, profile, authLoading, reset]) // Added reset to deps array

//   // Effect to update the list of cities when the selected state changes
//   useEffect(() => {
//     if (stateValue) {
//       // Cast stateValue to StateName if your location-data types require it
//       const districts = getDistrictsForState(stateValue as StateName);
//       setCities(districts);
//       setValue('city', ''); // Reset city selection when state changes
//     } else {
//         setCities([]); // Clear cities if no state is selected
//     }
//   }, [stateValue, setValue]);

//   // Handle form submission
//   const onSubmit = async (locationData: LocationInput) => {
//     // Double-check required data before proceeding
//     if (!initialData || !user) {
//         toast.error('Missing required data or user session. Please start signup again.');
//         router.push('/auth/signup');
//         return;
//     }

//     setLoading(true); // Indicate loading state

//     try {
//       // Call the helper function to insert the profile into the 'users' table
//       const result = await createUserProfile({
//         // Pass the necessary data
//         full_name: initialData.fullName,
//         email: user.email!, // Use email definitively from the authenticated user object
//         mobile_number: initialData.mobileNumber, // Get mobile from the data stored during signup
//         state: locationData.state,
//         city: locationData.city,
//       });

//       // Handle the result of profile creation
//       if (result.success) {
//         localStorage.removeItem('pending_signup_data'); // Clean up localStorage
//         await refreshProfile(); // Refresh the AuthContext to get the new profile data
//         toast.success('Profile completed successfully! Redirecting...');
//         // Redirect to home page after a short delay
//         setTimeout(() => { router.push('/') }, 1000);
//       } else {
//         // Show error message from the helper function
//         toast.error(result.error || 'Failed to create profile. The profile might already exist.');
//       }
//     } catch (error: any) {
//       // Catch any unexpected errors during the process
//       console.error('Profile completion submit error:', error);
//       toast.error(error.message || 'An unexpected error occurred. Please try again.');
//     } finally {
//       setLoading(false); // End loading state
//     }
//   };

//   // Render loading indicator while auth state or initial data is loading
//   if (authLoading || (!initialData && user)) { // Show loading if auth is resolving OR user exists but initialData hasn't parsed yet
//      return (
//         <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
//              <div className="text-center">
//                 <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-amber-600 mx-auto"></div>
//                 <p className="mt-4 text-gray-600 font-medium">Loading...</p>
//             </div>
//         </div>
//     );
//   }

//   // If useEffect determined no user and isn't loading, it should have redirected. Render null briefly.
//   if (!user && !authLoading) return null;

//   // Render the main form content
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 p-4">
//       <div className="w-full max-w-md">
//         {/* Card Container */}
//         <div className="glass-card p-8 rounded-2xl shadow-2xl border border-amber-200/50">
//           {/* Header */}
//           <div className="text-center mb-8">
//             <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full mb-4">
//               <MapPin className="w-8 h-8 text-white" />
//             </div>
//             <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
//               Complete Your Profile
//             </h1>
//             <p className="text-gray-600 mt-2">
//               Select your location to finalize your account
//             </p>
//           </div>

//           {/* User Info Preview (Ensure initialData is loaded before accessing) */}
//           {initialData && (
//             <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
//               <div className="flex items-center gap-3 mb-2">
//                 <CheckCircle2 className="w-5 h-5 text-green-600" />
//                 <p className="font-semibold text-gray-900">{initialData.fullName}</p>
//               </div>
//               <p className="text-sm text-gray-600 ml-8">{initialData.email}</p>
//               <p className="text-sm text-gray-600 ml-8">+91 {initialData.mobileNumber}</p>
//             </div>
//           )}

//           {/* Form */}
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//             {/* State Selection using Controller */}
//             <div>
//               <Label htmlFor="state-select" className="block text-sm font-medium text-gray-700 mb-2">
//                 Select State <span className="text-red-500">*</span>
//               </Label>
//               <Controller
//                  name="state"
//                  control={control}
//                  render={({ field }) => (
//                     <Select onValueChange={field.onChange} value={field.value} name={field.name}>
//                         <SelectTrigger id="state-select" className="w-full">
//                           <SelectValue placeholder="Choose your state" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           {/* Ensure 'states' is imported correctly from location-data */}
//                           {states.map((state) => (
//                             <SelectItem key={state} value={state}>
//                               {state}
//                             </SelectItem>
//                           ))}
//                         </SelectContent>
//                     </Select>
//                  )}
//               />
//               {errors.state && (
//                 <p className="mt-1 text-sm text-red-600">{errors.state.message}</p>
//               )}
//             </div>

//             {/* City Selection using Controller */}
//             <div>
//               <Label htmlFor="city-select" className="block text-sm font-medium text-gray-700 mb-2">
//                 Select City <span className="text-red-500">*</span>
//               </Label>
//                <Controller
//                  name="city"
//                  control={control}
//                  render={({ field }) => (
//                     <Select
//                         onValueChange={field.onChange}
//                         value={field.value}
//                         name={field.name}
//                         disabled={!stateValue || cities.length === 0} // Disable if no state selected or no cities loaded
//                     >
//                         <SelectTrigger id="city-select" className="w-full">
//                           <SelectValue placeholder={!stateValue ? "Select state first" : "Choose your city"} />
//                         </SelectTrigger>
//                         <SelectContent>
//                           {/* Render cities based on the state */}
//                           {cities.map((city) => (
//                             <SelectItem key={city} value={city}>
//                               {city}
//                             </SelectItem>
//                           ))}
//                         </SelectContent>
//                     </Select>
//                   )}
//                 />
//               {errors.city && (
//                 <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
//               )}
//             </div>

//             {/* Terms & Conditions - Using Controller with Shadcn Checkbox */}
//             <div className="space-y-4"> {/* Increased spacing */}
//                <Controller
//                     name="termsAccepted"
//                     control={control}
//                     render={({ field }) => (
//                         <div className="flex items-start gap-3">
//                             <Checkbox
//                                 id="terms"
//                                 checked={field.value}
//                                 // Pass boolean value to onCheckedChange
//                                 onCheckedChange={(checked) => field.onChange(checked)}
//                                 onBlur={field.onBlur}
//                                 ref={field.ref}
//                                 aria-invalid={errors.termsAccepted ? "true" : "false"}
//                             />
//                             <div className="grid gap-1.5 leading-none">
//                                 <Label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
//                                     I accept the{' '}
//                                     <a href="/policies/terms-conditions" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 font-semibold underline">
//                                         Terms & Conditions
//                                     </a>
//                                 </Label>
//                                 {errors.termsAccepted && <p className="text-sm text-red-600">{errors.termsAccepted.message}</p>}
//                             </div>
//                         </div>
//                     )}
//                 />

//                {/* Privacy Policy - Using Controller with Shadcn Checkbox */}
//                <Controller
//                     name="privacyAccepted"
//                     control={control}
//                     render={({ field }) => (
//                         <div className="flex items-start gap-3">
//                             <Checkbox
//                                 id="privacy"
//                                 checked={field.value}
//                                 // Pass boolean value to onCheckedChange
//                                 onCheckedChange={(checked) => field.onChange(checked)}
//                                 onBlur={field.onBlur}
//                                 ref={field.ref}
//                                 aria-invalid={errors.privacyAccepted ? "true" : "false"}
//                             />
//                             <div className="grid gap-1.5 leading-none">
//                                 <Label htmlFor="privacy" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
//                                   I accept the{' '}
//                                   <a href="/policies/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 font-semibold underline">
//                                     Privacy Policy
//                                   </a>
//                                 </Label>
//                                 {errors.privacyAccepted && <p className="text-sm text-red-600">{errors.privacyAccepted.message}</p>}
//                             </div>
//                         </div>
//                     )}
//                 />
//             </div>

//             {/* Submit Button */}
//             <Button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white h-11 px-6 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" // Adjusted styles slightly
//             >
//               {loading ? (
//                 <>
//                   <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//                   Completing Profile...
//                 </>
//               ) : (
//                 <>
//                   Complete Profile
//                   <CheckCircle2 className="w-5 h-5" />
//                 </>
//               )}
//             </Button>
//           </form>

//           {/* Info Box */}
//           <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
//             <p className="text-sm text-blue-800">
//               <strong>Note:</strong> You can update your location later from your profile settings.
//             </p>
//           </div>
//         </div>

//         {/* Progress Indicator */}
//         <div className="mt-6 flex items-center justify-center gap-2">
//           <div className="w-3 h-3 rounded-full bg-amber-600"></div>
//           <div className="w-3 h-3 rounded-full bg-amber-600"></div>
//           <div className="w-3 h-3 rounded-full bg-amber-600"></div>
//           <div className="w-3 h-3 rounded-full bg-amber-600"></div> {/* Mark final step */}
//         </div>
//         <p className="text-center text-sm text-gray-600 mt-2">Step 4 of 4</p>
//       </div>
//     </div>
//   )
// }


'use client'

import { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { locationSchema, LocationInput } from '@/lib/validations/auth'
import { createUserProfile } from '@/lib/auth/auth-helpers'
import { useAuth } from '@/lib/context/auth-context'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { states, getDistrictsForState, StateName } from '@/lib/location-data'
import { MapPin, CheckCircle2 } from 'lucide-react'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

export default function CompleteProfilePage() {
  const [loading, setLoading] = useState(false)
  const [initialData, setInitialData] = useState<any>(null)
  const [cities, setCities] = useState<string[]>([])
  const router = useRouter()
  const { user, refreshProfile, loading: authLoading } = useAuth()

  const {
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    control
  } = useForm<LocationInput>({
    resolver: zodResolver(locationSchema),
    defaultValues: {
      termsAccepted: false,
      privacyAccepted: false,
      state: '',
      city: '',
    }
  })

  const stateValue = watch('state')

  useEffect(() => {
    if (authLoading) return

    if (!user) {
      toast.error('Please click the link in your email to continue.')
      router.push('/auth/login')
      return
    }

    // Try to get data from user metadata (set during signup)
    const userMetadata = user.user_metadata
    console.log('[CompleteProfile] User metadata:', userMetadata)

    if (userMetadata?.full_name && userMetadata?.mobile_number) {
      // Data from magic link metadata
      setInitialData({
        fullName: userMetadata.full_name,
        email: user.email,
        mobileNumber: userMetadata.mobile_number,
      })
      console.log('[CompleteProfile] Using data from user metadata')
    } else {
      // Fallback to localStorage
      const dataString = localStorage.getItem('pending_signup_data')
      if (dataString) {
        try {
          const parsedData = JSON.parse(dataString)
          setInitialData(parsedData)
          console.log('[CompleteProfile] Using data from localStorage')
        } catch (e) {
          toast.error('Invalid signup data. Please start again.')
          localStorage.removeItem('pending_signup_data')
          router.push('/auth/signup')
        }
      } else {
        toast.error('Could not find necessary details. Please signup again.')
        router.push('/auth/signup')
      }
    }
  }, [router, user, authLoading])

  useEffect(() => {
    if (stateValue) {
      const districts = getDistrictsForState(stateValue as StateName)
      setCities(districts)
      setValue('city', '')
    } else {
      setCities([])
    }
  }, [stateValue, setValue])

  const onSubmit = async (locationData: LocationInput) => {
    if (!initialData || !user) {
      toast.error('Missing required data. Please start signup again.')
      router.push('/auth/signup')
      return
    }

    setLoading(true)

    try {
      const result = await createUserProfile({
        full_name: initialData.fullName,
        email: user.email!,
        mobile_number: initialData.mobileNumber,
        state: locationData.state,
        city: locationData.city,
      })

      if (result.success) {
        localStorage.removeItem('pending_signup_data')
        await refreshProfile()
        toast.success('Profile completed successfully!')
        
        setTimeout(() => {
          router.push('/')
        }, 1000)
      } else {
        toast.error(result.error || 'Failed to create profile.')
      }
    } catch (error: any) {
      console.error('Profile completion error:', error)
      toast.error(error.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (authLoading || !initialData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-amber-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading your information...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 p-4">
      <div className="w-full max-w-md">
        <div className="glass-card p-8 rounded-2xl shadow-2xl border border-amber-200/50">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Complete Your Profile
            </h1>
            <p className="text-gray-600 mt-2">
              Select your location to finalize your account
            </p>
          </div>

          {/* User Info Preview */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <p className="font-semibold text-gray-900">{initialData.fullName}</p>
            </div>
            <p className="text-sm text-gray-600 ml-8">{initialData.email}</p>
            <p className="text-sm text-gray-600 ml-8">+91 {initialData.mobileNumber}</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* State Selection */}
            <div>
              <Label htmlFor="state-select">Select State <span className="text-red-500">*</span></Label>
              <Controller
                name="state"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value} name={field.name}>
                    <SelectTrigger id="state-select" className="w-full">
                      <SelectValue placeholder="Choose your state" />
                    </SelectTrigger>
                    <SelectContent>
                      {states.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.state && (
                <p className="mt-1 text-sm text-red-600">{errors.state.message}</p>
              )}
            </div>

            {/* City Selection */}
            <div>
              <Label htmlFor="city-select">Select City <span className="text-red-500">*</span></Label>
              <Controller
                name="city"
                control={control}
                render={({ field }) => (
                  <Select 
                    onValueChange={field.onChange} 
                    value={field.value} 
                    name={field.name} 
                    disabled={!stateValue || cities.length === 0}
                  >
                    <SelectTrigger id="city-select" className="w-full">
                      <SelectValue placeholder={!stateValue ? "Select state first" : "Choose your city"} />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.city && (
                <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
              )}
            </div>

            {/* Terms & Privacy Checkboxes */}
            <div className="space-y-3">
              <Controller
                name="termsAccepted"
                control={control}
                render={({ field }) => (
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="terms"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      onBlur={field.onBlur}
                      ref={field.ref}
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label htmlFor="terms" className="text-sm font-medium cursor-pointer">
                        I accept the{' '}
                        <a href="/policies/terms-conditions" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 font-semibold underline">
                          Terms & Conditions
                        </a>
                      </Label>
                      {errors.termsAccepted && <p className="text-sm text-red-600">{errors.termsAccepted.message}</p>}
                    </div>
                  </div>
                )}
              />

              <Controller
                name="privacyAccepted"
                control={control}
                render={({ field }) => (
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="privacy"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      onBlur={field.onBlur}
                      ref={field.ref}
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label htmlFor="privacy" className="text-sm font-medium cursor-pointer">
                        I accept the{' '}
                        <a href="/policies/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 font-semibold underline">
                          Privacy Policy
                        </a>
                      </Label>
                      {errors.privacyAccepted && <p className="text-sm text-red-600">{errors.privacyAccepted.message}</p>}
                    </div>
                  </div>
                )}
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Completing Profile...
                </>
              ) : (
                <>
                  Complete Profile
                  <CheckCircle2 className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </form>

          {/* Info Box */}
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> You can update your location later from your profile settings.
            </p>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <div className="w-3 h-3 rounded-full bg-amber-600"></div>
          <div className="w-3 h-3 rounded-full bg-amber-600"></div>
          <div className="w-3 h-3 rounded-full bg-amber-600"></div>
          <div className="w-3 h-3 rounded-full bg-amber-600"></div>
        </div>
        <p className="text-center text-sm text-gray-600 mt-2">Step 4 of 4</p>
      </div>
    </div>
  )
}