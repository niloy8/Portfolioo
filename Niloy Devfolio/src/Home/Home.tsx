import React from 'react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { Mail } from 'lucide-react';

const Home: React.FC = () => {
    return (
        <section className="animate-fade-in flex flex-col-reverse lg:flex-row items-start justify-between gap-16 pt-8">
            {/* Content Container */}
            <div className="flex-1 space-y-10 max-w-2xl">
                <div className="space-y-4">
                    <div className="w-12 h-[2px] bg-[var(--accent)] mb-8"></div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-extrabold tracking-tighter text-[var(--text-primary)]">
                        Niloy Bhuiyan<span className="text-[var(--accent)]">.</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl font-serif text-[var(--text-secondary)] italic">
                        Software Engineer & Product Designer
                    </h2>
                </div>

                <p className="text-base md:text-lg text-[var(--text-secondary)] leading-loose font-sans font-light">
                    Full-stack developer specializing in modern web architectures and Agentic AI. I build scalable web applications and solve complex engineering problems with clean, elegant code.
                </p>

                <div className="pt-4 flex flex-wrap gap-6">
                    <a href="#" className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--text-secondary)]/20 text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all font-sans text-sm font-medium group">
                        <FaXTwitter size={16} /> <span className="hidden sm:inline">Twitter</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--text-secondary)]/20 text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all font-sans text-sm font-medium group">
                        <FaGithub size={16} /> <span className="hidden sm:inline">GitHub</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--text-secondary)]/20 text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all font-sans text-sm font-medium group">
                        <FaLinkedin size={16} /> <span className="hidden sm:inline">LinkedIn</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--text-secondary)]/20 text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all font-sans text-sm font-medium group">
                        <Mail size={16} /> <span className="hidden sm:inline">Email</span>
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