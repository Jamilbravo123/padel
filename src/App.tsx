import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { ChevronRight, Instagram, Youtube, Linkedin, ArrowUpRight } from 'lucide-react';
import ProductDetail from './components/ProductDetail';
import SignatureSeriesUpload from './components/SignatureSeriesUpload';
import PreRegister from './components/PreRegister';

const KineticLogo = () => (
  <svg viewBox="0 0 412.81 128.57" className="w-24 h-24">
    <path d="M46.13,80.55C51.84,74.83,131.88,.56,131.88,.56h-21.57L35.32,70.86s-.66,.64-1.51,1.82c-3.6,4.75-11.43,18.05,1.52,31l9.21,9.21h19.59l-20.4-23.05s-3.29-3.58,2.42-9.29Z" className="fill-gold-400"/>
    <path d="M50.98,86.4L74.59,112.89h21.32L61.64,75.96L50.98,86.4Z" className="fill-gold-600"/>
    <path d="M67.36,71.2l39.28,41.69h25.17L80.11,58.66L67.36,71.2Z" className="fill-gold-600"/>
    <path d="M49.4,.56L6.24,41.47s-12.37,11.86,0,30.15c0,0,3.67-15.79,11.59-23.3L68.23,.56h-18.83Z" className="fill-gold-400"/>
    <path d="M78.67,.56L19.96,56.25s-12.37,11.86,0,30.16c0,0,3.67-15.79,11.59-23.3L97.5,.56h-18.83Z" className="fill-gold-400"/>
  </svg>
);

const SmallKineticLogo = () => (
  <svg viewBox="0 0 412.81 128.57" className="w-[90px] h-[90px] inline-block align-middle">
    <path d="M46.13,80.55C51.84,74.83,131.88,.56,131.88,.56h-21.57L35.32,70.86s-.66,.64-1.51,1.82c-3.6,4.75-11.43,18.05,1.52,31l9.21,9.21h19.59l-20.4-23.05s-3.29-3.58,2.42-9.29Z" className="fill-gold-400"/>
    <path d="M50.98,86.4L74.59,112.89h21.32L61.64,75.96L50.98,86.4Z" className="fill-gold-600"/>
    <path d="M67.36,71.2l39.28,41.69h25.17L80.11,58.66L67.36,71.2Z" className="fill-gold-600"/>
    <path d="M49.4,.56L6.24,41.47s-12.37,11.86,0,30.15c0,0,3.67-15.79,11.59-23.3L68.23,.56h-18.83Z" className="fill-gold-400"/>
    <path d="M78.67,.56L19.96,56.25s-12.37,11.86,0,30.16c0,0,3.67-15.79,11.59-23.3L97" className="fill-gold-400"/>
  </svg>
);

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full mt-6 md:mt-0" style={{ aspectRatio: '1920/1080' }}>
        {/* Background Image */}
        <img 
          src="/images/signature-series/Padel 1.jpg"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/[0.33]" />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <div className="space-y-6 animate-fade-in-up max-w-6xl mx-auto">
            <h2 className="text-gold-400 text-lg md:text-xl tracking-[0.2em]">SIGNATURE COLLECTION</h2>
            <h1 className="text-4xl md:text-[70px] font-light tracking-tight animate-hero-shimmer">CRAFTED FOR EXCELLENCE</h1>
            <div className="flex justify-center mt-8 md:mt-12">
              <button 
                onClick={() => {
                  document.getElementById('signature-series')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="relative group"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-400 via-gold-200 to-gold-400 opacity-20 group-hover:opacity-30 blur-md transition-opacity"></div>
                <div className="relative px-8 md:px-12 py-3 md:py-4 text-sm md:text-base text-gold-200 border border-gold-400/30 rounded-full hover:border-gold-400/50 transition-colors tracking-wider">
                  EXPLORE
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div id="signature-series" className="py-12 md:py-24 px-4 md:px-12 bg-gradient-to-b from-black via-gold-900/5 to-black">
        <h2 className="text-2xl md:text-3xl font-light tracking-wider text-center mb-8 md:mb-16 animate-shine">SIGNATURE SERIES</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {[
            {
              id: 'kinetic-sovereign',
              name: "Kinetic Sovereign",
              description: "Limited Edition Professional Racket",
              image: "/images/signature-series/top-command-025.png.jpg",
              technologies: [
                "AeroEdge Frame™ – Optimized aerodynamics for faster swings",
                "CarbonX Weave™ – Ultra-strong, lightweight carbon fiber construction",
                "HexaFusion Core™ – Multi-layered reinforcement for durability",
                "Aerospace Grade Carbon – Premium 12K carbon layers"
              ]
            },
            {
              id: 'kinetic-imperial',
              name: "Kinetic Imperial",
              description: "Tournament Grade Excellence",
              image: "/images/signature-series/top-command-026.png.jpg",
              technologies: [
                "HyperFlex Chassis™ – Adaptive frame for dynamic response",
                "TriCore Technology™ – Three-layer carbon reinforcement",
                "PowerBridge™ – Enhanced sweet spot for maximum power",
                "Premium 6K Carbon Fiber – Professional grade materials"
              ]
            },
            {
              id: 'kinetic-prestige',
              name: "Kinetic Prestige",
              description: "Professional Performance Series",
              image: "/images/signature-series/nummer9.jpg",
              technologies: [
                "DualTension Core™ – Balanced power and control",
                "VibrationLock™ – Advanced vibration dampening system",
                "EdgeGuard Protection™ – Reinforced frame durability",
                "High-Density Carbon – Precision 8K carbon construction"
              ]
            }
          ].map((item) => (
            <Link key={item.id} to={`/product/${item.id}`} className="group cursor-pointer">
              <div className="relative p-4 bg-gradient-to-b from-black via-gold-900/5 to-black rounded-3xl border border-gold-900/20">
                <div className="relative aspect-[3/4] flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-radial from-gold-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={item.image}
                    alt={item.name}
                    className="w-full aspect-[3/4] object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-16">
                    <div className="ticker-wrap">
                      <div className="ticker">
                        {[...item.technologies, ...item.technologies, ...item.technologies].map((tech, index) => (
                          <span 
                            key={index} 
                            className="inline-block mx-8 text-sm text-gold-400/90 font-light tracking-wider"
                          >
                            • {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <div className="flex items-center justify-center gap-0">
                    <SmallKineticLogo />
                    <span className="text-lg md:text-xl text-gold-400 -ml-4">{item.name.replace('Kinetic ', '')}</span>
                  </div>
                  <p className="text-xs md:text-sm text-gold-200 mt-1 subtle-shimmer">{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400/90 to-transparent shadow-[0_0_10px_rgba(215,185,115,0.5)]"></div>
        <nav className="px-6 md:px-12 py-4 flex items-center justify-between bg-black/80 backdrop-blur-md">
          <Link to="/" className="flex items-center">
            <KineticLogo />
            <span className="hidden md:inline-block text-4xl font-light tracking-wider text-gold-400">KINETIC</span>
          </Link>
          <Link 
            to="/pre-register"
            className="group relative inline-flex items-center px-6 py-3 overflow-hidden rounded-full border border-gold-400/20 hover:border-gold-400/40 transition-colors"
          >
            <span className="relative z-10 text-base text-gold-400 group-hover:text-gold-300 transition-colors tracking-wider whitespace-nowrap">
              Pre-Register
            </span>
            <ChevronRight className="w-5 h-5 ml-1 text-gold-400 group-hover:text-gold-300 transition-colors" />
          </Link>
        </nav>
      </div>

      {/* Content Padding to Account for Fixed Header */}
      <div className="pt-[96px] md:pt-[72px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/pre-register" element={<PreRegister />} />
          <Route path="/admin/signature-series/upload" element={<SignatureSeriesUpload />} />
        </Routes>

        {/* Ultra Premium Footer */}
        <footer className="relative bg-black text-white overflow-hidden">
          {/* Carbon Fiber Pattern Overlay */}
          <div className="absolute inset-0 carbon-pattern opacity-5"></div>

          {/* Main Footer Content */}
          <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-12 md:pt-24 pb-8 md:pb-12">
            {/* Brand Statement */}
            <div className="text-center mb-12 md:mb-20 animate-fade-in-up">
              <h2 className="text-gold-400 text-lg md:text-xl tracking-[0.2em] mb-4">NOT JUST A RACKET.</h2>
              <h1 className="text-4xl md:text-[80px] font-light tracking-wide leading-tight">
                A REVOLUTION IN PADEL.
              </h1>
              <p className="font-signature text-xl md:text-3xl text-gold-400 mt-4 tracking-wide">Crafted for the Elite</p>
            </div>

            {/* Pre-Registration CTA */}
            <div className="text-center mb-16 md:mb-24">
              <button className="group relative inline-flex items-center justify-center px-8 md:px-12 py-3 md:py-4 text-base md:text-lg tracking-[0.2em] overflow-hidden transition-all duration-300 animate-glow bg-gradient-to-r from-gold-900/50 via-gold-400/20 to-gold-900/50 rounded-full hover:from-gold-400/30 hover:via-gold-400/20 hover:to-gold-400/30">
                <span className="relative z-10 text-gold-400 group-hover:text-gold-300 transition-colors">
                  JOIN THE EXCLUSIVE LIST
                </span>
              </button>
              <p className="mt-4 text-gold-400/80 tracking-[0.2em] text-xs md:text-sm">ONLY BY INVITE</p>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mb-16 md:mb-24">
              {[
                {
                  title: "THE STORY",
                  description: "The Innovation Behind the Most Advanced Padel Racket Ever"
                },
                {
                  title: "TECHNOLOGY",
                  description: "Aerospace Precision. Supreme Performance"
                },
                {
                  title: "WARRANTY",
                  description: "Uncompromised Quality, Guaranteed"
                },
                {
                  title: "CONTACT",
                  description: "Only for the Select Few"
                }
              ].map((item, index) => (
                <Link
                  key={index}
                  to="#"
                  className="group p-4 md:p-6 rounded-2xl bg-gradient-to-br from-black to-gold-900/5 border border-gold-900/20 hover:border-gold-400/20 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="text-gold-400 text-sm md:text-base tracking-wider mb-2">{item.title}</h3>
                    <ArrowUpRight className="w-4 md:w-5 h-4 md:h-5 text-gold-400/50 group-hover:text-gold-400 transition-colors" />
                  </div>
                  <p className="text-xs md:text-sm text-gold-200/60 leading-relaxed mt-2 md:mt-4">{item.description}</p>
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 md:space-x-8 mb-12 md:mb-16">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Youtube, label: "YouTube" },
                { Icon: Linkedin, label: "LinkedIn" }
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="group relative w-10 md:w-12 h-10 md:h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-gold-900/30 to-transparent border border-gold-900/30 hover:border-gold-400/30 transition-all duration-300"
                >
                  <Icon className="w-4 md:w-5 h-4 md:h-5 text-gold-400/70 group-hover:text-gold-400 transition-colors" />
                  <span className="absolute -bottom-6 md:-bottom-8 left-1/2 transform -translate-x-1/2 text-[10px] md:text-xs text-gold-400/60 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                    {label}
                  </span>
                </a>
              ))}
            </div>

            {/* Legal Section */}
            <div className="relative">
              <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent"></div>
              <div className="pt-6 md:pt-8 text-center">
                <p className="text-gold-200/40 text-xs md:text-sm tracking-wider">
                  2025 KINETIC PADEL. CRAFTED FOR THE ELITE.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;