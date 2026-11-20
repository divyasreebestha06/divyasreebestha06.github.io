import React from 'react';
import { ArrowUp, Github, Linkedin, Code2, Award, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ isDark }) {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-800/60 relative z-10 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/40">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 via-indigo-500 to-cyan-400 p-[1.5px]">
              <div className="w-full h-full rounded-[10px] bg-[#0e101a] flex items-center justify-center font-bold text-xs text-white">
                DB
              </div>
            </div>
            <div>
              <span className="font-bold text-sm text-white">
                Divya Sree Bestha
              </span>
              <span className="text-xs text-slate-500 block">
                Software Engineer Portfolio
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-lg bg-white/5 text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={personal.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="p-2.5 rounded-lg bg-white/5 text-slate-400 hover:text-amber-400 hover:bg-white/10 transition-colors"
            >
              <Code2 size={18} />
            </a>
            <a
              href={personal.codechef}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CodeChef"
              className="p-2.5 rounded-lg bg-white/5 text-slate-400 hover:text-amber-500 hover:bg-white/10 transition-colors"
            >
              <Award size={18} />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Divya Sree Bestha. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Designed & Engineered with React, Vite & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
