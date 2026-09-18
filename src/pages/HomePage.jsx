import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Calculator from '../components/Calculator';
import Projects from '../components/Projects';
import PlantLocator from '../components/PlantLocator';
import SalesRepLocator from '../components/SalesRepLocator';
import Sustainability from '../components/Sustainability';
import { ArrowRight, ShieldCheck, Truck, Users, Award, Building2 } from 'lucide-react';

export default function HomePage({ 
  onOpenQuote, 
  onOpenCalculator,
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

      {/* 2. Continuous Industrial Scrolling Marquee Banner */}
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
          <span className="flex items-center gap-2"><span className="text-[#B91C1C]">★</span> ESTABLISHED SINCE 2021</span>
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
          <span className="flex items-center gap-2"><span className="text-[#B91C1C]">★</span> ESTABLISHED SINCE 2021</span>
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

      {/* 3. Products Showcase & Packaging Guide */}
      <Products 
        products={products}
        onSelectProductForQuote={onSelectProductForQuote} 
      />

      {/* 4. Batch Mix Design Calculator Preview */}
      <Calculator 
        onTransferToQuote={onTransferToQuote} 
      />

      {/* 5. Landmark Infrastructure Projects Preview */}
      <Projects />

      {/* 6. Flagship Greenfield Grinding Plant (Kpone Industrial Area) */}
      <PlantLocator 
        plants={plants}
        onSelectPlantForQuote={onSelectPlantForQuote}
      />

      {/* 7. Territory Sales Representatives & GPS Finder */}
      <SalesRepLocator 
        salesReps={salesReps}
        onContactRep={onContactRep} 
      />

      {/* 8. Decarbonization & Sustainability Roadmap */}
      <Sustainability />

      {/* 9. Corporate Action Strip to Multi-Page Portals */}
      <section className="bg-neutral-900 text-white py-14 border-t border-neutral-800 reveal-init">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            <div className="p-6 bg-neutral-800/60 rounded-lg border border-neutral-700/60 hover:border-[#B91C1C]/60 transition-colors reveal-card">
              <h3 className="text-lg font-serif font-bold text-white mb-2">About Star Cement</h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Learn more about our heritage, executive governance, state-of-the-art Tema laboratory, and ISO quality accreditations.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B91C1C] hover:text-red-400 transition-colors"
              >
                <span>Read Company Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 bg-neutral-800/60 rounded-lg border border-neutral-700/60 hover:border-[#B91C1C]/60 transition-colors reveal-card">
              <h3 className="text-lg font-serif font-bold text-white mb-2">Technical Specifications</h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Explore in-depth mechanical and chemical datasheets for 42.5R Rapid Hardening and 32.5R General Purpose formulations.
              </p>
              <Link 
                to="/products" 
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B91C1C] hover:text-red-400 transition-colors"
              >
                <span>View Certified Formulations</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 bg-neutral-800/60 rounded-lg border border-neutral-700/60 hover:border-[#B91C1C]/60 transition-colors reveal-card">
              <h3 className="text-lg font-serif font-bold text-white mb-2">Direct Commercial Dispatch</h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Contact our central Tema dispatch desk or connect with our regional commercial officers for institutional supply contracts.
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
