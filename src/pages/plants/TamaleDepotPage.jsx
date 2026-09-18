import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Clock, 
  Truck, 
  ShieldCheck, 
  Layers, 
  ChevronRight, 
  ArrowRight,
  Sun,
  Wind,
  CheckCircle2,
  Warehouse,
  Globe
} from 'lucide-react';
import { plants } from '../../data/plants';

export default function TamaleDepotPage({ onOpenQuote }) {
  const terminal = plants[3]; // tamale-northern-hub

  const technicalSpecs = [
    { label: 'Annual Depot Throughput', val: '250,000 Metric Tons / Year' },
    { label: 'Pneumatic Receiver Silo', val: '1 × 1,800 MT High-Rise Pneumatic Receiver' },
    { label: 'Weatherproof Bag Warehouse', val: '6,000 MT Fully Enclosed Dry Storage (120,000 Bags)' },
    { label: 'Bag Staging & Dispatch', val: 'Continuous 4-Bay Forklift Pallet Staging for Flatbeds' },
    { label: 'Climate Protection System', val: 'Aspirated dust filters & thermal barrier roof insulation (Harmattan-proof)' },
    { label: 'Weighbridge Infrastructure', val: '60-Tonne Automated Truck Weighbridge with Remote Sync' },
    { label: 'Northern Service Radius', val: 'Tamale Metro, Bolgatanga, Wa, Damongo, Nalerigu & Sahel border' },
    { label: 'On-Site Field Testing', val: 'Ambient temperature set-time calibration & moisture content station' },
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
            <span className="text-[#B91C1C] font-bold">Tamale Northern Hub</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#B91C1C] text-white px-3 py-1 text-xs font-mono font-bold uppercase tracking-widest rounded-xs">
                  Northern & Sahel Gateway
                </span>
                <span className="bg-neutral-800 text-neutral-300 px-3 py-1 text-xs font-mono uppercase tracking-wider border border-neutral-700">
                  07:00 – 18:00 Operations
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
                Tamale Northern Logistics Depot
              </h1>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl font-normal mb-6">
                The strategic supply anchor for the northern savannah zone. Providing 250,000 metric tons annually with 6,000 MT of thermally insulated warehouse storage engineered to safeguard cement bag quality against extreme Harmattan arid heat across the Northern, Upper East, and Upper West regions.
              </p>

              <div className="flex flex-wrap gap-4 text-xs font-mono text-neutral-300">
                <span className="flex items-center gap-1.5 bg-neutral-800/80 px-3 py-1.5 rounded-xs border border-neutral-700">
                  <MapPin className="w-3.5 h-3.5 text-[#B91C1C]" />
                  Industrial Area South, Bolgatanga Trunk Rd, Tamale
                </span>
                <span className="flex items-center gap-1.5 bg-neutral-800/80 px-3 py-1.5 rounded-xs border border-neutral-700">
                  <Phone className="w-3.5 h-3.5 text-[#B91C1C]" />
                  +233 37 202 3340
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-neutral-800/80 border border-neutral-700 rounded-sm p-6 text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-1">Annual Throughput</p>
              <p className="font-serif text-4xl sm:text-5xl font-black text-[#B91C1C] mb-1">250K MT</p>
              <p className="text-xs text-neutral-400 font-mono mb-6">Northern & Cross-Border Corridors</p>

              <button
                onClick={onOpenQuote}
                className="w-full bg-[#B91C1C] hover:bg-[#991B1B] text-white py-3 rounded-xs font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-md"
              >
                Request Tamale Dispatch
              </button>
            </div>
          </div>

        </div>

        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-center">
          <Globe className="w-96 h-96 text-white" />
        </div>
      </section>

      {/* 2. Key Operational Metrics Bar */}
      <section className="bg-white border-b border-neutral-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="font-serif text-3xl font-bold text-neutral-900">6,000 MT</p>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider mt-1">Thermal Dry Warehouse</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-neutral-900">1,800 MT</p>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider mt-1">Pneumatic Receiver</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-neutral-900">5 Regions</p>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider mt-1">Direct Supply Reach</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-[#B91C1C]">Sahel Route</p>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider mt-1">Transit Cross-Border Gate</p>
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
                  Climate Resilient Storage
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
                  Harmattan-Shielded Storage & Arid Temperature Quality Control
                </h2>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4">
                  The climatic conditions of Northern Ghana present unique challenges: during the Harmattan dry season, ambient temperatures regularly exceed 38°C with relative humidity dropping below 15%. Ordinary warehouse storage can cause premature moisture evaporation and rapid setting during concrete placement.
                </p>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  Our Tamale facility features double-skin insulated roofing with active interior temperature and humidity monitoring. Bags stored here retain full chemical reactivity, ensuring predictable slump retention and optimal hydration when mixed on northern jobsites.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="bg-white p-4 rounded-xs border border-neutral-200">
                  <span className="text-[#B91C1C] font-bold block text-sm mb-1">Thermal Insulation Roof</span>
                  <span className="text-neutral-600">Maintains warehouse temperatures up to 8°C cooler than outside ambient heat.</span>
                </div>
                <div className="bg-white p-4 rounded-xs border border-neutral-200">
                  <span className="text-[#B91C1C] font-bold block text-sm mb-1">Paga Transit Clearance</span>
                  <span className="text-neutral-600">Fast-track export customs documentation for cross-border transit to Ouagadougou.</span>
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

            {/* Northern Corridors Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-neutral-900 text-white p-6 sm:p-8 rounded-sm border border-neutral-800">
                <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-2">
                  Northern Supply Network
                </span>
                <h3 className="font-serif text-xl font-bold mb-4">
                  Served Northern Territories
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed mb-6">
                  Reliable dispatch schedules across all five northern administrative regions:
                </p>

                <ul className="space-y-3 text-xs font-mono">
                  <li className="flex items-center gap-2 border-b border-neutral-800 pb-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B91C1C]" />
                    <span><strong>Northern Region:</strong> Tamale Metropolitan, Savelugu, Yendi, Bimbilla</span>
                  </li>
                  <li className="flex items-center gap-2 border-b border-neutral-800 pb-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B91C1C]" />
                    <span><strong>Upper East:</strong> Bolgatanga, Navrongo, Bawku, Paga Border</span>
                  </li>
                  <li className="flex items-center gap-2 border-b border-neutral-800 pb-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B91C1C]" />
                    <span><strong>Upper West:</strong> Wa, Lawra, Jirapa, Tumu</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B91C1C]" />
                    <span><strong>Savanna & North East:</strong> Damongo, Bole, Nalerigu, Walewale</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-neutral-800">
                  <a
                    href="tel:+233372023340"
                    className="w-full bg-neutral-800 hover:bg-neutral-700 text-white py-3 rounded-xs font-mono text-xs uppercase tracking-wider font-bold transition-all text-center block"
                  >
                    Call Tamale Depot Officer (+233 37 202 3340)
                  </a>
                </div>
              </div>

              <div className="bg-white border border-neutral-200 p-6 rounded-sm">
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-bold block mb-2">
                  Distributor Network
                </span>
                <h4 className="font-serif text-lg font-bold text-neutral-900 mb-2">
                  Become a Northern Authorized Dealer
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  Building material merchants across the Northern and Upper regions can apply for certified dealer status with dedicated consignment stock lines.
                </p>
                <Link
                  to="/sales-reps"
                  className="text-xs font-mono font-bold text-[#B91C1C] hover:underline inline-flex items-center gap-1"
                >
                  Contact Northern Sales Representative →
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
              to="/plants/takoradi-depot" 
              className="inline-flex items-center gap-2 text-neutral-700 hover:text-[#B91C1C] font-mono text-xs uppercase tracking-wider font-bold transition-colors"
            >
              ← View Takoradi Marine Depot
            </Link>
            <Link 
              to="/plants/tema-terminal" 
              className="inline-flex items-center gap-2 text-neutral-700 hover:text-[#B91C1C] font-mono text-xs uppercase tracking-wider font-bold transition-colors"
            >
              Tour Flagship Tema Terminal →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
