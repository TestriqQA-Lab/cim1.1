"use client";

import { useState } from "react";
import {
    Store,
    Sparkles,
    Heart,
    Palette,
    Coffee,
    Shirt,
    CheckCircle2,
} from "lucide-react";

export default function SolutionTypes() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const solutions = [
        {
            icon: Store,
            title: "E-commerce & D2C Brands",
            description: "Drive product discovery and sales with shoppable posts, influencer collaborations, and targeted ads.",
            features: [
                "Instagram Shopping setup",
                "Product tagging",
                "User-generated content",
                "Shoppable Reels",
            ],
            color: "#E1306C",
        },
        {
            icon: Palette,
            title: "Fashion & Beauty",
            description: "Showcase your products with stunning visuals, tutorials, and trend-driven content strategies.",
            features: [
                "Lookbook content",
                "Tutorial Reels",
                "Influencer collabs",
                "Seasonal campaigns",
            ],
            color: "#C13584",
        },
        {
            icon: Coffee,
            title: "Food & Restaurants",
            description: "Make mouths water with appetizing content that drives foot traffic and online orders.",
            features: [
                "Food photography",
                "Behind-the-scenes",
                "Local targeting",
                "Story highlights",
            ],
            color: "#F77737",
        },
        {
            icon: Heart,
            title: "Health & Wellness",
            description: "Build a community around your wellness brand with inspiring and educational content.",
            features: [
                "Transformation stories",
                "Educational carousels",
                "Live Q&As",
                "Community building",
            ],
            color: "#833AB4",
        },
        {
            icon: Shirt,
            title: "Lifestyle Brands",
            description: "Create aspirational content that resonates with your target audience's values and interests.",
            features: [
                "Lifestyle imagery",
                "Brand storytelling",
                "Ambassador programs",
                "Aesthetic curation",
            ],
            color: "#405DE6",
        },
        {
            icon: Sparkles,
            title: "Personal Brands & Creators",
            description: "Grow your personal brand and monetize your influence with strategic content and partnerships.",
            features: [
                "Content calendar",
                "Engagement growth",
                "Brand partnerships",
                "Monetization strategy",
            ],
            color: "#FD1D1D",
        },
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse" style={{ background: "rgba(225, 48, 108, 0.05)" }} />
                <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ background: "rgba(193, 53, 132, 0.05)", animationDelay: "1s" }} />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: "linear-gradient(135deg, rgba(225, 48, 108, 0.1), rgba(193, 53, 132, 0.1))", border: "1px solid rgba(225, 48, 108, 0.2)" }}>
                        <Sparkles className="w-4 h-4" style={{ color: "#E1306C" }} />
                        <span className="text-sm font-medium" style={{ color: "#E1306C" }}>Industry Solutions</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Instagram for</span>{" "}
                        <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 bg-clip-text text-transparent">
                            Your Industry
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Tailored Instagram marketing strategies that resonate with your specific audience and industry.
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
                                    style={{ background: `linear-gradient(135deg, ${solution.color}40, ${solution.color}20)` }}
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
                                        style={{ background: `linear-gradient(90deg, ${solution.color}, transparent)` }}
                                    />

                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className="relative mb-6">
                                            <div
                                                className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${isHovered ? "rotate-6 scale-110" : "rotate-0 scale-100"}`}
                                                style={{
                                                    background: isHovered ? `linear-gradient(135deg, ${solution.color}, ${solution.color}CC)` : `${solution.color}15`,
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
