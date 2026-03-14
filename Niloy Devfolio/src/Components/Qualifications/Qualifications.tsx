import React from 'react';
import { GraduationCap } from 'lucide-react';

const Qualifications: React.FC = () => {
    const qualifications = [
        { degree: "B.Sc. in Computer Science", institution: "University of Technology", period: "2015 - 2019", details: "Graduated with Honors. Focused on Software Engineering and AI." },
        { degree: "AWS Certified Solutions Architect", institution: "Amazon Web Services", period: "2022", details: "Associate level certification focusing on scalable system architectures." },
        { degree: "Full-Stack Web Development", institution: "Tech Bootcamp", period: "2020", details: "Intensive 12-week program covering React, Node.js, and modern web dev." }
    ];

    return (
        <section className="animate-fade-in max-w-3xl pt-8">
            <div className="flex items-center gap-4 mb-14">
                <div className="p-3 bg-[var(--accent)]/10 text-[var(--accent)] rounded-2xl">
                    <GraduationCap size={28} strokeWidth={1.5} />
                </div>
                <h1 className="text-4xl md:text-5xl font-sans font-extrabold text-[var(--text-primary)] tracking-tight">Qualifications</h1>
            </div>
            
            <div className="space-y-10 border-l-2 border-[var(--text-secondary)]/10 ml-6 pl-8 md:pl-12">
                {qualifications.map((qual, i) => (
                    <div key={i} className="relative group">
                        <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-[var(--bg)] border-2 border-[var(--text-secondary)]/30 group-hover:border-[var(--accent)] transition-colors"></div>
                        
                        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 md:gap-8 mb-2">
                            <h3 className="text-xl md:text-2xl font-sans font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">{qual.degree}</h3>
                            <span className="text-sm font-sans font-medium text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1 rounded-full w-fit">
                                {qual.period}
                            </span>
                        </div>
                        <p className="text-base font-serif italic text-[var(--text-secondary)] mb-4">{qual.institution}</p>
                        <p className="text-base text-[var(--text-secondary)] leading-relaxed font-sans font-light">
                            {qual.details}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Qualifications;
