import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Clock, 
  Truck, 
  Ship, 
  ShieldCheck, 
  Layers, 
  ChevronRight, 
  ArrowRight,
  Gauge,
  Cpu,
  CheckCircle2,
  HardHat
} from 'lucide-react';
import { plants } from '../../data/plants';
import PlantFlowExplorer from '../../components/PlantFlowExplorer';

export default function TemaTerminalPage({ onOpenQuote }) {
  const terminal = plants[0]; // tema-grinding-terminal

  const technicalSpecs = [
    { label: 'Annual Grinding Throughput', val: '750,000 Metric Tons / Year' },
    { label: 'Raw Materials & Cement Silos', val: 'Vertical Slip-Form Casting Concrete Storage Silos' },
    { label: 'Grinding Technology', val: '75 TPH High-Efficiency Closed-Circuit Mill with Advanced Separators' },
    { label: 'Packing & Loading System', val: 'Automated Rotor Packer & Bulk Loading with Real-Time Weight Control' },
    { label: 'Process Control Architecture', val: 'Integrated PLC- & SCADA-Based Central Digital Automation' },
    { label: 'Weighbridge Infrastructure', val: 'Dual Dynamic Load-Cell Electronic Weighbridges' },
    { label: 'Environmental Controls', val: 'Closed-circuit pulse-jet baghouse filtration (< 10 mg/Nm³ dust emissions)' },
    { label: 'Standards & Compliance', val: 'GS 1118:2024 Compliant • IMS (ISO 9001, 14001, 45001) Certified' },
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
            <span className="text-[#B91C1C] font-bold">Star Cement Ghana Plant</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#B91C1C] text-white px-3 py-1 text-xs font-mono font-bold uppercase tracking-widest rounded-xs">
                  Flagship Manufacturing Hub
                </span>
                <span className="bg-neutral-800 text-neutral-300 px-3 py-1 text-xs font-mono uppercase tracking-wider border border-neutral-700">
                  24/7 Non-Stop Operations
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
                Star Cement Ghana Greenfield Grinding Plant
              </h1>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl font-normal mb-6">
                Star Cement Group of Companies Africa operates a state-of-the-art 750,000 MT/year cement manufacturing facility powered by a 75 TPH closed-circuit mill and PLC/SCADA digital control in the Kpone Industrial Area, Greater Accra.
              </p>

              <div className="flex flex-wrap gap-4 text-xs font-mono text-neutral-300">
                <span className="flex items-center gap-1.5 bg-neutral-800/80 px-3 py-1.5 rounded-xs border border-neutral-700">
                  <MapPin className="w-3.5 h-3.5 text-[#B91C1C]" />
                  Plot: AGR/IND/Y/5, A&B, Kpone Industrial Area - Greater Accra
                </span>
                <span className="flex items-center gap-1.5 bg-neutral-800/80 px-3 py-1.5 rounded-xs border border-neutral-700">
                  <Phone className="w-3.5 h-3.5 text-[#B91C1C]" />
                  0531028877 / 0531005067
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-neutral-800/80 border border-neutral-700 rounded-sm p-6 text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-1">Total Plant Capacity</p>
              <p className="font-serif text-4xl sm:text-5xl font-black text-[#B91C1C] mb-1">750,000 MT</p>
              <p className="text-xs text-neutral-400 font-mono mb-6">Annual Finished Cement Production</p>

              <button
                onClick={onOpenQuote}
                className="w-full bg-[#B91C1C] hover:bg-[#991B1B] text-white py-3 rounded-xs font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-md"
              >
                Schedule Factory Bulk Pickup
              </button>
            </div>
          </div>

        </div>

        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-center">
          <Building2 className="w-96 h-96 text-white" />
        </div>
      </section>

      {/* 2. Key Operational Metrics Bar */}
      <section className="bg-white border-b border-neutral-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="font-serif text-3xl font-bold text-neutral-900">40,000 MT</p>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider mt-1">Raw Material Silos</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-neutral-900">480 t/h</p>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider mt-1">Rotary Packing Rate</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-neutral-900">3 Bays</p>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider mt-1">Bulk Pneumatic Discharge</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-[#B91C1C]">&lt; 35 mins</p>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider mt-1">Truck Turnaround Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Deep Engineering Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-2">
                  Port Integration & Supply Chain
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
                  Direct Deepwater Marine Vessel Offloading
                </h2>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4">
                  Star Cement Group of Companies Africa operates a dedicated deepwater concession at Port of Tema Berth 2. Supramax and Ultramax bulk carriers carrying up to 60,000 metric tons of raw materials are discharged via high-capacity mechanical ship unloaders directly onto a 2.4-kilometer enclosed overland pipe conveyor.
                </p>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  This state-of-the-art logistics corridor completely bypasses municipal road networks, eliminating over 150 daily truck trips through harbor roads, minimizing ambient fugitive dust, and guaranteeing zero weather-related demurrage delays during seasonal monsoons.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="bg-white p-4 rounded-xs border border-neutral-200">
                  <span className="text-[#B91C1C] font-bold block text-sm mb-1">Enclosed Storage Dome</span>
                  <span className="text-neutral-600">65,000 MT covered geodesic dome with automated dust suppression foggers.</span>
                </div>
                <div className="bg-white p-4 rounded-xs border border-neutral-200">
                  <span className="text-[#B91C1C] font-bold block text-sm mb-1">VRM Grinding Mills</span>
                  <span className="text-neutral-600">Vertical Roller Mills (VRM) consuming 30% less electrical power than older ball mills.</span>
                </div>
              </div>

              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-2">
                  Technical Specifications
                </span>
                <h3 className="font-serif text-xl font-bold text-neutral-900 mb-4">
                  Terminal Operational Parameters
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

            {/* Terminal Logistics Dispatch Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-neutral-900 text-white p-6 sm:p-8 rounded-sm border border-neutral-800">
                <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-2">
                  Contractor Haulage Protocol
                </span>
                <h3 className="font-serif text-xl font-bold mb-4">
                  Automated Truck Dispatch Protocol
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed mb-6">
                  Third-party haulage trucks and direct contractor flatbeds experience seamless gate-to-gate processing through our computerized logistics queue:
                </p>

                <ol className="space-y-4 text-xs font-mono">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-xs bg-neutral-800 text-[#B91C1C] font-bold flex items-center justify-center shrink-0 border border-neutral-700">
                      1
                    </span>
                    <div>
                      <span className="font-bold text-white block">RFID Inbound Check-In</span>
                      <span className="text-neutral-400 text-[11px]">Digital bill of lading scanned at Gate 1 weighbridge (Tare weight logged).</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-xs bg-neutral-800 text-[#B91C1C] font-bold flex items-center justify-center shrink-0 border border-neutral-700">
                      2
                    </span>
                    <div>
                      <span className="font-bold text-white block">Automated Pallet Loading</span>
                      <span className="text-neutral-400 text-[11px]">Robotic gantry cranes load 40-bag wrapped pallets (up to 600 bags in 18 minutes).</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-xs bg-neutral-800 text-[#B91C1C] font-bold flex items-center justify-center shrink-0 border border-neutral-700">
                      3
                    </span>
                    <div>
                      <span className="font-bold text-white block">Outbound Weighbridge & Clearance</span>
                      <span className="text-neutral-400 text-[11px]">Gross weight re-weighed, stamped mill quality certificate issued at exit gate.</span>
                    </div>
                  </li>
                </ol>

                <div className="mt-8 pt-6 border-t border-neutral-800">
                  <a
                    href="tel:0531028877"
                    className="w-full bg-neutral-800 hover:bg-neutral-700 text-white py-3 rounded-xs font-mono text-xs uppercase tracking-wider font-bold transition-all text-center block"
                  >
                    Call Plant Dispatch (0531028877 / 0531005067)
                  </a>
                </div>
              </div>

              <div className="bg-white border border-neutral-200 p-6 rounded-sm">
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-bold block mb-2">
                  Plant Laboratory
                </span>
                <h4 className="font-serif text-lg font-bold text-neutral-900 mb-2">
                  On-Site Quality Assurance Center
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  The Tema Terminal houses our primary GSA-licensed materials lab. Every shift receives 2-day and 28-day hydraulic compression tests on ToniTechnik automated presses.
                </p>
                <Link
                  to="/about/laboratory"
                  className="text-xs font-mono font-bold text-[#B91C1C] hover:underline inline-flex items-center gap-1"
                >
                  Learn more about Central Laboratory →
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3B. Vessel-to-Weighbridge Engineering Process Flow Explorer */}
      <section className="py-8 bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PlantFlowExplorer />
        </div>
      </section>

      {/* 4. Inter-navigation */}
      <section className="py-8 bg-[#F7F6F3] border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link 
              to="/plants" 
              className="inline-flex items-center gap-2 text-neutral-700 hover:text-[#B91C1C] font-mono text-xs uppercase tracking-wider font-bold transition-colors"
            >
              ← Back to All Terminals Overview
            </Link>
            <Link 
              to="/plants/kumasi-depot" 
              className="inline-flex items-center gap-2 text-neutral-700 hover:text-[#B91C1C] font-mono text-xs uppercase tracking-wider font-bold transition-colors"
            >
              Explore Kumasi Central Depot →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
