"use client";

import { Rocket, Building2, Briefcase, Layers, Users, Cog } from "lucide-react";

export default function UseCases() {
    const industries = [
        {
            icon: Rocket,
            title: "Tech Startups & Scale-Ups",
            description: "Early and growth-stage companies building their core product, needing rapid iteration and scalable architecture from day one.",
            example: "B2B SaaS with $5M ARR and 10k users",
        },
        {
            icon: Building2,
            title: "Enterprise Digital Products",
            description: "Large organizations launching internal tools, customer portals, or new digital product lines alongside existing systems.",
            example: "Fortune 500 internal workflow platform",
        },
        {
            icon: Briefcase,
            title: "Professional Services Firms",
            description: "Consulting, legal, and accounting firms building client portals, collaboration tools, and proprietary software.",
            example: "Law firm client document portal",
        },
        {
            icon: Layers,
            title: "Marketplace Platforms",
            description: "Two-sided marketplaces connecting buyers with sellers, service providers with clients, or talent with employers.",
            example: "B2B marketplace with 500+ vendors",
        },
        {
            icon: Users,
            title: "Community & Collaboration Tools",
            description: "Member communities, learning management systems, and collaboration platforms with real-time features.",
            example: "Professional community with 50k members",
        },
        {
            icon: Cog,
            title: "Workflow & Automation Tools",
            description: "Business process automation, project management, and operational tools that replace spreadsheets and manual processes.",
            example: "Operations platform replacing 15 tools",
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
                        Who We <span style={{ color: "#008ac1" }}>Build For</span>
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: "var(--secondary-text)" }}>
                        We partner with ambitious teams who are building software products that transform their industries.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #008ac1, #bc3feb)",
                        }}
                    />
                </div>

                {/* Industries Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry, idx) => {
                        const Icon = industry.icon;
                        return (
                            <div
                                key={idx}
                                className="p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                                    style={{
                                        background: "linear-gradient(135deg, color-mix(in srgb, #008ac1 15%, transparent), color-mix(in srgb, #bc3feb 15%, transparent))",
                                    }}
                                >
                                    <Icon className="w-7 h-7" style={{ color: "#008ac1" }} />
                                </div>

                                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                    {industry.title}
                                </h3>

                                <p className="text-sm mb-4" style={{ color: "var(--secondary-text)", lineHeight: "1.6" }}>
                                    {industry.description}
                                </p>

                                <div
                                    className="p-3 rounded-xl"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, #008ac1 5%, transparent)",
                                    }}
                                >
                                    <p className="text-xs font-medium" style={{ color: "#008ac1" }}>
                                        Example: {industry.example}
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
