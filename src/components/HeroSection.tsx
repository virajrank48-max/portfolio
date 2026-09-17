import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUpRight, Linkedin, Github, Mail, MapPin, Check, Copy, TrendingUp, Binary } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onOpenContact: () => void;
}

// Editorial high-res portrait of a young professional analyst with glasses
const DEFAULT_PHOTO = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80";

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState<string>(DEFAULT_PHOTO);

  useEffect(() => {
    const saved = localStorage.getItem('viraj_profile_photo');
    if (saved) {
      setProfilePhoto(saved);
    }
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="w-full px-3 sm:px-6 py-4 md:py-6 max-w-6xl mx-auto"
    >
      {/* Floating White Card */}
      <div className="relative bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 md:p-12 lg:p-16 border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden">
        
        {/* Subtle decorative grid/graph lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* Big Outline + Solid Name Typography */}
        <div className="relative z-10 pt-2 pb-6 sm:pb-8">
          <h1 className="font-display text-[2.75rem] sm:text-[4.75rem] md:text-[6.5rem] lg:text-[8rem] xl:text-[8.5rem] leading-[0.95] tracking-tighter uppercase flex flex-wrap items-baseline gap-x-3 sm:gap-x-6">
            <span className="stroke-text-hero select-none hover:text-neutral-900 transition-colors duration-500">
              {PORTFOLIO_DATA.personal.nameFirst}
            </span>
            <span className="text-neutral-950 font-extrabold select-none hover:opacity-90 transition-opacity">
              {PORTFOLIO_DATA.personal.nameLast}
            </span>
          </h1>
        </div>

        {/* Hero Middle & Lower Content Layout */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end pt-2 sm:pt-6">
          
          {/* Left Column: Title, Bio, and Call-to-Action */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-[11px] font-semibold tracking-wider text-neutral-600 uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f43f5e]" />
                Economics & Quantitative Analytics
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900">
                Data Analyst
                <span className="block text-lg sm:text-xl font-normal text-neutral-500 mt-1">
                  Aspiring Quantitative Researcher
                </span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-md">
              {PORTFOLIO_DATA.personal.shortBio}
            </p>

            {/* Prominent Core Skills Chips */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              {['Apache Spark', 'Hadoop', 'Scikit-learn', 'Python', 'SQL', 'Econometrics'].map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-neutral-100 text-neutral-700 border border-neutral-200/80 hover:border-[#fda4af] hover:text-[#f43f5e] transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                id="hero-collaborate-btn"
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_8px_25px_rgba(244,63,94,0.35)] hover:border-[#fecdd3] border border-transparent group cursor-pointer"
              >
                <span>Let's collaborate</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#fda4af] transition-transform" />
              </button>

              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-medium text-sm sm:text-base px-5 py-3 sm:py-3.5 rounded-full transition-colors cursor-pointer"
              >
                <span>Selected Work</span>
              </a>
            </div>

            {/* Quick stats counter badge */}
            <div className="pt-3 flex items-center gap-6 border-t border-neutral-100">
              <div>
                <span className="block text-xl sm:text-2xl font-bold text-neutral-900 font-display">7.8</span>
                <span className="text-[11px] text-neutral-500 uppercase tracking-wider">M.Sc. CGPA</span>
              </div>
              <div className="h-7 w-[1px] bg-neutral-200" />
              <div>
                <span className="block text-xl sm:text-2xl font-bold text-neutral-900 font-display">7+</span>
                <span className="text-[11px] text-neutral-500 uppercase tracking-wider">Certifications</span>
              </div>
              <div className="h-7 w-[1px] bg-neutral-200" />
              <div>
                <span className="block text-xl sm:text-2xl font-bold text-neutral-900 font-display">500+</span>
                <span className="text-[11px] text-neutral-500 uppercase tracking-wider">Households Studied</span>
              </div>
            </div>
          </div>

          {/* Center: Stylized Editorial Portrait & Visual Element */}
          <div className="lg:col-span-4 flex justify-center order-first lg:order-none">
            <div className="relative group w-full max-w-[280px] sm:max-w-[320px]">
              
              {/* Soft decorative background glow */}
              <div className="absolute -inset-2 bg-gradient-to-t from-neutral-200/60 to-transparent rounded-[32px] blur-lg -z-10 group-hover:from-rose-100/60 transition-all duration-700" />

              {/* Portrait Container with Crisp Studio Framing */}
              <div
                className="relative bg-gradient-to-b from-neutral-100 via-neutral-200 to-neutral-300 rounded-[28px] overflow-hidden border border-neutral-200/80 aspect-[4/5] flex flex-col items-center justify-end shadow-[0_15px_35px_rgba(0,0,0,0.06)]"
              >
                
                {/* Visual Data Overlay Lines */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-neutral-500 z-20 pointer-events-none">
                  <span className="flex items-center gap-1">
                    <Binary className="w-3 h-3 text-[#f43f5e]" />
                    <span>SSE / SIU</span>
                  </span>
                  <span className="bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-full text-[10px] font-semibold text-neutral-700 shadow-2xs">
                    PUNE, IN
                  </span>
                </div>

                {/* Professional Headshot Photograph */}
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  <img
                    src={profilePhoto}
                    alt="Viraj Rank - Data Analyst"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      // Graceful fallback to default photo if custom fails
                      (e.target as HTMLImageElement).src = DEFAULT_PHOTO;
                    }}
                  />
                  {/* Subtle gradient shadow at bottom for floating badge readability */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
                </div>

                {/* Floating pill badge at base */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-2xl py-2 px-3 border border-black/[0.06] shadow-sm flex items-center justify-between z-20">
                  <div className="flex items-center gap-2">
                    <span className="p-1 rounded-full bg-rose-50 text-[#f43f5e]">
                      <TrendingUp className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[11px] font-semibold text-neutral-800">
                      Viraj Rank
                    </span>
                  </div>
                  <span className="text-[10px] text-neutral-500 font-mono">
                    Quant / Econ
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Social Links & Contact Links */}
          <div className="lg:col-span-3 flex flex-col justify-end space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Connect & Profile
            </span>

            <ul className="space-y-2.5">
              <li>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-2xl bg-neutral-50 hover:bg-neutral-100 hover:border-[#fda4af] border border-transparent transition-all group"
                >
                  <span className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-neutral-800">
                    <Linkedin className="w-4 h-4 text-neutral-500 group-hover:text-blue-600 transition-colors" />
                    <span>LinkedIn</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>

              <li>
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-2xl bg-neutral-50 hover:bg-neutral-100 hover:border-[#fda4af] border border-transparent transition-all group"
                >
                  <span className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-neutral-800">
                    <Github className="w-4 h-4 text-neutral-500 group-hover:text-neutral-900 transition-colors" />
                    <span>GitHub</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>

              <li>
                <button
                  onClick={handleCopyEmail}
                  className="w-full flex items-center justify-between p-3 rounded-2xl bg-neutral-50 hover:bg-neutral-100 hover:border-[#fda4af] border border-transparent transition-all group cursor-pointer text-left"
                >
                  <span className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-neutral-800">
                    <Mail className="w-4 h-4 text-neutral-500 group-hover:text-rose-500 transition-colors" />
                    <span className="truncate">{copiedEmail ? 'Copied to Clipboard!' : PORTFOLIO_DATA.personal.email}</span>
                  </span>
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700 shrink-0" />
                  )}
                </button>
              </li>

              <li className="pt-1">
                <div className="flex items-center gap-2 p-2.5 rounded-2xl bg-neutral-50/70 text-xs text-neutral-500">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  <span className="truncate">{PORTFOLIO_DATA.personal.location}</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </motion.section>
  );
};
