"use client";

import { FileSearch, PenTool, Edit3, CheckCircle2, TrendingUp, Share2 } from "lucide-react";

export default function Process() {
    // Content SEO Emerald theme color
    const contentEmerald = "#10b981";

    const steps = [
        {
            icon: FileSearch,
            title: "Discovery & Strategy",
            description: "Deep dive into your audience, competitors, and keywords to build a roadmap.",
        },
        {
            icon: PenTool,
            title: "Content Creation",
            description: "Expert writers craft engaging, authoritative content aligned with your brand voice.",
        },
        {
            icon: Edit3,
            title: "Editorial Review",
            description: "Rigorous editing for clarity, tone, accuracy, and SEO best practices.",
        },
        {
            icon: CheckCircle2,
            title: "Optimization",
            description: "Fine-tuning meta tags, internal links, headings, and readability scores.",
        },
        {
            icon: Share2,
            title: "Publishing & Distribution",
            description: "Scheduling content and promoting it across relevant channels for maximum reach.",
        },
        {
            icon: TrendingUp,
            title: "Performance Analysis",
            description: "Measuring impact and refining the strategy based on real user data.",
        },
    ];

    return (
        <section
            id="process"
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        The Content <span style={{ color: contentEmerald }}>Lifecycle</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        A systematic approach to creating content that compounds in value over time.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={idx}
                                className="group relative p-8 rounded-3xl border transition-all duration-300 hover:shadow-xl"
                                style={{
                                    borderColor: "var(--border-color)",
                                    backgroundColor: "var(--card-bg)"
                                }}
                            >
                                {/* Connector Line (Desktop) */}
                                {idx < steps.length - 1 && (idx + 1) % 3 !== 0 && (
                                    <div
                                        className="hidden lg:block absolute top-[4.5rem] -right-4 w-8 h-0.5 bg-gradient-to-r from-transparent to-transparent group-hover:from-emerald-500/50 group-hover:to-transparent transition-all"
                                        style={{ backgroundColor: "var(--border-color)", opacity: 0.2 }}
                                    />
                                )}

                                {/* Icon */}
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md transition-all duration-500 group-hover:rotate-12"
                                    style={{
                                        background: `linear-gradient(135deg, ${contentEmerald}, #059669)`,
                                        color: "white"
                                    }}
                                >
                                    <Icon className="w-8 h-8" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                    {step.title}
                                </h3>
                                <p className="leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                    {step.description}
                                </p>

                                {/* Step Indicator */}
                                <div
                                    className="absolute top-6 right-6 text-xs font-bold px-2 py-1 rounded border"
                                    style={{
                                        color: contentEmerald,
                                        borderColor: `${contentEmerald}30`,
                                        backgroundColor: `${contentEmerald}05`
                                    }}
                                >
                                    STEP {idx + 1}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
