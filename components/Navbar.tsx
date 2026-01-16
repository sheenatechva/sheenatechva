
import React from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Expertise' },
    { id: 'projects', label: 'Cases' },
    { id: 'video', label: 'Process' },
    { id: 'contact', label: 'Connect' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 0;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed right-0 top-0 h-screen w-12 md:w-20 lg:w-24 z-[80] flex flex-col justify-center items-center pointer-events-none">
      <div className="flex flex-col space-y-8 md:space-y-10 items-center pointer-events-auto pr-4 md:pr-0 border-r border-zinc-100/50 dark:border-zinc-800/30 h-full py-24 justify-center">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleClick(e, item.id)}
            className={`group relative flex items-center justify-center transition-all duration-500 py-2 ${
              activeSection === item.id ? 'opacity-100' : 'opacity-25 hover:opacity-100'
            }`}
          >
            <span className={`vertical-text text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] transition-all duration-500 font-mono whitespace-nowrap ${
              activeSection === item.id ? 'translate-x-[-4px] text-black dark:text-white' : 'group-hover:translate-x-[-2px]'
            }`}>
              {item.label}
            </span>
            <div 
              className={`absolute right-[-16px] md:right-[-2px] h-12 w-[2px] bg-black dark:bg-white transition-all duration-500 origin-center ${
                activeSection === item.id ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
              }`}
            />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
