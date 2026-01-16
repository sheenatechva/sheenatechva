
import React from 'react';
import { SKILLS } from '../constants';

const toolLogos = [
  { name: 'Zapier', slug: 'zapier' },
  { name: 'n8n', slug: 'n8n' },
  { name: 'Make', slug: 'make', custom: true }, // Make logo not standard on SimpleIcons
  { name: 'GoHighLevel', slug: 'gohighlevel', custom: true },
  { name: 'Apollo', slug: 'apollographql' }, // Fixed slug
  { name: 'OpenAI', slug: 'openai' },
  { name: 'Slack', slug: 'slack' },
  { name: 'Asana', slug: 'asana' },
  { name: 'HubSpot', slug: 'hubspot' },
  { name: 'Google Sheets', slug: 'googlesheets' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 md:py-48 border-t border-zinc-100 dark:border-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-400 mb-8 lg:sticky lg:top-24 font-mono">
            02 — Expertise
          </h2>
        </div>
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {SKILLS.map((skill, index) => (
              <div key={index} className="group pb-8 border-b border-zinc-100 dark:border-zinc-900 hover:border-black dark:hover:border-zinc-100 transition-colors">
                <span className="text-[10px] text-zinc-400 font-mono mb-4 block">0{index + 1}</span>
                <h3 className="text-xl font-bold font-sans group-hover:translate-x-2 transition-transform duration-300">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-24 pt-12 border-t border-zinc-100 dark:border-zinc-900">
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-400 mb-12 text-center lg:text-left font-mono">Tech Stack & Ecosystem</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-12 gap-x-8 items-center justify-items-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              {toolLogos.map((logo) => (
                <div key={logo.name} className="flex flex-col items-center group transition-all duration-300">
                  <div className="w-12 h-12 mb-4 flex items-center justify-center">
                    {logo.custom ? (
                      <div className="text-xl font-black tracking-tighter text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors font-sans">
                        {logo.name === 'GoHighLevel' ? 'GHL' : 'MAKE'}
                      </div>
                    ) : (
                      <img 
                        src={`https://cdn.simpleicons.org/${logo.slug}/a1a1aa`} 
                        alt={logo.name} 
                        className="w-10 h-10 object-contain transition-all duration-300 group-hover:filter group-hover:brightness-0 dark:group-hover:brightness-200"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    )}
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors">{logo.name}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center lg:text-left">
              <span className="text-xs font-light italic text-zinc-400 dark:text-zinc-600 font-mono">...and more customized integrations via Webhooks & REST APIs.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
