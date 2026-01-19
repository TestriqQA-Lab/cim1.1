"use client";

import { useState } from "react";
import {
    ShoppingBag,
    Tag,
    Layers,
    Code,
    Smartphone,
    TrendingUp,
} from "lucide-react";

export default function ServiceOverview() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // E-commerce SEO Light Blue theme color
    const commerceBlue = "#0EA5E9";

    const services = [
        {
            icon: ShoppingBag,
            title: "Product Optimization",
            description: "Crafting compelling titles and descriptions that rank for high-intent buyer keywords.",
            color: commerceBlue,
        },
        {
            icon: Layers,
            title: "Category Architecture",
            description: "Structuring tailored category pages to capture broad search intent and improve navigation.",
            color: "#8B5CF6",
        },
        {
            icon: Code,
            title: "Technical SEO",
            description: "Fixing crawl errors, optimizing site speed, and ensuring clean indexing for thousands of SKUs.",
            color: "#3B82F6",
        },
        {
            icon: Tag,
            title: "Schema Markup",
            description: "Implementing Product, Review, and Offer structured data to get rich snippets in search results.",
            color: "#F59E0B",
        },
        {
            icon: Smartphone,
            title: "Mobile Experience",
            description: "Ensuring a seamless, fast, and responsive shopping experience for mobile users.",
            color: "#10B981",
        },
        {
            icon: TrendingUp,
            title: "Conversion Optimization",
            description: "Aligning user experience with SEO to not just get traffic, but drive sales.",
            color: "#EF4444",
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
                    className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl animate-pulse"
                    style={{
                        backgroundColor: commerceBlue,
                        animationDuration: "6s",
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
                                backgroundColor: `${commerceBlue}10`,
                                borderColor: `${commerceBlue}30`,
                                color: commerceBlue,
                            }}
                        >
                            Our Services
                        </span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        E-commerce <span style={{ color: commerceBlue }}>Solutions</span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Holistic strategies to maximize visibility for every product in your catalog.
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
                                                ${isHovered ? "rounded-full" : ""}
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
