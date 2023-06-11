import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabase = createClient(
  'https://kqbecxpmalqruggknzuq.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxYmVjeHBtYWxxcnVnZ2tuenVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY0ODkyNTEsImV4cCI6MjAwMjA2NTI1MX0.1ic6mirXfVT3mENuMAtaMjC8ZOTIlfcmfUYMm45elxk',
);

export const getSession = async () => {
  const { data, error } = await supabase.auth.getSession();

  if (data === null) {
    return { session: null, error };
  }
  return { session: data.session, error };
};

export const login = async (provider) => {
  return await supabase.auth.signInWithOAuth({
    provider,
  });
};

export const logout = async () => {
  return await supabase.auth.signOut();
};
