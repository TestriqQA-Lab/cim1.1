"use client";

import { useState } from "react";
import {
    Zap,
    Shield,
    Award,
    HeartHandshake,
    Users,
    Clock,
    Sparkles,
} from "lucide-react";

export default function WhyChooseUs() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const reasons = [
        {
            icon: Zap,
            title: "Native Performance",
            description: "Pure Kotlin and Jetpack development ensures your app runs at peak performance with smooth 60fps animations and instant responsiveness.",
            gradient: "from-[#3DDC84] to-[#78C257]",
            shadowColor: "rgba(61, 220, 132, 0.3)",
        },
        {
            icon: Shield,
            title: "Material Design Expertise",
            description: "Deep understanding of Material Design 3 and Play Store requirements ensures beautiful, consistent user experiences.",
            gradient: "from-[#78C257] to-[#3DDC84]",
            shadowColor: "rgba(120, 194, 87, 0.3)",
        },
        {
            icon: Award,
            title: "Play Store Success",
            description: "Our apps consistently achieve high ratings and featured placements on the Play Store with proven ASO strategies.",
            gradient: "from-[#073042] to-[#3DDC84]",
            shadowColor: "rgba(7, 48, 66, 0.3)",
        },
        {
            icon: HeartHandshake,
            title: "Dedicated Android Team",
            description: "Work with a team of certified Android developers who live and breathe Google technologies and best practices.",
            gradient: "from-[#3DDC84] to-[#073042]",
            shadowColor: "rgba(61, 220, 132, 0.3)",
        },
        {
            icon: Users,
            title: "Billions of Users Reach",
            description: "Proven track record building Android apps that reach the 3+ billion active Android devices worldwide.",
            gradient: "from-[#78C257] to-[#073042]",
            shadowColor: "rgba(120, 194, 87, 0.3)",
        },
        {
            icon: Clock,
            title: "Ongoing Support",
            description: "Comprehensive post-launch support with regular updates, Android version compatibility, and feature enhancements.",
            gradient: "from-[#073042] to-[#78C257]",
            shadowColor: "rgba(7, 48, 66, 0.3)",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden"
            style={{ backgroundColor: "var(--card-bg)" }}
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute -top-48 -right-48 w-96 h-96 rounded-full opacity-10 blur-3xl"
                    style={{ background: "linear-gradient(135deg, #3DDC84, #78C257)" }}
                />
                <div
                    className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full opacity-10 blur-3xl"
                    style={{ background: "linear-gradient(135deg, #78C257, #3DDC84)" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(61, 220, 132, 0.1)",
                            borderColor: "rgba(61, 220, 132, 0.2)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "#3DDC84" }} />
                        <span className="text-sm font-medium" style={{ color: "#3DDC84" }}>
                            Why Choose Us
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Why Choose Us for</span>{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #3DDC84, #78C257)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Android Development
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Partner with Android specialists who understand the Google ecosystem inside and out.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, idx) => {
                        const Icon = reason.icon;
                        const isHovered = hoveredCard === idx;

                        return (
                            <div
                                key={idx}
                                className="relative cursor-pointer"
                                onMouseEnter={() => setHoveredCard(idx)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Glow Effect */}
                                <div
                                    className={`
                                        absolute -inset-1 rounded-3xl blur-xl transition-opacity duration-500
                                        ${isHovered ? "opacity-100" : "opacity-0"}
                                    `}
                                    style={{ background: reason.shadowColor }}
                                />

                                {/* Card */}
                                <div
                                    className={`
                                        relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden
                                        ${isHovered ? "shadow-2xl" : ""}
                                    `}
                                    style={{
                                        backgroundColor: "var(--background)",
                                        borderColor: isHovered ? "#3DDC84" : "var(--border-color)",
                                        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                                    }}
                                >
                                    {/* Icon */}
                                    <div
                                        className={`
                                            w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500
                                            bg-gradient-to-br ${reason.gradient}
                                        `}
                                        style={{
                                            transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
                                            boxShadow: isHovered ? `0 8px 24px ${reason.shadowColor}` : "none",
                                        }}
                                    >
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3
                                        className="text-xl font-bold mb-3 transition-colors duration-300"
                                        style={{
                                            color: isHovered ? "#3DDC84" : "var(--foreground)",
                                        }}
                                    >
                                        {reason.title}
                                    </h3>
                                    <p
                                        className="leading-relaxed"
                                        style={{ color: "var(--secondary-text)" }}
                                    >
                                        {reason.description}
                                    </p>

                                    {/* Bottom accent line */}
                                    <div
                                        className={`
                                            absolute bottom-0 left-0 h-1 transition-all duration-500
                                            bg-gradient-to-r ${reason.gradient}
                                        `}
                                        style={{
                                            width: isHovered ? "100%" : "0%",
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
