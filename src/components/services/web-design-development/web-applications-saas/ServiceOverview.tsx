"use client";

import { Code2, Layers, Database, Zap, Lock, Settings } from "lucide-react";

export default function ServiceOverview() {
    return (
        <section
            className="px-6 md:px-12 xl:px-20 py-16 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div>
                {/* Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            background:
                                "linear-gradient(90deg, color-mix(in srgb, #008ac1 8%, transparent), color-mix(in srgb, #bc3feb 8%, transparent))",
                            borderColor: "color-mix(in srgb, #008ac1 20%, transparent)",
                            color: "#008ac1",
                        }}
                    >
                        <Code2 className="w-4 h-4" />
                        <span className="text-sm font-semibold">Service Overview</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Your <span style={{ color: "#008ac1" }}>Digital Product Partner</span> From Concept to Scale
                    </h2>

                    <div
                        className="w-24 h-1.5 mx-auto mb-8 rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #008ac1, #bc3feb)",
                        }}
                    />
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <p className="text-lg" style={{ color: "var(--foreground)", fontWeight: 500 }}>
                            A <span style={{ color: "#008ac1", fontWeight: 700 }}>web application</span> or <span style={{ color: "#008ac1", fontWeight: 700 }}>SaaS platform</span> is not a website—it's a software product that solves real problems, automates workflows, and generates recurring revenue.
                        </p>

                        <p style={{ color: "var(--secondary-text)", fontSize: "1.1rem", lineHeight: "1.8" }}>
                            We specialize in building custom web applications and SaaS platforms that handle complex business logic, scale to millions of users, and maintain enterprise-grade security. From internal B2B tools to customer-facing B2C platforms, we architect systems designed for growth.
                        </p>

                        <p style={{ color: "var(--secondary-text)", fontSize: "1.1rem", lineHeight: "1.8" }}>
                            Whether you're launching an MVP to validate your idea or scaling an existing product, we bring the technical expertise and product thinking to turn your vision into a market-ready solution.
                        </p>

                        <div className="pt-4">
                            <h3 className="text-xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                                The SaaS Opportunity
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "SaaS market projected to reach $908B by 2030",
                                    "Recurring revenue models create predictable cash flow",
                                    "Cloud-native architecture enables global distribution",
                                    "Product-market fit drives exponential growth",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span
                                            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold mt-0.5"
                                            style={{
                                                background: "linear-gradient(90deg, #008ac1, #bc3feb)",
                                            }}
                                        >
                                            ✓
                                        </span>
                                        <span style={{ color: "var(--secondary-text)" }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Content - Key Differentiators */}
                    <div className="space-y-4">
                        {[
                            {
                                icon: Layers,
                                title: "Multi-Tenant Architecture",
                                description: "Isolated data with shared infrastructure, enabling cost-efficient scaling while maintaining data security between customers."
                            },
                            {
                                icon: Database,
                                title: "API-First Development",
                                description: "RESTful and GraphQL APIs designed for extensibility, enabling integrations with third-party tools and future mobile apps."
                            },
                            {
                                icon: Zap,
                                title: "Real-Time Capabilities",
                                description: "WebSocket and event-driven architecture for live dashboards, notifications, and collaborative features."
                            },
                            {
                                icon: Lock,
                                title: "Enterprise-Grade Security",
                                description: "OAuth 2.0, SSO integration, data encryption at rest and in transit, and comprehensive audit logging."
                            },
                            {
                                icon: Settings,
                                title: "Subscription & Billing",
                                description: "Stripe, Paddle, or custom billing integration with tiered pricing, usage-based billing, and subscription lifecycle management."
                            },
                        ].map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={idx}
                                    className="p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: "var(--border-color)",
                                    }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                            style={{
                                                background: "linear-gradient(135deg, color-mix(in srgb, #008ac1 15%, transparent), color-mix(in srgb, #bc3feb 15%, transparent))",
                                            }}
                                        >
                                            <Icon className="w-6 h-6" style={{ color: "#008ac1" }} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                                {item.title}
                                            </h4>
                                            <p className="text-sm" style={{ color: "var(--secondary-text)", lineHeight: "1.6" }}>
                                                {item.description}
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
