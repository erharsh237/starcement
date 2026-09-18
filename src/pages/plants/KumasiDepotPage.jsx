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
  Gauge,
  CheckCircle2,
  Warehouse,
  Boxes
} from 'lucide-react';
import { plants } from '../../data/plants';

export default function KumasiDepotPage({ onOpenQuote }) {
  const terminal = plants[1]; // kumasi-inland-terminal

  const technicalSpecs = [
    { label: 'Annual Depot Throughput', val: '500,000 Metric Tons / Year' },
    { label: 'Pneumatic Buffer Silos', val: '2 × 2,500 MT (5,000 MT Total Capacity)' },
    { label: 'Covered Pallet Warehouse', val: '8,000 MT Weatherproof Dry Storage (160,000 Bags)' },
    { label: 'Palletizing & Loading Systems', val: '2 × 90 t/h Automated Offloading & Bag Lines (180 t/h)' },
    { label: 'Bulk Tanker Unloading Gantry', val: 'Dual High-Volume Pressurized Pneumatic Blowers' },
    { label: 'Weighbridge Infrastructure', val: '60-Tonne Electronic In/Out Continuous Weighbridge' },
    { label: 'Service Corridors', val: 'Greater Kumasi, Obuasi, Sunyani, Techiman & Bono Belt' },
    { label: 'Satellite Quality Lab', val: 'On-site Blaine fineness & 2-day compressive cube testing' },
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
            <span className="text-[#B91C1C] font-bold">Kumasi Central Depot</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#B91C1C] text-white px-3 py-1 text-xs font-mono font-bold uppercase tracking-widest rounded-xs">
                  Ashanti & Middle Belt Hub
                </span>
                <span className="bg-neutral-800 text-neutral-300 px-3 py-1 text-xs font-mono uppercase tracking-wider border border-neutral-700">
                  06:00 – 22:00 Daily
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
                Kumasi Central Distribution Depot
              </h1>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl font-normal mb-6">
                Situated in the Kaase Industrial Enclave, the Kumasi Depot is the logistical engine of central Ghana. Supplying 500,000 metric tons annually with 5,000 MT of vertical silo storage and an 8,000 MT covered bag warehouse protecting contractors against tropical downpours.
              </p>

              <div className="flex flex-wrap gap-4 text-xs font-mono text-neutral-300">
                <span className="flex items-center gap-1.5 bg-neutral-800/80 px-3 py-1.5 rounded-xs border border-neutral-700">
                  <MapPin className="w-3.5 h-3.5 text-[#B91C1C]" />
                  Kaase Industrial Commercial Enclave, Lake Rd, Kumasi
                </span>
                <span className="flex items-center gap-1.5 bg-neutral-800/80 px-3 py-1.5 rounded-xs border border-neutral-700">
                  <Phone className="w-3.5 h-3.5 text-[#B91C1C]" />
                  +233 32 208 9150
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-neutral-800/80 border border-neutral-700 rounded-sm p-6 text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-1">Annual Throughput</p>
              <p className="font-serif text-4xl sm:text-5xl font-black text-[#B91C1C] mb-1">500K MT</p>
              <p className="text-xs text-neutral-400 font-mono mb-6">Ashanti & Bono Corridors</p>

              <button
                onClick={onOpenQuote}
                className="w-full bg-[#B91C1C] hover:bg-[#991B1B] text-white py-3 rounded-xs font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-md"
              >
                Request Kumasi Depot Dispatch
              </button>
            </div>
          </div>

        </div>

        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-center">
          <Warehouse className="w-96 h-96 text-white" />
        </div>
      </section>

      {/* 2. Key Operational Metrics Bar */}
      <section className="bg-white border-b border-neutral-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="font-serif text-3xl font-bold text-neutral-900">5,000 MT</p>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider mt-1">Buffer Silos</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-neutral-900">8,000 MT</p>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider mt-1">Covered Warehouse</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-neutral-900">180 t/h</p>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider mt-1">Palletizing Speed</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-[#B91C1C]">&lt; 4 Hours</p>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider mt-1">Kumasi Metro Delivery</p>
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
                  Middle Belt Arterial Network
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
                  Serving Ashanti & Western North Growth Corridors
                </h2>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4">
                  Strategically located off Lake Road in Kaase, the Kumasi Depot connects directly with the N6 highway and Western corridor routes. Major commercial block molding operations in Suame, Tanoso, and Ejisu rely on our daily morning dispatches to maintain non-stop block yard production.
                </p>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  Bulk tankers traveling from the Tema Grinding Terminal replenish the dual 2,500 MT pneumatic silos via high-pressure transfer blowers, guaranteeing our silos never run empty even during peak dry-season building surges.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="bg-white p-4 rounded-xs border border-neutral-200">
                  <span className="text-[#B91C1C] font-bold block text-sm mb-1">Heavy Block Yard Staging</span>
                  <span className="text-neutral-600">Dedicated express queue for 300+ bag commercial sandcrete block producers.</span>
                </div>
                <div className="bg-white p-4 rounded-xs border border-neutral-200">
                  <span className="text-[#B91C1C] font-bold block text-sm mb-1">Weatherproof Staging</span>
                  <span className="text-neutral-600">Raised concrete plinths and humidity monitors prevent floor condensation damage.</span>
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

            {/* Regional Service Areas Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-neutral-900 text-white p-6 sm:p-8 rounded-sm border border-neutral-800">
                <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-2">
                  Logistics Coverage
                </span>
                <h3 className="font-serif text-xl font-bold mb-4">
                  Ashanti Direct Delivery Radius
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed mb-6">
                  Our fleet of dedicated 30-tonne flatbeds and partner distributor trucks provide guaranteed same-day delivery across:
                </p>

                <ul className="space-y-3 text-xs font-mono">
                  <li className="flex items-center gap-2 border-b border-neutral-800 pb-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B91C1C]" />
                    <span><strong>Kumasi Metro:</strong> Kaase, Suame, Asokwa, Bantama, Ahodwo</span>
                  </li>
                  <li className="flex items-center gap-2 border-b border-neutral-800 pb-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B91C1C]" />
                    <span><strong>Mining Corridor:</strong> Obuasi, Dunkwa-on-Offin, Manso Nkwanta</span>
                  </li>
                  <li className="flex items-center gap-2 border-b border-neutral-800 pb-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B91C1C]" />
                    <span><strong>Bono Region:</strong> Sunyani, Berekum, Dormaa Ahenkro</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B91C1C]" />
                    <span><strong>Bono East & Northern Gateway:</strong> Techiman, Kintampo</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-neutral-800">
                  <a
                    href="tel:+233322089150"
                    className="w-full bg-neutral-800 hover:bg-neutral-700 text-white py-3 rounded-xs font-mono text-xs uppercase tracking-wider font-bold transition-all text-center block"
                  >
                    Call Kumasi Depot Officer (+233 32 208 9150)
                  </a>
                </div>
              </div>

              <div className="bg-white border border-neutral-200 p-6 rounded-sm">
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-bold block mb-2">
                  Block Yard Program
                </span>
                <h4 className="font-serif text-lg font-bold text-neutral-900 mb-2">
                  Special Commercial Terms for Block Molders
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  Registered sandcrete block producers in the Ashanti Region enjoy scheduled weekly pallet drops and volume pricing on Star Solid 32.5R.
                </p>
                <Link
                  to="/products/star-solid-32-5r"
                  className="text-xs font-mono font-bold text-[#B91C1C] hover:underline inline-flex items-center gap-1"
                >
                  View Star Solid 32.5R Block Yields →
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
              to="/plants/tema-terminal" 
              className="inline-flex items-center gap-2 text-neutral-700 hover:text-[#B91C1C] font-mono text-xs uppercase tracking-wider font-bold transition-colors"
            >
              ← View Tema Grinding Terminal
            </Link>
            <Link 
              to="/plants/takoradi-depot" 
              className="inline-flex items-center gap-2 text-neutral-700 hover:text-[#B91C1C] font-mono text-xs uppercase tracking-wider font-bold transition-colors"
            >
              Explore Takoradi Marine Depot →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
