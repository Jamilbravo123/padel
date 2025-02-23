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
    <div className="relative min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
          <h2 className="text-gold-400 text-xl md:text-4xl tracking-[0.2em] font-light mb-4 md:mb-6">
            NOT JUST A RACKET.
          </h2>
          
          <div className="space-y-1 md:space-y-4">
            <h1 className="text-2xl md:text-7xl font-light tracking-wider">
              A
            </h1>
            <h1 className="text-xl md:text-7xl font-light tracking-wider leading-tight">
              REVOLUTION
            </h1>
            <h1 className="text-xl md:text-7xl font-light tracking-wider leading-tight">
              IN PADEL.
            </h1>
          </div>

          <p className="text-gold-400 text-base md:text-2xl font-serif italic mt-4 md:mt-8">
            Crafted for the Elite
          </p>

          <div className="mt-6 md:mt-16">
            <button 
              className="group relative inline-flex items-center justify-center"
              onClick={() => {/* Add your click handler */}}
            >
              <div className="absolute inset-0 rounded-full bg-[#4A3A21] opacity-80 blur-xl group-hover:opacity-100 transition-opacity"></div>
              <div className="relative px-6 md:px-12 py-3 md:py-6 text-base md:text-2xl text-gold-400 tracking-[0.2em] font-light">
                JOIN THE EXCLUSIVE LIST
              </div>
            </button>
          </div>

          <p className="text-gold-400/80 text-[10px] md:text-base tracking-[0.2em] mt-4 md:mt-8">
            ONLY BY INVITE
          </p>

          <div className="p-6 bg-gradient-to-b from-black via-gold-900/5 to-black rounded-xl border border-gold-900/20 mt-12">
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
        </div>
      </div>
    </div>
  );
}
