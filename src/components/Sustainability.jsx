import React, { useState } from 'react';

export default function Sustainability() {
  const [activeStage, setActiveStage] = useState('2024');

  const roadmap = [
    {
      year: '2024',
      stage: 'Current Production Baseline',
      title: 'Limestone Clinker Substitution under GS 1118-1:2024',
      clinkerFactor: '0.72',
      co2Intensity: '415 kg CO₂ / t',
      thermalSub: '12%',
      summary: 'Production at the Tema grinding terminal has fully transitioned to CEM II/A-L and CEM II/B-L Portland Limestone Cement. High-purity reactive limestone replaces energy-intensive clinker, reducing thermal calcination emissions while optimizing grain packing density.',
      technicalPoints: [
        'Interground mineral additions conforming to GS 1118-1:2024 standards',
        'Blaine specific surface maintained at ≥ 340 m²/kg for early hydration kinetics',
        'Specific grinding energy consumption reduced to 31.4 kWh/t at finish mills'
      ]
    },
    {
      year: '2026',
      stage: 'Engineering Phase 1',
      title: 'Waste Heat Recovery (WHR) Co-Generation',
      clinkerFactor: '0.68',
      co2Intensity: '365 kg CO₂ / t',
      thermalSub: '24%',
      summary: 'Installation of a closed-loop Organic Rankine Cycle (ORC) turbine capture system at the Tema facility. Low-grade thermal energy from roller presses and separator exhaust is converted into 4.5 MW of electrical power.',
      technicalPoints: [
        'Annual fossil-fuel power grid reliance reduced by 28,000 MWh',
        'Zero fresh water consumption during closed-loop heat dissipation',
        'ISO 50001 Energy Management compliance milestone'
      ]
    },
    {
      year: '2028',
      stage: 'Engineering Phase 2',
      title: 'Limestone Calcined Clay Cement (LC3) Commercialization',
      clinkerFactor: '0.50',
      co2Intensity: '290 kg CO₂ / t',
      thermalSub: '38%',
      summary: 'Commercial integration of flash-calcined low-grade kaolinitic clays sourced from domestic deposits in Ghana. The synergistic reaction between metakaolin and limestone matches CEM I structural performance with 50% less clinker.',
      technicalPoints: [
        '50% lower clinker factor without sacrificing 28-day 42.5R compressive target',
        'Significantly enhanced resistance to chloride intrusion for coastal marine foundations',
        'Utilizes domestic non-ceramic clay deposits unsuitable for pottery or brickmaking'
      ]
    },
    {
      year: '2030',
      stage: 'Long-Range Commitment',
      title: 'Biomass & Alternative Fuel Thermal Co-Processing',
      clinkerFactor: '0.45',
      co2Intensity: '220 kg CO₂ / t',
      thermalSub: '55%',
      summary: 'Full transition to agricultural residue co-processing (oil palm empty fruit bunches and shredded cocoa husks) to supply auxiliary calcination thermal requirements, achieving deep industrial decarbonization.',
      technicalPoints: [
        '55% thermal substitution rate with certified local biomass waste streams',
        'Zero sulfur oxide (SOx) generation compared to imported petcoke',
        'Third-party Environmental Product Declaration (EPD) lifecycle verification'
      ]
    }
  ];

  const currentData = roadmap.find(item => item.year === activeStage) || roadmap[0];

  const comparisonTable = [
    { type: 'Ordinary Portland (CEM I)', clinker: '95–100%', co2: '780 kg/t', strength28d: '45–52 MPa', marine: 'Moderate' },
    { type: 'Star Cement 42.5R (CEM II/A-L)', clinker: '80–88%', co2: '415 kg/t', strength28d: '46–50 MPa', marine: 'High' },
    { type: 'Star Cement 32.5R (CEM II/B-L)', clinker: '65–79%', co2: '350 kg/t', strength28d: '35–40 MPa', marine: 'Moderate-High' },
    { type: 'Star LC3 Target (2028 Pipeline)', clinker: '50%', co2: '290 kg/t', strength28d: '48–54 MPa', marine: 'Very High (Dense)' }
  ];

  return (
    <section id="sustainability" className="py-16 sm:py-20 lg:py-24 bg-[#FFFFFF] text-neutral-900 border-t border-neutral-200 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header with Scroll Reveal */}
        <div className="max-w-3xl mb-12 reveal-init">
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#B91C1C] mb-2.5">
            Environmental Engineering & Standards Compliance
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-950 leading-tight">
            Decarbonization Roadmap: Lowering Clinker Factor
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed font-normal">
            Star Cement combines limestone intergrinding, waste heat power generation, and calcined clay research to achieve deep industrial decarbonization while maintaining full 42.5R structural integrity under GS 1118-1:2024.
          </p>
        </div>

        {/* Roadmap Year Buttons with Staggered Animations & Lift */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 stagger-children">
          {roadmap.map((item) => {
            const isSelected = item.year === activeStage;
            return (
              <button
                key={item.year}
                type="button"
                onClick={() => setActiveStage(item.year)}
                className={`reveal-init p-6 text-left rounded-xl transition-all duration-300 border hover:-translate-y-1 cursor-pointer ${
                  isSelected 
                    ? 'bg-neutral-950 text-white border-neutral-950 shadow-xl' 
                    : 'bg-white text-neutral-900 border-neutral-200 hover:border-neutral-400 hover:shadow-md'
                }`}
              >
                <div className="flex justify-between items-baseline mb-2">
                  <span className={`font-mono text-3xl font-bold transition-colors ${isSelected ? 'text-[#B91C1C]' : 'text-neutral-950'}`}>
                    {item.year}
                  </span>
                  <span className={`font-mono text-xs ${isSelected ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    {item.clinkerFactor} Clinker Factor
                  </span>
                </div>
                <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${isSelected ? 'text-white' : 'text-neutral-900'}`}>
                  {item.stage}
                </div>
                <div className={`text-xs font-mono ${isSelected ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  {item.co2Intensity}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Technical Breakdown (Clean, Airy with Reveal) */}
        <div className="reveal-init border border-neutral-200/90 bg-[#F7F6F3] rounded-2xl p-8 sm:p-14 mb-20 shadow-sm transition-all duration-500 hover:shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="font-mono text-xs text-[#B91C1C] font-bold uppercase tracking-wider">
                Roadmap Milestone: {currentData.year} — {currentData.stage}
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-950 leading-tight">
                {currentData.title}
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-normal">
                {currentData.summary}
              </p>

              <div className="pt-6 border-t border-neutral-200">
                <span className="font-mono text-xs uppercase text-neutral-500 block mb-4 font-bold tracking-wider">
                  Process Specifications & Verification:
                </span>
                <ul className="space-y-3">
                  {currentData.technicalPoints.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B91C1C] mt-2 flex-shrink-0"></span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Target Metrics Column (Clean Pillars) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:pl-6 lg:border-l lg:border-neutral-200">
              <div className="space-y-6 font-mono">
                <div className="border-b border-neutral-200 pb-5">
                  <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Target Clinker Factor</div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-neutral-950 mt-1">
                    {currentData.clinkerFactor}
                  </div>
                  <div className="text-xs text-neutral-500 font-sans mt-1">Clinker ratio to total binder mass</div>
                </div>

                <div className="border-b border-neutral-200 pb-5">
                  <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Embodied CO₂ Intensity</div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#B91C1C] mt-1">
                    {currentData.co2Intensity}
                  </div>
                  <div className="text-xs text-neutral-500 font-sans mt-1">Emissions per metric ton cement</div>
                </div>

                <div>
                  <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Thermal Substitution</div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-neutral-950 mt-1">
                    {currentData.thermalSub}
                  </div>
                  <div className="text-xs text-neutral-500 font-sans mt-1">Kiln thermal energy from recovered sources</div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200 font-mono text-xs text-neutral-500">
                Compliant with Ghana Environmental Protection Agency (EPA) industrial guidelines.
              </div>
            </div>

          </div>
        </div>

        {/* Technical Benchmarking Table with Scroll Reveal */}
        <div className="reveal-init border border-neutral-200 rounded-2xl overflow-hidden shadow-sm bg-white hover:shadow-lg transition-all duration-300">
          <div className="p-8 border-b border-neutral-100 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <div className="font-mono text-xs text-[#B91C1C] uppercase font-bold tracking-wider mb-1">
                Comparative Carbon Intensity Matrix
              </div>
              <h4 className="font-serif text-2xl font-bold text-neutral-950">
                Star Cement vs. Conventional Cement Baselines
              </h4>
            </div>
            <span className="font-mono text-xs text-neutral-400">
              Per GS 1118-1:2024 / EN 196
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse font-mono">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50 text-neutral-600 uppercase tracking-wider text-xs">
                  <th className="py-4 px-6 font-bold font-sans">Binder Designation</th>
                  <th className="py-4 px-6 font-bold">Clinker Ratio</th>
                  <th className="py-4 px-6 font-bold">Embodied CO₂</th>
                  <th className="py-4 px-6 font-bold">28-Day Strength</th>
                  <th className="py-4 px-6 font-bold font-sans">Marine Durability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 text-neutral-700">
                {comparisonTable.map((row, index) => {
                  const isStar42 = row.type.includes('42.5R');
                  return (
                    <tr key={index} className={isStar42 ? 'bg-red-50/40 font-bold' : 'hover:bg-neutral-50/60 transition-colors'}>
                      <td className="py-4 px-6 text-neutral-950 font-sans font-medium">
                        {row.type}
                      </td>
                      <td className="py-4 px-6">{row.clinker}</td>
                      <td className={`py-4 px-6 ${isStar42 ? 'text-[#B91C1C] font-bold' : ''}`}>{row.co2}</td>
                      <td className="py-4 px-6">{row.strength28d}</td>
                      <td className="py-4 px-6 text-neutral-600 font-sans">{row.marine}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
