"use client";

import { useState } from "react";
import {
    Zap,
    Shield,
    Award,
    HeartHandshake,
    Users,
    Clock,
} from "lucide-react";

export default function WhyChooseUs() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const reasons = [
        {
            icon: Zap,
            title: "Native Performance",
            description: "Pure Swift and SwiftUI development ensures your app runs at peak performance with smooth 60fps animations and instant responsiveness.",
            gradient: "from-[#007AFF] to-[#5AC8FA]",
            shadowColor: "rgba(0, 122, 255, 0.3)",
        },
        {
            icon: Shield,
            title: "Apple Guidelines Expertise",
            description: "Deep understanding of Human Interface Guidelines and App Store requirements ensures approval on first submission.",
            gradient: "from-[#5AC8FA] to-[#007AFF]",
            shadowColor: "rgba(90, 200, 250, 0.3)",
        },
        {
            icon: Award,
            title: "App Store Success",
            description: "Our apps consistently achieve high ratings and featured placements on the App Store with proven ASO strategies.",
            gradient: "from-[#0055D4] to-[#007AFF]",
            shadowColor: "rgba(0, 85, 212, 0.3)",
        },
        {
            icon: HeartHandshake,
            title: "Dedicated iOS Team",
            description: "Work with a team of certified iOS developers who live and breathe Apple technologies and best practices.",
            gradient: "from-[#007AFF] to-[#0055D4]",
            shadowColor: "rgba(0, 122, 255, 0.3)",
        },
        {
            icon: Users,
            title: "Enterprise Experience",
            description: "Proven track record building iOS apps for startups to enterprises with millions of users worldwide.",
            gradient: "from-[#5AC8FA] to-[#0055D4]",
            shadowColor: "rgba(90, 200, 250, 0.3)",
        },
        {
            icon: Clock,
            title: "Ongoing Support",
            description: "Comprehensive post-launch support with regular updates, iOS version compatibility, and feature enhancements.",
            gradient: "from-[#0055D4] to-[#5AC8FA]",
            shadowColor: "rgba(0, 85, 212, 0.3)",
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
                    style={{ background: "linear-gradient(135deg, #007AFF, #5AC8FA)" }}
                />
                <div
                    className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full opacity-10 blur-3xl"
                    style={{ background: "linear-gradient(135deg, #5AC8FA, #007AFF)" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Why Choose Us for</span>{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #007AFF, #5AC8FA)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            iOS Development
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Partner with iOS specialists who understand the Apple ecosystem inside and out.
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
                                        borderColor: isHovered ? "#007AFF" : "var(--border-color)",
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
                                            color: isHovered ? "#007AFF" : "var(--foreground)",
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
