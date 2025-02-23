import React from 'react';
import { ImageUpload } from './ImageUpload';

export function UploadExample() {
  const handleUploadComplete = (url: string) => {
    console.log('Uploaded image URL:', url);
    // Here you can save the URL to your database or use it in your application
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-light tracking-wider text-gold-400 mb-6">
        Upload Image
      </h2>
      <ImageUpload
        onUploadComplete={handleUploadComplete}
        maxSizeMB={5}
        allowedTypes={['image/jpeg', 'image/png', 'image/webp']}
      />
    </div>
  );
}