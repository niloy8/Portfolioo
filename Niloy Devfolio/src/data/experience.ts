export interface ExperienceItem {
    role: string;
    company: string;
    location?: string;
    period: string;
    description: string;
    details?: string[];
}

export interface SkillCategory {
    name: string;
    skills: string[];
}

export const experiences: ExperienceItem[] = [
    {
        role: "CTO & Lead Software Engineer",
        company: "Codemypixel",
        location: "Remote",
        period: "Jan 2024 - Present",
        description: "With a committed small team, I cultivate active listening and bold goal-setting, harnessing AI to fast-track iteration and produce production-grade MVP software that drives real impact.",
        details: [
            "Seek opportunity to optimize engineering processes and culture. Believer in the Growth Mindset.",
            "Developed projects through pair programming and managed complex SaaS and AI agent initiatives."
        ]
    }
];

export const languages: string[] = ["Python", "Typescript", "Node.js", "PyTorch", "Javascript", "C", "SQL", "LaTeX"];

export const technologies: string[] = [
    "REST API", "Github", "Supabase", "Next.js", "Vercel", "Firebase", 
    "noSQL", "Telnyx", "OpenAI", "Stripe", "Make", "n8n", "Twilio", 
    "Overleaf", "Cursor", "Claude", "Microsoft Graph API", "MongoDB", 
    "Hugging Face", "Docker", "Canva"
];

export const expertise: string[] = [
    "Machine Learning", "Data Analysis", "Vibe coding", "Prompt Engineering", 
    "Model Context Protocol (MCP)", "Retrieval-Augmented Generation (RAG)", 
    "AI Agent", "Low Code"
];
