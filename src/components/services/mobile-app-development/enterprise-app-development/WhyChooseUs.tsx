"use client";

import { useState } from "react";
import {
    Shield,
    Scale,
    FileCheck,
    Headphones,
    Lock,
    TrendingUp,
} from "lucide-react";

export default function WhyChooseUs() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const reasons = [
        {
            icon: Shield,
            title: "Enterprise-Grade Security",
            description: "Bank-level encryption, penetration testing, and security audits. SOC 2 Type II and HIPAA compliance capabilities.",
            shadowColor: "rgba(37, 99, 235, 0.3)",
        },
        {
            icon: Scale,
            title: "Infinite Scalability",
            description: "Architecture designed to scale from hundreds to millions of users without performance degradation.",
            shadowColor: "rgba(37, 99, 235, 0.3)",
        },
        {
            icon: FileCheck,
            title: "Compliance Ready",
            description: "Built-in compliance for GDPR, HIPAA, SOC 2, FedRAMP, and industry-specific regulations.",
            shadowColor: "rgba(37, 99, 235, 0.3)",
        },
        {
            icon: Headphones,
            title: "24/7 Enterprise Support",
            description: "Dedicated support team with guaranteed SLAs, proactive monitoring, and rapid incident response.",
            shadowColor: "rgba(37, 99, 235, 0.3)",
        },
        {
            icon: Lock,
            title: "SSO & MDM Integration",
            description: "Seamless integration with Azure AD, Okta, and enterprise MDM solutions for secure deployment.",
            shadowColor: "rgba(37, 99, 235, 0.3)",
        },
        {
            icon: TrendingUp,
            title: "Proven Track Record",
            description: "Over 85 enterprise clients across manufacturing, healthcare, finance, and government sectors.",
            shadowColor: "rgba(37, 99, 235, 0.3)",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden"
            style={{ backgroundColor: "var(--card-bg)" }}
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute -top-48 -right-48 w-96 h-96 rounded-full opacity-10 blur-3xl"
                    style={{ backgroundColor: "#2563eb" }}
                />
                <div
                    className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full opacity-10 blur-3xl"
                    style={{ backgroundColor: "#2563eb" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Why Choose</span>{" "}
                        <span style={{ color: "#2563eb" }}>
                            Enterprise Development
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        The enterprise expertise, security, and reliability your organization demands.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, idx) => {
                        const Icon = reason.icon;
                        const isHovered = hoveredCard === idx;

                        return (
                            <div
                                key={idx}
                                className="relative cursor-pointer"
                                onMouseEnter={() => setHoveredCard(idx)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Glow Effect */}
                                <div
                                    className={`
                                        absolute -inset-1 rounded-3xl blur-xl transition-opacity duration-500
                                        ${isHovered ? "opacity-100" : "opacity-0"}
                                    `}
                                    style={{ backgroundColor: "rgba(37, 99, 235, 0.2)" }}
                                />

                                {/* Card */}
                                <div
                                    className={`
                                        relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden
                                        ${isHovered ? "shadow-2xl" : ""}
                                    `}
                                    style={{
                                        backgroundColor: "var(--background)",
                                        borderColor: isHovered ? "#2563eb" : "var(--border-color)",
                                        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                                    }}
                                >
                                    {/* Icon */}
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500"
                                        style={{
                                            backgroundColor: "#2563eb",
                                            transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
                                            boxShadow: isHovered ? `0 8px 24px ${reason.shadowColor}` : "none",
                                        }}
                                    >
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3
                                        className="text-xl font-bold mb-3 transition-colors duration-300"
                                        style={{
                                            color: isHovered ? "#2563eb" : "var(--foreground)",
                                        }}
                                    >
                                        {reason.title}
                                    </h3>
                                    <p
                                        className="leading-relaxed"
                                        style={{ color: "var(--secondary-text)" }}
                                    >
                                        {reason.description}
                                    </p>

                                    {/* Bottom accent line */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 transition-all duration-500"
                                        style={{
                                            width: isHovered ? "100%" : "0%",
                                            backgroundColor: "#2563eb",
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
