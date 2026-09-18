import React from 'react';
import { Link } from 'react-router-dom';
import Products from '../components/Products';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Calculator, 
  Truck, 
  ChevronRight, 
  Layers, 
  FileText, 
  ArrowRight 
} from 'lucide-react';

export default function ProductsPage({ 
  products, 
  onSelectProductForQuote, 
  onOpenCalculator 
}) {
  const technicalMatrix = [
    { param: 'Standard Classification', star42: 'CEM II/A-L 42.5R', star32: 'CEM II/B-L 32.5R', standard: 'GS 1118-1:2024' },
    { param: '2-Day Compressive Strength', star42: '≥ 24.5 MPa (Rapid)', star32: '≥ 18.0 MPa (Early)', standard: 'EN 196-1' },
    { param: '28-Day Compressive Strength', star42: '≥ 52.5 MPa (High Peak)', star32: '≥ 38.5 MPa (Standard)', standard: 'EN 196-1' },
    { param: 'Initial Setting Time', star42: '135 - 165 Minutes', star32: '150 - 180 Minutes', standard: '≥ 60 Mins (Min)' },
    { param: 'Soundness (Le Chatelier)', star42: '0.8 - 1.2 mm', star32: '0.9 - 1.4 mm', standard: '≤ 10 mm (Max)' },
    { param: 'Specific Surface (Blaine Fineness)', star42: '4,250 cm²/g', star32: '3,800 cm²/g', standard: 'ASTM C204' },
    { param: 'Sulfate Content (SO₃)', star42: '2.45%', star32: '2.30%', standard: '≤ 3.5% (Max)' },
    { param: 'Chloride Content (Cl⁻)', star42: '0.035%', star32: '0.040%', standard: '≤ 0.10% (Max)' },
    { param: 'Loss on Ignition (LOI)', star42: '3.8%', star32: '4.2%', standard: '≤ 5.0% (Max)' }
  ];

  return (
    <div className="bg-[#F7F6F3] min-h-screen">
      
      {/* 1. Page Header & Breadcrumbs */}
      <section className="bg-white border-b border-neutral-200 pt-10 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-neutral-900 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-[#B91C1C] font-bold">Certified Products</span>
          </nav>

          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-3">
              Ghana Standards Authority • GS 1118:2024
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-950 tracking-tight leading-tight mb-4">
              High-Strength Portland Limestone Cements
            </h1>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              Star Cement manufactures strictly two certified Portland Limestone Cement formulations conforming to Ghana Standards Authority specification <strong>GS 1118:2024</strong>. Available in palletized 50kg bags and bulk pneumatic tanker deliveries nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Core Products Display & 11-Point Bag Marking Anatomy */}
      <Products 
        products={products}
        onSelectProductForQuote={onSelectProductForQuote} 
      />

      {/* 3. Comprehensive Technical Engineering Specification Matrix */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B91C1C]">
              Laboratory Test Data
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 mt-1 mb-2">
              Chemical & Mechanical Performance Matrix
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Full certified compliance values derived from 2-hour automated XRF spectrometry and physical hydraulic compression testing at the Tema Terminal Laboratory.
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-neutral-200 shadow-sm">
            <table className="w-full text-left border-collapse tech-table">
              <thead>
                <tr className="bg-[#F8F9FA]">
                  <th className="py-3 px-4 font-mono text-xs font-bold uppercase text-neutral-700">Engineering Parameter</th>
                  <th className="py-3 px-4 font-mono text-xs font-bold uppercase text-[#B91C1C]">Star Super 42.5R</th>
                  <th className="py-3 px-4 font-mono text-xs font-bold uppercase text-neutral-800">Star Solid 32.5R</th>
                  <th className="py-3 px-4 font-mono text-xs font-bold uppercase text-neutral-500">Statutory Benchmark</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {technicalMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50/80 transition-colors">
                    <td className="py-3 px-4 text-xs font-semibold text-neutral-900">{row.param}</td>
                    <td className="py-3 px-4 text-xs font-mono font-bold text-[#B91C1C]">{row.star42}</td>
                    <td className="py-3 px-4 text-xs font-mono font-semibold text-neutral-800">{row.star32}</td>
                    <td className="py-3 px-4 text-xs font-mono text-neutral-500">{row.standard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 p-4 bg-[#F8F9FA] rounded-lg border border-neutral-200">
            <div className="flex items-center gap-3 text-xs text-neutral-600">
              <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span>Independent compliance certificates available for civil contractor submittals and engineering audits.</span>
            </div>
            <button
              type="button"
              onClick={onOpenCalculator}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B91C1C] hover:underline cursor-pointer"
            >
              <Calculator className="w-4 h-4" />
              <span>Launch Batch Mix Design Tool →</span>
            </button>
          </div>

        </div>
      </section>

      {/* 4. Bulk Tanker vs Palletized Sacks Dispatch Logistics */}
      <section className="py-16 bg-[#F7F6F3] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B91C1C]">
              Procurement Formats
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 mt-1">
              Flexible Packaging & Bulk Logistics Options
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Palletized Bagged Cement */}
            <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded mb-3 inline-block">
                  Palletized Delivery
                </span>
                <h3 className="text-xl font-serif font-bold text-neutral-900 mb-2">50kg Multi-Ply Paper Sacks</h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                  Delivered on wooden industrial pallets (typically 40 bags / 2 Metric Tonnes per pallet) securely stretch-wrapped with weather-resistant plastic hoods for site protection.
                </p>
                <ul className="space-y-2 text-xs text-neutral-700 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Micro-perforated multi-wall kraft paper for rapid air venting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Automated robotic palletizing and tamper-evident shrink hood</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Direct flatbed truck delivery to job sites nationwide</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => onSelectProductForQuote('star-solid-32')}
                className="w-full py-2.5 bg-neutral-900 hover:bg-[#B91C1C] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors text-center cursor-pointer"
              >
                Inquire Bagged Delivery
              </button>
            </div>

            {/* Bulk Pneumatic Tanker Dispatch */}
            <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-red-100 text-[#B91C1C] px-2 py-0.5 rounded mb-3 inline-block">
                  Industrial Bulk Dispatch
                </span>
                <h3 className="text-xl font-serif font-bold text-neutral-900 mb-2">Pneumatic Bulk Tankers</h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                  For major commercial ready-mix batching plants, precast concrete yards, and port infrastructure requiring pressurized pneumatic offloading directly into on-site storage silos.
                </p>
                <ul className="space-y-2 text-xs text-neutral-700 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>30 MT and 45 MT high-capacity tanker fleet</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>24/7 continuous weighbridge and automated loading at Tema Terminal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Sealed discharge fittings ensuring zero moisture ingress during transit</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => onSelectProductForQuote('star-super-42')}
                className="w-full py-2.5 bg-[#B91C1C] hover:bg-[#991B1B] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors text-center cursor-pointer shadow-sm"
              >
                Inquire Bulk Pneumatic Tanker
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
