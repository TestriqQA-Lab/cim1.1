"use client";

import { useState } from "react";
import {
    MessageSquare,
    Shield,
    Code,
    Link2,
    Rocket,
    CheckCircle2,
} from "lucide-react";

export default function Process() {
    const [activeStep, setActiveStep] = useState<number | null>(null);

    const steps = [
        {
            icon: MessageSquare,
            title: "Enterprise Consulting",
            description: "We assess your organization's needs, existing systems, and security requirements to create a comprehensive strategy.",
            details: [
                "Stakeholder interviews",
                "System architecture review",
                "Security requirements",
                "Compliance assessment",
                "ROI analysis",
            ],
            duration: "2-3 Weeks",
        },
        {
            icon: Shield,
            title: "Security Architecture",
            description: "Design secure architecture with SSO, encryption, and compliance requirements built from the ground up.",
            details: [
                "Threat modeling",
                "Security protocols design",
                "SSO/LDAP integration plan",
                "Data encryption strategy",
                "Compliance roadmap",
            ],
            duration: "2-3 Weeks",
        },
        {
            icon: Code,
            title: "Development & Testing",
            description: "Agile development with continuous security testing, code reviews, and enterprise QA standards.",
            details: [
                "Sprint-based development",
                "Security code reviews",
                "Automated testing",
                "Penetration testing",
                "UAT environments",
            ],
            duration: "12-20 Weeks",
        },
        {
            icon: Link2,
            title: "Integration & Migration",
            description: "Seamless integration with your existing enterprise systems, data migration, and SSO configuration.",
            details: [
                "API integrations",
                "Data migration",
                "SSO configuration",
                "MDM enrollment",
                "Legacy system bridges",
            ],
            duration: "3-4 Weeks",
        },
        {
            icon: Rocket,
            title: "Deployment & Support",
            description: "Enterprise rollout with training, documentation, and ongoing 24/7 support with SLA guarantees.",
            details: [
                "Staged rollout",
                "User training",
                "Admin documentation",
                "24/7 support setup",
                "SLA monitoring",
            ],
            duration: "2-4 Weeks",
        },
    ];

    return (
        <section id="process" className="py-24 relative overflow-hidden bg-background">
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Our Enterprise</span>{" "}
                        <span style={{ color: "#2563eb" }}>
                            Development Process
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        A rigorous methodology designed for enterprise-scale deployments with security and compliance at every stage.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div
                        className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 hidden lg:block"
                        style={{
                            backgroundColor: "#2563eb",
                        }}
                    />

                    {/* Steps */}
                    <div className="space-y-12">
                        {steps.map((step, idx) => {
                            const Icon = step.icon;
                            const isActive = activeStep === idx;
                            const isEven = idx % 2 === 0;

                            return (
                                <div
                                    key={idx}
                                    className={`
                                        relative flex flex-col md:flex-row items-center gap-8
                                        ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}
                                    `}
                                    onMouseEnter={() => setActiveStep(idx)}
                                    onMouseLeave={() => setActiveStep(null)}
                                >
                                    {/* Step Number Circle */}
                                    <div
                                        className="absolute left-8 lg:left-1/2 transform -translate-x-1/2 hidden lg:flex"
                                        style={{ zIndex: 10 }}
                                    >
                                        <div
                                            className={`
                                                w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl
                                                transition-all duration-300
                                                ${isActive ? "scale-110 shadow-lg" : "scale-100"}
                                            `}
                                            style={{
                                                backgroundColor: "#2563eb",
                                                boxShadow: isActive ? "0 8px 30px rgba(37, 99, 235, 0.4)" : "none",
                                            }}
                                        >
                                            {idx + 1}
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div
                                        className={`
                                            w-full lg:w-[calc(50%-60px)] p-8 rounded-3xl border transition-all duration-300 cursor-pointer
                                            ${isActive ? "shadow-xl -translate-y-2" : "hover:shadow-lg"}
                                            ${isEven ? "lg:mr-auto" : "lg:ml-auto"}
                                        `}
                                        style={{
                                            backgroundColor: "var(--card-bg)",
                                            borderColor: isActive ? "#2563eb" : "var(--border-color)",
                                        }}
                                    >
                                        <div className="flex items-start gap-4">
                                            {/* Mobile Step Number */}
                                            <div
                                                className="lg:hidden w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                                                style={{ backgroundColor: "#2563eb" }}
                                            >
                                                {idx + 1}
                                            </div>

                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div
                                                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                                                        style={{ backgroundColor: "rgba(37, 99, 235, 0.1)" }}
                                                    >
                                                        <Icon className="w-5 h-5 text-[#2563eb]" />
                                                    </div>
                                                    <div
                                                        className="px-3 py-1 rounded-full text-xs font-semibold"
                                                        style={{
                                                            backgroundColor: "rgba(37, 99, 235, 0.1)",
                                                            color: "#2563eb",
                                                        }}
                                                    >
                                                        {step.duration}
                                                    </div>
                                                </div>

                                                <h3 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                                    {step.title}
                                                </h3>
                                                <p className="mb-4" style={{ color: "var(--secondary-text)" }}>
                                                    {step.description}
                                                </p>

                                                {/* Expandable Details */}
                                                <div
                                                    className={`
                                                        space-y-2 overflow-hidden transition-all duration-300
                                                        ${isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                                                    `}
                                                >
                                                    {step.details.map((detail, dIdx) => (
                                                        <div key={dIdx} className="flex items-center gap-2">
                                                            <CheckCircle2 className="w-4 h-4 text-[#2563eb] flex-shrink-0" />
                                                            <span className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                                                {detail}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
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
