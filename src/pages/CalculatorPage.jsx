import React from 'react';
import { Link } from 'react-router-dom';
import Calculator from '../components/Calculator';
import { ChevronRight, Calculator as CalcIcon, ShieldCheck, CheckCircle2, FileSpreadsheet } from 'lucide-react';

export default function CalculatorPage({ onTransferToQuote }) {
  const standardRatios = [
    { grade: 'C20 / 25 (Grade 20)', ratio: '1 : 2 : 4', cementBags: '6.5 Bags / m³', slump: '75 - 100 mm', applications: 'Mass concrete, residential driveways, unreinforced foundations, blinding.' },
    { grade: 'C25 / 30 (Grade 25)', ratio: '1 : 1.5 : 3', cementBags: '7.8 Bags / m³', slump: '100 - 125 mm', applications: 'Reinforced concrete slabs, beams, retaining walls, residential lintels.' },
    { grade: 'C30 / 37 (Grade 30)', ratio: '1 : 1 : 2', cementBags: '9.2 Bags / m³', slump: '125 - 150 mm', applications: 'Heavy civil columns, post-tensioned bridge decks, water-retaining structures.' },
    { grade: 'C35 / 45 (Grade 35)', ratio: 'Engineered Mix', cementBags: '10.5+ Bags / m³', slump: 'Custom Mix', applications: 'Marine piles, deep precast girders, heavy port pavement slab surfaces.' }
  ];

  return (
    <div className="bg-[#F7F6F3] min-h-screen">
      {/* 1. Page Header & Breadcrumbs */}
      <section className="bg-neutral-900 text-white pt-12 pb-16 relative overflow-hidden border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#B91C1C] font-bold">Mix Calculator</span>
          </nav>

          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-3">
              Civil Engineering Batching Engine • BS EN 206
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
              Precision concrete mix design and 50kg bag estimator.
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              Accurately calculate your exact cement bag requirements, granite aggregate tonnage, clean river sand volume, and water-cement ratios for any structural element.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Calculator Component */}
      <Calculator onTransferToQuote={onTransferToQuote} />

      {/* 3. Reference Mix Design Table */}
      <section className="py-16 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B91C1C]">
              Structural Reference Table
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 mt-1 mb-2">
              Standard Batching Ratios by Concrete Class
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Volumetric batching guidelines calibrated for 50kg bags of Star Super 42.5R and Star Solid 32.5R using standard Ghanaian aggregates.
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-neutral-200 shadow-sm">
            <table className="w-full text-left border-collapse tech-table">
              <thead>
                <tr className="bg-[#F8F9FA]">
                  <th className="py-3 px-4 font-mono text-xs font-bold uppercase text-neutral-700">Concrete Class</th>
                  <th className="py-3 px-4 font-mono text-xs font-bold uppercase text-neutral-800">Volumetric Ratio (Cement:Sand:Stone)</th>
                  <th className="py-3 px-4 font-mono text-xs font-bold uppercase text-[#B91C1C]">50kg Bags / m³</th>
                  <th className="py-3 px-4 font-mono text-xs font-bold uppercase text-neutral-600">Typical Slump</th>
                  <th className="py-3 px-4 font-mono text-xs font-bold uppercase text-neutral-600">Typical Ghanaian Applications</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {standardRatios.map((item, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50/80 transition-colors">
                    <td className="py-3.5 px-4 text-xs font-bold text-neutral-900">{item.grade}</td>
                    <td className="py-3.5 px-4 text-xs font-mono font-semibold text-neutral-800">{item.ratio}</td>
                    <td className="py-3.5 px-4 text-xs font-mono font-bold text-[#B91C1C]">{item.cementBags}</td>
                    <td className="py-3.5 px-4 text-xs font-mono text-neutral-600">{item.slump}</td>
                    <td className="py-3.5 px-4 text-xs text-neutral-600 leading-relaxed">{item.applications}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>
    </div>
  );
}
