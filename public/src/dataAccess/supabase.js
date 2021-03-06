/*
  Supabase configuration.
*/

// Supabase dependency is imported near end of index.html
const { createClient } = supabase;

// Get these values from the API section of your Supabase account
const supabaseUrl = 'supabase API url';
const supabaseKey = 'supabase api key';

// Note text case: Supabase != supabase
const Supabase = createClient(supabaseUrl, supabaseKey);

console.log('Supabase Instance: ', Supabase);

// Export to allow import elsewhere
export  {
  Supabase
};

