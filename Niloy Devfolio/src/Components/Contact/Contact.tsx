import React from 'react';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section className="animate-fade-in max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-[var(--text-primary)] mb-6">Get in Touch</h1>
            
            <p className="text-base md:text-lg text-[var(--text-secondary)] font-serif leading-relaxed mb-10">
                I'm currently available for freelance projects and consulting opportunities. Feel free to reach out if you'd like to work together.
            </p>

            <a 
                href="mailto:hello@niloy.dev" 
                className="inline-flex items-center gap-3 bg-[#38312B] text-[var(--bg)] px-6 py-3 rounded-lg hover:bg-[var(--accent)] hover:text-white transition-colors text-sm font-serif font-medium"
            >
                <Mail size={16} strokeWidth={2} />
                Email Me
            </a>
        </section>
    );
};

export default Contact;