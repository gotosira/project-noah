import 'dotenv/config'
import fetch, { Headers, Request, Response } from 'node-fetch'
import { createClient } from '@supabase/supabase-js'

globalThis.fetch = fetch
// @ts-ignore
globalThis.Headers = Headers
// @ts-ignore
globalThis.Request = Request
// @ts-ignore
globalThis.Response = Response

const url = process.env.VITE_SUPABASE_URL
const anonKey = process.env.VITE_SUPABASE_ANON_KEY
if (!url || !anonKey) {
  console.error('Missing env')
  process.exit(1)
}
const supabase = createClient(url, anonKey)

const email = process.argv[2]
const redirect = process.argv[3] || 'http://localhost:5173/auth'
if (!email) {
  console.error('Usage: node scripts/resend-confirm.mjs <email> [redirectUrl]')
  process.exit(1)
}

const { data, error } = await supabase.auth.resend({ type: 'signup', email, options: { emailRedirectTo: redirect } })
console.log('redirectTo:', redirect)
console.log('data:', JSON.stringify(data, null, 2))
console.log('error:', error?.message || error)
