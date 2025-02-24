import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Award, Plus, Minus } from 'lucide-react';

// Custom Icon Components
const WeightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
    <path d="M8 4h8a2 2 0 012 2v2m-5 0v12m0-12h5m-5 0H6m5 12H4a2 2 0 01-2-2V8a2 2 0 012-2h2m10 12h4a2 2 0 002-2V8a2 2 0 00-2-2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BalanceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
    <path d="M12 4v2m0 0L7 8l5 2m0-2l5 2-5 2m0-2v12" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 21h16" strokeLinecap="round"/>
  </svg>
);

const FrameIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
    <path d="M12 3L4 7v10l8 4 8-4V7l-8-4z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 7l8 4 8-4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 11v10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ControlIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
    <path d="M12 2v4m0 0C7 6 3 10 3 15h18c0-5-4-9-9-9zm-9 9v6a3 3 0 003 3h12a3 3 0 003-3v-6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 9v6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PowerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface ProductSpec {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface ProductColor {
  name: string;
  value: string;
  images: string[];
}

const products = {
  'kinetic-sovereign': {
    name: "Kinetic Sovereign",
    description: "Limited Edition Professional Racket",
    price: "€599",
    colors: [
      {
        name: "Gold Rush",
        value: "#D4AF37",
        images: [
          "/images/signature-series/top-command-025.png.jpg",
          "/images/signature-series/top-command-025.png.jpg",
          "/images/signature-series/top-command-025.png.jpg"
        ]
      },
      {
        name: "Stealth Black",
        value: "#1A1A1A",
        images: [
          "/images/signature-series/top-command-025.png.jpg",
          "/images/signature-series/top-command-025.png.jpg",
          "/images/signature-series/top-command-025.png.jpg"
        ]
      },
      {
        name: "Rose Gold",
        value: "#FFB6C1",
        images: [
          "/images/signature-series/top-command-025.png.jpg",
          "/images/signature-series/top-command-025.png.jpg",
          "/images/signature-series/top-command-025.png.jpg"
        ]
      }
    ],
    longDescription: "The Kinetic Sovereign represents the pinnacle of padel engineering. This limited edition professional racket combines cutting-edge technology with artisanal craftsmanship to deliver unparalleled performance on the court.",
    specs: [
      { icon: <WeightIcon />, label: "Weight", value: "365g" },
      { icon: <BalanceIcon />, label: "Balance", value: "265mm" },
      { icon: <FrameIcon />, label: "Frame", value: "Carbon Fiber" },
      { icon: <ControlIcon />, label: "Control", value: "95%" },
      { icon: <PowerIcon />, label: "Power", value: "90%" },
    ],
    features: [
      "Aerospace-grade carbon fiber construction",
      "Diamond-shaped sweet spot optimization",
      "Dual-core EVA foam technology",
      "Anti-vibration system",
      "Premium grip with moisture control",
      "Limited edition numbering",
    ]
  },
  'kinetic-imperial': {
    name: "Kinetic Imperial",
    description: "Tournament Grade Excellence",
    price: "€549",
    image: "https://www.padelpoint.es/blog/wp-content/uploads/2023/01/Siux-Pegasus-Luxury-2.0-2023.webp",
    longDescription: "The Kinetic Imperial is engineered for tournament excellence. This professional-grade racket delivers exceptional control and power, making it the perfect choice for competitive players.",
    specs: [
      { icon: <WeightIcon />, label: "Weight", value: "355g" },
      { icon: <BalanceIcon />, label: "Balance", value: "260mm" },
      { icon: <FrameIcon />, label: "Frame", value: "Carbon Fiber" },
      { icon: <ControlIcon />, label: "Control", value: "90%" },
      { icon: <PowerIcon />, label: "Power", value: "95%" },
    ],
    features: [
      "Tournament-grade carbon fiber frame",
      "Optimized sweet spot placement",
      "High-density EVA core",
      "Professional anti-vibration system",
      "Tournament-proven grip technology",
      "Competition-ready design",
    ]
  },
  'kinetic-prestige': {
    name: "Kinetic Prestige",
    description: "Professional Performance Series",
    price: "€499",
    image: "https://www.padelpoint.es/blog/wp-content/uploads/2023/01/Siux-Spyder-Luxury-2.0-2023.webp",
    longDescription: "The Kinetic Prestige combines professional performance with exceptional value. This racket delivers outstanding control and power for players seeking tournament-level quality.",
    specs: [
      { icon: <WeightIcon />, label: "Weight", value: "350g" },
      { icon: <BalanceIcon />, label: "Balance", value: "255mm" },
      { icon: <FrameIcon />, label: "Frame", value: "Carbon Fiber" },
      { icon: <ControlIcon />, label: "Control", value: "93%" },
      { icon: <PowerIcon />, label: "Power", value: "88%" },
    ],
    features: [
      "Professional-grade carbon construction",
      "Enhanced sweet spot technology",
      "Dual-density EVA core",
      "Integrated anti-vibration system",
      "High-performance grip system",
      "Professional series design",
    ]
  }
};

function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = id ? products[id as keyof typeof products] : null;
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product?.colors[0] || null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Product not found</div>;
  }

  const renderSpecs = (specs: ProductSpec[]) => (
    <div className="grid grid-cols-5 gap-8">
      {specs.map((spec, index) => (
        <div key={index} className="text-center group">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-gold-900/30 to-gold-900/10 border border-gold-800/30 flex items-center justify-center text-gold-400 group-hover:text-gold-300 transition-colors">
            {spec.icon}
          </div>
          <div className="text-sm text-gold-200 font-light tracking-wide">{spec.label}</div>
          <div className="text-gold-400 font-medium mt-1">{spec.value}</div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-24">
        <Link to="/" className="inline-flex items-center text-gold-400 hover:text-gold-300 transition-colors mb-12 md:mb-24">
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Collection
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Product Images */}
          <div className="space-y-6 -mt-6 md:-mt-12">
            <div className="aspect-[3/4] relative p-4 md:p-6 bg-gradient-to-b from-black via-gold-900/5 to-black rounded-3xl border border-gold-900/20">
              <img
                src={selectedColor.images[selectedImage]}
                alt={`${product.name} - ${selectedColor.name}`}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              {selectedColor.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square p-2 md:p-4 rounded-xl border ${
                    selectedImage === index
                      ? 'border-gold-400 bg-gold-900/20'
                      : 'border-gold-900/20 hover:border-gold-700/40'
                  } transition-colors`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="mt-8 md:mt-0">
            <h1 className="text-3xl md:text-4xl font-light tracking-wider text-gold-400">{product.name}</h1>
            <p className="text-lg md:text-xl text-gold-200 mt-2">{product.description}</p>
            <p className="text-2xl md:text-3xl mt-4 md:mt-6">{product.price}</p>

            <div className="mt-8 md:mt-12 space-y-6 md:space-y-8">
              {/* Color Selection */}
              <div>
                <h3 className="text-sm font-medium text-gold-400 mb-3 md:mb-4">COLOR</h3>
                <div className="flex space-x-3 md:space-x-4">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => {
                        setSelectedColor(color);
                        setSelectedImage(0);
                      }}
                      className={`group relative w-10 h-10 md:w-12 md:h-12 rounded-full ${
                        selectedColor.name === color.name
                          ? 'ring-2 ring-gold-400'
                          : 'hover:ring-2 hover:ring-gold-600'
                      }`}
                    >
                      <span
                        className="block w-full h-full rounded-full"
                        style={{ backgroundColor: color.value }}
                      />
                      <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {color.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selection */}
              <div>
                <h3 className="text-sm font-medium text-gold-400 mb-3 md:mb-4">QUANTITY</h3>
                <div className="inline-flex items-center bg-gold-900/10 rounded-full">
                  <button
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-gold-400 hover:text-gold-300 transition-colors"
                  >
                    <Minus className="w-3 h-3 md:w-4 md:h-4" />
                  </button>
                  <div className="w-10 md:w-12 text-center">
                    <span className="text-lg md:text-xl text-gold-400 font-light">{quantity}</span>
                  </div>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-gold-400 hover:text-gold-300 transition-colors"
                  >
                    <Plus className="w-3 h-3 md:w-4 md:h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-12">
              <p className="text-sm md:text-base text-gold-200 leading-relaxed">{product.longDescription}</p>
            </div>

            <button className="w-full mt-8 md:mt-12 bg-gradient-premium text-black px-6 md:px-8 py-3 md:py-4 rounded-full hover:opacity-90 transition-opacity font-medium">
              Add to Cart
            </button>

            <div className="mt-12 md:mt-16">
              <h2 className="text-lg md:text-xl font-light tracking-wider text-gold-400 mb-6 md:mb-8">Specifications</h2>
              {renderSpecs(product.specs)}
            </div>

            <div className="mt-12 md:mt-16">
              <h2 className="text-lg md:text-xl font-light tracking-wider text-gold-400 mb-6 md:mb-8">Features</h2>
              <ul className="space-y-3 md:space-y-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm md:text-base text-gold-200">
                    <Award className="w-3 h-3 md:w-4 md:h-4 text-gold-400 mr-2 md:mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;