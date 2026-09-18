import React, { useState } from 'react';
import { projects } from '../data/projects';
import { X, ArrowRight } from 'lucide-react';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="bg-[#F7F6F3] border-b border-neutral-200 py-16 sm:py-20 lg:py-24 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Scroll Reveal */}
        <div className="max-w-3xl mb-12 reveal-init">
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#B91C1C] mb-2.5">
            Infrastructure Case Studies
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-neutral-950 tracking-tight leading-tight">
            Commercial Infrastructure Deployments
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed font-normal">
            Documented performance of Star Cement 42.5R structural concrete across high-rise reinforced frames, container port pavements, and arterial road corridors in Ghana.
          </p>
        </div>

        {/* Case Studies Grid with Staggered Animations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 stagger-children">
          {projects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setActiveProject(proj)}
              className="reveal-init bg-white border border-neutral-200/90 rounded-2xl cursor-pointer hover:border-neutral-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group"
            >
              <div>
                {/* Photo with clean aspect ratio and hover zoom */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-neutral-100 mb-6">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Location and Category */}
                <div className="flex justify-between items-center text-xs font-mono text-neutral-500 mb-3">
                  <span className="uppercase tracking-wider">{proj.location}</span>
                  <span className="font-bold text-neutral-900 uppercase tracking-wider">{proj.categoryLabel}</span>
                </div>

                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-neutral-950 mb-3 group-hover:text-[#B91C1C] transition-colors">
                  {proj.title}
                </h3>

                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6 font-normal">
                  {proj.summary}
                </p>

                {/* Structural Parameters (Directly on white, no nested grey box) */}
                <div className="space-y-2.5 text-xs font-mono mb-8 pt-5 border-t border-neutral-100">
                  <div className="flex justify-between hover:text-neutral-950 transition-colors">
                    <span className="text-neutral-500">Grade Deployed:</span>
                    <strong className="text-neutral-950">{proj.stats.cementUsed}</strong>
                  </div>
                  <div className="flex justify-between hover:text-neutral-950 transition-colors">
                    <span className="text-neutral-500">Volume Delivered:</span>
                    <strong className="text-[#B91C1C] font-bold">{proj.stats.bagsSupplied}</strong>
                  </div>
                  <div className="flex justify-between hover:text-neutral-950 transition-colors">
                    <span className="text-neutral-500">Structural Scope:</span>
                    <span className="text-neutral-800 font-sans">{proj.stats.structure}</span>
                  </div>
                </div>
              </div>

              {/* Action Trigger with Arrow Micro-Animation */}
              <div className="pt-4 border-t border-neutral-100 flex justify-between items-center text-xs font-mono">
                <span className="text-neutral-400">GS 1118-1 : 2024 Verified</span>
                <span className="text-neutral-950 font-bold uppercase tracking-wider group-hover:text-[#B91C1C] transition-colors flex items-center gap-1.5">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal with Smooth Scale-In Animation */}
      {activeProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/75 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white border border-neutral-200 w-full max-w-2xl p-8 sm:p-10 rounded-2xl shadow-2xl relative text-left animate-scale-in">
            
            <div className="flex justify-between items-start border-b border-neutral-100 pb-5 mb-6">
              <div>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                  Structural Case Study • {activeProject.location}
                </span>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-neutral-950">
                  {activeProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                aria-label="Close Case Study"
                className="p-2 text-neutral-400 hover:text-neutral-950 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6">
              {activeProject.summary}
            </p>

            <div className="mb-8 space-y-3">
              <span className="font-mono text-xs font-bold text-neutral-900 uppercase tracking-wider block">
                Technical Verification Criteria:
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-700">
                {activeProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 pl-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B91C1C] mt-2 flex-shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-5 border-t border-neutral-100 flex justify-between items-center text-xs font-mono">
              <span className="text-neutral-400">Standard: GS 1118-1 / EN 197-1</span>
              <button
                onClick={() => setActiveProject(null)}
                className="px-6 py-2.5 bg-neutral-950 hover:bg-[#B91C1C] text-white font-sans text-xs font-bold uppercase tracking-wider rounded-md hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
