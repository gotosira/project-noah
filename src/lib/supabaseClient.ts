import { createClient } from '@supabase/supabase-js'

// Fallbacks for static hosting (e.g., GitHub Pages) where env vars may not be injected
const FALLBACK_URL = 'https://pjugjcckydxkwgbuyhdv.supabase.co'
const FALLBACK_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqdWdqY2NreWR4a3dnYnV5aGR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU5MTU3NDEsImV4cCI6MjA3MTQ5MTc0MX0.yctCfbwr70iEOP0FERVDon_jAkzf7SPzGtRbdsXX4Ms'

// Prefer Vite env when available, otherwise fall back
const envUrl = (import.meta as any)?.env?.VITE_SUPABASE_URL
const envAnon = (import.meta as any)?.env?.VITE_SUPABASE_ANON_KEY

const url: string = (envUrl && String(envUrl)) || FALLBACK_URL
const anonKey: string = (envAnon && String(envAnon)) || FALLBACK_ANON_KEY

export const supabase = createClient(url, anonKey)

export default supabase
