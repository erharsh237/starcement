import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { plants } from '../data/plants';
import { 
  Building2, 
  MapPin, 
  Phone, 
  ArrowRight, 
  Layers, 
  Ship, 
  Truck, 
  ShieldCheck, 
  Maximize2, 
  X 
} from 'lucide-react';

export default function PlantLocator({ onSelectPlantForQuote }) {
  const plant = plants[0];
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <section id="plant" className="py-16 sm:py-20 lg:py-24 bg-[#F7F6F3] text-neutral-900 border-t border-neutral-200 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <div className="max-w-3xl mb-12 reveal-init">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#B91C1C] mb-2.5 font-bold">
            <span>Primary Manufacturing Infrastructure</span>
            <span className="text-neutral-300">•</span>
            <span className="text-neutral-600">Greater Accra, Ghana</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-950 tracking-tight leading-tight">
            Star Cement Ghana Plant — Kpone Industrial Area
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed font-normal">
            The Star Cement Ghana plant is an advanced greenfield cement grinding facility engineered to bolster the country’s local manufacturing autonomy. Located right in the Kpone Industrial Area, Greater Accra, the facility is uniquely positioned to capture heavy raw materials flowing directly from the recently upgraded Tema Port.
          </p>
        </div>

        {/* Main Plant Showcase Card */}
        <div className="reveal-scale bg-white border border-neutral-200/90 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 mb-12">
          
          {/* Header & Badges */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-neutral-100 flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-gradient-to-r from-neutral-50 via-white to-neutral-50">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                <span className="bg-[#B91C1C] text-white px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-widest rounded-xs shadow-xs">
                  Ghana Flagship Facility
                </span>
                <span className="bg-neutral-900 text-white px-3 py-1 text-[11px] font-mono uppercase tracking-wider rounded-xs">
                  Greenfield Grinding Complex
                </span>
                <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider rounded-xs">
                  Operational 24/7
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-950">
                {plant.name}
              </h3>
              
              <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 mt-2">
                <MapPin className="w-4 h-4 text-[#B91C1C] shrink-0" />
                <span>{plant.address}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href={`tel:${plant.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-neutral-100 hover:bg-neutral-200 text-xs font-mono font-bold text-neutral-900 rounded-lg transition-colors cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-[#B91C1C]" />
                <span>{plant.phone}</span>
              </a>

              <button
                type="button"
                onClick={() => onSelectPlantForQuote?.(plant.name)}
                className="px-6 py-3 bg-neutral-950 hover:bg-[#B91C1C] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Dispatch Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Key Throughput Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 border-b border-neutral-100 bg-white">
            <div className="border-r border-neutral-100 pr-4">
              <span className="text-[10px] font-mono uppercase text-neutral-400 block font-bold tracking-wider">Annual Grinding Capacity</span>
              <strong className="text-2xl sm:text-3xl font-mono font-bold text-neutral-950 block mt-1">
                {plant.capacityHighlight}
              </strong>
              <span className="text-xs text-neutral-500 block mt-0.5">{plant.capacitySub}</span>
            </div>

            <div className="border-r border-neutral-100 pr-4">
              <span className="text-[10px] font-mono uppercase text-neutral-400 block font-bold tracking-wider">Silo Architecture</span>
              <strong className="text-2xl sm:text-3xl font-mono font-bold text-neutral-950 block mt-1">
                Slip-Form Silos
              </strong>
              <span className="text-xs text-neutral-500 block mt-0.5">Vertical Cast Concrete</span>
            </div>

            <div className="border-r border-neutral-100 pr-4">
              <span className="text-[10px] font-mono uppercase text-neutral-400 block font-bold tracking-wider">Packing Machinery</span>
              <strong className="text-2xl sm:text-3xl font-mono font-bold text-neutral-950 block mt-1">
                {plant.packingHighlight}
              </strong>
              <span className="text-xs text-neutral-500 block mt-0.5">Haver & Boecker Rotary Lines</span>
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase text-neutral-400 block font-bold tracking-wider">Weighbridge Loading</span>
              <strong className="text-2xl sm:text-3xl font-mono font-bold text-neutral-950 block mt-1">
                Dual Weighbridges
              </strong>
              <span className="text-xs text-neutral-500 block mt-0.5">24/7 Automated RFID Dispatch</span>
            </div>
          </div>

          {/* 3 Core Factory Infrastructure Pillars */}
          <div className="p-6 sm:p-8 lg:p-10 bg-neutral-50/50">
            <div className="font-mono text-xs uppercase font-bold tracking-widest text-[#B91C1C] mb-6 block">
              Factory Infrastructure & Engineering Highlights
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Pillar 1: Silo Architecture */}
              <div 
                id="silo-architecture" 
                className="p-6 bg-white rounded-xl border border-neutral-200/90 shadow-2xs hover:border-neutral-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-[#B91C1C] flex items-center justify-center mb-4">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-neutral-950 mb-2">
                    Vertical Slip-Form Silo Architecture
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal mb-4">
                    The plant features high-capacity concrete storage silos erected utilizing specialized vertical slip-form casting construction, ensuring monolithic wall strength and complete hermetic moisture isolation for clinker and finished cement.
                  </p>
                </div>
                <Link
                  to="/plants/silo-architecture"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-bold text-[#B91C1C] hover:text-neutral-950 transition-colors pt-2 border-t border-neutral-100"
                >
                  <span>Explore Silo Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Pillar 2: Raw Material Handling */}
              <div 
                id="raw-material-handling" 
                className="p-6 bg-white rounded-xl border border-neutral-200/90 shadow-2xs hover:border-neutral-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-[#B91C1C] flex items-center justify-center mb-4">
                    <Ship className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-neutral-950 mb-2">
                    Tema Port Bulk Handling Systems
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal mb-4">
                    Utilizes specialized heavy bulk conveyors and precision feed blending systems engineered to receive, store, and blend core additives—clinker, high-grade gypsum, and pozzolanic limestone—flowing directly from the upgraded Tema Port.
                  </p>
                </div>
                <Link
                  to="/plants/raw-material-handling"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-bold text-[#B91C1C] hover:text-neutral-950 transition-colors pt-2 border-t border-neutral-100"
                >
                  <span>Explore Intake Systems</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Pillar 3: Location Advantages */}
              <div 
                id="logistics-corridor" 
                className="p-6 bg-white rounded-xl border border-neutral-200/90 shadow-2xs hover:border-neutral-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-[#B91C1C] flex items-center justify-center mb-4">
                    <Truck className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-neutral-950 mb-2">
                    Kpone Industrial Strategic Corridor
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal mb-4">
                    Located right inside the Kpone Industrial Area, Greater Accra, the plant sits adjacent to major arterial transit corridors, significantly shortening distribution logistics and lowering regional delivery costs across all 16 regions.
                  </p>
                </div>
                <Link
                  to="/plants/logistics-corridor"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-bold text-[#B91C1C] hover:text-neutral-950 transition-colors pt-2 border-t border-neutral-100"
                >
                  <span>Explore Corridor Logistics</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </div>

          {/* Plant Infrastructure & Engineering Photo Gallery */}
          <div className="p-6 sm:p-8 lg:p-10 border-t border-neutral-200 bg-white">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#B91C1C] font-bold block mb-1">
                  On-Site Infrastructure Photography
                </span>
                <h4 className="font-serif text-lg sm:text-xl font-bold text-neutral-950">
                  Facility & Slip-Form Silo Architecture
                </h4>
              </div>
              <span className="text-xs font-mono font-bold text-neutral-500">
                Kpone Industrial Area, Greater Accra
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {plant.gallery?.map((item, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActivePhoto(item)}
                  className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-neutral-100 border border-neutral-200/90 shadow-2xs hover:shadow-md cursor-pointer transition-all"
                >
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end text-left">
                    <span className="text-[11px] font-bold text-white leading-tight mb-0.5">{item.title}</span>
                    <span className="text-[10px] font-mono text-neutral-300 line-clamp-1">{item.caption}</span>
                  </div>
                  <div className="absolute top-2.5 right-2.5 p-1.5 bg-black/50 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3 h-3" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal for Photo Inspection */}
      {activePhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fade-in"
          onClick={() => setActivePhoto(null)}
        >
          <div 
            className="bg-white rounded-xl overflow-hidden max-w-3xl w-full shadow-2xl relative animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              className="absolute top-3 right-3 p-2 text-white bg-black/60 hover:bg-black rounded-full transition-colors z-10 cursor-pointer"
              title="Close Image"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="aspect-[16/10] bg-neutral-950 overflow-hidden">
              <img 
                src={activePhoto.src} 
                alt={activePhoto.title} 
                className="w-full h-full object-contain" 
              />
            </div>
            <div className="p-6 text-left">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#B91C1C] font-bold block mb-1">
                Flagship Manufacturing Infrastructure • Kpone Industrial Area
              </span>
              <h4 className="font-serif text-lg font-bold text-neutral-950 mb-1">
                {activePhoto.title}
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                {activePhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
