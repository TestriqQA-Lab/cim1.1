"use client";

import { useState } from "react";
import {
    Award,
    Target,
    Layers,
    Zap,
    HeadphonesIcon,
    TrendingUp,
} from "lucide-react";

export default function WhyChooseUs() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const reasons = [
        {
            icon: Award,
            title: "Certified Partners",
            description:
                "Official Shopify and WooCommerce experts with proven track records and certifications.",
            gradient: "from-[#96bf48] to-[#5c8a1e]",
        },
        {
            icon: Target,
            title: "Conversion Focused",
            description:
                "Every design decision is made to drive sales. We optimize for revenue, not just aesthetics.",
            gradient: "from-[#5c8a1e] to-[#b4d97c]",
        },
        {
            icon: Layers,
            title: "Full-Stack Capability",
            description:
                "Frontend, backend, and integrations - we handle everything in-house for seamless delivery.",
            gradient: "from-[#96bf48] to-[#b4d97c]",
        },
        {
            icon: Zap,
            title: "Performance Obsessed",
            description:
                "Fast-loading stores that rank well in search and convert better. Speed is revenue.",
            gradient: "from-[#b4d97c] to-[#96bf48]",
        },
        {
            icon: HeadphonesIcon,
            title: "Ongoing Support",
            description:
                "Maintenance, updates, and growth support. We're your long-term e-commerce partner.",
            gradient: "from-[#5c8a1e] to-[#96bf48]",
        },
        {
            icon: TrendingUp,
            title: "Proven Results",
            description:
                "100+ successful store launches with measurable increases in sales and conversions.",
            gradient: "from-[#96bf48] to-[#5c8a1e]",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* CSS Animations */}
            <style jsx>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                @keyframes glow-pulse {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.6; }
                }
                .card-shimmer::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        90deg,
                        transparent,
                        rgba(150, 191, 72, 0.1),
                        transparent
                    );
                    animation: shimmer 2s infinite;
                    pointer-events: none;
                }
            `}</style>

            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/3 -left-20 w-72 h-72 rounded-full opacity-5 blur-3xl"
                    style={{ backgroundColor: "#96bf48" }}
                />
                <div
                    className="absolute bottom-1/3 -right-20 w-72 h-72 rounded-full opacity-5 blur-3xl"
                    style={{ backgroundColor: "#5c8a1e" }}
                />
            </div>

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
                        <Zap className="w-4 h-4" style={{ color: "#96bf48" }} />
                        <span className="text-sm font-medium" style={{ color: "#96bf48" }}>
                            Why Work With Us
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Your{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #96bf48, #5c8a1e)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            E-commerce
                        </span>{" "}
                        Experts
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        We specialize in building e-commerce stores that
                        drive revenue, not just traffic.
                    </p>
                </div>

                {/* Reasons Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, idx) => {
                        const Icon = reason.icon;
                        const isHovered = hoveredIndex === idx;

                        return (
                            <div
                                key={idx}
                                className="group relative"
                                onMouseEnter={() => setHoveredIndex(idx)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Glow effect behind card */}
                                <div
                                    className={`
                                        absolute -inset-1 rounded-3xl blur-xl transition-all duration-500
                                        ${isHovered ? "opacity-30" : "opacity-0"}
                                    `}
                                    style={{
                                        background: "linear-gradient(135deg, #96bf48, #5c8a1e)",
                                    }}
                                />

                                {/* Card */}
                                <div
                                    className={`
                                        relative p-6 rounded-2xl border overflow-hidden
                                        transition-all duration-500 ease-out
                                        ${isHovered ? "shadow-2xl -translate-y-3 scale-[1.02]" : "shadow-md"}
                                        ${isHovered ? "card-shimmer" : ""}
                                    `}
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: isHovered ? "#96bf4850" : "var(--border-color)",
                                    }}
                                >
                                    {/* Corner accent */}
                                    <div
                                        className={`
                                            absolute -top-10 -right-10 w-20 h-20 rounded-full
                                            transition-all duration-500 blur-2xl
                                            ${isHovered ? "opacity-40 scale-150" : "opacity-10"}
                                        `}
                                        style={{ backgroundColor: "#96bf48" }}
                                    />

                                    {/* Icon Container */}
                                    <div className="relative mb-4">
                                        <div
                                            className={`
                                                w-14 h-14 rounded-xl flex items-center justify-center
                                                transition-all duration-500
                                                ${isHovered ? "scale-110 rotate-6" : ""}
                                            `}
                                            style={{
                                                background: "linear-gradient(135deg, #96bf48, #5c8a1e)",
                                                boxShadow: isHovered ? "0 8px 24px rgba(150, 191, 72, 0.5)" : "0 4px 16px rgba(150, 191, 72, 0.3)",
                                            }}
                                        >
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>

                                        {/* Animated ring on hover */}
                                        <div
                                            className={`
                                                absolute inset-0 w-14 h-14 rounded-xl border-2
                                                transition-all duration-500
                                                ${isHovered ? "scale-125 opacity-50" : "scale-100 opacity-0"}
                                            `}
                                            style={{ borderColor: "#96bf48" }}
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="text-xl font-bold mb-2 transition-all duration-300"
                                        style={{
                                            color: isHovered ? "#96bf48" : "var(--foreground)",
                                        }}
                                    >
                                        {reason.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className={`
                                            text-sm leading-relaxed transition-all duration-300
                                            ${isHovered ? "translate-x-1" : ""}
                                        `}
                                        style={{ color: "var(--secondary-text)" }}
                                    >
                                        {reason.description}
                                    </p>

                                    {/* Bottom accent line */}
                                    <div
                                        className={`
                                            absolute bottom-0 left-0 h-1 rounded-b-2xl transition-all duration-500
                                            ${isHovered ? "w-full" : "w-0"}
                                        `}
                                        style={{
                                            background: "linear-gradient(90deg, #96bf48, #5c8a1e)",
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
