import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  ShieldCheck, 
  FileCheck, 
  CheckCircle2, 
  ChevronRight, 
  Download, 
  ExternalLink, 
  Search, 
  Building2, 
  AlertCircle, 
  Clock, 
  Calendar,
  Lock,
  Flame,
  Scale
} from 'lucide-react';

export default function AccreditationsPage({ onOpenQuote }) {
  const [batchQuery, setBatchQuery] = useState('');
  const [lookupResult, setLookupResult] = useState(null);

  const certificates = [
    {
      id: 'GSA-1118',
      title: 'Ghana Standards Authority (GSA) Mark of Conformity',
      standard: 'GS 1118-1:2024 / EN 197-1:2011',
      issuer: 'Ghana Standards Authority (CMD-CEMT-029)',
      validity: 'Valid through Dec 2026 (Annual Renewal Audit)',
      scope: 'Portland Limestone Cement: CEM II/A-L 42.5R and CEM II/B-L 32.5R manufactured at Star Cement Tema Grinding Terminal.',
      status: 'Active & In Good Standing',
      badge: 'Mandatory National Standard',
      fileSize: '1.4 MB'
    },
    {
      id: 'ISO-9001',
      title: 'ISO 9001:2015 Quality Management System',
      standard: 'ISO 9001:2015 (Certificate # GH/QMS/24/0819)',
      issuer: 'SGS International Certification Body',
      validity: 'Valid through October 2027 (Triennial Re-certification)',
      scope: 'Importation of clinker, grinding, computer-controlled blending, automated packaging, and nationwide bulk logistics of Portland cements.',
      status: 'Certified & Audited',
      badge: 'International QMS',
      fileSize: '890 KB'
    },
    {
      id: 'ISO-14001',
      title: 'ISO 14001:2015 Environmental Management',
      standard: 'ISO 14001:2015 (Certificate # GH/EMS/24/0411)',
      issuer: 'SGS International Certification Body',
      validity: 'Valid through November 2027',
      scope: 'Closed-loop pneumatic dust extraction, zero-effluent industrial stormwater management, and particulate emission mitigation across all terminal silos.',
      status: 'Certified & Audited',
      badge: 'Environmental Standard',
      fileSize: '920 KB'
    },
    {
      id: 'ISO-45001',
      title: 'ISO 45001:2018 Occupational Health & Safety',
      standard: 'ISO 45001:2018 (Certificate # GH/OHS/24/0205)',
      issuer: 'Bureau Veritas Quality International',
      validity: 'Valid through January 2027',
      scope: 'Zero-harm terminal safety policies, automated palletization protection, and comprehensive PPE protocols across all operational depots.',
      status: 'Certified & Audited',
      badge: 'Health & Safety',
      fileSize: '810 KB'
    },
    {
      id: 'EPA-GH',
      title: 'EPA Environmental Permitting & Clean Air Permit',
      standard: 'Ghana EPA Act 490 / Permit # EPA/IND/TM/2024/0118',
      issuer: 'Environmental Protection Agency (EPA) Ghana',
      validity: 'Valid through August 2026',
      scope: 'Continuous Emission Monitoring Systems (CEMS) compliant stack discharge under 10 mg/Nm³ for particulate matter.',
      status: 'Permitted & Monitored',
      badge: 'Statutory License',
      fileSize: '2.1 MB'
    },
    {
      id: 'GPHA-CON',
      title: 'GPHA Deepwater Clinker Offloading Concession',
      standard: 'Berth Protocol Concession # GPHA/OPS/CLNK/2022',
      issuer: 'Ghana Ports and Harbours Authority (Tema)',
      validity: 'Long-term 25-Year Operational Lease',
      scope: 'Direct-berth enclosed conveyor discharge from vessels directly into primary clinker dome, eliminating road haulage fugitive dust.',
      status: 'Fully Concessioned',
      badge: 'Maritime Infrastructure',
      fileSize: '1.7 MB'
    }
  ];

  const handleVerify = (e) => {
    e.preventDefault();
    if (!batchQuery.trim()) return;

    // Simulated audit database lookup
    const q = batchQuery.trim().toUpperCase();
    setLookupResult({
      batchId: q.startsWith('ST-') ? q : `ST-2025-${q}`,
      product: q.includes('32') ? 'Star Solid 32.5R (CEM II/B-L)' : 'Star Super 42.5R (CEM II/A-L)',
      grindDate: '12-Feb-2025 (Shift A)',
      siloNumber: 'Silo 03 (South Bank)',
      breakStrength2d: q.includes('32') ? '17.8 MPa (Min requirement: ≥ 10.0 MPa)' : '24.2 MPa (Min requirement: ≥ 20.0 MPa)',
      breakStrength28d: q.includes('32') ? '37.4 MPa (Min requirement: 32.5 - 52.5 MPa)' : '48.6 MPa (Min requirement: 42.5 - 62.5 MPa)',
      gsaConformity: 'PASSED - GS 1118-1:2024 Certified',
      gsaInspectorId: 'GSA-INSP-TEMA-482',
      verifiedTimestamp: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
    });
  };

  return (
    <div className="bg-[#F7F6F3] min-h-screen">
      
      {/* 1. Header & Breadcrumbs */}
      <section className="bg-neutral-900 text-white pt-12 pb-16 relative overflow-hidden border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <nav className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#B91C1C] font-bold">Certifications & Accreditations</span>
          </nav>

          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-3">
              National & Global Quality Assurances
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
              Certified Compliance & Industrial Accreditations
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              Star Cement operates under exhaustive regulatory oversight from the Ghana Standards Authority (GSA), Environmental Protection Agency (EPA), and international ISO registrars. Every metric ton conforms to statutory safety, environmental, and structural performance mandates.
            </p>
          </div>

        </div>

        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-center">
          <Award className="w-96 h-96 text-white" />
        </div>
      </section>

      {/* 2. Key Metrics Bar */}
      <section className="bg-white border-b border-neutral-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="font-serif text-3xl font-bold text-neutral-900">GS 1118-1</p>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider mt-1">National Standards Mark</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-neutral-900">100%</p>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider mt-1">GSA Batch Tested</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-neutral-900">3x ISO</p>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider mt-1">9001 · 14001 · 45001</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-[#B91C1C]">&lt; 10 mg/Nm³</p>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider mt-1">EPA Emission Standard</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Certificate Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-2">
              Statutory Documentation & Licenses
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900">
              Active Official Registrations & Licenses
            </h2>
            <p className="text-neutral-600 text-sm max-w-2xl mt-2">
              Review and download official compliance certificates verifying conformity with Ghanaian construction statutes and international operating guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <div 
                key={cert.id}
                className="bg-white border border-neutral-200 rounded-sm p-6 flex flex-col justify-between hover:border-neutral-400 hover:shadow-md transition-all group holo-foil"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs text-[10px] font-mono uppercase tracking-wider font-bold bg-neutral-100 text-neutral-800 border border-neutral-200">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#B91C1C]" />
                      {cert.badge}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-700 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Active
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-neutral-900 group-hover:text-[#B91C1C] transition-colors leading-snug mb-2">
                    {cert.title}
                  </h3>

                  <div className="space-y-2 mb-5">
                    <div className="text-xs">
                      <span className="font-mono text-neutral-400 uppercase text-[10px] block">Standard Code</span>
                      <span className="font-semibold text-neutral-800">{cert.standard}</span>
                    </div>
                    <div className="text-xs">
                      <span className="font-mono text-neutral-400 uppercase text-[10px] block">Certifying Body</span>
                      <span className="text-neutral-700">{cert.issuer}</span>
                    </div>
                    <div className="text-xs">
                      <span className="font-mono text-neutral-400 uppercase text-[10px] block">Scope of Authority</span>
                      <p className="text-neutral-600 leading-relaxed text-[11px]">{cert.scope}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-neutral-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {cert.validity.split(' ')[0]} {cert.validity.split(' ')[1]}
                  </span>
                  
                  <button 
                    onClick={() => alert(`Downloading specification certificate: ${cert.title} (${cert.fileSize})`)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#B91C1C] hover:text-neutral-900 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    PDF ({cert.fileSize})
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Interactive Live Batch Verification Portal */}
      <section className="py-16 bg-neutral-900 text-white border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-5">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-2">
                Audited Traceability System
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                Digital Batch Certificate Verification
              </h2>
              <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                Under GSA mandatory compliance protocols, every 50kg bag and bulk dispatch invoice features an ink-jetted alphanumeric batch lot. Civil engineers and site managers can look up the corresponding 2-day, 7-day, and 28-day break tests on record.
              </p>

              <form onSubmit={handleVerify} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                    Enter Batch / Lot Code (or try demo: 42A, 32B, 2025)
                  </label>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      value={batchQuery}
                      onChange={(e) => setBatchQuery(e.target.value)}
                      placeholder="e.g. ST-2025-42A or 32B"
                      className="flex-1 bg-neutral-800 border border-neutral-700 rounded-xs px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#B91C1C]"
                    />
                    <button 
                      type="submit"
                      className="bg-[#B91C1C] hover:bg-[#991B1B] text-white px-5 py-2.5 rounded-xs font-mono text-xs uppercase tracking-wider font-bold transition-colors inline-flex items-center gap-2"
                    >
                      <Search className="w-3.5 h-3.5" />
                      Verify
                    </button>
                  </div>
                </div>
                <p className="text-[11px] text-neutral-400">
                  Tip: The batch code is printed horizontally along the bottom seal of every Star Cement 50kg bag.
                </p>
              </form>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-neutral-800/80 border border-neutral-700 rounded-sm p-6">
                <div className="flex items-center justify-between border-b border-neutral-700 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <FileCheck className="w-5 h-5 text-[#B91C1C]" />
                    <span className="font-mono text-xs uppercase tracking-wider font-bold text-white">
                      Live Laboratory Verification Result
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase bg-emerald-950/60 px-2 py-0.5 rounded-xs border border-emerald-800">
                    Database Connected
                  </span>
                </div>

                {lookupResult ? (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div className="bg-neutral-900/60 p-3 rounded-xs border border-neutral-700/60">
                        <span className="font-mono text-neutral-400 block text-[10px] uppercase">Batch Identification</span>
                        <span className="font-bold text-white font-mono">{lookupResult.batchId}</span>
                      </div>
                      <div className="bg-neutral-900/60 p-3 rounded-xs border border-neutral-700/60">
                        <span className="font-mono text-neutral-400 block text-[10px] uppercase">Grinding Date</span>
                        <span className="font-semibold text-neutral-200">{lookupResult.grindDate}</span>
                      </div>
                      <div className="bg-neutral-900/60 p-3 rounded-xs border border-neutral-700/60">
                        <span className="font-mono text-neutral-400 block text-[10px] uppercase">Cement Product</span>
                        <span className="font-semibold text-white">{lookupResult.product}</span>
                      </div>
                      <div className="bg-neutral-900/60 p-3 rounded-xs border border-neutral-700/60">
                        <span className="font-mono text-neutral-400 block text-[10px] uppercase">Silo Discharge Source</span>
                        <span className="font-semibold text-neutral-200">{lookupResult.siloNumber}</span>
                      </div>
                    </div>

                    <div className="bg-neutral-900/80 p-4 rounded-xs border border-neutral-700 space-y-2">
                      <span className="font-mono text-neutral-400 block text-[10px] uppercase tracking-wider">
                        Laboratory Compressive Break Strength Tests
                      </span>
                      <div className="flex justify-between items-center text-xs py-1 border-b border-neutral-800">
                        <span className="text-neutral-400 font-mono">2-Day Strength (Rapid Hardening)</span>
                        <span className="font-mono font-bold text-emerald-400">{lookupResult.breakStrength2d}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs py-1">
                        <span className="text-neutral-400 font-mono">28-Day Standard Strength</span>
                        <span className="font-mono font-bold text-emerald-400">{lookupResult.breakStrength28d}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 text-xs font-mono text-neutral-400">
                      <span>Authority: {lookupResult.gsaConformity}</span>
                      <button 
                        onClick={() => alert(`Certificate ${lookupResult.batchId} downloaded.`)}
                        className="text-[#B91C1C] hover:underline font-bold inline-flex items-center gap-1"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Download Stamped Certificate
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-10 text-neutral-400">
                    <Lock className="w-10 h-10 mx-auto text-neutral-600 mb-3" />
                    <p className="text-xs font-mono uppercase tracking-wider">
                      Enter a batch number above to query the Tema Quality Laboratory registry
                    </p>
                    <p className="text-[11px] text-neutral-500 mt-1">
                      Example: Enter "42A" or "32B" to inspect a certified test specimen.
                    </p>
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Ghana Standards Authority (GSA) Deep Dive */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#F7F6F3] border border-neutral-200 rounded-sm p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8">
                <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-2">
                  Statutory National Conformity
                </span>
                <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-4">
                  Ghana Standards Authority (GSA) Mandate GS 1118-1:2024
                </h3>
                <p className="text-neutral-700 text-sm leading-relaxed mb-4">
                  The Ghana Standards Authority enforces the GS 1118 standard (harmonized with EN 197-1) to protect the public from structural collapse caused by uncertified or adulterated cements. Star Cement complies with 100% of physical and chemical threshold criteria:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-start gap-2 bg-white p-3 rounded-xs border border-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-[#B91C1C] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-neutral-900 block">Sulfate Content (SO₃) &lt; 3.5%</span>
                      <span className="text-neutral-600 text-[11px]">Prevents internal delayed ettringite formation and structural swelling.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 bg-white p-3 rounded-xs border border-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-[#B91C1C] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-neutral-900 block">Chloride Content &lt; 0.10%</span>
                      <span className="text-neutral-600 text-[11px]">Protects high-tensile steel rebars against premature pitting corrosion.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 bg-white p-3 rounded-xs border border-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-[#B91C1C] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-neutral-900 block">Soundness (Le Chatelier) &le; 10 mm</span>
                      <span className="text-neutral-600 text-[11px]">Guarantees cement paste dimensional stability during hydration.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 bg-white p-3 rounded-xs border border-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-[#B91C1C] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-neutral-900 block">Initial Setting Time &ge; 60 mins</span>
                      <span className="text-neutral-600 text-[11px]">Ensures ample transit and compaction time in Ghana's tropical climate.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 bg-white border border-neutral-200 p-6 text-center rounded-xs">
                <ShieldCheck className="w-16 h-16 text-[#B91C1C] mx-auto mb-3" />
                <h4 className="font-serif text-lg font-bold text-neutral-900 mb-1">
                  Need an Audit Dossier?
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  Consulting engineers and government procurement panels can request full third-party test records and factory audit logs.
                </p>
                <button 
                  onClick={onOpenQuote}
                  className="w-full bg-[#B91C1C] hover:bg-[#991B1B] text-white py-2.5 rounded-xs font-mono text-xs uppercase tracking-wider font-bold transition-colors shadow-xs"
                >
                  Request Compliance Pack
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 6. Inter-navigation linking */}
      <section className="py-12 bg-[#F7F6F3] border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link 
              to="/about/laboratory" 
              className="inline-flex items-center gap-2 text-neutral-700 hover:text-[#B91C1C] font-mono text-xs uppercase tracking-wider font-bold transition-colors"
            >
              ← Explore Tema Central Laboratory
            </Link>
            <Link 
              to="/products" 
              className="inline-flex items-center gap-2 text-neutral-700 hover:text-[#B91C1C] font-mono text-xs uppercase tracking-wider font-bold transition-colors"
            >
              View Certified Products Portfolio →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
