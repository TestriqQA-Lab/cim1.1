"use client";

import { useState } from "react";
import {
    PlayCircle,
    Search,
    Users,
    BarChart2,
    MonitorPlay,
    Clapperboard,
} from "lucide-react";

export default function ServiceOverview() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const youtubeRed = "#FF0000";

    const services = [
        {
            icon: PlayCircle,
            title: "YouTube Advertising",
            description: "End-to-end management of YouTube ad campaigns including TrueView, Bumper, and Discovery ads for maximum ROI.",
            color: "#FF0000",
        },
        {
            icon: Search,
            title: "Video SEO",
            description: "Optimize your videos to rank higher in YouTube search and Google results to drive organic views.",
            color: "#CC0000",
        },
        {
            icon: Users,
            title: "Channel Growth",
            description: "Strategies to increase subscribers, watch time, and engagement through consistent, high-quality content.",
            color: "#FF0000",
        },
        {
            icon: Clapperboard,
            title: "Content Strategy",
            description: "Data-backed content planning, scripting, and ideation to keep your audience hooked and returning.",
            color: "#CC0000",
        },
        {
            icon: MonitorPlay,
            title: "YouTube Shorts",
            description: "Capitalize on short-form video trends with viral-ready Shorts content to explode your reach.",
            color: "#FF0000",
        },
        {
            icon: BarChart2,
            title: "Analytics & Reporting",
            description: "Deep dive into viewer retention, demographics, and conversion metrics to refine your strategy.",
            color: "#CC0000",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden transition-colors duration-300"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
                    style={{
                        backgroundColor: youtubeRed,
                        animationDuration: "4s",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
                    style={{
                        backgroundColor: youtubeRed,
                        animationDuration: "6s",
                        animationDelay: "2s",
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span
                            className="px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase"
                            style={{
                                backgroundColor: `${youtubeRed}15`,
                                color: youtubeRed,
                            }}
                        >
                            Our Services
                        </span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        YouTube{" "}
                        <span style={{ color: youtubeRed }}>
                            Advertising
                        </span>{" "}
                        Services
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Comprehensive video marketing solutions to grow your brand and drive conversions on the world's largest video platform.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        const isHovered = hoveredCard === idx;

                        return (
                            <div
                                key={idx}
                                className="group relative cursor-pointer"
                                onMouseEnter={() => setHoveredCard(idx)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Glow effect on hover */}
                                <div
                                    className={`
                                        absolute -inset-1 rounded-3xl opacity-0 transition-all duration-500 blur-xl
                                        ${isHovered ? "opacity-30" : ""}
                                    `}
                                    style={{
                                        background: `linear-gradient(135deg, ${service.color}40, ${service.color}20)`,
                                    }}
                                />

                                {/* Main card */}
                                <div
                                    className={`
                                        relative p-8 rounded-3xl border transition-all duration-500 bg-card overflow-hidden
                                        ${isHovered ? "shadow-2xl -translate-y-2 scale-[1.02]" : "shadow-lg"}
                                    `}
                                    style={{
                                        backgroundColor: "var(--background)",
                                        borderColor: isHovered ? service.color : "var(--border-color)",
                                    }}
                                >
                                    {/* Animated corner accent */}
                                    <div
                                        className={`
                                            absolute top-0 right-0 w-32 h-32 transition-all duration-500
                                            ${isHovered ? "opacity-20 scale-100" : "opacity-0 scale-0"}
                                        `}
                                        style={{
                                            background: `radial-gradient(circle at top right, ${service.color}, transparent 70%)`,
                                        }}
                                    />

                                    {/* Icon container */}
                                    <div className="relative mb-6">
                                        <div
                                            className={`
                                                w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500
                                                ${isHovered ? "rotate-6 scale-110" : "rotate-0 scale-100"}
                                            `}
                                            style={{
                                                backgroundColor: isHovered ? service.color : `${service.color}15`,
                                            }}
                                        >
                                            <Icon
                                                className={`w-8 h-8 transition-all duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
                                                style={{
                                                    color: isHovered ? "white" : service.color,
                                                }}
                                            />
                                        </div>

                                        {/* Floating particles */}
                                        {isHovered && (
                                            <>
                                                <div
                                                    className="absolute -top-1 -right-1 w-2 h-2 rounded-full animate-ping"
                                                    style={{ backgroundColor: service.color }}
                                                />
                                                <div
                                                    className="absolute -bottom-1 -left-1 w-1.5 h-1.5 rounded-full animate-ping"
                                                    style={{ backgroundColor: service.color, animationDelay: "0.3s" }}
                                                />
                                            </>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <h3
                                        className="text-xl font-bold mb-3 transition-colors duration-300"
                                        style={{ color: isHovered ? service.color : "var(--foreground)" }}
                                    >
                                        {service.title}
                                    </h3>
                                    <p
                                        className="leading-relaxed"
                                        style={{ color: "var(--secondary-text)" }}
                                    >
                                        {service.description}
                                    </p>

                                    {/* Animated bottom border */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 transition-all duration-500"
                                        style={{
                                            width: isHovered ? "100%" : "0%",
                                            backgroundColor: service.color,
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
