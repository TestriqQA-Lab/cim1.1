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
            title: "Account Audit & Research",
            description: "We analyze your current Facebook ad account, competitors, and market to identify opportunities and quick wins.",
            details: [
                "Account health check",
                "Competitor ad analysis",
                "Audience research",
                "Historical performance review",
                "Pixel & tracking audit",
            ],
            duration: "Week 1",
            color: "#3B82F6",
            gradient: "from-blue-500 to-blue-600",
        },
        {
            icon: Target,
            title: "Strategy & Audience Building",
            description: "Develop comprehensive targeting strategy with custom and lookalike audiences based on your best customers.",
            details: [
                "Customer persona mapping",
                "Custom audience creation",
                "Lookalike audience building",
                "Funnel strategy design",
                "Budget allocation plan",
            ],
            duration: "Week 2",
            color: "#8B5CF6",
            gradient: "from-violet-500 to-purple-600",
        },
        {
            icon: Palette,
            title: "Creative Development",
            description: "Design scroll-stopping ad creatives including images, videos, and copy that resonate with your target audience.",
            details: [
                "Ad creative design",
                "Video production",
                "Copywriting",
                "A/B test variants",
                "Landing page review",
            ],
            duration: "Week 2-3",
            color: "#EC4899",
            gradient: "from-pink-500 to-rose-600",
        },
        {
            icon: Rocket,
            title: "Campaign Launch",
            description: "Launch optimized campaigns with proper structure, bidding strategies, and tracking setup for maximum performance.",
            details: [
                "Campaign structure setup",
                "Bid strategy configuration",
                "Conversion tracking",
                "Attribution setup",
                "Quality assurance",
            ],
            duration: "Week 3",
            color: "#F59E0B",
            gradient: "from-amber-500 to-orange-600",
        },
        {
            icon: BarChart3,
            title: "Optimization & Scaling",
            description: "Continuous optimization based on real data. We identify winners, kill losers, and scale what works.",
            details: [
                "Performance monitoring",
                "Budget reallocation",
                "Creative refresh",
                "Audience expansion",
                "ROAS optimization",
            ],
            duration: "Ongoing",
            color: "#10B981",
            gradient: "from-emerald-500 to-green-600",
        },
        {
            icon: RefreshCw,
            title: "Reporting & Iteration",
            description: "Regular performance reports with actionable insights. We iterate and improve based on data and learnings.",
            details: [
                "Weekly performance reports",
                "Monthly strategy review",
                "Quarterly planning",
                "ROI analysis",
                "Growth roadmap updates",
            ],
            duration: "Monthly",
            color: "#06B6D4",
            gradient: "from-cyan-500 to-teal-600",
        },
    ];

    return (
        <section id="process" className="py-24 relative overflow-hidden bg-background">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                        <Zap className="w-4 h-4 text-blue-500" />
                        <span className="text-sm font-medium text-blue-500">6-Step Framework</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Our Facebook Ads</span>{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Process
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        A proven 6-step methodology to launch, optimize, and scale profitable Facebook advertising campaigns.
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
                                {/* Outer glow effect */}
                                <div
                                    className={`
                                        absolute -inset-1 rounded-3xl opacity-0 blur-2xl transition-all duration-500
                                        ${isHovered ? "opacity-20" : ""}
                                    `}
                                    style={{
                                        background: `linear-gradient(135deg, ${step.color}, transparent)`,
                                    }}
                                />

                                <div
                                    className={`
                                        relative p-8 rounded-3xl border backdrop-blur-sm
                                        transition-all duration-500 h-full overflow-hidden
                                        ${isHovered ? "shadow-2xl scale-[1.03]" : "shadow-lg"}
                                    `}
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: isHovered ? step.color : "var(--border-color)",
                                    }}
                                >
                                    {/* Gradient overlay on hover */}
                                    <div
                                        className={`
                                            absolute inset-0 opacity-0 transition-opacity duration-500
                                            ${isHovered ? "opacity-[0.03]" : ""}
                                        `}
                                        style={{
                                            background: `linear-gradient(135deg, ${step.color}, transparent)`,
                                        }}
                                    />

                                    {/* Animated corner accent */}
                                    <div
                                        className={`
                                            absolute top-0 right-0 w-20 h-20 rounded-bl-full transition-all duration-500
                                            ${isHovered ? "opacity-10 scale-100" : "opacity-0 scale-0"}
                                        `}
                                        style={{ backgroundColor: step.color }}
                                    />

                                    {/* Step Number Badge */}
                                    <div
                                        className={`
                                            absolute -top-2 -left-2 w-12 h-12 rounded-2xl flex items-center justify-center 
                                            text-white font-bold shadow-lg transition-all duration-500
                                            ${isHovered ? "scale-110 rotate-12" : "scale-100 rotate-0"}
                                        `}
                                        style={{
                                            background: `linear-gradient(135deg, ${step.color}, ${step.color}DD)`,
                                        }}
                                    >
                                        <span className="text-lg">{idx + 1}</span>

                                        {/* Pulse ring on hover */}
                                        {isHovered && (
                                            <div
                                                className="absolute inset-0 rounded-2xl animate-ping"
                                                style={{
                                                    backgroundColor: step.color,
                                                    opacity: 0.3,
                                                }}
                                            />
                                        )}
                                    </div>

                                    <div className="relative z-10">
                                        {/* Icon and Duration Row */}
                                        <div className="flex items-center justify-between gap-3 mb-6">
                                            <div
                                                className={`
                                                    w-14 h-14 rounded-2xl flex items-center justify-center
                                                    transition-all duration-500
                                                    ${isHovered ? "scale-110 -rotate-6" : "scale-100 rotate-0"}
                                                `}
                                                style={{
                                                    background: isHovered
                                                        ? `linear-gradient(135deg, ${step.color}, ${step.color}CC)`
                                                        : `${step.color}15`,
                                                }}
                                            >
                                                <Icon
                                                    className={`
                                                        w-7 h-7 transition-all duration-500
                                                        ${isHovered ? "scale-110" : "scale-100"}
                                                    `}
                                                    style={{
                                                        color: isHovered ? "white" : step.color,
                                                    }}
                                                />
                                            </div>

                                            {/* Duration Badge */}
                                            <div
                                                className={`
                                                    flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold
                                                    transition-all duration-500
                                                    ${isHovered ? "scale-105" : "scale-100"}
                                                `}
                                                style={{
                                                    backgroundColor: isHovered ? `${step.color}20` : `${step.color}10`,
                                                    color: step.color,
                                                }}
                                            >
                                                <Clock className="w-3 h-3" />
                                                {step.duration}
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className={`
                                                text-xl font-bold mb-3 transition-all duration-500
                                            `}
                                            style={{
                                                color: isHovered ? step.color : "var(--foreground)",
                                            }}
                                        >
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p
                                            className="text-sm mb-6 leading-relaxed"
                                            style={{ color: "var(--secondary-text)" }}
                                        >
                                            {step.description}
                                        </p>

                                        {/* Details List - Always Visible */}
                                        <div className="space-y-3">
                                            {step.details.map((detail, dIdx) => (
                                                <div
                                                    key={dIdx}
                                                    className={`
                                                        flex items-start gap-3 transition-all duration-300
                                                        ${isHovered ? "translate-x-1" : "translate-x-0"}
                                                    `}
                                                    style={{
                                                        transitionDelay: isHovered ? `${dIdx * 40}ms` : "0ms",
                                                    }}
                                                >
                                                    <div
                                                        className={`
                                                            mt-0.5 w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0
                                                            transition-all duration-300
                                                            ${isHovered ? "scale-110 rotate-90" : "scale-100 rotate-0"}
                                                        `}
                                                        style={{
                                                            backgroundColor: isHovered ? `${step.color}25` : `${step.color}15`,
                                                            transitionDelay: isHovered ? `${dIdx * 40}ms` : "0ms",
                                                        }}
                                                    >
                                                        <CheckCircle2
                                                            className="w-3.5 h-3.5"
                                                            style={{ color: step.color }}
                                                        />
                                                    </div>
                                                    <span
                                                        className={`
                                                            text-sm leading-relaxed transition-all duration-300
                                                            ${isHovered ? "font-medium" : ""}
                                                        `}
                                                        style={{
                                                            color: "var(--secondary-text)",
                                                        }}
                                                    >
                                                        {detail}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Bottom Progress Bar */}
                                        <div
                                            className="mt-6 pt-6 border-t"
                                            style={{
                                                borderColor: isHovered ? `${step.color}20` : "var(--border-color)",
                                            }}
                                        >
                                            <div className="relative h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                                                <div
                                                    className={`
                                                        absolute inset-y-0 left-0 rounded-full transition-all duration-700
                                                        ${isHovered ? "w-full" : "w-0"}
                                                    `}
                                                    style={{
                                                        background: `linear-gradient(90deg, ${step.color}, ${step.color}AA)`,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decorative dots */}
                                    {isHovered && (
                                        <>
                                            <div
                                                className="absolute top-4 right-4 w-2 h-2 rounded-full animate-pulse"
                                                style={{ backgroundColor: step.color, opacity: 0.4 }}
                                            />
                                            <div
                                                className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full animate-pulse"
                                                style={{
                                                    backgroundColor: step.color,
                                                    opacity: 0.4,
                                                    animationDelay: "0.5s",
                                                }}
                                            />
                                        </>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA Section */}
                <div className="mt-16 text-center">
                    <div
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)",
                        }}
                    >
                        <RefreshCw className="w-4 h-4 text-blue-500 animate-spin" style={{ animationDuration: "3s" }} />
                        <span className="text-sm" style={{ color: "var(--secondary-text)" }}>
                            Process iterates continuously based on performance data
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}