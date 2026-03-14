import React from 'react';
import { MessageSquare, Send } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section className="animate-fade-in max-w-3xl pt-8">
            <div className="flex items-center gap-4 mb-14">
                <div className="p-3 bg-[var(--accent)]/10 text-[var(--accent)] rounded-2xl">
                    <MessageSquare size={28} strokeWidth={1.5} />
                </div>
                <h1 className="text-4xl md:text-5xl font-sans font-extrabold text-[var(--text-primary)] tracking-tight">Get in Touch</h1>
            </div>
            
            <div className="max-w-xl bg-[var(--text-secondary)]/5 border border-[var(--text-secondary)]/10 p-8 md:p-12 rounded-3xl">
                <p className="text-base md:text-lg text-[var(--text-secondary)] font-sans font-light leading-relaxed mb-10">
                    I'm currently available for freelance projects and consulting opportunities. Whether you have a question or just want to say hi, feel free to drop a message.
                </p>

                <a 
                    href="mailto:hello@niloy.dev" 
                    className="group inline-flex items-center justify-center gap-3 bg-[var(--text-primary)] text-[var(--bg)] px-8 py-4 rounded-xl hover:bg-[var(--accent)] hover:-translate-y-1 transition-all shadow-lg shadow-[var(--bg)] font-sans font-bold w-full sm:w-auto"
                >
                    <Send size={18} strokeWidth={2} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Send an Email
                </a>
            </div>
        </section>
    );
};

export default Contact;