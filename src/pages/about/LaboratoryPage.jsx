import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FlaskConical, 
  ShieldCheck, 
  Award, 
  Activity, 
  FileCheck2, 
  ChevronRight, 
  ArrowRight,
  Clock,
  CheckCircle2,
  Cpu,
  Layers
} from 'lucide-react';

export default function LaboratoryPage({ onOpenQuote }) {
  const testingStations = [
    {
      title: 'Automated XRF Clinker Spectrometry',
      standard: 'ISO 29581-2 • ASTM C114',
      interval: 'Every 2 Hours (24/7)',
      desc: 'Our energy-dispersive X-Ray Fluorescence spectrometer continuously maps elemental composition: Tricalcium Silicate (C₃S), Dicalcium Silicate (C₂S), Tricalcium Aluminate (C₃A), and Tetracalcium Aluminoferrite (C₄AF). Ensures rapid hardening strength without alkali-silica reactivity risks.',
      metrics: [
        { label: 'SO₃ Sulfate', val: '2.45% (≤ 3.5% Max)' },
        { label: 'Chloride Cl⁻', val: '0.035% (≤ 0.10% Max)' },
        { label: 'Loss on Ignition', val: '3.8% (≤ 5.0% Max)' }
      ]
    },
    {
      title: 'Blaine Air Permeability Fineness',
      standard: 'ASTM C204 • EN 196-6',
      interval: 'Every 1 Hour per Mill',
      desc: 'Specific surface area controls the hydration velocity and early compressive strength. Automated Blaine instruments verify Star Super 42.5R achieves high fineness for rapid formwork stripping, while Star Solid 32.5R is balanced for masonry workability.',
      metrics: [
        { label: '42.5R Fineness', val: '4,250 cm²/g' },
        { label: '32.5R Fineness', val: '3,800 cm²/g' },
        { label: 'Residue at 45µm', val: '≤ 6.5%' }
      ]
    },
    {
      title: 'Computerized Hydraulic Compression',
      standard: 'EN 196-1 • GS 1118-1:2024',
      interval: 'Daily 2-Day, 7-Day & 28-Day Curing',
      desc: 'Automated 3000 kN servo-hydraulic compression frames test 40×40×160mm prism mortars cured in temperature-controlled water baths (20°C ± 1°C). Generates certified stress-strain curves and digital batch certificates.',
      metrics: [
        { label: '42.5R at 2 Days', val: '≥ 24.5 MPa' },
        { label: '42.5R at 28 Days', val: '≥ 52.5 MPa' },
        { label: '32.5R at 28 Days', val: '≥ 38.5 MPa' }
      ]
    },
    {
      title: 'Vicat Setting & Soundness Expansion',
      standard: 'EN 196-3 • ISO 9597',
      interval: 'Batch Pre-Release Inspection',
      desc: 'Automatic Vicat needles measure initial setting time (preventing premature flash sets under Ghana’s ambient heat) and final set. Le Chatelier water baths measure autoclave soundness to guarantee zero destructive delayed expansion.',
      metrics: [
        { label: 'Initial Set Time', val: '135 – 165 Minutes' },
        { label: 'Final Set Time', val: '210 – 240 Minutes' },
        { label: 'Le Chatelier Exp.', val: '0.8 – 1.2 mm (≤ 10mm)' }
      ]
    }
  ];

  return (
    <div className="bg-[#F7F6F3] min-h-screen">
      
      {/* 1. Header & Breadcrumbs */}
      <section className="bg-neutral-900 text-white pt-12 pb-16 relative overflow-hidden border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <nav className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#B91C1C] font-bold">Quality Testing Laboratory</span>
          </nav>

          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-3">
              Tema Central Materials Testing Facility
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
              Continuous 24/7 Quality Control Laboratory
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              Located at our flagship Tema Marine Terminal, the Star Cement Central Materials Laboratory operates 24 hours a day with automated spectrometers and computerized compression crushers ensuring zero substandard bags depart our gates.
            </p>
          </div>

        </div>

        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-center">
          <FlaskConical className="w-96 h-96 text-white" />
        </div>
      </section>

      {/* 2. Key Operational Metrics Bar */}
      <section className="bg-white border-b border-neutral-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <span className="font-mono text-2xl sm:text-3xl font-black text-neutral-900">2 Hours</span>
              <span className="text-xs text-neutral-500 font-medium uppercase tracking-wider mt-1">XRF Sampling Frequency</span>
            </div>
            <div className="flex flex-col items-center border-l border-neutral-100">
              <span className="font-mono text-2xl sm:text-3xl font-black text-[#B91C1C]">3000 kN</span>
              <span className="text-xs text-neutral-500 font-medium uppercase tracking-wider mt-1">Hydraulic Press Capacity</span>
            </div>
            <div className="flex flex-col items-center border-l border-neutral-100">
              <span className="font-mono text-2xl sm:text-3xl font-black text-neutral-900">100%</span>
              <span className="text-xs text-neutral-500 font-medium uppercase tracking-wider mt-1">Batch Traceability</span>
            </div>
            <div className="flex flex-col items-center border-l border-neutral-100">
              <span className="font-mono text-2xl sm:text-3xl font-black text-emerald-600">GSA Certified</span>
              <span className="text-xs text-neutral-500 font-medium uppercase tracking-wider mt-1">GS 1118-1:2024 Audit</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Four Core Testing Stations */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B91C1C]">
              Scientific Testing Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mt-2">
              Advanced Analytical & Mechanical Instrumentation
            </h2>
            <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
              Every chemical compound, particle distribution fraction, and compressive strength curve is validated to international standards (EN 196, ASTM C150, GS 1118-1).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testingStations.map((station, idx) => (
              <div 
                key={idx}
                className="bg-[#F8F9FA] rounded-2xl border border-neutral-200/90 p-8 flex flex-col justify-between hover:border-[#B91C1C]/50 hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold uppercase text-[#B91C1C]">
                      {station.standard}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500 bg-white border border-neutral-200 px-2.5 py-0.5 rounded">
                      {station.interval}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-neutral-950 mb-3">
                    {station.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6 font-sans">
                    {station.desc}
                  </p>
                </div>

                {/* Technical Pillar Chips */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-neutral-200 text-center font-mono">
                  {station.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="bg-white p-2.5 rounded border border-neutral-200/80">
                      <span className="text-[9px] uppercase text-neutral-400 block font-bold truncate">{m.label}</span>
                      <strong className="text-xs font-bold text-neutral-900 block mt-0.5">{m.val}</strong>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. The 2-Hour Continuous Quality Control Workflow */}
      <section className="py-20 bg-[#F7F6F3] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B91C1C]">
              Continuous Verification Pipeline
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 mt-2">
              From Deepwater Vessel to Sealed Sack
            </h2>
            <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
              How raw imported clinker and high-purity Ghanaian limestone pass through four rigorous laboratory checkpoints before dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm relative">
              <span className="font-mono text-2xl font-black text-[#B91C1C]/20 absolute top-4 right-4">01</span>
              <div className="text-xs font-mono font-bold text-[#B91C1C] uppercase mb-1">Berth Discharge</div>
              <h3 className="text-sm font-bold text-neutral-900 mb-2">Vessel Clinker Assay</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Representative core grab samples taken directly from bulk vessel holds. Tested for free lime, alkali content, and moisture before transfer into 40,000 MT silos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm relative">
              <span className="font-mono text-2xl font-black text-[#B91C1C]/20 absolute top-4 right-4">02</span>
              <div className="text-xs font-mono font-bold text-[#B91C1C] uppercase mb-1">Mill Proportioning</div>
              <h3 className="text-sm font-bold text-neutral-900 mb-2">Continuous Limestone Blending</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Computerized weigh-feeders regulate clinker, gypsum, and high-calcium limestone ratios into finish ball mills with automated laser particle analysis.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm relative">
              <span className="font-mono text-2xl font-black text-[#B91C1C]/20 absolute top-4 right-4">03</span>
              <div className="text-xs font-mono font-bold text-[#B91C1C] uppercase mb-1">Finish Silo Transfer</div>
              <h3 className="text-sm font-bold text-neutral-900 mb-2">XRF & Blaine Verification</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Pneumatic sample autosamplers extract ground cement every 2 hours directly into the lab XRF analyzer to verify 42.5R and 32.5R chemical markers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm relative">
              <span className="font-mono text-2xl font-black text-[#B91C1C]/20 absolute top-4 right-4">04</span>
              <div className="text-xs font-mono font-bold text-[#B91C1C] uppercase mb-1">Rotary Packing</div>
              <h3 className="text-sm font-bold text-neutral-900 mb-2">Electronic Weight & Thermal Stamp</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Checkweighers ensure every 50kg sack is within legal tolerances, then applies thermal batch codes and GSA holograms before palletization.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Request Certificate of Analysis (COA) */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 rounded-xl bg-red-50 text-[#B91C1C] flex items-center justify-center mx-auto mb-4">
            <FileCheck2 className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-950 mb-3">
            Need Batch-Specific Test Certificates for Your Project?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto leading-relaxed mb-6">
            Consultant engineers and supervising materials inspectors can request official laboratory Certificates of Analysis (COA) for any delivery batch dispatched to their job site.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenQuote}
              className="px-6 py-3 bg-[#B91C1C] hover:bg-[#991B1B] text-white text-xs font-bold uppercase tracking-wider rounded-sm shadow-md cursor-pointer transition-all"
            >
              Request Commercial Batch Quote & COA
            </button>
            <Link
              to="/contact"
              className="px-6 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-xs font-mono font-bold uppercase tracking-wider rounded-sm transition-all"
            >
              Contact Laboratory Desk
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Sibling Links */}
      <section className="py-14 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-mono uppercase tracking-widest text-[#B91C1C] font-bold mb-6">
            Explore Star Cement Quality & Standards
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link 
              to="/about/vision-mission" 
              className="p-5 bg-neutral-800/70 hover:bg-neutral-800 rounded-lg border border-neutral-700/70 transition-colors block"
            >
              <h4 className="text-sm font-bold text-white mb-1">Vision, Mission & Creed →</h4>
              <p className="text-xs text-neutral-400">Institutional values and GS 1118-1 quality pledge</p>
            </Link>

            <Link 
              to="/about/leadership" 
              className="p-5 bg-neutral-800/70 hover:bg-neutral-800 rounded-lg border border-neutral-700/70 transition-colors block"
            >
              <h4 className="text-sm font-bold text-white mb-1">Executive Directorate →</h4>
              <p className="text-xs text-neutral-400">Board members, CEO & technical governance leaders</p>
            </Link>

            <Link 
              to="/about/accreditations" 
              className="p-5 bg-neutral-800/70 hover:bg-neutral-800 rounded-lg border border-neutral-700/70 transition-colors block"
            >
              <h4 className="text-sm font-bold text-white mb-1">Statutory Accreditations →</h4>
              <p className="text-xs text-neutral-400">Ghana Standards Authority & EPA permits</p>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
