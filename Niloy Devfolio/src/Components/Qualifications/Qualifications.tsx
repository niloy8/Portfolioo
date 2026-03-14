import React from 'react';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';
import { education, certifications } from '../../data/qualifications';
import type { Qualification } from '../../data/qualifications';

const QualificationCard: React.FC<{ item: Qualification; index: number }> = ({ item, index }) => (
    <div
        className="group relative pl-8 pb-10 last:pb-0"
        style={{ animationDelay: `${index * 100}ms` }}
    >
        {/* Timeline Line */}
        <div className="absolute left-[11px] top-0 bottom-0 w-[1px] bg-[var(--text-secondary)]/10 group-last:h-4 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-0 bg-[var(--accent)] group-hover:h-full transition-all duration-700 ease-in-out"></div>
        </div>

        {/* Timeline Dot */}
        <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[var(--bg)] border border-[var(--text-secondary)]/20 flex items-center justify-center z-10 group-hover:border-[var(--accent)] transition-colors duration-300">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--text-secondary)]/30 group-hover:bg-[var(--accent)] transition-all transform group-hover:scale-125"></div>
        </div>

        <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div className="space-y-1">
                    <h3 className="text-lg md:text-xl font-serif font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300">
                        {item.title}
                    </h3>
                    <p className="text-sm font-serif italic text-[var(--text-secondary)] flex items-center gap-2">
                        {item.organization}
                        {item.link && (
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-[var(--accent)] hover:underline decoration-skip-ink opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <ExternalLink size={12} className="ml-1" />
                            </a>
                        )}
                    </p>
                </div>
                <span className="text-[10px] md:text-xs font-sans font-medium uppercase tracking-widest text-[var(--accent)] bg-[var(--accent)]/5 border border-[var(--accent)]/10 px-3 py-1 rounded-full whitespace-nowrap self-start">
                    {item.period}
                </span>
            </div>

            <p className="text-sm leading-relaxed text-[var(--text-secondary)] font-sans font-light max-w-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {item.description}
            </p>
        </div>
    </div>
);

const Qualifications: React.FC = () => {
    return (
        <section className="animate-fade-in max-w-4xl pt-6 space-y-16">
            <div className="space-y-10">
                {/* Header Section */}
                <div className="flex items-center gap-4 mb-2">
                    <div className="p-2.5 bg-[var(--accent)]/5 text-[var(--accent)] rounded-2xl border border-[var(--accent)]/10">
                        <GraduationCap size={22} strokeWidth={1.5} />
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[var(--text-primary)] tracking-tight">Education</h2>
                        <div className="h-0.5 w-12 bg-[var(--accent)]/60 rounded-full mt-1"></div>
                    </div>
                </div>

                {/* Education List */}
                <div className="ml-2">
                    {education.map((item, i) => (
                        <QualificationCard key={i} item={item} index={i} />
                    ))}
                </div>
            </div>

            <div className="space-y-10">
                {/* Certifications Header */}
                <div className="flex items-center gap-4 mb-2">
                    <div className="p-2.5 bg-[var(--accent)]/5 text-[var(--accent)] rounded-2xl border border-[var(--accent)]/10">
                        <Award size={22} strokeWidth={1.5} />
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[var(--text-primary)] tracking-tight">Certifications</h2>
                        <div className="h-0.5 w-12 bg-[var(--accent)]/60 rounded-full mt-1"></div>
                    </div>
                </div>

                {/* Certifications List */}
                <div className="ml-2">
                    {certifications.map((item, i) => (
                        <QualificationCard key={i} item={item} index={i + education.length} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Qualifications;
