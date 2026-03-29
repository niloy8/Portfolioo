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
        <>
            {/* --- MOBILE TOP HEADER --- */}
            <header className="md:hidden fixed top-0 left-0 w-full h-20 bg-[var(--bg)]/80 backdrop-blur-xl z-[60] px-6 flex items-center justify-between border-b border-[var(--text-secondary)]/5">
                <NavLink to="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-[var(--text-secondary)]/15 flex items-center justify-center bg-[#0a0a0a] shadow-xl group-hover:scale-105 transition-transform duration-500">
                        <img src="/favicon.png" alt="NB Logo" className="w-full h-full object-contain p-1.5 opacity-90 group-hover:opacity-100 transition-opacity" />
                    </div>
                </NavLink>

                <button
                    onClick={toggleTheme}
                    className="p-2.5 rounded-full text-[var(--text-secondary)] hover:text-[var(--accent)] bg-[var(--text-secondary)]/5 hover:bg-[var(--accent)]/10 transition-all duration-300"
                    aria-label="Toggle theme"
                >
                    {theme === 'light' ? <Moon size={20} strokeWidth={1.5} /> : <Sun size={20} strokeWidth={1.5} />}
                </button>
            </header>

            {/* --- MOBILE BOTTOM NAVIGATION (Floating Island) --- */}
            <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-md h-20 bg-[var(--bg)]/90 backdrop-blur-2xl border border-[var(--text-secondary)]/10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-[60] px-2 grid grid-cols-5 items-center overflow-hidden">
                {navItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex flex-col items-center justify-center transition-all duration-500 relative group h-full
                            ${isActive ? 'text-[var(--accent)]' : 'text-[var(--text-secondary)]/60 hover:text-[var(--text-primary)]'}`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                <div className={`p-2 rounded-2xl transition-all duration-500 relative ${isActive ? 'bg-[var(--accent)]/10' : 'group-hover:bg-[var(--text-secondary)]/5'}`}>
                                    <item.icon size={22} strokeWidth={isActive ? 2.5 : 1.5} className="relative z-10" />
                                    {isActive && (
                                        <span className="absolute inset-0 bg-[var(--accent)]/20 rounded-2xl blur-md -z-0 animate-pulse"></span>
                                    )}
                                </div>
                                <div className="h-4 flex items-center justify-center overflow-visible">
                                    <span className={`text-[9px] font-sans font-bold uppercase tracking-wider transition-all duration-500 whitespace-nowrap ${isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-90'}`}>
                                        {item.name}
                                    </span>
                                </div>
                                {isActive && (
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[var(--accent)] rounded-full shadow-[0_0_10px_var(--accent)] animate-bounce" />
                                )}
                            </>
                        )}
                    </NavLink>
                ))}
            </nav>

            {/* --- ORIGINAL DESKTOP SIDEBAR --- */}
            <aside className="fixed hidden md:flex left-0 top-0 h-screen w-24 md:w-32 bg-[var(--bg)] border-r border-[var(--text-secondary)]/20 flex-col justify-between py-8 md:py-10 px-2 z-50 transition-all duration-300">
                <div className="flex flex-col items-center w-full">
                    {/* Brand Logo */}
                    <div className="mb-6 md:mb-6 flex gap-3 self-start ml-2 md:ml-2">
                        <NavLink to="/" className="block group transition-transform hover:scale-105" aria-label="Home">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border border-[var(--text-secondary)]/20 flex items-center justify-center bg-[#0a0a0a] shadow-sm">
                                <img src="/favicon.png" alt="NB Logo" className="w-full h-full object-contain p-1 opacity-90 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </NavLink>
                        <div className="flex flex-col items-center pb-6">
                            <button
                                onClick={toggleTheme}
                                className="p-3 rounded-full text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all duration-300 cursor-pointer"
                                aria-label="Toggle theme"
                            >
                                {theme === 'light' ? <Moon size={18} strokeWidth={1.5} /> : <Sun size={18} strokeWidth={1.5} />}
                            </button>
                        </div>
                    </div>

                    {/* Navigation Items */}
                    <nav className="flex flex-col items-center justify-center gap-8 md:gap-10 w-full">
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
                                <item.icon size={18} strokeWidth={2} />
                                <span className="text-[10px] md:text-xs font-serif tracking-wide">{item.name}</span>
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
