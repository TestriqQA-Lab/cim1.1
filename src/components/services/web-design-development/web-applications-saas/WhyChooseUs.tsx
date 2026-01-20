"use client";

import { Code, Layers, Rocket, Shield, Users, RefreshCw } from "lucide-react";

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: Code,
            title: "Clean, Maintainable Code",
            description: "SOLID principles, comprehensive testing, and documentation that enables your team to iterate and extend the product long-term.",
            color: "from-[#008ac1] to-[#00b5ca]",
        },
        {
            icon: Layers,
            title: "Scalable Architecture",
            description: "Microservices, serverless, or modular monolith-we choose the right architecture pattern for your scale and team size.",
            color: "from-[#fab900] to-[#ee6500]",
        },
        {
            icon: Rocket,
            title: "MVP to Enterprise Roadmap",
            description: "We help you launch fast with an MVP, then iteratively add features based on user feedback and market validation.",
            color: "from-[#00efd6] to-[#00b5ca]",
        },
        {
            icon: Shield,
            title: "Security-First Development",
            description: "OWASP Top 10 compliance, penetration testing, and security audits built into our development process from day one.",
            color: "from-[#bc3feb] to-[#fab900]",
        },
        {
            icon: Users,
            title: "Product & Engineering Combined",
            description: "We don't just write code-we contribute to product strategy, UX decisions, and technical architecture to maximize value.",
            color: "from-[#008ac1] to-[#bc3feb]",
        },
        {
            icon: RefreshCw,
            title: "DevOps & CI/CD",
            description: "Automated testing, deployment pipelines, and infrastructure-as-code ensuring reliable releases and minimal downtime.",
            color: "from-[#ee6500] to-[#fab900]",
        },
    ];

    return (
        <section
            className="py-16 transition-colors duration-300"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-12">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(0, 138, 193, 0.05)",
                            borderColor: "rgba(0, 138, 193, 0.2)",
                        }}
                    >
                        <Users className="w-4 h-4" style={{ color: "#008ac1" }} />
                        <span className="text-sm font-medium" style={{ color: "#008ac1" }}>
                            Why Choose Us
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Why <span style={{ color: "#008ac1" }}>Product Teams</span> Choose Us
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: "var(--secondary-text)" }}>
                        We're not an agency that deploys and disappears-we're your technical co-founder, invested in your product's long-term success.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #008ac1, #bc3feb)",
                        }}
                    />
                </div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((reason, idx) => {
                        const Icon = reason.icon;
                        return (
                            <div
                                key={idx}
                                className="group rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                {/* Header with Icon */}
                                <div
                                    className={`flex items-center gap-4 p-6 bg-gradient-to-br ${reason.color} relative overflow-hidden`}
                                >
                                    <div className="absolute inset-0 opacity-10" style={{ background: "linear-gradient(135deg, white, transparent)" }} />
                                    <Icon className="w-8 h-8 text-white relative z-10" />
                                    <h3 className="text-lg font-bold text-white relative z-10">
                                        {reason.title}
                                    </h3>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <p className="text-sm" style={{ color: "var(--secondary-text)", lineHeight: "1.6" }}>
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
