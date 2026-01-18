"use client";

import { useState } from "react";
import {
    Target,
    Users,
    ShoppingCart,
    Video,
    MessageCircle,
    Repeat,
} from "lucide-react";

export default function ServiceOverview() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const services = [
        {
            icon: Target,
            title: "Lead Generation Ads",
            description: "Capture high-quality leads directly within Facebook. Our optimized lead forms reduce friction and increase conversion rates.",
            shadowColor: "rgba(24, 119, 242, 0.4)",
        },
        {
            icon: ShoppingCart,
            title: "E-commerce & Catalog Ads",
            description: "Drive sales with dynamic product ads that automatically show relevant products to interested customers.",
            shadowColor: "rgba(24, 119, 242, 0.4)",
        },
        {
            icon: Video,
            title: "Video & Reels Campaigns",
            description: "Engage audiences with compelling video content optimized for Facebook and Instagram Reels placements.",
            shadowColor: "rgba(24, 119, 242, 0.4)",
        },
        {
            icon: Users,
            title: "Lookalike Audiences",
            description: "Scale your reach by targeting users similar to your best customers using Facebook's powerful AI algorithms.",
            shadowColor: "rgba(24, 119, 242, 0.4)",
        },
        {
            icon: Repeat,
            title: "Retargeting Campaigns",
            description: "Re-engage website visitors and cart abandoners with personalized ads that drive them back to convert.",
            shadowColor: "rgba(24, 119, 242, 0.4)",
        },
        {
            icon: MessageCircle,
            title: "Messenger & WhatsApp Ads",
            description: "Start conversations with potential customers through click-to-message ads and automated chatbots.",
            shadowColor: "rgba(24, 119, 242, 0.4)",
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
                        backgroundColor: "#1877F2",
                        animationDuration: "4s",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "#1877F2",
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
                                background: "rgba(24, 119, 242, 0.1)",
                                color: "#1877F2",
                            }}
                        >
                            Our Services
                        </span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Facebook{" "}
                        <span style={{ color: "#1877F2" }}>
                            Advertising
                        </span>{" "}
                        Services
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Comprehensive Facebook and Instagram advertising solutions to grow your business and maximize ROI.
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
                                onMouseEnter={() => {
                                    if (window.matchMedia("(hover: hover)").matches) {
                                        setHoveredCard(idx);
                                    }
                                }}
                                onMouseLeave={() => {
                                    if (window.matchMedia("(hover: hover)").matches) {
                                        setHoveredCard(null);
                                    }
                                }}
                                onClick={() => {
                                    if (!window.matchMedia("(hover: hover)").matches) {
                                        setHoveredCard(hoveredCard === idx ? null : idx);
                                    }
                                }}
                            >
                                {/* Glow effect on hover */}
                                <div
                                    className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"
                                    style={{
                                        backgroundColor: "rgba(24, 119, 242, 0.3)",
                                    }}
                                />

                                {/* Main card */}
                                <div
                                    className="relative p-8 rounded-3xl border transition-all duration-500 bg-card overflow-hidden"
                                    style={{
                                        borderColor: "var(--border-color)",
                                        transform: isHovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
                                        boxShadow: isHovered
                                            ? `0 20px 40px ${service.shadowColor}`
                                            : "0 4px 6px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    {/* Animated corner accent */}
                                    <div
                                        className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-20 transition-all duration-500"
                                        style={{
                                            backgroundColor: "#1877F2",
                                            transform: isHovered ? "translate(0, 0)" : "translate(50%, -50%)",
                                            borderRadius: "0 0 0 100%",
                                        }}
                                    />

                                    {/* Icon container */}
                                    <div className="relative mb-6">
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500"
                                            style={{
                                                backgroundColor: "#1877F2",
                                                transform: isHovered ? "rotate(10deg) scale(1.1)" : "rotate(0deg) scale(1)",
                                                boxShadow: isHovered
                                                    ? `0 8px 24px ${service.shadowColor}`
                                                    : "0 4px 12px rgba(0, 0, 0, 0.1)",
                                            }}
                                        >
                                            <Icon
                                                className="w-8 h-8 text-white transition-transform duration-500"
                                                style={{
                                                    transform: isHovered ? "scale(1.1)" : "scale(1)",
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
                                        className="leading-relaxed transition-all duration-300"
                                        style={{
                                            color: "var(--secondary-text)",
                                            transform: isHovered ? "translateX(4px)" : "translateX(0)",
                                        }}
                                    >
                                        {service.description}
                                    </p>

                                    {/* Animated bottom border */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 transition-all duration-500"
                                        style={{
                                            width: isHovered ? "100%" : "0%",
                                            backgroundColor: "#1877F2",
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
