import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Github, Code2, Award, ExternalLink, GitCommit, Flame, CheckCircle2 } from 'lucide-react';

export default function CodingProfiles({ isDark }) {
  const { personal } = portfolioData;

  const profiles = [
    {
      name: "GitHub",
      handle: "divyasreebestha06",
      url: personal.github,
      icon: <Github size={28} className="text-white" />,
      tag: "Active Engineering",
      color: "from-purple-900/40 to-slate-900/50",
      stats: [
        { label: "Profile Commits", val: "359+" },
        { label: "Portfolio Repos", val: "25 Repos" },
        { label: "LeetCode Repo", val: "144 Commits" }
      ],
      desc: "Full open-source codebases with unit tests, Dockerfiles, and CI/CD pipelines."
    },
    {
      name: "LeetCode",
      handle: "BesthaDivyaSree",
      url: personal.leetcode,
      icon: <Code2 size={28} className="text-amber-400" />,
      tag: "DSA & Problem Solving",
      color: "from-amber-950/40 to-slate-900/50",
      stats: [
        { label: "Problems Solved", val: "250+" },
        { label: "Coding Streak", val: "143 Days" },
        { label: "Profile Badges", val: "5 Earned" }
      ],
      desc: "Consistent daily challenge algorithmic problem solving across Arrays, Graphs, DP, and Trees."
    },
    {
      name: "CodeChef",
      handle: "quiet_wave_99",
      url: personal.codechef,
      icon: <Award size={28} className="text-amber-500" />,
      tag: "Competitive Programming",
      color: "from-yellow-950/40 to-slate-900/50",
      stats: [
        { label: "Star Rating", val: "3★ Star" },
        { label: "Contest Division", val: "Division 3" },
        { label: "TCS CodeVita", val: "Round 2 Qual" }
      ],
      desc: "Algorithmic contests focusing on rapid mathematical intuition and low-complexity solutions."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase text-emerald-400 bg-emerald-500/10 mb-4 border border-emerald-500/20">
            <Flame size={14} />
            Coding Profiles & Verification
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Proven Algorithmic & Development Consistency
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Direct links and transparent metrics from authentic competitive programming profiles and code hosting repositories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {profiles.map((p, idx) => (
            <div
              key={idx}
              className={`glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-white/10 hover:border-brand-500/30 transition-all bg-gradient-to-br ${p.color}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
                    {p.icon}
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-white/10 text-slate-300">
                    {p.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1">
                  {p.name}
                </h3>
                <div className="text-xs font-mono text-brand-300 mb-4">
                  @{p.handle}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {p.desc}
                </p>

                <div className="grid grid-cols-3 gap-2 py-4 border-y border-white/10 mb-6">
                  {p.stats.map((s, sIdx) => (
                    <div key={sIdx} className="text-center">
                      <div className="text-sm font-bold text-white">
                        {s.val}
                      </div>
                      <div className="text-[10px] text-slate-400">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <span>Visit {p.name} Profile</span>
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
