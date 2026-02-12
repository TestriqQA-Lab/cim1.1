
export interface Job {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    description: string;
    requirements: string[];
}

export const careerData: Job[] = [
    {
        id: "1",
        title: "Senior Frontend Developer",
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
        description: "We are looking for an experienced Frontend Developer to lead our web application development. You will work with modern technologies like Next.js, React, and TypeScript to build scalable and performant user interfaces.",
        requirements: [
            "5+ years of experience with React and TypeScript",
            "Deep understanding of Next.js App Router and Server Components",
            "Experience with state management (Zustand, Redux, etc.)",
            "Strong knowledge of CSS, Tailwind, and responsive design",
            "Experience with testing frameworks (Jest, React Testing Library, Playwright)"
        ]
    },
    {
        id: "2",
        title: "UX/UI Designer",
        department: "Design",
        location: "Remote",
        type: "Full-time",
        description: "Join our design team to create beautiful and intuitive user experiences. You will collaborate with product managers and engineers to define and implement innovative solutions for our product direction and visuals.",
        requirements: [
            "3+ years of experience in UI/UX design",
            "Proficiency in Figma and Adobe Creative Suite",
            "Strong portfolio showcasing web and mobile apps",
            "Understanding of design systems and accessibility standards",
            "Ability to prototype and iterate quickly"
        ]
    },
    {
        id: "3",
        title: "Digital Marketing Specialist",
        department: "Marketing",
        location: "Hybrid",
        type: "Full-time",
        description: "We are seeking a data-driven Digital Marketing Specialist to manage our online campaigns. You will be responsible for SEO, SEM, and social media strategies to drive traffic and lead generation.",
        requirements: [
            "3+ years of experience in digital marketing",
            "Proven track record in SEO and SEM",
            "Experience with Google Analytics and marketing automation tools",
            "Excellent written and verbal communication skills",
            "Ability to analyze data and provide actionable insights"
        ]
    }
];
