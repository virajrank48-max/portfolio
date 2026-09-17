import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface WorkSectionProps {
  onSelectProject: (project: Project) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Real Project' | 'Exploration'>('All');

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (activeFilter === 'All') return true;
    return p.category === activeFilter;
  });

  return (
    <motion.section
      id="work"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="w-full px-3 sm:px-6 py-6 md:py-8 max-w-6xl mx-auto"
    >
      {/* Floating Dark Card */}
      <div className="relative bg-[#111113] text-neutral-100 rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 md:p-12 lg:p-16 border border-neutral-800 shadow-[0_25px_60px_rgba(0,0,0,0.3)] overflow-hidden">
        
        {/* Ghost Watermark "PORTFOLIO" in background */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 select-none pointer-events-none text-neutral-800/20 font-display font-extrabold text-[4.5rem] sm:text-[8rem] md:text-[10rem] tracking-widest whitespace-nowrap -z-0">
          PORTFOLIO
        </div>

        {/* Section Header */}
        <div className="relative z-10 space-y-6 pb-8 border-b border-neutral-800">
          
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display mt-1">
              Projects
            </h2>
          </div>

          {/* Filter Bar & "View All Work" */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            
            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 p-1 bg-neutral-900 rounded-full border border-neutral-800">
              {(['All', 'Real Project', 'Exploration'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    activeFilter === filter
                      ? 'bg-neutral-950 text-white shadow-xs'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* View All Work Button */}
            <button
              onClick={() => setActiveFilter('All')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-300 hover:text-white hover:underline transition-all group cursor-pointer"
            >
              <span>View All Work</span>
              <span className="text-xs text-neutral-400 font-mono">[{PORTFOLIO_DATA.projects.length}]</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

          </div>

        </div>

        {/* Projects Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              onClick={() => onSelectProject(project)}
              className="group bg-neutral-900/70 hover:bg-neutral-900 rounded-[24px] p-5 sm:p-6 border border-neutral-800 hover:border-[#fda4af] shadow-xs hover:shadow-[0_16px_36px_rgba(0,0,0,0.2)] transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              
              {/* Card Header: Tag badge & arrow */}
              <div className="flex items-center justify-between pb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-950 border border-neutral-700 text-[10px] font-bold tracking-wider uppercase text-neutral-300 shadow-2xs group-hover:border-rose-200 group-hover:text-rose-400 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f43f5e]" />
                  {project.category}
                </span>

                <div className="w-8 h-8 rounded-full bg-neutral-950 border border-neutral-700 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-white group-hover:bg-[#fecdd3]/40 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Title, Subtitle, and Highlights */}
              <div className="pt-2 space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-[#fda4af] transition-colors line-clamp-1">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 line-clamp-2 leading-relaxed">
                  {project.subtitle}
                </p>

                {/* Key Tags list */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {project.tools.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-neutral-800 text-neutral-300"
                    >
                      {tool}
                    </span>
                  ))}
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-neutral-950 border border-neutral-700 text-neutral-400 font-mono">
                    {project.period}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
};
