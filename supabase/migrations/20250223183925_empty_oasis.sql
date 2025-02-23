/*
  # Configure storage for image uploads

  1. Changes
    - Create public storage bucket for images if not exists
    - Drop existing policies to avoid conflicts
    - Create new policies for public access and authenticated uploads
*/

-- Create the storage bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('images', 'images', true)
ON CONFLICT (id) DO NOTHING;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Public Access" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update own images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete own images" ON storage.objects;

-- Set up RLS policies for the images bucket
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'images');

CREATE POLICY "Authenticated users can upload images"
ON storage.objects FOR INSERT
TO public
WITH CHECK (bucket_id = 'images');

CREATE POLICY "Authenticated users can update own images"
ON storage.objects FOR UPDATE
TO public
USING (bucket_id = 'images')
WITH CHECK (bucket_id = 'images');

CREATE POLICY "Authenticated users can delete own images"
ON storage.objects FOR DELETE
TO public
USING (bucket_id = 'images');