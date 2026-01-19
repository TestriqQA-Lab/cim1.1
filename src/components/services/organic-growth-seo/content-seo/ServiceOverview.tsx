"use client";

import { useState } from "react";
import {
    Search,
    PenTool,
    Target,
    BarChart,
    Users,
    RefreshCw,
} from "lucide-react";

export default function ServiceOverview() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // Content SEO Emerald theme color
    const contentEmerald = "#10b981";

    const services = [
        {
            icon: Search,
            title: "Keyword Research",
            description: "Identifying high-value search terms that your target audience is actively searching for.",
            color: contentEmerald,
        },
        {
            icon: PenTool,
            title: "SEO Copywriting",
            description: "Crafting compelling content that satisfies user intent and search engine algorithms.",
            color: "#3B82F6",
        },
        {
            icon: Target,
            title: "Topic Clusters",
            description: "Building authoritative content hubs that cover subjects in-depth and boost topical authority.",
            color: "#F59E0B",
        },
        {
            icon: RefreshCw,
            title: "Content Optimization",
            description: "Revamping existing content to improve relevance, freshness, and ranking potential.",
            color: "#8B5CF6",
        },
        {
            icon: Users,
            title: "Audience Analysis",
            description: "Understanding your persona's pain points to create content that resonates.",
            color: "#EC4899",
        },
        {
            icon: BarChart,
            title: "Performance Tracking",
            description: "Monitoring content metrics to refine strategy and maximize ROI.",
            color: "#06B6D4",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden transition-colors duration-300 border-t"
            style={{
                backgroundColor: "var(--background)",
                borderColor: "#555555"
            }}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl animate-pulse"
                    style={{
                        backgroundColor: contentEmerald,
                        animationDuration: "5s",
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span
                            className="px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase border"
                            style={{
                                backgroundColor: `${contentEmerald}10`,
                                borderColor: `${contentEmerald}30`,
                                color: contentEmerald,
                            }}
                        >
                            Our Expertise
                        </span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Comprehensive Content <span style={{ color: contentEmerald }}>Services</span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        From strategy to execution, we handle every aspect of your content marketing engine.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        const isHovered = hoveredCard === idx;

                        return (
                            <div
                                key={idx}
                                className="group"
                                onMouseEnter={() => setHoveredCard(idx)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div
                                    className={`
                                        relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden h-full
                                        ${isHovered ? "-translate-y-2" : ""}
                                    `}
                                    style={{
                                        borderColor: isHovered ? service.color : "var(--border-color)",
                                        backgroundColor: "var(--card-bg)"
                                    }}
                                >
                                    {/* Hover Gradient BG */}
                                    <div
                                        className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-10" : ""}`}
                                        style={{
                                            background: `linear-gradient(135deg, ${service.color}, transparent)`,
                                        }}
                                    />

                                    {/* Icon container */}
                                    <div className="relative mb-6">
                                        <div
                                            className={`
                                                w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500
                                                ${isHovered ? "rounded-full rotate-90" : ""}
                                            `}
                                            style={{
                                                backgroundColor: isHovered ? service.color : "var(--background)",
                                                boxShadow: isHovered ? `0 10px 30px ${service.color}30` : "none"
                                            }}
                                        >
                                            <Icon
                                                className="w-8 h-8 transition-all duration-500"
                                                style={{
                                                    color: isHovered ? "white" : "var(--foreground)",
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3
                                        className="text-xl font-bold mb-3 transition-colors duration-300"
                                        style={{ color: "var(--foreground)" }}
                                    >
                                        {service.title}
                                    </h3>
                                    <p
                                        className="leading-relaxed"
                                        style={{ color: "var(--secondary-text)" }}
                                    >
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
