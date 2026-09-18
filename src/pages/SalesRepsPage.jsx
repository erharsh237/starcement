import React from 'react';
import { Link } from 'react-router-dom';
import SalesRepLocator from '../components/SalesRepLocator';
import { ChevronRight, MapPin, Phone, MessageSquare, ShieldCheck, Users } from 'lucide-react';

export default function SalesRepsPage({ salesReps, onContactRep }) {
  return (
    <div className="bg-[#F7F6F3] min-h-screen">
      {/* 1. Page Header & Breadcrumbs */}
      <section className="bg-neutral-900 text-white pt-12 pb-16 relative overflow-hidden border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#B91C1C] font-bold">Sales Representatives</span>
          </nav>

          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-3">
              Territory Directorate & Field Commercial Officers
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
              Connect with your dedicated regional commercial officer.
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              Whether procuring bulk pneumatic tankers for major high-rise projects or managing retail distribution fleets, our territory officers provide direct pricing, logistics coordination, and concrete mix technical support.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Core Interactive Sales Rep Locator Component */}
      <SalesRepLocator 
        salesReps={salesReps}
        onContactRep={onContactRep} 
      />

      {/* 3. Commercial Support Strip */}
      <section className="py-14 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-red-50 text-[#B91C1C] rounded-lg">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-900 mb-1">On-Site Technical Visits</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Our regional technical representatives conduct job site inspections, trial mix batched testing, and slump audits with your engineering team.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-red-50 text-[#B91C1C] rounded-lg">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-900 mb-1">Credit & Commercial Accounts</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Qualified contractors and certified block manufacturers can establish formal 30-day revolving credit facilities with dedicated account managers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-red-50 text-[#B91C1C] rounded-lg">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-900 mb-1">Central Dispatch Escalation</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Urgent high-volume orders can also be scheduled directly through our Tema central dispatch desk at +233 30 320 4588 / +233 24 431 2000.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
