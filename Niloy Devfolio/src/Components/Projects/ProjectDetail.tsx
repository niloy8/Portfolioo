import React from 'react';
import { useParams, Link } from 'react-router';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { projects } from '../../data/projects';

const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <section className="animate-fade-in max-w-4xl pt-12 flex flex-col items-center justify-center min-h-[50vh]">
                <h1 className="text-3xl font-serif text-[var(--text-primary)] mb-4">Project not found</h1>
                <Link to="/projects" className="text-[var(--accent)] hover:underline flex items-center gap-2">
                    <ArrowLeft size={16} /> Back to Projects
                </Link>
            </section>
        );
    }

    return (
        <section className="animate-fade-in max-w-4xl pt-6 md:pt-10 pb-20">
            {/* Back Button */}
            <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm font-sans font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors mb-10 group"
            >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
            </Link>

            {/* Header section */}
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[var(--text-primary)] leading-tight tracking-tight mb-5">
                {project.title}
            </h1>

            <div className="w-8 h-[1px] bg-[var(--text-secondary)] mb-12"></div>

            <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                {/* Left Column: Metadata */}
                <div className="w-full md:w-1/3 shrink-0 flex flex-col gap-8">
                    <div>
                        <span className="block text-[10px] font-sans font-bold text-[var(--text-secondary)] tracking-widest uppercase mb-2">Year</span>
                        <span className="text-sm font-sans font-medium text-[var(--text-primary)]">{project.year}</span>
                    </div>

                    <div>
                        <span className="block text-[10px] font-sans font-bold text-[var(--text-secondary)] tracking-widest uppercase mb-2">Status</span>
                        <div className="flex items-center gap-2 text-sm font-sans font-medium text-[var(--text-primary)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
                            {project.status}
                        </div>
                    </div>

                    <div>
                        <span className="block text-[10px] font-sans font-bold text-[var(--text-secondary)] tracking-widest uppercase mb-3">Technologies</span>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1.5 bg-[var(--text-secondary)]/5 text-[var(--text-primary)] text-xs font-sans font-medium rounded-lg border border-[var(--text-secondary)]/10"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Content & Links */}
                <div className="w-full md:w-2/3">
                    <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed font-sans font-light mb-10">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-[var(--text-secondary)]/10">
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-sans text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group"
                        >
                            Live Site <ExternalLink size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-sans text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group"
                        >
                            Source Code <FaGithub size={14} className="group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetail;
