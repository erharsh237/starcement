import React, { useState } from 'react';
import { 
  Ship, 
  ArrowRight, 
  Cpu, 
  Layers, 
  Truck, 
  Scale, 
  ShieldCheck, 
  Gauge, 
  Sparkles,
  Info,
  CheckCircle2
} from 'lucide-react';
import { playBlip, playMechanicalClick } from '../utils/audioFeedback';

export default function PlantFlowExplorer() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      id: 'berth',
      title: '01. Deepwater Vessel Berth 2',
      category: 'Marine Logistics',
      equipment: 'Siwertell Continuous Mechanical Ship Unloader',
      capacity: '1,200 Metric Tons / Hour',
      specs: [
        { label: 'Vessel Classification', val: 'Supramax & Ultramax Carriers (up to 65,000 DWT)' },
        { label: 'Berth Depth', val: '14.5 Meters Deepwater Draft at Port of Tema' },
        { label: 'Offloading Technology', val: 'Enclosed Screw Conveyor (Zero Marine Spillage)' },
        { label: 'Dust Suppression', val: 'Negative-Pressure Vacuum Skirts' },
      ],
      description: 'Raw mineral material is imported and discharged directly at Port of Tema Berth 2. The continuous mechanical unloader operates completely enclosed, preventing cargo dust from escaping into the ocean or municipal harbor atmosphere.'
    },
    {
      id: 'conveyor',
      title: '02. 2.4km Overland Pipe Conveyor',
      category: 'Bulk Transport',
      equipment: 'Enclosed Tubular Overland Belt Conveyor',
      capacity: '1,500 Metric Tons / Hour (Belt Speed: 3.2 m/s)',
      specs: [
        { label: 'Conveyor Length', val: '2,400 Meters (Port to Factory)' },
        { label: 'Enclosure Rating', val: '360° Hexagonal Pipe Geometry (Rainproof)' },
        { label: 'Road Traffic Impact', val: 'Eliminates 180+ daily harbor truck trips' },
        { label: 'Sensor Grid', val: 'Optic Fiber Belt Rip & Heat Detection' },
      ],
      description: 'A 2.4-kilometer enclosed overland conveyor transports raw materials directly from the vessel hold into our plant boundary. This eliminates all truck transit through Tema commercial streets and completely isolates raw materials from tropical rain.'
    },
    {
      id: 'dome',
      title: '03. Geodesic Storage Dome',
      category: 'Raw Storage',
      equipment: '65,000 MT Covered Space-Frame Dome & Reclaimer',
      capacity: '65,000 Metric Tons Raw Material Buffer',
      specs: [
        { label: 'Clear-Span Diameter', val: '88 Meters Geodesic Steel Space Frame' },
        { label: 'Reclaimer System', val: 'Circular Portal Scraper Reclaimer' },
        { label: 'Micro-Fogging', val: 'High-Pressure Acoustic Dust Mist Suppression' },
        { label: 'Raw Homogenization', val: 'Chevron Stacking for Batch Uniformity' },
      ],
      description: 'The monumental 88-meter geodesic dome buffers enough raw material to guarantee four months of uninterrupted grinding. Raw materials are blended via chevron stacking to equalize baselines before mill feed.'
    },
    {
      id: 'vrm',
      title: '04. Vertical Roller Mill (VRM)',
      category: 'Finish Grinding',
      equipment: 'Loesche Vertical Roller Mill (4-Roller System)',
      capacity: '185 Metric Tons / Hour (4,850 kW Motor Drive)',
      specs: [
        { label: 'Energy Efficiency', val: '32% Less Power than traditional ball mills' },
        { label: 'Grinding Table Speed', val: '28.4 RPM with 80-bar hydraulic roll pressure' },
        { label: 'Specific Surface', val: 'Directly adjustable from 3,800 to 4,500 cm²/g' },
        { label: 'Acoustic Enclosure', val: '< 75 dBA at plant perimeter boundary' },
      ],
      description: 'Our high-efficiency Loesche VRM grinds raw minerals, high-calcium limestone, and natural gypsum simultaneously. Hydraulic rollers crush feed against a rotating table, creating the precise particle size distribution needed for rapid hydration.'
    },
    {
      id: 'separator',
      title: '05. High-Efficiency Classifier',
      category: 'Particle Separation',
      equipment: 'Dynamic Rotor Cage Particle Classifier',
      capacity: 'Airflow: 420,000 m³/h',
      specs: [
        { label: 'Cut-Off Particle Size', val: 'd90 < 32 Microns (Micro-Fine Fraction)' },
        { label: 'Recirculation Loop', val: 'Oversize coarse particles return to VRM table' },
        { label: 'Fineness Uniformity', val: '± 50 cm²/g Blaine Stability' },
        { label: 'Drive Control', val: 'Variable Frequency Drive (VFD) Precision' },
      ],
      description: 'Airflow carries pulverized particles into the dynamic rotor classifier. Only particles meeting the exact microscopic Blaine specification pass through into the baghouse, guaranteeing Star Super 42.5R’s rapid hardening capability.'
    },
    {
      id: 'silos',
      title: '06. 40,000 MT Concrete Silo Battery',
      category: 'Cement Storage',
      equipment: '4 × 10,000 MT Multi-Cell Post-Tensioned Silos',
      capacity: '40,000 MT Finished Cement Buffering',
      specs: [
        { label: 'Silo Construction', val: 'Reinforced Slipformed Concrete (42m Height)' },
        { label: 'Aeration Extraction', val: 'Fluidized Inverted-Cone Bottom Dischargers' },
        { label: 'Anti-Segregation', val: 'Pneumatic Homogenization Chambers' },
        { label: 'Filter Emission', val: '< 5 mg/Nm³ Pulse-Jet Dust Recovery' },
      ],
      description: 'Four monumental 42-meter post-tensioned concrete silos separate finished CEM II/A-L 42.5R, CEM II/B-L 32.5R, and raw materials. Fluidized aeration cones prevent compaction and maintain powder aeration ready for packing.'
    },
    {
      id: 'packer',
      title: '07. Haver & Boecker Rotary Packers',
      capacity: '4 × 120 t/h High-Speed Lines (9,600 Bags / Hour)',
      category: 'Automated Packaging',
      equipment: 'German Haver & Boecker 8-Spout Rotary Roto-Packers',
      specs: [
        { label: 'Packing Precision', val: '50.0 kg ± 0.5 kg (Electronic Load Cells)' },
        { label: 'Bag Rejection', val: 'Automatic Diverter for Under/Over-Weight Bags' },
        { label: 'Inkjet Printing', val: 'Real-Time Date, Shift & GSA Batch Inkjet' },
        { label: 'Palletizing Speed', val: 'Automated Stretch-Hood Wrapping (40 Bags/Pallet)' },
      ],
      description: 'Four high-speed German rotary packers automatically fill and seal 50kg valve bags. Integrated check-weighers instantly reject non-conforming weights, ensuring zero contractors ever receive an underweight bag.'
    },
    {
      id: 'weighbridge',
      title: '08. Automated RFID Weighbridge Dispatch',
      category: 'Logistics Clearance',
      equipment: 'Dual 80-Tonne Dynamic Multi-Axle Weighbridges',
      capacity: 'Dispatch Throughput: < 35 Mins Gate-to-Gate',
      specs: [
        { label: 'Weighbridge Capacity', val: 'Dual 80 Metric Tons Digital Load Cells' },
        { label: 'Clearance Method', val: 'Long-Range RFID Transponder & ANPR Cameras' },
        { label: 'Documentation', val: 'Automated SAP Delivery Note & Mill Certificate' },
        { label: 'Dispatch Capacity', val: 'Over 250 Commercial Flatbeds & Tankers Daily' },
      ],
      description: 'Loaded bulk tankers and palletized flatbeds pass through our exit weighbridge. Tare and gross weights are electronically logged, automatically printing certified mill test sheets before trucks roll onto Ghana’s highway grid.'
    }
  ];

  const current = stages[activeStage];

  const handleStageClick = (idx) => {
    playMechanicalClick();
    setActiveStage(idx);
  };

  return (
    <div className="bg-white text-neutral-900 p-6 sm:p-8 rounded-lg border border-neutral-200/90 shadow-sm my-8">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-200">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-bold flex items-center gap-1.5 mb-1">
            <Cpu className="w-3.5 h-3.5" />
            Manufacturing Operations
          </span>
          <h3 className="font-serif text-2xl font-bold text-neutral-900 tracking-tight">
            Vessel-to-Weighbridge Manufacturing Process
          </h3>
          <p className="text-xs text-neutral-600 mt-1 max-w-xl">
            Select a process stage below to inspect the heavy industrial equipment and statutory quality controls at our Tema terminal:
          </p>
        </div>

        <span className="text-xs font-mono text-neutral-700 bg-neutral-100 px-3 py-1.5 rounded border border-neutral-200 self-start md:self-auto font-semibold">
          8 Engineering Stages
        </span>
      </div>

      {/* Horizontal Flow Stepper Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 my-6">
        {stages.map((st, idx) => (
          <button
            key={st.id}
            onClick={() => handleStageClick(idx)}
            className={`p-2.5 rounded-md text-left transition-all border cursor-pointer ${
              activeStage === idx
                ? 'bg-[#B91C1C] text-white border-[#B91C1C] shadow-sm'
                : 'bg-neutral-50 text-neutral-600 border-neutral-200 hover:text-neutral-950 hover:bg-neutral-100'
            }`}
          >
            <span className="text-[10px] font-mono block opacity-80 mb-0.5">Stage 0{idx + 1}</span>
            <span className="text-xs font-bold truncate block">{st.title.split('.')[1] || st.title}</span>
          </button>
        ))}
      </div>

      {/* Active Stage Breakdown Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-neutral-50 p-6 sm:p-8 rounded-lg border border-neutral-200">
        
        {/* Left: Overview & Description (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-[#B91C1C] uppercase tracking-wider font-bold bg-red-50 px-2.5 py-0.5 rounded border border-red-200">
              {current.category}
            </span>
            <span className="text-xs text-neutral-500">
              Machinery: <strong className="text-neutral-900 font-semibold">{current.equipment}</strong>
            </span>
          </div>

          <h4 className="font-serif text-2xl font-bold text-neutral-900">
            {current.title}
          </h4>

          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans">
            {current.description}
          </p>

          <div className="p-3 bg-white rounded border border-neutral-200 flex items-center justify-between text-xs font-mono">
            <span className="text-neutral-500">Operating Throughput / Output:</span>
            <span className="text-emerald-700 font-bold">{current.capacity}</span>
          </div>
        </div>

        {/* Right: Technical Equipment Specs Table (5 cols) */}
        <div className="lg:col-span-5 bg-white p-5 rounded-lg border border-neutral-200 shadow-xs space-y-3">
          <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider font-bold block pb-2 border-b border-neutral-200">
            Mechanical & Engineering Parameters
          </span>

          <div className="space-y-2 font-mono text-xs">
            {current.specs.map((sp, idx) => (
              <div key={idx} className="flex justify-between items-start py-1 border-b border-neutral-100 last:border-0">
                <span className="text-neutral-500 text-[11px] w-2/5">{sp.label}</span>
                <span className="text-neutral-900 text-[11px] font-semibold text-right w-3/5">{sp.val}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            <span>Compliance & Quality: 100% Certified</span>
          </div>
        </div>

      </div>

    </div>
  );
}
