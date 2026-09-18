import React from 'react';
import { Link } from 'react-router-dom';
import Projects from '../components/Projects';
import { ChevronRight, Building2, HardHat, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ProjectsPage({ onOpenQuote }) {
  return (
    <div className="bg-[#F7F6F3] min-h-screen">
      {/* 1. Page Header & Breadcrumbs */}
      <section className="bg-neutral-900 text-white pt-12 pb-16 relative overflow-hidden border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#B91C1C] font-bold">Infrastructure Projects</span>
          </nav>

          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-3">
              National Engineering Landmark Portfolio
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
              Structures that stand the test of generations.
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              Explore how Star Cement’s high early-strength 42.5R and durable 32.5R Portland Limestone Cements power deepwater marine container yards, iconic financial high-rises, and master precast facilities across Ghana.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Core Projects Showcase Component with Sector Filters & Modal */}
      <Projects />

      {/* 3. Contractor Partnership Strip */}
      <section className="py-14 bg-neutral-900 text-white text-center border-t border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
            Are you planning a major commercial or civil infrastructure project?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto mb-6">
            Our technical engineering services team provides tailored mix designs, mass concrete thermal analysis, and dedicated bulk logistics contracts.
          </p>
          <button
            type="button"
            onClick={onOpenQuote}
            className="px-6 py-3 bg-[#B91C1C] hover:bg-[#991B1B] text-white text-xs font-bold uppercase tracking-wider rounded-sm shadow-md cursor-pointer transition-all"
          >
            Submit Tender / RFQ Specifications
          </button>
        </div>
      </section>
    </div>
  );
}
