import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Building2, 
  ShieldCheck, 
  Leaf, 
  Users, 
  Award, 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2, 
  Compass,
  Cpu,
  Layers,
  HeartHandshake
} from 'lucide-react';

export default function VisionMissionPage({ onOpenQuote }) {
  const coreValues = [
    {
      title: 'Quality',
      tagline: 'Strict GS 1118:2024 Conformance',
      desc: 'All products are manufactured in strict compliance with GS 1118:2024, ensuring consistency, durability, and long-term performance for end users. Advanced separators and high-capacity storage silos achieve precise particle size distribution across every batch.',
      icon: ShieldCheck,
    },
    {
      title: 'Reliability',
      tagline: 'PLC & SCADA Automated Control',
      desc: 'Supported by a fully automated PLC- and SCADA-based digital control system enabling real-time monitoring, centralized process control, data-driven optimization, predictive maintenance, and an automated rotor packer with real-time weight control.',
      icon: Cpu,
    },
    {
      title: 'Affordability',
      tagline: 'Energy-Efficient Value Delivery',
      desc: 'Engineered to optimize energy efficiency, reduce operational waste, and lower production costs—delivering cement products that combine maximum structural strength with dependable market affordability for projects of any scale.',
      icon: Building2,
    },
    {
      title: 'Nation-Building',
      tagline: 'Ghana’s Development Agenda',
      desc: 'Committed to responsible corporate citizenship, supporting local employment, skills development, and stakeholder engagement within host communities, while empowering artisanal masons, contractors, and infrastructure developers across Ghana.',
      icon: HeartHandshake,
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
            <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#B91C1C] font-bold">Vision, Mission & Creed</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-xs bg-[#B91C1C] text-white text-[10px] font-mono uppercase font-bold tracking-widest">
                Corporate Governance & Creed
              </span>
              <span className="text-neutral-400 text-xs">•</span>
              <span className="text-neutral-300 text-xs font-mono">
                Kpone Industrial Area • Greater Accra
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
              Vision, Mission & Institutional Creed
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              Our guiding principles: delivering high-quality cement products combining strength, reliability, and affordability, while supporting Ghana’s development and nation-building agenda in a responsible and sustainable manner.
            </p>
          </div>

        </div>

        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-center">
          <Compass className="w-96 h-96 text-white" />
        </div>
      </section>

      {/* 2. Primary Vision & Mission Statements */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* The Corporate Vision */}
            <div className="p-8 sm:p-12 rounded-2xl bg-[#F8F9FA] border border-neutral-200/90 flex flex-col justify-between relative overflow-hidden group hover:border-[#B91C1C]/40 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#B91C1C]"></div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#B91C1C] flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#B91C1C] block mb-2">
                  Our Clear Vision
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-950 mb-4 leading-tight">
                  The Corporate Vision
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  "To deliver high-quality cement products that combine strength, reliability, and affordability, while supporting Ghana’s development and nation-building agenda in a responsible and sustainable manner."
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-neutral-200 text-xs font-mono text-neutral-500">
                Mandate: Strength • Reliability • Affordability • Sustainable Development
              </div>
            </div>

            {/* The Corporate Mission */}
            <div className="p-8 sm:p-12 rounded-2xl bg-[#F8F9FA] border border-neutral-200/90 flex flex-col justify-between relative overflow-hidden group hover:border-neutral-400 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-neutral-900"></div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-neutral-100 text-neutral-900 flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-600 block mb-2">
                  Operational Mission
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-950 mb-4 leading-tight">
                  The Corporate Mission
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  "Serving customers across Ghana and the wider West African sub-region, Star Cement works closely with artisanal masons, contractors, developers, and major infrastructure projects. Guided by our core values, we are committed to being recognized as a leading cement brand that delivers superior value while contributing positively to sustainable development across the region."
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-neutral-200 text-xs font-mono text-neutral-500">
                Target: Artisanal Masons • Civil Contractors • Commercial Developers • Infrastructure
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-20 bg-[#F7F6F3] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B91C1C]">
              Institutional Tenets
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mt-2">
              Our Four Core Values
            </h2>
            <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
              Every process in our 750,000 MT/year facility—from raw material intake to rotor packing and job-site dispatch—is anchored in these fundamental values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-red-50 text-[#B91C1C] flex items-center justify-center mb-4">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-[#B91C1C] font-semibold uppercase tracking-wider block mb-1">
                      {val.tagline}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-neutral-900 mb-2.5">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Environmental Stewardship & IMS Strip */}
          <div className="bg-white rounded-2xl border border-neutral-200/90 p-8 sm:p-12 shadow-xs">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B91C1C] block mb-2">
                Integrated Management System
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
                Environmental Stewardship & Operational Health
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                Star Cement's operations are guided by a strong Integrated Management System that embeds quality, environmental protection, occupational health and safety, and regulatory compliance into daily operations.
              </p>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                In line with environmental stewardship principles, the plant incorporates advanced dust collection and emissions control technologies, including high-efficiency bag filters at critical transfer points, enclosed conveying systems, and effective dust suppression measures. Energy-efficient equipment, optimised grinding processes, and continuous environmental monitoring contribute to reduced energy consumption, lower emissions intensity, and compliance with applicable environmental and occupational health regulations.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Commercial Action Banner */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-900 rounded-2xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl text-center md:text-left">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-2">
                Factory Direct Dispatch
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                Experience Certified Star Cement Performance
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed font-normal">
                Discover how our commitment to strength, reliability, and affordability supports your project's structural success across Ghana.
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
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
