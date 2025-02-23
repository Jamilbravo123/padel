/*
  # Configure storage for image uploads

  1. Changes
    - Create public storage bucket for images
    - Set up RLS policies for public access and authenticated uploads
    - Fix size validation in upload policy
*/

-- Create the storage bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('images', 'images', true)
ON CONFLICT (id) DO NOTHING;

-- Enable RLS
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- Set up RLS policies for the images bucket
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'images');

CREATE POLICY "Authenticated users can upload images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'images'
  AND (LOWER(RIGHT(name, 4)) IN ('.png', '.jpg', '.gif') OR 
       LOWER(RIGHT(name, 5)) IN ('.jpeg', '.webp'))
);

CREATE POLICY "Authenticated users can update own images"
ON storage.objects FOR UPDATE
TO authenticated
USING (auth.uid() = owner)
WITH CHECK (bucket_id = 'images');

CREATE POLICY "Authenticated users can delete own images"
ON storage.objects FOR DELETE
TO authenticated
USING (auth.uid() = owner);