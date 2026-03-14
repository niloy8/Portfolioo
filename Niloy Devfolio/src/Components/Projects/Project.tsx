import React from 'react';

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
        <section className="animate-fade-in pt-10 md:pt-20 max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-[var(--text-primary)] mb-12">Projects</h1>

            <div className="space-y-12">
                {projects.map((project, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-2 md:gap-8 group">
                        <div className="w-20 shrink-0 text-sm font-serif text-[var(--text-secondary)] mt-1">
                            {project.year}
                        </div>
                        <div>
                            <a href={project.link} className="inline-block text-xl font-serif font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors underline-offset-4 hover:underline mb-2">
                                {project.title}
                            </a>
                            <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed font-serif">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;