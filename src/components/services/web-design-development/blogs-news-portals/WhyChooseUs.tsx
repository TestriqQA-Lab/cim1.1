"use client";

import { CheckCircle2, Award, Zap, Users, Shield, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: Award,
            title: "Content Expertise",
            description: "Years of experience building high-traffic blogs and news platforms for publishers worldwide."
        },
        {
            icon: Zap,
            title: "Performance First",
            description: "Optimized for Core Web Vitals ensuring fast load times and excellent user experience."
        },
        {
            icon: Users,
            title: "Reader-Centric Design",
            description: "UX patterns proven to increase time on site, reduce bounce rates, and boost engagement."
        },
        {
            icon: TrendingUp,
            title: "SEO Excellence",
            description: "Built with SEO best practices to help your content rank higher in search results."
        },
        {
            icon: Shield,
            title: "Secure & Scalable",
            description: "Enterprise-grade security with infrastructure that scales with your audience growth."
        }
    ];

    return (
        <section
            className="py-20 transition-colors duration-300"
            style={{ backgroundColor: "color-mix(in srgb, #a855f7 3%, var(--background))" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                            Why Choose Us for Your{" "}
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    background: "linear-gradient(135deg, #a855f7, #ec4899)",
                                    WebkitBackgroundClip: "text",
                                }}
                            >
                                Content Platform
                            </span>
                        </h2>

                        <p className="text-lg mb-8" style={{ color: "var(--secondary-text)" }}>
                            We specialize in building content platforms that not only look great but also perform exceptionally. Our expertise spans from personal blogs to enterprise-level news portals.
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                "Custom CMS integrations",
                                "Mobile-first responsive design",
                                "Advanced analytics setup",
                                "Monetization strategies",
                                "Ongoing support & maintenance"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: "#a855f7" }} />
                                    <span style={{ color: "var(--foreground)" }}>{item}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                            style={{
                                background: "linear-gradient(135deg, #a855f7, #ec4899)",
                            }}
                        >
                            Let&apos;s Build Your Content Platform
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
                                            style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
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
