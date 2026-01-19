"use client";

import { useState } from "react";
import {
    Store,
    Building2,
    Newspaper,
    Globe2,
    Database,
    Layers,
} from "lucide-react";

export default function SolutionTypes() {
    const [activeCard, setActiveCard] = useState<number | null>(null);

    // Technical SEO Purple theme color
    const techPurple = "#8B5CF6";

    const solutions = [
        {
            id: "ecommerce",
            title: "E-commerce Platforms",
            description: "Product page indexation, faceted navigation, and large-scale crawl optimization.",
            icon: Store,
            color: techPurple,
        },
        {
            id: "enterprise",
            title: "Enterprise Websites",
            description: "Complex site architecture, multi-domain setups, and CDN configuration.",
            icon: Building2,
            color: "#3B82F6",
        },
        {
            id: "publishers",
            title: "Publishers & Media",
            description: "News SEO, AMP implementation, and high-volume content indexation.",
            icon: Newspaper,
            color: "#F59E0B",
        },
        {
            id: "saas",
            title: "SaaS Applications",
            description: "JavaScript rendering, dynamic content, and app shell architecture.",
            icon: Layers,
            color: "#22C55E",
        },
        {
            id: "international",
            title: "International Sites",
            description: "Multi-language setup, hreflang implementation, and geo-targeting.",
            icon: Globe2,
            color: "#EC4899",
        },
        {
            id: "database",
            title: "Database-Driven Sites",
            description: "Dynamic URL handling, pagination, and parameter management.",
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
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Industry <span style={{ color: techPurple }}>Solutions</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Specialized technical SEO strategies for different website types and platforms.
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
