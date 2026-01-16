
import React from 'react';

const Video: React.FC = () => {
  return (
    <section id="video" className="py-32 md:py-48 border-t border-zinc-100 dark:border-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-400 mb-8 lg:sticky lg:top-24 font-mono">
            04 — Process
          </h2>
        </div>
        <div className="lg:col-span-8">
          <div className="relative aspect-video bg-zinc-100 dark:bg-zinc-900 overflow-hidden rounded-xl group shadow-2xl">
            <iframe 
              src="https://www.loom.com/embed/2ae2342b6c8542e09f9d1eefdee192d4"
              frameBorder="0"
              allowFullScreen
              className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              title="Process Walkthrough"
            />
          </div>
          <div className="mt-12 max-w-2xl">
            <h3 className="text-2xl font-sans font-bold mb-6 italic">See automation in action.</h3>
            <p className="text-zinc-500 dark:text-zinc-400 font-light leading-relaxed font-mono">
              Watch how I structure complex logic into seamless background processes. This walkthrough covers a typical lead enrichment and CRM integration flow designed to eliminate 15+ hours of manual data entry per week.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;