"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Target, Users, BarChart2, Briefcase } from "lucide-react";

export default function SolutionTypes() {
    const [activeCard, setActiveCard] = useState<number | null>(null);

    // Microsoft brand colors
    const msBlue = "#0078D4";

    const solutions = [
        {
            title: "B2B Targeting",
            icon: Briefcase,
            frontDescription: "Reach decision-makers via LinkedIn profile targeting on search.",
            backDescription: "Target by Company, Job Function, and Industry directly within your search campaigns to capture high-value B2B leads.",
            stats: "2x Higher Conv. Rate via LinkedIn Data",
            color: "#0077B5", // LinkedIn Blue
        },
        {
            title: "Audience Intelligence",
            icon: Users,
            frontDescription: "Connect with users across the Microsoft Audience Network.",
            backDescription: "Leverage Microsoft's graph to reach users on Outlook, Edge, and MSN with high accuracy intent signals.",
            stats: "900M+ Monthly Users",
            color: "#107C10", // Green
        },
        {
            title: "Desktop Dominance",
            icon: Target,
            frontDescription: "Capture the high-converting desktop traffic segment.",
            backDescription: "Microsoft Search Network has significant desktop market share, often capturing users with higher purchasing power.",
            stats: "24% Desktop Market Share",
            color: "#FFB900", // Yellow
        },
        {
            title: "Cross-Channel",
            icon: BarChart2,
            frontDescription: "Unified reporting across Search and Native.",
            backDescription: "Manage and optimize your campaigns holistically to drive efficiency and incrementally across channels.",
            stats: "Unified Attribution",
            color: "#D83B01", // Red
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Strategic{" "}
                        <span
                            style={{ color: msBlue }}
                        >
                            Advantages
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Unique capabilities that set Microsoft Advertising apart.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {solutions.map((solution, idx) => (
                        <div
                            key={idx}
                            className="relative h-[300px] perspective-1000 group cursor-pointer"
                            onMouseEnter={() => setActiveCard(idx)}
                            onMouseLeave={() => setActiveCard(null)}
                        >
                            <div
                                className="w-full h-full transition-all duration-700 relative"
                                style={{
                                    transformStyle: "preserve-3d",
                                    transform: activeCard === idx ? "rotateY(180deg)" : "rotateY(0deg)",
                                }}
                            >
                                {/* Front Side */}
                                <div
                                    className="absolute inset-0 rounded-2xl p-8 border flex flex-col justify-between"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: "var(--border-color)",
                                        backfaceVisibility: "hidden",
                                        WebkitBackfaceVisibility: "hidden", // For Safari support
                                    }}
                                >
                                    <div>
                                        <div
                                            className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                                            style={{ backgroundColor: `${solution.color}15` }}
                                        >
                                            <solution.icon className="w-8 h-8" style={{ color: solution.color }} />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                            {solution.title}
                                        </h3>
                                        <p className="text-lg" style={{ color: "var(--secondary-text)" }}>
                                            {solution.frontDescription}
                                        </p>
                                    </div>
                                    <div className="flex items-center text-sm font-semibold" style={{ color: solution.color }}>
                                        Uncover Details <ArrowRight className="w-4 h-4 ml-2" />
                                    </div>
                                </div>

                                {/* Back Side */}
                                <div
                                    className="absolute inset-0 rounded-2xl p-8 border flex flex-col justify-between"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: solution.color,
                                        transform: "rotateY(180deg)",
                                        boxShadow: `0 10px 40px ${solution.color}15`,
                                        backfaceVisibility: "hidden",
                                        WebkitBackfaceVisibility: "hidden",
                                    }}
                                >
                                    <div>
                                        <h3 className="text-xl font-bold mb-4" style={{ color: solution.color }}>
                                            {solution.title}
                                        </h3>
                                        <p className="text-base leading-relaxed mb-6" style={{ color: "var(--secondary-text)" }}>
                                            {solution.backDescription}
                                        </p>
                                        <div
                                            className="inline-block px-4 py-2 rounded-lg text-sm font-semibold"
                                            style={{
                                                backgroundColor: `${solution.color}10`,
                                                color: solution.color
                                            }}
                                        >
                                            {solution.stats}
                                        </div>
                                    </div>
                                    <div className="flex items-center text-sm mb-0 mt-auto" style={{ color: "var(--secondary-text)" }}>
                                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Overview
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
