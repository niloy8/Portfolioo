import { ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';

const Home: React.FC = () => {
    return (
        <section className="animate-fade-in py-16">
            <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-12">
                <div className="flex-1 space-y-10">
                    <div className="space-y-4">
                        <h2 className="text-[var(--text-secondary)] font-sans text-sm tracking-[0.2em] uppercase font-bold">
                            Software Engineer & Product Designer
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                            Niloy <span className="italic font-serif text-[var(--accent)]">Bhuiyan</span>
                        </h1>
                    </div>

                    <p className="text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed max-w-2xl font-light">
                        Building premium digital experiences through minimal design and clean code.
                        Currently obsessed with <span className="text-[var(--text-primary)] font-medium">Agentic AI</span> and <span className="text-[var(--text-primary)] font-medium">Modern Web Architectures</span>.
                    </p>

                    <div className="flex flex-wrap items-center gap-8">
                        <Link
                            to="/projects"
                            className="group flex items-center gap-3 bg-[var(--accent)] text-[var(--bg)] px-8 py-4 rounded-full font-bold hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-[var(--accent)]/10"
                        >
                            Explore Work
                            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>

                        <div className="flex gap-6">
                            {[FaGithub, FaLinkedin, FaXTwitter].map((Icon, i) => (
                                <a key={i} href="#" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-all duration-300 transform hover:scale-110">
                                    <Icon size={24} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-tr from-[var(--accent)] to-transparent rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[2.5rem] overflow-hidden bg-[var(--text-secondary)]/10 border border-[var(--text-secondary)]/20 shadow-2xl">
                        {/* Demo data for profile image */}
                        <div className="w-full h-full flex items-center justify-center text-[var(--accent)]">
                           <UserPlaceholder size={120} strokeWidth={1} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-32 pt-16 border-t border-[var(--text-secondary)]/10 grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                    { label: "Experience", value: "3+ Years" },
                    { label: "Projects", value: "15+ Completed" },
                    { label: "Focus", value: "Full-Stack" },
                    { label: "Location", value: "Global Remote" }
                ].map((stat, i) => (
                    <div key={i} className="space-y-1">
                        <p className="text-xs uppercase tracking-widest text-[var(--text-secondary)] font-bold">{stat.label}</p>
                        <p className="text-xl font-serif text-[var(--text-primary)] font-bold">{stat.value}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

// Help helper for visual placeholder if icon fails or to avoid extra imports for now
const UserPlaceholder = ({ size, strokeWidth }: { size: number, strokeWidth: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

export default Home;