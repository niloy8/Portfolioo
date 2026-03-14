import React from 'react';
import { Sparkles, ArrowUpRight, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

const projects = [
    {
        title: "Devrachtpatser Onvyo ERP",
        description: "A full ERP system developed from scratch with real-time admin dashboards for HR, finance, and lead management. Built for scalability and high performance.",
        year: "2024",
        github: "#",
        demo: "#"
    },
    {
        title: "TextGPT & IQR Codes",
        description: "An AI text service for automated text generation and texting workflows, built to be white-labeled and easily integrated into existing systems.",
        year: "2023",
        github: "#",
        demo: "#"
    },
    {
        title: "Top Floor Trends",
        description: "A complete web and content update focused on improving search visibility and user experience. Built with performance and SEO in mind.",
        year: "2023",
        github: "#",
        demo: "#"
    },
    {
        title: "VidalSigns",
        description: "An AI powered medical assistant that converts complex lab reports into simple, actionable explanations for patients and healthcare providers.",
        year: "2022",
        github: "#",
        demo: "#"
    }
];

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
                {projects.map((project, i) => (
                    <div key={i} className="h-full p-6 lg:p-8 rounded-2xl bg-[var(--text-secondary)]/5 border border-[var(--text-secondary)]/10 hover:bg-[var(--text-secondary)]/10 transition-all duration-300 flex flex-col justify-between space-y-6 group">
                        <div>
                            <div className="flex justify-between items-start mb-3">
                                <span className="text-[10px] font-sans font-semibold text-[var(--accent)] tracking-widest uppercase">{project.year}</span>
                                <ArrowUpRight size={16} className="text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors opacity-0 group-hover:opacity-100" />
                            </div>
                            <h3 className="text-lg md:text-xl font-serif font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-3">
                                {project.title}
                            </h3>
                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-sans font-light">
                                {project.description}
                            </p>
                        </div>
                        
                        <div className="flex items-center gap-4 pt-2">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-sans font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                                <FaGithub size={14} /> <span>Source</span>
                            </a>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-sans font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                                <ExternalLink size={14} /> <span>Live Demo</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;