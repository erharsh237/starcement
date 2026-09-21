import React from 'react';

export default function Logo({ light = false, className = '', showText = true, size = 'default' }) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    default: 'h-10 w-10 sm:h-11 sm:w-11',
    lg: 'h-14 w-14 sm:h-16 sm:w-16'
  };

  return (
    <div className={`flex items-center gap-3 text-left select-none group ${className}`}>
      {/* Official Star Cement Solid Setting Red Badge Logo */}
      <img
        src="/images/star-cement-logo.png"
        alt="Star Cement - Solid Setting Official Logo"
        className={`${sizeClasses[size] || sizeClasses.default} object-contain rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-300 flex-shrink-0`}
      />

      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-baseline">
            <span className={`font-sans font-black text-xl sm:text-2xl tracking-tight leading-none ${light ? 'text-white' : 'text-neutral-950'}`}>
              STAR
            </span>
            <span className="font-sans font-black text-xl sm:text-2xl tracking-tight leading-none text-[#B91C1C] ml-1.5">
              CEMENT
            </span>
          </div>
          <span className={`font-mono text-[8.5px] sm:text-[9px] font-bold uppercase tracking-[0.14em] mt-1 ${light ? 'text-neutral-300' : 'text-neutral-600'}`}>
            GROUP OF COMPANIES AFRICA
          </span>
        </div>
      )}
    </div>
  );
}
