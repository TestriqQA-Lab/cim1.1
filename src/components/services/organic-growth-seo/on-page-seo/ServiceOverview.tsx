"use client";

import { useState } from "react";
import {
    FileText,
    Type,
    Image as ImageIcon,
    Link2,
    Gauge,
    Code,
} from "lucide-react";

export default function ServiceOverview() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // SEO Green theme color
    const seoGreen = "#22C55E";

    const services = [
        {
            icon: Type,
            title: "Title Tag Optimization",
            description: "Crafting compelling, keyword-rich title tags that improve click-through rates and rankings.",
            color: seoGreen,
        },
        {
            icon: FileText,
            title: "Meta Description Writing",
            description: "Creating persuasive meta descriptions that encourage clicks from search results.",
            color: "#3B82F6",
        },
        {
            icon: ImageIcon,
            title: "Image Optimization",
            description: "Alt text, compression, and proper formatting for faster load times and accessibility.",
            color: "#F59E0B",
        },
        {
            icon: Link2,
            title: "Internal Linking Strategy",
            description: "Strategic internal links to distribute page authority and improve site navigation.",
            color: "#8B5CF6",
        },
        {
            icon: Gauge,
            title: "Core Web Vitals",
            description: "Optimizing LCP, FID, and CLS for better user experience and search rankings.",
            color: "#EC4899",
        },
        {
            icon: Code,
            title: "Schema Markup",
            description: "Implementing structured data for rich snippets and enhanced search visibility.",
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
                    className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl animate-pulse"
                    style={{
                        backgroundColor: seoGreen,
                        animationDuration: "4s",
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
                                backgroundColor: `${seoGreen}10`,
                                borderColor: `${seoGreen}30`,
                                color: seoGreen,
                            }}
                        >
                            Our Services
                        </span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        On-Page SEO{" "}
                        <span style={{ color: seoGreen }}>
                            Services
                        </span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Comprehensive on-page optimization to help search engines understand and rank your content.
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
                                            background: `radial-gradient(circle at top right, ${service.color}, transparent)`,
                                        }}
                                    />

                                    {/* Icon container */}
                                    <div className="relative mb-6">
                                        <div
                                            className={`
                                                w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500
                                                ${isHovered ? "scale-110" : "scale-100"}
                                            `}
                                            style={{
                                                backgroundColor: isHovered ? service.color : "var(--background)",
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
