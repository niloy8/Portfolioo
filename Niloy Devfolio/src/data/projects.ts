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
        shortDescription: "Khan Express is a modern full-stack e-commerce platform built for this company named Khan Express that offers a fast and seamless shopping experience.",
        description: "Khan Express is a modern full-stack e-commerce platform built with Next.js, Node.js and for database used PostgreSQL, offering a fast and seamless shopping experience. It is built for this company named Khan Express. It features a responsive frontend with a powerful backend to manage products, users, and secure system. Built with scalability and performance in mind, Khan Express aims to provide a reliable digital marketplace for both customers and sellers. Also it includes admin panel for managing products, users, orders, leads, customers and other business related features.",
        year: "2026",
        status: "Live",
        tags: ["E-commerce", "Admin Panel", "Next.js", "Node.js", "Express.js", "TypeScript", "Tailwind CSS", "Firebase", "JWT", "Docker", "DigitalOcean", "PostgreSQL", "React", "Vercel", "Render"],
        github: "#",
        demo: "https://knex.com.bd/"
    },
    {
        id: "pure-food-bd",
        title: "Pure Food BD",
        shortDescription: "Pure Food BD is a web application built with fully vibe coding. It is also connected with Backend MongoDB latter by me. It's a full stack application with both Frontend and Backend intigreted.",
        description: "Pure Food BD is a web application built with fully vibe coding. It's a full stack application with Node.js and MongoDB. It is fully responsive and user-friendly. It is also connected with MongoDB for database by myself. This application have it's own backend and frontend with admin panel to manage products, users, orders, leads, customers and other business related features.",
        year: "2026",
        status: "Live",
        tags: ["E-commerce", "Admin Panel", "Next.js", "Node.js", "Express", "TypeScript", "Tailwind CSS", "MongoDB", "React", "Vercel", "Render", "Vite"],
        github: "#",
        demo: "https://pure-food-bd.vercel.app/"
    },
    {
        id: "job-portal",
        title: "Job Portal",
        shortDescription: "A web app for job seekers and employers. This app is built for job seekers and employers to find jobs and post jobs.",
        description: "A web app for job seekers and employers. This app is built for job seekers and employers to find jobs and post jobs. It is connected with MongoDB for database and Firebase for authentication and hosting.This application is built for myself as a practice project for the things I have learned.",
        year: "_",
        status: "Live",
        tags: ["Job Portal", "Firebase", "Node.js", "Express", "JavaScript", "Tailwind CSS", "MongoDB", "React", "Vercel", "Vite"],
        github: "https://github.com/niloy8/Job-Portal-Project",
        demo: "https://job-portal-ad35b.firebaseapp.com/"
    },
    {
        id: "ai-job-coach",
        title: "CareerBoost AI",
        shortDescription: "An AI powered job coach that helps job seekers review their CV or Resume and prepare for interviews with AI. Built for an AI based Hackathon powered by SmythOS in which we got 9th place among public and private universities from Bangladesh. It was a 3 members team based project",
        description: " A resume analyzer where users can upload their resume and job requirements. The system calculates the ATS score, highlights strengths and weaknesses, and suggests improved resume content to boost interview chances. An interview assistant where, based on job role, requirements, and experience level(intern, junior, mid, senior), the system generates industry- relevant questions. Users can give audio / video interviews, and the AI analyzes: Voice tone, Sentiment, Confidence, Hand movement, Nervousness, Clarity, Correctness. It then provides scores with personalized improvement suggestions. A Mentor Mode that generates follow - up questions to help users practice and improve further.",
        year: "2025",
        status: "Live",
        tags: ["AI", "React", "VITE", "Firebase", "Tailwind CSS", "JavaScript", "MongoDB", "SmythOS API", "Python", "Docker", "Vercel"],
        github: "https://github.com/naimulhasannabil/AI-JOB-COACH",
        demo: "https://ai-job-coach-red.vercel.app/"
    }
];
