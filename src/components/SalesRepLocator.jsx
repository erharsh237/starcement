import React, { useState, useMemo } from 'react';
import { salesReps } from '../data/salesReps';
import { Search, Phone, MessageCircle, MapPin, Compass, ArrowRight, X } from 'lucide-react';

export default function SalesRepLocator({ onContactRep, salesReps: propReps }) {
  const currentReps = propReps && propReps.length > 0 ? propReps : salesReps;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRepId, setSelectedRepId] = useState(currentReps[0]?.id || 'rep-accra-tema');
  const [detecting, setDetecting] = useState(false);
  const [geoDistanceMap, setGeoDistanceMap] = useState({});
  const [geoMessage, setGeoMessage] = useState('');
  const [nearestRepId, setNearestRepId] = useState(null);

  // Haversine distance formula in kilometers
  const calculateDistanceKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c);
  };

  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      setGeoMessage('Geolocation is not supported by your browser.');
      return;
    }

    setDetecting(true);
    setGeoMessage('Detecting nearest Star Cement commercial territory...');

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;

        const distances = {};
        let minDistance = Infinity;
        let closestId = null;

        currentReps.forEach(rep => {
          const dist = calculateDistanceKm(userLat, userLng, rep.coordinates.lat, rep.coordinates.lng);
          distances[rep.id] = dist;
          if (dist < minDistance) {
            minDistance = dist;
            closestId = rep.id;
          }
        });

        setGeoDistanceMap(distances);
        setNearestRepId(closestId);
        if (closestId) {
          setSelectedRepId(closestId);
        }
        setDetecting(false);
        setGeoMessage(`Sorted by proximity to your coordinates. Nearest depot: ${distances[closestId]} km.`);
      },
      (error) => {
        setDetecting(false);
        setGeoMessage('Location permission denied. Search your city or select a territory directly.');
      },
      { timeout: 8000 }
    );
  };

  // Filtered reps based on search query
  const filteredReps = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    let list = currentReps.filter((rep) => {
      if (!term) return true;
      return (
        rep.name.toLowerCase().includes(term) ||
        rep.hub.toLowerCase().includes(term) ||
        rep.corridor.toLowerCase().includes(term) ||
        rep.region.toLowerCase().includes(term) ||
        rep.coverageCities.some(city => city.toLowerCase().includes(term)) ||
        rep.specialization.toLowerCase().includes(term)
      );
    });

    // If geolocation distance map exists, sort by distance
    if (Object.keys(geoDistanceMap).length > 0) {
      list = [...list].sort((a, b) => {
        const distA = geoDistanceMap[a.id] ?? 99999;
        const distB = geoDistanceMap[b.id] ?? 99999;
        return distA - distB;
      });
    }

    return list;
  }, [searchTerm, geoDistanceMap, currentReps]);

  // Keep selected rep valid
  const activeRep = useMemo(() => {
    const found = filteredReps.find(r => r.id === selectedRepId);
    if (found) return found;
    return filteredReps[0] || currentReps[0];
  }, [filteredReps, selectedRepId, currentReps]);

  const activeDistance = geoDistanceMap[activeRep?.id];
  const prefilledWhatsApp = activeRep
    ? encodeURIComponent(
        `Hello ${activeRep.name}, I am contacting you from the Star Cement website regarding commercial cement supply in ${activeRep.region}.`
      )
    : '';

  return (
    <section id="sales-reps" className="py-16 sm:py-20 lg:py-24 bg-white text-neutral-900 border-t border-neutral-200 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <div className="max-w-3xl mb-12 reveal-init">
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#B91C1C] mb-2.5">
            Commercial Territory Directorate
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-neutral-950 tracking-tight leading-tight">
            Find & Contact Your Nearest Sales Representative
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed font-normal">
            Connect directly with Star Cement regional commercial leads for wholesale bulk orders, site weighbridge schedules, and technical batching guidance.
          </p>
        </div>

        {/* Minimalist Search & Geolocation Strip with Scroll Reveal */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8 reveal-init">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by city (e.g. Accra, Kumasi, Takoradi, Tamale, Kasoa) or officer name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#F7F6F3] border border-neutral-200 rounded-xl pl-11 pr-10 py-3.5 text-xs sm:text-sm font-mono text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#B91C1C] focus:bg-white transition-all"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-neutral-700 transition-colors cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={handleDetectLocation}
            disabled={detecting}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-neutral-950 hover:bg-[#B91C1C] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl hover:-translate-y-0.5 active:scale-[0.98] transition-all shadow-sm flex-shrink-0 cursor-pointer"
          >
            <Compass className={`w-4 h-4 ${detecting ? 'animate-spin' : ''}`} />
            <span>{detecting ? 'Detecting Location...' : 'Detect Nearest Rep'}</span>
          </button>
        </div>

        {/* Optional Status / Feedback Line */}
        {geoMessage && (
          <div className="mb-8 flex items-center gap-2 text-xs font-mono text-neutral-600 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>{geoMessage}</span>
          </div>
        )}

        {/* Mobile Territory Scrollable Selector (Visible on small screens) */}
        <div className="lg:hidden flex overflow-x-auto pb-2 gap-2 mb-6 scrollbar-none">
          {filteredReps.map((rep) => {
            const isSelected = activeRep?.id === rep.id;
            const dist = geoDistanceMap[rep.id];
            return (
              <button
                key={rep.id}
                type="button"
                onClick={() => setSelectedRepId(rep.id)}
                className={`px-4 py-2.5 text-xs font-mono font-bold rounded-lg whitespace-nowrap transition-all flex-shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-neutral-950 text-white shadow-md'
                    : 'bg-[#F7F6F3] text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                <span>{rep.region}</span>
                {dist !== undefined && (
                  <span className="ml-1.5 text-[10px] text-neutral-400">
                    ({dist}km)
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Interactive Master-Detail Territory Console */}
        {filteredReps.length > 0 && activeRep ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Commercial Territory Leads List with Slide In */}
            <div className="hidden lg:flex lg:col-span-5 flex-col space-y-3 reveal-left">
              <div className="text-[11px] font-mono uppercase font-bold tracking-wider text-neutral-400 mb-1">
                Regional Commercial Leads
              </div>

              {filteredReps.map((rep) => {
                const isSelected = activeRep.id === rep.id;
                const distance = geoDistanceMap[rep.id];
                const isNearest = nearestRepId === rep.id;

                return (
                  <button
                    key={rep.id}
                    type="button"
                    onClick={() => setSelectedRepId(rep.id)}
                    className={`w-full text-left p-5 rounded-xl transition-all duration-300 border cursor-pointer hover:-translate-y-0.5 ${
                      isSelected
                        ? 'bg-white border-y border-r border-neutral-200 border-l-4 border-l-[#B91C1C] shadow-lg'
                        : 'bg-[#F7F6F3] border-neutral-200/70 hover:bg-neutral-100 hover:border-neutral-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
                        isSelected ? 'text-[#B91C1C]' : 'text-neutral-500'
                      }`}>
                        {rep.corridor}
                      </span>
                      {distance !== undefined && (
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                          isNearest ? 'bg-emerald-100 text-emerald-800' : 'bg-neutral-200/80 text-neutral-700'
                        }`}>
                          {isNearest ? `★ Nearest • ${distance} km` : `${distance} km`}
                        </span>
                      )}
                    </div>

                    <div className="font-serif font-bold text-lg sm:text-xl text-neutral-950 mb-0.5">
                      {rep.name}
                    </div>

                    <div className="text-xs font-sans text-neutral-600 mb-2">
                      {rep.title}
                    </div>

                    <div className="text-xs font-mono text-neutral-500 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#B91C1C] flex-shrink-0" />
                      <span className="truncate">{rep.hub}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Selected Territory Officer Detailed Dossier with Slide In */}
            <div className="lg:col-span-7 bg-[#F7F6F3] border border-neutral-200/90 rounded-2xl p-8 sm:p-12 shadow-sm reveal-right transition-all duration-300 hover:shadow-md">
              
              {/* Dossier Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-8 mb-8 border-b border-neutral-200">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#B91C1C] block mb-2">
                    {activeRep.corridor}
                  </span>
                  <h3 className="font-serif font-bold text-3xl sm:text-4xl text-neutral-950 tracking-tight">
                    {activeRep.name}
                  </h3>
                  <div className="text-sm font-sans text-neutral-600 mt-1">
                    {activeRep.title}
                  </div>
                </div>

                {activeDistance !== undefined && (
                  <div className="bg-white border border-neutral-200 rounded-xl px-4 py-2.5 self-start sm:text-right shadow-sm">
                    <span className="text-[10px] font-mono uppercase text-neutral-400 block">Proximity</span>
                    <span className="text-xs font-mono font-bold text-emerald-700">
                      ≈ {activeDistance} km from your location
                    </span>
                  </div>
                )}
              </div>

              {/* Operational Dispatch Hub */}
              <div className="mb-8">
                <div className="text-[11px] font-mono uppercase font-bold tracking-wider text-neutral-400 mb-2">
                  Operational Hub & Address
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#B91C1C] flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-sm sm:text-base font-bold text-neutral-950">
                      {activeRep.hub}
                    </div>
                    <div className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                      {activeRep.address}
                    </div>
                  </div>
                </div>
              </div>

              {/* Territory Cities & Technical Specialization */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-8 mb-8 border-b border-neutral-200">
                <div>
                  <div className="text-[11px] font-mono uppercase font-bold tracking-wider text-neutral-400 mb-2">
                    Coverage Municipalities
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-sans">
                    {activeRep.coverageCities.join(', ')}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase font-bold tracking-wider text-neutral-400 mb-2">
                    Commercial Focus
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-sans font-medium">
                    {activeRep.specialization}
                  </div>
                </div>
              </div>

              {/* Officer Scope & Bio */}
              <div className="mb-10">
                <div className="text-[11px] font-mono uppercase font-bold tracking-wider text-neutral-400 mb-2">
                  Territory Operations
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  {activeRep.bio}
                </p>
              </div>

              {/* Direct Actions Toolbar */}
              <div className="space-y-3 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`tel:${activeRep.directMobile.replace(/[^0-9+]/g, '')}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-white hover:bg-neutral-100 border border-neutral-300 text-xs font-mono font-bold text-neutral-900 rounded-xl transition-colors shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#B91C1C]" />
                    <span>Call: {activeRep.directMobile}</span>
                  </a>

                  <a
                    href={`https://wa.me/${activeRep.whatsappNumber}?text=${prefilledWhatsApp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-xs font-mono font-bold text-emerald-950 rounded-xl transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Direct WhatsApp Chat</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => onContactRep(activeRep)}
                  className="w-full py-4 bg-neutral-950 hover:bg-[#B91C1C] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors text-center flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Request Commercial Quotation with {activeRep.name.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        ) : (
          <div className="text-center py-16 bg-[#F7F6F3] rounded-2xl border border-neutral-200">
            <p className="text-xs font-mono text-neutral-600 mb-4">
              No sales representatives matched "{searchTerm}".
            </p>
            <button
              type="button"
              onClick={() => setSearchTerm('')}
              className="px-4 py-2 bg-neutral-950 text-white text-xs font-mono font-bold rounded-lg hover:bg-[#B91C1C] transition-colors"
            >
              Reset Search Filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
