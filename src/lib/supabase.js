import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lnvjvtxmbjytjgixosfb.supabase.co'
const supabaseKey = 'sb_publishable_JMC-TtANxqzAgJ0TG1nEsg_hEAdsPvq'

export const supabase = createClient(supabaseUrl, supabaseKey)