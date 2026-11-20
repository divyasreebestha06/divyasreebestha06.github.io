import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Cpu, Terminal, Layers, Database, Cloud, BookOpen, CheckCircle } from 'lucide-react';

export default function Skills({ isDark }) {
  const { skillCategories } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillCategories.map(c => c.category)];

  const filteredCategories = selectedCategory === 'All'
    ? skillCategories
    : skillCategories.filter(c => c.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-black/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase text-indigo-400 bg-indigo-500/10 mb-4 border border-indigo-500/20">
            <Cpu size={14} />
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Core Competencies & Hands-on Technologies
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            A curated inventory of programming languages, frameworks, distributed architectures, and tools backed by practical code repositories and production builds.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-md shadow-brand-500/20 scale-105'
                  : isDark
                    ? 'glass-card text-slate-300 hover:text-white hover:border-brand-500/30'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((catGroup, idx) => (
            <div key={idx} className="glass-card p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-700/30">
                  <h3 className="font-bold text-lg text-slate-100 flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-brand-500 to-cyan-400"></span>
                    {catGroup.category}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400">
                    {catGroup.skills.length} skills
                  </span>
                </div>

                <div className="space-y-4">
                  {catGroup.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[11px] text-brand-400">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="w-full h-1.5 rounded-full bg-slate-800/80 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-brand-500 via-indigo-500 to-cyan-400 transition-all duration-700"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>

                      <p className="text-[11px] text-slate-400 leading-tight">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
