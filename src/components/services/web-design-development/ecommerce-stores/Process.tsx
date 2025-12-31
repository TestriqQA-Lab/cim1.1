"use client";

import { Search, Palette, Code, TestTube, Rocket, BarChart3 } from "lucide-react";

export default function Process() {
    const steps = [
        {
            number: "01",
            icon: Search,
            title: "Commerce Strategy & Discovery",
            description: "We analyze your products, target audience, competitive landscape, and revenue goals to define a commerce strategy that drives measurable results.",
            deliverables: ["Market analysis", "Customer journey mapping", "Conversion funnel design", "Tech stack selection"],
        },
        {
            number: "02",
            icon: Palette,
            title: "UX Design & Product Merchandising",
            description: "Creating visually compelling product presentation with optimized category navigation, search functionality, and mobile-first checkout experiences.",
            deliverables: ["Product page wireframes", "Collection layouts", "Checkout flow design", "Mobile optimization"],
        },
        {
            number: "03",
            icon: Code,
            title: "Platform Development",
            description: "Building your store on the optimal platform—Shopify, WooCommerce, or custom headless—with payment gateways, inventory systems, and shipping integrations.",
            deliverables: ["Platform setup", "Payment integration", "Shipping configuration", "Inventory sync"],
        },
        {
            number: "04",
            icon: TestTube,
            title: "Testing & Quality Assurance",
            description: "Comprehensive testing of purchase flows, payment processing, edge cases, and load testing to ensure flawless performance under peak traffic.",
            deliverables: ["Checkout testing", "Payment validation", "Load testing", "Cross-device QA"],
        },
        {
            number: "05",
            icon: Rocket,
            title: "Launch & Optimization",
            description: "Coordinated launch with SEO configuration, analytics setup, and initial marketing integrations to capture early sales momentum.",
            deliverables: ["SEO setup", "Analytics config", "Email integration", "Social pixels"],
        },
        {
            number: "06",
            icon: BarChart3,
            title: "Growth & Iteration",
            description: "Ongoing optimization with A/B testing, conversion analysis, and feature enhancements based on real customer behavior data.",
            deliverables: ["A/B testing", "Conversion reports", "Feature roadmap", "Performance monitoring"],
        },
    ];

    return (
        <section
            className="py-16 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Our <span style={{ color: "#00b5ca" }}>E-commerce Development</span> Process
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: "var(--secondary-text)" }}>
                        A conversion-focused methodology that prioritizes speed to market while building a foundation for long-term revenue growth.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #00b5ca, #00efd6)",
                        }}
                    />
                </div>

                {/* Process Steps */}
                <div className="space-y-8">
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        const isEven = idx % 2 === 0;
                        return (
                            <div
                                key={idx}
                                className={`flex flex-col lg:flex-row gap-8 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}
                            >
                                {/* Step Number & Icon */}
                                <div className="lg:w-1/3 flex flex-col items-center text-center">
                                    <div
                                        className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4"
                                        style={{
                                            background: "linear-gradient(135deg, #00b5ca, #00efd6)",
                                        }}
                                    >
                                        <Icon className="w-10 h-10 text-white" />
                                    </div>
                                    <div
                                        className="text-5xl font-bold mb-2"
                                        style={{
                                            background: "linear-gradient(90deg, #00b5ca, #00efd6)",
                                            WebkitBackgroundClip: "text",
                                            color: "transparent",
                                        }}
                                    >
                                        {step.number}
                                    </div>
                                    <h3 className="text-xl font-bold" style={{ color: "var(--foreground)" }}>
                                        {step.title}
                                    </h3>
                                </div>

                                {/* Step Content */}
                                <div
                                    className="lg:w-2/3 p-8 rounded-2xl border"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: "var(--border-color)",
                                    }}
                                >
                                    <p className="text-lg mb-6" style={{ color: "var(--secondary-text)", lineHeight: "1.8" }}>
                                        {step.description}
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {step.deliverables.map((deliverable, didx) => (
                                            <span
                                                key={didx}
                                                className="px-4 py-2 rounded-full text-sm font-medium"
                                                style={{
                                                    backgroundColor: "color-mix(in srgb, #00b5ca 10%, transparent)",
                                                    color: "#00b5ca",
                                                }}
                                            >
                                                {deliverable}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
