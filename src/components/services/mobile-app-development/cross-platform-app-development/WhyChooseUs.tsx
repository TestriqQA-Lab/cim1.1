"use client";

import { useState } from "react";
import {
    Zap,
    DollarSign,
    Clock,
    Users,
    RefreshCw,
    HeartHandshake,
} from "lucide-react";

export default function WhyChooseUs() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const reasons = [
        {
            icon: Zap,
            title: "70% Faster Development",
            description: "Single codebase means faster development, quicker iterations, and simultaneous releases on both platforms.",
            gradient: "from-[#667eea] to-[#764ba2]",
            shadowColor: "rgba(102, 126, 234, 0.3)",
        },
        {
            icon: DollarSign,
            title: "40% Cost Savings",
            description: "Build and maintain one codebase instead of two separate native apps, significantly reducing development costs.",
            gradient: "from-[#764ba2] to-[#667eea]",
            shadowColor: "rgba(118, 75, 162, 0.3)",
        },
        {
            icon: Clock,
            title: "Faster Time-to-Market",
            description: "Launch on iOS and Android simultaneously without waiting for separate development cycles to complete.",
            gradient: "from-[#00d4ff] to-[#667eea]",
            shadowColor: "rgba(0, 212, 255, 0.3)",
        },
        {
            icon: Users,
            title: "React & Flutter Experts",
            description: "Our team has deep expertise in both React Native and Flutter, choosing the best tool for your specific needs.",
            gradient: "from-[#667eea] to-[#00d4ff]",
            shadowColor: "rgba(102, 126, 234, 0.3)",
        },
        {
            icon: RefreshCw,
            title: "Easy Maintenance",
            description: "Update once, deploy everywhere. Bug fixes and new features are instantly available on both platforms.",
            gradient: "from-[#764ba2] to-[#00d4ff]",
            shadowColor: "rgba(118, 75, 162, 0.3)",
        },
        {
            icon: HeartHandshake,
            title: "Long-term Partnership",
            description: "We provide ongoing support, updates, and optimization to ensure your app evolves with platform changes.",
            gradient: "from-[#00d4ff] to-[#764ba2]",
            shadowColor: "rgba(0, 212, 255, 0.3)",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden"
            style={{ backgroundColor: "var(--card-bg)" }}
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute -top-48 -right-48 w-96 h-96 rounded-full opacity-10 blur-3xl"
                    style={{ background: "linear-gradient(135deg, #667eea, #764ba2)" }}
                />
                <div
                    className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full opacity-10 blur-3xl"
                    style={{ background: "linear-gradient(135deg, #764ba2, #00d4ff)" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Why Choose</span>{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #667eea, #764ba2)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Cross-Platform Development
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Maximize your reach while minimizing development time and costs with our expert cross-platform solutions.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, idx) => {
                        const Icon = reason.icon;
                        const isHovered = hoveredCard === idx;

                        return (
                            <div
                                key={idx}
                                className="relative cursor-pointer"
                                onMouseEnter={() => setHoveredCard(idx)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Glow Effect */}
                                <div
                                    className={`
                                        absolute -inset-1 rounded-3xl blur-xl transition-opacity duration-500
                                        ${isHovered ? "opacity-100" : "opacity-0"}
                                    `}
                                    style={{ background: reason.shadowColor }}
                                />

                                {/* Card */}
                                <div
                                    className={`
                                        relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden
                                        ${isHovered ? "shadow-2xl" : ""}
                                    `}
                                    style={{
                                        backgroundColor: "var(--background)",
                                        borderColor: isHovered ? "#667eea" : "var(--border-color)",
                                        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                                    }}
                                >
                                    {/* Icon */}
                                    <div
                                        className={`
                                            w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500
                                            bg-gradient-to-br ${reason.gradient}
                                        `}
                                        style={{
                                            transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
                                            boxShadow: isHovered ? `0 8px 24px ${reason.shadowColor}` : "none",
                                        }}
                                    >
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3
                                        className="text-xl font-bold mb-3 transition-colors duration-300"
                                        style={{
                                            color: isHovered ? "#667eea" : "var(--foreground)",
                                        }}
                                    >
                                        {reason.title}
                                    </h3>
                                    <p
                                        className="leading-relaxed"
                                        style={{ color: "var(--secondary-text)" }}
                                    >
                                        {reason.description}
                                    </p>

                                    {/* Bottom accent line */}
                                    <div
                                        className={`
                                            absolute bottom-0 left-0 h-1 transition-all duration-500
                                            bg-gradient-to-r ${reason.gradient}
                                        `}
                                        style={{
                                            width: isHovered ? "100%" : "0%",
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
