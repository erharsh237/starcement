import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Cpu, 
  Layers, 
  Package, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Factory,
  BarChart3,
  MapPin
} from 'lucide-react';

export default function CompanyProfileSection({ onOpenDealers }) {
  const facilityHighlights = [
    {
      title: '750,000 MT Annual Capacity',
      desc: 'High-volume grinding complex operating in the Kpone Industrial Area, guaranteeing steady nationwide supply for residential, commercial, and national infrastructure projects.',
      icon: Factory,
      metric: '750k MT',
      sub: 'Annual Throughput'
    },
    {
      title: '75 TPH Closed-Circuit Mill',
      desc: 'Equipped with dynamic high-efficiency air separators, optimizing fine grinding kinetics, particle size distribution, and energy consumption per ton of cement produced.',
      icon: Cpu,
      metric: '75 TPH',
      sub: 'Milling Capacity'
    },
    {
      title: 'Monolithic Slip-Form Silos',
      desc: 'Vertical slip-form casting reinforced concrete storage battery. Seamless cylindrical architecture protects cement from coastal maritime moisture and ensures active aeration discharge.',
      icon: Layers,
      metric: '100% Sealed',
      sub: 'Monolithic Shells'
    },
    {
      title: 'Automated Rotor Packing & Bulk',
      desc: 'High-speed rotary packaging system with electronic load-cell checkweighers, ultrasonic seal verification, and dual pressurized bulk tanker loading chutes.',
      icon: Package,
      metric: '120 TPH',
      sub: 'Automated Bagging'
    },
    {
      title: 'PLC & SCADA Process Control',
      desc: 'Centralized digital command center continuously monitoring material flow, motor loads, temperature dynamics, and loss-in-weight feeders in real time.',
      icon: BarChart3,
      metric: '24/7 Digital',
      sub: 'Process Telemetry'
    },
    {
      title: 'Certified IMS Conformance',
      desc: 'Integrated Management System fully conforming to ISO 9001:2015 (Quality), ISO 14001:2015 (Environment), ISO 45001:2018 (Safety), and statutory GS 1118:2024.',
      icon: ShieldCheck,
      metric: 'GS 1118:2024',
      sub: 'Statutory Standard'
    }
  ];

  const pillars = [
    {
      number: '01',
      title: 'Operational Precision',
      desc: 'Closed-circuit milling with micro-dosing weighfeeders, continuous laser particle analysis, and high-efficiency dynamic air classification.'
    },
    {
      number: '02',
      title: 'Statutory Quality Assurance',
      desc: 'Round-the-clock materials testing laboratory conducting automated XRF spectrometry, Blaine fineness audits, and independent 28-day break tests.'
    },
    {
      number: '03',
      title: 'Builder & Dealer Partnership',
      desc: 'Committed to empowering Ghanaian contractors and masons with dependable on-time delivery, fair commercial pricing, and technical on-site support.'
    },
    {
      number: '04',
      title: 'Sustainable Industrialization',
      desc: 'Low-carbon limestone cement formulation, reverse pulse-jet dust filtration (< 10 mg/Nm³), and waste heat recovery integration.'
    }
  ];

  return (
    <section id="company-profile" className="py-20 sm:py-24 bg-white border-b border-neutral-200 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 reveal-init">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#B91C1C]">
              Company Profile
            </span>
            <span className="text-neutral-400 text-xs">•</span>
            <span className="text-neutral-500 font-mono text-xs">
              Industrial Manufacturing Excellence
            </span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight leading-tight">
            Star Cement Group of companies Africa
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-4 leading-relaxed font-normal">
            Star Cement Group of companies Africa is an industrial cement manufacturing enterprise operating a state-of-the-art <strong>750,000 MT/year</strong> greenfield grinding facility strategically located at <strong>Plot AGR/IND/Y/5, A&B, Kpone Industrial Area</strong>, in the Greater Accra Region of Ghana.
          </p>
        </div>

        {/* Executive Overview Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F7F6F3] rounded-2xl p-8 sm:p-12 border border-neutral-200 mb-16">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B91C1C] block">
              Manufacturing Infrastructure & Corporate Mandate
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-950 leading-tight">
              Engineered for Strength, Reliability & Affordability
            </h3>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
              The group was established with an unyielding mandate to manufacture premium hydraulic cement that combines exceptional compressive performance, flawless consistency, and competitive pricing for Ghana and the wider African sub-region.
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Equipped with a high-efficiency 75 TPH closed-circuit ball mill, vertical slip-form casting storage silos, and automated Haver & Boecker rotary packers, our facility sets the regional benchmark for clean, computerized cement grinding and rapid bulk delivery.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#B91C1C] hover:bg-[#991B1B] text-white text-xs font-bold uppercase tracking-wider rounded-sm shadow-sm hover:shadow transition-all"
              >
                <span>Read Full Company Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                type="button"
                onClick={onOpenDealers}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-300 text-xs font-bold uppercase tracking-wider rounded-sm shadow-xs transition-all cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-[#B91C1C]" />
                <span>Find Authorized Dealer</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-neutral-300/80 group">
              <img
                src="/images/plant/plant-aerial-overview.jpg"
                alt="Star Cement Group of companies Africa Greenfield Plant Kpone"
                className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest bg-[#B91C1C] px-2.5 py-1 rounded-xs font-bold">
                  Kpone Industrial Area • Greater Accra
                </span>
                <h4 className="text-base font-bold mt-2">Flagship Grinding & Silo Terminal</h4>
                <p className="text-xs text-neutral-300 font-mono mt-0.5">Plot AGR/IND/Y/5, A&B</p>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Key Facility Benchmarks Grid */}
        <div className="mb-20">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B91C1C]">
              Technical Benchmarks
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-950 mt-1">
              State-of-the-Art Production Facility
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilityHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 bg-white rounded-xl border border-neutral-200 shadow-xs hover:border-[#B91C1C]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-red-50 text-[#B91C1C] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="text-right">
                        <span className="font-mono text-sm font-bold text-neutral-900 block">{item.metric}</span>
                        <span className="text-[10px] font-mono text-neutral-400 uppercase">{item.sub}</span>
                      </div>
                    </div>
                    <h4 className="text-base font-bold text-neutral-950 mb-2 font-serif">
                      {item.title}
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4 Core Pillars Section */}
        <div className="bg-[#11161B] rounded-2xl p-8 sm:p-14 text-white">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B91C1C]">
              Corporate Governance
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1.5">
              The 4 Strategic Pillars of Star Cement
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
              Every metric ton of cement dispatched from our Kpone plant embodies our four institutional commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, pIdx) => (
              <div
                key={pIdx}
                className="p-6 bg-[#161C22] rounded-xl border border-neutral-800 hover:border-[#B91C1C]/60 transition-colors"
              >
                <span className="font-mono text-3xl font-black text-[#B91C1C] block mb-3">
                  {pillar.number}
                </span>
                <h4 className="text-base font-bold text-white mb-2 font-serif">
                  {pillar.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
              <CheckCircle2 className="w-4 h-4 text-[#B91C1C]" />
              <span>Conforming to GS 1118:2024 & ISO 9001 / 14001 / 45001 Standards</span>
            </div>
            <Link
              to="/about/accreditations"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#B91C1C] hover:text-red-400 transition-colors"
            >
              <span>View Accreditations & Permits</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
