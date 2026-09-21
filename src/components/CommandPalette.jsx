import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Building2, 
  Layers, 
  Truck, 
  Calculator, 
  MapPin, 
  ShieldCheck, 
  FileText, 
  Phone, 
  ExternalLink, 
  Compass, 
  X, 
  CornerDownLeft, 
  ArrowRight,
  Volume2,
  VolumeX,
  Clock,
  Sparkles
} from 'lucide-react';
import { playCommandChime, playBlip, playMechanicalClick, toggleAudioMute, getAudioMuted } from '../utils/audioFeedback';

export default function CommandPalette({ isOpen, onClose, onOpenQuote }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(getAudioMuted());
  const inputRef = useRef(null);

  const allItems = [
    // Products
    {
      id: 'prod-42',
      title: 'Star Super 42.5R (Rapid Hardening)',
      category: 'Certified Products',
      subtitle: 'CEM II/A-L 42.5R for columns, beams, post-tensioned slabs & bridges',
      icon: Building2,
      badge: '42.5R',
      action: () => navigate('/products/star-super-42-5r')
    },
    {
      id: 'prod-32',
      title: 'Star Solid 32.5R (General Purpose)',
      category: 'Certified Products',
      subtitle: 'CEM II/B-L 32.5R for sandcrete blocks, plastering, mortar & domestic slabs',
      icon: Layers,
      badge: '32.5R',
      action: () => navigate('/products/star-solid-32-5r')
    },
    {
      id: 'prod-bag',
      title: '11-Point Bag Marking Anatomy',
      category: 'Certified Products',
      subtitle: 'GSA mandatory statutory markings & anti-counterfeit identification guide',
      icon: ShieldCheck,
      badge: 'GS 1118-1',
      action: () => navigate('/products/bag-anatomy')
    },

    // Manufacturing Plant (Single Facility in Ghana)
    {
      id: 'term-kpone',
      title: 'Star Cement Ghana Plant (Kpone Industrial Area)',
      category: 'Manufacturing Facility',
      subtitle: 'Advanced greenfield cement grinding facility located in Kpone Industrial Area',
      icon: Building2,
      badge: 'Greenfield',
      action: () => navigate('/plants')
    },
    {
      id: 'term-silos',
      title: 'Vertical Slip-Form Silo Architecture',
      category: 'Manufacturing Facility',
      subtitle: 'High-capacity concrete storage silos built with continuous vertical slip-form casting',
      icon: Layers,
      badge: 'Silos',
      action: () => navigate('/plants/silo-architecture')
    },
    {
      id: 'term-materials',
      title: 'Raw Material Intake & Tema Port Logistics',
      category: 'Manufacturing Facility',
      subtitle: 'Deepwater bulk mineral and limestone conveyors from upgraded Tema Port',
      icon: Truck,
      badge: 'Materials',
      action: () => navigate('/plants/raw-material-handling')
    },
    {
      id: 'term-corridor',
      title: 'Kpone Industrial Logistics Corridor',
      category: 'Manufacturing Facility',
      subtitle: 'Arterial transport corridors shortening regional distribution across all 16 regions',
      icon: Compass,
      badge: 'Logistics',
      action: () => navigate('/plants/logistics-corridor')
    },
    {
      id: 'term-dealers',
      title: 'Find Authorized Dealers & Stockists Directory',
      category: 'Commercial Dispatch',
      subtitle: 'Browse certified Star Cement distributors with phone numbers, state, city, and delivery fleet across Ghana',
      icon: MapPin,
      badge: 'Dealers',
      action: () => navigate('/dealers')
    },
    {
      id: 'term-reps',
      title: 'Commercial Sales Representative Directory',
      category: 'Commercial Dispatch',
      subtitle: 'Locate regional commercial officers across Greater Accra, Ashanti, Western & Northern zones',
      icon: Compass,
      badge: 'Sales Reps',
      action: () => navigate('/sales-reps')
    },

    // Technical & Standards
    {
      id: 'tech-calc',
      title: 'Civil Concrete Mix Design Calculator',
      category: 'Engineering Tools',
      subtitle: 'Compute exact 50kg bags, clean quarry sand, 20mm granite & water for C20–C37',
      icon: Calculator,
      badge: 'Tool',
      action: () => navigate('/calculator')
    },
    {
      id: 'tech-reps',
      title: 'Territory Sales Representative GPS Locator',
      category: 'Engineering Tools',
      subtitle: 'Haversine distance calculation to find your regional commercial officer',
      icon: MapPin,
      badge: 'GPS',
      action: () => navigate('/sales-reps')
    },
    {
      id: 'tech-lab',
      title: 'Tema Central Quality Testing Laboratory',
      category: 'Technical Dossier',
      subtitle: 'XRF spectrometer mineral analysis, ToniTechnik presses & 28-day break tests',
      icon: FileText,
      badge: 'Laboratory',
      action: () => navigate('/about/laboratory')
    },
    {
      id: 'tech-certs',
      title: 'Certifications & Accreditations Directory',
      category: 'Technical Dossier',
      subtitle: 'Ghana Standards Authority (GS 1118-1), ISO 9001, 14001, 45001 & EPA permits',
      icon: ShieldCheck,
      badge: 'ISO / GSA',
      action: () => navigate('/about/accreditations')
    },
    {
      id: 'tech-projects',
      title: 'National Landmark Projects Portfolio',
      category: 'Technical Dossier',
      subtitle: 'Tema Port MPS Terminal 3, Accra Financial Centre, Pokuase Interchange',
      icon: Building2,
      badge: 'Projects',
      action: () => navigate('/projects')
    },

    // Instant Commercial Actions
    {
      id: 'act-quote',
      title: 'Request Commercial Procurement Quote',
      category: 'Instant Actions',
      subtitle: 'Direct factory pricing for bulk pneumatic tankers or 600-bag truckloads',
      icon: CornerDownLeft,
      badge: 'Action',
      action: () => onOpenQuote && onOpenQuote()
    },
    {
      id: 'act-call',
      title: 'Call Central Dispatch Operations',
      category: 'Instant Actions',
      subtitle: 'Direct line to Tema Terminal dispatch: +233 (0) 30 320 4401',
      icon: Phone,
      badge: 'Hotline',
      action: () => { window.location.href = 'tel:+233303204401'; }
    }
  ];

  const filteredItems = allItems.filter(item => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q) ||
      item.badge.toLowerCase().includes(q)
    );
  });

  useEffect(() => {
    if (isOpen) {
      playCommandChime();
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Keyboard navigation inside modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => {
          const next = prev < filteredItems.length - 1 ? prev + 1 : 0;
          playBlip();
          return next;
        });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => {
          const next = prev > 0 ? prev - 1 : filteredItems.length - 1;
          playBlip();
          return next;
        });
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          playMechanicalClick();
          filteredItems[selectedIndex].action();
          onClose();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  const handleToggleSound = () => {
    const muted = toggleAudioMute();
    setIsMuted(muted);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-neutral-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-[#14181E] border border-neutral-700/80 rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[80vh] text-white scanline-grid animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-neutral-800 bg-[#161C24]">
          <Search className="w-5 h-5 text-[#B91C1C] shrink-0" />
          <input 
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, mix ratios (C25/30), terminals, lab tests, standards..."
            className="flex-1 bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none font-mono"
          />
          
          <div className="flex items-center gap-2">
            <button
              onClick={handleToggleSound}
              title={isMuted ? 'Unmute Sound Effects' : 'Mute Sound Effects'}
              className="p-1 text-neutral-400 hover:text-white rounded-xs transition-colors"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-neutral-500" /> : <Volume2 className="w-4 h-4 text-[#B91C1C]" />}
            </button>
            <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono text-neutral-400 border border-neutral-700 rounded-xs bg-neutral-900">
              ESC
            </span>
            <button
              onClick={onClose}
              className="p-1 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1 divide-y divide-neutral-800/40">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => {
              const IconComp = item.icon;
              const isSelected = idx === selectedIndex;

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    playMechanicalClick();
                    item.action();
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between gap-3 p-3 rounded-md cursor-pointer transition-all ${
                    isSelected 
                      ? 'bg-[#B91C1C]/15 border border-[#B91C1C]/40 text-white' 
                      : 'hover:bg-neutral-800/60 text-neutral-300 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`p-2 rounded-xs shrink-0 ${
                      isSelected ? 'bg-[#B91C1C] text-white' : 'bg-neutral-800 text-neutral-400'
                    }`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold truncate text-white">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-mono uppercase px-1.5 py-0.2 bg-neutral-800 text-neutral-400 rounded-xs border border-neutral-700 shrink-0">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-400 truncate mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] font-mono text-[#B91C1C] font-semibold bg-red-950/40 border border-red-900/60 px-2 py-0.5 rounded-xs">
                      {item.badge}
                    </span>
                    {isSelected && (
                      <CornerDownLeft className="w-3.5 h-3.5 text-[#B91C1C]" />
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="py-12 text-center text-neutral-500">
              <Search className="w-8 h-8 mx-auto text-neutral-600 mb-2" />
              <p className="text-xs font-mono uppercase tracking-wider">No matching specifications found</p>
              <p className="text-[11px] text-neutral-600 mt-1">
                Try searching "42.5R", "Tema", "Mix", "Laboratory", or "Block"
              </p>
            </div>
          )}
        </div>

        {/* Bottom Command Hints Strip */}
        <div className="px-4 py-2.5 bg-neutral-900/80 border-t border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-400">
          <div className="flex items-center gap-3">
            <span><strong className="text-neutral-200">↑↓</strong> Navigate</span>
            <span><strong className="text-neutral-200">↵</strong> Select</span>
            <span><strong className="text-neutral-200">ESC</strong> Close</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#B91C1C]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Industrial Engineering Console</span>
          </div>
        </div>

      </div>
    </div>
  );
}
