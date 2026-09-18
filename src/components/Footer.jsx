import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Shield, FileText, CheckCircle2 } from 'lucide-react';
import Logo from './Logo';

export default function Footer({ onOpenQuote, onOpenCalculator }) {
  return (
    <footer className="bg-[#11161B] text-neutral-300 border-t border-neutral-800">
      
      {/* Top Dispatch Action Strip with Scroll Reveal */}
      <div className="border-b border-neutral-800/90 bg-[#161C22] reveal-init">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <span className="font-mono text-xs uppercase text-[#B91C1C] font-bold tracking-widest block mb-2">
                Centralized Commercial Dispatch Desk
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Procure Certified 50kg Bags and Bulk Pneumatic Tankers
              </h3>
              <p className="text-sm text-neutral-400 mt-1.5 max-w-2xl">
                Supplying ready-mix batching plants, infrastructure contractors, and building material distributors across Ghana.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
              <a
                href="tel:+233303204401"
                className="flex items-center gap-2.5 px-5 py-3.5 bg-neutral-900 border border-neutral-700 hover:border-neutral-500 rounded-sm text-xs font-mono font-bold text-white hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#B91C1C]" />
                <span>+233 (0) 30 320 4401</span>
              </a>
              <button
                type="button"
                onClick={onOpenQuote}
                className="px-7 py-3.5 bg-[#B91C1C] hover:bg-[#991B1B] text-white text-xs font-bold uppercase tracking-wider rounded-sm shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer"
              >
                Order Star Cement
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Deep Multi-Tier Corporate Sitemap */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Col 1: Corporate Entity & Plant Location (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Logo light={true} />

            <p className="text-sm text-neutral-400 leading-relaxed pt-1">
              Star Cement Ltd. is a privately owned cement manufacturing company established in 2021, operating a modern 750,000 MT grinding facility with a 75 TPH closed-circuit mill and slip-form silo complex in the Kpone Industrial Area, Greater Accra, under strict compliance with GS 1118:2024.
            </p>

            <div className="text-xs font-mono text-neutral-400 space-y-2 pt-3 border-t border-neutral-800">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B91C1C] flex-shrink-0 mt-0.5" />
                <span>Plot: AGR/IND/Y/5, A&B, Kpone Industrial Area - Greater Accra, Ghana</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#B91C1C] flex-shrink-0" />
                <a href="tel:0531028877" className="text-white hover:text-[#B91C1C] transition-colors">0531028877</a>
                <span>/</span>
                <a href="tel:0531005067" className="text-white hover:text-[#B91C1C] transition-colors">0531005067</a>
              </div>
              <div>
                <span>Email: </span>
                <a 
                  href="mailto:sales@star-cement.com" 
                  className="text-white hover:text-[#B91C1C] transition-colors"
                >
                  sales@star-cement.com
                </a>
              </div>
              <div>
                <span>Corporate Domain: </span>
                <a 
                  href="https://www.star-cement.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-white hover:text-[#B91C1C] transition-colors underline"
                >
                  www.star-cement.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Certified Products & Engineering (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-white font-bold block border-b border-neutral-800 pb-3">
              Certified Formulations
            </span>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <Link to="/products/star-super-42-5r" className="hover:text-white transition-colors block">
                  <span className="font-semibold text-white">Star 42.5R (Red Bag)</span>
                  <span className="text-xs text-neutral-500 block font-mono">CEM II/A-L Heavy Structural</span>
                </Link>
              </li>
              <li>
                <Link to="/products/star-solid-32-5r" className="hover:text-white transition-colors block">
                  <span className="font-semibold text-white">Star 32.5R (Blue Bag)</span>
                  <span className="text-xs text-neutral-500 block font-mono">CEM II/B-L Masonry & Sandcrete</span>
                </Link>
              </li>
              <li className="pt-2 border-t border-neutral-800/80">
                <Link 
                  to="/calculator" 
                  className="text-left text-neutral-300 hover:text-white transition-colors text-xs font-mono block"
                >
                  Civil Concrete Mix Calculator
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-white transition-colors text-xs font-mono block">
                  Company Heritage & Profile
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-neutral-300 hover:text-white transition-colors text-xs font-mono block">
                  Infrastructure Case Studies
                </Link>
              </li>
              <li>
                <Link to="/dealers" className="text-neutral-300 hover:text-white transition-colors text-xs font-mono block">
                  Authorized Dealers Directory
                </Link>
              </li>
              <li>
                <Link to="/sales-reps" className="text-neutral-300 hover:text-white transition-colors text-xs font-mono block">
                  Regional Sales Officers
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Manufacturing Facility (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-white font-bold block border-b border-neutral-800 pb-3">
              Manufacturing Facility
            </span>
            <ul className="space-y-3 text-xs text-neutral-400 font-mono">
              <li>
                <Link to="/plants" className="block group">
                  <span className="font-semibold text-white block text-sm font-sans group-hover:text-[#B91C1C] transition-colors">Star Cement Ghana Plant</span>
                  <span className="text-neutral-500">Kpone Industrial Area, Greater Accra</span>
                </Link>
              </li>
              <li>
                <Link to="/plants" className="block group">
                  <span className="font-semibold text-white block text-sm font-sans group-hover:text-[#B91C1C] transition-colors">Modern Grinding Complex</span>
                  <span className="text-neutral-500">750,000 MT Installed Annual Capacity</span>
                </Link>
              </li>
              <li>
                <Link to="/plants" className="block group">
                  <span className="font-semibold text-white block text-sm font-sans group-hover:text-[#B91C1C] transition-colors">Closed-Circuit Mill</span>
                  <span className="text-neutral-500">75 TPH High-Efficiency Milling & Separators</span>
                </Link>
              </li>
              <li>
                <Link to="/plants/silo-architecture" className="block group">
                  <span className="font-semibold text-white block text-sm font-sans group-hover:text-[#B91C1C] transition-colors">Slip-Form Silo Complex</span>
                  <span className="text-neutral-500">Vertical Slip-Form Casting Construction</span>
                </Link>
              </li>
              <li>
                <Link to="/plants/raw-material-handling" className="block group">
                  <span className="font-semibold text-white block text-sm font-sans group-hover:text-[#B91C1C] transition-colors">Tema Port Raw Materials Intake</span>
                  <span className="text-neutral-500">Bulk Clinker, Gypsum & Limestone</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quality & Compliance (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-white font-bold block border-b border-neutral-800 pb-3">
              Quality Assurance
            </span>
            <ul className="space-y-2 text-xs font-mono text-neutral-400">
              <li>
                <Link to="/about/accreditations" className="text-white font-bold hover:text-[#B91C1C] transition-colors block">
                  GS 1118:2024
                </Link>
              </li>
              <li>
                <Link to="/about/accreditations" className="hover:text-white transition-colors block">
                  ISO 9001:2015 QA
                </Link>
              </li>
              <li>
                <Link to="/about/laboratory" className="hover:text-white transition-colors block">
                  Central Laboratory
                </Link>
              </li>
              <li>
                <Link to="/products/bag-anatomy" className="hover:text-white transition-colors block">
                  11-Point Bag Markings
                </Link>
              </li>
              <li className="pt-2 border-t border-neutral-800">
                <Link to="/sustainability" className="text-[#B91C1C] hover:underline font-semibold block">
                  Decarbonization Plan
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Technical Disclaimer Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} STAR CEMENT GHANA LIMITED. ALL RIGHTS RESERVED.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <span>GHANA STANDARDS AUTHORITY CERTIFIED</span>
            <span>NET WEIGHT: 50kg ± 0.5kg</span>
            <span>SPEC: GS 1118-1:2024</span>
            <Link
              to="/admin"
              className="text-neutral-400 hover:text-[#B91C1C] underline transition-colors cursor-pointer"
            >
              Staff Portal
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
