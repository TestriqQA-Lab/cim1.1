"use client";

import { useState } from "react";
import {
    Camera,
    Film,
    ShoppingBag,
    Users,
    Megaphone,
    BarChart3,
} from "lucide-react";

export default function ServiceOverview() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const instagramPink = "#E1306C";

    const services = [
        {
            icon: Film,
            title: "Reels & Short-Form Video",
            description: "Create viral-worthy Reels that capture attention and drive massive organic reach with trending audio and formats.",
            color: "#E1306C",
        },
        {
            icon: Camera,
            title: "Content Strategy & Creation",
            description: "Develop a cohesive visual identity with stunning feed posts, carousel content, and Instagram-optimized graphics.",
            color: "#C13584",
        },
        {
            icon: Megaphone,
            title: "Stories & Ads Management",
            description: "Run high-converting Instagram ad campaigns across Stories, Feed, Explore, and Reels placements.",
            color: "#F77737",
        },
        {
            icon: Users,
            title: "Influencer Partnerships",
            description: "Connect with the right influencers to amplify your brand message and reach new engaged audiences.",
            color: "#833AB4",
        },
        {
            icon: ShoppingBag,
            title: "Instagram Shopping",
            description: "Set up and optimize your Instagram Shop to drive direct sales with shoppable posts and product tags.",
            color: "#FD1D1D",
        },
        {
            icon: BarChart3,
            title: "Analytics & Growth",
            description: "Track performance metrics, analyze audience insights, and continuously optimize for follower growth.",
            color: "#405DE6",
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
                        background: "linear-gradient(135deg, #E1306C, #C13584)",
                        animationDuration: "4s",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
                    style={{
                        background: "linear-gradient(135deg, #F77737, #FCAF45)",
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
                                background: "linear-gradient(135deg, rgba(225, 48, 108, 0.1), rgba(193, 53, 132, 0.1))",
                                color: instagramPink,
                            }}
                        >
                            Our Services
                        </span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Instagram{" "}
                        <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 bg-clip-text text-transparent">
                            Marketing
                        </span>{" "}
                        Services
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Comprehensive Instagram marketing solutions to grow your brand presence and drive real business results.
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
                                                background: isHovered
                                                    ? `linear-gradient(135deg, ${service.color}, ${service.color}CC)`
                                                    : `${service.color}15`,
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
                                            background: `linear-gradient(90deg, ${service.color}, ${service.color}80)`,
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
