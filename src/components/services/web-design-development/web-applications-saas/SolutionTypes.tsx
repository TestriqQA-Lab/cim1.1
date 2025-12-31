"use client";

import { Code2, Layers, Rocket, LayoutDashboard, CreditCard, Puzzle } from "lucide-react";

export default function SolutionTypes() {
    const solutions = [
        {
            icon: Code2,
            title: "Custom Web Applications",
            description: "Bespoke software solutions built from scratch to address unique business challenges that off-the-shelf software can't solve.",
            features: ["Custom workflows", "Business logic automation", "Third-party integrations", "Legacy modernization"],
            color: "from-[#008ac1] to-[#00b5ca]",
        },
        {
            icon: Layers,
            title: "SaaS Platforms",
            description: "Multi-tenant software-as-a-service products with subscription billing, user management, and enterprise-ready features.",
            features: ["Multi-tenancy", "Subscription billing", "User provisioning", "White-label ready"],
            color: "from-[#bc3feb] to-[#fab900]",
        },
        {
            icon: Rocket,
            title: "MVP Development",
            description: "Rapid prototyping and minimum viable products to validate your idea with real users before committing to full-scale development.",
            features: ["4-8 week delivery", "Core feature focus", "User testing", "Iteration-ready"],
            color: "from-[#fab900] to-[#ee6500]",
        },
        {
            icon: LayoutDashboard,
            title: "Dashboards & Admin Panels",
            description: "Data visualization dashboards, admin interfaces, and internal tools that give your team superpowers to manage operations.",
            features: ["Real-time data", "Custom reports", "Role-based access", "Data exports"],
            color: "from-[#00efd6] to-[#00b5ca]",
        },
        {
            icon: CreditCard,
            title: "Billing & Subscription Systems",
            description: "Complex billing logic including usage-based pricing, tiered plans, trials, and enterprise contract management.",
            features: ["Stripe/Paddle integration", "Usage tracking", "Invoice generation", "Revenue analytics"],
            color: "from-[#008ac1] to-[#bc3feb]",
        },
        {
            icon: Puzzle,
            title: "API-Driven Applications",
            description: "Backend services and APIs that power mobile apps, third-party integrations, and headless frontend experiences.",
            features: ["REST/GraphQL APIs", "Webhook systems", "SDK generation", "API documentation"],
            color: "from-[#ee6500] to-[#fab900]",
        },
    ];

    return (
        <section
            className="py-16 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        <span style={{ color: "#008ac1" }}>Web Application Solutions</span> We Build
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: "var(--secondary-text)" }}>
                        From quick MVPs to complex enterprise platforms, we build web applications that solve real problems and scale with your business.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #008ac1, #bc3feb)",
                        }}
                    />
                </div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, idx) => {
                        const Icon = solution.icon;
                        return (
                            <div
                                key={idx}
                                className="group rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-lg hover:-translate-y-2 h-full flex flex-col"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                {/* Header with Icon */}
                                <div
                                    className={`flex gap-3 p-6 bg-gradient-to-br ${solution.color} relative overflow-hidden`}
                                >
                                    <div className="absolute inset-0 opacity-10" style={{ background: "linear-gradient(135deg, white, transparent)" }} />
                                    <Icon className="w-8 h-8 text-white relative z-10" />
                                    <h3 className="text-lg font-bold text-white relative z-10 flex items-center h-8">
                                        {solution.title}
                                    </h3>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <p className="text-sm mb-6 flex-1" style={{ color: "var(--secondary-text)", lineHeight: "1.6" }}>
                                        {solution.description}
                                    </p>

                                    {/* Features */}
                                    <ul className="space-y-2">
                                        {solution.features.map((feature, fidx) => (
                                            <li key={fidx} className="flex items-start gap-2 text-sm">
                                                <span
                                                    className={`w-4 h-4 rounded-full flex-shrink-0 mt-0.5 bg-gradient-to-br ${solution.color}`}
                                                />
                                                <span style={{ color: "var(--secondary-text)" }}>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
