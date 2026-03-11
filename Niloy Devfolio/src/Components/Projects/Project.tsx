import { ExternalLink, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

const projects = [
  {
    title: "Devrachtpatser Onvyo ERP",
    description: "A full ERP system developed from scratch with real-time admin dashboards for HR, finance, and lead management. Built for scalability and high performance.",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    link: "#",
    github: "#"
  },
  {
    title: "TextGPT & IQR Codes",
    description: "An AI text service for automated text generation and texting workflows, built to be white-labeled and easily integrated into existing systems.",
    tags: ["Next.js", "OpenAI", "TypeScript"],
    link: "#",
    github: "#"
  },
  {
    title: "Top Floor Trends",
    description: "A complete web and content update focused on improving search visibility and user experience. Built with performance and SEO in mind.",
    tags: ["Vite", "SEO", "CSS3"],
    link: "#",
    github: "#"
  },
  {
    title: "VidalSigns",
    description: "An AI powered medical assistant that converts complex lab reports into simple, actionable explanations for patients and healthcare providers.",
    tags: ["React Native", "Python", "ML"],
    link: "#",
    github: "#"
  }
];

const Projects: React.FC = () => {
    return (
        <section className="animate-fade-in py-12 space-y-16">
            <div className="space-y-4">
                <h2 className="text-[var(--accent)] font-sans text-sm tracking-[0.2em] uppercase font-bold">Selected Work</h2>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Showcase of <span className="italic font-serif">Engineering</span></h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, i) => (
                    <div 
                        key={i} 
                        className="group relative bg-[var(--text-secondary)]/5 border border-[var(--text-secondary)]/10 rounded-3xl p-8 hover:bg-[var(--text-secondary)]/10 transition-all duration-500 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           <ArrowRight className="text-[var(--accent)] -rotate-45 group-hover:rotate-0 transition-transform duration-500" size={32} />
                        </div>

                        <div className="space-y-6">
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, j) => (
                                    <span key={j} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold group-hover:text-[var(--accent)] transition-colors duration-300">{project.title}</h3>
                                <p className="text-[var(--text-secondary)] leading-relaxed font-light">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex items-center gap-6 pt-4">
                                <a href={project.link} className="flex items-center gap-2 text-sm font-bold hover:text-[var(--accent)] transition-colors">
                                    <ExternalLink size={16} /> Live Demo
                                </a>
                                <a href={project.github} className="flex items-center gap-2 text-sm font-bold hover:text-[var(--accent)] transition-colors">
                                    <FaGithub size={16} /> Source
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="pt-20 text-center">
                <p className="text-[var(--text-secondary)] mb-8 font-light italic text-lg">"Quality is not an act, it is a habit."</p>
                <div className="inline-flex items-center gap-4 text-sm font-bold tracking-widest uppercase text-[var(--text-primary)] cursor-pointer hover:text-[var(--accent)] transition-colors group">
                    View Archive 
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </div>
            </div>
        </section>
    );
};

export default Projects;