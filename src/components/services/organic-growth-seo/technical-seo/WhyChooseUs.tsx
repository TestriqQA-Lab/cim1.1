"use client";

import { useState } from "react";
import { CheckCircle, TrendingUp, Target, Award, Clock, Users, Sparkles } from "lucide-react";

export default function WhyChooseUs() {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    // Technical SEO Purple theme color
    const techPurple = "#8B5CF6";

    const benefits = [
        {
            icon: CheckCircle,
            title: "Deep Technical Expertise",
            description: "Years of experience solving complex technical SEO challenges.",
        },
        {
            icon: TrendingUp,
            title: "Measurable Improvements",
            description: "Clear metrics showing crawl efficiency and indexation gains.",
        },
        {
            icon: Target,
            title: "Root Cause Analysis",
            description: "We don't just fix symptoms - we solve underlying issues.",
        },
        {
            icon: Award,
            title: "Platform Expertise",
            description: "Experience with WordPress, Shopify, custom CMS, and more.",
        },
        {
            icon: Clock,
            title: "Fast Implementation",
            description: "Quick turnaround on critical technical fixes.",
        },
        {
            icon: Users,
            title: "Developer Collaboration",
            description: "We work seamlessly with your development team.",
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
                                backgroundColor: `${techPurple}15`,
                                borderColor: `${techPurple}40`,
                            }}
                        >
                            <Sparkles className="w-4 h-4" style={{ color: techPurple }} />
                            <span className="text-sm font-medium" style={{ color: techPurple }}>
                                Why Choose Us
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                            Why Choose <span style={{ color: techPurple }}>Us</span>
                        </h2>
                        <p className="text-lg mb-8 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                            We specialize in solving complex technical SEO challenges that
                            other agencies can't handle.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6">
                            <div
                                className="p-6 rounded-2xl border"
                                style={{ borderColor: "var(--border-color)", backgroundColor: "var(--card-bg)" }}
                            >
                                <h4 className="text-3xl font-bold mb-2" style={{ color: techPurple }}>1M+</h4>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Pages Crawled</p>
                            </div>
                            <div
                                className="p-6 rounded-2xl border"
                                style={{ borderColor: "var(--border-color)", backgroundColor: "var(--card-bg)" }}
                            >
                                <h4 className="text-3xl font-bold mb-2" style={{ color: techPurple }}>60%</h4>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Avg. Speed Boost</p>
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
                                        borderColor: isHovered ? techPurple : "var(--border-color)",
                                        backgroundColor: "var(--card-bg)",
                                        transform: isHovered ? "translateY(-4px)" : "none",
                                        boxShadow: isHovered ? `0 10px 30px ${techPurple}15` : "none"
                                    }}
                                    onMouseEnter={() => setHoveredIdx(idx)}
                                    onMouseLeave={() => setHoveredIdx(null)}
                                >
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                                        style={{
                                            backgroundColor: isHovered ? techPurple : `${techPurple}15`,
                                        }}
                                    >
                                        <Icon
                                            className="w-6 h-6 transition-colors duration-300"
                                            style={{ color: isHovered ? "white" : techPurple }}
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
