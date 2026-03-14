import React from 'react';

const Experience: React.FC = () => {
    const experiences = [
        { role: "Senior Frontend Engineer", company: "TechNova", period: "2023 - Present", description: "Leading the development of modern web applications using React and Next.js." },
        { role: "Software Developer", company: "WebFlow Inc", period: "2021 - 2023", description: "Built and maintained scalable e-commerce platforms and internal tools." },
        { role: "Junior Developer", company: "StartupX", period: "2019 - 2021", description: "Assisted in the development of responsive user interfaces and backend APIs." }
    ];

    return (
        <section className="animate-fade-in max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[var(--text-primary)] mb-12 tracking-tight">Experience</h1>
            
            <div className="space-y-12">
                {experiences.map((exp, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-2 md:gap-8 group">
                        <div className="w-32 shrink-0 text-sm font-serif text-[var(--text-secondary)] mt-1">
                            {exp.period}
                        </div>
                        <div>
                            <h3 className="text-xl font-serif font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">{exp.role}</h3>
                            <p className="text-sm font-sans font-medium text-[var(--text-primary)] mb-3">{exp.company}</p>
                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-serif">
                                {exp.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
