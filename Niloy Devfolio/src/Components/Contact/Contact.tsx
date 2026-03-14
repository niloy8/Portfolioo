import React from 'react';
import { MessageSquare, Send } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section className="animate-fade-in max-w-2xl pt-6">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-[var(--accent)]/10 text-[var(--accent)] rounded-xl">
                    <MessageSquare size={20} strokeWidth={1.5} />
                </div>
                <h1 className="text-2xl md:text-3xl font-serif font-bold text-[var(--text-primary)] tracking-tight">Get in Touch</h1>
            </div>

            <div className="max-w-lg bg-[var(--text-secondary)]/5 border border-[var(--text-secondary)]/10 p-6 md:p-8 rounded-2xl">
                <p className="text-sm text-[var(--text-secondary)] font-sans font-light leading-relaxed mb-8">
                    I'm currently available for freelance projects and consulting opportunities. Whether you have a question or just want to say hi, feel free to drop a message.
                </p>

                <a
                    href="mailto:hello@niloy.dev"
                    className="group inline-flex items-center justify-center gap-2 bg-[var(--text-primary)] text-[var(--bg)] px-6 py-3 rounded-xl hover:bg-[var(--accent)] hover:-translate-y-0.5 transition-all shadow-md font-sans font-semibold text-sm w-full sm:w-auto"
                >
                    <Send size={14} strokeWidth={2} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Send an Email
                </a>
            </div>
        </section>
    );
};

export default Contact;