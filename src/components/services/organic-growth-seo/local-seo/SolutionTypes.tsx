"use client";

import { useState } from "react";
import {
    Utensils,
    Stethoscope,
    Scale,
    Hammer,
    ShoppingBag,
    Home,
    Building2,
} from "lucide-react";

export default function SolutionTypes() {
    const [activeIdx, setActiveIdx] = useState<number | null>(null);

    // Local SEO Amber theme color
    const localAmber = "#F59E0B";

    const solutions = [
        {
            id: "hospitality",
            title: "Hospitality",
            description: "Restaurants, cafes, and hotels wanting to capture hungry locals and tourists.",
            icon: Utensils,
            color: localAmber,
        },
        {
            id: "medical",
            title: "Medical & Dental",
            description: "Clinics and practitioners looking to be the top choice for patient care nearby.",
            icon: Stethoscope,
            color: "#EF4444",
        },
        {
            id: "legal",
            title: "Legal Services",
            description: "Law firms and attorneys needing maintain authority in their jurisdiction.",
            icon: Scale,
            color: "#1E40AF",
        },
        {
            id: "homeservices",
            title: "Home Services",
            description: "Plumbers, HVAC, and contractors targeting homeowners in specific service areas.",
            icon: Hammer,
            color: "#EA580C",
        },
        {
            id: "retail",
            title: "Local Retail",
            description: "Brick-and-mortar stores driving foot traffic from online searches.",
            icon: ShoppingBag,
            color: "#DB2777",
        },
        {
            id: "realestate",
            title: "Real Estate",
            description: "Agents and brokers showcasing their local market expertise and listings.",
            icon: Home,
            color: "#059669",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                    <div>
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                            style={{
                                backgroundColor: `${localAmber}15`,
                                borderColor: `${localAmber}40`,
                            }}
                        >
                            <Building2 className="w-4 h-4" style={{ color: localAmber }} />
                            <span className="text-sm font-medium" style={{ color: localAmber }}>
                                Target Industries
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                            Industries We <span style={{ color: localAmber }}>Grow</span>
                        </h2>
                        <p className="text-lg text-gray-400 mb-8">
                            Local SEO strategies tailored to the unique buying journey of your specific customer base.
                        </p>
                    </div>
                    <div className="hidden lg:block">
                        {/* Decorative line or element could go here */}
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, idx) => {
                        const Icon = solution.icon;
                        const isActive = activeIdx === idx;

                        return (
                            <div
                                key={solution.id}
                                className="group relative cursor-pointer"
                                onMouseEnter={() => setActiveIdx(idx)}
                                onMouseLeave={() => setActiveIdx(null)}
                            >
                                <div
                                    className={`
                                        h-full p-8 rounded-3xl border transition-all duration-300
                                        ${isActive ? "scale-[1.02]" : ""}
                                    `}
                                    style={{
                                        borderColor: isActive ? solution.color : "var(--border-color)",
                                        backgroundColor: "var(--card-bg)",
                                        boxShadow: isActive ? `0 10px 40px -10px ${solution.color}20` : "none"
                                    }}
                                >
                                    <div className="flex items-start justify-between mb-8">
                                        <div
                                            className="w-14 h-14 rounded-full flex items-center justify-center transition-colors duration-300"
                                            style={{
                                                backgroundColor: isActive ? solution.color : `${solution.color}15`,
                                                color: isActive ? "white" : solution.color
                                            }}
                                        >
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        <div
                                            className="px-3 py-1 rounded-full text-xs font-medium border transition-colors duration-300"
                                            style={{
                                                borderColor: isActive ? solution.color : "var(--border-color)",
                                                color: isActive ? solution.color : "var(--secondary-text)"
                                            }}
                                        >
                                            Local
                                        </div>
                                    </div>

                                    <h3
                                        className="text-xl font-bold mb-3 transition-colors duration-300"
                                        style={{ color: isActive ? solution.color : "var(--foreground)" }}
                                    >
                                        {solution.title}
                                    </h3>
                                    <p className="leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                        {solution.description}
                                    </p>

                                    {/* Bottom indicator */}
                                    <div
                                        className="absolute bottom-0 left-8 right-8 h-1 rounded-t-full transition-all duration-300"
                                        style={{
                                            backgroundColor: solution.color,
                                            opacity: isActive ? 1 : 0,
                                            transform: isActive ? "translateY(0)" : "translateY(4px)"
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
