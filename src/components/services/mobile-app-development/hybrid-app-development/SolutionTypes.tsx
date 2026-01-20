"use client";

import { useState, useEffect } from "react";
import {
    Rocket,
    ShoppingCart,
    Building2,
    FileText,
    Headphones,
    GraduationCap,
    ArrowRight,
    CheckCircle2,
    Sparkles,
} from "lucide-react";

export default function SolutionTypes() {
    const [activeSolution, setActiveSolution] = useState<number | null>(null);
    const [columns, setColumns] = useState(1);

    useEffect(() => {
        const updateColumns = () => {
            if (window.innerWidth >= 1024) {
                setColumns(3);
            } else if (window.innerWidth >= 768) {
                setColumns(2);
            } else {
                setColumns(1);
            }
        };

        updateColumns();
        window.addEventListener("resize", updateColumns);
        return () => window.removeEventListener("resize", updateColumns);
    }, []);

    const solutions = [
        {
            icon: Rocket,
            title: "Startup MVPs",
            description: "Quickly validate your idea with a hybrid MVP. Perfect for startups needing fast market entry with limited budget.",
            features: [
                "Rapid prototyping",
                "Cost-effective launch",
                "Quick iterations",
                "Web team friendly",
            ],
            gradient: "from-[#00b4d8] to-[#0077b6]",
        },
        {
            icon: ShoppingCart,
            title: "E-commerce Apps",
            description: "Mobile shopping experiences built with your existing web storefront technologies for consistent branding.",
            features: [
                "Product catalogs",
                "Secure checkout",
                "Push notifications",
                "Offline browsing",
            ],
            gradient: "from-[#0077b6] to-[#00b4d8]",
        },
        {
            icon: Building2,
            title: "Internal Business Apps",
            description: "Corporate tools and internal apps built rapidly using your organization's existing web development resources.",
            features: [
                "Employee portals",
                "Inventory management",
                "Field service apps",
                "Data collection",
            ],
            gradient: "from-[#48cae4] to-[#00b4d8]",
        },
        {
            icon: FileText,
            title: "Content & Media Apps",
            description: "News, blogs, and content apps with offline reading capabilities and push notification support.",
            features: [
                "Offline content",
                "Media playback",
                "Push notifications",
                "Content sync",
            ],
            gradient: "from-[#00b4d8] to-[#48cae4]",
        },
        {
            icon: Headphones,
            title: "Customer Service Apps",
            description: "Support and service apps with chat, ticketing, and knowledge base features using familiar web tech.",
            features: [
                "Live chat",
                "Ticket system",
                "FAQ sections",
                "Push alerts",
            ],
            gradient: "from-[#0077b6] to-[#48cae4]",
        },
        {
            icon: GraduationCap,
            title: "Educational Apps",
            description: "Learning platforms and educational apps with video content, quizzes, and progress tracking.",
            features: [
                "Video courses",
                "Interactive quizzes",
                "Progress tracking",
                "Offline learning",
            ],
            gradient: "from-[#48cae4] to-[#0077b6]",
        },
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(0, 180, 216, 0.1)",
                            borderColor: "rgba(0, 180, 216, 0.2)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "#00b4d8" }} />
                        <span className="text-sm font-medium" style={{ color: "#00b4d8" }}>
                            Industry Solutions
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Hybrid Solutions for</span>{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #00b4d8, #0077b6)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Every Use Case
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        From MVPs to enterprise apps, hybrid development fits many business needs perfectly.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, idx) => {
                        const Icon = solution.icon;
                        const currentRow = activeSolution !== null ? Math.floor(activeSolution / columns) : -1;
                        const cardRow = Math.floor(idx / columns);
                        const isActive = currentRow === cardRow;

                        return (
                            <div
                                key={idx}
                                className={`
                                    relative p-8 rounded-3xl border transition-all duration-300 cursor-pointer overflow-hidden group
                                    ${isActive ? "ring-2 ring-[#00b4d8] ring-offset-2" : "hover:border-[#00b4d8]/50"}
                                `}
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                                onMouseEnter={() => {
                                    if (window.matchMedia("(hover: hover)").matches) {
                                        setActiveSolution(idx);
                                    }
                                }}
                                onMouseLeave={() => {
                                    if (window.matchMedia("(hover: hover)").matches) {
                                        setActiveSolution(null);
                                    }
                                }}
                                onClick={() => {
                                    if (!window.matchMedia("(hover: hover)").matches) {
                                        setActiveSolution(activeSolution === idx ? null : idx);
                                    }
                                }}
                            >
                                {/* Gradient Background on Hover */}
                                <div
                                    className={`
                                        absolute inset-0 opacity-0 transition-opacity duration-500
                                        ${isActive ? "opacity-5" : ""}
                                    `}
                                    style={{
                                        background: `linear-gradient(135deg, #00b4d8, #0077b6)`,
                                    }}
                                />

                                {/* Icon */}
                                <div
                                    className={`
                                        w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300
                                        ${isActive ? "scale-110 rotate-3" : ""}
                                    `}
                                    style={{
                                        background: isActive
                                            ? `linear-gradient(135deg, #00b4d8, #0077b6)`
                                            : "rgba(0, 180, 216, 0.1)",
                                    }}
                                >
                                    <Icon
                                        className={`w-6 h-6 transition-colors duration-300 ${isActive ? "text-white" : "text-[#00b4d8]"
                                            }`}
                                    />
                                </div>

                                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>{solution.title}</h3>
                                <p className="text-sm mb-6 line-clamp-3" style={{ color: "var(--secondary-text)" }}>
                                    {solution.description}
                                </p>

                                {/* Features List */}
                                <div
                                    className={`
                                        space-y-3 transition-all duration-300 overflow-hidden
                                        ${isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                                    `}
                                >
                                    {solution.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-center gap-2 text-sm" style={{ color: "var(--secondary-text)" }}>
                                            <CheckCircle2 className="w-4 h-4 text-[#00b4d8]" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Arrow */}
                                <div
                                    className={`
                                        absolute bottom-8 right-8 transition-all duration-300 transform
                                        ${isActive ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}
                                    `}
                                >
                                    <ArrowRight className="w-5 h-5 text-[#00b4d8]" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
