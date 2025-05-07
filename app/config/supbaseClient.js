import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://rsnzsaamsgkjpdikrfvk.supabase.co";

// Create a single supabase client for interacting with your database
const supabase = createClient(SUPABASE_URL, process.env.SUPABASE_KEY);

export default supabase;
