"use client";

import { useState } from "react";
import { TrendingUp, Users, Zap, Search, Globe, DollarSign, Sparkles } from "lucide-react";

export default function WhyChooseUs() {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    // E-commerce SEO Light Blue theme color
    const commerceBlue = "#0EA5E9";

    const reasons = [
        {
            icon: DollarSign,
            title: "Revenue First",
            description: "We focus on ranking keywords that drive sales, not just vanity traffic metrics.",
        },
        {
            icon: Search,
            title: "Scalable Strategy",
            description: "Programmatic approaches to optimize thousands of SKU pages efficiently.",
        },
        {
            icon: Zap,
            title: "Technical Expertise",
            description: "We speak perfectly with developers to fix critical site speed and crawling issues.",
        },
        {
            icon: Globe,
            title: "Multi-Platform Pros",
            description: "Deep experience with Shopify, Magento, BigCommerce, and Headless builds.",
        },
        {
            icon: Users,
            title: "UX Integrated",
            description: "We optimize for both search bots and human shoppers to maximize conversions.",
        },
        {
            icon: TrendingUp,
            title: "Data-Driven Decisions",
            description: "Every move is backed by deep analytics and competitor intelligence.",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Header Area */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-24">
                            {/* Badge */}
                            <div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                                style={{
                                    backgroundColor: `${commerceBlue}15`,
                                    borderColor: `${commerceBlue}40`,
                                }}
                            >
                                <Sparkles className="w-4 h-4" style={{ color: commerceBlue }} />
                                <span className="text-sm font-medium" style={{ color: commerceBlue }}>
                                    Why Choose Us
                                </span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                                Why Top Brands <br />
                                <span style={{ color: commerceBlue }}>Choose Us</span>
                            </h2>
                            <p className="text-lg mb-8 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                E-commerce SEO is a different beast. You need a partner who understands merchandise, not just metadata.
                            </p>

                            <div
                                className="p-6 rounded-2xl border bg-opacity-50 backdrop-blur-sm"
                                style={{
                                    borderColor: `${commerceBlue}30`,
                                    backgroundColor: `${commerceBlue}05`
                                }}
                            >
                                <div className="text-4xl font-bold mb-2" style={{ color: commerceBlue }}>35%</div>
                                <p style={{ color: "var(--secondary-text)" }}>Average increase in organic revenue in first 6 months.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Grid */}
                    <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
                        {reasons.map((reason, idx) => {
                            const Icon = reason.icon;
                            const isHovered = hoveredIdx === idx;

                            return (
                                <div
                                    key={idx}
                                    className="p-8 rounded-3xl border transition-all duration-300"
                                    style={{
                                        borderColor: isHovered ? commerceBlue : "var(--border-color)",
                                        backgroundColor: "var(--card-bg)",
                                        transform: isHovered ? "translateY(-5px)" : "none",
                                        boxShadow: isHovered ? `0 10px 30px ${commerceBlue}10` : "none"
                                    }}
                                    onMouseEnter={() => setHoveredIdx(idx)}
                                    onMouseLeave={() => setHoveredIdx(null)}
                                >
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
                                        style={{
                                            backgroundColor: isHovered ? commerceBlue : `${commerceBlue}15`,
                                            color: isHovered ? "white" : commerceBlue
                                        }}
                                    >
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                        {reason.title}
                                    </h4>
                                    <p className="leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                        {reason.description}
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
