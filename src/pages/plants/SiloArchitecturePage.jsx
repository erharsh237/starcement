import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, 
  Building2, 
  ShieldCheck, 
  ChevronRight, 
  ArrowRight, 
  Maximize2, 
  X, 
  CheckCircle2, 
  Cpu, 
  Activity, 
  Gauge, 
  Droplets,
  HardHat
} from 'lucide-react';

export default function SiloArchitecturePage({ onOpenQuote }) {
  const [activePhoto, setActivePhoto] = useState(null);

  const siloSpecs = [
    { label: 'Construction Methodology', val: 'Continuous Vertical Slip-Form Casting' },
    { label: 'Cold Joint Formation', val: 'Zero (Monolithic Single-Pour Shell)' },
    { label: 'Wall Concrete Grade', val: 'C40/50 High-Density Hydraulic Concrete' },
    { label: 'Circumferential Reinforcement', val: 'High-Yield Post-Tensioned & Deformed Rebar' },
    { label: 'Moisture Permeability', val: 'Hermetically Sealed (0.00% Coastal Humidity Ingress)' },
    { label: 'Extraction Mechanism', val: 'Multi-Zone Pneumatic Fluidized Aeration Cones' },
    { label: 'Level Telemetry', val: '24/7 FMCW High-Frequency Radar Telemetry' },
    { label: 'Discharge Flow Rate', val: 'Variable Frequency Drive up to 600 t/h per Bay' }
  ];

  const engineeringHighlights = [
    {
      title: 'Monolithic Slip-Form Hydraulic Jacking',
      subtitle: 'Eliminating Cold Joints & Structural Weakness',
      desc: 'The concrete storage silos were erected utilizing continuous vertical slip-form casting. Hydraulic jacks continuously propelled the formwork upward at a calibrated rate of 150–300 mm per hour, allowing uninterrupted concrete placement 24 hours a day until completion. This eliminated cold joints, creating a monolithic concrete cylinder with superior tensile integrity.',
      icon: Building2
    },
    {
      title: 'Hydrostatic & Dynamic Lateral Load Resistance',
      subtitle: 'Engineered for Heavy Mass Flow Pressures',
      desc: 'Bulk clinker and pulverized Portland limestone exert massive dynamic lateral pressures during rapid discharge. The silo shells feature high-density circumferential rebar arrays engineered to absorb seismic ground acceleration, cyclic thermal expansion, and hydrostatic compaction stresses without micro-fissuring.',
      icon: Gauge
    },
    {
      title: 'Hermetic Coastal Moisture Isolation',
      subtitle: 'Impermeable Protection in Maritime Climate',
      desc: 'Positioned in the coastal Kpone/Tema industrial belt with relative humidity frequently exceeding 85%, moisture ingress is the leading cause of cement pre-hydration and warehouse lump formation. Our slip-formed concrete walls feature ultra-low capillary porosity and hydrophobic sealing coatings, guaranteeing cement leaves the plant at peak chemical freshness.',
      icon: Droplets
    },
    {
      title: 'Fluidized Inverted Aeration Cones',
      subtitle: 'Anti-Bridging & 100% Active Discharge Flow',
      desc: 'Traditional flat-bottom silos suffer from dead material zones and funnel flow bridging. Star Cement silos integrate inverted fluidized aeration bottoms with multi-zone pneumatic aeration pads that fluidize the lower cement bed on demand, guaranteeing mass-flow extraction and zero compaction.',
      icon: Cpu
    }
  ];

  const gallery = [
    {
      src: '/images/plant/plant-silos-slipform.jpg',
      title: 'Vertical Slip-Form Silo Casting',
      caption: 'Continuous 24-hour hydraulic slip-forming of the reinforced concrete silo battery at Kpone.'
    },
    {
      src: '/images/plant/plant-silo-crane.jpg',
      title: 'Towering Silo Elevation & Head-House',
      caption: 'High-elevation view of the monolithic concrete shell and overhead pneumatic feed gallery.'
    },
    {
      src: '/images/plant/plant-construction-overview.jpg',
      title: 'Silo Discharge Conveyor Galleries',
      caption: 'Heavy structural steel galleries conveying fluidly extracted cement to the Haver & Boecker rotary packers.'
    },
    {
      src: '/images/plant/plant-aerial-overview.jpg',
      title: 'Aerial Plant Layout & Silo Battery',
      caption: 'Strategic orientation of raw material silos, finish grinding mills, and bulk tanker dispatch bays.'
    }
  ];

  return (
    <div className="bg-[#F7F6F3] min-h-screen text-left">
      
      {/* 1. Header & Breadcrumbs */}
      <section className="bg-neutral-900 text-white pt-12 pb-16 relative overflow-hidden border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <nav className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/plants" className="hover:text-white transition-colors">Manufacturing Plant</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#B91C1C] font-bold">Vertical Slip-Form Silo Architecture</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-xs bg-[#B91C1C] text-white text-[10px] font-mono uppercase font-bold tracking-widest">
                Factory Infrastructure Dossier
              </span>
              <span className="text-neutral-400 text-xs">•</span>
              <span className="text-neutral-300 text-xs font-mono">
                Kpone Industrial Area, Greater Accra
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
              Vertical Slip-Form Silo Architecture
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              High-capacity reinforced concrete storage silos engineered utilizing specialized continuous vertical slip-form casting. Built without horizontal construction joints to provide unmatched monolithic shell strength and hermetic moisture barrier protection for Ghana’s tropical maritime climate.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-neutral-800 max-w-4xl text-xs font-mono">
            <div>
              <span className="text-neutral-400 block text-[11px]">Construction Technique</span>
              <span className="text-white font-serif text-xl sm:text-2xl font-bold">Continuous Slip-Form</span>
            </div>
            <div>
              <span className="text-neutral-400 block text-[11px]">Cold Joint Formation</span>
              <span className="text-emerald-400 font-serif text-xl sm:text-2xl font-bold">0.00 Joint Fissures</span>
            </div>
            <div>
              <span className="text-neutral-400 block text-[11px]">Concrete Grade</span>
              <span className="text-white font-serif text-xl sm:text-2xl font-bold">C40/50 Monolithic</span>
            </div>
            <div>
              <span className="text-neutral-400 block text-[11px]">Moisture Ingress</span>
              <span className="text-white font-serif text-xl sm:text-2xl font-bold">100% Hermetic Seal</span>
            </div>
          </div>

        </div>

        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-center">
          <Layers className="w-96 h-96 text-white" />
        </div>
      </section>

      {/* 2. Engineering Narrative & Deep-Dive Cards */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B91C1C] block mb-2">
            Precision Civil Engineering
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 tracking-tight">
            Why Slip-Form Concrete Casting Outperforms Conventional Steel & Precast Silos
          </h2>
          <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
            Cement storage in coastal West Africa requires structures capable of withstanding extreme environmental salinity, high humidity, and tremendous mass-flow dynamic discharge pressures. Star Cement invested in continuous vertical slip-form casting to erect monolithic concrete silos that eliminate structural seams and prevent moisture-induced lump formation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {engineeringHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-xl border border-neutral-200/90 p-6 sm:p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-[#B91C1C] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono text-[#B91C1C] uppercase font-bold tracking-wider block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-neutral-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Specification Matrix */}
        <div className="bg-white rounded-2xl border border-neutral-200/90 overflow-hidden shadow-xs mb-16">
          <div className="p-6 sm:p-8 border-b border-neutral-200 bg-neutral-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#B91C1C] font-bold block mb-1">
                Engineering Blueprint Specifications
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold">
                Silo Civil & Mechanical Parameters
              </h3>
            </div>
            <span className="px-3 py-1 bg-neutral-800 rounded text-xs font-mono text-neutral-300 self-start sm:self-auto">
              GS 1118-1:2024 Compliance
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-neutral-100">
            <div className="p-6 sm:p-8 space-y-4">
              {siloSpecs.slice(0, 4).map((spec, idx) => (
                <div key={idx} className="flex items-start justify-between gap-4 pb-3 border-b border-neutral-100 last:border-0 last:pb-0">
                  <span className="text-xs font-mono text-neutral-500 uppercase">{spec.label}</span>
                  <span className="text-xs sm:text-sm font-semibold text-neutral-900 text-right">{spec.val}</span>
                </div>
              ))}
            </div>
            <div className="p-6 sm:p-8 space-y-4">
              {siloSpecs.slice(4).map((spec, idx) => (
                <div key={idx} className="flex items-start justify-between gap-4 pb-3 border-b border-neutral-100 last:border-0 last:pb-0">
                  <span className="text-xs font-mono text-neutral-500 uppercase">{spec.label}</span>
                  <span className="text-xs sm:text-sm font-semibold text-neutral-900 text-right">{spec.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Photography & Site Gallery */}
        <div className="bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-8 shadow-xs mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#B91C1C] font-bold block mb-1">
                Field Evidence & Construction Records
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-950">
                Slip-Form Silo Photography Gallery
              </h3>
            </div>
            <span className="text-xs font-mono text-neutral-500">
              Star Cement Ghana Plant, Kpone
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {gallery.map((item, idx) => (
              <div 
                key={idx}
                onClick={() => setActivePhoto(item)}
                className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-neutral-100 border border-neutral-200 cursor-pointer shadow-2xs hover:shadow-md transition-all"
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-3 text-white">
                  <span className="text-xs font-bold leading-tight">{item.title}</span>
                  <span className="text-[10px] text-neutral-300 line-clamp-1 mt-0.5">{item.caption}</span>
                </div>
                <div className="absolute top-2 right-2 p-1.5 rounded-full bg-black/40 text-white/80 group-hover:text-white group-hover:bg-black/70 transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commercial Procurement Banner */}
        <div className="bg-neutral-900 rounded-2xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-2">
              Factory Direct Grinding & Silo Dispatch
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Require Direct Silo Tanker or Flatbed Supply?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed font-normal">
              Our automated 480 t/h rotary Haver & Boecker bag packing lines and pressurized pneumatic tanker loading gantries ensure dispatch turnarounds under 45 minutes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onOpenQuote?.()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#B91C1C] hover:bg-red-800 text-white rounded-lg text-xs font-mono uppercase tracking-wider font-semibold transition-colors cursor-pointer"
            >
              <span>Request Dispatch Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/plants"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg text-xs font-mono uppercase tracking-wider font-semibold transition-colors"
            >
              <span>Back to Plant Overview</span>
            </Link>
          </div>
        </div>

      </section>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in"
          onClick={() => setActivePhoto(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors z-10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-[16/10] w-full bg-black">
              <img 
                src={activePhoto.src} 
                alt={activePhoto.title} 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6 bg-neutral-900 text-white">
              <h4 className="font-serif text-xl font-bold mb-1">{activePhoto.title}</h4>
              <p className="text-sm text-neutral-400 font-normal">{activePhoto.caption}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
