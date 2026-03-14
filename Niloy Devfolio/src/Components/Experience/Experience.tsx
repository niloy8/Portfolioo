import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
    const experiences = [
        { role: "Senior Frontend Engineer", company: "TechNova", period: "2023 - Present", description: "Leading the development of modern web applications using React and Next.js. Architected the core design system used across 5+ products." },
        { role: "Software Developer", company: "WebFlow Inc", period: "2021 - 2023", description: "Built and maintained scalable e-commerce platforms and internal tools. Improved SEO scores by 40%." },
        { role: "Junior Developer", company: "StartupX", period: "2019 - 2021", description: "Assisted in the development of responsive user interfaces and backend APIs. Implemented critical payment gateways." }
    ];

    return (
        <section className="animate-fade-in max-w-2xl pt-6">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-[var(--accent)]/10 text-[var(--accent)] rounded-xl">
                    <Briefcase size={20} strokeWidth={1.5} />
                </div>
                <h1 className="text-2xl md:text-3xl font-serif font-bold text-[var(--text-primary)] tracking-tight">Experience</h1>
            </div>

            <div className="space-y-8 border-l border-[var(--text-secondary)]/20 ml-4 pl-6 md:pl-8">
                {experiences.map((exp, i) => (
                    <div key={i} className="relative group">
                        <div className="absolute -left-[29px] md:-left-[37px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--bg)] border border-[var(--text-secondary)]/40 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] transition-all"></div>

                        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 md:gap-4 mb-1">
                            <h3 className="text-base md:text-lg font-sans font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">{exp.role}</h3>
                            <span className="text-xs font-sans font-medium text-[var(--accent)] bg-[var(--accent)]/10 px-2.5 py-0.5 rounded-full w-fit">
                                {exp.period}
                            </span>
                        </div>
                        <p className="text-sm font-serif italic text-[var(--text-secondary)] mb-3">{exp.company}</p>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-sans font-light">
                            {exp.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
