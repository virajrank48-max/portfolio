import React, { useState } from 'react';
import { PORTFOLIO_DATA, ServiceItem } from '../data/portfolioData';
import { ArrowUpRight, ChevronDown, Check, Wrench } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ServiceSection: React.FC = () => {
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(PORTFOLIO_DATA.services[0].id);

  const toggleService = (id: string) => {
    setExpandedServiceId((current) => (current === id ? null : id));
  };

  return (
    <motion.section
      id="service"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="w-full px-3 sm:px-6 py-6 md:py-8 max-w-6xl mx-auto"
    >
      {/* Floating White Card */}
      <div className="relative bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 md:p-12 lg:p-16 border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden">
        
        {/* Ghost Watermark "SERVICE" in background */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 select-none pointer-events-none text-neutral-100/70 font-display font-extrabold text-[4.5rem] sm:text-[8rem] md:text-[10rem] tracking-widest whitespace-nowrap -z-0">
          SERVICE
        </div>

        {/* Section Header */}
        <div className="relative z-10 pb-8 border-b border-neutral-100">
          <span className="text-xs sm:text-sm font-mono font-bold tracking-wider text-neutral-400 uppercase">
            /SERVICE
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight font-display">
              Core Quantitative & Analytical Capabilities
            </h2>
            <span className="text-xs sm:text-sm text-neutral-500 font-mono">
              [06 Specialized Domains]
            </span>
          </div>
        </div>

        {/* Expandable Accordion List */}
        <div className="relative z-10 divide-y divide-neutral-100 pt-2">
          {PORTFOLIO_DATA.services.map((svc, idx) => {
            const isExpanded = expandedServiceId === svc.id;

            return (
              <div
                key={svc.id}
                className="py-4 sm:py-6 group transition-colors duration-200"
              >
                {/* Header row click target */}
                <button
                  onClick={() => toggleService(svc.id)}
                  className="w-full flex items-center justify-between text-left cursor-pointer group-hover:text-[#f43f5e] transition-colors"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="text-xs sm:text-sm font-mono text-neutral-400 group-hover:text-[#f43f5e] transition-colors">
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className={`text-lg sm:text-2xl md:text-3xl font-extrabold tracking-tight transition-colors ${
                        isExpanded ? 'text-neutral-950' : 'text-neutral-700'
                      }`}>
                        {svc.name.toUpperCase()}
                      </h3>
                      <span className="text-xs text-neutral-400 hidden sm:inline-block font-mono mt-0.5">
                        {svc.category}
                      </span>
                    </div>
                  </div>

                  {/* Icon Indicator */}
                  <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    isExpanded
                      ? 'bg-neutral-950 text-white border-neutral-950 shadow-sm rotate-45'
                      : 'bg-neutral-50 text-neutral-500 border-neutral-200 group-hover:border-[#fda4af] group-hover:text-neutral-900 group-hover:bg-[#fecdd3]/40'
                  }`}>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform" />
                  </div>
                </button>

                {/* Expanded Content Drawer */}
                {isExpanded && (
                  <div className="mt-5 pt-4 pb-2 sm:pl-12 grid grid-cols-1 md:grid-cols-12 gap-6 animate-in fade-in slide-in-from-top-2 duration-300 border-t border-dashed border-neutral-200/80">
                    
                    {/* Left details */}
                    <div className="md:col-span-7 space-y-3">
                      <p className="text-sm sm:text-base text-neutral-700 font-medium">
                        {svc.tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                        {svc.description}
                      </p>

                      {/* Deliverables List */}
                      <div className="pt-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-2 font-mono">
                          Key Deliverables
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700">
                          {svc.deliverables.map((deliv, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <Check className="w-3.5 h-3.5 text-[#f43f5e] shrink-0" />
                              <span>{deliv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right tools stack */}
                    <div className="md:col-span-5 bg-neutral-50 rounded-2xl p-4 border border-neutral-200/60 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold text-neutral-800 uppercase tracking-wider">
                        <Wrench className="w-3.5 h-3.5 text-neutral-500" />
                        <span>Core Tech Stack</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {svc.tools.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-lg bg-white border border-neutral-200 text-xs font-medium text-neutral-800 shadow-2xs"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </motion.section>
  );
};
