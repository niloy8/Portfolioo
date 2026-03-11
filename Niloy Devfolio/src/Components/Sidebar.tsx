import React from 'react';
import { NavLink } from 'react-router';
import { Home, User, Briefcase, Mail, Sun, Moon } from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { useTheme } from '../ThemeContext';

const Sidebar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'Projects', path: '/projects', icon: Briefcase },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com' },
    { icon: FaLinkedin, href: 'https://linkedin.com' },
    { icon: FaXTwitter, href: 'https://twitter.com' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 md:w-64 bg-[var(--bg)] border-r border-[var(--text-secondary)]/10 flex flex-col justify-between py-8 px-4 z-50 transition-all duration-300">
      <div>
        <div className="flex items-center justify-center md:justify-start md:px-4 mb-12">
          <div className="w-10 h-10">
            <img className='rounded' src="../public/favicon.png" alt="" />
          </div>

        </div>

        <nav className="space-y-4">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center justify-center md:justify-start md:px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                  ? 'bg-[var(--accent)]/10 text-[var(--accent)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--text-secondary)]/5'
                }`
              }
            >
              <item.icon size={22} />
              <span className="hidden md:block ml-4 font-medium">{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start md:px-4 gap-4">
          <button
            onClick={toggleTheme}
            className="p-3 rounded-xl bg-[var(--text-secondary)]/5 text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all duration-200 cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <div className="hidden md:flex items-center gap-3">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="md:px-4 text-[10px] text-[var(--text-secondary)]/50 hidden md:block">
          © 2025 Niloy Bhuiyan
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
