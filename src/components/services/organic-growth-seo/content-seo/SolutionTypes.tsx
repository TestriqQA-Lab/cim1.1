"use client";

import { useState } from "react";
import {
    Briefcase,
    ShoppingBag,
    Laptop,
    GraduationCap,
    HeartPulse,
    Gavel,
    Sparkles,
} from "lucide-react";

export default function SolutionTypes() {
    const [activeCard, setActiveCard] = useState<number | null>(null);

    // Content SEO Emerald theme color
    const contentEmerald = "#10b981";

    const solutions = [
        {
            id: "b2b",
            title: "B2B Technology",
            description: "Technical whitepapers, case studies, and thought leadership articles.",
            icon: Briefcase,
            color: contentEmerald,
        },
        {
            id: "ecommerce",
            title: "E-commerce",
            description: "Product descriptions, buying guides, and category page content.",
            icon: ShoppingBag,
            color: "#3B82F6",
        },
        {
            id: "saas",
            title: "SaaS Companies",
            description: "Feature guides, documentation, and user onboarding flows.",
            icon: Laptop,
            color: "#F59E0B",
        },
        {
            id: "education",
            title: "EdTech & Courses",
            description: "Educational guides, course curriculums, and student resources.",
            icon: GraduationCap,
            color: "#8B5CF6",
        },
        {
            id: "health",
            title: "Healthcare",
            description: "Patient education, medical articles, and compliance-focused content.",
            icon: HeartPulse,
            color: "#EF4444",
        },
        {
            id: "legal",
            title: "Legal & Finance",
            description: "Authoritative, accurate advice and industry commentary.",
            icon: Gavel,
            color: "#6366F1",
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
                            backgroundColor: `${contentEmerald}15`,
                            borderColor: `${contentEmerald}40`,
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: contentEmerald }} />
                        <span className="text-sm font-medium" style={{ color: contentEmerald }}>
                            Industry Solutions
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Industries We <span style={{ color: contentEmerald }}>Serve</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Specialized content strategies tailored to your industry's unique tone and audience.
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
                                        ${isActive ? "scale-[1.02] shadow-2xl" : ""}
                                    `}
                                    style={{
                                        borderColor: isActive ? solution.color : "var(--border-color)",
                                        backgroundColor: "var(--card-bg)",
                                        transformStyle: "preserve-3d",
                                    }}
                                >
                                    {/* Icon with scaling background */}
                                    <div className="relative mb-6 flex justify-between items-start">
                                        <div
                                            className={`
                                                w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500
                                                ${isActive ? "scale-110" : ""}
                                            `}
                                            style={{
                                                backgroundColor: isActive ? solution.color : `${solution.color}15`,
                                            }}
                                        >
                                            <Icon
                                                className="w-7 h-7 transition-all duration-300"
                                                style={{
                                                    color: isActive ? "white" : solution.color,
                                                }}
                                            />
                                        </div>

                                        {/* Number indicator */}
                                        <div
                                            className="text-2xl font-bold opacity-10 transition-all duration-500 group-hover:opacity-30 group-hover:scale-125"
                                            style={{ color: solution.color }}
                                        >
                                            0{idx + 1}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3
                                            className="text-xl font-bold mb-3 transition-transform duration-500 group-hover:translate-x-2"
                                            style={{ color: "var(--foreground)" }}
                                        >
                                            {solution.title}
                                        </h3>
                                        <p
                                            className="leading-relaxed transition-opacity duration-300"
                                            style={{
                                                color: "var(--secondary-text)",
                                                opacity: isActive ? 1 : 0.8
                                            }}
                                        >
                                            {solution.description}
                                        </p>
                                    </div>

                                    {/* Bottom border line */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 bg-current transition-all duration-500"
                                        style={{
                                            backgroundColor: solution.color,
                                            width: isActive ? "100%" : "0%"
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
