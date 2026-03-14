import React from 'react';

const Qualifications: React.FC = () => {
    const qualifications = [
        { degree: "B.Sc. in Computer Science", institution: "University of Technology", period: "2015 - 2019", details: "Graduated with Honors. Focused on Software Engineering and AI." },
        { degree: "AWS Certified Solutions Architect", institution: "Amazon Web Services", period: "2022", details: "Associate level certification focusing on scalable system architectures." },
        { degree: "Full-Stack Web Development", institution: "Tech Bootcamp", period: "2020", details: "Intensive 12-week program covering React, Node.js, and modern web dev." }
    ];

    return (
        <section className="animate-fade-in max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[var(--text-primary)] mb-12 tracking-tight">Qualifications</h1>
            
            <div className="space-y-12">
                {qualifications.map((qual, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-2 md:gap-8 group">
                        <div className="w-32 shrink-0 text-sm font-serif text-[var(--text-secondary)] mt-1">
                            {qual.period}
                        </div>
                        <div>
                            <h3 className="text-xl font-serif font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">{qual.degree}</h3>
                            <p className="text-sm font-sans font-medium text-[var(--text-primary)] mb-3">{qual.institution}</p>
                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-serif">
                                {qual.details}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Qualifications;
