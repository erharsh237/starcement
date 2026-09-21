import React from 'react';
import { Link } from 'react-router-dom';
import PlantLocator from '../components/PlantLocator';
import PlantFlowExplorer from '../components/PlantFlowExplorer';
import { ChevronRight, Truck, Ship, ShieldCheck, Clock, MapPin, Phone } from 'lucide-react';

export default function PlantsPage({ plants, onSelectPlantForQuote }) {
  return (
    <div className="bg-[#F7F6F3] min-h-screen">
      {/* 1. Page Header & Breadcrumbs */}
      <section className="bg-neutral-900 text-white pt-12 pb-16 relative overflow-hidden border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#B91C1C] font-bold">Star Cement Ghana Plant</span>
          </nav>

          <div className="max-w-3xl reveal-init">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-3">
              National Manufacturing Autonomy • Kpone Industrial Area
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
              Star Cement Ghana Greenfield Grinding Plant
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              The Star Cement Ghana plant is an advanced greenfield cement grinding facility engineered to bolster the country’s local manufacturing autonomy. Strategically situated in the Kpone Industrial Area, Greater Accra, the facility is uniquely positioned to capture heavy raw materials flowing directly from the recently upgraded Tema Port.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Core Plant Locator Component */}
      <PlantLocator 
        plants={plants}
        onSelectPlantForQuote={onSelectPlantForQuote}
      />

      {/* 3. Vessel-to-Weighbridge Interactive Manufacturing Architecture */}
      <section className="py-8 bg-neutral-100/70 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PlantFlowExplorer />
        </div>
      </section>

      {/* 3. Terminal Logistics Standards Strip */}
      <section className="py-16 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B91C1C]">
              Operational Guarantees
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 mt-1">
              Terminal Efficiency Benchmarks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#F8F9FA] rounded-xl border border-neutral-200">
              <div className="w-10 h-10 rounded-lg bg-red-50 text-[#B91C1C] flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 mb-2">Gate-to-Gate &lt; 45 Mins</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Automated license plate recognition, digital weighbridges, and multi-bay robotic loading ensure commercial dispatch trucks are loaded and dispatched in under 45 minutes.
              </p>
            </div>

            <div className="p-6 bg-[#F8F9FA] rounded-xl border border-neutral-200">
              <div className="w-10 h-10 rounded-lg bg-red-50 text-[#B91C1C] flex items-center justify-center mb-4">
                <Ship className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 mb-2">Deepwater Marine Bulk Terminal</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Direct enclosed pneumatic pipeline conveyance from Tema Port bulk vessel berths directly to terminal silos, eliminating fugitive dust emissions and material contamination.
              </p>
            </div>

            <div className="p-6 bg-[#F8F9FA] rounded-xl border border-neutral-200">
              <div className="w-10 h-10 rounded-lg bg-red-50 text-[#B91C1C] flex items-center justify-center mb-4">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 mb-2">Dedicated Logistics Fleet</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Over 120 tracked flatbed tractor-trailers and pressurized pneumatic bulk tankers providing guaranteed scheduled deliveries directly to contractor job sites nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
