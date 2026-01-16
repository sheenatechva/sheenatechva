
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Video from './components/Video';
import Contact from './components/Contact';
import DarkModeToggle from './components/DarkModeToggle';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['hero', 'about', 'skills', 'projects', 'video', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen">
      <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Navbar activeSection={activeSection} />
      
      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Video />
        <Contact />
      </main>

      <footer className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          <div className="space-y-2">
            <p className="text-sm text-zinc-500 font-mono">
              © 2026 Sheena Cabatingan-- SheenaTechVA. All rights reserved. To God be the glory.
            </p>
          </div>
          
          <div className="text-right">
            <p className="text-xs font-mono italic text-zinc-400">
              making AI work for you
            </p>
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-300 dark:text-zinc-800 font-mono mt-1 hidden md:block">
              EST. 2026 — TECHVA
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
