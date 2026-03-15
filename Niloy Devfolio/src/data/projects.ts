export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    description: string;
    year?: string;
    status: string;
    tags: string[];
    github?: string;
    demo?: string;
}

export const projects: Project[] = [
    {
        id: "khan-express",
        title: "Khan Express (KNEX)",
        shortDescription: "A full e-commerce platform developed from scratch with real-time admin dashboards for HR, finance, and lead management. Built for scalability and high performance.",
        description: "A full e-commerce platform developed from scratch with real time admin dashboards for HR, finance, lead, and customer management. Features scheduling and email reminders, with a CPQ tool that automated lead generation and quotation workflows to boost sales efficiency.",
        year: "2026",
        status: "Live",
        tags: ["E-commerce", "Admin Panel", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "Docker", "DigitalOcean", "PostgreSQL", "React", "Vercel", "Render"],
        github: "https://github.com/Knex-BD-org/knex_bd",
        demo: "https://knex.com.bd/"
    },
    {
        id: "textgpt-iqr",
        title: "TextGPT & IQR Codes",
        shortDescription: "An AI text service for automated text generation and texting workflows, built to be white-labeled and easily integrated into existing systems.",
        description: "An AI-powered text generation and workflow automation service designed from the ground up to be fully embeddable and white-labeled. The platform integrates seamlessly into existing enterprise systems to provide smart texting capabilities and custom IQR code generation.",
        year: "2023",
        status: "Live",
        tags: ["AI", "Automation", "React", "Node.js", "Enterprise"],
        github: "#",
        demo: "#"
    },
    {
        id: "top-floor-trends",
        title: "Top Floor Trends",
        shortDescription: "A complete web and content update focused on improving search visibility and user experience. Built with performance and SEO in mind.",
        description: "A comprehensive digital overhaul focusing on user experience and organic search growth. Designed with modern SEO architectures and lightning-fast page loads to significantly boost user retention and discoverability.",
        year: "2023",
        status: "Live",
        tags: ["SEO", "Web Design", "Next.js", "Content Marketing", "Performance"],
        github: "#",
        demo: "#"
    },
    {
        id: "vidalsigns",
        title: "VidalSigns",
        shortDescription: "An AI powered medical assistant that converts complex lab reports into simple, actionable explanations for patients and healthcare providers.",
        description: "A revolutionary AI-driven medical assistant tool that translates highly technical and complex laboratory results into clear, concise, and actionable insights. Designed to bridge the communication gap between healthcare providers and patients.",
        year: "2022",
        status: "Live",
        tags: ["Healthcare", "AI", "React", "Patient Care", "NLP"],
        github: "#",
        demo: "#"
    }
];
