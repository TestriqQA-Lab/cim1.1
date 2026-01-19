"use client";

import { Search, FileText, Code, Gauge, BarChart, RefreshCw } from "lucide-react";

export default function Process() {
    // SEO Green theme color
    const seoGreen = "#22C55E";

    const steps = [
        {
            icon: Search,
            title: "SEO Audit",
            description: "Comprehensive analysis of your current on-page elements, identifying gaps and opportunities.",
        },
        {
            icon: FileText,
            title: "Keyword Mapping",
            description: "Strategic keyword assignment to pages based on search intent and competition analysis.",
        },
        {
            icon: Code,
            title: "Technical Implementation",
            description: "Optimizing title tags, meta descriptions, headers, and implementing schema markup.",
        },
        {
            icon: Gauge,
            title: "Content Optimization",
            description: "Enhancing content quality, readability, and keyword placement for better rankings.",
        },
        {
            icon: BarChart,
            title: "Performance Tracking",
            description: "Monitoring rankings, traffic, and engagement metrics to measure improvement.",
        },
        {
            icon: RefreshCw,
            title: "Continuous Refinement",
            description: "Ongoing optimization based on algorithm updates and performance data.",
        },
    ];

    return (
        <section
            id="process"
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Our Proven <span style={{ color: seoGreen }}>Process</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        A systematic approach to on-page SEO that delivers measurable results.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={idx}
                                className="group relative p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                style={{
                                    borderColor: "var(--border-color)",
                                    backgroundColor: "var(--card-bg)"
                                }}
                            >
                                {/* Step Number */}
                                <div
                                    className="absolute top-8 right-8 text-4xl font-bold transition-colors group-hover:opacity-100 opacity-30"
                                    style={{ color: seoGreen }}
                                >
                                    0{idx + 1}
                                </div>

                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300"
                                    style={{
                                        backgroundColor: seoGreen,
                                        color: "white"
                                    }}
                                >
                                    <Icon className="w-7 h-7" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                    {step.title}
                                </h3>
                                <p className="leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                    {step.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
