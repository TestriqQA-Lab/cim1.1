"use client";

import { useState, useEffect } from "react";
import {
    Megaphone,
    Building2,
    Briefcase,
    BookOpenCheck,
    ShoppingCart,
    PenLine,
    ArrowRight,
    CheckCircle2,
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
            icon: Megaphone,
            title: "Marketing Websites",
            description: "High-performance marketing sites that rank well and convert visitors.",
            features: [
                "Lightning fast loads",
                "SEO optimized",
                "A/B testing ready",
                "Analytics integration",
            ],
            gradient: "from-[#7C3AED] to-[#A855F7]",
        },
        {
            icon: Building2,
            title: "Corporate Sites",
            description: "Professional company websites that establish credibility and trust.",
            features: [
                "Brand consistency",
                "Content management",
                "Multi-language",
                "Contact forms",
            ],
            gradient: "from-[#FF5D01] to-[#FF8534]",
        },
        {
            icon: Briefcase,
            title: "Portfolio & Personal",
            description: "Showcase your work beautifully with fast-loading portfolio sites.",
            features: [
                "Visual galleries",
                "Project showcases",
                "Resume sections",
                "Contact integration",
            ],
            gradient: "from-[#7C3AED] to-[#6D28D9]",
        },
        {
            icon: BookOpenCheck,
            title: "Documentation Portals",
            description: "Technical docs and knowledge bases with excellent search.",
            features: [
                "Full-text search",
                "Version control",
                "Code highlighting",
                "API references",
            ],
            gradient: "from-[#A855F7] to-[#7C3AED]",
        },
        {
            icon: ShoppingCart,
            title: "E-commerce Catalogs",
            description: "Fast product showcases that drive purchases.",
            features: [
                "Product galleries",
                "Filtering & search",
                "Shopping cart",
                "Payment integration",
            ],
            gradient: "from-[#7C3AED] to-[#FF5D01]",
        },
        {
            icon: PenLine,
            title: "Blog Platforms",
            description: "Content-focused blogs with excellent reading experience.",
            features: [
                "MDX support",
                "Categories & tags",
                "RSS feeds",
                "Social sharing",
            ],
            gradient: "from-[#FF5D01] to-[#7C3AED]",
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
                            backgroundColor: "rgba(124, 58, 237, 0.05)",
                            borderColor: "rgba(124, 58, 237, 0.2)",
                        }}
                    >
                        <Megaphone className="w-4 h-4" style={{ color: "#7C3AED" }} />
                        <span className="text-sm font-medium" style={{ color: "#7C3AED" }}>
                            Solutions We Deliver
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Solutions We</span>{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Deliver
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Astro excels at building content-focused websites with exceptional performance.
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
                                    ${isActive ? "ring-2 ring-[#7C3AED] ring-offset-2" : "hover:border-[#7C3AED]/50"}
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
                                        background: `linear-gradient(135deg, #7C3AED, #A855F7)`,
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
                                            ? `linear-gradient(135deg, #7C3AED, #A855F7)`
                                            : "rgba(124, 58, 237, 0.1)",
                                    }}
                                >
                                    <Icon
                                        className={`w-6 h-6 transition-colors duration-300 ${isActive ? "text-white" : "text-[#7C3AED]"
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
                                            <CheckCircle2 className="w-4 h-4 text-[#7C3AED]" />
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
                                    <ArrowRight className="w-5 h-5 text-[#7C3AED]" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
