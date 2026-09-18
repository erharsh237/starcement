import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Clock, 
  Truck, 
  ShieldCheck, 
  Search, 
  MessageSquare, 
  ChevronRight, 
  Layers, 
  CheckCircle2,
  Sparkles,
  ArrowRight,
  PhoneCall
} from 'lucide-react';

export default function DealersPage({ dealers = [] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('All');
  const [selectedGrade, setSelectedGrade] = useState('All');

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

  return (
    <div className="bg-[#F7F6F3] min-h-screen text-left">
      
      {/* 1. Header & Breadcrumbs */}
      <section className="bg-neutral-900 text-white pt-12 pb-16 relative overflow-hidden border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <nav className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#B91C1C] font-bold">Authorized Dealers</span>
          </nav>

          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-3">
              National Commercial Distribution Network
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
              Authorized Star Cement Dealers Directory
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              Locate authorized cement stockists, Tier-1 distributors, and regional distribution depots across Greater Accra, Ashanti, Western, Central, Eastern, Northern, Volta, and Bono regions for immediate site supply.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-neutral-800 max-w-4xl text-xs font-mono">
            <div>
              <span className="text-neutral-400 block text-[11px]">Active Hubs</span>
              <span className="text-white font-serif text-2xl font-bold">{dealers.length} Certified Dealers</span>
            </div>
            <div>
              <span className="text-neutral-400 block text-[11px]">Statutory Conformance</span>
              <span className="text-emerald-400 font-serif text-2xl font-bold">100% GSA Sealed</span>
            </div>
            <div>
              <span className="text-neutral-400 block text-[11px]">Stock Formulations</span>
              <span className="text-white font-serif text-2xl font-bold">42.5R & 32.5R</span>
            </div>
            <div>
              <span className="text-neutral-400 block text-[11px]">Haulage Logistics</span>
              <span className="text-white font-serif text-2xl font-bold">Site Delivery</span>
            </div>
          </div>

        </div>

        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-center">
          <Building2 className="w-96 h-96 text-white" />
        </div>
      </section>

      {/* 2. Interactive Search & Filters */}
      <section className="sticky top-20 z-30 bg-white border-b border-neutral-200 shadow-xs py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex flex-col md:flex-row gap-3">
            
            {/* Search Input */}
            <div className="relative flex-grow">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by dealership name, city, state, or address..."
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:bg-white focus:outline-none focus:border-[#B91C1C] focus:ring-1 focus:ring-[#B91C1C] transition-all placeholder:text-neutral-400"
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
                className="px-3.5 py-2.5 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:bg-white focus:outline-none focus:border-[#B91C1C] cursor-pointer"
              >
                <option value="All">All Formulations</option>
                <option value="42.5R">Star Super 42.5R</option>
                <option value="32.5R">Star Solid 32.5R</option>
                <option value="Bulk">Bulk Tanker Deliveries</option>
              </select>
            </div>

          </div>

          {/* Regional Pill Selectors */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
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
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 border border-neutral-200'
                  }`}
                >
                  {st.replace(' Region', '')} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Dealer Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <div className="flex items-center justify-between text-xs text-neutral-500 font-mono mb-6">
          <span>Displaying {filteredDealers.length} of {dealers.length} verified distributors across Ghana</span>
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
              Clear filters
            </button>
          )}
        </div>

        {filteredDealers.length === 0 ? (
          <div className="text-center py-16 px-4 bg-white rounded-xl border border-neutral-200 max-w-lg mx-auto">
            <Building2 className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
            <h3 className="font-serif text-lg font-bold text-neutral-800">No Authorized Dealers Found</h3>
            <p className="text-xs text-neutral-500 mt-1 max-w-md mx-auto">
              No dealers matched your current filters. Try resetting the filters to view all authorized distribution depots.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDealers.map((dealer) => (
              <div
                key={dealer.id}
                className="bg-white rounded-xl border border-neutral-200/90 hover:border-neutral-300 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  
                  {/* Card Header: Name & Verification */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <h3 className="font-serif text-lg font-bold text-neutral-900 leading-snug group-hover:text-[#B91C1C] transition-colors">
                        {dealer.name}
                      </h3>
                      {dealer.isVerified && (
                        <span title="Officially Authorized & GSA Audited" className="text-emerald-600">
                          <CheckCircle2 className="w-4 h-4 fill-emerald-100" />
                        </span>
                      )}
                    </div>
                    {dealer.rating && (
                      <div className="bg-amber-50 border border-amber-200 px-2 py-0.5 rounded text-[11px] font-mono font-bold text-amber-800 shrink-0">
                        ★ {Number(dealer.rating).toFixed(1)}
                      </div>
                    )}
                  </div>

                  <span className="inline-block mb-4 px-2 py-0.5 rounded-xs text-[10px] font-mono uppercase tracking-wider font-semibold bg-neutral-100 text-neutral-700 border border-neutral-200">
                    {dealer.tier}
                  </span>

                  {/* Location Details */}
                  <div className="space-y-2 text-xs text-neutral-600 mb-5">
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

                  {/* Stocked Grades */}
                  <div className="pt-3 border-t border-neutral-100 mb-5 space-y-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[10px] font-mono uppercase text-neutral-400 mr-1">Stock:</span>
                      {dealer.stockGrades?.map((grade, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-neutral-50 border border-neutral-200 rounded text-[10px] font-mono text-neutral-700"
                        >
                          {grade}
                        </span>
                      ))}
                    </div>

                    {dealer.minimumOrder && (
                      <div className="text-[11px] text-neutral-500 font-mono">
                        <span className="text-neutral-400">Orders: </span>
                        {dealer.minimumOrder}
                      </div>
                    )}

                    {dealer.deliveryAvailable && (
                      <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium pt-1">
                        <Truck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Job-Site Delivery Fleet Available</span>
                      </div>
                    )}
                  </div>

                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-neutral-100 flex items-center gap-2">
                  <a
                    href={`tel:${dealer.phone?.replace(/[^0-9+]/g, '')}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>{dealer.phone}</span>
                  </a>

                  {dealer.whatsapp && (
                    <a
                      href={`https://wa.me/${dealer.whatsapp}?text=${encodeURIComponent(`Hello, I would like to inquire about purchasing Star Cement at ${dealer.name}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer"
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

      </section>

      {/* 4. Commercial Partnership Banner */}
      <section className="bg-white border-t border-neutral-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-900 rounded-2xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center md:text-left">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold block mb-2">
                Commercial Dealership Application
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                Become an Authorized Star Cement Stockist
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
                Join Ghana's fastest growing industrial distribution network. Benefit from direct mill allocations, priority haulage dispatch, credit facility terms, and verified dealer accreditation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#B91C1C] hover:bg-red-800 text-white rounded-lg text-xs font-mono uppercase tracking-wider font-semibold transition-colors"
              >
                <span>Apply for Dealership</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
