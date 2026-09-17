import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WorkSection } from './components/WorkSection';
import { ServiceSection } from './components/ServiceSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsCertificationsSection } from './components/SkillsCertificationsSection';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';
import { ContactModal } from './components/ContactModal';
import { Project } from './data/portfolioData';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Smooth scroll tracking
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setShowScrollTop(latest > 350);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative cloud-backdrop text-neutral-900 selection:bg-[#fda4af] selection:text-neutral-950 font-sans-main overflow-x-hidden">
      
      {/* Scroll Progress Bar at the Top */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-neutral-900 via-[#f43f5e] to-rose-400 origin-left z-50 pointer-events-none"
      />

      {/* Soft atmospheric cloud overlay textures */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden opacity-60">
        <svg
          className="absolute w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 900"
        >
          <defs>
            <filter id="cloudFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.008" numOctaves="4" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="35" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <linearGradient id="cloudGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#e2e8f0" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <circle cx="200" cy="180" r="320" fill="url(#cloudGrad1)" filter="url(#cloudFilter)" />
          <circle cx="1200" cy="300" r="380" fill="url(#cloudGrad1)" filter="url(#cloudFilter)" />
          <circle cx="650" cy="750" r="420" fill="url(#cloudGrad1)" filter="url(#cloudFilter)" />
        </svg>
      </div>

      {/* Main Top Navigation */}
      <Navbar onOpenContact={() => setIsContactModalOpen(true)} />

      {/* Floating Card Sections */}
      <main className="space-y-4 sm:space-y-6 md:space-y-8 pb-12 sm:pb-16">
        
        {/* 1. Hero Section */}
        <HeroSection onOpenContact={() => setIsContactModalOpen(true)} />

        {/* 2. Selected Work / Portfolio Section */}
        <WorkSection onSelectProject={(p) => setSelectedProject(p)} />

        {/* 3. Service Section */}
        <ServiceSection />

        {/* 4. Experience Section (Dark card like video) */}
        <ExperienceSection />

        {/* 5. Skills, Concepts & Certifications Section */}
        <SkillsCertificationsSection />

        {/* 6. Contact & Footer Section */}
        <ContactSection onOpenContact={() => setIsContactModalOpen(true)} />

      </main>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={scrollToTop}
            title="Scroll to top"
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-neutral-950/90 text-white hover:bg-[#f43f5e] shadow-[0_8px_25px_rgba(0,0,0,0.2)] backdrop-blur-md border border-white/20 transition-all cursor-pointer group"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={() => setIsContactModalOpen(true)}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

    </div>
  );
}
