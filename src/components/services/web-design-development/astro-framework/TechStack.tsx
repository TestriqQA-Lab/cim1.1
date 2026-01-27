"use client";

import { useState } from "react";
import { Rocket, Layers, FileText, Palette, Cloud } from "lucide-react";
import Image from "next/image";

export default function TechStack() {
    const [activeCategory, setActiveCategory] = useState(0);

    const categories = [
        {
            id: "core",
            title: "Core Technologies",
            icon: Rocket,
            description: "Astro ecosystem fundamentals",
            technologies: [
                { name: "Astro", description: "Web Framework", logo: "/images/techstack_logos/Astro-logo.svg" },
                { name: "TypeScript", description: "Type Safety", logo: "/images/techstack_logos/typescript-logo.svg" },
                { name: "JavaScript", description: "Core Language", logo: "/images/techstack_logos/javascript-logo.svg" },
                { name: "HTML5", description: "Semantic Markup", logo: "/images/techstack_logos/html5-logo.svg" },
                { name: "CSS3", description: "Modern Styling", logo: "/images/techstack_logos/css3-logo.svg" },
            ],
        },
        {
            id: "frameworks",
            title: "UI Frameworks",
            icon: Layers,
            description: "Component frameworks for islands",
            technologies: [
                { name: "React", description: "UI Library", logo: "/images/techstack_logos/react-logo.svg" },
                { name: "Vue.js", description: "Progressive Framework", logo: "/images/techstack_logos/vuejs-logo.svg" },
                { name: "Svelte", description: "Compiler Framework", logo: "/images/techstack_logos/Svelte-Logo.png" },
                { name: "Solid.js", description: "Reactive Framework", logo: "/images/techstack_logos/solidjs-logo.png" },
                { name: "Preact", description: "Lightweight React", logo: "/images/techstack_logos/Preact-logo.png" },
            ],
        },
        {
            id: "content",
            title: "Content & CMS",
            icon: FileText,
            description: "Content management solutions",
            technologies: [
                { name: "MDX", description: "Markdown + JSX", logo: "/images/techstack_logos/mdx-logo.webp" },
                { name: "Markdown", description: "Content Format", logo: "/images/techstack_logos/Markdown-logo.png" },
                { name: "Contentful", description: "Headless CMS", logo: "/images/techstack_logos/Contentful-logo.webp" },
                { name: "Sanity", description: "Content Platform", logo: "/images/techstack_logos/Sanity-square-logo.png" },
                { name: "Strapi", description: "Open Source CMS", logo: "/images/techstack_logos/Strapi-logo.png" },
            ],
        },
        {
            id: "styling",
            title: "Styling",
            icon: Palette,
            description: "CSS and design systems",
            technologies: [
                { name: "Tailwind CSS", description: "Utility Framework", logo: "/images/techstack_logos/tailwindcss-logo.svg" },
                { name: "Sass/SCSS", description: "CSS Preprocessor", logo: "/images/techstack_logos/Sass-SCSS-logo.png" },
                { name: "CSS Modules", description: "Scoped Styles", logo: "/images/techstack_logos/css3-logo.svg" },
                { name: "PostCSS", description: "CSS Processing", logo: "/images/techstack_logos/PostCSS-Logo.png" },
            ],
        },
        {
            id: "deployment",
            title: "Deployment",
            icon: Cloud,
            description: "Hosting and deployment",
            technologies: [
                { name: "Vercel", description: "Edge Deployment", logo: "/images/techstack_logos/vercel-logo.webp" },
                { name: "Netlify", description: "Web Platform", logo: "/images/techstack_logos/netlify-logo.svg" },
                { name: "Cloudflare", description: "Edge Network", logo: "/images/techstack_logos/Cloudflare-logo.webp" },
                { name: "GitHub Pages", description: "Static Hosting", logo: "/images/techstack_logos/github-logo1.webp" },
            ],
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden transition-colors duration-300"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)",
                        }}
                    >
                        <Rocket className="w-4 h-4" style={{ color: "#7C3AED" }} />
                        <span className="text-sm font-medium" style={{ color: "#7C3AED" }}>
                            Our Tech Stack
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        The{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Astro
                        </span>{" "}
                        Ecosystem
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Astro integrates seamlessly with your favorite tools and frameworks.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
                    {categories.map((category, idx) => {
                        const Icon = category.icon;
                        const isActive = activeCategory === idx;

                        return (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(idx)}
                                className={`
                                    flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm
                                    transition-all duration-300
                                    ${isActive ? "scale-105" : "hover:scale-105"}
                                `}
                                style={{
                                    backgroundColor: isActive ? "#7C3AED" : "var(--card-bg)",
                                    color: isActive ? "#fff" : "var(--foreground)",
                                    border: `2px solid ${isActive ? "#7C3AED" : "var(--border-color)"}`,
                                    boxShadow: isActive ? "0 4px 16px rgba(124, 58, 237, 0.4)" : "none",
                                }}
                            >
                                <Icon className="w-4 h-4" />
                                <span className="hidden sm:inline">{category.title}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Active Category Content */}
                <div
                    className="rounded-2xl sm:rounded-3xl border p-4 sm:p-8 md:p-12 mb-8"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                    }}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                        {categories[activeCategory].technologies.map((tech, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl border transition-all duration-300 hover:shadow-lg"
                                style={{
                                    backgroundColor: "var(--background)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                {/* Logo */}
                                <div
                                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden"
                                    style={{
                                        backgroundColor: tech.logo ? "transparent" : "rgba(124, 58, 237, 0.1)",
                                    }}
                                >
                                    {tech.logo ? (
                                        <Image
                                            src={tech.logo}
                                            alt={tech.name}
                                            width={40}
                                            height={40}
                                            className="object-contain"
                                        />
                                    ) : (
                                        <span
                                            className="text-lg font-bold"
                                            style={{ color: "#7C3AED" }}
                                        >
                                            {tech.name.charAt(0)}
                                        </span>
                                    )}
                                </div>

                                {/* Text */}
                                <div className="flex-1 min-w-0">
                                    <p
                                        className="font-semibold truncate"
                                        style={{ color: "#7C3AED" }}
                                    >
                                        {tech.name}
                                    </p>
                                    <p
                                        className="text-sm truncate"
                                        style={{ color: "var(--secondary-text)" }}
                                    >
                                        {tech.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
