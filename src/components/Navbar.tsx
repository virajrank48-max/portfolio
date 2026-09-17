import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Service', href: '#service' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="w-full pt-4 md:pt-6 pb-2 px-3 sm:px-6 max-w-6xl mx-auto sticky top-0 z-40 transition-all">
      <div className="bg-[#111113]/95 backdrop-blur-md border border-neutral-800 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 shadow-[0_12px_35px_rgba(0,0,0,0.3)] flex items-center justify-between">
        
        {/* Availability Status Badge */}
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-medium text-neutral-200 tracking-tight whitespace-nowrap">
            {PORTFOLIO_DATA.personal.status}
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs lg:text-sm text-neutral-400 hover:text-white font-medium transition-colors flex items-center gap-1 group py-1"
            >
              <span>{link.name}</span>
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <button
            id="nav-lets-talk-btn"
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center gap-1.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs sm:text-sm font-medium px-4 sm:px-5 py-2 rounded-full transition-all duration-300 hover:shadow-[0_4px_16px_rgba(244,63,94,0.3)] hover:border-[#fecdd3] border border-transparent group cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#fda4af] transition-transform" />
          </button>

          {/* Mobile Hamburger */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full hover:bg-neutral-800 text-neutral-300"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-[#111113]/95 backdrop-blur-md border border-neutral-800 rounded-3xl p-4 shadow-[0_12px_35px_rgba(0,0,0,0.3)] flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-neutral-800 text-sm font-medium text-neutral-200"
            >
              <span>{link.name}</span>
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full flex items-center justify-center gap-2 bg-neutral-900 text-white text-sm font-medium py-3 rounded-2xl mt-1"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4 text-[#fda4af]" />
          </button>
        </div>
      )}
    </header>
  );
};
