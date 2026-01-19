"use client";

import { useState } from "react";
import {
    Search,
    PenTool,
    Film,
    Rocket,
    LineChart,
    RefreshCcw,
    CheckCircle2,
    Clock,
    Zap,
} from "lucide-react";

export default function Process() {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    const youtubeRed = "#FF0000";

    const steps = [
        {
            icon: Search,
            title: "Channel & Audience Audit",
            description: "Deep dive into your current channel performance, audience demographics, and competitor landscape.",
            details: [
                "Channel health check",
                "Competitor analysis",
                "Audience research",
                "Keyword opportunities",
                "Content gap analysis",
            ],
            duration: "Week 1",
            color: "#FF0000",
        },
        {
            icon: PenTool,
            title: "Strategy & Scripting",
            description: "Develop a data-driven content strategy and write compelling scripts optimized for retention.",
            details: [
                "Content pillars",
                "Video ideation",
                "Scriptwriting",
                "Storyboard creation",
                "Offer crafting",
            ],
            duration: "Week 2",
            color: "#CC0000",
        },
        {
            icon: Film,
            title: "Production & Creative",
            description: "Produce high-quality video ads and organic content designed to stop the scroll.",
            details: [
                "Professional filming",
                "Motion graphics",
                "Voiceovers",
                "Thumbnail design",
                "Video editing",
            ],
            duration: "Week 2-3",
            color: "#FF0000",
        },
        {
            icon: Rocket,
            title: "Campaign Launch",
            description: "Set up and launch targeted YouTube ad campaigns with precise audience segmentation.",
            details: [
                "Account setup",
                "Audience targeting",
                "Bidding strategy",
                "Ad uploading",
                "Tracking setup",
            ],
            duration: "Week 3",
            color: "#CC0000",
        },
        {
            icon: LineChart,
            title: "Optimization & Growth",
            description: "Monitor performance metrics and optimize bids, creatives, and targeting for better ROI.",
            details: [
                "A/B testing",
                "Bid adjustments",
                "Audience refinement",
                "Creative rotation",
                "Conversion tracking",
            ],
            duration: "Ongoing",
            color: "#FF0000",
        },
        {
            icon: RefreshCcw,
            title: "Scaling & Reporting",
            description: "Scale winning campaigns and provide detailed reports on views, clicks, and conversions.",
            details: [
                "Budget scaling",
                "Market expansion",
                "Performance reports",
                "Strategy review",
                "Future planning",
            ],
            duration: "Monthly",
            color: "#CC0000",
        },
    ];

    return (
        <section id="process" className="py-24 relative overflow-hidden bg-background">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: `${youtubeRed}08` }} />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: `${youtubeRed}05`, animationDelay: "1.5s" }} />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: `${youtubeRed}15`, border: `1px solid ${youtubeRed}30` }}>
                        <Zap className="w-4 h-4" style={{ color: youtubeRed }} />
                        <span className="text-sm font-medium" style={{ color: youtubeRed }}>6-Step Growth Framework</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Our YouTube</span>{" "}
                        <span style={{ color: youtubeRed }}>
                            Process
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        From ideation to execution, we handle every aspect of your YouTube marketing success.
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
                                    style={{ backgroundColor: step.color }}
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
                                        className={`absolute top-0 right-0 w-20 h-20 rounded-bl-full transition-all duration-500 ${isHovered ? "opacity-20 scale-100" : "opacity-0 scale-0"}`}
                                        style={{ backgroundColor: step.color }}
                                    />

                                    {/* Step Number */}
                                    <div
                                        className={`absolute -top-2 -left-2 w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg transition-all duration-500 ${isHovered ? "scale-110 rotate-12" : "scale-100 rotate-0"}`}
                                        style={{ backgroundColor: step.color }}
                                    >
                                        <span className="text-lg">{idx + 1}</span>
                                    </div>

                                    <div className="relative z-10">
                                        {/* Icon and Duration */}
                                        <div className="flex items-center justify-between gap-3 mb-6">
                                            <div
                                                className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${isHovered ? "scale-110 -rotate-6" : "scale-100 rotate-0"}`}
                                                style={{
                                                    backgroundColor: isHovered ? step.color : `${step.color}15`,
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
                                        <div className="mt-6 pt-6 border-t" style={{ borderColor: isHovered ? `${step.color}30` : "var(--border-color)" }}>
                                            <div className="relative h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                                                <div
                                                    className={`absolute inset-y-0 left-0 rounded-full transition-all duration-700 ${isHovered ? "w-full" : "w-0"}`}
                                                    style={{ backgroundColor: step.color }}
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
