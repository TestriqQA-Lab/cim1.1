"use client";

import { Search, FileCode, Gauge, Shield, BarChart, RefreshCw } from "lucide-react";

export default function Process() {
    // Technical SEO Purple theme color
    const techPurple = "#8B5CF6";

    const steps = [
        {
            icon: Search,
            title: "Technical Audit",
            description: "Comprehensive crawl analysis to identify technical issues affecting search performance.",
        },
        {
            icon: FileCode,
            title: "Crawl Optimization",
            description: "Fixing robots.txt, XML sitemaps, and ensuring efficient crawl budget utilization.",
        },
        {
            icon: Gauge,
            title: "Speed Optimization",
            description: "Improving Core Web Vitals, server response times, and resource loading.",
        },
        {
            icon: Shield,
            title: "Security Implementation",
            description: "HTTPS migration, security headers, and trust signal optimization.",
        },
        {
            icon: BarChart,
            title: "Indexation Monitoring",
            description: "Tracking index coverage, fixing errors, and monitoring search console data.",
        },
        {
            icon: RefreshCw,
            title: "Ongoing Maintenance",
            description: "Regular audits, algorithm update assessments, and continuous improvement.",
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
                        Our Proven <span style={{ color: techPurple }}>Process</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        A systematic approach to technical SEO that ensures long-term success.
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
                                    style={{ color: techPurple }}
                                >
                                    0{idx + 1}
                                </div>

                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300"
                                    style={{
                                        backgroundColor: techPurple,
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
