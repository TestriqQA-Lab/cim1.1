"use client";

import { useState } from "react";
import { Newspaper, FileText, Rss, Search, Users, Zap, Shield, Globe, BarChart3, Palette } from "lucide-react";

export default function ServiceOverview() {
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        {
            icon: FileText,
            title: "Content Management",
            description: "Intuitive CMS that makes publishing, editing, and organizing content effortless for your team.",
            details: ["WYSIWYG editors", "Media library", "Content scheduling", "Version control"]
        },
        {
            icon: Search,
            title: "SEO Optimization",
            description: "Built-in SEO tools to help your content rank higher and attract organic traffic.",
            details: ["Meta tag management", "Schema markup", "Sitemap generation", "Performance optimization"]
        },
        {
            icon: Users,
            title: "Reader Engagement",
            description: "Features that keep readers engaged and coming back for more content.",
            details: ["Comment systems", "Social sharing", "Newsletter integration", "Related content"]
        },
        {
            icon: BarChart3,
            title: "Analytics & Insights",
            description: "Comprehensive analytics to understand your audience and optimize content strategy.",
            details: ["Traffic analytics", "Reader behavior", "Content performance", "Conversion tracking"]
        },
        {
            icon: Zap,
            title: "Performance",
            description: "Lightning-fast load times that keep readers engaged and improve SEO rankings.",
            details: ["CDN integration", "Image optimization", "Lazy loading", "Caching strategies"]
        },
        {
            icon: Palette,
            title: "Custom Design",
            description: "Unique, branded designs that reflect your identity and stand out from the crowd.",
            details: ["Custom themes", "Responsive design", "Dark mode support", "Accessibility compliant"]
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
                            background: "linear-gradient(90deg, color-mix(in srgb, #a855f7 8%, transparent), color-mix(in srgb, #ec4899 8%, transparent))",
                            borderColor: "color-mix(in srgb, #a855f7 20%, transparent)",
                            color: "#a855f7",
                        }}
                    >
                        <Newspaper className="w-4 h-4" />
                        <span className="text-sm font-semibold">What We Offer</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Complete <span style={{ color: "#a855f7" }}>Content Platform</span> Solutions
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Everything you need to build, manage, and grow a successful blog or news portal that attracts and retains readers.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto mt-6 rounded-full"
                        style={{ background: "linear-gradient(90deg, #a855f7, #ec4899)" }}
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
                                        backgroundColor: isActive ? "color-mix(in srgb, #a855f7 10%, var(--card-bg))" : "var(--card-bg)",
                                        borderColor: isActive ? "#a855f7" : "var(--border-color)",
                                        boxShadow: isActive ? "0 10px 30px -10px rgba(168, 85, 247, 0.3)" : "none"
                                    }}
                                    onClick={() => setActiveFeature(idx)}
                                    onMouseEnter={() => setActiveFeature(idx)}
                                >
                                    <div className="flex items-start gap-4">
                                        <div
                                            className="p-3 rounded-xl transition-colors"
                                            style={{
                                                background: isActive
                                                    ? "linear-gradient(135deg, #a855f7, #ec4899)"
                                                    : "color-mix(in srgb, #a855f7 15%, transparent)"
                                            }}
                                        >
                                            <Icon className="w-6 h-6" style={{ color: isActive ? "white" : "#a855f7" }} />
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
                                style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
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
                            <h4 className="text-sm font-bold uppercase tracking-wider" style={{ color: "#a855f7" }}>
                                Key Features
                            </h4>
                            <ul className="grid grid-cols-2 gap-3">
                                {features[activeFeature].details.map((detail, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-center gap-2 text-sm"
                                        style={{ color: "var(--foreground)" }}
                                    >
                                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-pink-500" />
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
