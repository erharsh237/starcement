import React from 'react';
import { Link } from 'react-router-dom';
import Sustainability from '../components/Sustainability';
import { ChevronRight, Leaf, ShieldCheck, Sun, Recycle, Award } from 'lucide-react';

export default function SustainabilityPage() {
  return (
    <div className="bg-[#F7F6F3] min-h-screen">
      {/* 1. Page Header & Breadcrumbs */}
      <section className="bg-neutral-900 text-white pt-12 pb-16 relative overflow-hidden border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#B91C1C] font-bold">Sustainability</span>
          </nav>

          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold block mb-3">
              Environmental Engineering • Net-Zero Roadmap
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
              Building low-carbon infrastructure for tomorrow.
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              By utilizing precision-ground active Ghanaian limestone and calcined clays under GS 1118-1:2024, Star Cement Group of Companies Africa cuts embodied carbon by up to 34% while delivering superior early compressive strength.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Core Sustainability Roadmap & Carbon Matrix Component */}
      <Sustainability />

      {/* 3. Green Manufacturing Initiatives Strip */}
      <section className="py-16 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B91C1C]">
              Circular Economy
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 mt-1">
              Terminal Environmental Innovations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#F8F9FA] rounded-xl border border-neutral-200">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 mb-2">Solar-Assisted Silo Power</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Our Tema terminal incorporates 2.2 MW of rooftop solar photovoltaic capacity, powering terminal auxiliary fans, weighbridge systems, and automated bag-packing conveyors.
              </p>
            </div>

            <div className="p-6 bg-[#F8F9FA] rounded-xl border border-neutral-200">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Recycle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 mb-2">Zero Fugitive Dust (Baghouse Filters)</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Advanced pulse-jet fabric baghouse filtration captures 99.98% of particulate matter at transfer points, recycling collected dust directly back into the finished product stream.
              </p>
            </div>

            <div className="p-6 bg-[#F8F9FA] rounded-xl border border-neutral-200">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 mb-2">EPA Environmental Permitted</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Operating with valid Environmental Protection Agency (EPA) Ghana permits, ISO 14001:2015 environmental certification, and continuous quarterly third-party emissions audits.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
