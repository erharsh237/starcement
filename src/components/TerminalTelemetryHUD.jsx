import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Cpu, 
  Gauge, 
  Truck, 
  Thermometer, 
  Wind, 
  Droplets, 
  ShieldCheck, 
  Radio, 
  Layers, 
  RefreshCw,
  Building2,
  ChevronRight,
  AlertCircle,
  Clock
} from 'lucide-react';
import { playMechanicalClick } from '../utils/audioFeedback';

export default function TerminalTelemetryHUD({ onOpenQuote }) {
  const [activeHub, setActiveHub] = useState('tema');
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Real-time simulated sensor drift
  const [millPower, setMillPower] = useState(4820);
  const [fineness, setFineness] = useState(4245);
  const [stackEmission, setStackEmission] = useState(6.4);
  const [vibration, setVibration] = useState(1.8);

  const hubsData = {
    tema: {
      name: 'Tema Marine Terminal (Flagship)',
      region: 'Greater Accra',
      status: 'OPERATIONAL 24/7',
      ratedCapacity: '750,000 MT/yr',
      temp: '31.4°C',
      humidity: '76% RH',
      wind: '14.2 km/h SSW',
      curingRisk: 'Moderate Surface Evaporation',
      curingAdvice: 'Initiate wet burlap curing within 60 mins of screeding.',
      silos: [
        { name: 'Silo 01 (42.5R Finished)', current: 8420, max: 10000, grade: 'CEM II/A-L' },
        { name: 'Silo 02 (32.5R Finished)', current: 9150, max: 10000, grade: 'CEM II/B-L' },
        { name: 'Silo 03 (Clinker Buffer)', current: 8900, max: 10000, grade: 'Low-Alkali' },
        { name: 'Silo 04 (Limestone Filler)', current: 7650, max: 10000, grade: 'High-CaCO3' },
      ],
      recentDispatches: [
        { id: 'WB-TMA-984', truck: 'GC-4482-23', dest: 'Accra Marine Drive Project', grade: '42.5R Bulk', net: '34.2 MT', time: '1m ago', status: 'In Transit' },
        { id: 'WB-TMA-983', truck: 'GT-1829-21', dest: 'Commercial Blockyard, Spintex', grade: '32.5R (600 Bags)', net: '30.0 MT', time: '4m ago', status: 'Gate Cleared' },
        { id: 'WB-TMA-982', truck: 'GE-9021-24', dest: 'Tema Port MPS Terminal 3', grade: '42.5R Bulk', net: '42.0 MT', time: '11m ago', status: 'Delivered' },
        { id: 'WB-TMA-981', truck: 'GS-7721-22', dest: 'Eastern Corridor Highway Site', grade: '42.5R (800 Bags)', net: '40.0 MT', time: '18m ago', status: 'In Transit' }
      ]
    },
    kumasi: {
      name: 'Kumasi Central Depot',
      region: 'Ashanti Region',
      status: 'OPERATIONAL (06:00–22:00)',
      ratedCapacity: '500K MT/yr',
      temp: '29.1°C',
      humidity: '82% RH',
      wind: '8.5 km/h W',
      curingRisk: 'Optimal Masonry Window',
      curingAdvice: 'Standard 7-day water curing ensures peak 28-day sandcrete block yields.',
      silos: [
        { name: 'Silo A (32.5R Block Grade)', current: 2280, max: 2500, grade: 'CEM II/B-L' },
        { name: 'Silo B (42.5R Structural)', current: 2190, max: 2500, grade: 'CEM II/A-L' },
        { name: 'Warehouse Plinth 1', current: 4800, max: 5000, grade: 'Palletized' },
        { name: 'Warehouse Plinth 2', current: 2950, max: 3000, grade: 'Palletized' },
      ],
      recentDispatches: [
        { id: 'WB-KSI-412', truck: 'AS-8812-22', dest: 'Suame Magazine Block Yard', grade: '32.5R (600 Bags)', net: '30.0 MT', time: '2m ago', status: 'In Transit' },
        { id: 'WB-KSI-411', truck: 'AS-1142-20', dest: 'Obuasi Gold Mine Civils', grade: '42.5R Bulk', net: '32.5 MT', time: '8m ago', status: 'Gate Cleared' },
        { id: 'WB-KSI-410', truck: 'BA-3321-23', dest: 'Sunyani Ring Road Contractor', grade: '42.5R (600 Bags)', net: '30.0 MT', time: '24m ago', status: 'In Transit' }
      ]
    },
    takoradi: {
      name: 'Takoradi Maritime Depot',
      region: 'Western Region',
      status: 'OPERATIONAL (06:00–20:00)',
      ratedCapacity: '350K MT/yr',
      temp: '28.3°C',
      humidity: '86% RH',
      wind: '18.1 km/h S',
      curingRisk: 'High Marine Salinity Air',
      curingAdvice: 'Use dense low w/c ratio (≤ 0.42) to minimize chloride ingress along coast.',
      silos: [
        { name: 'Bulk Silo 01 (Marine 42.5R)', current: 2840, max: 3000, grade: 'CEM II/A-L' },
        { name: 'Bulk Silo 02 (Mining 42.5R)', current: 2650, max: 3000, grade: 'CEM II/A-L' },
        { name: 'Staging Plinth A', current: 1850, max: 2000, grade: 'Palletized' },
        { name: 'Staging Plinth B', current: 1420, max: 1500, grade: 'Palletized' },
      ],
      recentDispatches: [
        { id: 'WB-TKD-209', truck: 'WR-5510-21', dest: 'Takoradi Port Marine Quay', grade: '42.5R Bulk', net: '38.0 MT', time: '5m ago', status: 'In Transit' },
        { id: 'WB-TKD-208', truck: 'WR-8911-23', dest: 'Tarkwa Goldfields Civil Pit', grade: '42.5R Bulk', net: '32.0 MT', time: '14m ago', status: 'Gate Cleared' }
      ]
    },
    tamale: {
      name: 'Tamale Northern Hub',
      region: 'Northern Region',
      status: 'OPERATIONAL (07:00–18:00)',
      ratedCapacity: '250K MT/yr',
      temp: '37.8°C',
      humidity: '18% RH',
      wind: '22.4 km/h NE (Harmattan)',
      curingRisk: 'EXTREME DESICCATION ALERT',
      curingAdvice: 'Solar shading mandatory. Apply plastic sheeting immediately after strike-off.',
      silos: [
        { name: 'Pneumatic Receiver Silo', current: 1680, max: 1800, grade: 'CEM II/A-L' },
        { name: 'Thermal Insulated Bay 1', current: 3850, max: 4000, grade: 'Palletized' },
        { name: 'Thermal Insulated Bay 2', current: 1920, max: 2000, grade: 'Palletized' },
        { name: 'Transit Staging Deck', current: 950, max: 1000, grade: 'Export Paga' },
      ],
      recentDispatches: [
        { id: 'WB-TML-104', truck: 'NR-2219-24', dest: 'Tamale Metropolitan Slabs', grade: '32.5R (600 Bags)', net: '30.0 MT', time: '9m ago', status: 'In Transit' },
        { id: 'WB-TML-103', truck: 'UE-7741-22', dest: 'Bolgatanga Commercial Depot', grade: '42.5R (600 Bags)', net: '30.0 MT', time: '21m ago', status: 'In Transit' }
      ]
    }
  };

  const currentData = hubsData[activeHub];

  // Clock tick & sensor micro-fluctuations
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      // Subtle realistic sensor drift
      setMillPower(prev => Math.round(4800 + (Math.random() * 40 - 20)));
      setFineness(prev => Math.round(4240 + (Math.random() * 10 - 5)));
      setStackEmission(prev => +(6.4 + (Math.random() * 0.4 - 0.2)).toFixed(2));
      setVibration(prev => +(1.8 + (Math.random() * 0.1 - 0.05)).toFixed(2));
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#11151A] text-neutral-200 py-16 border-b border-neutral-800 relative overflow-hidden scanline-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HUD Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="radar-live" />
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold">
                Live SCADA Telemetry & Dispatch Stream
              </span>
              <span className="text-[10px] font-mono text-neutral-500">|</span>
              <span className="font-mono text-[11px] text-neutral-400">
                GMT+0 {currentTime.toLocaleTimeString('en-GB')}
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Terminal Operations Console
            </h2>
          </div>

          {/* Plant Selector Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-neutral-900 p-1.5 rounded-sm border border-neutral-800">
            {Object.keys(hubsData).map(hubKey => (
              <button
                key={hubKey}
                onClick={() => {
                  playMechanicalClick();
                  setActiveHub(hubKey);
                }}
                className={`px-3.5 py-1.5 rounded-xs font-mono text-xs uppercase tracking-wider font-bold transition-all ${
                  activeHub === hubKey
                    ? 'bg-[#B91C1C] text-white shadow-xs'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {hubKey.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* HUD Main Grid (Sensor Meters & Silo Capacities) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          
          {/* Col 1: Real-Time Mill & Environmental Sensors (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-neutral-900/90 border border-neutral-800 p-5 rounded-sm">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold flex items-center gap-1.5">
                  <Gauge className="w-3.5 h-3.5" />
                  Mill Sensory Telemetry
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-xs border border-emerald-800">
                  {currentData.status}
                </span>
              </div>

              <div className="space-y-3.5 font-mono text-xs">
                <div>
                  <div className="flex justify-between text-neutral-400 mb-1">
                    <span>VRM Grinding Drive Power</span>
                    <span className="text-white font-bold">{millPower} kW</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-1.5 rounded-xs overflow-hidden">
                    <div className="bg-[#B91C1C] h-full" style={{ width: `${(millPower / 5200) * 100}%` }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-neutral-400 mb-1">
                    <span>Blaine Air Permeability</span>
                    <span className="text-white font-bold">{fineness} cm²/g</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-1.5 rounded-xs overflow-hidden">
                    <div className="bg-emerald-500 h-full" style={{ width: `${(fineness / 4500) * 100}%` }}></div>
                  </div>
                  <span className="text-[10px] text-neutral-500 block mt-0.5">GS 1118-1 Target: &ge; 3,800 cm²/g</span>
                </div>

                <div>
                  <div className="flex justify-between text-neutral-400 mb-1">
                    <span>CEMS Stack Particulate</span>
                    <span className="text-emerald-400 font-bold">{stackEmission} mg/Nm³</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-1.5 rounded-xs overflow-hidden">
                    <div className="bg-emerald-400 h-full" style={{ width: `${(stackEmission / 10) * 100}%` }}></div>
                  </div>
                  <span className="text-[10px] text-neutral-500 block mt-0.5">EPA Ghana Statutory Limit: &lt; 10 mg/Nm³</span>
                </div>

                <div>
                  <div className="flex justify-between text-neutral-400 mb-1">
                    <span>Grinding Table Vibration</span>
                    <span className="text-white font-bold">{vibration} mm/s (Peak)</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-1.5 rounded-xs overflow-hidden">
                    <div className="bg-amber-500 h-full" style={{ width: `${(vibration / 3.0) * 100}%` }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Weather & Tropical Curing Advisory */}
            <div className="bg-neutral-900/90 border border-neutral-800 p-5 rounded-sm">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-bold block mb-3">
                Local Microclimate & Curing Advisory
              </span>
              
              <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono mb-4">
                <div className="bg-neutral-950 p-2 rounded-xs border border-neutral-800">
                  <Thermometer className="w-3.5 h-3.5 text-[#B91C1C] mx-auto mb-1" />
                  <span className="text-white block font-bold">{currentData.temp}</span>
                  <span className="text-[10px] text-neutral-500">Ambient</span>
                </div>
                <div className="bg-neutral-950 p-2 rounded-xs border border-neutral-800">
                  <Droplets className="w-3.5 h-3.5 text-blue-400 mx-auto mb-1" />
                  <span className="text-white block font-bold">{currentData.humidity}</span>
                  <span className="text-[10px] text-neutral-500">Humidity</span>
                </div>
                <div className="bg-neutral-950 p-2 rounded-xs border border-neutral-800">
                  <Wind className="w-3.5 h-3.5 text-neutral-400 mx-auto mb-1" />
                  <span className="text-white block font-bold">{currentData.wind}</span>
                  <span className="text-[10px] text-neutral-500">Wind</span>
                </div>
              </div>

              <div className="bg-amber-950/30 border border-amber-800/50 p-3 rounded-xs text-xs">
                <div className="flex items-center gap-1.5 text-amber-400 font-bold mb-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{currentData.curingRisk}</span>
                </div>
                <p className="text-neutral-300 text-[11px] leading-relaxed">
                  {currentData.curingAdvice}
                </p>
              </div>
            </div>
          </div>

          {/* Col 2: Interactive Silo Capacity Gauges (4 cols) */}
          <div className="lg:col-span-4 bg-neutral-900/90 border border-neutral-800 p-5 rounded-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  Silo Stock Inventory
                </span>
                <span className="font-mono text-xs text-neutral-400">
                  Rated: {currentData.ratedCapacity}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4">
                {currentData.silos.map((silo, idx) => {
                  const pct = Math.round((silo.current / silo.max) * 100);
                  return (
                    <div key={idx} className="bg-neutral-950 p-3.5 rounded-xs border border-neutral-800 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-[#B91C1C] uppercase font-bold block mb-1">
                          {silo.grade}
                        </span>
                        <h4 className="text-xs font-bold text-white truncate mb-2">
                          {silo.name}
                        </h4>
                      </div>

                      <div>
                        <div className="flex items-end justify-between font-mono text-xs mb-1.5">
                          <span className="text-neutral-400 text-[11px]">{silo.current.toLocaleString()} MT</span>
                          <span className="text-emerald-400 font-bold">{pct}%</span>
                        </div>
                        <div className="w-full bg-neutral-800 h-2 rounded-xs overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-[#B91C1C] to-red-500 h-full rounded-xs transition-all duration-500"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between">
              <span className="text-[11px] font-mono text-neutral-400">
                Bulk Silo Telemetry synced every 60s
              </span>
              <button 
                onClick={onOpenQuote}
                className="text-xs font-mono font-bold text-[#B91C1C] hover:underline"
              >
                Schedule Tanker Drop →
              </button>
            </div>
          </div>

          {/* Col 3: Live Streaming Weighbridge Dispatch Log (4 cols) */}
          <div className="lg:col-span-4 bg-neutral-900/90 border border-neutral-800 p-5 rounded-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5" />
                  Weighbridge Stream
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono text-neutral-400">
                  <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
                  RFID Active
                </span>
              </div>

              <div className="space-y-3">
                {currentData.recentDispatches.map((disp, idx) => (
                  <div key={idx} className="bg-neutral-950 p-3 rounded-xs border border-neutral-800/80 hover:border-neutral-700 transition-colors">
                    <div className="flex items-center justify-between font-mono text-xs mb-1">
                      <span className="font-bold text-white">{disp.id}</span>
                      <span className="text-[10px] text-neutral-400 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-neutral-500" />
                        {disp.time}
                      </span>
                    </div>

                    <div className="text-xs text-neutral-300 font-semibold truncate mb-1">
                      {disp.dest}
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 pt-1 border-t border-neutral-900">
                      <span>{disp.truck} • {disp.grade}</span>
                      <span className="text-emerald-400 font-bold">{disp.net}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>Avg Gate-to-Gate: <strong>34.8 Mins</strong></span>
              <span className="text-emerald-400 font-bold">100% On-Time</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
