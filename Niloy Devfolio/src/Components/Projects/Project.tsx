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
        <section className="animate-fade-in max-w-3xl pt-8">
            <div className="flex items-center gap-4 mb-14">
                <div className="p-3 bg-[var(--accent)]/10 text-[var(--accent)] rounded-2xl">
                    <Sparkles size={28} strokeWidth={1.5} />
                </div>
                <h1 className="text-4xl md:text-5xl font-sans font-extrabold text-[var(--text-primary)] tracking-tight">Projects</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, i) => (
                    <a key={i} href={project.link} className="block group">
                        <div className="h-full p-8 rounded-3xl bg-[var(--text-secondary)]/5 border border-[var(--text-secondary)]/10 group-hover:bg-[var(--text-secondary)]/10 transition-all duration-300 flex flex-col justify-between space-y-8">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-xs font-sans font-bold text-[var(--accent)] tracking-widest uppercase">{project.year}</span>
                                    <ArrowUpRight size={20} className="text-[var(--text-secondary)] group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>
                                <h3 className="text-2xl font-sans font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-3">
                                    {project.title}
                               </h3>
                                <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed font-sans font-light">
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