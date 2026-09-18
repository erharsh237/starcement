import React, { useState, useMemo } from 'react';
import { Copy, Check, Calculator as CalcIcon, Leaf, Sparkles, Printer } from 'lucide-react';
import { playMechanicalClick, playBlip } from '../utils/audioFeedback';

export default function Calculator({ onTransferToQuote }) {
  // Standard Civil Engineering Presets
  const presets = [
    { label: 'C25/30 Slabs & Beams', cement: 360, water: 180, sand: 720, stone: 1140 },
    { label: 'C30/37 Columns & Decks', cement: 400, water: 170, sand: 680, stone: 1120 },
    { label: 'C35/45 Marine Piles', cement: 440, water: 165, sand: 650, stone: 1100 },
    { label: 'C20/25 Plain Footings', cement: 300, water: 180, sand: 750, stone: 1150 },
    { label: '1:4 Sandcrete Masonry', cement: 280, water: 190, sand: 1100, stone: 650 },
  ];

  // Real civil engineering mix inputs (kg per cubic meter of compacted fresh concrete)
  const [inputs, setInputs] = useState({
    cementKg: 360,
    waterLitres: 180,
    fineAggregateKg: 720,
    coarseAggregateKg: 1140,
    pourVolumeM3: 45,
  });

  const [copied, setCopied] = useState(false);
  const [printed, setPrinted] = useState(false);

  // Computations based on standard civil engineering mix mechanics
  const analysis = useMemo(() => {
    const { cementKg, waterLitres, fineAggregateKg, coarseAggregateKg, pourVolumeM3 } = inputs;
    
    // Water-Cement ratio
    const wcRatio = cementKg > 0 ? parseFloat((waterLitres / cementKg).toFixed(2)) : 0;

    // Bolomey-based 28-day cylinder compressive strength estimation for Portland Limestone Cement
    let estimatedFck = 0;
    if (wcRatio > 0) {
      estimatedFck = Math.max(12, Math.round(21 * ((1 / wcRatio) - 0.5)));
    }

    // Concrete Strength Class designation under EN 206 / BS 8500
    let gradeClass = 'C16/20';
    if (estimatedFck >= 38) gradeClass = 'C35/45 • High Performance';
    else if (estimatedFck >= 32) gradeClass = 'C30/37 • Reinforced Frames & Decks';
    else if (estimatedFck >= 26) gradeClass = 'C25/30 • Slabs & Rafts';
    else if (estimatedFck >= 20) gradeClass = 'C20/25 • Footings & Pavements';
    else gradeClass = 'C16/20 • Plain Concrete';

    // Theoretical fresh concrete density (kg/m3)
    const freshDensity = cementKg + waterLitres + fineAggregateKg + coarseAggregateKg;

    // Slump class prediction based on water content
    let slumpClass = 'S3 (100–150 mm, Pumpable)';
    if (waterLitres >= 200) slumpClass = 'S4 (160–210 mm, High Flow)';
    else if (waterLitres >= 170) slumpClass = 'S3 (100–150 mm, Pumpable)';
    else if (waterLitres >= 150) slumpClass = 'S2 (50–90 mm, Semi-plastic)';
    else slumpClass = 'S1 (10–40 mm, Stiff / Pavement)';

    // 50kg bag consumption
    const bagsPerM3 = parseFloat((cementKg / 50).toFixed(1));
    const totalBagsForPour = Math.ceil(bagsPerM3 * pourVolumeM3);
    const totalCementTonnes = parseFloat(((cementKg * pourVolumeM3) / 1000).toFixed(1));
    const totalSandTonnes = parseFloat(((fineAggregateKg * pourVolumeM3) / 1000).toFixed(1));
    const totalStoneTonnes = parseFloat(((coarseAggregateKg * pourVolumeM3) / 1000).toFixed(1));

    // Decarbonization carbon avoidance (180 kg CO2 saved per MT of cement vs standard OPC)
    const co2SavedKg = Math.round(totalCementTonnes * 180);
    const treesEquivalent = Math.round(co2SavedKg / 22);

    // Recommended cement grade
    const recommendedGrade = estimatedFck >= 28 ? 'Star Cement 42.5R' : 'Star Cement 32.5R';
    const recommendedId = estimatedFck >= 28 ? 'star-42-5r' : 'star-32-5r';

    return {
      wcRatio,
      estimatedFck,
      gradeClass,
      freshDensity,
      slumpClass,
      bagsPerM3,
      totalBagsForPour,
      totalCementTonnes,
      totalSandTonnes,
      totalStoneTonnes,
      co2SavedKg,
      treesEquivalent,
      recommendedGrade,
      recommendedId
    };
  }, [inputs]);

  const handleCopy = () => {
    const text = `STAR CEMENT MIX DESIGN SPECIFICATION:
Target Pour Volume: ${inputs.pourVolumeM3} m³
Batch Proportions (per m³):
- Cement: ${inputs.cementKg} kg (${analysis.bagsPerM3} bags of 50kg)
- Water: ${inputs.waterLitres} L (w/c: ${analysis.wcRatio})
- Fine Aggregate (Sand): ${inputs.fineAggregateKg} kg
- Coarse Granite Stone: ${inputs.coarseAggregateKg} kg
- Fresh Density: ${analysis.freshDensity} kg/m³
Performance Estimates:
- 28-Day Strength: ${analysis.estimatedFck} MPa (${analysis.gradeClass})
- Slump Class: ${analysis.slumpClass}
Total Materials for Pour:
- 50kg Bags: ${analysis.totalBagsForPour} bags (${analysis.totalCementTonnes} MT)
- Sand: ${analysis.totalSandTonnes} MT
- Coarse Stone: ${analysis.totalStoneTonnes} MT
Recommended Product: ${analysis.recommendedGrade}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTransfer = () => {
    if (onTransferToQuote) {
      onTransferToQuote({
        selectedBlend: analysis.recommendedId,
        bags50kg: analysis.totalBagsForPour,
        volumeM3: inputs.pourVolumeM3,
      });
    }
  };

  return (
    <section id="calculator" className="bg-[#F7F6F3] border-b border-neutral-200 py-16 sm:py-20 lg:py-24 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Refined Breathing Room & Scroll Reveal */}
        <div className="max-w-3xl mb-12 reveal-init">
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#B91C1C] mb-2.5">
            Civil Engineering Mechanics
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-neutral-950 tracking-tight leading-tight">
            Concrete Mix Design & Bag Calculator
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed font-normal">
            Input volumetric constituents per cubic meter to compute operational water-cement ratio, predicted 28-day cylinder compressive strength, and total 50kg bag procurement requirements.
          </p>
        </div>

        {/* Calculator Main Grid (Airy & Spacious) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Inputs Column (7 cols) with Slide In */}
          <div className="lg:col-span-7 bg-white border border-neutral-200/90 rounded-2xl p-6 sm:p-8 lg:p-9 shadow-sm space-y-6 reveal-left">
            <div className="flex justify-between items-center border-b border-neutral-100 pb-4">
              <span className="font-mono text-xs font-bold uppercase text-neutral-900 tracking-wider">
                Batch Weights per Cubic Meter
              </span>
              <span className="font-mono text-xs text-neutral-400">
                1.0 m³ Solid Compact
              </span>
            </div>

            {/* Quick Civil Mix Presets */}
            <div className="pb-4 border-b border-neutral-100">
              <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold mb-2">
                Standard Mix Presets (Click to Auto-Fill)
              </span>
              <div className="flex flex-wrap gap-1.5">
                {presets.map((pr, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      playMechanicalClick();
                      setInputs(prev => ({
                        ...prev,
                        cementKg: pr.cement,
                        waterLitres: pr.water,
                        fineAggregateKg: pr.sand,
                        coarseAggregateKg: pr.stone,
                      }));
                    }}
                    className="px-2.5 py-1 text-[11px] font-mono rounded-xs border border-neutral-200 bg-neutral-50 hover:bg-[#B91C1C] hover:text-white hover:border-[#B91C1C] text-neutral-700 transition-all cursor-pointer"
                  >
                    {pr.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              {/* Cement */}
              <div>
                <label htmlFor="input-cement" className="block text-xs font-mono font-bold text-neutral-800 mb-2 uppercase">
                  Cement Binder (kg/m³)
                </label>
                <input
                  id="input-cement"
                  type="number"
                  step="10"
                  min="220"
                  max="520"
                  value={inputs.cementKg}
                  onChange={(e) => setInputs({ ...inputs, cementKg: parseFloat(e.target.value) || 0 })}
                  className="w-full bg-white border border-neutral-300 px-4 py-3 font-mono text-base text-neutral-900 rounded-lg focus:outline-none focus:border-[#B91C1C] focus:ring-1 focus:ring-[#B91C1C] transition-all"
                />
                <span className="block text-[11px] text-neutral-500 mt-2 font-mono">
                  Structural range: 320–400 kg/m³
                </span>
              </div>

              {/* Water */}
              <div>
                <label htmlFor="input-water" className="block text-xs font-mono font-bold text-neutral-800 mb-2 uppercase">
                  Effective Water (Litres/m³)
                </label>
                <input
                  id="input-water"
                  type="number"
                  step="5"
                  min="120"
                  max="240"
                  value={inputs.waterLitres}
                  onChange={(e) => setInputs({ ...inputs, waterLitres: parseFloat(e.target.value) || 0 })}
                  className="w-full bg-white border border-neutral-300 px-4 py-3 font-mono text-base text-neutral-900 rounded-lg focus:outline-none focus:border-[#B91C1C] focus:ring-1 focus:ring-[#B91C1C] transition-all"
                />
                <span className="block text-[11px] text-neutral-500 mt-2 font-mono">
                  Calculated w/c ratio: <strong className="text-neutral-900">{analysis.wcRatio}</strong>
                </span>
              </div>

              {/* Sand */}
              <div>
                <label htmlFor="input-sand" className="block text-xs font-mono font-bold text-neutral-800 mb-2 uppercase">
                  Fine Sand Aggregate (kg/m³)
                </label>
                <input
                  id="input-sand"
                  type="number"
                  step="20"
                  min="500"
                  max="950"
                  value={inputs.fineAggregateKg}
                  onChange={(e) => setInputs({ ...inputs, fineAggregateKg: parseFloat(e.target.value) || 0 })}
                  className="w-full bg-white border border-neutral-300 px-4 py-3 font-mono text-base text-neutral-900 rounded-lg focus:outline-none focus:border-[#B91C1C] focus:ring-1 focus:ring-[#B91C1C] transition-all"
                />
                <span className="block text-[11px] text-neutral-500 mt-2 font-mono">
                  River sand / washed quarry dust
                </span>
              </div>

              {/* Granite Stone */}
              <div>
                <label htmlFor="input-stone" className="block text-xs font-mono font-bold text-neutral-800 mb-2 uppercase">
                  Coarse Crushed Granite (kg/m³)
                </label>
                <input
                  id="input-stone"
                  type="number"
                  step="20"
                  min="800"
                  max="1350"
                  value={inputs.coarseAggregateKg}
                  onChange={(e) => setInputs({ ...inputs, coarseAggregateKg: parseFloat(e.target.value) || 0 })}
                  className="w-full bg-white border border-neutral-300 px-4 py-3 font-mono text-base text-neutral-900 rounded-lg focus:outline-none focus:border-[#B91C1C] focus:ring-1 focus:ring-[#B91C1C] transition-all"
                />
                <span className="block text-[11px] text-neutral-500 mt-2 font-mono">
                  Graded crushed granite 20mm
                </span>
              </div>

            </div>

            {/* Planned Pour Volume */}
            <div className="pt-8 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <label htmlFor="input-pour-vol" className="block text-xs font-mono font-bold text-neutral-900 uppercase mb-1">
                  Total Planned Pour Volume (m³)
                </label>
                <span className="text-xs text-neutral-500 font-sans">
                  Total cubic meters planned across the jobsite schedule
                </span>
              </div>
              <input
                id="input-pour-vol"
                type="number"
                step="5"
                min="1"
                max="10000"
                value={inputs.pourVolumeM3}
                onChange={(e) => setInputs({ ...inputs, pourVolumeM3: parseFloat(e.target.value) || 0 })}
                className="w-40 bg-white border border-neutral-300 px-4 py-3 font-mono text-lg font-bold text-neutral-900 rounded-lg focus:outline-none focus:border-[#B91C1C] focus:ring-1 focus:ring-[#B91C1C]"
              />
            </div>
          </div>

          {/* Results Column (5 cols - Clean & Open with Slide In) */}
          <div className="lg:col-span-5 bg-white border border-neutral-200/90 rounded-2xl p-8 sm:p-12 shadow-sm space-y-8 reveal-right">
            <div className="flex justify-between items-center border-b border-neutral-100 pb-4">
              <span className="font-mono text-xs font-bold uppercase text-neutral-900 tracking-wider">
                Engineering Outputs
              </span>
              <button
                onClick={handleCopy}
                className="text-xs font-mono font-medium text-neutral-500 hover:text-neutral-900 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#B91C1C] animate-scale-in" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Mix Spec'}</span>
              </button>
            </div>

            {/* Total Bags Callout (Big, Clean, Impactful) */}
            <div className="pb-6 border-b border-neutral-100">
              <span className="text-xs font-mono text-neutral-500 uppercase block mb-1">
                Required 50kg Bags for Pour ({inputs.pourVolumeM3} m³)
              </span>
              <div className="font-mono text-4xl sm:text-5xl font-extrabold text-[#B91C1C] tracking-tight mt-1 transition-all">
                {analysis.totalBagsForPour.toLocaleString()} <span className="text-xl font-normal text-neutral-600">Bags</span>
              </div>
              <span className="text-xs font-mono text-neutral-500 block mt-1.5">
                Equivalent to {analysis.totalCementTonnes} MT cement binder
              </span>
            </div>

            {/* Predicted Strength */}
            <div className="pb-6 border-b border-neutral-100">
              <span className="text-xs font-mono text-neutral-500 uppercase block mb-1">
                Predicted 28-Day Strength (f_ck)
              </span>
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-3xl font-bold text-neutral-950">
                  {analysis.estimatedFck} <span className="text-lg font-normal text-neutral-500">MPa</span>
                </span>
                <span className="text-xs font-mono font-bold text-[#B91C1C]">
                  w/c: {analysis.wcRatio}
                </span>
              </div>
              <div className="text-xs font-mono text-neutral-600 mt-1 font-medium">
                Designation: {analysis.gradeClass}
              </div>
            </div>

            {/* Key Output Metrics (Clean Tabular Rows) */}
            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between py-1.5 text-neutral-600 hover:text-neutral-950 transition-colors">
                <span>Recommended Binder</span>
                <strong className="text-neutral-900">{analysis.recommendedGrade}</strong>
              </div>
              <div className="flex justify-between py-1.5 text-neutral-600 hover:text-neutral-950 transition-colors">
                <span>Slump Consistency</span>
                <strong className="text-neutral-900">{analysis.slumpClass}</strong>
              </div>
              <div className="flex justify-between py-1.5 text-neutral-600 hover:text-neutral-950 transition-colors">
                <span>Total Sand Required</span>
                <strong className="text-neutral-900">{analysis.totalSandTonnes} MT</strong>
              </div>
              <div className="flex justify-between py-1.5 text-neutral-600 hover:text-neutral-950 transition-colors">
                <span>Total Granite Stone</span>
                <strong className="text-neutral-900">{analysis.totalStoneTonnes} MT</strong>
              </div>
            </div>

            {/* Decarbonization Footprint Savings Badge */}
            <div className="p-4 bg-emerald-950/10 border border-emerald-800/30 rounded-lg space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-emerald-700">
                <span className="flex items-center gap-1.5">
                  <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                  Embodied Carbon Avoided
                </span>
                <span className="text-emerald-800">-{analysis.co2SavedKg.toLocaleString()} kg CO₂</span>
              </div>
              <p className="text-[11px] text-neutral-600 font-mono leading-relaxed">
                Using Star Portland Limestone Cement (PLC) saves ~18% clinker carbon vs standard OPC. Equivalent to <strong>{analysis.treesEquivalent} tropical trees</strong> absorbing carbon for 1 year.
              </p>
            </div>

            {/* Transfer to Order CTA with Tactile Hover */}
            <button
              onClick={handleTransfer}
              className="w-full py-4 bg-[#B91C1C] hover:bg-[#991B1B] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98] transition-all text-center cursor-pointer"
            >
              Transfer Parameters to Quote Order
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
