import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  X, 
  Briefcase,
  GraduationCap
} from 'lucide-react';

export default function OwnerKnowledgeSection() {
  const [selectedOwner, setSelectedOwner] = useState(null);

  const owners = [
    {
      name: 'Mr. Sajjan Bhajanka',
      role: 'Chairman & Promoter',
      image: '/images/leadership/sajjan-bhajanka.jpg',
      experience: 'Over 40 Years Heavy Manufacturing Stewardship',
      badge: 'Founder & Chairman',
      bio: 'A visionary industrial pioneer with over four decades of entrepreneurial leadership in heavy manufacturing, building materials, and cement infrastructure. Mr. Sajjan Bhajanka spearheads Star Cement Group of companies Africa’s macro vision, strategic capital investments, large-scale plant developments, and corporate stewardship across global and African markets.',
      focus: 'Strategic Governance, Capital Allocation, Terminal Expansion & Long-Term Vision'
    },
    {
      name: 'Mr. Sanjay Agarwal',
      role: 'Managing Director & Promoter',
      image: '/images/leadership/sanjay-agarwal.jpg',
      experience: 'Over 35 Years Heavy Enterprise Leadership',
      badge: 'Managing Director',
      bio: 'A seasoned and dynamic industry leader who has been instrumental in driving Star Cement’s commercial footprint, brand stature, and manufacturing efficiency. He steers nationwide distribution networks, continuous supply chain innovation, automated operations, and customer-centric business frameworks.',
      focus: 'Enterprise Strategy, Operational Excellence, Supply Chain & Market Leadership'
    },
    {
      name: 'Mr. Prem Kumar Bhajanka',
      role: 'Vice Chairman & Promoter',
      image: '/images/leadership/prem-kumar-bhajanka.jpg',
      experience: 'Over 35 Years Heavy Manufacturing Governance',
      badge: 'Vice Chairman',
      bio: 'Distinguished industrial strategist guiding corporate financial architecture, raw material procurement syndicates, and heavy industrial project implementation. Oversees compliance frameworks and ensures fiscal strength across multi-facility operations.',
      focus: 'Corporate Finance Strategy, Raw Material Logistics & Capital Project Governance'
    },
    {
      name: 'Mr. Tushar Bhajanka',
      role: 'Managing Director & CEO',
      image: '/images/leadership/tushar-bhajanka.jpg',
      experience: 'Next-Generation Manufacturing Leadership',
      badge: 'MD & CEO',
      bio: 'A transformative corporate executive driving next-generation terminal automation, digital enterprise systems, green cement formulation, and ESG decarbonization. Championing operational modernization and technology-led cement manufacturing standards.',
      focus: 'Executive Management, Digital Transformation, Decarbonization & Terminal Modernization'
    },
    {
      name: 'Mr. Pankaj Kejriwal',
      role: 'Executive Director & Technocrat',
      image: '/images/leadership/pankaj-kejriwal.jpg',
      experience: 'Over 35 Years Cement Manufacturing Authority',
      badge: 'Executive Director',
      bio: 'An expert industrialist with deep specialization in finish grinding systems, raw materials logistics, and mechanical reliability. Oversees ongoing technical operations, preventive engineering systems, and statutory laboratory quality conformance.',
      focus: 'Technical Operations, Grinding Plant Optimization & Statutory Laboratory Standards'
    },
    {
      name: 'Mr. Keshav Bhajanka',
      role: 'Non-Executive Director & Promoter',
      image: '/images/leadership/keshav-bhajanka.jpg',
      experience: 'Corporate Strategy & Global Enterprise Growth',
      badge: 'Director & Promoter',
      bio: 'Promoter and enterprise leader with extensive experience across building materials, manufacturing operations, and global supply chains. He guides macro business expansion, strategic investments, and forward-looking capital syndication.',
      focus: 'Corporate Strategy, Capital Allocation & Enterprise Governance'
    }
  ];

  return (
    <section id="owner-knowledge" className="py-20 sm:py-24 bg-white border-b border-neutral-200 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 reveal-init">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#B91C1C]">
              Owner’s Knowledge
            </span>
            <span className="text-neutral-400 text-xs">•</span>
            <span className="text-neutral-500 font-mono text-xs">
              Promoters & Executive Directorate
            </span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight leading-tight">
            Visionary Industrial Ownership & Governance
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-4 leading-relaxed font-normal">
            Star Cement Group of companies Africa is steered by veteran industrial promoters, heavy manufacturing technocrats, and corporate governance pioneers with decades of proven leadership building mega-scale industrial infrastructure.
          </p>
        </div>

        {/* Promoters & Owners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 stagger-children">
          {owners.map((owner, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedOwner(owner)}
              className="bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center gap-4 mb-5 pb-5 border-b border-neutral-100">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200 shrink-0 filter contrast-[1.03]">
                    <img
                      src={owner.image}
                      alt={owner.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-xs bg-red-50 text-[#B91C1C] border border-red-200 inline-block mb-1">
                      {owner.badge}
                    </span>
                    <h3 className="font-serif font-bold text-lg text-neutral-950 group-hover:text-[#B91C1C] transition-colors">
                      {owner.name}
                    </h3>
                    <span className="text-xs text-neutral-500 font-mono block">
                      {owner.role}
                    </span>
                  </div>
                </div>

                <div className="text-xs text-neutral-600 leading-relaxed font-normal mb-5 line-clamp-3">
                  {owner.bio}
                </div>

                <div className="p-3 bg-[#F8F9FA] rounded-lg border border-neutral-100 font-mono text-[11px] text-neutral-700 space-y-1">
                  <span className="text-[10px] uppercase text-neutral-400 block font-bold">Key Industrial Focus</span>
                  <span className="text-neutral-900 block font-sans text-xs">{owner.focus}</span>
                </div>
              </div>

              <div className="pt-4 mt-5 border-t border-neutral-100 flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-400">{owner.experience.split('•')[0]}</span>
                <span className="text-[#B91C1C] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  <span>View Bio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Directorate Callout Strip */}
        <div className="bg-[#11161B] rounded-2xl p-8 sm:p-12 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border border-neutral-800">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B91C1C] block mb-2">
              Corporate Governance & Board Committees
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
              Institutional Governance Ensuring Fiduciary & Quality Conformance
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed font-normal">
              Supported by independent directors, former senior administrators, and technical audit committees enforcing strict statutory compliance with the Ghana Standards Authority (GSA) and the Environmental Protection Agency (EPA).
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <Link
              to="/about/leadership"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#B91C1C] hover:bg-[#991B1B] text-white text-xs font-bold uppercase tracking-wider rounded-sm shadow-sm hover:shadow transition-all text-center"
            >
              <span>View Full Board of Directors</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/about/vision-mission"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-bold uppercase tracking-wider rounded-sm border border-neutral-700 transition-all text-center"
            >
              <span>Vision & Creed</span>
            </Link>
          </div>
        </div>

        {/* Detail Bio Modal */}
        {selectedOwner && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
            onClick={() => setSelectedOwner(null)}
          >
            <div 
              className="bg-white rounded-2xl border border-neutral-200 max-w-xl w-full p-6 sm:p-8 shadow-2xl relative animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedOwner(null)}
                className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors cursor-pointer"
                title="Close Profile"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col sm:flex-row gap-5 items-start mb-6 pb-6 border-b border-neutral-100">
                <img
                  src={selectedOwner.image}
                  alt={selectedOwner.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl border border-neutral-200 shadow-sm shrink-0"
                />
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded bg-red-50 text-[#B91C1C] border border-red-200 inline-block mb-1.5">
                    {selectedOwner.badge}
                  </span>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-neutral-950">
                    {selectedOwner.name}
                  </h3>
                  <div className="text-xs text-[#B91C1C] font-semibold mt-0.5 font-sans">
                    {selectedOwner.role}
                  </div>
                  <div className="text-xs font-mono text-neutral-400 mt-1">
                    {selectedOwner.experience}
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans mb-6">
                <div>
                  <strong className="text-neutral-900 block font-mono text-xs uppercase mb-1">Executive Profile:</strong>
                  <p className="text-neutral-600">{selectedOwner.bio}</p>
                </div>
                <div className="p-3.5 bg-[#F8F9FA] rounded-lg border border-neutral-200/80">
                  <strong className="text-neutral-900 block font-mono text-xs uppercase mb-1">Strategic Governance Domain:</strong>
                  <p className="text-neutral-600 font-sans">{selectedOwner.focus}</p>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-neutral-100">
                <Link
                  to="/about/leadership"
                  className="px-4 py-2 bg-[#B91C1C] hover:bg-[#991B1B] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors"
                >
                  View Directorate
                </Link>
                <button
                  type="button"
                  onClick={() => setSelectedOwner(null)}
                  className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold uppercase tracking-wider rounded transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
