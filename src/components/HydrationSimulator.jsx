import React, { useState } from 'react';
import { 
  Activity, 
  Layers, 
  ShieldCheck, 
  TrendingUp, 
  Flame, 
  CheckCircle2, 
  AlertCircle,
  Zap,
  Clock,
  Sparkles
} from 'lucide-react';
import { playBlip, playMechanicalClick } from '../utils/audioFeedback';

export default function HydrationSimulator({ initialGrade = 'both' }) {
  const [activeStep, setActiveStep] = useState(2); // 48 Hours (2 Days) as default

  const hydrationSteps = [
    {
      timeLabel: '2 Hours',
      stageName: 'Initial Plastic Setting & Induction',
      chemistry: 'Tricalcium Aluminate (C3A) & Gypsum Reaction',
      star42Mpa: '0.4 MPa',
      star32Mpa: '0.2 MPa',
      porosity: '42.0%',
      heatRelease: '65 J/g',
      cshGelGrowth: '12%',
      contractorAdvice: 'Concrete remains workable for pump placement and vibrating. Do not add uncontrolled mixing water. Avoid wind exposure to prevent plastic shrinkage cracks.',
      status: 'Plastic & Workable'
    },
    {
      timeLabel: '24 Hours',
      stageName: 'Early Acceleration & Solidification',
      chemistry: 'Rapid Alite (C3S) Hydration & C-S-H Needle Crystallization',
      star42Mpa: '14.8 MPa',
      star32Mpa: '8.5 MPa',
      porosity: '26.5%',
      heatRelease: '210 J/g',
      cshGelGrowth: '45%',
      contractorAdvice: 'Star Super 42.5R permits vertical column and wall shutter stripping at 24 hours. Keep horizontal prop supports undisturbed. Begin continuous water curing.',
      status: 'Vertical Stripping Allowed (42.5R)'
    },
    {
      timeLabel: '48 Hours (2 Days)',
      stageName: 'Statutory GSA Early Strength Benchmark',
      chemistry: 'Dense C-S-H Gel Matrix Formation & Micro-Limestone Nucleation',
      star42Mpa: '24.5 MPa (Exceeds ≥ 20.0 MPa)',
      star32Mpa: '14.2 MPa (Exceeds ≥ 10.0 MPa)',
      porosity: '18.2%',
      heatRelease: '285 J/g',
      cshGelGrowth: '68%',
      contractorAdvice: 'Official Ghana Standards Authority (GS 1118-1) 2-day cube break testing point. Secondary beam side formwork may be struck. Continuous curing vital.',
      status: 'GSA Compliance Milestone'
    },
    {
      timeLabel: '7 Days',
      stageName: 'Structural Load-Bearing Threshold',
      chemistry: 'Capillary Pore Bridging & Hydrate Crystallization',
      star42Mpa: '36.8 MPa (~70% peak)',
      star32Mpa: '26.5 MPa (~72% peak)',
      porosity: '10.5%',
      heatRelease: '340 J/g',
      cshGelGrowth: '84%',
      contractorAdvice: 'Slabs and transfer beams reach sufficient compressive threshold for selective reshoring. Sandcrete blocks produced with 32.5R can be delivered to masonry sites.',
      status: 'Slab Reshoring Permitted'
    },
    {
      timeLabel: '28 Days',
      stageName: 'Standard Characteristic Design Strength',
      chemistry: 'Belite (C2S) Slow Hydration & Gel Densification',
      star42Mpa: '52.5 MPa (High Peak Structural)',
      star32Mpa: '38.4 MPa (Standard Heavy Duty)',
      porosity: '4.8%',
      heatRelease: '385 J/g',
      cshGelGrowth: '96%',
      contractorAdvice: 'Full structural load capacity achieved. Laboratory certification cubes crushed to establish compliance for consulting engineers and municipal building inspectors.',
      status: '100% Design Load Ready'
    },
    {
      timeLabel: '90 Days',
      stageName: 'Long-Term Pozzolanic Micro-Durability',
      chemistry: 'Calcium Carbonate Micro-Filler Interlocking & Pore Refinement',
      star42Mpa: '58.2 MPa',
      star32Mpa: '42.1 MPa',
      porosity: '3.2%',
      heatRelease: '405 J/g',
      cshGelGrowth: '99%',
      contractorAdvice: 'Impermeable barrier against airborne marine salt spray and aggressive groundwater sulfates along the Ghanaian coastal shelf.',
      status: 'Permanent Marine Durability'
    }
  ];

  const current = hydrationSteps[activeStep];

  const handleStepChange = (idx) => {
    setActiveStep(idx);
    playBlip();
  };

  return (
    <div className="bg-neutral-900 text-white p-6 sm:p-8 rounded-sm border border-neutral-800 shadow-xl scanline-grid">
      
      {/* Simulator Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold flex items-center gap-1.5 mb-1">
            <Activity className="w-3.5 h-3.5" />
            Civil Materials Science Simulator
          </span>
          <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
            Hydration Kinetics & Strength Gain Trajectory
          </h3>
          <p className="text-xs text-neutral-400 mt-1 max-w-xl">
            Examine how Star Cement’s micro-limestone and refined mineral hydraulic binder transform from fluid paste into an impenetrable crystalline monolith over time.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-1 rounded-xs border border-emerald-800 flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            GS 1118-1 & EN 196-1 Calibrated
          </span>
        </div>
      </div>

      {/* Interactive Time Selector Buttons */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 my-6">
        {hydrationSteps.map((step, idx) => (
          <button
            key={idx}
            onClick={() => handleStepChange(idx)}
            className={`p-2.5 rounded-xs font-mono text-xs font-bold transition-all text-center border ${
              activeStep === idx
                ? 'bg-[#B91C1C] text-white border-[#B91C1C] shadow-md shadow-red-950/50 scale-[1.02]'
                : 'bg-neutral-950/80 text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700'
            }`}
          >
            <span className="block text-[10px] text-neutral-400 mb-0.5">T +</span>
            <span className="text-xs sm:text-sm">{step.timeLabel}</span>
          </button>
        ))}
      </div>

      {/* Main Hydration Analysis Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-neutral-950/80 p-6 rounded-sm border border-neutral-800">
        
        {/* Left: Interactive Compressive Strength Gauges (6 cols) */}
        <div className="lg:col-span-6 space-y-5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">
              Stage: <strong className="text-white">{current.stageName}</strong>
            </span>
            <span className="text-xs font-mono text-[#B91C1C] font-semibold bg-red-950/40 px-2 py-0.5 rounded-xs border border-red-900/60">
              {current.status}
            </span>
          </div>

          <div className="space-y-4">
            {/* 42.5R Gauge */}
            <div className="bg-neutral-900 p-4 rounded-xs border border-neutral-800">
              <div className="flex justify-between items-center mb-1 text-xs font-mono">
                <span className="text-white font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#B91C1C]"></span>
                  Star Super 42.5R (CEM II/A-L)
                </span>
                <span className="text-[#B91C1C] font-bold text-sm">{current.star42Mpa}</span>
              </div>
              <div className="w-full bg-neutral-800 h-2.5 rounded-xs overflow-hidden">
                <div 
                  className="bg-[#B91C1C] h-full rounded-xs transition-all duration-500"
                  style={{ width: `${Math.min(100, (parseFloat(current.star42Mpa) / 60) * 100)}%` }}
                />
              </div>
            </div>

            {/* 32.5R Gauge */}
            <div className="bg-neutral-900 p-4 rounded-xs border border-neutral-800">
              <div className="flex justify-between items-center mb-1 text-xs font-mono">
                <span className="text-white font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Star Solid 32.5R (CEM II/B-L)
                </span>
                <span className="text-blue-400 font-bold text-sm">{current.star32Mpa}</span>
              </div>
              <div className="w-full bg-neutral-800 h-2.5 rounded-xs overflow-hidden">
                <div 
                  className="bg-blue-500 h-full rounded-xs transition-all duration-500"
                  style={{ width: `${Math.min(100, (parseFloat(current.star32Mpa) / 60) * 100)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Micro-Parameters Grid */}
          <div className="grid grid-cols-3 gap-3 text-center text-xs font-mono pt-2">
            <div className="bg-neutral-900 p-2.5 rounded-xs border border-neutral-800">
              <span className="text-neutral-500 text-[10px] block uppercase">C-S-H Gel Growth</span>
              <span className="text-emerald-400 font-bold text-sm">{current.cshGelGrowth}</span>
            </div>
            <div className="bg-neutral-900 p-2.5 rounded-xs border border-neutral-800">
              <span className="text-neutral-500 text-[10px] block uppercase">Capillary Porosity</span>
              <span className="text-amber-400 font-bold text-sm">{current.porosity}</span>
            </div>
            <div className="bg-neutral-900 p-2.5 rounded-xs border border-neutral-800">
              <span className="text-neutral-500 text-[10px] block uppercase">Hydration Heat</span>
              <span className="text-white font-bold text-sm">{current.heatRelease}</span>
            </div>
          </div>
        </div>

        {/* Right: Chemical Morphology & Job-Site Protocol (6 cols) */}
        <div className="lg:col-span-6 space-y-4 border-t lg:border-t-0 lg:border-l border-neutral-800 lg:pl-8 pt-4 lg:pt-0">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-bold block mb-1">
              Microstructural Phase Transformation
            </span>
            <h4 className="font-serif text-lg font-bold text-white">
              {current.chemistry}
            </h4>
          </div>

          {/* Simulated Cross-Section Micrograph Visual */}
          <div className="bg-neutral-900 p-4 rounded-xs border border-neutral-800">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-2">
              <span>Paste Density Simulation (500x Magnification)</span>
              <span className="text-emerald-400 font-bold">Pore Closure: {(100 - parseFloat(current.porosity)).toFixed(1)}%</span>
            </div>
            
            <div className="h-12 w-full bg-neutral-950 rounded-xs border border-neutral-800 relative overflow-hidden flex items-center justify-around p-1">
              {/* Dynamic simulated particles based on time step */}
              {Array.from({ length: 14 }).map((_, i) => (
                <div 
                  key={i}
                  className="rounded-full transition-all duration-700"
                  style={{
                    width: `${Math.max(6, (activeStep + 1) * 3.5)}px`,
                    height: `${Math.max(6, (activeStep + 1) * 3.5)}px`,
                    backgroundColor: i % 2 === 0 ? '#B91C1C' : '#3B82F6',
                    opacity: 0.4 + (activeStep * 0.12),
                    transform: `translateY(${(i % 3 - 1) * 4}px)`
                  }}
                />
              ))}
            </div>
          </div>

          <div className="bg-neutral-900/90 border border-neutral-800 p-4 rounded-xs">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#B91C1C] font-bold block mb-1">
              Job-Site Civil Engineering Directive
            </span>
            <p className="text-xs text-neutral-300 leading-relaxed font-sans">
              {current.contractorAdvice}
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
