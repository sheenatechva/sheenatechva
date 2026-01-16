
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 md:py-48 border-t border-zinc-100 dark:border-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-400 mb-8 lg:sticky lg:top-24 font-mono">
            01 — About
          </h2>
        </div>
        <div className="lg:col-span-8">
          <h2 className="text-3xl md:text-5xl font-sans font-bold leading-tight mb-12">
            I specialize in building AI-powered automations using Zapier and API integrations to streamline lead management, email workflows, and internal operations.
          </h2>
          <div className="max-w-2xl space-y-8 text-base text-zinc-600 dark:text-zinc-400 font-light leading-relaxed font-mono">
            <p>
              I design efficient, scalable automation systems that connect multiple tools, eliminate manual work, and improve response times.
            </p>
            <p>
              My approach focuses on understanding business workflows and translating them into reliable automation solutions that drive real operational impact. Whether it's connecting your CRM to AI or building custom lead engines, I ensure your tech stack works for you, not the other way around.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
