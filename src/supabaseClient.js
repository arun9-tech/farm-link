import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// DEBUGGING LINES:
console.log("URL:", supabaseUrl);
console.log("KEY:", supabaseAnonKey ? "Key is loaded" : "Key is UNDEFINED");

export const supabase = createClient(supabaseUrl, supabaseAnonKey)