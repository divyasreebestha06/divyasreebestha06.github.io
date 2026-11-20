import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, FileText, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function Navbar({ isDark, setIsDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? isDark
          ? 'bg-[#090a0f]/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20'
          : 'bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-md'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-indigo-500 to-cyan-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
            <div className={`w-full h-full rounded-[10px] flex items-center justify-center font-bold text-sm tracking-tight ${
              isDark ? 'bg-[#0e101a] text-white' : 'bg-white text-slate-900'
            }`}>
              DB
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight group-hover:text-brand-500 transition-colors">
              Divya Sree Bestha
            </span>
            <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 glass-panel px-3 py-1.5 rounded-full">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-sm'
                    : isDark
                      ? 'text-slate-300 hover:text-white hover:bg-white/5'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Actions (Resume, Theme Toggle, GitHub) */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
            className={`p-2.5 rounded-xl transition-all duration-200 ${
              isDark
                ? 'bg-white/5 text-amber-400 hover:bg-white/10 hover:text-amber-300'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
            }`}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Download Resume Button */}
          <a
            href="/Divya_Sree_Bestha_Resume.pdf"
            download="Divya_Sree_Bestha_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-brand-600 to-indigo-600 text-white hover:opacity-95 shadow-md shadow-brand-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <FileText size={15} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
            className={`p-2 rounded-lg ${isDark ? 'text-amber-400 bg-white/5' : 'text-slate-700 bg-slate-100'}`}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open menu"
            className={`p-2 rounded-lg ${isDark ? 'text-slate-200 bg-white/5' : 'text-slate-700 bg-slate-100'}`}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden px-4 pt-2 pb-6 border-b transition-all ${
          isDark ? 'bg-[#0d0f18] border-white/10' : 'bg-white border-slate-200 shadow-xl'
        }`}>
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'bg-brand-600 text-white'
                    : isDark
                      ? 'text-slate-300 hover:bg-white/5'
                      : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-700/30 flex items-center justify-between">
              <a
                href="/Divya_Sree_Bestha_Resume.pdf"
                download="Divya_Sree_Bestha_Resume.pdf"
                className="w-full text-center py-2.5 rounded-lg text-sm font-semibold bg-brand-600 text-white flex items-center justify-center gap-2"
              >
                <FileText size={16} />
                Download Resume (PDF)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
