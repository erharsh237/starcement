import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import CompanyProfileSection from '../components/CompanyProfileSection';
import ProductsKnowledgeSection from '../components/ProductsKnowledgeSection';
import OwnerKnowledgeSection from '../components/OwnerKnowledgeSection';
import { ArrowRight, MapPin, Phone, ShieldCheck, Truck, Users, Award, Building2 } from 'lucide-react';

export default function HomePage({ 
  onOpenQuote, 
  onOpenCalculator,
  onOpenDealers,
  products,
  salesReps,
  plants,
  onSelectProductForQuote,
  onTransferToQuote,
  onSelectPlantForQuote,
  onContactRep
}) {
  return (
    <div className="space-y-0">
      {/* 1. Executive Architectural Hero */}
      <Hero 
        onOpenQuote={onOpenQuote} 
        onOpenCalculator={onOpenCalculator} 
      />

      {/* 2. Continuous Industrial Scrolling Marquee Banner (No Establishment Year) */}
      <section className="bg-neutral-900 border-y border-neutral-800 py-3 overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-8 text-[11px] font-mono font-bold tracking-widest text-neutral-300 uppercase whitespace-nowrap">
          <span className="flex items-center gap-2"><span className="text-[#B91C1C]">★</span> GS 1118:2024 CONFORMANT</span>
          <span className="text-neutral-600">•</span>
          <span className="flex items-center gap-2"><span className="text-[#B91C1C]">★</span> 750,000 MT INSTALLED ANNUAL CAPACITY</span>
          <span className="text-neutral-600">•</span>
          <span className="flex items-center gap-2"><span className="text-[#B91C1C]">★</span> 75 TPH HIGH-EFFICIENCY CLOSED-CIRCUIT MILL</span>
          <span className="text-neutral-600">•</span>
          <span className="flex items-center gap-2"><span className="text-[#B91C1C]">★</span> PLC & SCADA DIGITAL CONTROL SYSTEM</span>
          <span className="text-neutral-600">•</span>
          <span className="flex items-center gap-2"><span className="text-[#B91C1C]">★</span> AUTOMATED ROTOR PACKER & BULK LOADING</span>
          <span className="text-neutral-600">•</span>
          <span className="flex items-center gap-2"><span className="text-[#B91C1C]">★</span> PLOT AGR/IND/Y/5 KPONE INDUSTRIAL AREA</span>
          <span className="text-neutral-600">•</span>
          <span className="flex items-center gap-2"><span className="text-[#B91C1C]">★</span> INTEGRATED MANAGEMENT SYSTEM (IMS) CERTIFIED</span>
          <span className="text-neutral-600">•</span>
          {/* Duplicate for seamless infinite loop */}
          <span className="flex items-center gap-2"><span className="text-[#B91C1C]">★</span> GS 1118:2024 CONFORMANT</span>
          <span className="text-neutral-600">•</span>
          <span className="flex items-center gap-2"><span className="text-[#B91C1C]">★</span> 750,000 MT INSTALLED ANNUAL CAPACITY</span>
          <span className="text-neutral-600">•</span>
          <span className="flex items-center gap-2"><span className="text-[#B91C1C]">★</span> 75 TPH HIGH-EFFICIENCY CLOSED-CIRCUIT MILL</span>
          <span className="text-neutral-600">•</span>
          <span className="flex items-center gap-2"><span className="text-[#B91C1C]">★</span> PLC & SCADA DIGITAL CONTROL SYSTEM</span>
          <span className="text-neutral-600">•</span>
          <span className="flex items-center gap-2"><span className="text-[#B91C1C]">★</span> AUTOMATED ROTOR PACKER & BULK LOADING</span>
          <span className="text-neutral-600">•</span>
          <span className="flex items-center gap-2"><span className="text-[#B91C1C]">★</span> PLOT AGR/IND/Y/5 KPONE INDUSTRIAL AREA</span>
          <span className="text-neutral-600">•</span>
          <span className="flex items-center gap-2"><span className="text-[#B91C1C]">★</span> INTEGRATED MANAGEMENT SYSTEM (IMS) CERTIFIED</span>
        </div>
      </section>

      {/* 3. Key Trust Bar & National Credentials */}
      <section className="bg-white border-b border-neutral-200 py-6 reveal-init">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center stagger-children">
            <div className="flex flex-col items-center">
              <span className="font-mono text-2xl sm:text-3xl font-black text-neutral-900">750,000 MT</span>
              <span className="text-xs text-neutral-500 font-medium uppercase tracking-wider mt-1">Installed Annual Capacity</span>
            </div>
            <div className="flex flex-col items-center border-l border-neutral-100">
              <span className="font-mono text-2xl sm:text-3xl font-black text-[#B91C1C]">75 TPH</span>
              <span className="text-xs text-neutral-500 font-medium uppercase tracking-wider mt-1">Closed-Circuit Mill</span>
            </div>
            <div className="flex flex-col items-center border-l border-neutral-100">
              <span className="font-mono text-2xl sm:text-3xl font-black text-neutral-900">PLC / SCADA</span>
              <span className="text-xs text-neutral-500 font-medium uppercase tracking-wider mt-1">Digital Control System</span>
            </div>
            <div className="flex flex-col items-center border-l border-neutral-100">
              <span className="font-mono text-2xl sm:text-3xl font-black text-emerald-600">GS 1118:2024</span>
              <span className="text-xs text-neutral-500 font-medium uppercase tracking-wider mt-1">Certified Conformance</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPANY PROFILE (Mandate 1: Company Profile First) */}
      <CompanyProfileSection 
        onOpenDealers={onOpenDealers} 
      />

      {/* 5. PRODUCTS KNOWLEDGE (Mandate 2: Products Knowledge Second - Focus on Strengths & Applications) */}
      <ProductsKnowledgeSection 
        onSelectProductForQuote={onSelectProductForQuote}
        onOpenCalculator={onOpenCalculator}
        onOpenDealers={onOpenDealers}
      />

      {/* 6. OWNER'S KNOWLEDGE (Mandate 3: Owner's Knowledge Third - Promoters & Directorate) */}
      <OwnerKnowledgeSection />

      {/* 7. Corporate Dispatch & Authorized Dealer Action Strip */}
      <section className="bg-neutral-950 text-white py-14 border-t border-neutral-800 reveal-init">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            <div className="p-6 bg-neutral-900/80 rounded-lg border border-neutral-800 hover:border-[#B91C1C]/60 transition-colors reveal-card">
              <div className="w-8 h-8 rounded bg-red-950 text-[#B91C1C] flex items-center justify-center mb-3">
                <MapPin className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-serif font-bold text-white mb-2">Authorized Dealers Directory</h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Locate verified Star Cement distributors and stockists with phone numbers, state, city, and delivery fleet across Ghana.
              </p>
              <button 
                type="button"
                onClick={onOpenDealers} 
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B91C1C] hover:text-red-400 transition-colors cursor-pointer"
              >
                <span>Browse Authorized Dealers</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-6 bg-neutral-900/80 rounded-lg border border-neutral-800 hover:border-[#B91C1C]/60 transition-colors reveal-card">
              <div className="w-8 h-8 rounded bg-red-950 text-[#B91C1C] flex items-center justify-center mb-3">
                <Building2 className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-serif font-bold text-white mb-2">Manufacturing Facility</h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Explore our 750,000 MT Kpone plant, 75 TPH closed-circuit grinding circuit, and monolithic slip-form silo complex.
              </p>
              <Link 
                to="/plants" 
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B91C1C] hover:text-red-400 transition-colors"
              >
                <span>View Plant Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 bg-neutral-900/80 rounded-lg border border-neutral-800 hover:border-[#B91C1C]/60 transition-colors reveal-card">
              <div className="w-8 h-8 rounded bg-red-950 text-[#B91C1C] flex items-center justify-center mb-3">
                <Phone className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-serif font-bold text-white mb-2">Central Dispatch Operations</h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Direct hotline to our Kpone commercial dispatch desk for 50kg bag pallet orders and pressurized bulk road tanker dispatch.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B91C1C] hover:text-red-400 transition-colors"
              >
                <span>Contact Dispatch Operations</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
