import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  FlaskConical, 
  Users, 
  Target, 
  CheckCircle2, 
  Building2, 
  FileText, 
  ArrowRight,
  ChevronRight,
  Cpu,
  Leaf,
  Clock,
  Zap,
  Layers,
  HeartHandshake
} from 'lucide-react';

export default function AboutPage({ onOpenQuote }) {
  const qualityStandards = [
    {
      title: 'GS 1118:2024 Statutory Conformance',
      desc: 'All Star Cement products are manufactured in strict compliance with GS 1118:2024, ensuring consistency, high durability, and long-term performance for end users.',
      icon: ShieldCheck
    },
    {
      title: 'Integrated Management System',
      desc: 'Our operations embed quality, environmental protection, occupational health and safety, and regulatory compliance into daily factory routines.',
      icon: Award
    },
    {
      title: 'PLC & SCADA Digital Process Automation',
      desc: 'Centralized computer control enables real-time monitoring, data-driven optimization, and early detection of process deviations across the entire plant.',
      icon: Cpu
    },
    {
      title: 'Environmental Stewardship',
      desc: 'Incorporates advanced dust collection, high-efficiency bag filters at transfer points, and enclosed conveying systems to minimize emissions.',
      icon: Leaf
    }
  ];

  const coreValues = [
    {
      name: 'Quality',
      desc: 'Delivering high-strength Portland Limestone Cement with precise particle size distribution and unwavering consistency across all batches.'
    },
    {
      name: 'Reliability',
      desc: 'Automated 75 TPH closed-circuit milling, high-capacity storage silos, and automated rotor packing ensuring dependable, on-time job-site supply.'
    },
    {
      name: 'Affordability',
      desc: 'Optimizing energy efficiency and reducing operational waste to combine maximum structural performance with accessible market pricing.'
    },
    {
      name: 'Nation-Building',
      desc: 'Supporting Ghana’s development agenda, local employment, and skills development while building infrastructure across Ghana and West Africa.'
    }
  ];

  return (
    <div className="bg-[#F7F6F3] min-h-screen text-left">
      
      {/* 1. Page Breadcrumbs & Header Hero */}
      <section className="bg-neutral-900 text-white pt-12 pb-16 relative overflow-hidden border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <nav className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#B91C1C] font-bold">About Us</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-xs bg-[#B91C1C] text-white text-[10px] font-mono uppercase font-bold tracking-widest">
                Corporate Profile • Since 2021
              </span>
              <span className="text-neutral-400 text-xs">•</span>
              <span className="text-neutral-300 text-xs font-mono">
                Plot: AGR/IND/Y/5, A&B, Kpone Industrial Area
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
              Building Ghana’s future with strength, reliability & affordability.
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              Star Cement Ltd. is a privately owned cement manufacturing company established in 2021, operating a modern 750,000 MT annual capacity facility in the Kpone Industrial Area, Greater Accra Region of Ghana.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-neutral-800 max-w-4xl text-xs font-mono">
            <div>
              <span className="text-neutral-400 block text-[11px]">Installed Annual Capacity</span>
              <span className="text-white font-serif text-2xl font-bold">750,000 MT</span>
            </div>
            <div>
              <span className="text-neutral-400 block text-[11px]">Grinding Mill Rate</span>
              <span className="text-white font-serif text-2xl font-bold">75 TPH Closed-Circuit</span>
            </div>
            <div>
              <span className="text-neutral-400 block text-[11px]">Process Automation</span>
              <span className="text-emerald-400 font-serif text-2xl font-bold">PLC & SCADA</span>
            </div>
            <div>
              <span className="text-neutral-400 block text-[11px]">Statutory Conformance</span>
              <span className="text-white font-serif text-2xl font-bold">GS 1118:2024</span>
            </div>
          </div>

        </div>

        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-center">
          <Building2 className="w-96 h-96 text-white" />
        </div>
      </section>

      {/* 2. Official Brand Narrative & Infrastructure Overview */}
      <section id="overview" className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B91C1C]">
                Our Foundation & Vision
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 leading-tight">
                Star Cement Ltd. — Supporting Ghana’s Nation-Building Agenda
              </h2>
              
              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                Star Cement Ltd. is a privately owned cement manufacturing company established in 2021 and strategically located at <strong>AGR/IND/Y/5, Kpone Industrial Area, Kpone</strong>, in the Greater Accra Region of Ghana. The company was founded with a clear vision to deliver high-quality cement products that combine <strong>strength, reliability, and affordability</strong>, while supporting Ghana’s development and nation-building agenda in a responsible and sustainable manner.
              </p>
              
              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                Star Cement operates a modern cement grinding facility with an installed annual production capacity of <strong>750,000 metric tonnes</strong>. The plant is equipped with state-of-the-art production technology, including a <strong>75 TPH high-efficiency closed-circuit grinding mill</strong>, advanced separators, and high-capacity storage silos. These systems are designed to optimize energy efficiency, reduce operational waste, and achieve precise particle size distribution, ensuring consistent cement performance across all product grades.
              </p>

              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                The facility is supported by a <strong>fully automated PLC- and SCADA-based digital control system</strong>, enabling real-time monitoring, centralized process control, data-driven optimization, and early detection of process deviations. This digital architecture enhances operational efficiency, improves plant reliability, supports predictive maintenance, and contributes to responsible resource utilization.
              </p>

              <div className="pt-2 flex flex-wrap gap-2.5">
                <div className="px-3 py-1.5 bg-neutral-100 rounded text-xs font-mono font-bold text-neutral-800">
                  Established 2021
                </div>
                <div className="px-3 py-1.5 bg-neutral-100 rounded text-xs font-mono font-bold text-neutral-800">
                  750,000 MT Installed Capacity
                </div>
                <div className="px-3 py-1.5 bg-neutral-100 rounded text-xs font-mono font-bold text-neutral-800">
                  75 TPH Grinding Mill
                </div>
                <div className="px-3 py-1.5 bg-neutral-100 rounded text-xs font-mono font-bold text-neutral-800">
                  Automated Rotor Packer
                </div>
                <div className="px-3 py-1.5 bg-neutral-100 rounded text-xs font-mono font-bold text-neutral-800">
                  GS 1118:2024
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200 group">
                <img 
                  src="/images/plant/plant-aerial-overview.jpg" 
                  alt="Star Cement Ghana Plant Kpone Industrial Area" 
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-wider bg-[#B91C1C] px-2.5 py-0.5 rounded font-bold">
                    Kpone Industrial Area
                  </span>
                  <h3 className="text-lg font-bold mt-2">Star Cement Ghana Plant</h3>
                  <p className="text-xs text-neutral-300 mt-1">
                    Plot AGR/IND/Y/5, A&B • 750,000 MT/year grinding facility & slip-form silo complex
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Advanced Packaging, Automation & Environmental Stewardship */}
      <section className="py-16 bg-[#F8F9FA] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B91C1C]">
              Operational Excellence
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 mt-1">
              Precision Dispatch & Environmental Responsibility
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2">
              Every stage of our grinding, packaging, and dispatch operations is engineered to safeguard product integrity and minimize environmental impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            {/* Packaging & Dispatch Card */}
            <div className="bg-white p-8 rounded-2xl border border-neutral-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#B91C1C] flex items-center justify-center mb-5">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono text-[#B91C1C] uppercase font-bold tracking-wider block mb-1">
                  Automated Packing Accuracy
                </span>
                <h3 className="font-serif text-xl font-bold text-neutral-900 mb-3">
                  Rotor Packer & Bulk Loading Systems
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Star Cement operates an automated rotor packer and bulk loading system with high packing accuracy, minimal spillage, and real-time weight control. Integrated material handling, automation, and quality monitoring systems ensure efficient dispatch operations while promoting workplace safety, product integrity, and reduced material losses.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-neutral-100 flex items-center gap-2 text-xs font-mono text-neutral-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Real-Time Electronic Weight Verification</span>
              </div>
            </div>

            {/* Environmental Stewardship Card */}
            <div className="bg-white p-8 rounded-2xl border border-neutral-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#B91C1C] flex items-center justify-center mb-5">
                  <Leaf className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono text-[#B91C1C] uppercase font-bold tracking-wider block mb-1">
                  Environmental Protection
                </span>
                <h3 className="font-serif text-xl font-bold text-neutral-900 mb-3">
                  Advanced Dust Collection & Emissions Control
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  In line with environmental stewardship principles, the plant incorporates advanced dust collection and emissions control technologies, including high-efficiency bag filters at critical transfer points, enclosed conveying systems, and effective dust suppression measures. Energy-efficient equipment, optimised grinding processes, and continuous environmental monitoring contribute to reduced energy consumption, lower emissions intensity, and compliance with applicable regulations.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-neutral-100 flex items-center gap-2 text-xs font-mono text-neutral-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Enclosed Conveyance & Baghouse Filters</span>
              </div>
            </div>

          </div>

          {/* Standards & Management Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityStandards.map((std, idx) => {
              const Icon = std.icon;
              return (
                <div key={idx} className="p-6 bg-white rounded-xl border border-neutral-200">
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-[#B91C1C] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-neutral-900 text-sm mb-1.5">{std.title}</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">{std.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Core Values & Sub-Regional Commitment */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B91C1C]">
                Corporate Citizenship & Creed
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 leading-tight">
                Our Core Values: Guided by Nation-Building
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Beyond operations, Star Cement is committed to responsible corporate citizenship, supporting local employment, skills development, and stakeholder engagement within host communities. Through ethical business practices, transparent governance, and a focus on long-term value creation, the company seeks to balance economic performance with social responsibility and environmental sustainability.
              </p>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Serving customers across Ghana and the wider West African sub-region, Star Cement works closely with artisanal masons, contractors, developers, and major infrastructure projects. Guided by our core values of <strong>quality, reliability, affordability, and nation-building</strong>, we are committed to being recognized as a leading cement brand that delivers superior value while contributing positively to sustainable development across the region.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coreValues.map((val, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-neutral-50 border border-neutral-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-[#B91C1C]"></span>
                      <h4 className="font-serif text-lg font-bold text-neutral-900">{val.name}</h4>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 5. Call to Action Banner */}
      <section className="py-16 bg-[#F7F6F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-900 rounded-2xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl text-center md:text-left">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-2">
                Commercial Partnerships
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                Partner with Star Cement Ltd.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed font-normal">
                Connect with our commercial dispatch desk at Plot AGR/IND/Y/5, A&B, Kpone Industrial Area for 50kg bag delivery or bulk pneumatic tanker dispatch across Ghana.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onOpenQuote?.()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#B91C1C] hover:bg-red-800 text-white rounded-lg text-xs font-mono uppercase tracking-wider font-semibold transition-colors cursor-pointer"
              >
                <span>Request Commercial Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg text-xs font-mono uppercase tracking-wider font-semibold transition-colors"
              >
                <span>Contact Details</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
