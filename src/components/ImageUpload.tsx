import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ImageUploadProps {
  onUploadComplete?: (url: string) => void;
  maxSizeMB?: number;
  allowedTypes?: string[];
}

export function ImageUpload({
  onUploadComplete,
  maxSizeMB = 5,
  allowedTypes = ['image/jpeg', 'image/png', 'image/webp']
}: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Reset states
    setError(null);
    setPreview(null);

    // Validate file type
    if (!allowedTypes.includes(file.type)) {
      setError('Invalid file type. Please upload a valid image.');
      return;
    }

    // Validate file size
    if (file.size > maxSizeMB * 1024 * 1024) {
      setError(`File size must be less than ${maxSizeMB}MB`);
      return;
    }

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Upload to Supabase Storage
    try {
      setIsUploading(true);
      
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
      
      const { data, error: uploadError } = await supabase.storage
        .from('images')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('images')
        .getPublicUrl(data.path);

      onUploadComplete?.(publicUrl);
      
    } catch (err) {
      setError('Failed to upload image. Please try again.');
      console.error('Upload error:', err);
    } finally {
      setIsUploading(false);
    }
  };

  const clearPreview = () => {
    setPreview(null);
    setError(null);
  };

  return (
    <div className="w-full">
      <div className={`relative rounded-xl p-8 transition-all ${
        error ? 'bg-red-50/5' : 'bg-gold-900/5'
      }`}>
        {/* Preview Image */}
        {preview && (
          <div className="relative mb-4">
            <img
              src={preview}
              alt="Upload preview"
              className="w-full h-48 object-contain rounded-lg"
            />
            <button
              onClick={clearPreview}
              className="absolute top-2 right-2 p-1 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
        )}

        {/* Upload Interface */}
        <label className="flex flex-col items-center justify-center cursor-pointer">
          <input
            type="file"
            className="hidden"
            accept={allowedTypes.join(',')}
            onChange={handleFileSelect}
            disabled={isUploading}
          />
          
          <button className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold-900/50 via-gold-400/20 to-gold-900/50 hover:from-gold-400/30 hover:via-gold-400/20 hover:to-gold-400/30 transition-all ${
            error ? 'from-red-900/50 via-red-400/20 to-red-900/50' : ''
          }`}>
            <Upload className={`w-5 h-5 ${error ? 'text-red-400' : 'text-gold-400'}`} />
            <span className={`${error ? 'text-red-400' : 'text-gold-400'}`}>
              {isUploading ? 'Uploading...' : 'Select Image'}
            </span>
          </button>
          
          <p className="text-sm text-gold-400/60 mt-3">
            Maximum file size: {maxSizeMB}MB
          </p>
        </label>

        {/* Error Message */}
        {error && (
          <p className="mt-2 text-sm text-red-400 text-center">{error}</p>
        )}
      </div>
    </div>
  );
}