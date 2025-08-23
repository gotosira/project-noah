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
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
if (!url || !serviceKey) {
  console.error('Missing VITE_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY')
  process.exit(1)
}
const supabase = createClient(url, serviceKey)

const email = process.argv[2]
if (!email) {
  console.error('Usage: node scripts/confirm-user.mjs <email>')
  process.exit(1)
}

const { data: list, error: listErr } = await supabase.auth.admin.listUsers({ page: 1, perPage: 1000 })
if (listErr) {
  console.error('List users error:', listErr.message || listErr)
  process.exit(1)
}
const found = list.users.find(u => u.email === email)
if (!found) {
  console.error('User not found for email:', email)
  process.exit(1)
}

const { data, error } = await supabase.auth.admin.updateUserById(found.id, { email_confirm: true })
if (error) {
  console.error('Confirm error:', error.message || error)
  process.exit(1)
}
console.log('Confirmed user:', { id: data.user?.id, email: data.user?.email })
