export interface Qualification {
    title: string;
    organization: string;
    period?: string;
    description: string;
    link?: string;
}

export const education: Qualification[] = [
    {
        title: "B.Sc. in Computer Science and Engineering",
        organization: "Green University of Bangladesh",
        period: "Feb 2022 – Feb 2026",
        description: "Focusing on Software Engineering, Data Structures, Algorithms, Cyber Security and Artificial Intelligence. Maintaining a strong academic record while actively participating in tech communities."
    }
];

export const certifications: Qualification[] = [
    {
        title: "Google Data Analytics Specialization",
        organization: "Coursera",
        period: "Feb 2024",
        description: "9-course series by Google Career Certificates covering data cleaning, analysis, visualization, and R programming.",
        link: "https://www.coursera.org/professional-certificates/google-data-analytics"
    },
    {
        title: "AWS Certified Solutions Architect",
        organization: "Amazon Web Services",

        description: "Associate level certification focusing on designing distributed systems on AWS."
    }
];
