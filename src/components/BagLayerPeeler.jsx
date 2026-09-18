import React, { useState } from 'react';
import { 
  Layers, 
  ShieldCheck, 
  Eye, 
  Droplets, 
  Maximize2, 
  Sparkles, 
  Scale, 
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { playBlip, playMechanicalClick } from '../utils/audioFeedback';

export default function BagLayerPeeler() {
  const [selectedLayer, setSelectedLayer] = useState(0);

  const layers = [
    {
      index: 1,
      name: 'Layer 1: Scandinavian Virgin Kraft Exterior',
      material: '80 gsm Long-Fiber Virgin Bleached Kraft Paper',
      purpose: 'Surface print durability, friction pallet interlocking & moisture repellency',
      specs: [
        { label: 'Tensile Energy Absorption (TEA)', val: '> 230 J/m² (ISO 1924-3)' },
        { label: 'Friction Coefficient', val: '0.55 (Anti-slip pallet stability)' },
        { label: 'Printing Standard', val: 'UV-Stabilized High-Density Flexography' },
        { label: 'Environmental Rating', val: '100% Biodegradable & Recyclable' },
      ],
      description: 'The outermost shield engineered with long Scandinavian pine fibers. Features microscopic cross-ribbed embossing that locks stacked bags together on 40-bag wooden pallets, preventing transit shifting on rough haulage roads between Tema and Kumasi.'
    },
    {
      index: 2,
      name: 'Layer 2: Cross-Creped Kinetic Impact Buffer',
      material: '75 gsm High-Tensile Clupak Extensible Paper',
      purpose: 'Absorbs kinetic shock from 1.5-meter loading drops without bag rupture',
      specs: [
        { label: 'Elongation at Break (Stretch)', val: '8.5% Machine Direction' },
        { label: 'Drop Impact Resistance', val: '1.5-Meter Freefall Drop Certified' },
        { label: 'Bursting Strength', val: '≥ 480 kPa (Mullen Burst Test)' },
        { label: 'Puncture Resistance', val: 'Exceeds EN ISO 7965-1 Standards' },
      ],
      description: 'A heavy-duty extensible shock absorber ply. When bags are dropped onto flatbed trucks or concrete warehouse docks, this specialized creped paper expands and stretches, dissipating up to 500 Joules of kinetic impact without seam bursting.'
    },
    {
      index: 3,
      name: 'Layer 3: Micro-Perforated Polyethylene Moisture Barrier',
      material: '12-Micron High-Density Polyethylene (HDPE) Barrier Film',
      purpose: 'Hermetic vapor seal preventing atmospheric moisture caking in tropical humidity',
      specs: [
        { label: 'Water Vapor Transmission (WVTR)', val: '< 1.2 g/m²/24h at 38°C & 90% RH' },
        { label: 'De-Aeration Technology', val: 'Electrostatic Micro-Perforated Valves' },
        { label: 'Shelf-Life Extension', val: 'Maintains freshness up to 180 days' },
        { label: 'Condensation Barrier', val: '100% Waterproof Impermeable Barrier' },
      ],
      description: 'The critical tropical defense layer. During Ghana’s intense monsoon season (humidity > 85%), this micro-thin polyethylene liner prevents water vapor from reacting prematurely with active clinker compounds while allowing trapped air to vent during automated rotary packing.'
    },
    {
      index: 4,
      name: 'Core: Micro-Fine Portland Limestone Cement Powder',
      material: '100% Active Hydraulic Powder (CEM II/A-L 42.5R or CEM II/B-L 32.5R)',
      purpose: 'Ultra-pure cement particles engineered for zero pre-hydration lumps',
      specs: [
        { label: 'Specific Surface (Blaine)', val: '3,800 – 4,250 cm²/g' },
        { label: 'Certified Net Mass', val: '50.0 kg ± 0.5 kg (Haver & Boecker Load-Cell)' },
        { label: 'Sulfate Purity (SO₃)', val: '< 3.5% (Non-Expansive)' },
        { label: 'Chloride Content', val: '< 0.10% (Anti-Corrosion)' },
      ],
      description: 'The beating heart of every bag. Uniformly aerated, velvety cement powder free of lumps or quarry grit. Blended with computer-controlled precision to achieve early structural strength and creamy plastering workability.'
    }
  ];

  const current = layers[selectedLayer];

  return (
    <div className="bg-white border border-neutral-200 rounded-sm p-6 sm:p-8 my-12 shadow-xs">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-1">
            Packaging Engineering
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900">
            Interactive Multi-Ply Bag X-Ray Explorer
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-2xl">
            A certified 50kg bag is an advanced multi-barrier pressure vessel engineered to withstand 1.5-meter drops and Ghana’s coastal humidity. Click any layer below to peel and inspect its cross-section:
          </p>
        </div>

        <span className="text-xs font-mono font-bold text-neutral-500 bg-[#F7F6F3] px-3 py-1.5 rounded-xs border border-neutral-200 shrink-0">
          3 Plies + Powder Core
        </span>
      </div>

      {/* Layer Step Selector Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {layers.map((layer, idx) => (
          <button
            key={idx}
            onClick={() => {
              playMechanicalClick();
              setSelectedLayer(idx);
            }}
            className={`p-3 rounded-xs text-left transition-all border ${
              selectedLayer === idx
                ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
                : 'bg-[#F7F6F3] text-neutral-700 border-neutral-200 hover:border-neutral-400'
            }`}
          >
            <div className="flex items-center justify-between text-[10px] font-mono uppercase mb-1">
              <span className={selectedLayer === idx ? 'text-[#B91C1C] font-bold' : 'text-neutral-500'}>
                Layer 0{layer.index}
              </span>
              {selectedLayer === idx && <Eye className="w-3 h-3 text-[#B91C1C]" />}
            </div>
            <h4 className="text-xs font-bold truncate">
              {layer.name.split(':')[1] || layer.name}
            </h4>
          </button>
        ))}
      </div>

      {/* Detail Breakdown Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F7F6F3] p-6 sm:p-8 rounded-sm border border-neutral-200">
        
        {/* Left: Graphic Cutaway Representation */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full max-w-[280px] aspect-[1/1.3] bg-white rounded-xs border-2 border-neutral-300 p-5 shadow-inner flex flex-col justify-between relative overflow-hidden">
            
            {/* Visual Animated Layers */}
            <div className="space-y-3 my-auto">
              <div 
                className={`p-2.5 rounded-xs transition-all border ${
                  selectedLayer === 0 
                    ? 'bg-amber-100/80 border-amber-400 ring-2 ring-amber-400 font-bold' 
                    : 'bg-amber-50/50 border-amber-200 opacity-50'
                }`}
              >
                <span className="text-[10px] font-mono text-amber-900 block">Outer Ply: Scandinavian Kraft</span>
              </div>

              <div 
                className={`p-2.5 rounded-xs transition-all border ${
                  selectedLayer === 1 
                    ? 'bg-amber-200/90 border-amber-600 ring-2 ring-amber-600 font-bold' 
                    : 'bg-amber-100/40 border-amber-300 opacity-50'
                }`}
              >
                <span className="text-[10px] font-mono text-amber-950 block">Mid Ply: Clupak Shock Buffer</span>
              </div>

              <div 
                className={`p-2.5 rounded-xs transition-all border ${
                  selectedLayer === 2 
                    ? 'bg-blue-100 border-blue-400 ring-2 ring-blue-400 font-bold' 
                    : 'bg-blue-50/40 border-blue-200 opacity-50'
                }`}
              >
                <span className="text-[10px] font-mono text-blue-900 block">Inner Ply: HDPE Vapor Barrier</span>
              </div>

              <div 
                className={`p-3 rounded-xs transition-all border ${
                  selectedLayer === 3 
                    ? 'bg-neutral-800 text-white border-neutral-900 ring-2 ring-[#B91C1C] font-bold' 
                    : 'bg-neutral-200 border-neutral-300 opacity-50 text-neutral-700'
                }`}
              >
                <span className="text-[10px] font-mono block">Core: 50kg Active Powder</span>
              </div>
            </div>

            <div className="text-center pt-2 border-t border-neutral-200">
              <span className="font-mono text-[10px] text-neutral-500 uppercase">
                Active Inspection: Layer {current.index} of 4
              </span>
            </div>
          </div>
        </div>

        {/* Right: Technical Material Dossier */}
        <div className="lg:col-span-7 space-y-5">
          <div>
            <span className="text-[10px] font-mono text-[#B91C1C] uppercase tracking-widest font-bold block mb-1">
              Material Specification
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900">
              {current.name}
            </h4>
            <p className="text-xs font-mono text-neutral-500 mt-0.5">
              Composition: {current.material}
            </p>
          </div>

          <p className="text-xs text-neutral-700 leading-relaxed">
            {current.description}
          </p>

          <div className="border border-neutral-200 rounded-xs overflow-hidden bg-white">
            <table className="w-full text-left text-xs font-mono divide-y divide-neutral-100">
              <tbody className="divide-y divide-neutral-100">
                {current.specs.map((spec, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50">
                    <td className="p-2.5 text-neutral-500 font-medium w-1/2">{spec.label}</td>
                    <td className="p-2.5 text-neutral-900 font-bold">{spec.val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 font-semibold bg-emerald-50 p-2.5 rounded-xs border border-emerald-200">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Primary Function: {current.purpose}</span>
          </div>
        </div>

      </div>

    </div>
  );
}
