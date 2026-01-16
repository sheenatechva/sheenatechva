
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 md:py-64 border-t border-zinc-100 dark:border-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-400 mb-8 lg:sticky lg:top-24 font-mono">
            05 — Contact
          </h2>
        </div>
        <div className="lg:col-span-8 text-center md:text-left">
          <p className="text-4xl md:text-7xl font-sans font-extrabold leading-none mb-12">
            Ready to <span className="italic font-normal">Automate</span>?
          </p>
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            <div className="space-y-6">
              <p className="text-lg text-zinc-500 font-light font-mono">
                Available for high-impact automation audits and custom builds.
              </p>
              
              <div className="flex flex-col space-y-4 items-center md:items-start">
                <div className="flex flex-wrap gap-8 text-[10px] uppercase tracking-[0.3em] font-bold font-mono text-zinc-400">
                   <a href="mailto:sheena.techva@gmail.com" className="hover:text-black dark:hover:text-white transition-colors">Email</a>
                   <a href="https://www.linkedin.com/in/sheenatechva/" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">LinkedIn</a>
                   <a href="https://www.fiverr.com/sheena_techva" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">Fiverr</a>
                </div>
              </div>
            </div>
            
            <a 
              href="https://calendly.com/sheena-techva/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative px-12 py-6 bg-black text-white dark:bg-white dark:text-zinc-900 text-xs uppercase tracking-widest font-bold overflow-hidden font-sans"
            >
              <span className="relative z-10">Book a Strategy Call</span>
              <div className="absolute inset-0 bg-zinc-700 dark:bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
