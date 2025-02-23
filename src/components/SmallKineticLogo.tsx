import React from 'react';

export const SmallKineticLogo = () => (
  <svg viewBox="0 0 100 100" className="w-[90px] h-[90px] inline-block align-middle" style={{ background: 'transparent' }}>
    <g>
      {/* Lighter gold stripes */}
      <path d="M20 80 L50 50 L80 80" fill="#D7B973" />
      <path d="M35 65 L50 50 L65 65" fill="#D7B973" />
      <path d="M20 20 L50 50" fill="#D7B973" strokeWidth="18" stroke="#D7B973" strokeLinecap="round" />
      
      {/* Darker gold stripes */}
      <path d="M50 50 L80 20" fill="#B39855" strokeWidth="18" stroke="#B39855" strokeLinecap="round" />
      <path d="M35 35 L50 50" fill="#B39855" strokeWidth="18" stroke="#B39855" strokeLinecap="round" />
    </g>
  </svg>
);
