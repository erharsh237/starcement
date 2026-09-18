import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Clock, 
  Truck, 
  Ship, 
  ShieldCheck, 
  Layers, 
  ChevronRight, 
  ArrowRight,
  Gauge,
  CheckCircle2,
  Anchor,
  Pickaxe
} from 'lucide-react';
import { plants } from '../../data/plants';

export default function TakoradiDepotPage({ onOpenQuote }) {
  const terminal = plants[2]; // takoradi-marine-depot

  const technicalSpecs = [
    { label: 'Annual Depot Throughput', val: '350,000 Metric Tons / Year' },
    { label: 'Bulk Storage Silos', val: '2 × 3,000 MT Heavy Silos (6,000 MT Total Capacity)' },
    { label: 'Pallet Packaging Line', val: '1 × 100 t/h Automated Poly-Stretch Pallet Wrapping Line' },
    { label: 'Bulk Tanker Fleet Fleet', val: 'Dedicated 32-Tonne Pneumatic Tankers for Mining & Port Contractors' },
    { label: 'Proximity to Takoradi Port', val: '1.8 km from Port Commercial Gate (Direct Rail & Road Access)' },
    { label: 'Weighbridge Infrastructure', val: '70-Tonne Multi-Axle Certified Digital Weighbridge' },
    { label: 'Key Industries Serviced', val: 'Offshore Energy Shorebases, Port Marine Works & Tarkwa Gold Mines' },
    { label: 'Specialized Testing Lab', val: 'Chloride penetration resistance & high-salinity durability verification' },
  ];

  return (
    <div className="bg-[#F7F6F3] min-h-screen">
      
      {/* 1. Header & Breadcrumbs */}
      <section className="bg-neutral-900 text-white pt-12 pb-16 relative overflow-hidden border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <nav className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/plants" className="hover:text-white transition-colors">Terminals</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#B91C1C] font-bold">Takoradi Marine Depot</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#B91C1C] text-white px-3 py-1 text-xs font-mono font-bold uppercase tracking-widest rounded-xs">
                  Western & Mining Hub
                </span>
                <span className="bg-neutral-800 text-neutral-300 px-3 py-1 text-xs font-mono uppercase tracking-wider border border-neutral-700">
                  06:00 – 20:00 Operations
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
                Takoradi Maritime Logistics Depot
              </h1>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl font-normal mb-6">
                Anchoring Ghana's Western economic corridor. Providing 350,000 metric tons annually with 6,000 MT of bulk silo buffering engineered to support Takoradi Port maritime expansions, offshore energy logistics bases, and heavy mining infrastructure across Tarkwa and Prestea.
              </p>

              <div className="flex flex-wrap gap-4 text-xs font-mono text-neutral-300">
                <span className="flex items-center gap-1.5 bg-neutral-800/80 px-3 py-1.5 rounded-xs border border-neutral-700">
                  <MapPin className="w-3.5 h-3.5 text-[#B91C1C]" />
                  Harbour Commercial Belt, New Cargo Bypass, Takoradi
                </span>
                <span className="flex items-center gap-1.5 bg-neutral-800/80 px-3 py-1.5 rounded-xs border border-neutral-700">
                  <Phone className="w-3.5 h-3.5 text-[#B91C1C]" />
                  +233 31 202 5580
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-neutral-800/80 border border-neutral-700 rounded-sm p-6 text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-1">Annual Throughput</p>
              <p className="font-serif text-4xl sm:text-5xl font-black text-[#B91C1C] mb-1">350K MT</p>
              <p className="text-xs text-neutral-400 font-mono mb-6">Maritime, Oil/Gas & Mining Sector</p>

              <button
                onClick={onOpenQuote}
                className="w-full bg-[#B91C1C] hover:bg-[#991B1B] text-white py-3 rounded-xs font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-md"
              >
                Request Takoradi Bulk Dispatch
              </button>
            </div>
          </div>

        </div>

        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-center">
          <Anchor className="w-96 h-96 text-white" />
        </div>
      </section>

      {/* 2. Key Operational Metrics Bar */}
      <section className="bg-white border-b border-neutral-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="font-serif text-3xl font-bold text-neutral-900">6,000 MT</p>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider mt-1">Bulk Silo Storage</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-neutral-900">100 t/h</p>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider mt-1">Pallet Wrapping Line</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-neutral-900">1.8 km</p>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider mt-1">Distance to Port Gate</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-[#B91C1C]">Marine Spec</p>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider mt-1">Chloride Resistance Lab</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Deep Operational Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-2">
                  Coastal & Heavy Industrial Focus
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
                  Engineering Ghana's Maritime & Mining Frontier
                </h2>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4">
                  Operating in high-humidity coastal and heavy industrial mining environments requires stringent cement quality control. The Takoradi Depot supplies high-density CEM II/A-L 42.5R to offshore supply bases, oilfield fabrication yards, and deepwater quay walls where seawater sulfate and chloride intrusion threaten structural concrete longevity.
                </p>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  In addition, dedicated pneumatic bulk tankers deliver daily directly to gold mine backfill plants, leach pad construction sites, and tailings dam revetments throughout the Tarkwa-Bogoso mining belt.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="bg-white p-4 rounded-xs border border-neutral-200">
                  <span className="text-[#B91C1C] font-bold block text-sm mb-1">Marine Durability</span>
                  <span className="text-neutral-600">Low-alkali cement minimizes alkali-silica reactivity in coastal gravel aggregates.</span>
                </div>
                <div className="bg-white p-4 rounded-xs border border-neutral-200">
                  <span className="text-[#B91C1C] font-bold block text-sm mb-1">Mining Haulage Corridors</span>
                  <span className="text-neutral-600">Heavy-duty 8-wheel pneumatic tankers certified for unpaved mine haul road transit.</span>
                </div>
              </div>

              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-2">
                  Technical Specifications
                </span>
                <h3 className="font-serif text-xl font-bold text-neutral-900 mb-4">
                  Depot Operational Parameters
                </h3>

                <div className="border border-neutral-200 rounded-sm overflow-hidden bg-white">
                  <table className="w-full text-left text-xs font-mono divide-y divide-neutral-200">
                    <tbody className="divide-y divide-neutral-100">
                      {technicalSpecs.map((spec, idx) => (
                        <tr key={idx} className="hover:bg-neutral-50">
                          <td className="p-3 font-bold text-neutral-700 w-2/5 bg-neutral-50/50">{spec.label}</td>
                          <td className="p-3 text-neutral-900">{spec.val}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Strategic Sectors Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-neutral-900 text-white p-6 sm:p-8 rounded-sm border border-neutral-800">
                <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-2">
                  Sector Specializations
                </span>
                <h3 className="font-serif text-xl font-bold mb-4">
                  Western Strategic Sectors
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed mb-6">
                  Key civil and infrastructure segments supplied directly by Takoradi Depot logistics:
                </p>

                <ul className="space-y-3 text-xs font-mono">
                  <li className="flex items-center gap-2 border-b border-neutral-800 pb-2">
                    <Ship className="w-4 h-4 text-[#B91C1C]" />
                    <span><strong>Maritime Infrastructure:</strong> Quay walls, breakwaters, coastal sea defense</span>
                  </li>
                  <li className="flex items-center gap-2 border-b border-neutral-800 pb-2">
                    <Pickaxe className="w-4 h-4 text-[#B91C1C]" />
                    <span><strong>Mining Civil Works:</strong> Underground shaft lining, ball mill foundations, dams</span>
                  </li>
                  <li className="flex items-center gap-2 border-b border-neutral-800 pb-2">
                    <Building2 className="w-4 h-4 text-[#B91C1C]" />
                    <span><strong>Energy & Petrochemical:</strong> Offshore logistics bases, tank farms, refinery slabs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-[#B91C1C]" />
                    <span><strong>Highway Corridors:</strong> Takoradi-Agona Nkwanta-Elubo international transit road</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-neutral-800">
                  <a
                    href="tel:+233312025580"
                    className="w-full bg-neutral-800 hover:bg-neutral-700 text-white py-3 rounded-xs font-mono text-xs uppercase tracking-wider font-bold transition-all text-center block"
                  >
                    Call Takoradi Logistics Officer (+233 31 202 5580)
                  </a>
                </div>
              </div>

              <div className="bg-white border border-neutral-200 p-6 rounded-sm">
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-bold block mb-2">
                  Structural Grade
                </span>
                <h4 className="font-serif text-lg font-bold text-neutral-900 mb-2">
                  Recommended for Western Projects
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  For coastal piles and marine foundations, civil consultants recommend Star Super 42.5R for high compaction density and chloride impermeability.
                </p>
                <Link
                  to="/products/star-super-42-5r"
                  className="text-xs font-mono font-bold text-[#B91C1C] hover:underline inline-flex items-center gap-1"
                >
                  View Star Super 42.5R Marine Specs →
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Inter-navigation */}
      <section className="py-8 bg-[#F7F6F3] border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link 
              to="/plants/kumasi-depot" 
              className="inline-flex items-center gap-2 text-neutral-700 hover:text-[#B91C1C] font-mono text-xs uppercase tracking-wider font-bold transition-colors"
            >
              ← View Kumasi Central Depot
            </Link>
            <Link 
              to="/plants/tamale-depot" 
              className="inline-flex items-center gap-2 text-neutral-700 hover:text-[#B91C1C] font-mono text-xs uppercase tracking-wider font-bold transition-colors"
            >
              Explore Tamale Northern Hub →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
