import React from 'react';

const Home: React.FC = () => {
    return (
        <section className="animate-fade-in flex flex-col md:flex-row items-center md:items-start md:justify-start gap-10 md:gap-16">
            {/* Image Container */}
            <div className="w-48 h-48 md:w-56 md:h-56 shrink-0 rounded-[2rem] overflow-hidden bg-[#e5e0d8] border border-[var(--text-secondary)]/10 shadow-sm flex items-center justify-center text-[var(--text-secondary)]">
                <UserPlaceholder />
            </div>

            {/* Content Container */}
            <div className="flex-1 space-y-6 max-w-xl text-center md:text-left mt-4 md:mt-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[var(--text-primary)]">
                    Niloy Bhuiyan
                </h1>

                <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed font-serif">
                    Software Engineer & Product Designer. Full-stack developer specializing in modern web architectures and Agentic AI. I build scalable web applications and solve complex engineering problems with clean code.
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 pt-6 text-[13px] md:text-sm font-serif text-[var(--text-secondary)]">
                    <a href="#" className="hover:text-[var(--text-primary)] transition-colors underline-offset-4 hover:underline">X (Twitter)</a>
                    <a href="#" className="hover:text-[var(--text-primary)] transition-colors underline-offset-4 hover:underline">GitHub</a>
                    <a href="#" className="hover:text-[var(--text-primary)] transition-colors underline-offset-4 hover:underline">LinkedIn</a>
                    <a href="#" className="hover:text-[var(--text-primary)] transition-colors underline-offset-4 hover:underline">Email</a>
                    <a href="#" className="hover:text-[var(--text-primary)] transition-colors underline-offset-4 hover:underline">Resume</a>
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