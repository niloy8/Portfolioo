import React from 'react';
import { GraduationCap } from 'lucide-react';

const Qualifications: React.FC = () => {
    const qualifications = [
        { degree: "B.Sc. in Computer Science", institution: "University of Technology", period: "2015 - 2019", details: "Graduated with Honors. Focused on Software Engineering and AI." },
        { degree: "AWS Certified Solutions Architect", institution: "Amazon Web Services", period: "2022", details: "Associate level certification focusing on scalable system architectures." },
        { degree: "Full-Stack Web Development", institution: "Tech Bootcamp", period: "2020", details: "Intensive 12-week program covering React, Node.js, and modern web dev." }
    ];

    return (
        <section className="animate-fade-in max-w-2xl pt-6">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-[var(--accent)]/10 text-[var(--accent)] rounded-xl">
                    <GraduationCap size={20} strokeWidth={1.5} />
                </div>
                <h1 className="text-2xl md:text-3xl font-serif font-bold text-[var(--text-primary)] tracking-tight">Qualifications</h1>
            </div>

            <div className="space-y-8 border-l border-[var(--text-secondary)]/20 ml-4 pl-6 md:pl-8">
                {qualifications.map((qual, i) => (
                    <div key={i} className="relative group">
                        <div className="absolute -left-[29px] md:-left-[37px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--bg)] border border-[var(--text-secondary)]/40 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] transition-all"></div>

                        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 md:gap-4 mb-1">
                            <h3 className="text-base md:text-lg font-sans font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">{qual.degree}</h3>
                            <span className="text-xs font-sans font-medium text-[var(--accent)] bg-[var(--accent)]/10 px-2.5 py-0.5 rounded-full w-fit">
                                {qual.period}
                            </span>
                        </div>
                        <p className="text-sm font-serif italic text-[var(--text-secondary)] mb-3">{qual.institution}</p>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-sans font-light">
                            {qual.details}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Qualifications;
