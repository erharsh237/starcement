import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  ShieldCheck, 
  Award, 
  ChevronRight, 
  ArrowRight,
  GraduationCap,
  Building2,
  FileCheck2,
  X,
  Briefcase
} from 'lucide-react';

export default function LeadershipPage({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('executive');
  const [selectedDirector, setSelectedDirector] = useState(null);

  // Official Star Cement Executive Directors (from Corporate Directorate)
  const executiveDirectors = [
    {
      name: 'Mr. Sajjan Bhajanka',
      role: 'Chairman & Managing Director',
      image: '/images/leadership/sajjan-bhajanka.jpg',
      tenure: 'Founder & Industrialist • Over 40 Years Industry Stewardship',
      bio: 'A visionary industrial pioneer with over four decades of entrepreneurial leadership in heavy manufacturing, building materials, and cement infrastructure. Mr. Sajjan Bhajanka spearheads Star Cement’s macro vision, strategic capital investments, large-scale plant developments, and corporate stewardship across global markets.',
      focus: 'Strategic Governance, Capital Allocation, Terminal Expansion & Long-Term Vision'
    },
    {
      name: 'Mr. Sanjay Agarwal',
      role: 'Managing Director',
      image: '/images/leadership/sanjay-agarwal.jpg',
      tenure: 'Managing Director • Over 35 Years Heavy Enterprise Leadership',
      bio: 'A seasoned and dynamic industry leader who has been instrumental in driving Star Cement’s commercial footprint, brand stature, and manufacturing efficiency. He steers nationwide distribution networks, continuous supply chain innovation, and customer-centric operations.',
      focus: 'Enterprise Strategy, Operational Excellence, Supply Chain & Market Leadership'
    },
    {
      name: 'Mr. Prem Kumar Bhajanka',
      role: 'Vice Chairman',
      image: '/images/leadership/prem-kumar-bhajanka.jpg',
      tenure: 'Vice Chairman • Over 35 Years Heavy Manufacturing Governance',
      bio: 'Distinguished industrial strategist guiding corporate financial architecture, raw material procurement syndicates, and heavy industrial project implementation. Oversees compliance frameworks and ensures fiscal strength across multi-facility operations.',
      focus: 'Corporate Finance Strategy, Raw Material Logistics & Capital Project Governance'
    },
    {
      name: 'Mr. Tushar Bhajanka',
      role: 'Managing Director & Chief Executive Officer (MD & CEO)',
      image: '/images/leadership/tushar-bhajanka.jpg',
      tenure: 'Managing Director & CEO • Next-Generation Manufacturing Leadership',
      bio: 'A transformative corporate executive driving next-generation terminal automation, digital enterprise systems, green cement formulation, and ESG decarbonization. Championing operational modernization and technology-led cement manufacturing standards.',
      focus: 'Executive Management, Digital Transformation, Decarbonization & Terminal Modernization'
    },
    {
      name: 'Mr. Pankaj Kejriwal',
      role: 'Executive Director',
      image: '/images/leadership/pankaj-kejriwal.jpg',
      tenure: 'Executive Director • Heavy Industrial Technocrat',
      bio: 'An expert industrialist with deep specialization in finish grinding systems, clinker logistics, and mechanical reliability. Oversees ongoing technical operations, preventive engineering systems, and statutory laboratory quality conformance.',
      focus: 'Technical Operations, Grinding Plant Optimization & Statutory Laboratory Standards'
    }
  ];

  // Non-Executive & Independent Directors (from Corporate Directorate)
  const nonExecutiveDirectors = [
    {
      name: 'Mr. Keshav Bhajanka',
      role: 'Non-Executive Director',
      image: '/images/leadership/keshav-bhajanka.jpg',
      tenure: 'Non-Executive Director • Corporate Strategy & Growth',
      bio: 'Promoter and enterprise leader with extensive experience across building materials, wood products, and manufacturing operations. He guides Star Cement’s macro business expansion, strategic investments, and forward-looking capital syndication.',
      focus: 'Corporate Strategy, Capital Allocation & Enterprise Governance'
    },
    {
      name: 'Mr. Brij Bhushan Agarwal',
      role: 'Non-Executive Director',
      image: '/images/leadership/brij-bhushan-agarwal.jpg',
      tenure: 'Non-Executive Director • Industrialist & Entrepreneur',
      bio: 'Prominent industrial pioneer with profound expertise in heavy infrastructure, raw material processing, and industrial plant operations. Contributes strategic oversight in large-scale capital project execution and operational efficiencies.',
      focus: 'Industrial Operations, Project Execution & Strategic Expansion'
    },
    {
      name: 'Mr. Amit Kiran Deb',
      role: 'Independent Director',
      image: '/images/leadership/amit-kiran-deb.jpg',
      tenure: 'Independent Director • Former Chief Secretary (IAS)',
      bio: 'Former Chief Secretary and veteran administrator with decades of distinguished leadership in public administration and governance. Provides vital oversight in institutional compliance, regulatory frameworks, and enterprise ethics.',
      focus: 'Regulatory Affairs, Institutional Compliance & Governance Oversight'
    },
    {
      name: 'Mr. Nirmalya Bhattacharyya',
      role: 'Independent Director',
      image: '/images/leadership/nirmalya-bhattacharyya.jpg',
      tenure: 'Independent Director • Legal & Corporate Governance Advisor',
      bio: 'Distinguished legal and corporate advisor with extensive expertise in statutory compliance, corporate law, and fiduciary accountability. Advises the board on shareholder equity, transparency, and audit committee oversight.',
      focus: 'Audit Committee Governance, Legal Frameworks & Statutory Compliance'
    },
    {
      name: 'Mr. Deepak Singhal',
      role: 'Independent Director',
      image: '/images/leadership/deepak-singhal.jpg',
      tenure: 'Independent Director • Senior Administrator & Public Policy Specialist',
      bio: 'Former Chief Secretary and senior administrative leader with distinguished background in heavy infrastructure planning, public administration, and industrial development policies across multi-regional jurisdictions.',
      focus: 'Administrative Governance, Enterprise Ethics & Infrastructure Oversight'
    },
    {
      name: 'Mr. Ramit Budhraja',
      role: 'Independent Director',
      image: '/images/leadership/ramit-budhraja.jpg',
      tenure: 'Independent Director • Global Corporate Executive',
      bio: 'Global corporate leader and management consultant with extensive tenure leading multinational industrial and consumer enterprises. Guides Star Cement in commercial excellence, digital distribution, and global best practices.',
      focus: 'Commercial Strategy, Global Best Practices & Enterprise Value Creation'
    },
    {
      name: 'Mr. Vivek Chawla',
      role: 'Independent Director',
      image: '/images/leadership/vivek-chawla.jpg',
      tenure: 'Independent Director • Cement Industry Veteran',
      bio: 'Distinguished cement sector authority with over 35 years of core leadership in high-capacity cement manufacturing plants. Directs strategic focus toward finish grinding optimization, clinker ratio reduction, and alternative fuels.',
      focus: 'Cement Manufacturing Technology, Energy Efficiency & Technical Excellence'
    },
    {
      name: 'Mr. Jagdish Chandra Toshniwal',
      role: 'Independent Director',
      image: '/images/leadership/jagdish-chandra-toshniwal.jpg',
      tenure: 'Independent Director • Senior Cement Manufacturing Technocrat',
      bio: 'Seasoned industrial technocrat with deep operational experience in modern plant engineering, process automation, and high-volume grinding operations. Advises on operational reliability and statutory product quality benchmarks.',
      focus: 'Plant Maintenance Systems, Process Engineering & Production Optimization'
    },
    {
      name: 'Mrs. Plistina Dkhar',
      role: 'Independent Director',
      image: '/images/leadership/plistina-dkhar.jpg',
      tenure: 'Independent Director • Social Development & Community Stewardship',
      bio: 'Respected administrator and community leader championing sustainable environmental stewardship, workforce diversity, and community development frameworks around manufacturing centers.',
      focus: 'Corporate Social Responsibility (CSR), Community Relations & Environmental Stewardship'
    },
    {
      name: 'Mrs. Ibaridor Katherine War',
      role: 'Independent Director',
      image: '/images/leadership/ibaridor-katherine-war.jpg',
      tenure: 'Independent Director • Public Administration & Educationist',
      bio: 'Accomplished administrator and educationist providing strategic perspectives on human capital development, institutional ethics, and comprehensive corporate social accountability.',
      focus: 'Human Resource Governance, Stakeholder Relations & Board Diversity'
    }
  ];

  const currentDirectors = activeTab === 'executive' ? executiveDirectors : nonExecutiveDirectors;

  return (
    <div className="bg-[#F7F6F3] min-h-screen text-left">
      
      {/* 1. Header & Breadcrumbs */}
      <section className="bg-neutral-900 text-white pt-12 pb-16 relative overflow-hidden border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <nav className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#B91C1C] font-bold">Executive Directorate</span>
          </nav>

          <div className="max-w-3xl reveal-init">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-3">
              Corporate Governance & Industrial Stewardship
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
              Board of Directors & Executive Directorate
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              Star Cement is governed by seasoned industrial entrepreneurs, mechanical technocrats, and governance leaders dedicated to manufacturing integrity, statutory quality assurance, and sustainable enterprise growth.
            </p>
          </div>

        </div>

        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-center">
          <Users className="w-96 h-96 text-white" />
        </div>
      </section>

      {/* 2. Directorate Roster Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Executive vs Non-Executive Tab Toggle */}
          <div className="flex justify-center mb-12 sm:mb-16 reveal-init">
            <div className="inline-flex rounded-md p-1 bg-neutral-100 border border-neutral-200/90 shadow-2xs">
              <button
                type="button"
                onClick={() => setActiveTab('executive')}
                className={`px-6 sm:px-8 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer rounded-sm ${
                  activeTab === 'executive'
                    ? 'bg-[#B91C1C] text-white shadow-sm'
                    : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-200/70'
                }`}
              >
                Executive Directors
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('non-executive')}
                className={`px-6 sm:px-8 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer rounded-sm ${
                  activeTab === 'non-executive'
                    ? 'bg-[#B91C1C] text-white shadow-sm'
                    : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-200/70'
                }`}
              >
                Non-Executive Directors
              </button>
            </div>
          </div>

          {/* Grid of Directors with Staggered Scroll Reveal Animations */}
          <div 
            key={activeTab}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 stagger-children"
          >
            {currentDirectors.map((director, idx) => (
              <div 
                key={`${activeTab}-${idx}`} 
                onClick={() => setSelectedDirector(director)}
                className="reveal-card group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Portrait Card */}
                  <div className="relative aspect-square w-full overflow-hidden rounded-md bg-neutral-100 border border-neutral-200/80 shadow-2xs group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300">
                    {director.image ? (
                      <img
                        src={director.image}
                        alt={director.name}
                        className="w-full h-full object-cover filter grayscale contrast-[1.04] group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-neutral-100 text-neutral-400">
                        <Users className="w-16 h-16 text-neutral-300 mb-3" />
                        <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider">
                          Board Advisory
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Director Name */}
                  <h3 className="font-serif text-base sm:text-lg font-bold text-neutral-950 mt-4 mb-1 group-hover:text-[#B91C1C] transition-colors leading-tight">
                    {director.name}
                  </h3>

                  {/* Director Title in Star Cement Red */}
                  <div className="text-xs sm:text-sm font-semibold text-[#B91C1C] leading-snug">
                    {director.role}
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>View Executive Profile</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 text-[#B91C1C] transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Detailed Bio Modal (When clicking a Director) */}
      {selectedDirector && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
          onClick={() => setSelectedDirector(null)}
        >
          <div 
            className="bg-white rounded-xl border border-neutral-200/90 max-w-xl w-full p-6 sm:p-8 shadow-2xl relative animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedDirector(null)}
              className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors cursor-pointer"
              title="Close Profile"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row gap-5 items-start mb-6 pb-6 border-b border-neutral-100">
              {selectedDirector.image && (
                <img
                  src={selectedDirector.image}
                  alt={selectedDirector.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-lg border border-neutral-200 shadow-sm shrink-0 filter grayscale contrast-[1.04]"
                />
              )}
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-bold block mb-1">
                  Directorate Profile
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-950">
                  {selectedDirector.name}
                </h3>
                <div className="text-xs sm:text-sm font-semibold text-[#B91C1C] mt-0.5">
                  {selectedDirector.role}
                </div>
                <div className="text-[11px] font-mono text-neutral-500 mt-2">
                  {selectedDirector.tenure}
                </div>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed">
              <p>{selectedDirector.bio}</p>

              <div className="p-3.5 bg-neutral-50 rounded-md border border-neutral-200/80 text-xs font-mono">
                <span className="font-bold text-neutral-900 block mb-1">Primary Governance Scope:</span>
                <span className="text-neutral-600">{selectedDirector.focus}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedDirector(null)}
                className="px-5 py-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Governance Committees & Statutory Quality Standards */}
      <section className="py-14 sm:py-16 bg-[#F7F6F3] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-10 reveal-init">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B91C1C]">
              Statutory Governance
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-neutral-900 mt-1">
              Board Oversight & Compliance Committees
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            
            <div className="p-6 bg-white rounded-lg border border-neutral-200 shadow-2xs reveal-card">
              <div className="w-9 h-9 rounded-md bg-red-50 text-[#B91C1C] flex items-center justify-center mb-3.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-neutral-900 mb-1.5">Technical Quality Advisory Committee</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Supervises statutory GS 1118-1:2024 compliance, daily clinker mineralogy, automated Blaine fineness audits, and independent 28-day break tests.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-neutral-200 shadow-2xs reveal-card">
              <div className="w-9 h-9 rounded-md bg-red-50 text-[#B91C1C] flex items-center justify-center mb-3.5">
                <Award className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-neutral-900 mb-1.5">Sustainability & ESG Directorate</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Oversees industrial clinker factor reduction, waste heat recovery turbines, and statutory EPA environmental conformance across all facilities.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-neutral-200 shadow-2xs reveal-card">
              <div className="w-9 h-9 rounded-md bg-red-50 text-[#B91C1C] flex items-center justify-center mb-3.5">
                <FileCheck2 className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-neutral-900 mb-1.5">Audit & Ethical Conduct Council</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Zero tolerance for anti-competitive trade or product adulteration, ensuring fair commercial pricing and distributor transparency across Ghana.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Navigation Links */}
      <section className="py-12 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-mono uppercase tracking-widest text-[#B91C1C] font-bold mb-4 reveal-init">
            Explore More About Star Cement
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 stagger-children">
            <Link 
              to="/about/vision-mission" 
              className="p-4 bg-neutral-800/70 hover:bg-neutral-800 rounded-md border border-neutral-700/70 transition-colors block reveal-card"
            >
              <h4 className="text-xs sm:text-sm font-bold text-white mb-1">Vision, Mission & Creed →</h4>
              <p className="text-[11px] text-neutral-400">Institutional values and GS 1118-1 quality pledge</p>
            </Link>

            <Link 
              to="/about/laboratory" 
              className="p-4 bg-neutral-800/70 hover:bg-neutral-800 rounded-md border border-neutral-700/70 transition-colors block reveal-card"
            >
              <h4 className="text-xs sm:text-sm font-bold text-white mb-1">Tema Quality Testing Lab →</h4>
              <p className="text-[11px] text-neutral-400">Continuous clinker spectrometry & compressive tests</p>
            </Link>

            <Link 
              to="/about/accreditations" 
              className="p-4 bg-neutral-800/70 hover:bg-neutral-800 rounded-md border border-neutral-700/70 transition-colors block reveal-card"
            >
              <h4 className="text-xs sm:text-sm font-bold text-white mb-1">Accreditations & Conformance →</h4>
              <p className="text-[11px] text-neutral-400">Ghana Standards Authority & EPA permits</p>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
