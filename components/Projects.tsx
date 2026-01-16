
import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close on Esc
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-32 md:py-48 border-t border-zinc-100 dark:border-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-400 mb-8 lg:sticky lg:top-24 font-mono">
            03 — Selected Cases
          </h2>
        </div>
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {PROJECTS.map((project, idx) => (
              <div 
                key={project.id} 
                className={`group project-card cursor-none ${idx % 2 !== 0 ? 'md:mt-24' : ''}`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden aspect-[16/10] bg-zinc-50 dark:bg-zinc-900/50 mb-8 border border-zinc-100 dark:border-zinc-900 group-hover:shadow-2xl transition-all duration-500">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/5 dark:bg-white/5 backdrop-blur-[2px]">
                    <div className="w-14 h-14 rounded-full bg-black text-white dark:bg-zinc-100 dark:text-zinc-900 flex items-center justify-center shadow-xl transform scale-50 group-hover:scale-100 transition-transform duration-500">
                       <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                       </svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-sans font-bold italic">{project.title}</h3>
                    <span className="text-[10px] font-mono text-zinc-400">0{idx + 1}</span>
                  </div>
                  <p className="text-sm text-zinc-500 font-light leading-relaxed max-w-sm font-mono">{project.description}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2">
                    {project.tools.slice(0, 4).map(tool => (
                      <span key={tool} className="text-[9px] uppercase tracking-widest text-zinc-400 border-b border-zinc-100 dark:border-zinc-800 font-mono">{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal with Zoom-in Effect */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[60] bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 overflow-y-auto animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lg:col-span-8">
              <div className="relative group overflow-hidden bg-white dark:bg-zinc-900 rounded-lg shadow-[0_32px_64px_-12px_rgba(0,0,0,0.2)] dark:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)] border border-zinc-100 dark:border-zinc-800">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title}
                  className="w-full h-auto object-contain cursor-zoom-out"
                  onClick={() => setSelectedProject(null)}
                />
              </div>
              <div className="mt-6 flex justify-between items-center lg:hidden">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 hover:text-black dark:hover:text-white font-mono flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Close Case
                </button>
              </div>
            </div>
            <div className="lg:col-span-4 space-y-10 lg:sticky lg:top-12 animate-slide-up">
              <div className="space-y-6 font-sans">
                <div className="flex items-center gap-4">
                  <span className="h-[1px] w-8 bg-zinc-300 dark:bg-zinc-700"></span>
                  <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-mono">Case Overview</span>
                </div>
                <h4 className="text-4xl md:text-5xl font-bold italic leading-tight">{selectedProject.title}</h4>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed font-mono border-l-2 border-zinc-100 dark:border-zinc-800 pl-6">
                  {selectedProject.description}
                </p>
              </div>

              <div className="space-y-6 pt-8 border-t border-zinc-100 dark:border-zinc-800 font-mono">
                <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-mono">Infrastructure Stack</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map(tool => (
                    <span key={tool} className="px-3 py-1.5 border border-zinc-100 dark:border-zinc-800 text-[10px] uppercase tracking-widest bg-white dark:bg-zinc-900 shadow-sm font-mono">{tool}</span>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => setSelectedProject(null)}
                className="hidden lg:flex items-center gap-4 pt-8 text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400 hover:text-black dark:hover:text-white transition-all font-sans group"
              >
                <span className="group-hover:-translate-x-2 transition-transform duration-300">←</span>
                Back to Cases
              </button>
            </div>
          </div>
          
          {/* Close button icon for top right desktop */}
          <button 
            onClick={() => setSelectedProject(null)}
            className="fixed top-8 right-12 hidden lg:flex items-center justify-center w-12 h-12 text-zinc-400 hover:text-black dark:hover:text-white hover:rotate-90 transition-all duration-300"
            aria-label="Close Modal"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
