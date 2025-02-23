import React from 'react';

const PreRegister = () => {
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
        </div>
      </div>
    </div>
  );
};

export default PreRegister;
