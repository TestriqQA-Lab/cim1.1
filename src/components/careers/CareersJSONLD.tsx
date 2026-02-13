"use client";

import { Job } from "@/types/careers";

interface CareersJSONLDProps {
    jobs: Job[];
}

export default function CareersJSONLD({ jobs }: CareersJSONLDProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": jobs.map((job) => ({
            "@type": "JobPosting",
            "title": job.title,
            "description": job.description,
            "datePosted": new Date().toISOString().split('T')[0], // Assuming current date for now, ideally this comes from data
            "validThrough": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
            "employmentType": job.type === "Full-time" ? "FULL_TIME" : job.type === "Part-time" ? "PART_TIME" : "CONTRACTOR",
            "hiringOrganization": {
                "@type": "Organization",
                "name": "Cinute InfoMedia",
                "sameAs": "https://cinute.com", // Replace with actual domain
                "logo": "https://cinute.com/logo.png" // Replace with actual logo URL
            },
            "jobLocation": {
                "@type": "Place",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": job.location === "Remote" ? "Remote" : job.location,
                    "addressCountry": "IN" // Assuming India based on context
                }
            },
            "applicantLocationRequirements": job.location === "Remote" ? {
                "@type": "Country",
                "name": "IN"
            } : undefined,
            "jobLocationType": job.location === "Remote" ? "TELECOMMUTE" : undefined
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
