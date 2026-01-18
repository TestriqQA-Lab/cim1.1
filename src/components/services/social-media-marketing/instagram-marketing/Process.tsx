"use client";

import { useState } from "react";
import {
    Search,
    Target,
    Palette,
    Rocket,
    BarChart3,
    RefreshCw,
    CheckCircle2,
    Clock,
    Zap,
} from "lucide-react";

export default function Process() {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    const steps = [
        {
            icon: Search,
            title: "Profile Audit & Research",
            description: "Analyze your current Instagram presence, competitors, and target audience to identify growth opportunities.",
            details: [
                "Profile optimization",
                "Competitor analysis",
                "Hashtag research",
                "Content gap analysis",
                "Audience personas",
            ],
            duration: "Week 1",
            color: "#E1306C",
        },
        {
            icon: Target,
            title: "Strategy Development",
            description: "Create a comprehensive content strategy including themes, posting schedule, and growth tactics.",
            details: [
                "Content pillars",
                "Posting calendar",
                "Hashtag strategy",
                "Engagement tactics",
                "Growth roadmap",
            ],
            duration: "Week 2",
            color: "#C13584",
        },
        {
            icon: Palette,
            title: "Content Creation",
            description: "Produce scroll-stopping content including Reels, carousels, Stories, and feed posts.",
            details: [
                "Visual design",
                "Reels production",
                "Carousel creation",
                "Caption writing",
                "Story templates",
            ],
            duration: "Week 2-3",
            color: "#833AB4",
        },
        {
            icon: Rocket,
            title: "Launch & Publishing",
            description: "Execute the content calendar with optimal timing and strategic hashtag deployment.",
            details: [
                "Scheduled posting",
                "Story sequencing",
                "Hashtag rotation",
                "Cross-promotion",
                "Engagement windows",
            ],
            duration: "Week 3",
            color: "#F77737",
        },
        {
            icon: BarChart3,
            title: "Community Management",
            description: "Build genuine relationships through active engagement, DM management, and community growth.",
            details: [
                "Comment replies",
                "DM management",
                "Community engagement",
                "Influencer outreach",
                "UGC curation",
            ],
            duration: "Ongoing",
            color: "#405DE6",
        },
        {
            icon: RefreshCw,
            title: "Analyze & Optimize",
            description: "Track performance metrics and continuously refine strategy based on data insights.",
            details: [
                "Performance reports",
                "Content analysis",
                "A/B testing",
                "Trend adaptation",
                "Strategy refinement",
            ],
            duration: "Monthly",
            color: "#FD1D1D",
        },
    ];

    return (
        <section id="process" className="py-24 relative overflow-hidden bg-background">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ background: "rgba(225, 48, 108, 0.05)" }} />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ background: "rgba(193, 53, 132, 0.05)", animationDelay: "1.5s" }} />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: "linear-gradient(135deg, rgba(225, 48, 108, 0.1), rgba(193, 53, 132, 0.1))", border: "1px solid rgba(225, 48, 108, 0.2)" }}>
                        <Zap className="w-4 h-4" style={{ color: "#E1306C" }} />
                        <span className="text-sm font-medium" style={{ color: "#E1306C" }}>6-Step Framework</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Our Instagram</span>{" "}
                        <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 bg-clip-text text-transparent">
                            Process
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        A proven methodology to grow your Instagram presence and drive meaningful engagement.
                    </p>
                </div>

                {/* Process Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        const isHovered = hoveredStep === idx;

                        return (
                            <div
                                key={idx}
                                className="relative group"
                                onMouseEnter={() => setHoveredStep(idx)}
                                onMouseLeave={() => setHoveredStep(null)}
                            >
                                {/* Glow */}
                                <div
                                    className={`absolute -inset-1 rounded-3xl opacity-0 blur-2xl transition-all duration-500 ${isHovered ? "opacity-20" : ""}`}
                                    style={{ background: `linear-gradient(135deg, ${step.color}, transparent)` }}
                                />

                                <div
                                    className={`relative p-8 rounded-3xl border backdrop-blur-sm transition-all duration-500 h-full overflow-hidden ${isHovered ? "shadow-2xl scale-[1.03]" : "shadow-lg"}`}
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: isHovered ? step.color : "var(--border-color)",
                                    }}
                                >
                                    {/* Corner accent */}
                                    <div
                                        className={`absolute top-0 right-0 w-20 h-20 rounded-bl-full transition-all duration-500 ${isHovered ? "opacity-10 scale-100" : "opacity-0 scale-0"}`}
                                        style={{ backgroundColor: step.color }}
                                    />

                                    {/* Step Number */}
                                    <div
                                        className={`absolute -top-2 -left-2 w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg transition-all duration-500 ${isHovered ? "scale-110 rotate-12" : "scale-100 rotate-0"}`}
                                        style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}DD)` }}
                                    >
                                        <span className="text-lg">{idx + 1}</span>
                                    </div>

                                    <div className="relative z-10">
                                        {/* Icon and Duration */}
                                        <div className="flex items-center justify-between gap-3 mb-6">
                                            <div
                                                className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${isHovered ? "scale-110 -rotate-6" : "scale-100 rotate-0"}`}
                                                style={{
                                                    background: isHovered ? `linear-gradient(135deg, ${step.color}, ${step.color}CC)` : `${step.color}15`,
                                                }}
                                            >
                                                <Icon className={`w-7 h-7 transition-all duration-500 ${isHovered ? "scale-110" : "scale-100"}`} style={{ color: isHovered ? "white" : step.color }} />
                                            </div>

                                            <div
                                                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-500 ${isHovered ? "scale-105" : "scale-100"}`}
                                                style={{ backgroundColor: `${step.color}15`, color: step.color }}
                                            >
                                                <Clock className="w-3 h-3" />
                                                {step.duration}
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold mb-3 transition-all duration-500" style={{ color: isHovered ? step.color : "var(--foreground)" }}>
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm mb-6 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                            {step.description}
                                        </p>

                                        {/* Details */}
                                        <div className="space-y-3">
                                            {step.details.map((detail, dIdx) => (
                                                <div
                                                    key={dIdx}
                                                    className={`flex items-start gap-3 transition-all duration-300 ${isHovered ? "translate-x-1" : "translate-x-0"}`}
                                                    style={{ transitionDelay: isHovered ? `${dIdx * 40}ms` : "0ms" }}
                                                >
                                                    <div
                                                        className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isHovered ? "scale-110" : "scale-100"}`}
                                                        style={{ backgroundColor: `${step.color}15` }}
                                                    >
                                                        <CheckCircle2 className="w-3.5 h-3.5" style={{ color: step.color }} />
                                                    </div>
                                                    <span className={`text-sm leading-relaxed transition-all duration-300 ${isHovered ? "font-medium" : ""}`} style={{ color: "var(--secondary-text)" }}>
                                                        {detail}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="mt-6 pt-6 border-t" style={{ borderColor: isHovered ? `${step.color}20` : "var(--border-color)" }}>
                                            <div className="relative h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                                                <div
                                                    className={`absolute inset-y-0 left-0 rounded-full transition-all duration-700 ${isHovered ? "w-full" : "w-0"}`}
                                                    style={{ background: `linear-gradient(90deg, ${step.color}, ${step.color}AA)` }}
                                                />
                                            </div>
                                        </div>
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
