import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  Download, 
  CheckCircle2, 
  ChevronRight, 
  Layers, 
  FileText, 
  Truck, 
  Calculator, 
  Grid, 
  Check,
  Award,
  MapPin
} from 'lucide-react';
import { products } from '../../data/products';

export default function Product32Page({ onSelectProductForQuote, onOpenCalculator }) {
  const [downloaded, setDownloaded] = useState(false);
  const p = products[1]; // star-32-5r

  const handleDownloadTds = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
    alert('Technical Data Sheet (TDS) for Star Cement CEM II/B-L 32.5R initiated: Star_Cement_CEM_II_B_L_32_5R_TDS_2025.pdf');
  };

  const blockYieldData = [
    {
      size: '5" Hollow Sandcrete Blocks (125mm)',
      application: 'Internal partition walls, domestic fencing, lightweight perimeter structures',
      yieldRange: '35 – 40 Blocks per 50kg Bag',
      sandRatio: '1 Bag : 3.5 – 4 Wheelbarrows Sharp Quarry Sand',
      strengthTarget: '≥ 3.5 MPa (Complies with GS standard for partition blocks)'
    },
    {
      size: '6" Hollow Sandcrete Blocks (150mm)',
      application: 'External residential walls, single-story load-bearing envelopes',
      yieldRange: '28 – 32 Blocks per 50kg Bag',
      sandRatio: '1 Bag : 3.0 – 3.5 Wheelbarrows Sharp Sand',
      strengthTarget: '≥ 4.5 MPa (Load-bearing masonry benchmark)'
    },
    {
      size: '9" Solid Heavy Blocks (225mm)',
      application: 'Sub-structure foundation walls, heavy retaining boundaries, commercial perimeter',
      yieldRange: '18 – 22 Blocks per 50kg Bag',
      sandRatio: '1 Bag : 2.5 – 3.0 Wheelbarrows Clean Coarse Sand',
      strengthTarget: '≥ 5.0 MPa (High shear & earth pressure resistance)'
    }
  ];

  const plasterMortarMixes = [
    {
      purpose: 'Internal Smooth Wall Plaster (Rendering)',
      ratio: '1 Bag Cement : 4 Wheelbarrows Clean Pit/River Sand (1:4)',
      advantage: 'Smooth, buttery troweling with exceptional plastic cohesion and zero crazing due to reactive micro-limestone water retention.'
    },
    {
      purpose: 'External Weather-Resistant Plaster',
      ratio: '1 Bag Cement : 3 Wheelbarrows Clean Sharp Sand (1:3)',
      advantage: 'Tight pore compaction prevents heavy monsoon rain penetration and mold colonization.'
    },
    {
      purpose: 'Bricklaying & Masonry Bedding Mortar',
      ratio: '1 Bag Cement : 3.5 Wheelbarrows Sand (1:3.5)',
      advantage: 'High tensile bond strength ensures blocks stay firmly anchored under building settlement.'
    }
  ];

  return (
    <div className="bg-[#F7F6F3] min-h-screen">
      
      {/* 1. Header & Breadcrumbs - Clean, Light Corporate Layout */}
      <section className="bg-white border-b border-neutral-200 pt-10 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-neutral-900 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            <Link to="/products" className="hover:text-neutral-900 transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-[#B91C1C] font-bold">CEM II/B-L 32.5R</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Product Information */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="bg-red-50 text-[#B91C1C] border border-red-200 px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider rounded-xs">
                  CEM II/B-L 32.5R
                </span>
                <span className="bg-neutral-100 text-neutral-700 border border-neutral-200 px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-xs">
                  GS 1118:2024 Standard
                </span>
                <span className="bg-neutral-100 text-neutral-700 border border-neutral-200 px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-xs">
                  Portland Limestone Cement
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-950 tracking-tight leading-tight mb-4">
                Star Cement CEM II/B-L 32.5R
              </h1>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal mb-8">
                Star Cement CEM II/B-L 32.5R is a versatile and economical Portland Limestone Cement intended for general-purpose construction. It provides good early strength, ease of use, and reliable performance for block making, masonry works, plastering, rendering, and low- to medium-strength concrete applications. This product is well-suited for everyday building needs, particularly for residential and small to medium-scale projects.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/dealers"
                  className="bg-[#B91C1C] hover:bg-[#991B1B] text-white px-6 py-3.5 rounded-xs font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-sm inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Find an Authorized Dealer
                </Link>

                <button
                  onClick={() => onSelectProductForQuote && onSelectProductForQuote(p?.id || 'star-32-5r')}
                  className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-3.5 rounded-xs font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-sm inline-flex items-center gap-2"
                >
                  <Building2 className="w-4 h-4" />
                  Request Commercial Quote
                </button>

                <button
                  onClick={handleDownloadTds}
                  className="bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 px-5 py-3.5 rounded-xs font-mono text-xs uppercase tracking-wider font-bold transition-all inline-flex items-center gap-2"
                >
                  {downloaded ? <Check className="w-4 h-4 text-emerald-600" /> : <Download className="w-4 h-4 text-neutral-500" />}
                  {downloaded ? 'TDS Downloaded' : 'Technical Datasheet (PDF)'}
                </button>
              </div>
            </div>

            {/* Right: Technical Specifications Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#F8F9FA] border border-neutral-200 rounded-xl p-6 sm:p-7 shadow-sm">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block">
                      Official Specifications
                    </span>
                    <h3 className="font-serif text-lg font-bold text-neutral-900">
                      Certified Parameters
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono font-bold bg-neutral-200 text-neutral-800 px-2.5 py-1 rounded-xs">
                    GS 1118:2024
                  </span>
                </div>

                <div className="space-y-3.5 text-xs">
                  <div className="flex justify-between items-center py-1.5 border-b border-neutral-200/70">
                    <span className="text-neutral-600 font-medium">Standard Compliance</span>
                    <span className="font-mono font-bold text-neutral-900">GS 1118:2024</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-neutral-200/70">
                    <span className="text-neutral-600 font-medium">28-Day Compressive Strength</span>
                    <span className="font-mono font-bold text-[#B91C1C] text-sm">≥ 32.5 MPa</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-neutral-200/70">
                    <span className="text-neutral-600 font-medium">2-Day Early Strength</span>
                    <span className="font-mono font-bold text-neutral-900">≥ 10.0 MPa</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-neutral-200/70">
                    <span className="text-neutral-600 font-medium">Initial Setting Time</span>
                    <span className="font-mono text-neutral-800">≥ 75 Minutes</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-neutral-200/70">
                    <span className="text-neutral-600 font-medium">Soundness (Expansion)</span>
                    <span className="font-mono text-neutral-800">≤ 10 mm</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-neutral-200/70">
                    <span className="text-neutral-600 font-medium">Fineness (Blaine)</span>
                    <span className="font-mono text-neutral-800">≥ 320 m²/kg</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-neutral-200/70">
                    <span className="text-neutral-600 font-medium">Packaging Formats</span>
                    <span className="font-mono text-neutral-900">50kg Bags & Bulk Tankers</span>
                  </div>
                  <div className="flex justify-between items-center pt-1.5">
                    <span className="text-neutral-600 font-medium">Primary Applications</span>
                    <span className="text-neutral-900 font-semibold text-right">Block Making, Plastering & Masonry</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Sandcrete Block Yield Analysis Section */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-2">
                Commercial Block Making
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900">
                Recommended Sandcrete Block Yield Guidelines
              </h2>
              <p className="text-neutral-600 text-sm max-w-2xl mt-1">
                Engineered for maximum block output per bag, clean edges, and rapid early strength development for commercial block yards.
              </p>
            </div>

            <Link
              to="/calculator"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-mono font-bold text-[#B91C1C] hover:text-[#991B1B] bg-red-50 hover:bg-red-100 px-4 py-2.5 rounded-xs border border-red-200 shrink-0 transition-colors"
            >
              <Calculator className="w-4 h-4" />
              Open Cement Mix Calculator →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blockYieldData.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#F8F9FA] border border-neutral-200 rounded-lg p-6 hover:border-neutral-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Grid className="w-5 h-5 text-[#B91C1C]" />
                    <span className="font-mono text-[10px] uppercase font-bold text-neutral-600 bg-neutral-200/70 px-2 py-0.5 rounded-xs">
                      Standard Size
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-neutral-900 mb-2">
                    {item.size}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    {item.application}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-200 space-y-2.5 text-xs">
                  <div className="bg-white p-3 rounded-md border border-neutral-200">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase block">Typical Yield per Bag</span>
                    <span className="font-serif font-bold text-[#B91C1C] text-base">{item.yieldRange}</span>
                  </div>
                  <div className="text-[11px]">
                    <span className="text-neutral-500 font-mono uppercase block text-[10px]">Mix Proportion</span>
                    <span className="text-neutral-800 font-medium">{item.sandRatio}</span>
                  </div>
                  <div className="text-[11px]">
                    <span className="text-neutral-500 font-mono uppercase block text-[10px]">Compressive Benchmark</span>
                    <span className="text-neutral-900 font-semibold">{item.strengthTarget}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Plastering & Masonry Performance */}
      <section className="py-16 bg-[#F7F6F3] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-2">
                Plastering & Rendering
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
                Smooth Workability & Crack Resistance
              </h2>
              <p className="text-sm text-neutral-700 leading-relaxed mb-4">
                Masonry artisans across Ghana often face issues with cements drying too fast under the sun, causing surface crazing and web-like shrinkage cracks on freshly rendered walls.
              </p>
              <p className="text-sm text-neutral-700 leading-relaxed mb-6">
                Star Cement CEM II/B-L 32.5R uses high-purity interground limestone filler that improves water retention within the mortar mix during troweling, providing a smooth finish ready for painting.
              </p>

              <div className="space-y-3 text-xs">
                <div className="flex items-center gap-2.5 text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#B91C1C] shrink-0" />
                  <span>Reduces plaster sand rebound and jobsite waste</span>
                </div>
                <div className="flex items-center gap-2.5 text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#B91C1C] shrink-0" />
                  <span>Superior adhesion on porous sandcrete block surfaces</span>
                </div>
                <div className="flex items-center gap-2.5 text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#B91C1C] shrink-0" />
                  <span>Consistent workability window for ease of application</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-neutral-200 shadow-sm">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-4">
                Recommended Mortar & Plaster Proportions
              </span>

              <div className="space-y-5">
                {plasterMortarMixes.map((mix, idx) => (
                  <div key={idx} className="border-b border-neutral-100 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-serif font-bold text-neutral-900 text-sm">{mix.purpose}</h4>
                      <span className="font-mono text-xs font-bold text-neutral-700 bg-neutral-100 px-2.5 py-0.5 rounded-xs border border-neutral-200">
                        {mix.ratio.split(':')[0]}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-[#B91C1C] mb-1">{mix.ratio}</p>
                    <p className="text-xs text-neutral-600 leading-relaxed">{mix.advantage}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Comparison Table (32.5R vs 42.5R) */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-2">
              Application Guide
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900">
              When to Select CEM II/B-L 32.5R vs CEM II/A-L 42.5R
            </h2>
          </div>

          <div className="overflow-x-auto border border-neutral-200 rounded-lg shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-neutral-900 text-white">
                  <th className="p-4 font-mono font-bold uppercase tracking-wider">Project / Structural Element</th>
                  <th className="p-4 font-mono font-bold uppercase tracking-wider text-white bg-neutral-800">CEM II/B-L 32.5R</th>
                  <th className="p-4 font-mono font-bold uppercase tracking-wider text-red-400">CEM II/A-L 42.5R</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-semibold text-neutral-900">Sandcrete Block Manufacturing</td>
                  <td className="p-4 text-emerald-800 font-bold bg-emerald-50/50">Recommended Grade (Optimal Yield & Cost)</td>
                  <td className="p-4 text-neutral-500">Over-specified for standard partition blocks</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-semibold text-neutral-900">Wall Plastering & Rendering</td>
                  <td className="p-4 text-emerald-800 font-bold bg-emerald-50/50">Recommended Grade (Smooth & Crack-Free)</td>
                  <td className="p-4 text-neutral-500">Fast setting requires rapid troweling</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-semibold text-neutral-900">Single-Story Residential Floor Slabs</td>
                  <td className="p-4 text-emerald-800 font-bold bg-emerald-50/50">Economical & Effective Choice</td>
                  <td className="p-4 text-neutral-600">Applicable (Quicker formwork removal)</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-semibold text-neutral-900">Suspended Multi-Story Slabs & Columns</td>
                  <td className="p-4 text-neutral-400">Not Recommended for heavy structural frames</td>
                  <td className="p-4 text-[#B91C1C] font-bold">Mandatory High Early Strength Grade</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-4 font-semibold text-neutral-900">Precast Elements & Heavy Civil Works</td>
                  <td className="p-4 text-neutral-400">Not Recommended</td>
                  <td className="p-4 text-[#B91C1C] font-bold">Recommended Rapid Hardening Grade</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 5. Direct Action CTA */}
      <section className="py-14 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-2">
            Order & Supply
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Supplying Block Yards, Contractors & Distributors Nationwide
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto mb-8 font-normal">
            Available in 50kg paper bags and bulk pneumatic tanker deliveries directly from our Kpone manufacturing plant or through authorized dealers across Ghana.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/dealers"
              className="bg-[#B91C1C] hover:bg-[#991B1B] text-white px-8 py-3.5 rounded-xs font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-md inline-flex items-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              Find Authorized Dealer
            </Link>
            <Link 
              to="/contact"
              className="bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 px-6 py-3.5 rounded-xs font-mono text-xs uppercase tracking-wider font-bold transition-all"
            >
              Contact Sales Directorate
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Inter-navigation */}
      <section className="py-8 bg-[#F7F6F3] border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link 
              to="/products/star-super-42-5r" 
              className="inline-flex items-center gap-2 text-neutral-700 hover:text-[#B91C1C] font-mono text-xs uppercase tracking-wider font-bold transition-colors"
            >
              ← View Star Cement CEM II/A-L 42.5R (Structural)
            </Link>
            <Link 
              to="/products" 
              className="inline-flex items-center gap-2 text-neutral-700 hover:text-[#B91C1C] font-mono text-xs uppercase tracking-wider font-bold transition-colors"
            >
              View Full Product Portfolio →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

