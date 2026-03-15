import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';
import { projects } from '../../data/projects';

const Projects: React.FC = () => {
    return (
        <section className="animate-fade-in max-w-5xl pt-6">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-[var(--accent)]/10 text-[var(--accent)] rounded-xl">
                    <Sparkles size={20} strokeWidth={1.5} />
                </div>
                <h1 className="text-2xl md:text-3xl font-serif font-bold text-[var(--text-primary)] tracking-tight">Projects</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {projects.map((project) => (
                    <Link key={project.id} to={`/projects/${project.id}`} className="block h-full group">
                        <div className="h-full p-6 lg:p-8 rounded-2xl bg-[var(--text-secondary)]/5 border border-[var(--text-secondary)]/10 group-hover:bg-[var(--text-secondary)]/10 transition-all duration-300 flex flex-col space-y-6">
                            <div className="flex justify-between items-start mb-3">
                                {project.year && (
                                    <span className="text-[10px] font-sans font-semibold text-[var(--accent)] tracking-widest uppercase">{project.year}</span>
                                )}
                                <ArrowUpRight size={16} className="text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors opacity-0 group-hover:opacity-100" />
                            </div>
                            <h3 className="text-lg md:text-xl font-serif font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-3">
                                {project.title}
                            </h3>
                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-sans font-light">
                                {project.shortDescription}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Projects;