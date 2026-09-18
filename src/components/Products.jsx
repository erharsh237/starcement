import React, { useState } from 'react';
import { products } from '../data/products';
import { Download, Check } from 'lucide-react';

export default function Products({ onSelectProductForQuote, products: propProducts }) {
  const currentProducts = propProducts && propProducts.length > 0 ? propProducts : products;
  const [downloadedId, setDownloadedId] = useState(null);

  const handleDownload = (id) => {
    setDownloadedId(id);
    setTimeout(() => setDownloadedId(null), 2500);
  };

  return (
    <section id="products" className="bg-white border-b border-neutral-200 py-16 sm:py-20 lg:py-24 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Refined Spacing & Scroll Reveal */}
        <div className="max-w-3xl mb-12 reveal-init">
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#B91C1C] mb-2.5">
            Laboratory Certified Formulations
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-neutral-950 tracking-tight leading-tight">
            High-Strength Product Portfolio
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed font-normal">
            Star Cement manufactures strictly two certified Portland Limestone Cement formulations conforming to Ghana Standards Authority standard <strong>GS 1118:2024</strong>. Available in palletized 50kg bags and bulk pneumatic tanker deliveries.
          </p>
        </div>

        {/* 2 Product Cards with Staggered Scroll Reveal & Lift */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-16 stagger-children">
          {currentProducts.map((p) => {
            const isRed = p.theme === 'red';
            const accentBorder = isRed ? 'border-t-4 border-t-[#B91C1C]' : 'border-t-4 border-t-[#1E3A8A]';
            const accentText = isRed ? 'text-[#B91C1C]' : 'text-[#1E3A8A]';
            
            return (
              <div
                key={p.id}
                id={p.id === 'star-42-5r' ? 'spec-42-5r' : 'spec-32-5r'}
                className={`reveal-init bg-white border border-neutral-200/90 rounded-2xl p-6 sm:p-8 lg:p-9 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${accentBorder} group`}
              >
                <div>
                  {/* Grade and Standard Line */}
                  <div className="flex justify-between items-baseline mb-3.5 pb-3.5 border-b border-neutral-100">
                    <span className={`font-mono text-xs sm:text-sm font-bold uppercase tracking-wider ${accentText}`}>
                      {p.designation || (p.classType ? `${p.classType} • ${p.grade}` : p.grade || 'Portland Limestone Cement')}
                    </span>
                    <span className="font-mono text-[11px] text-neutral-400">
                      GS 1118:2024
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-neutral-950 mb-3">
                    {p.name}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                    {p.summary}
                  </p>

                  {/* Clean Spec Pillars Directly on White Surface (No Grey Nested Box!) */}
                  <div className="grid grid-cols-3 gap-4 pb-8 mb-8 border-b border-neutral-100">
                    <div>
                      <span className="text-[11px] font-mono text-neutral-400 uppercase block">
                        28-Day Final
                      </span>
                      <div className={`text-2xl sm:text-3xl font-mono font-bold mt-1 ${accentText}`}>
                        {p.compressiveStrength.twentyEightDay.split(' ')[0]} <span className="text-xs font-normal text-neutral-500">MPa</span>
                      </div>
                      <span className="text-[11px] font-mono text-neutral-500 block mt-0.5">
                        Guaranteed min
                      </span>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono text-neutral-400 uppercase block">
                        2-Day Early
                      </span>
                      <div className="text-2xl sm:text-3xl font-mono font-bold text-neutral-900 mt-1">
                        {p.compressiveStrength.twoDay.split(' ')[1]} <span className="text-xs font-normal text-neutral-500">MPa</span>
                      </div>
                      <span className="text-[11px] font-mono text-neutral-500 block mt-0.5">
                        High early set
                      </span>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono text-neutral-400 uppercase block">
                        Initial Set
                      </span>
                      <div className="text-2xl sm:text-3xl font-mono font-bold text-neutral-900 mt-1">
                        {p.physicalProperties.initialSettingTime.split(' ')[0]} <span className="text-xs font-normal text-neutral-500">min</span>
                      </div>
                      <span className="text-[11px] font-mono text-neutral-500 block mt-0.5">
                        Controlled slump
                      </span>
                    </div>
                  </div>

                  {/* Approved Applications (Airy List) */}
                  <div className="mb-10">
                    <span className="text-xs font-mono font-bold uppercase text-neutral-500 tracking-wider block mb-4">
                      Approved Structural Applications
                    </span>
                    <ul className="space-y-2.5 text-sm text-neutral-700">
                      {p.applications.map((app, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${isRed ? 'bg-[#B91C1C]' : 'bg-[#1E3A8A]'}`} />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Actions with Smooth Micro-Interactions */}
                <div className="pt-6 border-t border-neutral-100 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => handleDownload(p.id)}
                    className="flex-1 py-3.5 px-5 bg-neutral-100 hover:bg-neutral-200/80 text-xs font-mono font-semibold text-neutral-900 rounded-lg hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    {downloadedId === p.id ? (
                      <>
                        <Check className="w-4 h-4 text-[#B91C1C] animate-scale-in" />
                        <span>TDS Spec Downloaded</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4 text-neutral-500 group-hover:-translate-y-0.5 transition-transform" />
                        <span>Download TDS Spec</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => onSelectProductForQuote(p.id)}
                    className="flex-1 py-3.5 px-5 bg-neutral-950 hover:bg-[#B91C1C] text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:-translate-y-0.5 active:scale-[0.98] shadow-sm hover:shadow-lg transition-all text-center cursor-pointer"
                  >
                    Order Dispatch
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* STATUTORY PACKAGING ANATOMY (Spacious & Clean Layout with Scroll Reveal) */}
        <div id="anatomy" className="pt-24 border-t border-neutral-200 reveal-init">
          <div className="max-w-3xl mb-16">
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#B91C1C] mb-3">
              Standardized Physical Packaging
            </div>
            <h3 className="font-serif font-bold text-3xl sm:text-4xl text-neutral-950 tracking-tight">
              Statutory Bag Markings & Packaging Anatomy
            </h3>
            <p className="text-base text-neutral-600 mt-3 leading-relaxed font-normal">
              Every 50kg multi-ply bag dispatched from Star Cement Tema terminal carries legal statutory markings in accordance with Ghana Standards Authority standard <strong>GS 1118-1 : 2024</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Packaging Photo with Smooth Hover Zoom */}
            <div className="lg:col-span-5 reveal-left group">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100 border border-neutral-200 shadow-md group-hover:shadow-2xl transition-all duration-500">
                <img
                  src="/images/star-cement-pallet.png"
                  alt="Packaging inspection specimen showing authentic Star Cement 42.5R and 32.5R bags"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              <div className="pt-4 text-xs font-mono text-neutral-500 text-left">
                Tema Terminal Packing Yard • Shrink-Wrapped 2.0 MT Pallet Unit
              </div>
            </div>

            {/* Clean Statutory Verification Criteria (Spacious 2-column layout) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="border-b border-neutral-200 pb-4 mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900">
                  Mandatory Bag Markings & Quality Safeguards
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {products[0].labels.slice(0, 8).map((item) => (
                  <div key={item.code} className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#B91C1C]">
                        {item.code}.
                      </span>
                      <strong className="font-mono text-xs uppercase text-neutral-900">{item.term}</strong>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans pl-5">
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
