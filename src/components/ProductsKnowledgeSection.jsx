import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { 
  Building2, 
  Layers, 
  Download, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Calculator as CalcIcon, 
  CheckCircle2, 
  HelpCircle,
  FileText,
  MapPin,
  Sparkles
} from 'lucide-react';

export default function ProductsKnowledgeSection({ onSelectProductForQuote, onOpenCalculator, onOpenDealers }) {
  const [downloadedId, setDownloadedId] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const handleDownload = (id) => {
    setDownloadedId(id);
    setTimeout(() => setDownloadedId(null), 2500);
  };

  const productKnowledge = [
    {
      id: "star-42-5r",
      name: "Star Super CEM II/A-L 42.5R",
      category: "Rapid Hardening Heavy Structural",
      badge: "High Early Strength",
      theme: "red",
      bagColor: "Official Red Bag",
      standard: "GS 1118:2024 / EN 197-1",
      twoDayStrength: "≥ 20.0 MPa (Typical: 24.5 MPa)",
      twentyEightDayStrength: "42.5 – 55.0 MPa (Typical: 48.2 MPa)",
      settingTime: "Initial: 110 min • Final: 180 min",
      blaineFineness: "395 m²/kg (Rapid Hydration)",
      idealUse: "Reinforced structural columns, suspended slabs, post-tensioned transfer beams, bridge decks, marine piling, and heavy-duty precast elements.",
      keyAdvantage: "Accelerated early compressive strength allows striking beam and slab formwork early (saving 3 to 5 days per floor cycle), dramatically speeding up multi-story construction projects.",
      recommendedMix: "1 bag (50kg) cement : 1.5 wheelbarrows clean river sand : 3 wheelbarrows granite stone (C25/30 structural rating)",
      waterRatio: "25 – 28 Liters clean water per 50kg bag",
      curingRecommendation: "Continuous wet burlap or pond curing for minimum 7 days to reach full characteristic strength.",
      detailUrl: "/products/star-super-42-5r"
    },
    {
      id: "star-32-5r",
      name: "Star Solid CEM II/B-L 32.5R",
      category: "General Purpose & Masonry",
      badge: "Maximum Yield & Workability",
      theme: "blue",
      bagColor: "Official Blue Bag",
      standard: "GS 1118:2024 / EN 197-1",
      twoDayStrength: "≥ 10.0 MPa (Typical: 14.2 MPa)",
      twentyEightDayStrength: "32.5 – 42.5 MPa (Typical: 36.4 MPa)",
      settingTime: "Initial: 135 min • Final: 210 min",
      blaineFineness: "355 m²/kg (Optimized Plasticity)",
      idealUse: "Commercial sandcrete hollow & solid block making, internal & external wall plastering/rendering, bricklaying, mortar, and ground slabs.",
      keyAdvantage: "Enhanced cohesion, smooth troweling workability, and high water retention. Eliminates rapid moisture loss, preventing surface crazing, plaster shrinkage, and hairline wall cracking.",
      recommendedMix: "Block manufacturing: 32–35 high-strength blocks per 50kg bag | Plastering: 1 bag : 4 wheelbarrows fine washed sand (1:4 ratio)",
      waterRatio: "30 – 32 Liters clean water per 50kg bag (for plaster/mortar)",
      curingRecommendation: "Water spray blocks twice daily for minimum 5 to 7 days before hauling to construction site.",
      detailUrl: "/products/star-solid-32-5r"
    }
  ];

  const comparisonRows = [
    {
      feature: "Intended Primary Use",
      star42: "Heavy reinforced structural concrete (columns, beams, slabs)",
      star32: "Sandcrete blocks, masonry bricklaying, plastering & screeds"
    },
    {
      feature: "2-Day Early Compressive Strength",
      star42: "≥ 20.0 MPa (Rapid Hardening)",
      star32: "≥ 10.0 MPa (Standard Set)"
    },
    {
      feature: "28-Day Structural Break",
      star42: "42.5 – 55.0 MPa",
      star32: "32.5 – 42.5 MPa"
    },
    {
      feature: "Formwork Stripping Timeline",
      star42: "Accelerated (strip vertical sides in 24–36 hrs)",
      star32: "Standard curing cycle (7–14 days for structural props)"
    },
    {
      feature: "Plaster & Trowel Workability",
      star42: "Moderate (coarser aggregate concrete mixes)",
      star32: "Superior plasticity & high water retention (anti-crazing)"
    },
    {
      feature: "Standard Batch Proportion",
      star42: "1 : 1.5 : 3 (Cement : Sand : Granite Stones)",
      star32: "1 : 4 (Cement : Fine Sand for Plastering)"
    },
    {
      feature: "Sandcrete Block Yield",
      star42: "Not recommended for hollow blocks (over-specified)",
      star32: "32 to 35 high-strength solid/hollow blocks per 50kg bag"
    },
    {
      feature: "Official Bag Color & Marking",
      star42: "Red corporate branding with 42.5R classification",
      star32: "Blue corporate branding with 32.5R classification"
    }
  ];

  return (
    <section id="products-knowledge" className="py-20 sm:py-24 bg-[#F7F6F3] border-b border-neutral-200 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 reveal-init">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#B91C1C]">
              Products Knowledge
            </span>
            <span className="text-neutral-400 text-xs">•</span>
            <span className="text-neutral-500 font-mono text-xs">
              Practical Builder & Contractor Guide
            </span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight leading-tight">
            Certified Formulations & Practical Application Knowledge
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-4 leading-relaxed font-normal">
            Star Cement manufactures strictly two certified Portland Limestone Cement formulations conforming to Ghana Standards Authority mandatory standard <strong>GS 1118:2024</strong>. Select the exact grade tailored to your structural engineering requirements.
          </p>
        </div>

        {/* 2 Detailed Product Knowledge Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-16 stagger-children">
          {productKnowledge.map((p) => {
            const isRed = p.theme === 'red';
            const accentBorder = isRed ? 'border-t-4 border-t-[#B91C1C]' : 'border-t-4 border-t-[#1E3A8A]';
            const accentBadgeBg = isRed ? 'bg-red-50 text-[#B91C1C] border-red-200' : 'bg-blue-50 text-[#1E3A8A] border-blue-200';
            const accentText = isRed ? 'text-[#B91C1C]' : 'text-[#1E3A8A]';
            
            return (
              <div
                key={p.id}
                className={`bg-white rounded-2xl border border-neutral-200/90 p-7 sm:p-9 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${accentBorder}`}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex justify-between items-start mb-4 pb-4 border-b border-neutral-100">
                    <div>
                      <span className={`text-[11px] font-mono font-bold uppercase px-2.5 py-1 rounded-xs border ${accentBadgeBg} inline-block mb-2`}>
                        {p.badge}
                      </span>
                      <h3 className="font-serif font-bold text-2xl text-neutral-950">
                        {p.name}
                      </h3>
                      <span className="text-xs text-neutral-500 font-mono">
                        {p.category} • {p.bagColor}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-neutral-400 bg-neutral-100 px-2 py-1 rounded">
                      GS 1118:2024
                    </span>
                  </div>

                  {/* Core Compressive Strength Highlight */}
                  <div className="grid grid-cols-2 gap-4 p-4 bg-[#F8F9FA] rounded-xl border border-neutral-200/80 mb-6">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-neutral-400 block">
                        2-Day Rapid Set
                      </span>
                      <strong className="text-lg sm:text-xl font-mono text-neutral-950 block mt-0.5">
                        {p.twoDayStrength.split(' ')[0]} {p.twoDayStrength.split(' ')[1]}
                      </strong>
                      <span className="text-[10px] text-neutral-500 font-mono">
                        High early strength
                      </span>
                    </div>
                    <div className="border-l border-neutral-200 pl-4">
                      <span className="text-[10px] font-mono uppercase text-neutral-400 block">
                        28-Day Structural Break
                      </span>
                      <strong className={`text-lg sm:text-xl font-mono font-bold block mt-0.5 ${accentText}`}>
                        {p.twentyEightDayStrength.split(' ')[0]} {p.twentyEightDayStrength.split(' ')[1]}
                      </strong>
                      <span className="text-[10px] text-neutral-500 font-mono">
                        Guaranteed minimum
                      </span>
                    </div>
                  </div>

                  {/* Practical Knowledge Points */}
                  <div className="space-y-4 mb-8 text-xs sm:text-sm text-neutral-700">
                    <div>
                      <strong className="font-mono text-xs uppercase text-neutral-900 block mb-1 flex items-center gap-1.5">
                        <CheckCircle2 className={`w-3.5 h-3.5 ${accentText}`} />
                        Best Structural Applications
                      </strong>
                      <p className="text-neutral-600 leading-relaxed font-sans pl-5">
                        {p.idealUse}
                      </p>
                    </div>

                    <div>
                      <strong className="font-mono text-xs uppercase text-neutral-900 block mb-1 flex items-center gap-1.5">
                        <Sparkles className={`w-3.5 h-3.5 ${accentText}`} />
                        Builder & Contractor Advantage
                      </strong>
                      <p className="text-neutral-600 leading-relaxed font-sans pl-5">
                        {p.keyAdvantage}
                      </p>
                    </div>

                    <div>
                      <strong className="font-mono text-xs uppercase text-neutral-900 block mb-1 flex items-center gap-1.5">
                        <CalcIcon className={`w-3.5 h-3.5 ${accentText}`} />
                        Recommended Mix Proportions
                      </strong>
                      <p className="text-neutral-900 font-mono text-xs bg-neutral-100 p-2.5 rounded ml-5">
                        {p.recommendedMix}
                      </p>
                    </div>

                    <div className="pl-5 text-[11px] text-neutral-500 font-mono">
                      Water requirement: {p.waterRatio}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-6 border-t border-neutral-100 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleDownload(p.id)}
                    className="flex-1 py-3 px-4 bg-neutral-100 hover:bg-neutral-200 text-xs font-mono font-semibold text-neutral-900 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {downloadedId === p.id ? (
                      <>
                        <Check className="w-4 h-4 text-[#B91C1C]" />
                        <span>TDS Downloaded</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4 text-neutral-500" />
                        <span>Download TDS Spec</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => onSelectProductForQuote?.(p.id)}
                    className="flex-1 py-3 px-4 bg-[#B91C1C] hover:bg-[#991B1B] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm hover:shadow transition-all text-center cursor-pointer"
                  >
                    Order Dispatch
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Side-by-Side Product Comparison Table (NO Clinker Column!) */}
        <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm mb-16">
          <div className="p-6 sm:p-8 border-b border-neutral-100 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <span className="font-mono text-xs text-[#B91C1C] uppercase font-bold tracking-wider block mb-1">
                Practical Comparison Guide
              </span>
              <h3 className="font-serif text-2xl font-bold text-neutral-950">
                Which Cement Formulation Should You Choose?
              </h3>
            </div>
            <span className="font-mono text-xs text-neutral-500">
              Conforming to GS 1118:2024
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse font-sans">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50 text-neutral-700 uppercase tracking-wider text-xs font-mono">
                  <th className="py-4 px-6 font-bold">Engineering Criteria</th>
                  <th className="py-4 px-6 font-bold text-[#B91C1C]">Star Super 42.5R (Structural)</th>
                  <th className="py-4 px-6 font-bold text-[#1E3A8A]">Star Solid 32.5R (General Purpose)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 text-neutral-700">
                {comparisonRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-neutral-50/70 transition-colors">
                    <td className="py-4 px-6 font-semibold text-neutral-950 font-mono text-xs">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-neutral-900 bg-red-50/20">
                      {row.star42}
                    </td>
                    <td className="py-4 px-6 text-neutral-900 bg-blue-50/20">
                      {row.star32}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 11-Point Bag Marking Anatomy Guide */}
        <div className="bg-white rounded-2xl border border-neutral-200 p-8 sm:p-12 shadow-sm mb-16">
          <div className="max-w-3xl mb-10">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#B91C1C] block mb-2">
              Statutory Bag Authentication
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-950">
              11-Point Bag Markings & Anti-Counterfeit Guide
            </h3>
            <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
              Every authentic 50kg bag dispatched from Star Cement Group of companies Africa features mandatory legal markings under Ghana Standards Authority <strong>GS 1118-1:2024</strong>. Always inspect bags before pouring.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products[0].labels.map((item) => (
              <div key={item.code} className="p-4 bg-[#F8F9FA] rounded-xl border border-neutral-200/80 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-red-100 text-[#B91C1C] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    {item.code}
                  </span>
                  <strong className="font-mono text-xs uppercase text-neutral-900">{item.term}</strong>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed pl-8">
                  {item.note}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
            <span>Net weight: 50kg ± 0.5kg per sack • Multi-ply moisture-resistant kraft paper</span>
            <Link
              to="/products/bag-anatomy"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B91C1C] hover:text-red-700 transition-colors"
            >
              <span>View Full Bag Anatomy Spec</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Quick Batch Mix Calculator Preview Trigger */}
        <div className="p-8 bg-[#161C22] rounded-2xl text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border border-neutral-800">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B91C1C] block mb-1">
              On-Site Batch Calculator
            </span>
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Calculate Exact Bags, Sand & Granite for Your Concrete Pour
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl leading-relaxed">
              Use our built-in mix design calculator to eliminate material wastage on slabs, columns, beams, or sandcrete block projects.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onOpenCalculator}
              className="px-5 py-3 bg-[#B91C1C] hover:bg-[#991B1B] text-white text-xs font-bold uppercase tracking-wider rounded-sm shadow-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <CalcIcon className="w-4 h-4" />
              <span>Launch Mix Calculator</span>
            </button>
            <button
              type="button"
              onClick={onOpenDealers}
              className="px-5 py-3 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold uppercase tracking-wider rounded-sm border border-neutral-700 transition-all flex items-center gap-2 cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-[#B91C1C]" />
              <span>Find Authorized Dealer</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
