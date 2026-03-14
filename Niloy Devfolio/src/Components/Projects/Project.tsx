import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "Devrachtpatser Onvyo ERP",
        description: "A full ERP system developed from scratch with real-time admin dashboards for HR, finance, and lead management. Built for scalability and high performance.",
        year: "2024",
        link: "#"
    },
    {
        title: "TextGPT & IQR Codes",
        description: "An AI text service for automated text generation and texting workflows, built to be white-labeled and easily integrated into existing systems.",
        year: "2023",
        link: "#"
    },
    {
        title: "Top Floor Trends",
        description: "A complete web and content update focused on improving search visibility and user experience. Built with performance and SEO in mind.",
        year: "2023",
        link: "#"
    },
    {
        title: "VidalSigns",
        description: "An AI powered medical assistant that converts complex lab reports into simple, actionable explanations for patients and healthcare providers.",
        year: "2022",
        link: "#"
    }
];

const Projects: React.FC = () => {
    return (
        <section className="animate-fade-in max-w-2xl pt-6">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-[var(--accent)]/10 text-[var(--accent)] rounded-xl">
                    <Sparkles size={20} strokeWidth={1.5} />
                </div>
                <h1 className="text-2xl md:text-3xl font-serif font-bold text-[var(--text-primary)] tracking-tight">Projects</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {projects.map((project, i) => (
                    <a key={i} href={project.link} className="block group">
                        <div className="h-full p-6 rounded-2xl bg-[var(--text-secondary)]/5 border border-[var(--text-secondary)]/10 group-hover:bg-[var(--text-secondary)]/10 transition-all duration-300 flex flex-col justify-between space-y-6">
                            <div>
                                <div className="flex justify-between items-start mb-3">
                                    <span className="text-[10px] font-sans font-semibold text-[var(--accent)] tracking-widest uppercase">{project.year}</span>
                                    <ArrowUpRight size={16} className="text-[var(--text-secondary)] group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>
                                <h3 className="text-lg font-serif font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-sans font-light">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;