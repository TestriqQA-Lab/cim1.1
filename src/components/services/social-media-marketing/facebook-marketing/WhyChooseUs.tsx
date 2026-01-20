"use client";

import { useState } from "react";
import {
    Award,
    TrendingUp,
    Users,
    Shield,
    Zap,
    HeadphonesIcon,
    Sparkles,
} from "lucide-react";

export default function WhyChooseUs() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const reasons = [
        {
            icon: Award,
            title: "Meta Business Partner",
            description: "Certified Meta Business Partner with direct access to Meta support, beta features, and advanced training.",
            shadowColor: "rgba(24, 119, 242, 0.3)",
        },
        {
            icon: TrendingUp,
            title: "Proven ROAS Results",
            description: "Our clients average 5-10x return on ad spend. We focus on profitability, not just vanity metrics.",
            shadowColor: "rgba(24, 119, 242, 0.3)",
        },
        {
            icon: Users,
            title: "Dedicated Account Team",
            description: "A dedicated strategist, media buyer, and creative designer work on your account for seamless execution.",
            shadowColor: "rgba(24, 119, 242, 0.3)",
        },
        {
            icon: Shield,
            title: "Full Transparency",
            description: "Real-time dashboard access, weekly calls, and detailed reports. You own your ad account and data.",
            shadowColor: "rgba(24, 119, 242, 0.3)",
        },
        {
            icon: Zap,
            title: "Fast & Agile",
            description: "Quick campaign launches and rapid iterations. We respond to data and market changes in real-time.",
            shadowColor: "rgba(24, 119, 242, 0.3)",
        },
        {
            icon: HeadphonesIcon,
            title: "Ongoing Support",
            description: "Continuous optimization, creative refresh, and strategic guidance to maintain peak performance.",
            shadowColor: "rgba(24, 119, 242, 0.3)",
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
                    style={{ backgroundColor: "#1877F2" }}
                />
                <div
                    className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full opacity-10 blur-3xl"
                    style={{ backgroundColor: "#1877F2" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(24, 119, 242, 0.1)",
                            borderColor: "rgba(24, 119, 242, 0.2)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "#1877F2" }} />
                        <span className="text-sm font-medium" style={{ color: "#1877F2" }}>
                            Why Choose Us
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Why Choose Us for</span>{" "}
                        <span style={{ color: "#1877F2" }}>
                            Facebook Ads
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Partner with a team that delivers real results, not just impressions.
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
                                    style={{ backgroundColor: "rgba(24, 119, 242, 0.2)" }}
                                />

                                {/* Card */}
                                <div
                                    className={`
                                        relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden
                                        ${isHovered ? "shadow-2xl" : ""}
                                    `}
                                    style={{
                                        backgroundColor: "var(--background)",
                                        borderColor: isHovered ? "#1877F2" : "var(--border-color)",
                                        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                                    }}
                                >
                                    {/* Icon */}
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500"
                                        style={{
                                            backgroundColor: "#1877F2",
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
                                            color: isHovered ? "#1877F2" : "var(--foreground)",
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
                                        className="absolute bottom-0 left-0 h-1 transition-all duration-500"
                                        style={{
                                            width: isHovered ? "100%" : "0%",
                                            backgroundColor: "#1877F2",
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
