"use client";

import { useState } from "react";
import {
    Zap,
    Shield,
    Globe,
    Code2,
    HeadphonesIcon,
    TrendingUp,
} from "lucide-react";

export default function WhyChooseUs() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const reasons = [
        {
            icon: Zap,
            title: "Next.js Experts Since v9",
            description:
                "We've been building with Next.js since early versions, evolving with every major release from Pages to App Router.",
            gradient: "from-[#61dafb] to-[#00d4ff]",
        },
        {
            icon: Shield,
            title: "Type-Safe First",
            description:
                "Every project starts with TypeScript and strict type checking. Catch bugs at compile time, not runtime.",
            gradient: "from-[#00d4ff] to-[#61dafb]",
        },
        {
            icon: Globe,
            title: "SEO Specialists",
            description:
                "Our SSR and SSG implementations consistently achieve 100 Lighthouse SEO scores and top search rankings.",
            gradient: "from-[#61dafb] to-[#00d4ff]",
        },
        {
            icon: Code2,
            title: "Clean Architecture",
            description:
                "Scalable folder structures, reusable components, and maintainable code patterns that grow with your business.",
            gradient: "from-[#00d4ff] to-[#61dafb]",
        },
        {
            icon: TrendingUp,
            title: "Performance Obsessed",
            description:
                "Sub-second load times, optimal Core Web Vitals, and efficient bundle sizes through code splitting.",
            gradient: "from-[#61dafb] to-[#00d4ff]",
        },
        {
            icon: HeadphonesIcon,
            title: "Ongoing Support",
            description:
                "We don't just launch and leave. Continuous monitoring, updates, and support to keep your app running smoothly.",
            gradient: "from-[#00d4ff] to-[#61dafb]",
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
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
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
                        rgba(97, 218, 251, 0.1),
                        transparent
                    );
                    animation: shimmer 2s infinite;
                    pointer-events: none;
                }
                .icon-glow {
                    animation: glow-pulse 2s ease-in-out infinite;
                }
            `}</style>

            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/3 -left-20 w-72 h-72 rounded-full opacity-5 blur-3xl"
                    style={{ backgroundColor: "#61dafb" }}
                />
                <div
                    className="absolute bottom-1/3 -right-20 w-72 h-72 rounded-full opacity-5 blur-3xl"
                    style={{ backgroundColor: "#00d4ff" }}
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
                        <Zap className="w-4 h-4" style={{ color: "#61dafb" }} />
                        <span className="text-sm font-medium" style={{ color: "#61dafb" }}>
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
                                background: "linear-gradient(135deg, #61dafb, #00d4ff)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            React
                        </span>{" "}
                        Experts
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        We specialize in building high-performance Next.js applications
                        that scale with your business and delight your users.
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
                                style={{
                                    animationDelay: `${idx * 100}ms`,
                                }}
                            >
                                {/* Glow effect behind card */}
                                <div
                                    className={`
                                        absolute -inset-1 rounded-3xl blur-xl transition-all duration-500
                                        ${isHovered ? "opacity-30" : "opacity-0"}
                                    `}
                                    style={{
                                        background: `linear-gradient(135deg, #61dafb, #00d4ff)`,
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
                                        borderColor: isHovered ? "#61dafb50" : "var(--border-color)",
                                    }}
                                >
                                    {/* Corner accent */}
                                    <div
                                        className={`
                                            absolute -top-10 -right-10 w-20 h-20 rounded-full
                                            transition-all duration-500 blur-2xl
                                            ${isHovered ? "opacity-40 scale-150" : "opacity-10"}
                                        `}
                                        style={{ backgroundColor: "#61dafb" }}
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
                                                background: "linear-gradient(135deg, #61dafb, #00d4ff)",
                                                boxShadow: isHovered ? "0 8px 24px rgba(97, 218, 251, 0.5)" : "0 4px 16px rgba(97, 218, 251, 0.3)",
                                            }}
                                        >
                                            <Icon className="w-7 h-7 text-black" />
                                        </div>

                                        {/* Animated ring on hover */}
                                        <div
                                            className={`
                                                absolute inset-0 w-14 h-14 rounded-xl border-2
                                                transition-all duration-500
                                                ${isHovered ? "scale-125 opacity-50" : "scale-100 opacity-0"}
                                            `}
                                            style={{ borderColor: "#61dafb" }}
                                        />

                                        {/* Orbiting dot */}
                                        {isHovered && (
                                            <div
                                                className="absolute w-2 h-2 rounded-full animate-spin"
                                                style={{
                                                    backgroundColor: "#61dafb",
                                                    top: "-4px",
                                                    left: "50%",
                                                    transformOrigin: "0 35px",
                                                    animationDuration: "2s",
                                                }}
                                            />
                                        )}
                                    </div>

                                    {/* Title with gradient on hover */}
                                    <h3
                                        className={`
                                            text-xl font-bold mb-2 transition-all duration-300
                                        `}
                                        style={{
                                            color: isHovered ? "#61dafb" : "var(--foreground)",
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
                                            background: "linear-gradient(90deg, #61dafb, #00d4ff)",
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
