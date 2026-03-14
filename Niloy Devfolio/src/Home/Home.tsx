import React from 'react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { Mail } from 'lucide-react';

const Home: React.FC = () => {
    return (
        <section className="animate-fade-in flex flex-col-reverse lg:flex-row items-start justify-between gap-16 pt-8">
            {/* Content Container */}
            <div className="flex-1 space-y-6 max-w-xl text-left mt-2 md:mt-4">
                <div className="space-y-2">
                    <div className="w-8 h-[1px] bg-[var(--text-secondary)] mb-6"></div>
                    <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-[var(--text-primary)]">
                        Niloy Bhuiyan<span className="text-[var(--accent)]">.</span>
                    </h1>
                    <h2 className="text-sm md:text-base font-serif text-[var(--text-secondary)] italic">
                        Software Engineer & Product Designer
                    </h2>
                </div>

                <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed font-sans font-light">
                    Full-stack developer specializing in modern web architectures and Agentic AI. I build scalable web applications and solve complex engineering problems with clean code.
                </p>

                <div className="pt-4 flex flex-wrap gap-5 text-xs font-sans text-[var(--text-secondary)] tracking-wide">
                    <a href="#" className="flex items-center gap-1.5 hover:text-[var(--text-primary)] transition-colors group">
                        <FaXTwitter size={12} className="group-hover:-translate-y-0.5 transition-transform" /> <span>Twitter</span>
                    </a>
                    <a href="#" className="flex items-center gap-1.5 hover:text-[var(--text-primary)] transition-colors group">
                        <FaGithub size={12} className="group-hover:-translate-y-0.5 transition-transform" /> <span>GitHub</span>
                    </a>
                    <a href="#" className="flex items-center gap-1.5 hover:text-[var(--text-primary)] transition-colors group">
                        <FaLinkedin size={12} className="group-hover:-translate-y-0.5 transition-transform" /> <span>LinkedIn</span>
                    </a>
                    <a href="#" className="flex items-center gap-1.5 hover:text-[var(--text-primary)] transition-colors group">
                        <Mail size={12} className="group-hover:-translate-y-0.5 transition-transform" /> <span>Email</span>
                    </a>
                </div>
            </div>

            {/* Image Container */}
            <div className="relative shrink-0">
                <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-[var(--text-secondary)]/20"></div>
                <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 relative rounded-2xl overflow-hidden bg-[#e5e0d8] border border-[var(--bg)] z-10 flex items-center justify-center text-[var(--text-secondary)]">
                    <UserPlaceholder />
                </div>
            </div>
        </section>
    );
};

// Help helper for visual placeholder if icon fails or to avoid extra imports for now
const UserPlaceholder = () => (
    <svg
        width="80"
        height="80"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-50"
    >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

export default Home;