import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://teiiihfrnoybdttheiwg.supabase.co';
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlaWlpaGZybm95YmR0dGhlaXdnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NTYyNTk4NSwiZXhwIjoxOTYxMjAxOTg1fQ.jc0-urj_a-c_AI9Dtehqf15YHUAwpIGOBZBlQKAs6iE';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
