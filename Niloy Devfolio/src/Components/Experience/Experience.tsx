import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
    const experiences = [
        { role: "Senior Frontend Engineer", company: "TechNova", period: "2023 - Present", description: "Leading the development of modern web applications using React and Next.js. Architected the core design system used across 5+ products." },
        { role: "Software Developer", company: "WebFlow Inc", period: "2021 - 2023", description: "Built and maintained scalable e-commerce platforms and internal tools. Improved SEO scores by 40%." },
        { role: "Junior Developer", company: "StartupX", period: "2019 - 2021", description: "Assisted in the development of responsive user interfaces and backend APIs. Implemented critical payment gateways." }
    ];

    return (
        <section className="animate-fade-in max-w-3xl pt-8">
            <div className="flex items-center gap-4 mb-14">
                <div className="p-3 bg-[var(--accent)]/10 text-[var(--accent)] rounded-2xl">
                    <Briefcase size={28} strokeWidth={1.5} />
                </div>
                <h1 className="text-4xl md:text-5xl font-sans font-extrabold text-[var(--text-primary)] tracking-tight">Experience</h1>
            </div>
            
            <div className="space-y-10 border-l-2 border-[var(--text-secondary)]/10 ml-6 pl-8 md:pl-12">
                {experiences.map((exp, i) => (
                    <div key={i} className="relative group">
                        <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-[var(--bg)] border-2 border-[var(--text-secondary)]/30 group-hover:border-[var(--accent)] transition-colors"></div>
                        
                        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 md:gap-8 mb-2">
                            <h3 className="text-xl md:text-2xl font-sans font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">{exp.role}</h3>
                            <span className="text-sm font-sans font-medium text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1 rounded-full w-fit">
                                {exp.period}
                            </span>
                        </div>
                        <p className="text-base font-serif italic text-[var(--text-secondary)] mb-4">{exp.company}</p>
                        <p className="text-base text-[var(--text-secondary)] leading-relaxed font-sans font-light">
                            {exp.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
