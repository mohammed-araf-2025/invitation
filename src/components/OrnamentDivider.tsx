import React from 'react';

interface OrnamentDividerProps {
  className?: string;
  variant?: 'gold' | 'red';
}

export default function OrnamentDivider({ className = '', variant = 'gold' }: OrnamentDividerProps) {
  const isRed = variant === 'red';

  return (
    <div className={`flex items-center justify-center space-x-3 w-full my-3 select-none ${className}`}>
      {/* Left ornamental tapered line */}
      <div 
        className={`h-[1px] flex-1 max-w-[120px] md:max-w-[180px] ${
          isRed 
            ? 'bg-gradient-to-r from-transparent via-[#8B6A1F] to-[#B3121B]' 
            : 'bg-gradient-to-r from-transparent via-[#8B6A1F] to-[#C9A24B]'
        }`} 
      />

      {/* Center Lotus / Mandala Motif */}
      <div className={`flex items-center justify-center ${isRed ? 'text-kumkum-red' : 'text-gold'}`}>
        <svg 
          viewBox="0 0 24 24" 
          className="w-4 h-4 md:w-5 md:h-5 fill-current drop-shadow-[0_0_6px_rgba(201,162,75,0.4)]"
          aria-hidden="true"
        >
          <path d="M12 2C12.5 5 15 7.5 18 8C15 8.5 12.5 11 12 14C11.5 11 9 8.5 6 8C9 7.5 11.5 5 12 2Z" fill="currentColor" />
          <circle cx="12" cy="16.5" r="1.5" fill="currentColor" opacity="0.85" />
          <circle cx="12" cy="19.5" r="1" fill="currentColor" opacity="0.6" />
          <circle cx="7" cy="12" r="1" fill="currentColor" opacity="0.7" />
          <circle cx="17" cy="12" r="1" fill="currentColor" opacity="0.7" />
        </svg>
      </div>

      {/* Right ornamental tapered line */}
      <div 
        className={`h-[1px] flex-1 max-w-[120px] md:max-w-[180px] ${
          isRed 
            ? 'bg-gradient-to-l from-transparent via-[#8B6A1F] to-[#B3121B]' 
            : 'bg-gradient-to-l from-transparent via-[#8B6A1F] to-[#C9A24B]'
        }`} 
      />
    </div>
  );
}
