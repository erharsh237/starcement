import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronRight, 
  Layers, 
  FileText, 
  Eye, 
  QrCode, 
  Scale, 
  Lock, 
  PhoneCall,
  Check,
  Info
} from 'lucide-react';
import { products } from '../../data/products';
import BagLayerPeeler from '../../components/BagLayerPeeler';

export default function BagAnatomyPage({ onOpenQuote }) {
  const [activeProductTab, setActiveProductTab] = useState('star-42-5r');
  const [selectedPoint, setSelectedPoint] = useState(null);

  const currentProduct = products.find(p => p.id === activeProductTab) || products[0];

  const counterfeitChecklist = [
    {
      title: 'Packaging Seam & Stitching',
      genuine: 'Hermetically micro-creped valve bag with automated thermal glue fold. No loose threads.',
      fake: 'Hand-sewn or rough twine top-stitching, indicating manual depot re-bagging of swept floor cement.',
      danger: 'High moisture absorption, pre-hydrated lumps, loss of structural compressive strength.'
    },
    {
      title: 'Inkjet Batch Code & Shift Time',
      genuine: 'High-definition black matrix inkjet print along bottom gusset: [BATCH / TIME / SILO / GSA LICENSE].',
      fake: 'Absence of batch codes, smeared rubber-stamp markings, or illegible dates.',
      danger: 'Untraceable origin. Violates Ghana Standards Authority legal sales guidelines.'
    },
    {
      title: 'Net Bag Weight Verification',
      genuine: 'Exact 50.0 kg ± 0.5 kg calibrated by automated electronic Haver & Boecker rotary packing scale.',
      fake: 'Inconsistent bag mass ranging from 42 kg to 47 kg weighed at uncalibrated retail scales.',
      danger: 'Severe batch mix distortion resulting in under-strength concrete and structural beam deflection.'
    },
    {
      title: 'Paper Quality & Multi-Wall Ply',
      genuine: '3-ply virgin Scandinavian extensible kraft paper with interior micro-perforated polyethylene barrier.',
      fake: 'Single or two-ply recycled paper prone to bursting, tearing easily when handled by stevedores.',
      danger: 'Premature atmospheric moisture ingress causing hardened cement boulders inside the bag.'
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
            <Link to="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#B91C1C] font-bold">11-Point Bag Anatomy</span>
          </nav>

          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-3">
              Ghana Standards Authority Compliance (GS 1118-1:2024)
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
              11-Point Bag Markings & Anti-Counterfeit Guide
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              Ghanaian construction regulations mandate clear, permanent labeling on every cement bag sold nationwide. Learn how to verify authentic Star Cement packaging and protect your project from dangerous adulterated counterfeits.
            </p>
          </div>

        </div>

        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-center">
          <ShieldCheck className="w-96 h-96 text-white" />
        </div>
      </section>

      {/* 2. Interactive Product Bag Selector */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-1">
                Packaging Variant
              </span>
              <h2 className="font-serif text-2xl font-bold text-neutral-900">
                Select Cement Grade to Inspect
              </h2>
            </div>

            <div className="inline-flex p-1 bg-neutral-100 rounded-sm border border-neutral-200">
              <button
                onClick={() => { setActiveProductTab('star-42-5r'); setSelectedPoint(null); }}
                className={`px-5 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-all ${
                  activeProductTab === 'star-42-5r'
                    ? 'bg-[#B91C1C] text-white shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Star Super 42.5R (Red)
              </button>
              <button
                onClick={() => { setActiveProductTab('star-32-5r'); setSelectedPoint(null); }}
                className={`px-5 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-all ${
                  activeProductTab === 'star-32-5r'
                    ? 'bg-[#2563EB] text-white shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Star Solid 32.5R (Blue)
              </button>
            </div>
          </div>

          {/* Interactive Bag Visual and Label Points Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Bag Visual Representation */}
            <div className="lg:col-span-5 bg-[#F7F6F3] p-8 rounded-sm border border-neutral-200 flex flex-col items-center">
              <div 
                className={`w-full max-w-[320px] aspect-[1/1.4] rounded-sm p-6 flex flex-col justify-between border-4 shadow-xl relative overflow-hidden transition-colors ${
                  activeProductTab === 'star-42-5r' 
                    ? 'bg-gradient-to-b from-[#FFF5F5] to-[#FEE2E2] border-[#B91C1C]' 
                    : 'bg-gradient-to-b from-[#EFF6FF] to-[#DBEAFE] border-[#2563EB]'
                }`}
              >
                {/* Simulated Authentic Bag Graphics */}
                <div className="text-center border-b-2 border-neutral-900/10 pb-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 font-bold block">
                    {currentProduct.labels[0].term}
                  </span>
                  <div className="flex items-center justify-center gap-1 my-1">
                    <span className="text-amber-500 text-sm">★★★★★</span>
                  </div>
                  <h3 className={`font-serif text-2xl font-black uppercase tracking-tight ${
                    activeProductTab === 'star-42-5r' ? 'text-[#B91C1C]' : 'text-[#2563EB]'
                  }`}>
                    {currentProduct.name}
                  </h3>
                  <span className="font-mono text-xs font-bold text-neutral-800 uppercase block">
                    {currentProduct.designation}
                  </span>
                </div>

                <div className="my-auto text-center space-y-2 py-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-600 block">
                    {currentProduct.labels[6].term}
                  </span>
                  <div className="inline-block px-3 py-1 bg-neutral-900 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-xs">
                    {currentProduct.standard}
                  </div>
                  <p className="text-[10px] font-mono text-neutral-500 italic mt-1">
                    "{currentProduct.labels[8].term}"
                  </p>
                </div>

                <div className="border-t-2 border-neutral-900/10 pt-3 flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-neutral-800">
                    {currentProduct.labels[9].term}
                  </span>
                  <span className={`px-2.5 py-1 text-white font-black rounded-xs ${
                    activeProductTab === 'star-42-5r' ? 'bg-[#B91C1C]' : 'bg-[#2563EB]'
                  }`}>
                    50 kg NET
                  </span>
                </div>

                {/* Simulated Inkjet Batch Code */}
                <div className="mt-2 text-center text-[9px] font-mono text-neutral-500 bg-neutral-900/5 py-1 rounded-xs">
                  BATCH: ST-2025-42A • SILO-03 • GSA LICENSE: CMD-CEMT-029
                </div>
              </div>

              <div className="mt-4 text-center">
                <span className="font-mono text-xs text-neutral-500">
                  Pallet Unit: 40 Bags = 2.0 Metric Tons
                </span>
              </div>
            </div>

            {/* Detailed 11 Points Listing */}
            <div className="lg:col-span-7 space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 font-bold block mb-2">
                11 Mandatory Statutory Identifiers
              </span>

              <div className="space-y-2.5 max-h-[580px] overflow-y-auto pr-2">
                {currentProduct.labels.map((lbl, idx) => (
                  <div
                    key={lbl.code}
                    onClick={() => setSelectedPoint(idx)}
                    className={`p-3.5 rounded-sm border transition-all cursor-pointer ${
                      selectedPoint === idx
                        ? 'bg-white border-[#B91C1C] shadow-sm ring-1 ring-[#B91C1C]'
                        : 'bg-white border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className={`w-6 h-6 rounded-xs flex items-center justify-center font-mono text-xs font-bold shrink-0 ${
                        activeProductTab === 'star-42-5r' ? 'bg-red-100 text-[#B91C1C]' : 'bg-blue-100 text-[#2563EB]'
                      }`}>
                        {lbl.code}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-0.5">
                          <h4 className="font-mono text-xs font-bold text-neutral-900 uppercase">
                            {lbl.term}
                          </h4>
                          <span className="text-[10px] font-mono text-neutral-400">GS 1118-1</span>
                        </div>
                        <p className="text-xs text-neutral-600 leading-relaxed">
                          {lbl.note}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2B. Interactive 4-Ply Bag X-Ray Layer Peeler */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BagLayerPeeler />
        </div>
      </section>

      {/* 3. Anti-Counterfeiting Checklist */}
      <section className="py-16 bg-[#F7F6F3] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-2">
              Site Forensics & Field Checks
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900">
              How to Identify Adulterated & Re-Bagged Cement
            </h2>
            <p className="text-neutral-600 text-xs sm:text-sm max-w-2xl mt-1">
              Counterfeiters often collect empty authentic bags and refill them with contaminated sweeping dust, fine quarry tailings, or stale hydrated cement. Use these 4 physical tests before accepting delivery:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {counterfeitChecklist.map((item, idx) => (
              <div key={idx} className="bg-white border border-neutral-200 rounded-sm p-6">
                <h3 className="font-serif text-base font-bold text-neutral-900 mb-3 flex items-center gap-2">
                  <Eye className="w-4 h-4 text-[#B91C1C]" />
                  {item.title}
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="bg-emerald-50 p-3 rounded-xs border border-emerald-100">
                    <span className="font-mono text-emerald-800 font-bold uppercase text-[10px] block mb-1">
                      ✓ Authentic Star Cement
                    </span>
                    <p className="text-emerald-950">{item.genuine}</p>
                  </div>

                  <div className="bg-red-50 p-3 rounded-xs border border-red-100">
                    <span className="font-mono text-[#B91C1C] font-bold uppercase text-[10px] block mb-1">
                      ✕ Counterfeit Warning Sign
                    </span>
                    <p className="text-red-950">{item.fake}</p>
                  </div>

                  <div className="pt-2 text-[11px] text-neutral-500 flex items-start gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Structural Danger:</strong> {item.danger}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Whistleblower & Rapid Response Hotline */}
      <section className="py-16 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-2">
                Quality Assurance Hotline
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
                Suspect Counterfeit Cement on Your Job Site?
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed font-normal max-w-2xl mb-4">
                Star Cement collaborates directly with the Ghana Standards Authority (GSA) Market Surveillance Directorate and the Ghana Police Criminal Investigation Department (CID) to shut down illicit re-bagging warehouses.
              </p>
              <p className="text-xs text-neutral-400 font-mono">
                Report suspicious retail sellers or underweight bags. Our technical field team will collect samples for laboratory verification within 24 hours.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a 
                href="tel:+233302789000"
                className="bg-[#B91C1C] hover:bg-[#991B1B] text-white px-6 py-3.5 rounded-xs font-mono text-xs uppercase tracking-wider font-bold transition-all text-center inline-flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                Call Surveillance Hotline
              </a>
              <button 
                onClick={onOpenQuote}
                className="bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 px-6 py-3.5 rounded-xs font-mono text-xs uppercase tracking-wider font-bold transition-all text-center"
              >
                Order Factory Direct (100% Authentic)
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Inter-navigation */}
      <section className="py-8 bg-[#F7F6F3] border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link 
              to="/products/star-super-42-5r" 
              className="inline-flex items-center gap-2 text-neutral-700 hover:text-[#B91C1C] font-mono text-xs uppercase tracking-wider font-bold transition-colors"
            >
              ← View Star Super 42.5R Specifications
            </Link>
            <Link 
              to="/plants/tema-terminal" 
              className="inline-flex items-center gap-2 text-neutral-700 hover:text-[#B91C1C] font-mono text-xs uppercase tracking-wider font-bold transition-colors"
            >
              Tour Tema Grinding & Packing Terminal →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
