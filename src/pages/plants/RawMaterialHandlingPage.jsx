import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Ship, 
  Truck, 
  Layers, 
  ChevronRight, 
  ArrowRight, 
  Maximize2, 
  X, 
  ShieldCheck, 
  Cpu, 
  Activity, 
  Gauge, 
  Wind,
  CheckCircle2,
  Anchor
} from 'lucide-react';

export default function RawMaterialHandlingPage({ onOpenQuote }) {
  const [activePhoto, setActivePhoto] = useState(null);

  const handlingSpecs = [
    { label: 'Marine Intake Terminal', val: 'Tema Port Deepwater Bulk Cargo Berths' },
    { label: 'Raw Mineral Additives', val: 'Clinker, High-Purity Gypsum, Reactive Limestone' },
    { label: 'Conveyor Architecture', val: 'Fully Enclosed Weather-Proof Overland Galleries' },
    { label: 'Dosing Technology', val: 'Schenck Process Digital Loss-in-Weight Feeders' },
    { label: 'Weighing Accuracy', val: '±0.25% Precision Stoichiometric Additive Dosing' },
    { label: 'Environmental Dust Capture', val: 'Pulse-Jet Reverse Baghouse Filters (≤ 10 mg/Nm³)' },
    { label: 'Quality Sampling Cycle', val: 'Automated Cross-Belt Mechanical Samplers (2-Hr XRF)' },
    { label: 'Hourly Intake Throughput', val: 'Up to 1,200 MT/hour Continuous Conveyance' }
  ];

  const engineeringHighlights = [
    {
      title: 'Deepwater Marine Port Connection',
      subtitle: 'Seamless Intake from Upgraded Tema Port',
      desc: 'The Star Cement Ghana plant is located within the Kpone/Tema maritime industrial enclave, minutes away from the newly expanded Tema Port. Bulk vessel shipments of premium clinker and high-purity gypsum discharge directly onto high-capacity dumpers and heavy haulage units with zero maritime congestion delays.',
      icon: Anchor
    },
    {
      title: 'Enclosed Weather-Proof Conveyor Galleries',
      subtitle: 'Zero Moisture Ingress & Zero Fugitive Dust',
      desc: 'All transfer belts, bucket elevators, and overland tripper conveyors operate within enclosed steel galleries. This seals raw materials from tropical downpours and humid coastal sea air, guaranteeing the clinker remains completely dry and active prior to finish grinding.',
      icon: Wind
    },
    {
      title: 'Precision Loss-in-Weight Micro-Dosing',
      subtitle: 'Stoichiometric Chemistry for 42.5R & 32.5R',
      desc: 'Underneath raw material hoppers, microprocessor-controlled digital weighfeeders regulate the precise proportion of setting-regulator gypsum (CaSO₄·2H₂O) and high-calcium limestone. Digital load cells continuously self-tare to guarantee exact sulfate optimization and eliminate flash-set risks.',
      icon: Cpu
    },
    {
      title: 'Automated Cross-Belt Samplers & XRF Telemetry',
      subtitle: 'Continuous 24/7 Elemental Quality Mapping',
      desc: 'Mechanical cross-belt sweep samplers extract representative composite samples of the blended feed every two hours. The samples are instantly analyzed by our on-site X-Ray Fluorescence (XRF) spectrometer to verify lime saturation factor (LSF), silica modulus (SM), and alumina modulus (AM) before entering the ball mills.',
      icon: Activity
    }
  ];

  const gallery = [
    {
      src: '/images/plant/plant-construction-overview.jpg',
      title: 'Raw Material Feed & Conveyor Infrastructure',
      caption: 'Heavy structural steel framing for raw material intake hoppers and inclined conveyor belts.'
    },
    {
      src: '/images/plant/plant-aerial-overview.jpg',
      title: 'Kpone Plant & Storage Battery',
      caption: 'Overhead view showing raw material storage bays, conveyor links, and finished cement silos.'
    },
    {
      src: '/images/plant/plant-silos-slipform.jpg',
      title: 'Silo Material Transfer Towers',
      caption: 'Vertical transfer towers channeling blended clinker into the finish grinding mill circuit.'
    },
    {
      src: '/images/plant/plant-silo-crane.jpg',
      title: 'Enclosed Feed Galleries',
      caption: 'Fully enclosed overhead galleries protecting raw additives from maritime humidity.'
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
            <span className="text-[#B91C1C] font-bold">Raw Material Handling & Tema Port</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-xs bg-[#B91C1C] text-white text-[10px] font-mono uppercase font-bold tracking-widest">
                Factory Infrastructure Dossier
              </span>
              <span className="text-neutral-400 text-xs">•</span>
              <span className="text-neutral-300 text-xs font-mono">
                Tema Port Intake & Kpone Industrial Enclave
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
              Raw Material Handling & Tema Port Logistics
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              Direct connection to the upgraded Port of Tema, enclosed high-capacity conveyor galleries, and automated digital weighfeeders blending premium clinker, gypsum, and limestone with pinpoint stoichiometric accuracy.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-neutral-800 max-w-4xl text-xs font-mono">
            <div>
              <span className="text-neutral-400 block text-[11px]">Primary Intake Gateway</span>
              <span className="text-white font-serif text-xl sm:text-2xl font-bold">Tema Port Berths</span>
            </div>
            <div>
              <span className="text-neutral-400 block text-[11px]">Conveyor Enclosure</span>
              <span className="text-emerald-400 font-serif text-xl sm:text-2xl font-bold">100% Sealed</span>
            </div>
            <div>
              <span className="text-neutral-400 block text-[11px]">Dosing Accuracy</span>
              <span className="text-white font-serif text-xl sm:text-2xl font-bold">±0.25% Digital</span>
            </div>
            <div>
              <span className="text-neutral-400 block text-[11px]">Dust Emission Standard</span>
              <span className="text-white font-serif text-xl sm:text-2xl font-bold">≤ 10 mg/Nm³</span>
            </div>
          </div>

        </div>

        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-center">
          <Ship className="w-96 h-96 text-white" />
        </div>
      </section>

      {/* 2. Engineering Narrative & Technical Highlights */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B91C1C] block mb-2">
            Material Logistics Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 tracking-tight">
            Engineered for Continuous, Uncontaminated Mineral Supply
          </h2>
          <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
            Cement quality is fundamentally determined by the purity of its input minerals and the precision of its additive blending. Star Cement Ghana’s materials handling systems are designed from the ground up to capture deepwater vessel cargo directly from Tema Port, protect materials in hermetic galleries, and dose additives with clinical precision.
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
                Mechanical Specification Matrix
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold">
                Materials Handling Parameters & Standards
              </h3>
            </div>
            <span className="px-3 py-1 bg-neutral-800 rounded text-xs font-mono text-neutral-300 self-start sm:self-auto">
              EPA Ghana & GSA Certified
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-neutral-100">
            <div className="p-6 sm:p-8 space-y-4">
              {handlingSpecs.slice(0, 4).map((spec, idx) => (
                <div key={idx} className="flex items-start justify-between gap-4 pb-3 border-b border-neutral-100 last:border-0 last:pb-0">
                  <span className="text-xs font-mono text-neutral-500 uppercase">{spec.label}</span>
                  <span className="text-xs sm:text-sm font-semibold text-neutral-900 text-right">{spec.val}</span>
                </div>
              ))}
            </div>
            <div className="p-6 sm:p-8 space-y-4">
              {handlingSpecs.slice(4).map((spec, idx) => (
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
                On-Site Heavy Engineering
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-950">
                Materials Handling & Conveyor Photography
              </h3>
            </div>
            <span className="text-xs font-mono text-neutral-500">
              Kpone Facility Infrastructure
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
              Industrial Cement Production
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Looking for Bulk Commercial Orders?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed font-normal">
              Discover how our reliable materials supply chain translates to unbroken production, rapid job-site fulfillment, and competitive commercial pricing across Ghana.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onOpenQuote?.()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#B91C1C] hover:bg-red-800 text-white rounded-lg text-xs font-mono uppercase tracking-wider font-semibold transition-colors cursor-pointer"
            >
              <span>Request Commercial Quote</span>
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
