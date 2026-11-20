import React, { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved !== null ? saved === 'dark' : true;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen relative selection:bg-brand-500 selection:text-white ${
      isDark ? 'bg-[#090a0f] text-slate-100' : 'bg-[#f8fafc] text-slate-900'
    }`}>
      {/* Dynamic Animated Particle Constellation */}
      <ParticleBackground isDark={isDark} />

      {/* Main Top Navigation */}
      <Navbar isDark={isDark} setIsDark={setIsDark} />

      {/* Content Sections */}
      <main className="relative z-10">
        <Hero isDark={isDark} />
        <About isDark={isDark} />
        <Skills isDark={isDark} />
        <Projects isDark={isDark} />
        <Achievements isDark={isDark} />
        <CodingProfiles isDark={isDark} />
        <Contact isDark={isDark} />
      </main>

      {/* Modern Footer */}
      <Footer isDark={isDark} />
    </div>
  );
}
