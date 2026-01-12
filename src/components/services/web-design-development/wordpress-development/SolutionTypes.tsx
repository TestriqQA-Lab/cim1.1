"use client";

import { useState, useEffect } from "react";
import {
    FileText,
    ShoppingCart,
    Lock,
    Building2,
    Map,
    Network,
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
            icon: FileText,
            title: "Blog & Publishing Platforms",
            description: "Content-focused websites with powerful editorial tools, SEO optimization, and reader engagement features.",
            features: [
                "Advanced content editor",
                "Category & tag management",
                "SEO meta controls",
                "Social sharing integration",
            ],
            gradient: "from-[#0073AA] to-[#005177]",
        },
        {
            icon: ShoppingCart,
            title: "WooCommerce Stores",
            description: "Full-featured e-commerce solutions handling everything from product catalogs to payment processing.",
            features: [
                "Product management",
                "Multiple payment gateways",
                "Shipping integrations",
                "Inventory tracking",
            ],
            gradient: "from-[#0096D6] to-[#0073AA]",
        },
        {
            icon: Lock,
            title: "Membership Sites",
            description: "Gated content platforms with subscription management, user roles, and premium content delivery.",
            features: [
                "Content restriction",
                "Subscription billing",
                "User dashboards",
                "Drip content release",
            ],
            gradient: "from-[#0073AA] to-[#004863]",
        },
        {
            icon: Building2,
            title: "Business & Corporate Sites",
            description: "Professional company websites that establish credibility and drive lead generation.",
            features: [
                "Service showcases",
                "Team profiles",
                "Contact forms",
                "Case studies",
            ],
            gradient: "from-[#005177] to-[#0096D6]",
        },
        {
            icon: Map,
            title: "Directory & Listing Portals",
            description: "Searchable directories with advanced filtering, user submissions, and monetization options.",
            features: [
                "Advanced search & filters",
                "User submissions",
                "Map integrations",
                "Featured listings",
            ],
            gradient: "from-[#0073AA] to-[#0096D6]",
        },
        {
            icon: Network,
            title: "Multisite Networks",
            description: "Enterprise multi-domain solutions for managing multiple sites from a single WordPress installation.",
            features: [
                "Centralized management",
                "Shared user base",
                "Network-wide plugins",
                "Domain mapping",
            ],
            gradient: "from-[#0096D6] to-[#005177]",
        },
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Solutions We</span>{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #0073AA, #0096D6)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Build
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We craft tailored WordPress solutions for every business need and industry.
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
                                    ${isActive ? "ring-2 ring-[#0073AA] ring-offset-2" : "hover:border-[#0073AA]/50"}
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
                                        background: `linear-gradient(135deg, #0073AA, #0096D6)`,
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
                                            ? `linear-gradient(135deg, #0073AA, #0096D6)`
                                            : "rgba(0, 115, 170, 0.1)",
                                    }}
                                >
                                    <Icon
                                        className={`w-6 h-6 transition-colors duration-300 ${isActive ? "text-white" : "text-[#0073AA]"
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
                                            <CheckCircle2 className="w-4 h-4 text-[#0073AA]" />
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
                                    <ArrowRight className="w-5 h-5 text-[#0073AA]" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
