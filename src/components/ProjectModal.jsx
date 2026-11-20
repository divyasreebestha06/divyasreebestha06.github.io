import React, { useEffect } from 'react';
import { X, Github, ExternalLink, CheckCircle2, AlertTriangle, Layers, Zap, Award } from 'lucide-react';

export default function ProjectModal({ project, onClose, isDark }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;
  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 z-10 glass-card shadow-2xl border ${
        isDark ? 'bg-[#0f111a] border-white/10 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        {/* Header Strip */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-700/30 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/30">
                {project.badge}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {project.category}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, idx) => (
            <span
              key={idx}
              className="text-xs font-mono font-medium px-2.5 py-1 rounded-lg bg-slate-800/80 text-cyan-300 border border-slate-700/50"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Case Study Details */}
        <div className="space-y-6 text-sm leading-relaxed">
          {/* Problem Statement */}
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <h4 className="text-sm font-bold text-rose-400 flex items-center gap-2 mb-2">
              <AlertTriangle size={16} />
              The Challenge & Problem Context
            </h4>
            <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>
              {caseStudy.problem}
            </p>
          </div>

          {/* Architecture */}
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <h4 className="text-sm font-bold text-indigo-400 flex items-center gap-2 mb-2">
              <Layers size={16} />
              System Architecture & Workflow
            </h4>
            <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>
              {caseStudy.architecture}
            </p>
          </div>

          {/* Technical Challenges */}
          {caseStudy.challenges && caseStudy.challenges.length > 0 && (
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <h4 className="text-sm font-bold text-amber-400 flex items-center gap-2 mb-2">
                <Zap size={16} />
                Key Technical Hurdles Solved
              </h4>
              <ul className="space-y-2 mt-2">
                {caseStudy.challenges.map((ch, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <span className="text-amber-400 shrink-0 mt-0.5">•</span>
                    <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{ch}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Solution & Impact */}
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <h4 className="text-sm font-bold text-emerald-400 flex items-center gap-2 mb-2">
              <CheckCircle2 size={16} />
              Implementation & Performance Impact
            </h4>
            <p className={`mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              <b>Solution:</b> {caseStudy.solution}
            </p>
            <p className="text-xs font-semibold text-emerald-400">
              <b>Result:</b> {caseStudy.impact}
            </p>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-4 border-t border-slate-700/30 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            Close
          </button>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-brand-600 hover:bg-brand-500 text-white transition-all shadow-md shadow-brand-500/20"
          >
            <Github size={16} />
            <span>View Source on GitHub</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
