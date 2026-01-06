"use client";

import { MessageSquare, Palette, Code2, Rocket, Settings, HeartHandshake } from "lucide-react";

export default function Process() {
    const steps = [
        {
            icon: MessageSquare,
            title: "Discovery & Strategy",
            description: "We dive deep into your content goals, audience, and competition to create a winning strategy.",
            details: ["Content audit", "Audience research", "Competitor analysis", "Feature planning"]
        },
        {
            icon: Palette,
            title: "Design & UX",
            description: "Creating reader-focused designs that maximize engagement and time on site.",
            details: ["Wireframing", "Visual design", "Mobile optimization", "Accessibility"]
        },
        {
            icon: Code2,
            title: "Development",
            description: "Building your platform with modern technologies for speed, security, and scalability.",
            details: ["CMS setup", "Custom features", "SEO implementation", "Performance tuning"]
        },
        {
            icon: Rocket,
            title: "Launch & Training",
            description: "Smooth deployment with comprehensive training for your content team.",
            details: ["Quality assurance", "Content migration", "Team training", "Go-live support"]
        },
        {
            icon: Settings,
            title: "Optimization",
            description: "Continuous improvements based on analytics and reader feedback.",
            details: ["A/B testing", "Performance monitoring", "SEO refinement", "Feature updates"]
        },
        {
            icon: HeartHandshake,
            title: "Ongoing Support",
            description: "Long-term partnership to ensure your platform continues to grow and evolve.",
            details: ["Technical support", "Security updates", "Content consulting", "Growth strategy"]
        }
    ];

    return (
        <section
            className="py-20 transition-colors duration-300"
            style={{ backgroundColor: "color-mix(in srgb, #a855f7 2%, var(--background))" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Our <span style={{ color: "#a855f7" }}>Development Process</span>
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        A proven methodology that delivers successful content platforms on time and on budget.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto mt-6 rounded-full"
                        style={{ background: "linear-gradient(90deg, #a855f7, #ec4899)" }}
                    />
                </div>

                {/* Process Steps */}
                <div className="relative">
                    {/* Connection Line */}
                    <div
                        className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2"
                        style={{
                            background: "linear-gradient(90deg, #a855f7, #ec4899, #a855f7)",
                            opacity: 0.2
                        }}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {steps.map((step, idx) => {
                            const Icon = step.icon;
                            return (
                                <div
                                    key={idx}
                                    className="relative p-6 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: "var(--border-color)",
                                    }}
                                >
                                    {/* Step Number */}
                                    <div
                                        className="absolute -top-4 -left-4 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
                                        style={{
                                            background: "linear-gradient(135deg, #a855f7, #ec4899)",
                                        }}
                                    >
                                        {idx + 1}
                                    </div>

                                    {/* Icon */}
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                                        style={{
                                            background: "color-mix(in srgb, #a855f7 15%, transparent)",
                                        }}
                                    >
                                        <Icon className="w-6 h-6" style={{ color: "#a855f7" }} />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                        {step.title}
                                    </h3>
                                    <p className="text-sm mb-4" style={{ color: "var(--secondary-text)" }}>
                                        {step.description}
                                    </p>

                                    {/* Details */}
                                    <div className="space-y-1">
                                        {step.details.map((detail, didx) => (
                                            <div key={didx} className="flex items-center gap-2 text-xs">
                                                <div className="w-1 h-1 rounded-full bg-violet-500" />
                                                <span style={{ color: "var(--secondary-text)" }}>{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
