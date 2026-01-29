"use client";

import { useState } from "react";
import {
    MapPin,
    MessageSquare,
    Link,
    Layout,
    Navigation,
    Smartphone,
} from "lucide-react";

export default function ServiceOverview() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // Local SEO Amber theme color
    const localAmber = "#F59E0B";

    const services = [
        {
            icon: MapPin,
            title: "Google Business Profile",
            description: "Complete setup, verification, and ongoing optimization of your GMB listing.",
            color: localAmber,
        },
        {
            icon: Link,
            title: "Local Citations",
            description: "Building consistent NAP (Name, Address, Phone) mentions across high-authority directories.",
            color: "#3B82F6",
        },
        {
            icon: MessageSquare,
            title: "Review Management",
            description: "Strategies to generate more positive reviews and professionally respond to feedback.",
            color: "#10B981",
        },
        {
            icon: Layout,
            title: "On-Page Localization",
            description: "Adding location-specific schema, keywords, and landing pages to your website.",
            color: "#8B5CF6",
        },
        {
            icon: Navigation,
            title: "Map Pack Optimization",
            description: "Tactics specifically designed to get you into the coveted Local 3-Pack.",
            color: "#EC4899",
        },
        {
            icon: Smartphone,
            title: "Mobile Optimization",
            description: 'Ensuring your site is perfect for on-the-go "near me" searches.',
            color: "#06B6D4",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden transition-colors duration-300 border-t"
            style={{
                backgroundColor: "var(--background)",
                borderColor: "#555555"
            }}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/4 left-0 w-96 h-96 rounded-full opacity-5 blur-3xl animate-pulse"
                    style={{
                        backgroundColor: localAmber,
                        animationDuration: "6s",
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span
                            className="px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase border"
                            style={{
                                backgroundColor: `${localAmber}10`,
                                borderColor: `${localAmber}30`,
                                color: localAmber,
                            }}
                        >
                            Our Services
                        </span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Local SEO <span style={{ color: localAmber }}>Solutions</span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Comprehensive strategies to make your business visible where it matters most: your neighborhood.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        const isHovered = hoveredCard === idx;

                        return (
                            <div
                                key={idx}
                                className="group"
                                onMouseEnter={() => setHoveredCard(idx)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div
                                    className={`
                                        relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden h-full
                                        ${isHovered ? "-translate-y-2" : ""}
                                    `}
                                    style={{
                                        borderColor: isHovered ? service.color : "var(--border-color)",
                                        backgroundColor: "var(--card-bg)"
                                    }}
                                >
                                    {/* Hover Gradient BG */}
                                    <div
                                        className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-10" : ""}`}
                                        style={{
                                            background: `linear-gradient(135deg, ${service.color}, transparent)`,
                                        }}
                                    />

                                    {/* Icon container */}
                                    <div className="relative mb-6">
                                        <div
                                            className={`
                                                w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500
                                                ${isHovered ? "rounded-full" : ""}
                                            `}
                                            style={{
                                                backgroundColor: isHovered ? service.color : "var(--background)",
                                                boxShadow: isHovered ? `0 10px 30px ${service.color}30` : "none"
                                            }}
                                        >
                                            <Icon
                                                className="w-8 h-8 transition-all duration-500"
                                                style={{
                                                    color: isHovered ? "white" : "var(--foreground)",
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3
                                        className="text-xl font-bold mb-3 transition-colors duration-300"
                                        style={{ color: "var(--foreground)" }}
                                    >
                                        {service.title}
                                    </h3>
                                    <p
                                        className="leading-relaxed"
                                        style={{ color: "var(--secondary-text)" }}
                                    >
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
