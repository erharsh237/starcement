import React from 'react';

export default function CementBag({ product, isSelected, onClick, onSelectLabel, activeLabelTag }) {
  const isRed = product.theme === 'red';
  const headerBg = isRed ? 'bg-[#c5221f]' : 'bg-[#1e4a9e]';
  const textColor = isRed ? 'text-[#c5221f]' : 'text-[#1e4a9e]';

  const handleKeyDown = (e, action) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <div 
      onClick={onClick}
      role="region"
      aria-label={`${product.name} 50kg bag packaging diagram`}
      className={`relative cursor-pointer transition-all duration-300 transform select-none w-full max-w-[310px] sm:max-w-[330px] mx-auto ${
        isSelected 
          ? 'scale-[1.02] ring-4 ring-offset-2 ring-offset-white ' + (isRed ? 'ring-red-600 shadow-xl' : 'ring-blue-600 shadow-xl') 
          : 'hover:scale-[1.01] shadow-card hover:shadow-lg'
      }`}
    >
      {/* 3D Realistic Kraft Paper Bag Container */}
      <div className="relative w-full rounded-xl overflow-hidden bg-[#ebe2d3] border border-[#d2c6b4] text-center font-sans shadow-md">
        
        {/* Natural Kraft Paper Texture & Side Crease Lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#5a4d38_1px,transparent_1px)] [background-size:12px_12px]"></div>
        <div className="absolute top-0 bottom-0 left-5 sm:left-6 w-[1px] bg-black/10 shadow-sm pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-5 sm:right-6 w-[1px] bg-black/10 shadow-sm pointer-events-none"></div>
        
        {/* Left Side Gusset Text (Vertical) */}
        <div className="absolute left-0.5 top-12 bottom-12 flex items-center justify-center pointer-events-none">
          <span className="text-[8px] sm:text-[9px] font-mono font-bold tracking-widest text-[#73634e] uppercase -rotate-90 origin-center whitespace-nowrap opacity-80">
            STAR CEMENT • PORTLAND CEMENT
          </span>
        </div>

        {/* Right Side Gusset Text (Vertical) */}
        <div className="absolute right-0.5 top-12 bottom-12 flex items-center justify-center pointer-events-none">
          <span className="text-[8px] sm:text-[9px] font-mono font-bold tracking-widest text-[#73634e] uppercase rotate-90 origin-center whitespace-nowrap opacity-80">
            STAR CEMENT • PORTLAND CEMENT
          </span>
        </div>

        {/* Bag Content Area */}
        <div className="px-5 sm:px-7 pt-4 pb-6 space-y-1.5 sm:space-y-2 relative z-10">
          
          {/* Top Trapezoid / Banner: PORTLAND CEMENT */}
          <div 
            role="button"
            tabIndex={0}
            aria-label="Inspect PORTLAND CEMENT marking"
            onClick={(e) => { e.stopPropagation(); onSelectLabel && onSelectLabel("PORTLAND CEMENT"); }}
            onKeyDown={(e) => handleKeyDown(e, () => { onSelectLabel && onSelectLabel("PORTLAND CEMENT"); })}
            className={`${headerBg} text-white text-[10px] sm:text-[11px] font-mono font-black tracking-widest py-1 px-3 sm:px-4 rounded-t-sm inline-block shadow-sm transition-transform hover:scale-105 active:scale-95 ${activeLabelTag === "PORTLAND CEMENT" ? 'ring-2 ring-yellow-400' : ''}`}
            title="Click to view explanation"
          >
            PORTLAND CEMENT
          </div>

          {/* Star Cement Brand Block */}
          <div 
            role="button"
            tabIndex={0}
            aria-label="Inspect STAR CEMENT brand logo"
            onClick={(e) => { e.stopPropagation(); onSelectLabel && onSelectLabel("ST★R CEMENT"); }}
            onKeyDown={(e) => handleKeyDown(e, () => { onSelectLabel && onSelectLabel("ST★R CEMENT"); })}
            className={`p-2.5 sm:p-3 rounded-md ${headerBg} text-white shadow-md transition-transform hover:scale-[1.02] active:scale-95 ${activeLabelTag === "ST★R CEMENT" ? 'ring-2 ring-yellow-400' : ''}`}
          >
            <div className="flex items-center justify-center gap-1 font-display font-black text-2xl sm:text-4xl tracking-tight">
              <span>ST</span>
              <span className="relative inline-flex items-center justify-center">
                <span className="text-white">A</span>
                <span className="absolute text-yellow-300 text-xs sm:text-sm font-bold -top-0.5">★</span>
              </span>
              <span>R</span>
            </div>
            <div className="text-xs sm:text-sm font-display font-extrabold tracking-[0.25em] text-white/95 uppercase mt-0.5">
              CEMENT
            </div>
          </div>

          {/* Subheader: STRONG CEMENT ★★★★★ */}
          <div 
            role="button"
            tabIndex={0}
            aria-label="Inspect STRONG CEMENT five-star marking"
            onClick={(e) => { e.stopPropagation(); onSelectLabel && onSelectLabel("STRONG CEMENT ★★★★★"); }}
            onKeyDown={(e) => handleKeyDown(e, () => { onSelectLabel && onSelectLabel("STRONG CEMENT ★★★★★"); })}
            className={`py-1 cursor-pointer transition-transform hover:scale-105 active:scale-95 ${activeLabelTag === "STRONG CEMENT ★★★★★" ? 'bg-amber-100 rounded' : ''}`}
          >
            <div className={`font-display font-black text-sm sm:text-base tracking-wider ${textColor}`}>
              STRONG CEMENT
            </div>
            <div className={`flex justify-center items-center gap-1 ${textColor} mt-0.5`}>
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-xs">★</span>
              ))}
            </div>
          </div>

          {/* Classification & Grade */}
          <div className="py-0.5 sm:py-1">
            <div 
              role="button"
              tabIndex={0}
              aria-label={`Inspect ${product.classType} classification`}
              onClick={(e) => { e.stopPropagation(); onSelectLabel && onSelectLabel(product.classType); }}
              onKeyDown={(e) => handleKeyDown(e, () => { onSelectLabel && onSelectLabel(product.classType); })}
              className={`font-mono font-bold text-xs sm:text-sm tracking-wider ${textColor} transition-transform hover:scale-105 active:scale-95 ${activeLabelTag === product.classType ? 'bg-amber-100 rounded' : ''}`}
            >
              {product.classType}
            </div>

            {/* GIANT GRADE NUMBER */}
            <div 
              role="button"
              tabIndex={0}
              aria-label={`Inspect ${product.grade} compressive grade`}
              onClick={(e) => { e.stopPropagation(); onSelectLabel && onSelectLabel(product.grade); }}
              onKeyDown={(e) => handleKeyDown(e, () => { onSelectLabel && onSelectLabel(product.grade); })}
              className={`font-display font-black text-4xl sm:text-6xl tracking-tight my-1 ${textColor} drop-shadow-sm transition-transform hover:scale-105 active:scale-95 ${activeLabelTag === product.grade ? 'scale-105 font-extrabold' : ''}`}
            >
              {product.grade}
            </div>
          </div>

          {/* PORTLAND LIMESTONE CEMENT */}
          <div 
            role="button"
            tabIndex={0}
            aria-label="Inspect PORTLAND LIMESTONE CEMENT specification"
            onClick={(e) => { e.stopPropagation(); onSelectLabel && onSelectLabel("PORTLAND LIMESTONE CEMENT"); }}
            onKeyDown={(e) => handleKeyDown(e, () => { onSelectLabel && onSelectLabel("PORTLAND LIMESTONE CEMENT"); })}
            className={`font-mono font-bold text-[10px] sm:text-[11px] tracking-wide uppercase ${textColor} transition-transform hover:scale-105 active:scale-95 ${activeLabelTag === "PORTLAND LIMESTONE CEMENT" ? 'bg-amber-100 rounded' : ''}`}
          >
            PORTLAND LIMESTONE CEMENT
          </div>

          {/* Standards Code: GS 1118-1 : 2024 */}
          <div 
            role="button"
            tabIndex={0}
            aria-label={`Inspect ${product.standard} Ghana Standards Authority code`}
            onClick={(e) => { e.stopPropagation(); onSelectLabel && onSelectLabel("GS 1118-1 : 2024"); }}
            onKeyDown={(e) => handleKeyDown(e, () => { onSelectLabel && onSelectLabel("GS 1118-1 : 2024"); })}
            className={`font-mono font-black text-[10px] sm:text-[11px] tracking-widest text-[#3d3326] transition-transform hover:scale-105 active:scale-95 ${activeLabelTag === "GS 1118-1 : 2024" ? 'bg-amber-100 rounded' : ''}`}
          >
            {product.standard}
          </div>

          {/* Motto: BUILDING STRONGER NATION */}
          <div 
            role="button"
            tabIndex={0}
            aria-label="Inspect BUILDING STRONGER NATION national motto"
            onClick={(e) => { e.stopPropagation(); onSelectLabel && onSelectLabel("BUILDING STRONGER NATION"); }}
            onKeyDown={(e) => handleKeyDown(e, () => { onSelectLabel && onSelectLabel("BUILDING STRONGER NATION"); })}
            className={`font-display font-extrabold text-[11px] sm:text-xs tracking-wider uppercase ${textColor} pt-0.5 sm:pt-1 transition-transform hover:scale-105 active:scale-95 ${activeLabelTag === "BUILDING STRONGER NATION" ? 'bg-amber-100 rounded' : ''}`}
          >
            {product.motto}
          </div>

          {/* Bottom Row: Proudly made in GHANA 🇬🇭 and 50kg */}
          <div className="pt-2 sm:pt-3 border-t border-[#c5b59e] flex items-center justify-between text-[#3d3326] font-mono text-xs">
            <div 
              role="button"
              tabIndex={0}
              aria-label="Inspect Proudly made in GHANA seal"
              onClick={(e) => { e.stopPropagation(); onSelectLabel && onSelectLabel("Proudly made in GHANA 🇬🇭"); }}
              onKeyDown={(e) => handleKeyDown(e, () => { onSelectLabel && onSelectLabel("Proudly made in GHANA 🇬🇭"); })}
              className={`flex items-center gap-1 font-bold transition-transform hover:scale-105 active:scale-95 ${activeLabelTag === "Proudly made in GHANA 🇬🇭" ? 'bg-amber-100 rounded px-1' : ''}`}
            >
              <span className="text-[9px] sm:text-[10px]">Proudly made in GHANA</span>
              <span className="text-sm">🇬🇭</span>
            </div>

            <div 
              role="button"
              tabIndex={0}
              aria-label="Inspect 50kg net weight"
              onClick={(e) => { e.stopPropagation(); onSelectLabel && onSelectLabel("50kg"); }}
              onKeyDown={(e) => handleKeyDown(e, () => { onSelectLabel && onSelectLabel("50kg"); })}
              className={`font-display font-black text-xs sm:text-sm text-[#1e1912] transition-transform hover:scale-105 active:scale-95 ${activeLabelTag === "50kg" ? 'bg-amber-100 rounded px-1' : ''}`}
            >
              {product.weight}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
