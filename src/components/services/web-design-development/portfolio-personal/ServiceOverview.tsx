"use client";

import { useState } from "react";
import { Palette, ImageIcon, Layout, Sparkles, Users, Award, Globe, Zap } from "lucide-react";

export default function ServiceOverview() {
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        {
            icon: ImageIcon,
            title: "Project Galleries",
            description: "Stunning visual galleries that showcase your best work with filterable categories and lightbox views.",
            details: ["Grid layouts", "Masonry style", "Lightbox popups", "Category filters"]
        },
        {
            icon: Layout,
            title: "Case Studies",
            description: "In-depth project breakdowns that demonstrate your process, skills, and the results you deliver.",
            details: ["Problem & solution", "Process showcase", "Results & metrics", "Client testimonials"]
        },
        {
            icon: Sparkles,
            title: "Personal Branding",
            description: "Custom designs that reflect your unique personality and professional identity.",
            details: ["Custom typography", "Color schemes", "Logo integration", "Consistent styling"]
        },
        {
            icon: Users,
            title: "About & Bio",
            description: "Compelling about sections that tell your story and build connection with visitors.",
            details: ["Professional bio", "Skills showcase", "Experience timeline", "Certifications"]
        },
        {
            icon: Award,
            title: "Testimonials",
            description: "Social proof sections that build trust and credibility with potential clients.",
            details: ["Client quotes", "Star ratings", "Video testimonials", "Logo showcase"]
        },
        {
            icon: Globe,
            title: "Contact Integration",
            description: "Easy ways for potential clients to reach you and start the conversation.",
            details: ["Contact forms", "Calendar booking", "Social links", "Email integration"]
        }
    ];

    return (
        <section
            className="py-20 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            background: "linear-gradient(90deg, color-mix(in srgb, #06b6d4 8%, transparent), color-mix(in srgb, #0891b2 8%, transparent))",
                            borderColor: "color-mix(in srgb, #06b6d4 20%, transparent)",
                            color: "#06b6d4",
                        }}
                    >
                        <Palette className="w-4 h-4" />
                        <span className="text-sm font-semibold">What We Create</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Complete <span style={{ color: "#06b6d4" }}>Portfolio</span> Solutions
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Everything you need to showcase your work, tell your story, and attract your ideal clients.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto mt-6 rounded-full"
                        style={{ background: "linear-gradient(90deg, #06b6d4, #0891b2)" }}
                    />
                </div>

                {/* Features Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Feature List */}
                    <div className="space-y-4">
                        {features.map((feature, idx) => {
                            const Icon = feature.icon;
                            const isActive = activeFeature === idx;

                            return (
                                <div
                                    key={idx}
                                    className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${isActive ? "scale-[1.02]" : "hover:scale-[1.01]"}`}
                                    style={{
                                        backgroundColor: isActive ? "color-mix(in srgb, #06b6d4 10%, var(--card-bg))" : "var(--card-bg)",
                                        borderColor: isActive ? "#06b6d4" : "var(--border-color)",
                                        boxShadow: isActive ? "0 10px 30px -10px rgba(6, 182, 212, 0.3)" : "none"
                                    }}
                                    onClick={() => setActiveFeature(idx)}
                                    onMouseEnter={() => setActiveFeature(idx)}
                                >
                                    <div className="flex items-start gap-4">
                                        <div
                                            className="p-3 rounded-xl transition-colors"
                                            style={{
                                                background: isActive
                                                    ? "linear-gradient(135deg, #06b6d4, #0891b2)"
                                                    : "color-mix(in srgb, #06b6d4 15%, transparent)"
                                            }}
                                        >
                                            <Icon className="w-6 h-6" style={{ color: isActive ? "white" : "#06b6d4" }} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                                {feature.title}
                                            </h3>
                                            <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Feature Details */}
                    <div
                        className="sticky top-24 p-8 rounded-3xl border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)",
                        }}
                    >
                        <div className="mb-6">
                            <div
                                className="inline-flex p-4 rounded-2xl mb-4"
                                style={{ background: "linear-gradient(135deg, #06b6d4, #0891b2)" }}
                            >
                                {(() => {
                                    const Icon = features[activeFeature].icon;
                                    return <Icon className="w-8 h-8 text-white" />;
                                })()}
                            </div>
                            <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                {features[activeFeature].title}
                            </h3>
                            <p className="text-lg" style={{ color: "var(--secondary-text)" }}>
                                {features[activeFeature].description}
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h4 className="text-sm font-bold uppercase tracking-wider" style={{ color: "#06b6d4" }}>
                                Key Features
                            </h4>
                            <ul className="grid grid-cols-2 gap-3">
                                {features[activeFeature].details.map((detail, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-center gap-2 text-sm"
                                        style={{ color: "var(--foreground)" }}
                                    >
                                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
