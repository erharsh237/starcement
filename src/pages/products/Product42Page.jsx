import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  Download, 
  CheckCircle2, 
  ChevronRight, 
  TrendingUp, 
  Layers, 
  FileText, 
  Truck, 
  Calculator, 
  Zap, 
  Check,
  Clock,
  Scale,
  Award,
  MapPin
} from 'lucide-react';
import { products } from '../../data/products';

export default function Product42Page({ onSelectProductForQuote, onOpenCalculator }) {
  const [downloaded, setDownloaded] = useState(false);
  const p = products[0]; // star-42-5r

  const handleDownloadTds = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
    alert('Technical Data Sheet (TDS) for Star Cement CEM II/A-L 42.5R initiated: Star_Cement_CEM_II_A_L_42_5R_TDS_2025.pdf');
  };

  const mixDesigns = [
    {
      grade: 'C25/30',
      application: 'Suspended slabs, commercial columns, residential reinforced beams',
      ratio: '1 : 1.5 : 3 (Cement : Sand : Granite 20mm)',
      waterCementRatio: '0.45 – 0.50',
      characteristicStrength: '≥ 25 MPa (Cylinder) / 30 MPa (Cube at 28d)',
      targetSlump: '75 – 100 mm'
    },
    {
      grade: 'C30/37',
      application: 'Heavy industrial floors, bridge abutments, multi-story post-tensioned transfer slabs',
      ratio: '1 : 1.2 : 2.4 (Cement : Clean Quartz Sand : 20mm Granite)',
      waterCementRatio: '0.40 – 0.44',
      characteristicStrength: '≥ 30 MPa (Cylinder) / 37 MPa (Cube at 28d)',
      targetSlump: '100 – 120 mm (with superplasticizer)'
    },
    {
      grade: 'C40/50',
      application: 'High-rise core shear walls, precast bridge girders, marine port infrastructure',
      ratio: 'Engineered Batch Design (Consult Star Technical Services)',
      waterCementRatio: '0.36 – 0.38 (High-range PCE water reducer)',
      characteristicStrength: '≥ 40 MPa (Cylinder) / 50 MPa (Cube at 28d)',
      targetSlump: '150 – 180 mm (Pumpable)'
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
            <span className="text-[#B91C1C] font-bold">CEM II/A-L 42.5R</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Product Information */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="bg-red-50 text-[#B91C1C] border border-red-200 px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider rounded-xs">
                  CEM II/A-L 42.5R
                </span>
                <span className="bg-neutral-100 text-neutral-700 border border-neutral-200 px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-xs">
                  GS 1118:2024 Standard
                </span>
                <span className="bg-neutral-100 text-neutral-700 border border-neutral-200 px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-xs">
                  Rapid-Strength Portland Limestone
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-950 tracking-tight leading-tight mb-4">
                Star Cement CEM II/A-L 42.5R
              </h1>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal mb-8">
                Star Cement CEM II/A-L 42.5R is a rapid-strength Portland Limestone Cement formulated for fast-paced construction activities. It offers high early strength development, good workability, and consistent performance, making it suitable for reinforced concrete works, slabs, beams, columns, and general construction. Its balanced performance ensures quicker formwork removal while maintaining long-term strength and durability.
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
                  onClick={() => onSelectProductForQuote && onSelectProductForQuote(p?.id || 'star-42-5r')}
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
                    <span className="font-mono font-bold text-[#B91C1C] text-sm">≥ 42.5 MPa</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-neutral-200/70">
                    <span className="text-neutral-600 font-medium">2-Day High Early Strength</span>
                    <span className="font-mono font-bold text-neutral-900">≥ 20.0 MPa</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-neutral-200/70">
                    <span className="text-neutral-600 font-medium">Initial Setting Time</span>
                    <span className="font-mono text-neutral-800">≥ 60 Minutes</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-neutral-200/70">
                    <span className="text-neutral-600 font-medium">Soundness (Expansion)</span>
                    <span className="font-mono text-neutral-800">≤ 10 mm</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-neutral-200/70">
                    <span className="text-neutral-600 font-medium">Fineness (Blaine)</span>
                    <span className="font-mono text-neutral-800">≥ 340 m²/kg</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-neutral-200/70">
                    <span className="text-neutral-600 font-medium">Packaging Formats</span>
                    <span className="font-mono text-neutral-900">50kg Bags & Bulk Tankers</span>
                  </div>
                  <div className="flex justify-between items-center pt-1.5">
                    <span className="text-neutral-600 font-medium">Primary Applications</span>
                    <span className="text-neutral-900 font-semibold text-right">Reinforced Concrete, Slabs, Beams & Columns</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Key Engineering Advantages */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-2">
              Engineering Advantages
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900">
              Why Structural Engineers Specify CEM II/A-L 42.5R
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F8F9FA] p-6 rounded-lg border border-neutral-200 shadow-sm">
              <div className="w-10 h-10 rounded-md bg-red-50 flex items-center justify-center text-[#B91C1C] mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-neutral-900 mb-2">
                Rapid Early Strength Gain
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                Reaches high 2-day compressive break thresholds rapidly. Enables contractors to strip slab formwork ahead of schedule, accelerating multi-story cycle times safely.
              </p>
              <span className="text-[11px] font-mono text-[#B91C1C] font-bold">
                ≥ 20.0 MPa at 48 hours
              </span>
            </div>

            <div className="bg-[#F8F9FA] p-6 rounded-lg border border-neutral-200 shadow-sm">
              <div className="w-10 h-10 rounded-md bg-red-50 flex items-center justify-center text-[#B91C1C] mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-neutral-900 mb-2">
                Reinforced Structural Concrete
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                High-density microstructure provides low permeability, shielding internal steel rebar from aggressive coastal saline air in the Greater Accra maritime zone.
              </p>
              <span className="text-[11px] font-mono text-[#B91C1C] font-bold">
                Passivates rebar against corrosion
              </span>
            </div>

            <div className="bg-[#F8F9FA] p-6 rounded-lg border border-neutral-200 shadow-sm">
              <div className="w-10 h-10 rounded-md bg-red-50 flex items-center justify-center text-[#B91C1C] mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-neutral-900 mb-2">
                Consistent Slump & Workability
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                Advanced closed-circuit milling produces consistent particle size distribution. Delivers superior slump retention for concrete pumps on congested commercial job sites.
              </p>
              <span className="text-[11px] font-mono text-[#B91C1C] font-bold">
                Optimal pumpability with low bleed
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Structural Concrete Mix Design Reference */}
      <section className="py-16 bg-[#F7F6F3] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-2">
                Field Mix Specifications
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900">
                Recommended Concrete Proportions (CEM II/A-L 42.5R)
              </h2>
              <p className="text-neutral-600 text-sm max-w-2xl mt-1">
                Standard batching guidelines developed for local Ghanaian aggregates (quarry dust, sharp river sand, and 20mm granite).
              </p>
            </div>

            <Link
              to="/calculator"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-mono font-bold text-[#B91C1C] hover:text-[#991B1B] bg-red-50 hover:bg-red-100 px-4 py-2.5 rounded-xs border border-red-200 shrink-0 transition-colors"
            >
              <Calculator className="w-4 h-4" />
              Interactive Mix Calculator →
            </Link>
          </div>

          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm">
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {mixDesigns.map((mix, idx) => (
                  <div key={idx} className="border border-neutral-200 rounded-lg p-5 bg-[#F8F9FA] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-serif text-xl font-bold text-[#B91C1C]">{mix.grade}</span>
                        <span className="font-mono text-[10px] text-neutral-600 uppercase font-bold bg-neutral-200/80 px-2 py-0.5 rounded-xs">
                          {mix.waterCementRatio} w/c
                        </span>
                      </div>
                      <h4 className="font-semibold text-neutral-900 text-xs mb-3">{mix.application}</h4>
                      <div className="space-y-2 text-xs font-mono mb-4">
                        <div className="bg-white p-2 rounded border border-neutral-200">
                          <span className="text-[10px] text-neutral-400 block uppercase">Mix Ratio</span>
                          <span className="text-neutral-800 font-bold">{mix.ratio}</span>
                        </div>
                        <div className="bg-white p-2 rounded border border-neutral-200">
                          <span className="text-[10px] text-neutral-400 block uppercase">28-Day Target</span>
                          <span className="text-[#B91C1C] font-bold">{mix.characteristicStrength}</span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-neutral-200 text-[11px] text-neutral-600">
                      <span>Target Slump: </span>
                      <span className="font-mono font-medium text-neutral-900">{mix.targetSlump}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Packaging, Logistics & Bulk Capabilities */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="border border-neutral-200 p-6 rounded-lg bg-[#F8F9FA] shadow-sm">
              <Truck className="w-8 h-8 text-[#B91C1C] mb-4" />
              <h3 className="font-serif text-lg font-bold text-neutral-900 mb-2">
                Bulk Pneumatic Road Tankers
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                Direct pressurized silo discharge for commercial batching plants and major civil contracts with automated digital weight tickets.
              </p>
              <ul className="text-xs text-neutral-700 space-y-1.5 font-mono">
                <li>• Automated weighbridge clearance</li>
                <li>• Sealed pneumatic pressure discharge</li>
                <li>• Stamped mill quality ticket per delivery</li>
              </ul>
            </div>

            <div className="border border-neutral-200 p-6 rounded-lg bg-[#F8F9FA] shadow-sm">
              <Layers className="w-8 h-8 text-[#B91C1C] mb-4" />
              <h3 className="font-serif text-lg font-bold text-neutral-900 mb-2">
                50kg Palletized Unit Packaging
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                Multi-ply moisture-resistant paper bags packed via automated rotor packer with real-time weight verification.
              </p>
              <ul className="text-xs text-neutral-700 space-y-1.5 font-mono">
                <li>• Automated rotor packer precision</li>
                <li>• Weather-resistant shrink-wrap protection</li>
                <li>• Compliant statutory bag markings</li>
              </ul>
            </div>

            <div className="border border-neutral-200 p-6 rounded-lg bg-[#F8F9FA] shadow-sm">
              <Award className="w-8 h-8 text-[#B91C1C] mb-4" />
              <h3 className="font-serif text-lg font-bold text-neutral-900 mb-2">
                Batch Quality Guarantee
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                Every dispatch is backed by a dated mill test certificate referencing the grind silo, fineness, and 2-day break strength.
              </p>
              <Link 
                to="/products/bag-anatomy"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#B91C1C] hover:underline"
              >
                Inspect 11-Point Bag Markings →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Direct Action CTA */}
      <section className="py-14 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-2">
            Commercial Supply
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Supply Star Cement CEM II/A-L 42.5R to Your Jobsite
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto mb-8 font-normal">
            Whether you require palletized 50kg bags or continuous bulk tanker deliveries to an active batching plant, our logistics team delivers across Ghana.
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
              to="/products" 
              className="inline-flex items-center gap-2 text-neutral-700 hover:text-[#B91C1C] font-mono text-xs uppercase tracking-wider font-bold transition-colors"
            >
              ← Back to All Products
            </Link>
            <Link 
              to="/products/star-solid-32-5r" 
              className="inline-flex items-center gap-2 text-neutral-700 hover:text-[#B91C1C] font-mono text-xs uppercase tracking-wider font-bold transition-colors"
            >
              View Star Cement CEM II/B-L 32.5R (General Purpose) →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
