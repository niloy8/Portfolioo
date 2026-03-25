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
        role: "Full-Stack Developer",
        company: "Khan Express",
        location: "On-Site",
        period: "Nov 2025 - Present",
        description: "Working on building modern, scalable web applications with a focus on performance, clean architecture, and real-world usability.",
        details: [
            "Maintained and worked with WordPress website.",

            "Built responsive user interfaces using React/Next.js and handled backend logic with Express js",
            "Implemented authentication, API integration, and efficient data handling.",
            "Worked on AI Agent and Low Code projects in another e-commerce platform.",
            "Worked on Firebase, Docker, Digital Ocean, Vercel, Render to deploy and other needed tools to make the site live.",
            "Developed and maintained a full-stack e-commerce platform (Khan Express) platform with integrated frontend and backend systems.",
        ]
    },
    {
        role: "Hackathon Developer",
        company: "Hack The AI Hackathon (Powered by SmythOS)",
        location: "Green University of Bangladesh",
        period: "2025",
        description: "Built an AI-powered career assistance platform to help fresh graduates improve ATS scores and interview performance.",
        details: [
            "Developed 'CareerBoost AI', an AI-driven platform for resume analysis and interview preparation.",
            "Built a resume analyzer that evaluates ATS scores, highlights strengths and weaknesses, and suggests optimized content.",
            "Implemented an AI interview assistant generating role-based questions based on job requirements and experience level.",
            "Integrated analysis of voice tone, sentiment, confidence, clarity, and behavioral signals like nervousness and hand movement.",
            "Designed a 'Mentor Mode' to generate follow-up questions for continuous improvement and practice.",
            "Delivered a functional beta version (English-only) with plans for Bengali support and public release.",
            "Collaborated in a team of 3 under time constraints and secured 9th place among competing teams."
        ]
    },
    {
        role: "Thesis Research",
        company: "BdSL-GraphFormer: A Hybrid Spatio-Temporal Graph and Transformer Ensemble for Complex Bangla Sign Language Recognition",
        location: "Green University of Bangladesh",
        period: "2025 - Feb 2026",
        description: "Developing an AI-powered system to convert Bangla Sign Language into natural language, improving communication accessibility for the hearing-impaired community.",
        details: [
            "Designed and developed a machine learning-based system to recognize Bangla Sign Language gestures.",
            "Worked with graph based like MSG3D and Transformer based techniques to process hand gestures from video input to keypoints then model train.",
            "Collected our own dataset.",
            "Fine-tuned the model and Train the model with our dataset.",
            "Achieved 98.52% accuracy in Bangla Sign Language recognition with our own totally unseen test set.",
            "Working on publishing a paper on it."
        ]
    }
];

export const languages: string[] = ["Python", "TypeScript", "Node.js", "JavaScript", "C", "SQL", "LaTeX"];

export const technologies: string[] = [
    "REST API", "Github", "Express.js", "Next.js", "React", "Tailwind CSS", "Vercel", "Firebase",
    "NoSQL", "PostgreSQL",
    "Overleaf", "Antigravity", "Claude", "MongoDB",
    "Docker", "Canva", "DigitalOcean", "Render", "Wordpress", "Woocommerce"
];

export const expertise: string[] = [
    "Web Development", "AI Development", "Machine Learning", "Data Analysis", "Vibe coding", "Prompt Engineering",
    "AI Agent", "Low Code", "Cyber Security"
];
