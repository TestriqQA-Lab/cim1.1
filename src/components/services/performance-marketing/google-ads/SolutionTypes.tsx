"use client";

import { useState } from "react";
import { Target, Users, ShoppingBag, Building, Briefcase, Globe } from "lucide-react";

export default function SolutionTypes() {
    const [flippedCard, setFlippedCard] = useState<number | null>(null);

    // Google Ads brand colors
    const googleBlue = "#4285f4";
    const googleGreen = "#34a853";
    const googleYellow = "#fbbc04";
    const googleRed = "#ea4335";

    const solutions = [
        {
            icon: ShoppingBag,
            title: "E-commerce",
            frontDescription: "Shopping and Performance Max campaigns that drive product sales.",
            backDetails: ["Product feed management", "Dynamic remarketing", "Smart Shopping", "ROAS optimization"],
            color: googleBlue,
        },
        {
            icon: Building,
            title: "Lead Generation",
            frontDescription: "Search campaigns optimized for high-quality leads and conversions.",
            backDetails: ["Form optimization", "Call tracking", "Lead scoring", "CRM integration"],
            color: googleGreen,
        },
        {
            icon: Users,
            title: "Brand Awareness",
            frontDescription: "Display and YouTube campaigns that build brand recognition.",
            backDetails: ["Custom audiences", "Affinity targeting", "Frequency capping", "Viewability tracking"],
            color: googleYellow,
        },
        {
            icon: Briefcase,
            title: "B2B Marketing",
            frontDescription: "Targeting decision-makers with search and display campaigns.",
            backDetails: ["Industry targeting", "Company size filters", "LinkedIn integration", "ABM campaigns"],
            color: googleRed,
        },
        {
            icon: Globe,
            title: "Local Business",
            frontDescription: "Drive foot traffic and local leads with geo-targeted campaigns.",
            backDetails: ["Local search ads", "Google Maps ads", "Location extensions", "Store visit tracking"],
            color: googleBlue,
        },
        {
            icon: Target,
            title: "Remarketing",
            frontDescription: "Re-engage website visitors and past customers across Google.",
            backDetails: ["RLSA campaigns", "Dynamic ads", "Customer match", "Similar audiences"],
            color: googleGreen,
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--card-bg)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Solutions for <span style={{ color: googleBlue }}>Every Business</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Tailored Google Ads strategies for your specific industry and goals.
                    </p>
                </div>

                {/* Flip Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, idx) => (
                        <div
                            key={idx}
                            className="relative h-64 cursor-pointer perspective-1000"
                            onMouseEnter={() => setFlippedCard(idx)}
                            onMouseLeave={() => setFlippedCard(null)}
                            style={{ perspective: "1000px" }}
                        >
                            <div
                                className="relative w-full h-full transition-transform duration-700"
                                style={{
                                    transformStyle: "preserve-3d",
                                    transform: flippedCard === idx ? "rotateY(180deg)" : "rotateY(0deg)",
                                }}
                            >
                                {/* Front */}
                                <div
                                    className="absolute inset-0 p-6 rounded-2xl border flex flex-col justify-center items-center text-center"
                                    style={{
                                        backgroundColor: "var(--background)",
                                        borderColor: "var(--border-color)",
                                        backfaceVisibility: "hidden",
                                    }}
                                >
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                                        style={{ backgroundColor: `${solution.color}15` }}
                                    >
                                        <solution.icon className="w-8 h-8" style={{ color: solution.color }} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                        {solution.title}
                                    </h3>
                                    <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                        {solution.frontDescription}
                                    </p>
                                </div>

                                {/* Back */}
                                <div
                                    className="absolute inset-0 p-6 rounded-2xl border flex flex-col justify-center"
                                    style={{
                                        backgroundColor: solution.color,
                                        borderColor: solution.color,
                                        backfaceVisibility: "hidden",
                                        transform: "rotateY(180deg)",
                                    }}
                                >
                                    <h4 className="text-lg font-bold mb-4 text-white">{solution.title}</h4>
                                    <ul className="space-y-2">
                                        {solution.backDetails.map((detail, dIdx) => (
                                            <li key={dIdx} className="flex items-center gap-2 text-white/90 text-sm">
                                                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
