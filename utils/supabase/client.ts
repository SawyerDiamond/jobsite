// filepath: /Users/sawyer/Documents/Code/jobsite/utils/supabase/client.ts

import { createClient as createSupabaseClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const createClient = () => {
  return createSupabaseClient(supabaseUrl!, supabaseAnonKey);
};
