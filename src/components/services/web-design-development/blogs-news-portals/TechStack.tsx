"use client";

import { useState } from "react";
import Image from "next/image";

export default function TechStack() {
    const [activeCategory, setActiveCategory] = useState(0);

    const technologies = [
        {
            category: "CMS Platforms",
            description: "Powerful content management systems for easy publishing",
            items: [
                { name: "WordPress", logo: "/images/techstack_logos/wordpress-logo.svg" },
                { name: "Strapi", logo: "/images/techstack_logos/Strapi-logo.png" },
                { name: "Sanity", logo: "/images/techstack_logos/Sanity-square-logo.png" },
                { name: "Contentful", logo: "/images/techstack_logos/Contentful-logo.webp" },
            ],
        },
        {
            category: "Frontend Frameworks",
            description: "Modern frameworks for fast, SEO-friendly rendering",
            items: [
                { name: "Next.js", logo: "/images/techstack_logos/nextjs-logo.svg" },
                { name: "React", logo: "/images/techstack_logos/react-logo.svg" },
                { name: "Tailwind CSS", logo: "/images/techstack_logos/tailwindcss-logo.svg" },
                { name: "TypeScript", logo: "/images/techstack_logos/typescript-logo.svg" },
            ],
        },
        {
            category: "Analytics & SEO",
            description: "Tools for tracking performance and optimizing content",
            items: [
                { name: "Google Analytics", logo: "/images/techstack_logos/google-tag-manager-logo.svg" },
                { name: "Mixpanel", logo: "/images/techstack_logos/mixpanel-logo.png" },
                { name: "Hotjar", logo: "/images/techstack_logos/Hotjar-logo.png" },
                { name: "Segment", logo: "/images/techstack_logos/Segment-logo.png" },
            ],
        },
        {
            category: "Hosting & CDN",
            description: "Fast, reliable hosting for global audiences",
            items: [
                { name: "Vercel", logo: "/images/techstack_logos/vercel-logo.webp" },
                { name: "Netlify", logo: "/images/techstack_logos/netlify-logo.svg" },
                { name: "Cloudflare", logo: "/images/techstack_logos/Cloudflare-logo.webp" },
                { name: "AWS", logo: "/images/techstack_logos/aws-logo.png" },
            ],
        },
        {
            category: "Email & Marketing",
            description: "Newsletter and marketing automation tools",
            items: [
                { name: "Mailchimp", logo: "/images/ai_automation_logos/mailchimp-logo.svg" },
                { name: "HubSpot", logo: "/images/ai_automation_logos/hubspot-logo.png" },
                { name: "SendGrid", logo: "/images/techstack_logos/SendGrid-logo.png" },
                { name: "Klaviyo", logo: "/images/techstack_logos/Klaviyo-logo.png" },
            ],
        },
    ];

    return (
        <section
            className="py-20 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Powered by <span style={{ color: "#a855f7" }}>Modern Tech</span>
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We use industry-leading technologies to build fast, scalable, and easy-to-manage content platforms.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto mt-6 rounded-full"
                        style={{ background: "linear-gradient(90deg, #a855f7, #ec4899)" }}
                    />
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {technologies.map((tech, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveCategory(idx)}
                            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === idx ? "scale-105 shadow-lg" : "hover:scale-105"
                                }`}
                            style={{
                                background: activeCategory === idx
                                    ? "linear-gradient(135deg, #a855f7, #ec4899)"
                                    : "var(--card-bg)",
                                color: activeCategory === idx ? "white" : "var(--secondary-text)",
                                border: `1px solid ${activeCategory === idx ? "transparent" : "var(--border-color)"}`,
                            }}
                        >
                            {tech.category}
                        </button>
                    ))}
                </div>

                {/* Logo Display */}
                <div
                    className="p-8 rounded-3xl border transition-all duration-300"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                    }}
                >
                    <p className="text-center mb-8" style={{ color: "var(--secondary-text)" }}>
                        {technologies[activeCategory].description}
                    </p>

                    <div className="flex flex-wrap justify-center items-start gap-8 md:gap-12">
                        {technologies[activeCategory].items.map((item, lidx) => (
                            <div
                                key={lidx}
                                className="flex flex-col items-center gap-3 transition-all duration-300 hover:scale-110"
                            >
                                <div
                                    className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center p-4 rounded-2xl"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, #a855f7 5%, var(--background))",
                                    }}
                                >
                                    <Image
                                        src={item.logo}
                                        alt={`${item.name} logo`}
                                        fill
                                        className="object-contain p-3 filter dark:brightness-90"
                                    />
                                </div>
                                <span
                                    className="text-xs md:text-sm font-medium text-center"
                                    style={{ color: "var(--secondary-text)" }}
                                >
                                    {item.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tech Highlights */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                    {[
                        { label: "Page Speed", value: "95+" },
                        { label: "SEO Score", value: "90+" },
                        { label: "Uptime", value: "99.9%" },
                        { label: "Security", value: "A+" },
                    ].map((stat, idx) => (
                        <div
                            key={idx}
                            className="text-center p-6 rounded-2xl border"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                            }}
                        >
                            <div
                                className="text-3xl font-bold mb-2"
                                style={{ color: "#a855f7" }}
                            >
                                {stat.value}
                            </div>
                            <div className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
