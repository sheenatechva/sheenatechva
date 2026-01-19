
import React from 'react';

const Hero: React.FC = () => {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center py-24 relative">
      <div className="space-y-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-500 dark:text-zinc-400 font-mono">
          AI Automation Specialist
        </p>
        <div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-sans font-extrabold leading-[0.85] tracking-tighter">
            Sheena<br />Cabatingan
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-sans uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-600 font-normal">
            TechVA
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
        <div className="max-w-xl">
          <p className="text-lg md:text-xl font-light leading-relaxed text-zinc-600 dark:text-zinc-400 font-mono">
            I help businesses save time and scale faster by automating repetitive workflows using AI, Zapier, and API integrations — so they can focus on growing their business instead of managing processes.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6">
            <a 
              href="https://calendly.com/sheena-techva/30min" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-black text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs uppercase tracking-widest font-bold hover:scale-105 transition-transform text-center font-sans"
            >
              Start Your Automation
            </a>
            <a 
              href="#projects" 
              onClick={handleScrollToProjects}
              className="px-10 py-5 border border-zinc-200 dark:border-zinc-800 text-xs uppercase tracking-widest font-bold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-center font-sans"
            >
              View Cases
            </a>
          </div>
        </div>
        <div className="hidden md:flex justify-end pr-12">
          <div className="relative group">
            <div className="w-80 h-[450px] overflow-hidden bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl">
               <img 
                src="/profile.png" 
                alt="Sheena Cabatingan" 
                className="w-full h-full object-contain object-bottom scale-110 group-hover:scale-105 transition-all duration-700 filter drop-shadow-2xl"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800";
                }}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-zinc-100 dark:border-zinc-900 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 rounded-2xl" />
            <div className="absolute top-1/2 -right-16 vertical-text text-[10px] text-zinc-400 dark:text-zinc-600 uppercase tracking-[0.4em] font-bold font-mono">
              Built with purpose — 2026
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
