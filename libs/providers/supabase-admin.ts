import { createClient } from '@supabase/supabase-js';
// For Admin ROLE
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

export { supabaseAdmin };
