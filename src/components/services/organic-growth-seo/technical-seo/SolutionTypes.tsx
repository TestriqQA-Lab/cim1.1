"use client";

import { useState } from "react";
import {
    Store,
    Building2,
    Newspaper,
    Globe2,
    Database,
    Layers,
    Sparkles,
} from "lucide-react";

export default function SolutionTypes() {
    const [activeCard, setActiveCard] = useState<number | null>(null);

    // Technical SEO Purple theme color
    const techPurple = "#8B5CF6";

    const solutions = [
        {
            id: "ecommerce",
            title: "Technical SEO Audit for Ecommerce Websites",
            description: "Optimize large-scale catalogs. We handle technical SEO audit for ecommerce websites (Shopify, Magento), fixing faceted navigation issues and canonical tag errors to prevent duplicate content.",
            icon: Store,
            color: techPurple,
        },
        {
            id: "enterprise",
            title: "Technical SEO for Large Enterprise Websites",
            description: "Managing 100k+ pages? Our technical SEO for large enterprise websites focuses on crawl budget management and CDN configuration to maintain peak performance at scale.",
            icon: Building2,
            color: "#3B82F6",
        },
        {
            id: "publishers",
            title: "Technical SEO for News & Media Websites",
            description: "Timing is everything. We optimize Technical SEO for news websites with accelerated indexation strategies and News-optimized schema markup for top-story placement.",
            icon: Newspaper,
            color: "#F59E0B",
        },
        {
            id: "saas",
            title: "Technical SEO Services for SaaS Companies",
            description: "For software platforms, we specialize in JavaScript SEO optimization and server-side rendering for SEO, ensuring your dynamic app content is fully readable by Googlebot.",
            icon: Layers,
            color: "#22C55E",
        },
        {
            id: "international",
            title: "Technical SEO for International Markets",
            description: "We manage complex multi-language setups with robust hreflang tag implementation and localized server configurations for global performance.",
            icon: Globe2,
            color: "#EC4899",
        },
        {
            id: "database",
            title: "Technical SEO for Marketplace & Real Estate",
            description: "Handle millions of dynamic listings. Our technical SEO for real estate platforms and marketplaces ensures efficient crawling of fast-changing data sets.",
            icon: Database,
            color: "#06B6D4",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: `${techPurple}15`,
                            borderColor: `${techPurple}40`,
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: techPurple }} />
                        <span className="text-sm font-medium" style={{ color: techPurple }}>
                            Technical Solutions
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Tailored Technical SEO Audit for <span style={{ color: techPurple }}>Global Enterprises</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Different tech stacks and business models face unique challenges. We provide specialized technical SEO services for SaaS companies, e-commerce giants, and massive marketplace platforms.
                    </p>
                </div>

                {/* Solutions Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, idx) => {
                        const Icon = solution.icon;
                        const isActive = activeCard === idx;

                        return (
                            <div
                                key={solution.id}
                                className="group cursor-pointer"
                                onMouseEnter={() => setActiveCard(idx)}
                                onMouseLeave={() => setActiveCard(null)}
                            >
                                <div
                                    className={`
                                        relative h-full p-8 rounded-3xl border transition-all duration-500 overflow-hidden
                                        ${isActive ? "scale-[1.02] -translate-y-1" : ""}
                                    `}
                                    style={{
                                        borderColor: isActive ? solution.color : "var(--border-color)",
                                        backgroundColor: "var(--card-bg)",
                                        boxShadow: isActive ? `0 20px 40px ${solution.color}20` : "none"
                                    }}
                                >
                                    {/* Background gradient on hover */}
                                    <div
                                        className={`absolute inset-0 transition-opacity duration-500 ${isActive ? "opacity-5" : "opacity-0"}`}
                                        style={{
                                            background: `linear-gradient(135deg, ${solution.color}, transparent)`
                                        }}
                                    />

                                    {/* Icon with animated ring */}
                                    <div className="relative mb-6">
                                        <div
                                            className={`
                                                w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500
                                                ${isActive ? "rotate-6" : ""}
                                            `}
                                            style={{
                                                backgroundColor: isActive ? solution.color : `${solution.color}20`,
                                            }}
                                        >
                                            <Icon
                                                className="w-8 h-8 transition-all duration-300"
                                                style={{
                                                    color: isActive ? "white" : solution.color,
                                                }}
                                            />
                                        </div>
                                        {/* Animated ring */}
                                        <div
                                            className={`
                                                absolute inset-0 w-16 h-16 rounded-2xl border-2 transition-all duration-500
                                                ${isActive ? "scale-125 opacity-50" : "scale-100 opacity-0"}
                                            `}
                                            style={{ borderColor: solution.color }}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                            {solution.title}
                                        </h3>
                                        <p className="leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                            {solution.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
