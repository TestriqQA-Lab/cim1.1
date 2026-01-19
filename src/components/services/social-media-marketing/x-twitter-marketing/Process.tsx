"use client";

import { Search, PenTool, Calendar, Zap, BarChart, Rocket } from "lucide-react";

export default function Process() {
    const steps = [
        {
            icon: Search,
            title: "Audience Audit",
            description: "We analyze your current X presence, competitor landscape, and target audience conversations.",
        },
        {
            icon: PenTool,
            title: "Voice Development",
            description: "Crafting a unique, authentic brand voice that resonates with the fast-paced X culture.",
        },
        {
            icon: Calendar,
            title: "Content Calendar",
            description: "Planning a mix of viral threads, engaging polls, and timely responses to keep you top-of-mind.",
        },
        {
            icon: Zap,
            title: "Real-Time Engagement",
            description: "Active monitoring and immediate interaction with trending topics and follower mentions.",
        },
        {
            icon: Rocket,
            title: "Growth Acceleration",
            description: "Launching targeted ad campaigns and follower growth strategies to scale your reach.",
        },
        {
            icon: BarChart,
            title: "Analytics & Refinement",
            description: "Deep dive into engagement metrics to optimize tweet timing, formats, and ad spend.",
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
                        Our Proven <span style={{ color: "var(--secondary-text)" }}>Process</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        A data-backed framework to turn followers into loyal customers.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={idx}
                                className="group relative p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2"
                                style={{
                                    borderColor: "var(--border-color)",
                                    backgroundColor: "var(--card-bg)"
                                }}
                            >
                                {/* Step Number */}
                                <div className="absolute top-8 right-8 text-4xl font-bold transition-colors" style={{ color: "var(--border-color)" }}>
                                    0{idx + 1}
                                </div>

                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300"
                                    style={{
                                        backgroundColor: "var(--foreground)",
                                        color: "var(--background)"
                                    }}
                                >
                                    <Icon className="w-7 h-7" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                    {step.title}
                                </h3>
                                <p className="leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                    {step.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
