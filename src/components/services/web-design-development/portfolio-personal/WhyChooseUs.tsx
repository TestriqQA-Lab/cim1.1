"use client";

import { CheckCircle2, Award, Palette, Eye, Zap, Shield } from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: Palette,
            title: "Design Excellence",
            description: "Award-winning designs that make your portfolio stand out and leave lasting impressions."
        },
        {
            icon: Eye,
            title: "Conversion Focused",
            description: "Strategic layouts designed to turn portfolio visitors into paying clients."
        },
        {
            icon: Zap,
            title: "Fast Performance",
            description: "Optimized for speed with instant page loads and smooth animations."
        },
        {
            icon: Award,
            title: "SEO Optimized",
            description: "Built with SEO best practices so clients can find you in search results."
        },
        {
            icon: Shield,
            title: "Future-Proof",
            description: "Modern tech stack that ensures your portfolio stays relevant for years."
        }
    ];

    return (
        <section
            className="py-20 transition-colors duration-300"
            style={{ backgroundColor: "color-mix(in srgb, #06b6d4 3%, var(--background))" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                            style={{
                                backgroundColor: "rgba(6, 182, 212, 0.05)",
                                borderColor: "rgba(6, 182, 212, 0.2)",
                            }}
                        >
                            <Award className="w-4 h-4" style={{ color: "#06b6d4" }} />
                            <span className="text-sm font-medium" style={{ color: "#06b6d4" }}>
                                Why Choose Us
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                            Why Choose Us for Your{" "}
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    background: "linear-gradient(135deg, #06b6d4, #0891b2)",
                                    WebkitBackgroundClip: "text",
                                }}
                            >
                                Portfolio
                            </span>
                        </h2>

                        <p className="text-lg mb-8" style={{ color: "var(--secondary-text)" }}>
                            We specialize in creating portfolio websites that do more than just look good-they actively help you win clients and grow your career.
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                "Custom designs tailored to your brand",
                                "Mobile-first responsive layouts",
                                "Interactive project showcases",
                                "Integrated contact & booking",
                                "Ongoing support & updates"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: "#06b6d4" }} />
                                    <span style={{ color: "var(--foreground)" }}>{item}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                            style={{
                                background: "linear-gradient(135deg, #06b6d4, #0891b2)",
                            }}
                        >
                            Start Your Portfolio Project
                            <span>→</span>
                        </Link>
                    </div>

                    {/* Right Content - Reasons Grid */}
                    <div className="grid gap-4">
                        {reasons.map((reason, idx) => {
                            const Icon = reason.icon;
                            return (
                                <div
                                    key={idx}
                                    className="p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: "var(--border-color)",
                                    }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div
                                            className="p-3 rounded-xl"
                                            style={{ background: "linear-gradient(135deg, #06b6d4, #0891b2)" }}
                                        >
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold mb-1" style={{ color: "var(--foreground)" }}>
                                                {reason.title}
                                            </h3>
                                            <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                                {reason.description}
                                            </p>
                                        </div>
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
