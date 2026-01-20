"use client";

import { MessageSquare, Palette, Code2, Rocket, Settings, HeartHandshake } from "lucide-react";

export default function Process() {
    const steps = [
        {
            icon: MessageSquare,
            title: "Discovery Call",
            description: "We learn about your work, goals, and what makes you unique in your field.",
            details: ["Work review", "Goal setting", "Brand discovery", "Competitor analysis"]
        },
        {
            icon: Palette,
            title: "Design Concepts",
            description: "Creating visual concepts that capture your personality and showcase your work beautifully.",
            details: ["Mood boards", "Layout options", "Color palettes", "Typography"]
        },
        {
            icon: Code2,
            title: "Development",
            description: "Building your portfolio with modern tech for fast performance and smooth interactions.",
            details: ["Responsive build", "Animations", "Gallery system", "Contact forms"]
        },
        {
            icon: Rocket,
            title: "Content Setup",
            description: "Helping you organize and upload your projects, case studies, and testimonials.",
            details: ["Project upload", "Image optimization", "SEO setup", "Copy refinement"]
        },
        {
            icon: Settings,
            title: "Review & Launch",
            description: "Final polish and testing before your portfolio goes live to the world.",
            details: ["QA testing", "Browser checks", "Speed optimization", "Launch day"]
        },
        {
            icon: HeartHandshake,
            title: "Ongoing Support",
            description: "Continued partnership to keep your portfolio updated and performing well.",
            details: ["Content updates", "Technical support", "Analytics review", "Improvements"]
        }
    ];

    return (
        <section
            className="py-20 transition-colors duration-300"
            style={{ backgroundColor: "color-mix(in srgb, #06b6d4 2%, var(--background))" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(6, 182, 212, 0.05)",
                            borderColor: "rgba(6, 182, 212, 0.2)",
                        }}
                    >
                        <Rocket className="w-4 h-4" style={{ color: "#06b6d4" }} />
                        <span className="text-sm font-medium" style={{ color: "#06b6d4" }}>
                            Our Process
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Our <span style={{ color: "#06b6d4" }}>Creative Process</span>
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        A collaborative approach that brings your unique vision to life.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto mt-6 rounded-full"
                        style={{ background: "linear-gradient(90deg, #06b6d4, #0891b2)" }}
                    />
                </div>

                {/* Process Steps */}
                <div className="relative">
                    {/* Connection Line */}
                    <div
                        className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2"
                        style={{
                            background: "linear-gradient(90deg, #06b6d4, #0891b2, #06b6d4)",
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
                                            background: "linear-gradient(135deg, #06b6d4, #0891b2)",
                                        }}
                                    >
                                        {idx + 1}
                                    </div>

                                    {/* Icon */}
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                                        style={{
                                            background: "color-mix(in srgb, #06b6d4 15%, transparent)",
                                        }}
                                    >
                                        <Icon className="w-6 h-6" style={{ color: "#06b6d4" }} />
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
                                                <div className="w-1 h-1 rounded-full bg-cyan-500" />
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
