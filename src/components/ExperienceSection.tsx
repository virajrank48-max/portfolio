import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { TrendingUp, Users, GraduationCap, BookOpen, Award, ChevronRight, Check } from 'lucide-react';
import { motion } from 'motion/react';

export const ExperienceSection: React.FC = () => {
  const [hoveredExpId, setHoveredExpId] = useState<string | null>(null);
  const [activeExpId, setActiveExpId] = useState<string | null>(PORTFOLIO_DATA.experiences[0].id);

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'trending-up':
        return <TrendingUp className="w-4 h-4 text-emerald-400" />;
      case 'users':
        return <Users className="w-4 h-4 text-[#fb7185]" />;
      case 'graduation-cap':
        return <GraduationCap className="w-4 h-4 text-blue-400" />;
      case 'book-open':
        return <BookOpen className="w-4 h-4 text-amber-400" />;
      case 'award':
        return <Award className="w-4 h-4 text-purple-400" />;
      default:
        return <TrendingUp className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="w-full px-3 sm:px-6 py-6 md:py-8 max-w-6xl mx-auto"
    >
      {/* Floating Dark Card - Exactly matching the video reference */}
      <div className="relative bg-[#111113] text-neutral-100 rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 md:p-12 lg:p-16 border border-neutral-800 shadow-[0_25px_60px_rgba(0,0,0,0.3)] overflow-hidden">
        
        {/* Subtle dark grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

        {/* Ghost Watermark "EXPERIENCE" in dark card */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 select-none pointer-events-none text-neutral-800/20 font-display font-extrabold text-[4rem] sm:text-[7rem] md:text-[9rem] tracking-widest whitespace-nowrap -z-0">
          EXPERIENCE
        </div>

        {/* Header Row */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-8 border-b border-neutral-800">
          <div>
            <span className="text-xs sm:text-sm font-mono font-bold tracking-wider text-neutral-400 uppercase">
              /EXPERIENCE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display mt-1">
              Internships & Academic Timeline
            </h2>
          </div>

        </div>

        {/* Experience List with Interactive Hover / Reveal */}
        <div className="relative z-10 divide-y divide-neutral-800/80 pt-2">
          {PORTFOLIO_DATA.experiences.map((exp) => {
            const isHovered = hoveredExpId === exp.id;
            const isExpanded = activeExpId === exp.id;

            return (
              <div
                key={exp.id}
                onMouseEnter={() => setHoveredExpId(exp.id)}
                onMouseLeave={() => setHoveredExpId(null)}
                className="py-5 sm:py-6 group transition-all"
              >
                {/* Clickable Header Row */}
                <button
                  onClick={() => setActiveExpId(activeExpId === exp.id ? null : exp.id)}
                  className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left cursor-pointer group-hover:text-white"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-[#fda4af] transition-colors">
                        {exp.organization}
                      </h3>

                      {/* Floating Micro-Badge on Hover (matching video 00:11-00:12) */}
                      {isHovered && (
                        <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-800/90 text-neutral-200 text-xs font-mono border border-neutral-700 animate-in fade-in zoom-in-95 duration-200 shadow-lg">
                          {getIcon(exp.badgePreview.iconType)}
                          <span>{exp.badgePreview.metric}</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-400">
                      <span className="font-medium text-neutral-300">{exp.role}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 shrink-0 pt-1 sm:pt-0">
                    <span className="text-xs sm:text-sm font-mono text-neutral-400 bg-neutral-900 px-3 py-1 rounded-lg border border-neutral-800">
                      {exp.period}
                    </span>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                      isExpanded
                        ? 'bg-white text-neutral-950 border-white rotate-90'
                        : 'border-neutral-700 text-neutral-400 group-hover:border-[#fda4af] group-hover:text-white'
                    }`}>
                      <ChevronRight className="w-4 h-4 transition-transform" />
                    </div>
                  </div>
                </button>

                {/* Details Accordion */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-neutral-800/60 animate-in fade-in duration-200 space-y-3">
                    <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-3.5 h-3.5 text-[#fb7185] mt-1 shrink-0" />
                          <span className="leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Mobile pill preview */}
                    <div className="md:hidden pt-2">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 text-neutral-300 text-xs font-mono border border-neutral-800">
                        {getIcon(exp.badgePreview.iconType)}
                        <span>{exp.badgePreview.focus}</span>
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
