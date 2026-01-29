"use client";

import { useState } from "react";
import { CheckCircle, Zap, UserCheck, Search, Database, Globe, Sparkles } from "lucide-react";

export default function WhyChooseUs() {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    // Content SEO Emerald theme color
    const contentEmerald = "#10b981";

    const benefits = [
        {
            icon: CheckCircle,
            title: "Data-Driven Strategy",
            description: "We don't guess. We use data to identify exactly what your audience is searching for.",
        },
        {
            icon: UserCheck,
            title: "Subject Matter Experts",
            description: "Our writers aren't generalists. We match you with experts in your specific industry.",
        },
        {
            icon: Search,
            title: "SEO-First Approach",
            description: "Every piece of content is built to rank, with optimized structure and keywords.",
        },
        {
            icon: Zap,
            title: "Scalable Production",
            description: "We can scale from 4 to 40+ articles per month without compromising quality.",
        },
        {
            icon: Database,
            title: "Comprehensive Briefs",
            description: "Detailed content briefs ensure every article hits the mark before writing begins.",
        },
        {
            icon: Globe,
            title: "Holistic Growth",
            description: "We build ecosystem of content that lifts your entire domain authority.",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
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
                                Why Partner With Us
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                            Why Partner With <span style={{ color: contentEmerald }}>Us</span>
                        </h2>
                        <p className="text-lg mb-8 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                            We transform content from a cost center into a reliable revenue generator.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6">
                            <div
                                className="p-6 rounded-2xl border"
                                style={{ borderColor: "var(--border-color)", backgroundColor: "var(--card-bg)" }}
                            >
                                <h4 className="text-3xl font-bold mb-2" style={{ color: contentEmerald }}>5M+</h4>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Words Written</p>
                            </div>
                            <div
                                className="p-6 rounded-2xl border"
                                style={{ borderColor: "var(--border-color)", backgroundColor: "var(--card-bg)" }}
                            >
                                <h4 className="text-3xl font-bold mb-2" style={{ color: contentEmerald }}>$10M+</h4>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Revenue Driven</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        {benefits.map((benefit, idx) => {
                            const Icon = benefit.icon;
                            const isHovered = hoveredIdx === idx;

                            return (
                                <div
                                    key={idx}
                                    className="p-6 rounded-2xl border transition-all duration-300 cursor-pointer"
                                    style={{
                                        borderColor: isHovered ? contentEmerald : "var(--border-color)",
                                        backgroundColor: "var(--card-bg)",
                                        transform: isHovered ? "translateY(-4px)" : "none",
                                        boxShadow: isHovered ? `0 10px 30px ${contentEmerald}15` : "none"
                                    }}
                                    onMouseEnter={() => setHoveredIdx(idx)}
                                    onMouseLeave={() => setHoveredIdx(null)}
                                >
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                                        style={{
                                            backgroundColor: isHovered ? contentEmerald : `${contentEmerald}15`,
                                        }}
                                    >
                                        <Icon
                                            className="w-6 h-6 transition-colors duration-300"
                                            style={{ color: isHovered ? "white" : contentEmerald }}
                                        />
                                    </div>
                                    <h4 className="font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                        {benefit.title}
                                    </h4>
                                    <p className="text-sm leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                        {benefit.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
