
import React from 'react';

interface DarkModeToggleProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="fixed top-8 left-8 z-[80] p-2 group overflow-hidden flex items-center gap-2"
      aria-label="Toggle Dark Mode"
    >
      <div className="relative w-10 h-10 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors bg-white/50 dark:bg-black/50 backdrop-blur-sm">
        {isDarkMode ? (
          <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
          </svg>
        ) : (
          <svg className="w-4 h-4 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </div>
      <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">
        {isDarkMode ? 'Light' : 'Dark'}
      </span>
    </button>
  );
};

export default DarkModeToggle;
