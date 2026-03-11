import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const Contact: React.FC = () => {
    return (
        <section className="animate-fade-in py-12 space-y-16">
            <div className="space-y-4">
                <h2 className="text-[var(--accent)] font-sans text-sm tracking-[0.2em] uppercase font-bold">Contact</h2>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Let's Build <span className="italic font-serif">Something Great</span></h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="space-y-12">
                    <p className="text-xl text-[var(--text-secondary)] font-light leading-relaxed max-w-lg">
                        Have a project in mind or just want to chat? Shoot me a message and I'll get back to you within 24 hours.
                    </p>

                    <div className="space-y-8">
                        {[
                            { icon: Mail, label: "Email", value: "hello@niloy.dev" },
                            { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh" },
                            { icon: Phone, label: "Availability", value: "Open for freelance & full-time" }
                        ].map((info, i) => (
                            <div key={i} className="flex items-center gap-6 group">
                                <div className="w-12 h-12 bg-[var(--accent)]/10 text-[var(--accent)] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <info.icon size={20} />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-[var(--text-secondary)] font-bold">{info.label}</p>
                                    <p className="text-lg font-medium">{info.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-8 space-y-4">
                        <p className="text-sm uppercase tracking-widest text-[var(--text-secondary)] font-bold">Follow Me</p>
                        <div className="flex gap-6">
                            {[FaGithub, FaLinkedin, FaXTwitter].map((Icon, i) => (
                                <a key={i} href="#" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-all duration-300 transform hover:scale-110">
                                    <Icon size={24} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <form className="bg-[var(--text-secondary)]/5 border border-[var(--text-secondary)]/10 rounded-[2.5rem] p-10 space-y-6 shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest font-bold ml-1">Full Name</label>
                            <input 
                                type="text" 
                                placeholder="John Doe"
                                className="w-full bg-[var(--bg)] border border-[var(--text-secondary)]/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[var(--accent)] transition-colors shadow-sm"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest font-bold ml-1">Email Address</label>
                            <input 
                                type="email" 
                                placeholder="john@example.com"
                                className="w-full bg-[var(--bg)] border border-[var(--text-secondary)]/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[var(--accent)] transition-colors shadow-sm"
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest font-bold ml-1">Subject</label>
                        <input 
                            type="text" 
                            placeholder="Project Inquiry"
                            className="w-full bg-[var(--bg)] border border-[var(--text-secondary)]/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[var(--accent)] transition-colors shadow-sm"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest font-bold ml-1">Your Message</label>
                        <textarea 
                            rows={5}
                            placeholder="Tell me about your project..."
                            className="w-full bg-[var(--bg)] border border-[var(--text-secondary)]/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[var(--accent)] transition-colors shadow-sm resize-none"
                        ></textarea>
                    </div>

                    <button className="w-full bg-[var(--accent)] text-[var(--bg)] font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.01] transition-transform shadow-xl shadow-[var(--accent)]/10">
                        Send Message
                        <Send size={18} />
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;