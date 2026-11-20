import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Trophy, Award, Code2, Star, CheckCircle, ExternalLink } from 'lucide-react';

export default function Achievements({ isDark }) {
  const { achievements, certifications, internships } = portfolioData;

  const iconMap = {
    Code: <Code2 size={24} className="text-amber-400" />,
    Award: <Award size={24} className="text-brand-400" />,
    Trophy: <Trophy size={24} className="text-cyan-400" />,
    Star: <Star size={24} className="text-rose-400" />
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase text-amber-400 bg-amber-500/10 mb-4 border border-amber-500/20">
            <Trophy size={14} />
            Honors & Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Competitive Programming & Recognition
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Demonstrated algorithmic consistency across global coding platforms, competitive programming contests, and academic innovation forums.
          </p>
        </div>

        {/* 4 Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {achievements.map((item, idx) => (
            <div key={idx} className="glass-card p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/5 flex items-center justify-center">
                    {iconMap[item.icon] || <Trophy size={24} className="text-brand-400" />}
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/20">
                    {item.badge}
                  </span>
                </div>

                <div className="text-2xl font-extrabold text-white mb-1">
                  {item.metric}
                </div>
                <h3 className="text-sm font-bold text-slate-200 mb-2">
                  {item.title}
                </h3>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Virtual Internships Section */}
        <div id="certifications" className="pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Certifications */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <Award size={20} className="text-brand-400" />
                <h3 className="text-2xl font-bold text-slate-100">
                  Professional Certifications
                </h3>
              </div>
              <p className={`text-xs sm:text-sm mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Accredited platform and cloud certifications validating enterprise administration and foundational cloud architecture expertise.
              </p>

              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="glass-card p-6 rounded-2xl border border-white/10">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-brand-500/20 text-brand-300">
                        {cert.id}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {cert.year}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white mb-1">
                      {cert.name}
                    </h4>
                    <div className="text-xs text-brand-400 mb-3 font-medium">
                      Issuer: {cert.issuer}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((s, sIdx) => (
                        <span key={sIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/5">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Virtual Internships */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle size={20} className="text-cyan-400" />
                <h3 className="text-2xl font-bold text-slate-100">
                  Virtual Internships & Capstones
                </h3>
              </div>
              <p className={`text-xs sm:text-sm mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Rigorous multi-week virtual internship cohorts focused on Generative AI architectures, prompt engineering, and AWS cloud deployments.
              </p>

              <div className="space-y-4">
                {internships.map((intern, idx) => (
                  <div key={idx} className="glass-card p-6 rounded-2xl border border-white/10">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-md border border-cyan-500/20">
                        {intern.grade}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {intern.period}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white mb-1">
                      {intern.role}
                    </h4>
                    <div className="text-xs text-indigo-400 mb-3 font-medium">
                      {intern.organization}
                    </div>

                    <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      {intern.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
