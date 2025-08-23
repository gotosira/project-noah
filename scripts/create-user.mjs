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

function parseArgs(argv) {
  const map = new Map()
  for (let i = 0; i < argv.length; i++) {
    const token = argv[i]
    if (token.startsWith('--')) {
      const key = token.slice(2)
      const next = argv[i + 1]
      const value = next && !next.startsWith('--') ? next : 'true'
      if (value !== 'true') i++
      map.set(key, value)
    }
  }
  return map
}

const args = parseArgs(process.argv.slice(2))
const email = args.get('email') || process.env.SEED_USER_EMAIL
const password = args.get('password') || process.env.SEED_USER_PASSWORD

if (!email || !password) {
  console.error('Missing --email and/or --password')
  process.exit(1)
}

const url = process.env.VITE_SUPABASE_URL
const anonKey = process.env.VITE_SUPABASE_ANON_KEY
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!url || (!anonKey && !serviceKey)) {
  console.error('Missing Supabase env vars. Ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY (or SUPABASE_SERVICE_ROLE_KEY) are set.')
  process.exit(1)
}

const supabase = createClient(url, serviceKey || anonKey)

async function main() {
  try {
    if (serviceKey) {
      const { data, error } = await supabase.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
      })
      if (error) throw error
      console.log('User created (admin):', { id: data.user?.id, email: data.user?.email })
    } else {
      const { data, error } = await supabase.auth.signUp({ email, password })
      if (error) throw error
      console.log('User signUp initiated (anon). Check email inbox to confirm account.', { id: data.user?.id, email: data.user?.email })
    }
  } catch (err) {
    console.error('Failed to create user:', err?.message || err)
    process.exit(1)
  }
}

main()
