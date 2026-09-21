import React, { useState, useEffect } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';

export default function Hero({ onOpenQuote, onOpenCalculator }) {
  const [capacity, setCapacity] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setCapacity(750);
      return;
    }

    let start = 0;
    const end = 750;
    const duration = 1200;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCapacity(end);
        clearInterval(timer);
      } else {
        setCapacity(Math.round(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      className="relative min-h-[72vh] lg:min-h-[80vh] flex items-center border-b border-neutral-200 overflow-hidden py-10 sm:py-14 lg:py-16"
    >
      {/* High-Performance GPU-Accelerated Fixed Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center transform-gpu"
        style={{ backgroundImage: "url('/images/hero-plant-bg.jpg')" }}
      />
      {/* Subtle Natural Contrast Tint */}
      <div className="absolute inset-0 bg-black/15 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Sleek, Compact Executive Panel with Smooth Entrance */}
          <div className="lg:col-span-7 xl:col-span-6 w-full text-left animate-fade-in-up">
            <div className="bg-white/95 backdrop-blur-md rounded-xl border border-neutral-200/90 shadow-xl p-6 sm:p-8 lg:p-9 max-w-xl transition-all duration-300 hover:shadow-2xl">
              
              {/* Technical Classification */}
              <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#B91C1C] mb-2.5 animate-fade-in">
                Star Cement Group of companies Africa • GS 1118:2024 Conformance
              </div>

              {/* Refined Headline Scale */}
              <h1 className="font-serif font-bold text-2xl sm:text-3xl lg:text-[36px] text-neutral-950 leading-[1.18] tracking-tight mb-3.5">
                Delivering high-quality cement combining strength, reliability & affordability.
              </h1>

              {/* Concise Narrative */}
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal mb-6">
                Operating a modern <strong>750,000 MT/year</strong> facility with a 75 TPH closed-circuit grinding mill in the Kpone Industrial Area, <strong>Star Cement Group of companies Africa</strong> manufactures certified <strong>CEM II/A-L 42.5R</strong> and <strong>CEM II/B-L 32.5R</strong> for Ghana and African infrastructure development.
              </p>

              {/* Compact Action Buttons with Tactile Micro-Animations */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="px-5 py-3 bg-[#B91C1C] hover:bg-[#991B1B] text-white text-xs font-bold uppercase tracking-wider rounded-sm shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] transition-all text-center flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Request Commercial Dispatch</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>

                <button
                  type="button"
                  onClick={onOpenCalculator}
                  className="px-4 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-xs font-bold uppercase tracking-wider rounded-sm hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <Calculator className="w-3.5 h-3.5 text-neutral-600 group-hover:rotate-12 transition-transform duration-200" />
                  <span>Mix Calculator</span>
                </button>
              </div>

              {/* Compact Key Metrics */}
              <div className="pt-4 border-t border-neutral-200/80 grid grid-cols-3 gap-3 text-left">
                <div className="group cursor-default">
                  <div className="font-mono text-xl sm:text-2xl font-extrabold text-neutral-950 tracking-tight leading-none group-hover:text-[#B91C1C] transition-colors">
                    {capacity}k
                  </div>
                  <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mt-1">
                    MT / Year Capacity
                  </div>
                </div>
                <div className="group cursor-default">
                  <div className="font-mono text-xl sm:text-2xl font-extrabold text-neutral-950 tracking-tight leading-none group-hover:text-[#B91C1C] transition-colors">
                    75 TPH
                  </div>
                  <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mt-1">
                    Closed-Circuit Mill
                  </div>
                </div>
                <div className="group cursor-default">
                  <div className="font-mono text-xl sm:text-2xl font-extrabold text-neutral-950 tracking-tight leading-none group-hover:text-[#B91C1C] transition-colors">
                    GS 1118
                  </div>
                  <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mt-1">
                    2024 Conformance
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
