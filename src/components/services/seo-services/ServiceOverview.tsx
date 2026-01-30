"use client";

import { Eye, Globe, TrendingUp, Users, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const features = [
        {
            icon: TrendingUp,
            title: "Sustainable Traffic",
            description: "Unlike PPC, Organic SEO services build an evergreen funnel. We focus on ranking for high-intent keywords that drive qualified traffic 24/7 without the recurring cost per click.",
        },
        {
            icon: Users,
            title: "High-Intent Leads",
            description: "We target the \"money keywords.\" Our Organic SEO for lead generation targets users at the bottom of the funnel—those ready to buy—ensuring your traffic converts into revenue.",
        },
        {
            icon: Globe,
            title: "Brand Authority",
            description: "Ranking #1 signals trust. We use E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) principles to position your brand as the industry leader, critical for Organic SEO for brand authority.",
        },
        {
            icon: Eye,
            title: "ROI-Focused Growth",
            description: "We don't just chase rankings; we chase revenue. Our ROI-focused organic SEO services are aligned with your business KPIs, ensuring every optimization contributes to your bottom line.",
        },
    ];

    return (
        <section className="py-16 md:py-24 transition-colors duration-300" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 rounded-full border backdrop-blur-sm"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--brand-seo) 10%, transparent)",
                            borderColor: "var(--brand-seo)",
                        }}
                    >
                        <TrendingUp className="w-4 h-4" style={{ color: "var(--brand-seo)" }} />
                        <span className="text-sm font-bold tracking-wide" style={{ color: "var(--brand-seo)" }}>
                            ORGANIC GROWTH
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        The Power of <span style={{ color: "var(--brand-seo)" }}>Organic Growth</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        In an era of AI Overviews and evolving core updates, Long-term organic search visibility is your most valuable asset.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="group p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--card-bg) 80%, transparent)",
                                    borderColor: "var(--border-color)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = "var(--brand-seo)";
                                    e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--brand-seo) 5%, var(--card-bg))";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = "var(--border-color)";
                                    e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--card-bg) 80%, transparent)";
                                }}
                            >
                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-xl p-3 mb-5 group-hover:scale-110 transition-transform"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--brand-seo) 15%, transparent)",
                                    }}
                                >
                                    <Icon className="w-full h-full" style={{ color: "var(--brand-seo)" }} />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--brand-seo)] transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-sm leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div
                        className="inline-flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 rounded-2xl border"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--brand-seo) 5%, var(--card-bg))",
                            borderColor: "var(--border-color)",
                        }}
                    >
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-6 h-6" style={{ color: "var(--brand-seo)" }} />
                            <span className="text-lg font-semibold">Ready to grow organically?</span>
                        </div>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold hover:scale-105 transition-transform"
                            style={{ backgroundColor: "var(--brand-seo)" }}
                            aria-label="Get started with organic growth"
                        >
                            Get Started
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
