// // import { createClient } from '@supabase/supabase-js'
// // import { Database } from './database.types'

// // // Ensure your .env.local has SUPABASE_SERVICE_ROLE_KEY
// // const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
// // const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// // if (!supabaseServiceRoleKey) {
// //   throw new Error('SUPABASE_SERVICE_ROLE_KEY is not set in .env.local')
// // }

// // // This client bypasses RLS and should ONLY be used in Server Actions/server-side code.
// // export const createAdminClient = () => {
// //   return createClient<Database>(supabaseUrl, supabaseServiceRoleKey, {
// //     auth: {
// //       autoRefreshToken: false,
// //       persistSession: false,
// //     },
// //   })
// // }

// import { createClient } from '@supabase/supabase-js'
// import { Database } from './database.types'

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
// const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// if (!supabaseUrl || !supabaseServiceRoleKey) {
//   throw new Error('Missing Supabase environment variables')
// }

// export const createAdminClient = () => {
//   return createClient<Database>(supabaseUrl, supabaseServiceRoleKey, {
//     auth: {
//       autoRefreshToken: false,
//       persistSession: false,
//     },
//   })
// }

import { createClient } from '@supabase/supabase-js'
import { Database } from './database.types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error('Missing Supabase environment variables')
}

// Export as createAdminClient to match your imports
export const createAdminClient = () => {
  return createClient<Database>(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}