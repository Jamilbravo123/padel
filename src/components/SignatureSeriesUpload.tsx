import React, { useState, ChangeEvent } from 'react';

interface UploadedImage {
  id: string;
  file: File;
  preview: string;
}

export default function SignatureSeriesUpload() {
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [selectedProduct, setSelectedProduct] = useState('kinetic-sovereign');

  const products = [
    { id: 'kinetic-sovereign', name: 'Kinetic Sovereign' },
    { id: 'kinetic-imperial', name: 'Kinetic Imperial' },
    { id: 'kinetic-prestige', name: 'Kinetic Prestige' }
  ];

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newImages: UploadedImage[] = Array.from(files).map(file => ({
      id: `${selectedProduct}-${Date.now()}`,
      file,
      preview: URL.createObjectURL(file)
    }));

    // Save the images to the public directory
    newImages.forEach(image => {
      const formData = new FormData();
      formData.append('image', image.file);
      
      // Copy the file to public/images/signature-series
      const reader = new FileReader();
      reader.onloadend = () => {
        const fileName = `${image.id}.${image.file.name.split('.').pop()}`;
        // In a real application, you would handle the file upload to a server
        // For now, we'll just log the path where the image should go
        console.log(`Image would be saved to: /images/signature-series/${fileName}`);
      };
      reader.readAsDataURL(image.file);
    });

    setUploadedImages(prev => [...prev, ...newImages]);
  };

  const handleProductChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedProduct(event.target.value);
  };

  return (
    <div className="p-6 bg-gradient-to-b from-black via-gold-900/5 to-black rounded-xl border border-gold-900/20">
      <h2 className="text-2xl font-light tracking-wider text-gold-400 mb-6">Upload Product Images</h2>
      
      <div className="mb-6">
        <label className="block text-gold-200 mb-2">Select Product:</label>
        <select 
          value={selectedProduct}
          onChange={handleProductChange}
          className="w-full bg-black border border-gold-900/20 rounded-lg p-3 text-gold-200 focus:border-gold-400/50 focus:outline-none"
        >
          {products.map(product => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-gold-200 mb-2">Upload Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full bg-black border border-gold-900/20 rounded-lg p-3 text-gold-200 focus:border-gold-400/50 focus:outline-none"
        />
      </div>

      {uploadedImages.length > 0 && (
        <div>
          <h3 className="text-xl font-light tracking-wider text-gold-400 mb-4">Uploaded Images</h3>
          <div className="grid grid-cols-3 gap-4">
            {uploadedImages.map(image => (
              <div key={image.id} className="relative aspect-[3/4] bg-black rounded-lg overflow-hidden">
                <img 
                  src={image.preview} 
                  alt="Uploaded preview" 
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
