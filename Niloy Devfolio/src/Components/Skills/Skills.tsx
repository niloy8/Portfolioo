import React from 'react';
import { Terminal, Cpu, Layout, Layers } from 'lucide-react';

const skillCategories = [
    {
        title: "Frontend Development",
        icon: Layout,
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"]
    },
    {
        title: "Backend & DevOps",
        icon: Terminal,
        skills: ["Node.js", "Express", "Python", "Docker", "PostgreSQL", "MongoDB"]
    },
    {
        title: "Tools & Architectures",
        icon: Layers,
        skills: ["Git", "REST APIs", "GraphQL", "Microservices", "Unit Testing", "CI/CD"]
    },
    {
        title: "Specialties",
        icon: Cpu,
        skills: ["Agentic AI", "Real-time Systems", "System Design", "UI/UX Principles"]
    }
];

const Skills: React.FC = () => {
    return (
        <section className="animate-fade-in py-12 space-y-16">
            <div className="space-y-4">
                <h2 className="text-[var(--accent)] font-sans text-sm tracking-[0.2em] uppercase font-bold">Tech Stack</h2>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Tools of the <span className="italic font-serif">Trade</span></h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillCategories.map((category, i) => (
                    <div key={i} className="bg-[var(--text-secondary)]/5 border border-[var(--text-secondary)]/10 rounded-3xl p-8 hover:bg-[var(--text-secondary)]/8 transition-all duration-300 group">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-[var(--accent)]/10 text-[var(--accent)] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                <category.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold">{category.title}</h3>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill, j) => (
                                <span
                                    key={j}
                                    className="px-4 py-2 bg-[var(--bg)] border border-[var(--text-secondary)]/10 text-[var(--text-secondary)] text-sm rounded-xl hover:border-[var(--accent)]/50 hover:text-[var(--accent)] transition-all duration-300 hover:scale-105 cursor-default shadow-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="pt-12 text-center">
                <p className="text-[var(--text-secondary)] font-light">Always learning, always evolving. Current focus: <span className="text-[var(--accent)] font-bold">LLM Orchestration</span>.</p>
            </div>
        </section>
    );
};

export default Skills;