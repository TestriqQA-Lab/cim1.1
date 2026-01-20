"use client";

import { useState } from "react";
import {
    ShoppingBag,
    Monitor,
    GraduationCap,
    HeartPulse,
    Home,
    Briefcase,
    CheckCircle2,
    Sparkles,
} from "lucide-react";

export default function SolutionTypes() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const youtubeRed = "#FF0000";

    const solutions = [
        {
            icon: ShoppingBag,
            title: "E-Commerce & Retail",
            description: "Showcase products with shoppable video ads and drive direct sales with high-intent audiences.",
            features: [
                "Product feed integration",
                "Shoppable ads",
                "Unboxing videos",
                "Retargeting campaigns",
            ],
            color: "#FF0000",
        },
        {
            icon: Monitor,
            title: "SaaS & Technology",
            description: "Demonstrate software value through tutorials, demos, and customer success stories.",
            features: [
                "Product demos",
                "Tutorial series",
                "Feature highlights",
                "Webinar promotion",
            ],
            color: "#CC0000",
        },
        {
            icon: GraduationCap,
            title: "Education & Coaching",
            description: "Attract students and sell courses by sharing valuable educational content and previews.",
            features: [
                "Course previews",
                "Student testimonials",
                "Educational value",
                "Webinar funnels",
            ],
            color: "#FF0000",
        },
        {
            icon: HeartPulse,
            title: "Health & Wellness",
            description: "Build trust and community with informative videos, client transformations, and expert advice.",
            features: [
                "Patient stories",
                "Expert interviews",
                "Facility tours",
                "Treatment explainers",
            ],
            color: "#CC0000",
        },
        {
            icon: Home,
            title: "Real Estate",
            description: "Immersive property tours and neighborhood guides to attract buyers and sellers.",
            features: [
                "Video walkthroughs",
                "Neighborhood guides",
                "Agent profiles",
                "Listing highlights",
            ],
            color: "#FF0000",
        },
        {
            icon: Briefcase,
            title: "Finance & Consulting",
            description: "Establish authority and explain complex financial concepts to build client trust.",
            features: [
                "Market updates",
                "Service explainers",
                "Client case studies",
                "Advisor introductions",
            ],
            color: "#CC0000",
        },
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: `${youtubeRed}08` }} />
                <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: `${youtubeRed}05`, animationDelay: "1s" }} />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: `${youtubeRed}15`, border: `1px solid ${youtubeRed}30` }}>
                        <Sparkles className="w-4 h-4" style={{ color: youtubeRed }} />
                        <span className="text-sm font-medium" style={{ color: youtubeRed }}>Industry Solutions</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>YouTube for</span>{" "}
                        <span style={{ color: youtubeRed }}>
                            Your Industry
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Tailored video marketing strategies to meet the unique needs of your business sector.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, idx) => {
                        const Icon = solution.icon;
                        const isHovered = hoveredCard === idx;

                        return (
                            <div
                                key={idx}
                                className="relative group"
                                onMouseEnter={() => setHoveredCard(idx)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Glow effect */}
                                <div
                                    className={`absolute -inset-0.5 rounded-3xl opacity-0 blur-xl transition-all duration-500 ${isHovered ? "opacity-30" : ""}`}
                                    style={{ backgroundColor: solution.color }}
                                />

                                <div
                                    className={`relative p-8 rounded-3xl border backdrop-blur-sm transition-all duration-500 h-full ${isHovered ? "shadow-2xl -translate-y-2 scale-[1.02]" : "shadow-lg"}`}
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: isHovered ? solution.color : "var(--border-color)",
                                    }}
                                >
                                    {/* Gradient background */}
                                    <div
                                        className={`absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-5" : ""}`}
                                        style={{ background: `linear-gradient(135deg, ${solution.color}, transparent)` }}
                                    />

                                    {/* Top line */}
                                    <div
                                        className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl transition-all duration-500 origin-left ${isHovered ? "scale-x-100" : "scale-x-0"}`}
                                        style={{ backgroundColor: solution.color }}
                                    />

                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className="relative mb-6">
                                            <div
                                                className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${isHovered ? "rotate-6 scale-110" : "rotate-0 scale-100"}`}
                                                style={{
                                                    backgroundColor: isHovered ? solution.color : `${solution.color}15`,
                                                }}
                                            >
                                                <Icon
                                                    className={`w-8 h-8 transition-all duration-500 ${isHovered ? "text-white scale-110" : ""}`}
                                                    style={{ color: isHovered ? "white" : solution.color }}
                                                />
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold mb-3 transition-colors duration-500" style={{ color: isHovered ? solution.color : "var(--foreground)" }}>
                                            {solution.title}
                                        </h3>

                                        <p className="text-sm mb-6 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                            {solution.description}
                                        </p>

                                        {/* Features */}
                                        <div className="space-y-3">
                                            {solution.features.map((feature, fIdx) => (
                                                <div
                                                    key={fIdx}
                                                    className={`flex items-center gap-3 text-sm transition-all duration-300 ${isHovered ? "translate-x-2" : "translate-x-0"}`}
                                                    style={{ color: "var(--secondary-text)", transitionDelay: isHovered ? `${fIdx * 50}ms` : "0ms" }}
                                                >
                                                    <div
                                                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isHovered ? "scale-110" : "scale-100"}`}
                                                        style={{ backgroundColor: `${solution.color}15` }}
                                                    >
                                                        <CheckCircle2 className="w-3 h-3" style={{ color: solution.color }} />
                                                    </div>
                                                    <span className={isHovered ? "font-medium" : ""}>{feature}</span>
                                                </div>
                                            ))}
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
