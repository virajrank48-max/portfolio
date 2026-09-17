import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Award, Code2, BrainCircuit, GraduationCap, CheckCircle, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const SkillsCertificationsSection: React.FC = () => {
  const [selectedSkillFilter, setSelectedSkillFilter] = useState<string>('All');

  const filterOptions = ['All', 'Big Data', 'Machine Learning', 'Data Science & SQL'];

  const filteredSkills = PORTFOLIO_DATA.technicalSkills.filter((skill) => {
    if (selectedSkillFilter === 'All') return true;
    if (selectedSkillFilter === 'Big Data') return skill.name.includes('Spark') || skill.name.includes('Hadoop');
    if (selectedSkillFilter === 'Machine Learning') return skill.name.includes('Scikit') || skill.category.includes('Machine Learning');
    if (selectedSkillFilter === 'Data Science & SQL') return skill.name === 'Python' || skill.name === 'SQL' || skill.name === 'R';
    return true;
  });

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="w-full px-3 sm:px-6 py-6 md:py-8 max-w-6xl mx-auto"
    >
      {/* Floating White Card */}
      <div className="relative bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 md:p-12 lg:p-16 border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden">
        
        {/* Ghost Watermark "CREDENTIALS" in background */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 select-none pointer-events-none text-neutral-100/70 font-display font-extrabold text-[3.8rem] sm:text-[6.5rem] md:text-[8rem] tracking-widest whitespace-nowrap -z-0">
          CAPABILITIES
        </div>

        {/* Header */}
        <div className="relative z-10 pb-8 border-b border-neutral-100">
          <span className="text-xs sm:text-sm font-mono font-bold tracking-wider text-neutral-400 uppercase">
            /SKILLS & CERTIFICATIONS
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mt-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight font-display">
              Technical Stack, Core Concepts & Credentials
            </h2>
            <span className="text-xs sm:text-sm text-neutral-500 font-mono">
              [Validated Mastery]
            </span>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          
          {/* Left Column: Technical Skills & Core Concepts (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Technical Skills Block */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-base sm:text-lg font-bold text-neutral-950 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#f43f5e]" />
                  <span>Technical Proficiencies</span>
                </h3>
                
                {/* Skill Filter Pills */}
                <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
                  {filterOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSelectedSkillFilter(opt)}
                      className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium transition-all cursor-pointer whitespace-nowrap ${
                        selectedSkillFilter === opt
                          ? 'bg-neutral-900 text-white shadow-2xs'
                          : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Skills badges grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {filteredSkills.map((skill, index) => {
                  const isHighlighted = skill.name === 'Apache Spark' || skill.name === 'Hadoop' || skill.name === 'Scikit-learn';
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className={`p-3 rounded-2xl transition-all group ${
                        isHighlighted
                          ? 'bg-gradient-to-br from-rose-50/70 to-neutral-50 border border-[#fecdd3] hover:border-[#f43f5e] shadow-2xs'
                          : 'bg-neutral-50 hover:bg-neutral-100 border border-neutral-200/80 hover:border-[#fda4af]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-bold transition-colors flex items-center gap-1 ${
                          isHighlighted ? 'text-neutral-950 group-hover:text-[#f43f5e]' : 'text-neutral-900 group-hover:text-[#f43f5e]'
                        }`}>
                          {skill.name}
                          {isHighlighted && <Sparkles className="w-3 h-3 text-[#f43f5e] inline shrink-0" />}
                        </span>
                        <span className={`text-[10px] font-mono font-medium px-1.5 py-0.5 rounded ${
                          isHighlighted ? 'bg-[#f43f5e]/10 text-[#f43f5e]' : 'text-neutral-400 bg-neutral-200/60'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                      <span className="text-[11px] text-neutral-500 block truncate mt-0.5">
                        {skill.category}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Core Econometric Concepts Block */}
            <div className="space-y-4 pt-4 border-t border-neutral-100">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-bold text-neutral-950 flex items-center gap-2">
                  <BrainCircuit className="w-4 h-4 text-[#f43f5e]" />
                  <span>Econometric & Statistical Concepts</span>
                </h3>
                <span className="text-xs text-neutral-400 font-mono">Foundations</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.concepts.map((concept, idx) => (
                  <motion.span
                    key={concept}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.03 }}
                    className="px-3.5 py-1.5 rounded-full bg-neutral-100 hover:bg-white text-xs sm:text-sm font-medium text-neutral-800 border border-neutral-200/70 hover:border-[#fda4af] hover:shadow-xs transition-all"
                  >
                    {concept}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Education Highlights */}
            <div className="space-y-3 pt-4 border-t border-neutral-100">
              <h3 className="text-base sm:text-lg font-bold text-neutral-950 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#f43f5e]" />
                <span>Academic Degrees</span>
              </h3>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono text-[#f43f5e] font-bold">2025 - Expected 2027</span>
                    <h4 className="text-sm sm:text-base font-bold text-neutral-900">
                      M.Sc. Economics (Data Analytics)
                    </h4>
                    <p className="text-xs text-neutral-500">
                      Symbiosis School of Economics (SIU), Pune
                    </p>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <span className="px-3 py-1 rounded-full bg-white border border-neutral-200 text-xs font-bold text-neutral-900 font-mono">
                      CGPA: 7.8 / 10
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono text-neutral-400 font-bold">2022 - 2025</span>
                    <h4 className="text-sm sm:text-base font-bold text-neutral-900">
                      B.A. in Economics
                    </h4>
                    <p className="text-xs text-neutral-500">
                      The Maharaja Sayajirao University of Baroda
                    </p>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <span className="px-3 py-1 rounded-full bg-white border border-neutral-200 text-xs font-bold text-neutral-600 font-mono">
                      Completed
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 7 Certifications (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-neutral-950 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#f43f5e]" />
                <span>Certifications</span>
              </h3>
            </div>

            <div className="space-y-2.5">
              {PORTFOLIO_DATA.certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className={`p-3.5 rounded-2xl transition-all group ${
                    cert.featured
                      ? 'bg-gradient-to-r from-neutral-50 via-white to-rose-50/30 border border-neutral-200/90 hover:border-[#f43f5e] shadow-2xs'
                      : 'bg-neutral-50 hover:bg-white border border-neutral-200/80 hover:border-[#fda4af]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-[#f43f5e] transition-colors leading-snug">
                          {cert.title}
                        </h4>
                      </div>
                      <p className="text-xs text-neutral-500">
                        <strong className="text-neutral-700 font-medium">{cert.issuer}</strong> • <span className="text-neutral-400">{cert.platform}</span>
                      </p>
                    </div>

                    <span className="p-1 rounded-full bg-emerald-50 text-emerald-600 shrink-0">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <div className="mt-2.5 flex items-center gap-2">
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white border border-neutral-200 text-neutral-600">
                      {cert.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </motion.section>
  );
};
