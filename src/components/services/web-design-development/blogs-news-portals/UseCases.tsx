"use client";

import { useState } from "react";
import { Newspaper, Laptop, Coins, Heart, GraduationCap, Building2, ArrowUpRight } from "lucide-react";

export default function UseCases() {
    const [activeIndex, setActiveIndex] = useState(0);

    const industries = [
        {
            icon: Newspaper,
            title: "Media & Publishing",
            description: "High-traffic news sites and digital publications with real-time updates and breaking news capabilities.",
            metrics: ["50M+ monthly page views", "Sub-second load times", "Global CDN delivery"],
            bgColor: "#a855f7",
        },
        {
            icon: Laptop,
            title: "Technology",
            description: "Tech blogs and documentation sites that establish thought leadership and product authority.",
            metrics: ["Developer communities", "API documentation", "Product changelog"],
            bgColor: "#8b5cf6",
        },
        {
            icon: Coins,
            title: "Finance & Business",
            description: "Financial news portals and corporate blogs that build trust and drive business.",
            metrics: ["Market analysis", "Investment insights", "Regulatory compliance"],
            bgColor: "#7c3aed",
        },
        {
            icon: Heart,
            title: "Lifestyle & Wellness",
            description: "Engaging lifestyle blogs with rich media, recipes, and community features.",
            metrics: ["Visual storytelling", "Recipe databases", "Community forums"],
            bgColor: "#ec4899",
        },
        {
            icon: GraduationCap,
            title: "Education",
            description: "Educational content platforms and e-learning blogs with course integration.",
            metrics: ["Course promotion", "Student resources", "Instructor blogs"],
            bgColor: "#d946ef",
        },
        {
            icon: Building2,
            title: "Enterprise",
            description: "Corporate knowledge bases and internal communication platforms.",
            metrics: ["Multi-department", "SSO integration", "Compliance ready"],
            bgColor: "#c026d3",
        },
    ];

    return (
        <section
            className="py-20 transition-colors duration-300"
            style={{ backgroundColor: "color-mix(in srgb, #a855f7 2%, var(--background))" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Industry <span style={{ color: "#a855f7" }}>Use Cases</span>
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We&apos;ve built successful content platforms across diverse industries, each with unique requirements.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto mt-6 rounded-full"
                        style={{ background: "linear-gradient(90deg, #a855f7, #ec4899)" }}
                    />
                </div>

                {/* Industries Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry, idx) => {
                        const Icon = industry.icon;
                        const isActive = activeIndex === idx;

                        return (
                            <div
                                key={idx}
                                className="relative p-6 rounded-2xl border cursor-pointer transition-all duration-500 overflow-hidden group"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: isActive ? industry.bgColor : "var(--border-color)",
                                    transform: isActive ? "scale(1.02)" : "scale(1)",
                                    boxShadow: isActive ? `0 15px 30px -10px ${industry.bgColor}25` : "none"
                                }}
                                onMouseEnter={() => setActiveIndex(idx)}
                            >
                                {/* Background Gradient */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: `linear-gradient(135deg, ${industry.bgColor}08, ${industry.bgColor}15)`,
                                    }}
                                />

                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex items-start gap-4 mb-4">
                                        <div
                                            className="p-3 rounded-xl transition-all duration-300"
                                            style={{
                                                background: isActive
                                                    ? `linear-gradient(135deg, ${industry.bgColor}, #ec4899)`
                                                    : `${industry.bgColor}15`,
                                            }}
                                        >
                                            <Icon
                                                className="w-6 h-6 transition-colors"
                                                style={{ color: isActive ? "white" : industry.bgColor }}
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold" style={{ color: "var(--foreground)" }}>
                                                {industry.title}
                                            </h3>
                                        </div>
                                        <ArrowUpRight
                                            className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                            style={{ color: industry.bgColor }}
                                        />
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm mb-4" style={{ color: "var(--secondary-text)" }}>
                                        {industry.description}
                                    </p>

                                    {/* Metrics */}
                                    <div className="space-y-2">
                                        {industry.metrics.map((metric, midx) => (
                                            <div key={midx} className="flex items-center gap-2 text-xs">
                                                <div
                                                    className="w-1.5 h-1.5 rounded-full"
                                                    style={{ backgroundColor: industry.bgColor }}
                                                />
                                                <span style={{ color: "var(--secondary-text)" }}>{metric}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
