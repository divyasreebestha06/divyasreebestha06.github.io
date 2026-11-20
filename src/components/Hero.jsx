import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, FileText, Mail, Github, Linkedin, Code2, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Hero({ isDark }) {
  const { personal, stats } = portfolioData;

  const handleCelebrate = () => {
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="home" className="relative min-h-[92vh] pt-32 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Decorative Ambient Glowing Orbs */}
      <div className="orb w-96 h-96 -top-20 -left-20 bg-brand-600/20" />
      <div className="orb w-[30rem] h-[30rem] top-1/3 -right-24 bg-indigo-600/15" />
      <div className="orb w-80 h-80 bottom-10 left-1/3 bg-cyan-500/15" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs sm:text-sm font-medium mb-8 animate-fade-in shadow-inner">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
            {personal.availability}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
          <span className="block text-slate-400 text-lg sm:text-2xl font-mono font-normal tracking-wide mb-2">
            Hello, I am
          </span>
          <span className="gradient-text">
            {personal.name}
          </span>
        </h1>

        {/* Dynamic Subheading */}
        <p className="text-lg sm:text-2xl font-semibold text-slate-200 mb-6 max-w-3xl mx-auto leading-relaxed">
          <span className="text-brand-400">Software Engineer</span> &bull;{' '}
          <span className="text-indigo-400">Backend Architect</span> &bull;{' '}
          <span className="text-cyan-400">AI/ML Enthusiast</span>
        </p>

        {/* Description */}
        <p className={`text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal ${
          isDark ? 'text-slate-400' : 'text-slate-600'
        }`}>
          {personal.bio}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-brand-600 via-indigo-600 to-cyan-500 text-white shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            <span>Explore Projects</span>
            <ArrowRight size={17} />
          </a>

          <a
            href="/Divya_Sree_Bestha_Resume.pdf"
            download="Divya_Sree_Bestha_Resume.pdf"
            onClick={handleCelebrate}
            className={`flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm glass-card border transition-all hover:scale-[1.03] active:scale-[0.98] ${
              isDark ? 'border-white/10 text-white hover:border-brand-500/40' : 'border-slate-300 text-slate-800 hover:border-brand-500'
            }`}
          >
            <FileText size={17} className="text-brand-400" />
            <span>Download Resume</span>
          </a>

          <a
            href="#contact"
            className={`flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-[1.03] active:scale-[0.98] ${
              isDark
                ? 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Mail size={17} />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Social Profile Badges */}
        <div className="flex items-center justify-center gap-5 mb-14">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className={`p-3 rounded-xl transition-all hover:scale-110 ${
              isDark ? 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Github size={20} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className={`p-3 rounded-xl transition-all hover:scale-110 ${
              isDark ? 'bg-white/5 text-slate-300 hover:text-cyan-400 hover:bg-white/10' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Linkedin size={20} />
          </a>
          <a
            href={personal.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode Profile"
            className={`p-3 rounded-xl transition-all hover:scale-110 ${
              isDark ? 'bg-white/5 text-slate-300 hover:text-amber-400 hover:bg-white/10' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Code2 size={20} />
          </a>
          <a
            href={personal.codechef}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CodeChef Profile"
            className={`p-3 rounded-xl transition-all hover:scale-110 ${
              isDark ? 'bg-white/5 text-slate-300 hover:text-amber-500 hover:bg-white/10' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Award size={20} />
          </a>
        </div>

        {/* Highlight Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 max-w-4xl mx-auto pt-6 border-t border-slate-700/30">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl glass-card flex flex-col items-center justify-center text-center transition-all ${
                idx === 4 ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              <div className="text-2xl sm:text-3xl font-extrabold gradient-text">
                {item.value}
              </div>
              <div className="text-xs font-semibold text-slate-300 mt-1">
                {item.label}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
