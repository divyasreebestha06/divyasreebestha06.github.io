import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Github, ExternalLink, BookOpen, Sparkles, FolderGit2, ArrowUpRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects({ isDark }) {
  const { projects } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Featured', 'AI & Full-Stack', 'Backend & Systems', 'Distributed Systems'];

  const filteredProjects = projects.filter((p) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Featured') return p.featured;
    return p.category.includes(selectedFilter);
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase text-cyan-400 bg-cyan-500/10 mb-4 border border-cyan-500/20">
            <FolderGit2 size={14} />
            Verified Codebases
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Featured Software Engineering Projects
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Explore production-grade software applications built with rigorous testing, algorithmic problem solving, clean architectures, and live GitHub repositories.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedFilter === cat
                  ? 'bg-gradient-to-r from-brand-600 to-cyan-600 text-white shadow-md shadow-brand-500/20 scale-105'
                  : isDark
                    ? 'glass-card text-slate-300 hover:text-white hover:border-brand-500/30'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group border border-white/10 hover:border-brand-500/40"
            >
              <div>
                {/* Visual Header / Banner Card */}
                <div className="p-6 bg-gradient-to-br from-brand-950/40 via-indigo-950/30 to-black/60 border-b border-white/5 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/30">
                      {project.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 bg-white/[0.02] border-t border-slate-700/30 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-brand-400 hover:text-brand-300 transition-colors"
                >
                  <BookOpen size={14} />
                  <span>Case Study</span>
                </button>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  <Github size={14} />
                  <span>Source Code</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Global GitHub Projects Banner */}
        <div className="mt-16 p-8 rounded-3xl glass-card border border-brand-500/30 bg-gradient-to-r from-brand-950/30 via-indigo-950/20 to-black/40 text-center flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-xl font-bold text-white mb-1">
              Explore the 25-Repository Intern Portfolio
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Featuring 25 fully tested software engineering repositories with 359+ genuine commits, unit tests, Dockerfiles, and CI/CD configs.
            </p>
          </div>
          <a
            href="https://github.com/users/divyasreebestha06/projects/2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs uppercase tracking-wider bg-gradient-to-r from-brand-600 to-indigo-600 text-white hover:scale-105 transition-all shadow-lg shrink-0"
          >
            <span>View GitHub Project Board</span>
            <ExternalLink size={15} />
          </a>
        </div>
      </div>

      {/* Case Study Modal Popup */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        isDark={isDark}
      />
    </section>
  );
}
