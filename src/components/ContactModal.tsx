import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, Mail, Phone, MapPin, Send, Check, Copy, ArrowUpRight, Linkedin, Github } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Data Analytics Inquiry',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending message or opening mailto
    setIsSubmitted(true);
    setTimeout(() => {
      window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Hi Viraj,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      )}`;
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-[28px] sm:rounded-[36px] shadow-[0_25px_70px_rgba(0,0,0,0.25)] border border-neutral-200 overflow-hidden my-auto p-6 sm:p-8 md:p-10">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-neutral-100">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider text-neutral-500 uppercase">
                Direct Collaboration
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 font-display">
              Let's Connect
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Contact Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 pb-6">
          <div
            onClick={() => handleCopy(PORTFOLIO_DATA.personal.email, 'email')}
            className="p-3.5 rounded-2xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-200/80 hover:border-[#fda4af] transition-all cursor-pointer group flex items-center justify-between"
          >
            <div className="flex items-center gap-2.5 overflow-hidden">
              <Mail className="w-4 h-4 text-neutral-500 group-hover:text-[#f43f5e] shrink-0" />
              <div className="truncate">
                <span className="text-[10px] uppercase font-mono text-neutral-400 block">Email</span>
                <span className="text-xs sm:text-sm font-semibold text-neutral-900 truncate block">
                  {PORTFOLIO_DATA.personal.email}
                </span>
              </div>
            </div>
            {copiedType === 'email' ? (
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700 shrink-0" />
            )}
          </div>

          <div
            onClick={() => handleCopy(PORTFOLIO_DATA.personal.phone, 'phone')}
            className="p-3.5 rounded-2xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-200/80 hover:border-[#fda4af] transition-all cursor-pointer group flex items-center justify-between"
          >
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-neutral-500 group-hover:text-emerald-600 shrink-0" />
              <div>
                <span className="text-[10px] uppercase font-mono text-neutral-400 block">Phone</span>
                <span className="text-xs sm:text-sm font-semibold text-neutral-900 block">
                  {PORTFOLIO_DATA.personal.phone}
                </span>
              </div>
            </div>
            {copiedType === 'phone' ? (
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700 shrink-0" />
            )}
          </div>
        </div>

        {/* Message Form */}
        {isSubmitted ? (
          <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2 animate-in zoom-in-95">
            <Check className="w-8 h-8 text-emerald-600 mx-auto" />
            <h4 className="text-lg font-bold text-neutral-900">Preparing Message</h4>
            <p className="text-sm text-neutral-600">
              Launching your default email client with your pre-filled inquiry...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-neutral-700 block mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:border-neutral-950 focus:bg-white transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-neutral-700 block mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. alex@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:border-neutral-950 focus:bg-white transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-neutral-700 block mb-1">Subject</label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:border-neutral-950 focus:bg-white transition-colors"
              >
                <option value="Data Analytics Inquiry">Data Analytics & Visualization</option>
                <option value="Econometric Modeling Collaboration">Econometric Modeling Collaboration</option>
                <option value="Quantitative Research Opportunity">Quantitative Research Opportunity</option>
                <option value="General Collaboration">General Networking / Coffee Chat</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-neutral-700 block mb-1">Project Scope / Message</label>
              <textarea
                required
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Briefly describe your requirements or inquiry..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:border-neutral-950 focus:bg-white transition-colors resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                <span>Pune, India (GMT +5:30)</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all hover:shadow-lg cursor-pointer"
              >
                <span>Send Message</span>
                <Send className="w-3.5 h-3.5 text-[#fda4af]" />
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
