/*
  # Update storage policies for public access

  1. Changes
    - Drop existing policies
    - Create new policies allowing public access for all operations
    - Keep file type and size restrictions

  2. Security Note
    - This configuration allows public access for development
    - In production, implement proper authentication
*/

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Public Access" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update own images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete own images" ON storage.objects;

-- Enable RLS
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- Set up RLS policies for the images bucket
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'images');

CREATE POLICY "Public Upload Access"
ON storage.objects FOR INSERT
TO public
WITH CHECK (
  bucket_id = 'images'
  AND (LOWER(RIGHT(name, 4)) IN ('.png', '.jpg', '.gif') OR 
       LOWER(RIGHT(name, 5)) IN ('.jpeg', '.webp'))
);

CREATE POLICY "Public Update Access"
ON storage.objects FOR UPDATE
TO public
USING (bucket_id = 'images')
WITH CHECK (bucket_id = 'images');

CREATE POLICY "Public Delete Access"
ON storage.objects FOR DELETE
TO public
USING (bucket_id = 'images');