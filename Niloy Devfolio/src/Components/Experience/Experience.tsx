import React from 'react';
import { experiences, languages, technologies, expertise } from '../../data/experience';
import type { ExperienceItem } from '../../data/experience';

const SkillCloudItem: React.FC<{ name: string }> = ({ name }) => (
    <span className="group/skill text-[10px] md:text-xs font-sans text-[var(--text-secondary)] hover:text-[var(--accent)] transition-all duration-300 cursor-default flex items-center gap-2 before:content-['/'] before:text-[var(--accent)]/30 hover:translate-x-1">
        <span className="relative">
            {name}
            <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[var(--accent)]/30 transition-all duration-500 group-hover/skill:w-full"></span>
        </span>
    </span>
);

const ExperienceSection: React.FC<{ item: ExperienceItem; index: number }> = ({ item, index }) => (
    <div 
        className="group relative flex flex-col md:flex-row gap-4 md:gap-10 py-5 border-b border-[var(--text-secondary)]/15 last:border-0"
        style={{ animationDelay: `${index * 150}ms` }}
    >
        {/* Left Col: Metadata */}
        <div className="w-full md:w-32 flex-shrink-0 pt-1">
            <span className="text-[9px] font-sans font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                {item.period}
            </span>
            {item.location && (
                <p className="text-[10px] font-serif italic text-[var(--text-secondary)]/80 mt-0.5 uppercase tracking-wider">
                    {item.location}
                </p>
            )}
        </div>

        {/* Right Col: Content */}
        <div className="flex-1 space-y-3">
            <div className="space-y-1">
                <h3 className="text-lg md:text-xl font-serif font-bold text-[var(--text-primary)] tracking-tight leading-tight group-hover:text-[var(--accent)] transition-all duration-300">
                    {item.role}
                </h3>
                <p className="text-xs md:text-sm font-serif italic text-[var(--text-secondary)]">
                    {item.company}
                </p>
            </div>

            <div className="space-y-3 max-w-3xl">
                <p className="text-xs md:text-sm leading-relaxed text-[var(--text-secondary)]/90 font-sans font-light">
                    {item.description}
                </p>
                {item.details && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 pt-1.5 border-t border-[var(--text-secondary)]/10">
                        {item.details.map((detail, i) => (
                            <div key={i} className="animate-slide-up text-[10px] md:text-xs text-[var(--text-secondary)]/80 font-sans font-light flex gap-3 leading-relaxed" style={{ animationDelay: `${(index * 150) + (i * 50)}ms` }}>
                                <span className="text-[var(--accent)]/60 text-[7px] mt-1.5 flex-shrink-0">●</span>
                                {detail}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    </div>
);

const Experience: React.FC = () => {
    return (
        <section className="animate-fade-in max-w-5xl pt-4 space-y-6 pb-12">
            {/* Header */}
            <header className="group/header space-y-2.5 border-b border-[var(--text-secondary)]/15 pb-4">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-[var(--text-primary)] tracking-tight md:group-hover/header:tracking-[0.02em] transition-all duration-700 leading-none">
                    Experience<span className="text-[var(--accent)]">.</span>
                </h2>
                <p className="text-xs md:text-sm font-serif italic text-[var(--text-secondary)]/80 max-w-xl leading-relaxed">
                    A collection of <span className="text-[var(--text-primary)] not-italic font-bold">architectural craftsmanship</span> and strategic engineering across digital ecosystems.
                </p>
            </header>

            {/* Professional Journey */}
            <div className="space-y-0.5">
                {experiences.map((item, i) => (
                    <ExperienceSection key={i} item={item} index={i} />
                ))}
            </div>

            {/* Expertise Hub (Stacked & Refined) */}
            <div className="space-y-4 pt-6 mt-2 border-t border-[var(--text-secondary)]/15">
                <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-[var(--text-secondary)]/60">
                    Expertise Hub
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-[var(--text-secondary)]/[0.02] backdrop-blur-sm rounded-xl p-6 border border-[var(--text-secondary)]/5">
                    <div className="space-y-2.5">
                        <h5 className="text-[10px] font-sans font-semibold text-[var(--accent)] uppercase tracking-widest border-b border-[var(--accent)]/10 pb-2">Languages</h5>
                        <div className="flex flex-wrap gap-x-3 gap-y-1">
                            {languages.map((s, i) => <SkillCloudItem key={i} name={s} />)}
                        </div>
                    </div>
                    <div className="space-y-2.5">
                        <h5 className="text-[10px] font-sans font-semibold text-[var(--accent)] uppercase tracking-widest border-b border-[var(--accent)]/10 pb-2">Technologies</h5>
                        <div className="flex flex-wrap gap-x-3 gap-y-1">
                            {technologies.map((s, i) => <SkillCloudItem key={i} name={s} />)}
                        </div>
                    </div>
                    <div className="space-y-2.5">
                        <h5 className="text-[10px] font-sans font-semibold text-[var(--accent)] uppercase tracking-widest border-b border-[var(--accent)]/10 pb-2">Focus</h5>
                        <div className="flex flex-wrap gap-x-3 gap-y-1">
                            {expertise.map((s, i) => <SkillCloudItem key={i} name={s} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
