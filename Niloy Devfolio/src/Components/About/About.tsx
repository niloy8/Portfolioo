import React from 'react';
import { Download, Award, BookOpen, Coffee } from 'lucide-react';

const About: React.FC = () => {
    return (
        <section className="animate-fade-in py-12 space-y-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-[var(--accent)] font-sans text-sm tracking-[0.2em] uppercase font-bold">My Story</h2>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Crafting Digital <span className="italic font-serif">Solutions</span></h1>
                    </div>
                    
                    <div className="space-y-6 text-lg text-[var(--text-secondary)] leading-relaxed font-light">
                        <p>
                            I'm a Full-Stack Developer with a deep-seated passion for creating interfaces that are not only functional but also tell a story through design. My approach is rooted in simplicity, ensuring every pixel serves a purpose.
                        </p>
                        <p>
                            With over 3 years of experience in the industry, I've had the privilege of working with diverse clients across the globe, from budding startups to established enterprises, helping them translate their vision into robust digital products.
                        </p>
                        <p>
                            My philosophy is centered around "Minimalism with Performance". I believe that the best solutions are often the simplest ones, provided they are engineered with precision and attention to detail.
                        </p>
                    </div>

                    <div className="pt-6">
                        <a 
                            href="/About/Niloy Bhuiyan(CV).pdf" 
                            download
                            className="inline-flex items-center gap-3 border-2 border-[var(--accent)] text-[var(--accent)] px-8 py-3 rounded-full font-bold hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all duration-300 transform hover:scale-105"
                        >
                            <Download size={20} />
                            Download Resume (PDF)
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    {[
                        { icon: Award, label: "Experience", detail: "3+ Years", color: "bg-blue-500/10 text-blue-500" },
                        { icon: BookOpen, label: "Education", detail: "BSc in CSE", color: "bg-orange-500/10 text-orange-500" },
                        { icon: Coffee, label: "Projects", detail: "50+ Built", color: "bg-emerald-500/10 text-emerald-500" },
                        { icon: Award, label: "Certified", detail: "AWS, Google", color: "bg-purple-500/10 text-purple-500" }
                    ].map((item, i) => (
                        <div key={i} className="bg-[var(--text-secondary)]/5 border border-[var(--text-secondary)]/10 rounded-3xl p-8 hover:border-[var(--accent)]/30 transition-all duration-300 group">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${item.color}`}>
                                <item.icon size={24} />
                            </div>
                            <p className="text-xs uppercase tracking-widest text-[var(--text-secondary)] font-bold mb-1">{item.label}</p>
                            <p className="text-xl font-bold">{item.detail}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-[var(--accent)]/5 rounded-[3rem] p-12 md:p-16 border border-[var(--accent)]/10">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl font-serif italic text-[var(--accent)]">"Simplicity is the ultimate sophistication."</h2>
                    <p className="text-[var(--text-secondary)] font-light italic">— Leonardo da Vinci</p>
                </div>
            </div>
        </section>
    );
};

export default About;