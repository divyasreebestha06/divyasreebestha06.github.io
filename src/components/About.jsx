import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, BookOpen, MapPin, Sparkles, Code, Cpu, Server, Terminal } from 'lucide-react';

export default function About({ isDark }) {
  const { education } = portfolioData;

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase text-brand-400 bg-brand-500/10 mb-4 border border-brand-500/20">
            <Sparkles size={14} />
            Background & Education
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Engineering Clean, Scalable Systems with Purpose
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Bridging strong algorithmic foundations with modern cloud and backend architectures to build software that solves real-world operational challenges.
          </p>
        </div>

        {/* 2-Column Story & Interactive Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative & Focus Areas */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-brand-500/20 text-brand-400 flex items-center justify-center">
                  <Code size={18} />
                </span>
                <span>My Journey & Engineering Mindset</span>
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                I am currently pursuing my <b>B.Tech in Computer Science and Engineering with specialization in AI & Machine Learning</b> at <b>Srinivasa Ramanujan Institute of Technology</b> (Graduation: <b>2027</b>, CGPA: <b>8.47</b>).
              </p>
              <p className={`text-sm sm:text-base leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                My technical passion is centered on <b>Backend Engineering</b>, <b>Distributed Systems</b>, and <b>AI-Powered Developer Tools</b>. Rather than relying on simple templates, I focus on building reliable software from first principles: thread-safe concurrency, O(1) cache memory layouts, consistent hashing algorithms, and transactional REST microservices.
              </p>
              <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                As a <b>ServiceNow Certified System Administrator (CSA)</b> and <b>AWS Certified Cloud Practitioner</b>, I combine cloud infrastructure best practices with disciplined software engineering to write clean, maintainable, and fully tested code.
              </p>

              {/* Core Focus Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-slate-700/30">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <Server size={18} className="text-indigo-400 mb-1.5" />
                  <div className="text-xs font-bold text-slate-200">Backend APIs</div>
                  <div className="text-[11px] text-slate-400">FastAPI, Django, REST</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <Cpu size={18} className="text-brand-400 mb-1.5" />
                  <div className="text-xs font-bold text-slate-200">Distributed Systems</div>
                  <div className="text-[11px] text-slate-400">Caching, Hash Rings, Queues</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <Sparkles size={18} className="text-cyan-400 mb-1.5" />
                  <div className="text-xs font-bold text-slate-200">AI Integration</div>
                  <div className="text-[11px] text-slate-400">AST Analysis, Prompt Eng</div>
                </div>
              </div>
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-5 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-400">Location</div>
                  <div className="text-sm font-bold text-slate-200">Anantapur, AP, India</div>
                </div>
              </div>

              <div className="glass-card p-5 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-400">Academic Merit</div>
                  <div className="text-sm font-bold text-slate-200">8.47 Cumulative CGPA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Formal Education Timeline & Interactive Code Window */}
          <div className="lg:col-span-5 space-y-6">
            {/* Terminal Preview Card */}
            <div className="glass-card rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="px-4 py-3 bg-black/40 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="code-dot bg-rose-500/80"></span>
                  <span className="code-dot bg-amber-500/80"></span>
                  <span className="code-dot bg-emerald-500/80"></span>
                </div>
                <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal size={12} />
                  developer_profile.py
                </span>
                <span className="text-[10px] font-mono text-brand-400">v2.026</span>
              </div>
              <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-slate-300 bg-[#090b14]/70">
                <div className="text-slate-500"># Engineering Profile Specification</div>
                <div><span className="text-rose-400">engineer</span> = &#123;</div>
                <div className="pl-4"><span className="text-cyan-400">"name"</span>: <span className="text-amber-300">"Divya Sree Bestha"</span>,</div>
                <div className="pl-4"><span className="text-cyan-400">"education"</span>: <span className="text-amber-300">"B.Tech CSE (AI & ML)"</span>,</div>
                <div className="pl-4"><span className="text-cyan-400">"institution"</span>: <span className="text-amber-300">"SRIT"</span>,</div>
                <div className="pl-4"><span className="text-cyan-400">"cgpa"</span>: <span className="text-emerald-400">8.47</span>,</div>
                <div className="pl-4"><span className="text-cyan-400">"certifications"</span>: [<span className="text-amber-300">"ServiceNow CSA"</span>, <span className="text-amber-300">"AWS CLF-C02"</span>],</div>
                <div className="pl-4"><span className="text-cyan-400">"dsa_solved"</span>: <span className="text-emerald-400">250</span>,</div>
                <div className="pl-4"><span className="text-cyan-400">"coding_streak_days"</span>: <span className="text-emerald-400">143</span>,</div>
                <div className="pl-4"><span className="text-cyan-400">"github_genuine_commits"</span>: <span className="text-emerald-400">359</span>,</div>
                <div className="pl-4"><span className="text-cyan-400">"passion"</span>: <span className="text-amber-300">"High-concurrency systems & clean APIs"</span></div>
                <div>&#125;</div>
                <div className="mt-2 text-emerald-400 flex items-center gap-1.5">
                  <span className="animate-pulse">❯</span> engineer.build_impactful_software()
                </div>
              </div>
            </div>

            {/* Formal Education Cards */}
            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div key={idx} className="glass-card p-6 rounded-2xl relative">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-brand-500/15 text-brand-300 border border-brand-500/20">
                      {edu.period}
                    </span>
                    <span className="text-xs font-bold text-emerald-400">
                      {edu.score}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-100 mb-1">
                    {edu.degree}
                  </h4>
                  <div className="text-xs font-medium text-slate-400 mb-2">
                    {edu.institution}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
