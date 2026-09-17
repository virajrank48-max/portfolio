import React, { useState } from 'react';
import { Project, PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Layers, Cpu, BarChart3, TrendingUp, Database, Sparkles, X } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'methodology' | 'findings'>('overview');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/60 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      {/* Modal Card Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-[28px] sm:rounded-[36px] shadow-[0_25px_70px_rgba(0,0,0,0.25)] border border-neutral-200 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Top Floating Action Bar */}
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md px-6 sm:px-8 py-4 sm:py-5 border-b border-neutral-100 flex items-center justify-between">
          
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-700 hover:text-neutral-950 px-3.5 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </button>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-200/60">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{PORTFOLIO_DATA.personal.status}</span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 md:p-10 space-y-8">
          
          {/* Header Metadata */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-800">
                {project.category}
              </span>
              <span>•</span>
              <span className="text-neutral-600 font-mono">{project.tag}</span>
              <span>•</span>
              <span>{project.period}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 font-display tracking-tight">
              {project.title}
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              {project.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="inline-flex items-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full transition-all hover:shadow-md cursor-pointer"
              >
                <span>Discuss Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#fda4af]" />
              </button>

              <span className="text-xs text-neutral-500 font-mono">
                Organization: <strong className="text-neutral-800">{project.clientOrOrg}</strong>
              </span>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500 block">
                  {m.label}
                </span>
                <span className="text-xl sm:text-2xl font-bold text-neutral-900 font-display">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Navigation Tabs for Deep Dive */}
          <div className="border-b border-neutral-200 flex gap-6 text-sm font-medium">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-3 border-b-2 transition-all cursor-pointer ${
                activeTab === 'overview'
                  ? 'border-neutral-950 text-neutral-950 font-bold'
                  : 'border-transparent text-neutral-500 hover:text-neutral-800'
              }`}
            >
              Executive Summary
            </button>
            <button
              onClick={() => setActiveTab('methodology')}
              className={`pb-3 border-b-2 transition-all cursor-pointer ${
                activeTab === 'methodology'
                  ? 'border-neutral-950 text-neutral-950 font-bold'
                  : 'border-transparent text-neutral-500 hover:text-neutral-800'
              }`}
            >
              Econometric Architecture
            </button>
            <button
              onClick={() => setActiveTab('findings')}
              className={`pb-3 border-b-2 transition-all cursor-pointer ${
                activeTab === 'findings'
                  ? 'border-neutral-950 text-neutral-950 font-bold'
                  : 'border-transparent text-neutral-500 hover:text-neutral-800'
              }`}
            >
              Key Empirical Findings
            </button>
          </div>

          {/* Tab 1: Executive Summary */}
          {activeTab === 'overview' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <h3 className="text-base font-bold text-neutral-900 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-[#f43f5e]" />
                <span>Project Scope & Core Deliverables</span>
              </h3>
              <ul className="space-y-2.5 text-sm sm:text-base text-neutral-700">
                {project.summaryPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 block mb-2">
                  Tools & Technologies Used
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 rounded-lg bg-neutral-100 text-xs font-semibold text-neutral-800 border border-neutral-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Econometric Architecture */}
          {activeTab === 'methodology' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <h3 className="text-base font-bold text-neutral-900 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#f43f5e]" />
                <span>Analytical & Statistical Methods</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.methodologies.map((m, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/70 text-sm text-neutral-800">
                    <span className="text-xs font-bold text-[#f43f5e] font-mono block mb-1">
                      Step 0{i + 1}
                    </span>
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Key Empirical Findings */}
          {activeTab === 'findings' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <h3 className="text-base font-bold text-neutral-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#f43f5e]" />
                <span>Strategic Insights & Results</span>
              </h3>
              <ul className="space-y-3 text-sm sm:text-base text-neutral-700">
                {project.keyFindings.map((finding, idx) => (
                  <li key={idx} className="p-4 rounded-xl bg-rose-50/40 border border-rose-100 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-rose-100 text-[#f43f5e] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-neutral-800 font-medium">{finding}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
