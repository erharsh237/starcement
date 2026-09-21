import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight, 
  Phone, 
  ShieldCheck, 
  Building2, 
  MapPin, 
  Calculator, 
  Truck, 
  Award, 
  FileText, 
  Target, 
  Users, 
  FlaskConical, 
  Lock, 
  MessageSquare, 
  Layers, 
  CheckCircle2, 
  Compass,
  ArrowRight
} from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ onOpenQuote, onOpenCalculator, onOpenCommandPalette, onOpenDealers }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  
  const location = useLocation();
  const navContainerRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  // Scroll detection for compact header states
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route or hash change
  useEffect(() => {
    setActiveMegaMenu(null);
    setMobileOpen(false);
    setMobileSubmenu(null);
  }, [location.pathname, location.hash]);

  // Click outside to dismiss active mega menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navContainerRef.current && !navContainerRef.current.contains(event.target)) {
        setActiveMegaMenu(null);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveMegaMenu(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Smooth hover handlers with debounce delay
  const handleMouseEnter = (menuKey) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setActiveMegaMenu(menuKey);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 220);
  };

  const closeAllMenus = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setActiveMegaMenu(null);
    setMobileOpen(false);
    setMobileSubmenu(null);
  };

  // Mega Menu Definitions
  const aboutLinks = [
    {
      title: 'Company Overview & Story',
      desc: 'West Africa’s benchmark Portland Limestone Cement manufacturer',
      icon: FileText,
      href: '/about'
    },
    {
      title: 'Vision, Mission & Creed',
      desc: 'Strict adherence to GS 1118-1:2024 and European EN 197-1 norms',
      icon: Target,
      href: '/about/vision-mission'
    },
    {
      title: 'Executive Directorate',
      desc: 'Board of directors & industrial technical governance team',
      icon: Users,
      href: '/about/leadership'
    },
    {
      title: 'Tema Quality Testing Lab',
      desc: 'Continuous XRF mineral spectrometry and automated Blaine fineness testing',
      icon: FlaskConical,
      href: '/about/laboratory'
    },
    {
      title: 'Accreditations & Statutory Compliance',
      desc: 'Ghana Standards Authority & EPA environmental certification permits',
      icon: Award,
      href: '/about/accreditations'
    },
    {
      title: 'Milestone National Projects',
      desc: 'Highways, container terminal pavements, bridges & commercial high-rises',
      icon: Building2,
      href: '/projects'
    }
  ];

  const productLinks = [
    {
      title: 'Star Super 42.5R (Rapid Hardening)',
      desc: 'For high-rise columns, post-tensioned slabs, precast beams & marine piles (≥ 52.5 MPa)',
      icon: Building2,
      href: '/products/star-super-42-5r'
    },
    {
      title: 'Star Solid 32.5R (General Purpose)',
      desc: 'For structural concrete, masonry, screeds & commercial sandcrete blocks (≥ 38.5 MPa)',
      icon: Layers,
      href: '/products/star-solid-32-5r'
    },
    {
      title: '11-Point Bag Marking Anatomy',
      desc: 'Statutory compliance guide, security holograms, batch stamps & tamper verification',
      icon: CheckCircle2,
      href: '/products/bag-anatomy'
    },
    {
      title: 'Batch Mix Design Calculator',
      desc: 'Interactive tool computing exact cement bags, granite, sand & water for C20 to C37',
      icon: Calculator,
      href: '/calculator'
    }
  ];

  const terminalLinks = [
    {
      title: 'Star Cement Ghana Plant (Kpone)',
      desc: 'Flagship greenfield cement grinding facility located in Kpone Industrial Area',
      icon: Building2,
      href: '/plants'
    },
    {
      title: 'Vertical Slip-Form Silo Architecture',
      desc: 'High-capacity concrete storage silos erected utilizing specialized slip-form casting',
      icon: Layers,
      href: '/plants/silo-architecture'
    },
    {
      title: 'Raw Material Handling & Tema Port',
      desc: 'Bulk conveyors and feed systems blending raw materials and limestone from Tema Port',
      icon: Truck,
      href: '/plants/raw-material-handling'
    },
    {
      title: 'Kpone Industrial Logistics Corridor',
      desc: 'Strategically positioned in Kpone Industrial Area to shorten regional distribution',
      icon: Compass,
      href: '/plants/logistics-corridor'
    },
    {
      title: 'Sales Representative Locator',
      desc: 'Connect with your dedicated regional commercial officer for site quotes and orders',
      icon: MapPin,
      href: '/sales-reps'
    }
  ];

  const isAboutActive = location.pathname.startsWith('/about');
  const isProductsActive = location.pathname.startsWith('/products');
  const isPlantsActive = location.pathname.startsWith('/plants');

  return (
    <header 
      ref={navContainerRef}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      {/* MAIN NAVIGATION ROW */}
      <div className="border-b border-neutral-200/90 bg-white/95 backdrop-blur-md">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex items-center justify-between h-20 gap-2">
            
            {/* Corporate Brand Logo */}
            <Link 
              to="/" 
              onClick={closeAllMenus}
              aria-label="Star Cement Home"
              className="flex items-center shrink-0 focus-visible:outline-2 focus-visible:outline-[#B91C1C] mr-4 xl:mr-8"
            >
              <Logo />
            </Link>

            {/* Desktop Navigation Links with Mega Menu Triggers */}
            <nav aria-label="Main Corporate Navigation" className="hidden lg:flex items-center gap-1 xl:gap-2 2xl:gap-3 shrink ml-6 lg:ml-10 xl:ml-16 2xl:ml-20">
              
              {/* About Us (Mega Menu Trigger & Direct Link) */}
              <div 
                className="relative shrink-0"
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/about"
                  onClick={closeAllMenus}
                  className={`flex items-center gap-1 xl:gap-1.5 px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-semibold rounded-md transition-colors whitespace-nowrap ${
                    isAboutActive || activeMegaMenu === 'about'
                      ? 'text-[#B91C1C] bg-red-50/70' 
                      : 'text-neutral-800 hover:text-[#B91C1C] hover:bg-neutral-50'
                  }`}
                >
                  <span className="whitespace-nowrap">About Us</span>
                  <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${activeMegaMenu === 'about' ? 'rotate-180 text-[#B91C1C]' : 'text-neutral-400'}`} />
                </Link>
              </div>

              {/* Certified Products (Mega Menu Trigger & Direct Link) */}
              <div 
                className="relative shrink-0"
                onMouseEnter={() => handleMouseEnter('products')}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/products"
                  onClick={closeAllMenus}
                  className={`flex items-center gap-1 xl:gap-1.5 px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-semibold rounded-md transition-colors whitespace-nowrap ${
                    isProductsActive || activeMegaMenu === 'products'
                      ? 'text-[#B91C1C] bg-red-50/70' 
                      : 'text-neutral-800 hover:text-[#B91C1C] hover:bg-neutral-50'
                  }`}
                >
                  <span className="whitespace-nowrap">Products</span>
                  <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${activeMegaMenu === 'products' ? 'rotate-180 text-[#B91C1C]' : 'text-neutral-400'}`} />
                </Link>
              </div>

              {/* Terminals & Depots (Mega Menu Trigger & Direct Link) */}
              <div 
                className="relative shrink-0"
                onMouseEnter={() => handleMouseEnter('terminals')}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/plants"
                  onClick={closeAllMenus}
                  className={`flex items-center gap-1 xl:gap-1.5 px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-semibold rounded-md transition-colors whitespace-nowrap ${
                    isPlantsActive || activeMegaMenu === 'terminals'
                      ? 'text-[#B91C1C] bg-red-50/70' 
                      : 'text-neutral-800 hover:text-[#B91C1C] hover:bg-neutral-50'
                  }`}
                >
                  <span className="whitespace-nowrap">Manufacturing Plant</span>
                  <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${activeMegaMenu === 'terminals' ? 'rotate-180 text-[#B91C1C]' : 'text-neutral-400'}`} />
                </Link>
              </div>

              {/* Direct Route: Projects */}
              <NavLink
                to="/projects"
                onClick={closeAllMenus}
                className={({ isActive }) => 
                  `px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    isActive ? 'text-[#B91C1C] bg-red-50/70' : 'text-neutral-800 hover:text-[#B91C1C] hover:bg-neutral-50'
                  }`
                }
              >
                Projects
              </NavLink>

              {/* Direct Route: Mix Calculator */}
              <NavLink
                to="/calculator"
                onClick={closeAllMenus}
                className={({ isActive }) => 
                  `px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    isActive ? 'text-[#B91C1C] bg-red-50/70' : 'text-neutral-800 hover:text-[#B91C1C] hover:bg-neutral-50'
                  }`
                }
              >
                <span className="hidden 2xl:inline">Mix </span>Calculator
              </NavLink>

              {/* Direct Route: Sustainability */}
              <NavLink
                to="/sustainability"
                onClick={closeAllMenus}
                className={({ isActive }) => 
                  `px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    isActive ? 'text-[#B91C1C] bg-red-50/70' : 'text-neutral-800 hover:text-[#B91C1C] hover:bg-neutral-50'
                  }`
                }
              >
                Sustainability
              </NavLink>

              {/* Direct Route: Contact */}
              <NavLink
                to="/contact"
                onClick={closeAllMenus}
                className={({ isActive }) => 
                  `px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    isActive ? 'text-[#B91C1C] bg-red-50/70' : 'text-neutral-800 hover:text-[#B91C1C] hover:bg-neutral-50'
                  }`
                }
              >
                Contact
              </NavLink>

            </nav>

            {/* Right Action: Find Dealer Primary CTA */}
            <div className="hidden lg:flex items-center shrink-0 ml-auto pl-4">
              <button
                type="button"
                onClick={() => { closeAllMenus(); onOpenDealers?.(); }}
                className="px-5 xl:px-6 py-2.5 bg-[#B91C1C] hover:bg-[#991B1B] text-white text-xs font-bold uppercase tracking-wider rounded-sm shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98] cursor-pointer whitespace-nowrap shrink-0 text-center flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Find Dealer</span>
              </button>
            </div>

            {/* Mobile Viewport Header Controls */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => { closeAllMenus(); onOpenDealers?.(); }}
                className="px-3 py-1.5 bg-[#B91C1C] text-white text-xs font-bold uppercase tracking-wider rounded-sm shadow-sm flex items-center gap-1"
              >
                <MapPin className="w-3 h-3" />
                <span>Find Dealer</span>
              </button>
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-expanded={mobileOpen}
                aria-label="Toggle Corporate Navigation"
                className="p-2 text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 3. DESKTOP MEGA MENU PANELS (3-Column Corporate Architecture) */}
      {activeMegaMenu && (
        <div 
          className="hidden lg:block absolute left-0 right-0 top-full bg-white border-b border-neutral-200 shadow-2xl z-50 animate-fade-in-down"
          onMouseEnter={() => handleMouseEnter(activeMegaMenu)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-8">
            
            {/* === A. ABOUT US MEGA MENU === */}
            {activeMegaMenu === 'about' && (
              <div className="grid grid-cols-12 gap-8 items-stretch">
                
                {/* Column 1: Brand Narrative & Quality Core */}
                <div className="col-span-3 pr-6 border-r border-neutral-200 flex flex-col justify-between relative overflow-hidden">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B91C1C] mb-2 block">
                      Corporate Profile
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-3 leading-tight">
                      Our Story
                    </h3>
                    <p className="text-xs leading-relaxed text-neutral-600 mb-4">
                      Sustainability, structural precision, and unwavering product integrity are at the core of Star Cement Ghana’s operations. Our commitment to responsible corporate governance is underpinned by strict adherence to GS 1118-1:2024 and international ISO standards in quality, environmental management, and occupational safety.
                    </p>
                    <div className="space-y-1.5 pt-3 border-t border-neutral-100">
                      <div className="flex items-center gap-2 text-[11px] font-mono font-semibold text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>ISO 9001:2015 Certified Operations</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-mono font-semibold text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>Ghana Standards Authority Conformance</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-mono font-semibold text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>Full EPA Ghana Environmental Permits</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3">
                    <Link
                      to="/about"
                      onClick={closeAllMenus}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B91C1C] hover:text-[#991B1B] uppercase tracking-wider"
                    >
                      <span>Read Full Company Profile</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Column 2: Quick Navigation Links with Red Line-Art Icons */}
                <div className="col-span-5 px-4">
                  <div className="grid grid-cols-1 gap-2.5">
                    {aboutLinks.map((item, idx) => {
                      const IconComp = item.icon;
                      return (
                        <Link
                          key={idx}
                          to={item.href}
                          onClick={closeAllMenus}
                          className="group flex items-start gap-3.5 p-2.5 rounded-lg hover:bg-neutral-50 transition-colors"
                        >
                          <div className="p-2 rounded-md bg-red-50 text-[#B91C1C] group-hover:bg-[#B91C1C] group-hover:text-white transition-colors duration-200 flex-shrink-0">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-neutral-900 group-hover:text-[#B91C1C] transition-colors leading-snug">
                              {item.title}
                            </h4>
                            <p className="text-[11px] text-neutral-500 leading-normal mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Column 3: Visual Feature Showcase */}
                <div className="col-span-4 pl-6 border-l border-neutral-200 flex flex-col justify-between">
                  <div className="overflow-hidden rounded-lg shadow-sm border border-neutral-200/80 mb-3 relative group">
                    <img 
                      src="/images/hero-plant-bg.jpg" 
                      alt="Star Cement Tema Terminal and Infrastructure" 
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <span className="absolute bottom-2 left-3 text-[10px] font-mono uppercase tracking-widest text-white/90 bg-black/40 px-2 py-0.5 rounded">
                      Tema Terminal Flagship
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900 mb-1">
                      Powering Ghana’s Infrastructure
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                      Renowned as a leading force in high-grade building materials across West Africa, Star Cement delivers precision Portland Limestone Cement designed to withstand coastal humidity and intense structural loads.
                    </p>
                    <Link
                      to="/projects"
                      onClick={closeAllMenus}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B91C1C] hover:text-[#991B1B] uppercase tracking-wider group"
                    >
                      <span>Explore National Case Studies</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

              </div>
            )}

            {/* === B. CERTIFIED PRODUCTS MEGA MENU === */}
            {activeMegaMenu === 'products' && (
              <div className="grid grid-cols-12 gap-8 items-stretch">
                
                {/* Column 1: Statutory Standards Narrative */}
                <div className="col-span-3 pr-6 border-r border-neutral-200 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B91C1C] mb-2 block">
                      Certified Formulations
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-3 leading-tight">
                      Structural Integrity
                    </h3>
                    <p className="text-xs leading-relaxed text-neutral-600 mb-4">
                      Engineered strictly under GS 1118-1:2024 to thrive in Ghana’s tropical heat, maritime salinity, and demanding structural conditions. Every batch undergoes 2-hour quality verification.
                    </p>
                    <div className="p-3 bg-neutral-50 rounded border border-neutral-200 text-xs">
                      <span className="font-mono font-bold text-neutral-800 block mb-1">
                        100% Anti-Counterfeit Guarantee
                      </span>
                      <span className="text-neutral-500 text-[11px] leading-tight block">
                        Direct GSA hologram stamps, automated thermal batch coding, and ultrasonic sack sealing.
                      </span>
                    </div>
                  </div>

                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={() => { closeAllMenus(); onOpenDealers ? onOpenDealers() : onOpenQuote(); }}
                      className="w-full py-2 bg-[#B91C1C] text-white text-xs font-bold uppercase tracking-wider rounded text-center hover:bg-[#991B1B] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Find Authorized Dealer</span>
                    </button>
                  </div>
                </div>

                {/* Column 2: Product & Technical Spec Links */}
                <div className="col-span-5 px-4">
                  <div className="grid grid-cols-1 gap-3">
                    {productLinks.map((item, idx) => {
                      const IconComp = item.icon;
                      return (
                        <Link
                          key={idx}
                          to={item.href}
                          onClick={closeAllMenus}
                          className="group flex items-start gap-3.5 p-3 rounded-lg hover:bg-neutral-50 transition-colors border border-transparent hover:border-neutral-200/80"
                        >
                          <div className="p-2.5 rounded-md bg-red-50 text-[#B91C1C] group-hover:bg-[#B91C1C] group-hover:text-white transition-colors duration-200 flex-shrink-0">
                            <IconComp className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-neutral-900 group-hover:text-[#B91C1C] transition-colors leading-snug">
                              {item.title}
                            </h4>
                            <p className="text-[11px] text-neutral-500 leading-normal mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Column 3: Visual Pallet & Strength Feature */}
                <div className="col-span-4 pl-6 border-l border-neutral-200 flex flex-col justify-between">
                  <div className="p-4 bg-[#F8F9FA] rounded-lg border border-neutral-200/90">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500">
                        Performance Benchmark
                      </span>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-red-100 text-[#B91C1C] rounded">
                        GS 1118-1:2024
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="p-2.5 bg-white rounded border border-neutral-200 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold text-neutral-900">Star Super 42.5R</div>
                          <div className="text-[10px] text-neutral-500 font-mono">CEM II/A-L Rapid Hardening</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-mono font-black text-[#B91C1C]">≥ 52.5 MPa</div>
                          <div className="text-[9px] text-neutral-400 font-mono">28-Day Target</div>
                        </div>
                      </div>

                      <div className="p-2.5 bg-white rounded border border-neutral-200 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold text-neutral-900">Star Solid 32.5R</div>
                          <div className="text-[10px] text-neutral-500 font-mono">CEM II/B-L Structural Masonry</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-mono font-black text-neutral-800">≥ 38.5 MPa</div>
                          <div className="text-[9px] text-neutral-400 font-mono">28-Day Target</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center justify-between">
                      <span className="text-[11px] text-neutral-600 font-medium">
                        Looking for exact quantities?
                      </span>
                      <Link
                        to="/calculator"
                        onClick={closeAllMenus}
                        className="text-xs font-bold text-[#B91C1C] hover:underline cursor-pointer"
                      >
                        Launch Calculator →
                      </Link>
                    </div>
                  </div>

                  <p className="text-[11px] text-neutral-500 mt-3 leading-relaxed">
                    Available in 50kg tear-resistant paper sacks or bulk pneumatic tankers with guaranteed 24/7 delivery.
                  </p>
                </div>

              </div>
            )}

            {/* === C. TERMINALS & LOGISTICS MEGA MENU === */}
            {activeMegaMenu === 'terminals' && (
              <div className="grid grid-cols-12 gap-8 items-stretch">
                
                {/* Column 1: Logistics Network Narrative */}
                <div className="col-span-3 pr-6 border-r border-neutral-200 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B91C1C] mb-2 block">
                      Greenfield Manufacturing
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-3 leading-tight">
                      Star Cement Ghana Plant
                    </h3>
                    <p className="text-xs leading-relaxed text-neutral-600 mb-4">
                      Strategically located in the Kpone Industrial Area, Greater Accra. Engineered with vertical slip-form concrete silos and direct bulk handling from Tema Port.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-neutral-50 rounded border border-neutral-200 text-xs">
                        <span className="text-neutral-600">Annual Grinding:</span>
                        <span className="font-mono font-bold text-neutral-900">750,000 MT / Year</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-neutral-50 rounded border border-neutral-200 text-xs">
                        <span className="text-neutral-600">Silo Complex:</span>
                        <span className="font-mono font-bold text-neutral-900">Vertical Slip-Form Casting</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3">
                    <Link
                      to="/sales-reps"
                      onClick={closeAllMenus}
                      className="inline-flex items-center justify-center gap-1.5 w-full py-2 bg-neutral-900 hover:bg-[#B91C1C] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5 text-red-500" />
                      <span>Find Nearest Sales Rep</span>
                    </Link>
                  </div>
                </div>

                {/* Column 2: Facility Links with Red Line-Art Icons */}
                <div className="col-span-5 px-4">
                  <div className="grid grid-cols-1 gap-2.5">
                    {terminalLinks.map((item, idx) => {
                      const IconComp = item.icon;
                      return (
                        <Link
                          key={idx}
                          to={item.href}
                          onClick={closeAllMenus}
                          className="group flex items-start gap-3.5 p-2.5 rounded-lg hover:bg-neutral-50 transition-colors"
                        >
                          <div className="p-2 rounded-md bg-red-50 text-[#B91C1C] group-hover:bg-[#B91C1C] group-hover:text-white transition-colors duration-200 flex-shrink-0">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-neutral-900 group-hover:text-[#B91C1C] transition-colors leading-snug">
                              {item.title}
                            </h4>
                            <p className="text-[11px] text-neutral-500 leading-normal mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Column 3: Logistics Photo & Hotline */}
                <div className="col-span-4 pl-6 border-l border-neutral-200 flex flex-col justify-between">
                  <div className="overflow-hidden rounded-lg shadow-sm border border-neutral-200/80 mb-3 relative group">
                    <img 
                      src="/images/plant/plant-aerial-overview.jpg" 
                      alt="Star Cement Ghana Greenfield Grinding Plant" 
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-white">
                      <span className="text-[10px] font-mono uppercase tracking-wider bg-[#B91C1C] px-2 py-0.5 rounded">
                        Kpone Industrial Facility
                      </span>
                      <span className="text-[10px] font-mono">
                        750,000 MT Capacity
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-neutral-900 mb-1">
                      Direct Dispatch Hotline
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed mb-3">
                      Need expedited bulk pneumatic tankers or high-volume palletized dispatch to your job site? Contact central logistics control.
                    </p>
                    <div className="flex items-center gap-3">
                      <a
                        href="tel:0531028877"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold font-mono transition-colors"
                      >
                        <Phone className="w-3 h-3 text-[#B91C1C]" />
                        <span>0531028877</span>
                      </a>
                      <a
                        href="tel:0531005067"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-red-50 hover:bg-red-100 text-[#B91C1C] text-xs font-bold font-mono transition-colors"
                      >
                        <Phone className="w-3 h-3 text-[#B91C1C]" />
                        <span>0531005067</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            )}

          </div>
        </div>
      )}

      {/* 4. MOBILE NAVIGATION DRAWER WITH EXPANDABLE ACCORDIONS */}
      {mobileOpen && (
        <div data-lenis-prevent className="lg:hidden border-t border-neutral-200 bg-white px-4 py-5 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto">
          
          {/* Mobile Utility Strip Links */}
          <div className="flex items-center justify-between pb-3 border-b border-neutral-100 text-xs">
            <Link 
              to="/sales-reps"
              onClick={closeAllMenus}
              className="inline-flex items-center gap-1 font-semibold text-[#B91C1C]"
            >
              <MapPin className="w-3.5 h-3.5" />
              Find Sales Rep
            </Link>
            <Link 
              to="/admin"
              onClick={closeAllMenus}
              className="inline-flex items-center gap-1 font-semibold text-neutral-700"
            >
              <Lock className="w-3.5 h-3.5 text-neutral-500" />
              Staff Portal
            </Link>
            <a 
              href="https://wa.me/233244312000?text=Hello%20Star%20Cement%20Ghana" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-[#128C7E]"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
              WhatsApp
            </a>
          </div>

          {/* Accordion 1: About Us */}
          <div className="border border-neutral-200 rounded-lg overflow-hidden">
            <button
              type="button"
              onClick={() => setMobileSubmenu(mobileSubmenu === 'about' ? null : 'about')}
              className="w-full flex items-center justify-between p-3.5 text-left font-bold text-neutral-900 bg-neutral-50/70 hover:bg-neutral-100 transition-colors"
            >
              <span className="text-sm">About Star Cement</span>
              <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform ${mobileSubmenu === 'about' ? 'rotate-180 text-[#B91C1C]' : ''}`} />
            </button>
            {mobileSubmenu === 'about' && (
              <div className="p-3 bg-white space-y-2 border-t border-neutral-200">
                {aboutLinks.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.href}
                    onClick={closeAllMenus}
                    className="block p-2 rounded hover:bg-neutral-50"
                  >
                    <div className="text-xs font-bold text-neutral-800">{item.title}</div>
                    <div className="text-[10px] text-neutral-500">{item.desc}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Accordion 2: Certified Products */}
          <div className="border border-neutral-200 rounded-lg overflow-hidden">
            <button
              type="button"
              onClick={() => setMobileSubmenu(mobileSubmenu === 'products' ? null : 'products')}
              className="w-full flex items-center justify-between p-3.5 text-left font-bold text-neutral-900 bg-neutral-50/70 hover:bg-neutral-100 transition-colors"
            >
              <span className="text-sm">Certified Products</span>
              <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform ${mobileSubmenu === 'products' ? 'rotate-180 text-[#B91C1C]' : ''}`} />
            </button>
            {mobileSubmenu === 'products' && (
              <div className="p-3 bg-white space-y-2 border-t border-neutral-200">
                {productLinks.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.href}
                    onClick={closeAllMenus}
                    className="block p-2 rounded hover:bg-neutral-50"
                  >
                    <div className="text-xs font-bold text-neutral-800">{item.title}</div>
                    <div className="text-[10px] text-neutral-500">{item.desc}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Accordion 3: Plants & Depots */}
          <div className="border border-neutral-200 rounded-lg overflow-hidden">
            <button
              type="button"
              onClick={() => setMobileSubmenu(mobileSubmenu === 'terminals' ? null : 'terminals')}
              className="w-full flex items-center justify-between p-3.5 text-left font-bold text-neutral-900 bg-neutral-50/70 hover:bg-neutral-100 transition-colors"
            >
              <span className="text-sm">Manufacturing Plant (Kpone)</span>
              <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform ${mobileSubmenu === 'terminals' ? 'rotate-180 text-[#B91C1C]' : ''}`} />
            </button>
            {mobileSubmenu === 'terminals' && (
              <div className="p-3 bg-white space-y-2 border-t border-neutral-200">
                {terminalLinks.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.href}
                    onClick={closeAllMenus}
                    className="block p-2 rounded hover:bg-neutral-50"
                  >
                    <div className="text-xs font-bold text-neutral-800">{item.title}</div>
                    <div className="text-[10px] text-neutral-500">{item.desc}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Direct Mobile Links */}
          <div className="space-y-1 pt-1">
            <NavLink
              to="/projects"
              onClick={closeAllMenus}
              className={({ isActive }) => 
                `block px-3 py-2.5 text-sm font-bold rounded ${
                  isActive ? 'text-[#B91C1C] bg-red-50' : 'text-neutral-800 hover:text-[#B91C1C] hover:bg-neutral-50'
                }`
              }
            >
              Infrastructure Projects
            </NavLink>
            <NavLink
              to="/calculator"
              onClick={closeAllMenus}
              className={({ isActive }) => 
                `block px-3 py-2.5 text-sm font-bold rounded ${
                  isActive ? 'text-[#B91C1C] bg-red-50' : 'text-neutral-800 hover:text-[#B91C1C] hover:bg-neutral-50'
                }`
              }
            >
              Mix Design Calculator
            </NavLink>
            <NavLink
              to="/sustainability"
              onClick={closeAllMenus}
              className={({ isActive }) => 
                `block px-3 py-2.5 text-sm font-bold rounded ${
                  isActive ? 'text-[#B91C1C] bg-red-50' : 'text-neutral-800 hover:text-[#B91C1C] hover:bg-neutral-50'
                }`
              }
            >
              Sustainability & Decarbonization
            </NavLink>
            <NavLink
              to="/contact"
              onClick={closeAllMenus}
              className={({ isActive }) => 
                `block px-3 py-2.5 text-sm font-bold rounded ${
                  isActive ? 'text-[#B91C1C] bg-red-50' : 'text-neutral-800 hover:text-[#B91C1C] hover:bg-neutral-50'
                }`
              }
            >
              Contact Us
            </NavLink>
          </div>

          {/* Mobile Action Buttons */}
          <div className="pt-3 border-t border-neutral-200 space-y-2">
            <button
              type="button"
              onClick={() => { closeAllMenus(); onOpenDealers?.(); }}
              className="w-full py-3 bg-[#B91C1C] text-white text-xs font-bold uppercase tracking-wider rounded shadow-sm text-center flex items-center justify-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Find Authorized Dealer</span>
            </button>
            <Link
              to="/calculator"
              onClick={closeAllMenus}
              className="block w-full py-2.5 border border-neutral-300 text-neutral-800 text-xs font-mono font-bold uppercase tracking-wider rounded text-center hover:bg-neutral-50"
            >
              Open Batching Calculator
            </Link>
          </div>

        </div>
      )}

    </header>
  );
}
