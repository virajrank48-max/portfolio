import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUpRight, ArrowUp, Linkedin, Github, Mail, Copy, Check, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactSectionProps {
  onOpenContact: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenContact }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="w-full px-3 sm:px-6 py-6 md:py-10 max-w-6xl mx-auto"
    >
      {/* Floating Dark Card */}
      <div className="relative bg-[#111113] text-neutral-100 rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 md:p-16 lg:p-20 border border-neutral-800 shadow-[0_25px_60px_rgba(0,0,0,0.3)] overflow-hidden text-center flex flex-col items-center">
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        {/* Available for New Project Pill */}
        <div className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-700 mb-6 shadow-2xs">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-medium text-neutral-200 tracking-tight">
            {PORTFOLIO_DATA.personal.status}
          </span>
        </div>

        {/* Large Bold Heading */}
        <h2 className="relative z-10 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight font-display max-w-3xl leading-[1.05]">
          HAVE A PROJECT IN MIND?
        </h2>

        {/* Subtitle */}
        <p className="relative z-10 text-sm sm:text-base md:text-lg text-neutral-400 max-w-xl mx-auto mt-5 leading-relaxed">
          Together, we can create something clear and impactful. Let's collaborate to bring our ideas to life in a way that resonates with everyone.
        </p>

        {/* Contact Me Button */}
        <div className="relative z-10 mt-8 mb-12 sm:mb-16">
          <button
            id="contact-cta-btn"
            onClick={onOpenContact}
            className="inline-flex items-center gap-2.5 bg-neutral-950 hover:bg-neutral-800 text-white text-sm sm:text-base font-medium px-8 sm:px-10 py-3.5 sm:py-4 rounded-full transition-all duration-300 hover:shadow-[0_10px_30px_rgba(244,63,94,0.35)] hover:border-[#fecdd3] border border-transparent group cursor-pointer"
          >
            <span>Contact Me</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#fda4af] transition-transform" />
          </button>
        </div>

        {/* Contact info quick links (Email, Phone, Location) */}
        <div className="relative z-10 w-full max-w-2xl grid grid-cols-1 sm:grid-cols-3 gap-3 pb-12 border-b border-neutral-800">
          <button
            onClick={() => handleCopy(PORTFOLIO_DATA.personal.email, 'email')}
            className="p-3 rounded-2xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-[#fda4af] transition-all text-left flex items-center justify-between group cursor-pointer"
          >
            <div className="truncate">
              <span className="text-[10px] uppercase font-mono text-neutral-400 block">Email</span>
              <span className="text-xs font-semibold text-neutral-200 truncate block">
                {PORTFOLIO_DATA.personal.email}
              </span>
            </div>
            {copiedType === 'email' ? (
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white shrink-0" />
            )}
          </button>

          <button
            onClick={() => handleCopy(PORTFOLIO_DATA.personal.phone, 'phone')}
            className="p-3 rounded-2xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-[#fda4af] transition-all text-left flex items-center justify-between group cursor-pointer"
          >
            <div>
              <span className="text-[10px] uppercase font-mono text-neutral-400 block">Phone</span>
              <span className="text-xs font-semibold text-neutral-200 block">
                {PORTFOLIO_DATA.personal.phone}
              </span>
            </div>
            {copiedType === 'phone' ? (
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white shrink-0" />
            )}
          </button>

          <div className="p-3 rounded-2xl bg-neutral-900 border border-neutral-800 text-left flex items-center gap-2">
            <MapPin className="w-4 h-4 text-neutral-400 shrink-0" />
            <div className="truncate">
              <span className="text-[10px] uppercase font-mono text-neutral-400 block">Location</span>
              <span className="text-xs font-semibold text-neutral-200 truncate block">
                Pune, India
              </span>
            </div>
          </div>
        </div>

        {/* Footer Row (Exactly as in Video 00:13) */}
        <div className="relative z-10 w-full pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Avatar & Name Pill */}
          <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800">
            <div className="w-6 h-6 rounded-full bg-neutral-900 text-white font-bold text-[10px] flex items-center justify-center">
              VR
            </div>
            <span className="text-xs sm:text-sm font-semibold text-neutral-200">
              {PORTFOLIO_DATA.personal.fullName}
            </span>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs sm:text-sm font-medium text-neutral-400 hover:text-white transition-colors group"
            >
              <Linkedin className="w-3.5 h-3.5 text-neutral-400 group-hover:text-blue-600 transition-colors" />
              <span>LinkedIn</span>
            </a>

            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs sm:text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors group"
            >
              <Github className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" />
              <span>GitHub</span>
            </a>

            <button
              onClick={onOpenContact}
              className="flex items-center gap-1 text-xs sm:text-sm font-medium text-neutral-400 hover:text-[#fda4af] transition-colors cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </button>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

      </div>
    </motion.section>
  );
};
