/*
  # Create storage bucket for images

  1. Storage Setup
    - Create 'images' bucket for storing product images
    - Enable public access for viewing images
    - Restrict uploads to authenticated users only

  2. Security
    - Enable RLS policies for storage
    - Add policy for public read access
    - Add policy for authenticated user uploads
    - File size limit of 5MB
    - Restrict to image file types only
*/

-- Create the storage bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('images', 'images', true)
ON CONFLICT (id) DO NOTHING;

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
  AND (COALESCE(NULLIF(metadata->>'size', '')::int, 0) < 5242880)
);