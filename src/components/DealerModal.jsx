import React, { useState, useEffect, useMemo } from 'react';
import { 
  X, 
  Search, 
  MapPin, 
  Phone, 
  Clock, 
  Truck, 
  ShieldCheck, 
  Building2, 
  MessageSquare, 
  ExternalLink,
  CheckCircle2,
  Filter,
  Layers,
  ChevronRight,
  Sparkles,
  PhoneCall
} from 'lucide-react';

export default function DealerModal({ isOpen, onClose, dealers = [] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('All');
  const [selectedGrade, setSelectedGrade] = useState('All');

  // Prevent background scroll when open & listen for Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Unique list of states/regions
  const stateOptions = useMemo(() => {
    const set = new Set(dealers.map(d => d.state).filter(Boolean));
    return ['All', ...Array.from(set)];
  }, [dealers]);

  // Filtered dealers list
  const filteredDealers = useMemo(() => {
    return dealers.filter(d => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || (
        d.name?.toLowerCase().includes(q) ||
        d.city?.toLowerCase().includes(q) ||
        d.state?.toLowerCase().includes(q) ||
        d.address?.toLowerCase().includes(q) ||
        d.contactPerson?.toLowerCase().includes(q) ||
        d.phone?.includes(q)
      );

      const matchesState = selectedState === 'All' || d.state === selectedState;
      const matchesGrade = selectedGrade === 'All' || 
        d.stockGrades?.some(g => g.toLowerCase().includes(selectedGrade.toLowerCase()));

      return matchesSearch && matchesState && matchesGrade;
    });
  }, [dealers, searchQuery, selectedState, selectedGrade]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/75 backdrop-blur-sm animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-neutral-200/90 w-full max-w-5xl my-auto max-h-[92vh] flex flex-col overflow-hidden animate-scale-in text-left"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* 1. Modal Header */}
        <div className="p-5 sm:p-6 lg:p-7 border-b border-neutral-200 bg-neutral-900 text-white relative">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-xs bg-[#B91C1C] text-white text-[10px] font-mono uppercase font-bold tracking-widest">
              Authorized Distribution Network
            </span>
            <span className="text-neutral-400 text-xs hidden sm:inline">•</span>
            <span className="text-neutral-300 text-xs font-mono hidden sm:inline">
              Ghana Nationwide Coverage
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Find an Authorized Star Cement Dealer
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 mt-1.5 max-w-2xl font-normal leading-relaxed">
            Connect directly with verified regional distributors, stockists, and depots for immediate 50kg bag procurement or bulk tanker job-site delivery.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-neutral-800 text-xs font-mono">
            <div>
              <span className="text-neutral-400 text-[11px] block">Verified Hubs:</span>
              <span className="text-white font-bold text-sm sm:text-base">{dealers.length} Dealers</span>
            </div>
            <div>
              <span className="text-neutral-400 text-[11px] block">Statutory Assurance:</span>
              <span className="text-emerald-400 font-bold text-sm sm:text-base">100% GSA Certified</span>
            </div>
            <div>
              <span className="text-neutral-400 text-[11px] block">Dispatch Logistics:</span>
              <span className="text-white font-bold text-sm sm:text-base">Flatbeds & Tankers</span>
            </div>
          </div>
        </div>

        {/* 2. Interactive Search & Regional Filter Controls */}
        <div className="p-4 sm:p-5 bg-[#F8F9FA] border-b border-neutral-200 space-y-3">
          <div className="flex flex-col md:flex-row gap-3">
            
            {/* Search Input */}
            <div className="relative flex-grow">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by dealership name, city, state, or street address..."
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-white border border-neutral-200 rounded-lg focus:outline-none focus:border-[#B91C1C] focus:ring-1 focus:ring-[#B91C1C] transition-all placeholder:text-neutral-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-neutral-700 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Product Grade Filter */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-mono text-neutral-500 hidden sm:inline">Grade:</span>
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="px-3.5 py-2.5 text-xs bg-white border border-neutral-200 rounded-lg focus:outline-none focus:border-[#B91C1C] cursor-pointer"
              >
                <option value="All">All Formulations</option>
                <option value="42.5R">Star Super 42.5R</option>
                <option value="32.5R">Star Solid 32.5R</option>
                <option value="Bulk">Bulk Pneumatic Tankers</option>
              </select>
            </div>
          </div>

          {/* Regional Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
            <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mr-1 shrink-0">Region:</span>
            {stateOptions.map((st) => {
              const isSelected = selectedState === st;
              const count = st === 'All' 
                ? dealers.length 
                : dealers.filter(d => d.state === st).length;

              return (
                <button
                  key={st}
                  type="button"
                  onClick={() => setSelectedState(st)}
                  className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-[#B91C1C] text-white shadow-xs font-semibold'
                      : 'bg-white text-neutral-600 hover:bg-neutral-200/80 border border-neutral-200'
                  }`}
                >
                  {st.replace(' Region', '')} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Dealer Cards List (Scrollable) */}
        <div className="flex-grow overflow-y-auto p-4 sm:p-6 space-y-4 max-h-[55vh] bg-[#F7F6F3]">
          
          <div className="flex items-center justify-between text-xs text-neutral-500 font-mono mb-2">
            <span>Showing {filteredDealers.length} of {dealers.length} Authorized Locations</span>
            {(searchQuery || selectedState !== 'All' || selectedGrade !== 'All') && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedState('All');
                  setSelectedGrade('All');
                }}
                className="text-[#B91C1C] hover:underline cursor-pointer"
              >
                Reset all filters
              </button>
            )}
          </div>

          {filteredDealers.length === 0 ? (
            <div className="text-center py-12 px-4 bg-white rounded-xl border border-neutral-200">
              <Building2 className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
              <h3 className="font-serif text-lg font-bold text-neutral-800">No Authorized Dealers Found</h3>
              <p className="text-xs text-neutral-500 mt-1 max-w-md mx-auto">
                No verified dealers matched your current search filters. Try clearing your search query or selecting a different region.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedState('All');
                  setSelectedGrade('All');
                }}
                className="mt-4 px-4 py-2 bg-neutral-900 text-white text-xs font-mono uppercase tracking-wider rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredDealers.map((dealer) => (
                <div
                  key={dealer.id}
                  className="bg-white rounded-xl border border-neutral-200/90 hover:border-neutral-300 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Header: Name + Tier */}
                    <div className="flex items-start justify-between gap-3 mb-2.5">
                      <div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <h4 className="font-serif text-base sm:text-lg font-bold text-neutral-900 leading-snug group-hover:text-[#B91C1C] transition-colors">
                            {dealer.name}
                          </h4>
                          {dealer.isVerified && (
                            <span 
                              title="Officially Authorized & GSA Audited"
                              className="inline-flex items-center text-emerald-600"
                            >
                              <CheckCircle2 className="w-4 h-4 fill-emerald-100" />
                            </span>
                          )}
                        </div>
                        <span className="inline-block mt-1 px-2 py-0.5 rounded-xs text-[10px] font-mono uppercase tracking-wider font-semibold bg-neutral-100 text-neutral-700 border border-neutral-200">
                          {dealer.tier}
                        </span>
                      </div>

                      {dealer.rating && (
                        <div className="bg-amber-50 border border-amber-200 px-2 py-0.5 rounded text-[11px] font-mono font-bold text-amber-800 shrink-0">
                          ★ {Number(dealer.rating).toFixed(1)}
                        </div>
                      )}
                    </div>

                    {/* Location Information */}
                    <div className="space-y-1.5 text-xs text-neutral-600 mb-4">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#B91C1C] shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-neutral-800">
                            {dealer.city}, <span className="text-neutral-500 font-normal">{dealer.state}</span>
                          </p>
                          <p className="text-[11px] text-neutral-500 leading-normal mt-0.5">
                            {dealer.address}
                          </p>
                        </div>
                      </div>

                      {dealer.operatingHours && (
                        <div className="flex items-center gap-2 text-[11px] text-neutral-500 pt-1">
                          <Clock className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                          <span>{dealer.operatingHours}</span>
                        </div>
                      )}

                      {dealer.contactPerson && (
                        <div className="flex items-center gap-2 text-[11px] text-neutral-500">
                          <span className="font-mono text-[10px] uppercase text-neutral-400">Desk Lead:</span>
                          <span className="font-medium text-neutral-700">{dealer.contactPerson}</span>
                        </div>
                      )}
                    </div>

                    {/* Stocked Grades & Minimum Order */}
                    <div className="pt-3 border-t border-neutral-100 mb-4 space-y-2">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[10px] font-mono uppercase text-neutral-400 mr-1">Stocked:</span>
                        {dealer.stockGrades?.map((grade, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 bg-neutral-50 border border-neutral-200 rounded text-[10px] font-mono text-neutral-700"
                          >
                            {grade}
                          </span>
                        ))}
                      </div>

                      {dealer.deliveryAvailable && (
                        <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium">
                          <Truck className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Job-Site Delivery Fleet Available</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions & Contact Call-to-actions */}
                  <div className="pt-3 border-t border-neutral-100 flex items-center gap-2">
                    {/* Primary Direct Phone Call */}
                    <a
                      href={`tel:${dealer.phone?.replace(/[^0-9+]/g, '')}`}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>{dealer.phone}</span>
                    </a>

                    {/* WhatsApp Action */}
                    {dealer.whatsapp && (
                      <a
                        href={`https://wa.me/${dealer.whatsapp}?text=${encodeURIComponent(`Hello, I would like to inquire about purchasing Star Cement at ${dealer.name}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer"
                        title="Chat on WhatsApp"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">WhatsApp</span>
                      </a>
                    )}
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>

        {/* 4. Modal Footer / Commercial Support */}
        <div className="p-4 sm:p-5 bg-white border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="text-neutral-500 font-mono text-[11px] text-center sm:left">
            <span>Direct Plant Grinding Hub: </span>
            <strong className="text-neutral-800 font-medium">Kpone Industrial Enclave, Greater Accra</strong>
            <span className="block sm:inline sm:ml-2 text-neutral-400">• Hotline: +233 (0) 30 274 4888</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-lg text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer shrink-0"
          >
            Close Directory
          </button>
        </div>

      </div>
    </div>
  );
}
