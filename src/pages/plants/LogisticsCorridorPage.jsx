import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  Truck, 
  MapPin, 
  Clock, 
  ChevronRight, 
  ArrowRight, 
  Maximize2, 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Navigation, 
  Route,
  Building2
} from 'lucide-react';

export default function LogisticsCorridorPage({ onOpenQuote }) {
  const [activePhoto, setActivePhoto] = useState(null);

  const logisticsSpecs = [
    { label: 'Plant Geographical Zone', val: 'Kpone Industrial Area, Greater Accra' },
    { label: 'Proximity to Tema Port', val: 'Direct Heavy Haulage Access (< 12 km)' },
    { label: 'Primary Arterial Corridors', val: 'Tema Motorway, N1 Coastal, N2 Eastern Highway' },
    { label: 'Weighbridge Configuration', val: 'Dual Automated Inbound/Outbound RFID Bridges' },
    { label: 'Gate-to-Gate Turnaround', val: '< 45 Minutes Average for Full 600-Bag Flatbed' },
    { label: 'Dedicated Logistics Fleet', val: '120+ GPS-Tracked Flatbeds & Bulk Tankers' },
    { label: 'Operating Schedule', val: '24/7/365 Continuous Logistics & Dispatch Gate' },
    { label: 'Regional Fulfillment Reach', val: 'All 16 Administrative Regions of Ghana' }
  ];

  const corridorHighlights = [
    {
      title: 'Bypassing Urban Accra Traffic Chokepoints',
      subtitle: 'Immediate Heavy Transport Connectivity',
      desc: 'Inner-city Accra logistics are frequently paralyzed by congested arterial bottlenecks. By positioning our flagship grinding facility within the specialized Kpone Industrial Enclave, heavy trucks exit directly onto multi-lane industrial corridors without navigating residential or commercial city traffic.',
      icon: Navigation
    },
    {
      title: 'Direct Linkage to Major National Arteries',
      subtitle: 'N1 Coastal, N2 Eastern & Tema Motorway',
      desc: 'The plant is directly linked to the Accra-Tema Motorway for fast urban access, the N1 coastal trunk road running west to Takoradi and east to Aflao, and the N2 highway running north through the Eastern and Volta regions directly to the Ashanti commercial corridor.',
      icon: Route
    },
    {
      title: 'Automated RFID Weighbridges & Sub-45 Min Dispatch',
      subtitle: 'Frictionless Gate-to-Gate Turnaround',
      desc: 'Trucks enter and exit via automated digital weighbridges equipped with RFID card scanners and high-definition license plate capture. Automated gross and tare weight calculations synchronize directly with SAP dispatch systems, achieving total gate turnaround times under 45 minutes.',
      icon: Clock
    },
    {
      title: 'Over 120 GPS-Tracked Flatbeds & Bulk Tankers',
      subtitle: 'Guaranteed Job-Site Delivery Timelines',
      desc: 'Our commercial fleet is integrated with real-time GPS telemetry and electronic seal verification. Whether procuring palletized 50kg bags on 30-tonne flatbeds or ordering pneumatic bulk tankers for continuous slip-form pours, contractors receive guaranteed dispatch schedules.',
      icon: Truck
    }
  ];

  const regionalRoutes = [
    {
      corridor: 'Accra Metropolitan & Western Enclave',
      artery: 'Accra-Tema Motorway & George Walker Bush Highway (N1)',
      transitTime: '45 – 90 Minutes',
      coverage: 'Central Accra, Spintex, East Legon, Pokuase, Kasoa, Winneba'
    },
    {
      corridor: 'Tema Industrial & Free Zones Enclave',
      artery: 'Meridian Highway & Heavy Industrial Access Roads',
      transitTime: '15 – 30 Minutes',
      coverage: 'Tema Port Terminals, Free Zones Enclave, Kpone, Prampram, Dawhenya'
    },
    {
      corridor: 'Eastern & Ashanti Commercial Corridor',
      artery: 'Tema-Akosombo Road & N6 Kumasi Trunk Corridor',
      transitTime: '3 – 5 Hours',
      coverage: 'Nsawam, Suhum, Koforidua, Nkawkaw, Ejisu, Kumasi Metropolis'
    },
    {
      corridor: 'Volta & Trans-West African Coastal Highway',
      artery: 'N1 Coastal Corridor (Aflao Trans-Ecowas Route)',
      transitTime: '2 – 4 Hours',
      coverage: 'Sogakope, Ho, Aflao Border, Denu, Ketu South'
    }
  ];

  const gallery = [
    {
      src: '/images/plant/plant-aerial-overview.jpg',
      title: 'Kpone Industrial Logistics Hub',
      caption: 'Aerial panorama showing direct multi-lane arterial road connections surrounding the Kpone plant.'
    },
    {
      src: '/images/plant/plant-construction-overview.jpg',
      title: 'Weighbridge & Dispatch Access Zones',
      caption: 'Wide-radius heavy haulage access lanes designed for continuous articulated truck circulation.'
    },
    {
      src: '/images/plant/plant-silos-slipform.jpg',
      title: 'Bulk Gantry Dispatch Bay',
      caption: 'Elevated pneumatic loading gantries for rapid pressurized bulk tanker turnaround.'
    },
    {
      src: '/images/plant/plant-silo-crane.jpg',
      title: 'Factory Gate Infrastructure',
      caption: 'Dedicated industrial staging yard accommodating high-volume flatbed fleet staging.'
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
            <span className="text-[#B91C1C] font-bold">Kpone Industrial Logistics Corridor</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-xs bg-[#B91C1C] text-white text-[10px] font-mono uppercase font-bold tracking-widest">
                Factory Infrastructure Dossier
              </span>
              <span className="text-neutral-400 text-xs">•</span>
              <span className="text-neutral-300 text-xs font-mono">
                Kpone Industrial Enclave, Greater Accra
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
              Kpone Industrial Logistics Corridor
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              Located right inside the Kpone Industrial Area, Greater Accra, the plant sits adjacent to major arterial transport corridors, significantly shortening distribution logistics, eliminating inner-city bottlenecks, and ensuring rapid dispatch across all 16 regions of Ghana.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-neutral-800 max-w-4xl text-xs font-mono">
            <div>
              <span className="text-neutral-400 block text-[11px]">Gate Turnaround</span>
              <span className="text-emerald-400 font-serif text-xl sm:text-2xl font-bold">&lt; 45 Minutes</span>
            </div>
            <div>
              <span className="text-neutral-400 block text-[11px]">Weighbridge Automation</span>
              <span className="text-white font-serif text-xl sm:text-2xl font-bold">Dual RFID Lanes</span>
            </div>
            <div>
              <span className="text-neutral-400 block text-[11px]">Distribution Reach</span>
              <span className="text-white font-serif text-xl sm:text-2xl font-bold">16 Regions</span>
            </div>
            <div>
              <span className="text-neutral-400 block text-[11px]">Haulage Fleet</span>
              <span className="text-white font-serif text-xl sm:text-2xl font-bold">120+ Trucks</span>
            </div>
          </div>

        </div>

        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-center">
          <Compass className="w-96 h-96 text-white" />
        </div>
      </section>

      {/* 2. Strategic Transit Advantages */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B91C1C] block mb-2">
            Regional Supply Chain Supremacy
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 tracking-tight">
            Engineered to Shorten Supply Lines & Cut Contractor Freight Costs
          </h2>
          <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
            In concrete construction, logistics speed dictates project timelines. Star Cement’s location within the Kpone Industrial Enclave ensures our commercial dispatch fleet connects immediately to major national highways, allowing contractors to receive same-day delivery without unexpected transit hold-ups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {corridorHighlights.map((item, idx) => {
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

        {/* Regional Distribution Corridor Table */}
        <div className="bg-white rounded-2xl border border-neutral-200/90 overflow-hidden shadow-xs mb-16">
          <div className="p-6 sm:p-8 border-b border-neutral-200 bg-neutral-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#B91C1C] font-bold block mb-1">
                Major National Arteries
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold">
                Direct Transit Corridor Timeframes
              </h3>
            </div>
            <span className="px-3 py-1 bg-neutral-800 rounded text-xs font-mono text-neutral-300 self-start sm:self-auto">
              24/7 Dispatch Schedules
            </span>
          </div>

          <div className="divide-y divide-neutral-100">
            {regionalRoutes.map((route, idx) => (
              <div key={idx} className="p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="max-w-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-[#B91C1C] shrink-0" />
                    <h4 className="font-serif text-base sm:text-lg font-bold text-neutral-900">{route.corridor}</h4>
                  </div>
                  <p className="text-xs font-mono text-neutral-500 mb-1">Primary Route: {route.artery}</p>
                  <p className="text-xs text-neutral-600 leading-relaxed">Key Municipalities: {route.coverage}</p>
                </div>
                <div className="bg-neutral-50 border border-neutral-200 px-4 py-2 rounded-lg text-left lg:text-right shrink-0">
                  <span className="text-[10px] font-mono uppercase text-neutral-400 block font-bold">Average Dispatch Transit</span>
                  <strong className="text-sm sm:text-base font-mono font-bold text-[#B91C1C]">{route.transitTime}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specification Matrix */}
        <div className="bg-white rounded-2xl border border-neutral-200/90 overflow-hidden shadow-xs mb-16">
          <div className="p-6 sm:p-8 border-b border-neutral-200 bg-neutral-900 text-white">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B91C1C] font-bold block mb-1">
              Dispatch Infrastructure Metrics
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold">
              Weighbridge & Fleet Capabilities
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-neutral-100">
            <div className="p-6 sm:p-8 space-y-4">
              {logisticsSpecs.slice(0, 4).map((spec, idx) => (
                <div key={idx} className="flex items-start justify-between gap-4 pb-3 border-b border-neutral-100 last:border-0 last:pb-0">
                  <span className="text-xs font-mono text-neutral-500 uppercase">{spec.label}</span>
                  <span className="text-xs sm:text-sm font-semibold text-neutral-900 text-right">{spec.val}</span>
                </div>
              ))}
            </div>
            <div className="p-6 sm:p-8 space-y-4">
              {logisticsSpecs.slice(4).map((spec, idx) => (
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
                Field Infrastructure
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-950">
                Logistics & Fleet Dispatch Photography
              </h3>
            </div>
            <span className="text-xs font-mono text-neutral-500">
              Kpone Dispatch Complex
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
              National Dispatch Operations
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Schedule Job-Site Delivery Today
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed font-normal">
              Connect with our central dispatch desk or regional commercial officers to arrange direct flatbed or bulk tanker delivery directly to your job site across Ghana.
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
