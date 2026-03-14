import React from 'react';
import { NavLink } from 'react-router';
import { Home, Briefcase, FileText, GraduationCap, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '../ThemeContext';

const Sidebar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Projects', path: '/projects', icon: Briefcase },
    { name: 'Experience', path: '/experience', icon: FileText },
    { name: 'Qualifications', path: '/qualifications', icon: GraduationCap },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <aside className="fixed right-0 top-0 h-screen w-24 md:w-32 bg-[var(--bg)] border-l border-[var(--text-secondary)]/10 flex flex-col justify-between py-12 px-2 z-50 transition-all duration-300">
      <div className="flex justify-center flex-1 w-full mt-8">
        <nav className="flex flex-col items-center justify-center gap-10 w-full">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-2 transition-all duration-300 group ${isActive
                  ? 'text-[var(--accent)] font-medium scale-110'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:scale-105'
                }`
              }
            >
              <item.icon size={18} strokeWidth={1.5} />
              <span className="text-[10px] md:text-xs font-serif tracking-wide">{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="flex flex-col items-center pb-6">
        <button
          onClick={toggleTheme}
          className="p-3 rounded-full text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all duration-300 cursor-pointer"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon size={18} strokeWidth={1.5} /> : <Sun size={18} strokeWidth={1.5} />}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
