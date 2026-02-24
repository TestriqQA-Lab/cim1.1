"use client";

import { Job } from "@/types/careers";

interface CareersJSONLDProps {
    jobs: Job[];
}

export default function CareersJSONLD({ jobs }: CareersJSONLDProps) {
    const STATIC_JOBS = [
        {
            id: "static-seo-specialist",
            title: "SEO Specialist",
            department: "Marketing",
            location: "Remote",
            type: "Full-time",
            description: "We are looking for an analytical and creative SEO Specialist to manage all search engine optimization and marketing activities. You will be responsible for managing content strategy, link building, and keyword strategy to increase rankings on all major search networks.",
            requirements: [
                "2+ years of proven experience as an SEO Specialist or similar role.",
                "Solid understanding of performance marketing, conversion, and online customer acquisition.",
                "In-depth experience with website analytics tools (e.g., Google Analytics, Search Console).",
                "Working knowledge of HTML, CSS, and JavaScript development and constraints."
            ],
            publishedAt: "2026-02-16T09:00:00.000Z"
        },
        {
            id: "static-full-stack-developer",
            title: "Full Stack Developer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
            description: "Join our fast-paced engineering team to build and maintain scalable web applications. You will be working across the entire stack, from designing interactive user interfaces with React to developing robust backend APIs with Node.js and managing our databases.",
            requirements: [
                "3+ years of professional experience with React, Node.js, and TypeScript.",
                "Experience with both SQL (PostgreSQL) and NoSQL (MongoDB) databases.",
                "Familiarity with cloud platforms like AWS or Vercel.",
                "Strong problem-solving skills and a team-first mentality."
            ],
            publishedAt: "2026-02-16T09:15:00.000Z"
        },
        {
            id: "static-social-media-manager",
            title: "Social Media Manager",
            department: "Marketing",
            location: "New York, NY",
            type: "Part-time",
            description: "We need a vibrant Social Media Manager to represent our brand across various social platforms. You will design and execute social media strategies, create engaging content, and interact with our growing community to boost brand awareness and engagement.",
            requirements: [
                "Proven experience as a Social Media Manager or Specialist.",
                "Excellent copywriting, editing, and communication skills.",
                "Deep understanding of social media KPIs and web traffic metrics.",
                "Familiarity with social media publishing and listening tools (e.g., Hootsuite, Sprout Social)."
            ],
            publishedAt: "2026-02-16T09:30:00.000Z"
        },
        {
            id: "static-graphic-designer",
            title: "Graphic Designer",
            department: "Design",
            location: "Remote",
            type: "Freelance",
            description: "We are seeking a highly creative Graphic Designer with a keen eye for aesthetics and visual details. You will conceptualize and create stunning visuals for our digital marketing campaigns, website, and product packaging, ensuring brand consistency across all touchpoints.",
            requirements: [
                "Proven graphic designing experience with a strong portfolio.",
                "Expertise in design software and technologies (e.g., Illustrator, Photoshop, Figma).",
                "A keen eye for aesthetics, typography, and visual details.",
                "Ability to work methodically and meet deadlines in a fast-paced environment."
            ],
            publishedAt: "2026-02-16T09:45:00.000Z"
        }
    ];

    const allJobs = [...jobs, ...STATIC_JOBS];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": allJobs.map((job) => {
            const publishedDate = (job as any).publishedAt ? (job as any).publishedAt : new Date().toISOString();

            return {
                "@type": "JobPosting",
                "title": job.title,
                "description": job.description,
                "datePosted": publishedDate.split('T')[0],
                "validThrough": new Date(new Date(publishedDate).setFullYear(new Date(publishedDate).getFullYear() + 1)).toISOString().split('T')[0],
                "employmentType": job.type === "Full-time" ? "FULL_TIME" : job.type === "Part-time" ? "PART_TIME" : "CONTRACTOR",
                "hiringOrganization": {
                    "@type": "Organization",
                    "name": "Cinute InfoMedia",
                    "sameAs": "https://cinuteinfomedia.com",
                    "logo": "https://cinuteinfomedia.com/logo.png"
                },
                "jobLocation": {
                    "@type": "Place",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": job.location === "Remote" ? "Remote" : job.location,
                        "addressCountry": "IN"
                    }
                },
                "applicantLocationRequirements": job.location === "Remote" ? {
                    "@type": "Country",
                    "name": "IN"
                } : undefined,
                "jobLocationType": job.location === "Remote" ? "TELECOMMUTE" : undefined
            };
        })
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
