/*
  # Fix storage setup and policies

  1. Changes
    - Ensure storage bucket exists
    - Reset and recreate all storage policies
    - Allow public access for all operations

  2. Security Note
    - This configuration allows public access for development
    - For production, implement proper authentication
*/

-- Ensure the storage bucket exists
INSERT INTO storage.buckets (id, name, public)
VALUES ('images', 'images', true)
ON CONFLICT (id) DO NOTHING;

-- Drop all existing policies to start fresh
DO $$ 
BEGIN
  DROP POLICY IF EXISTS "Public Access" ON storage.objects;
  DROP POLICY IF EXISTS "Public Upload Access" ON storage.objects;
  DROP POLICY IF EXISTS "Public Update Access" ON storage.objects;
  DROP POLICY IF EXISTS "Public Delete Access" ON storage.objects;
  DROP POLICY IF EXISTS "Authenticated users can upload images" ON storage.objects;
  DROP POLICY IF EXISTS "Authenticated users can update own images" ON storage.objects;
  DROP POLICY IF EXISTS "Authenticated users can delete own images" ON storage.objects;
EXCEPTION 
  WHEN OTHERS THEN NULL;
END $$;

-- Enable RLS
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- Create new policies with public access
CREATE POLICY "Allow public select"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'images');

CREATE POLICY "Allow public insert"
ON storage.objects FOR INSERT
TO public
WITH CHECK (bucket_id = 'images');

CREATE POLICY "Allow public update"
ON storage.objects FOR UPDATE
TO public
USING (bucket_id = 'images')
WITH CHECK (bucket_id = 'images');

CREATE POLICY "Allow public delete"
ON storage.objects FOR DELETE
TO public
USING (bucket_id = 'images');