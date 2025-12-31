"use client";

import { Building2, Briefcase, GraduationCap, Stethoscope, Scale, Landmark } from "lucide-react";

export default function UseCases() {
    const industries = [
        {
            icon: Building2,
            title: "Multinational Corporations",
            description: "Global enterprises requiring multi-region websites with localized content, unified brand standards, and integration with corporate systems.",
            example: "Fortune 500 manufacturer with 40+ country sites",
        },
        {
            icon: Briefcase,
            title: "Professional Services Firms",
            description: "Law firms, consultancies, and accounting practices needing sophisticated websites that convey expertise and generate qualified leads.",
            example: "Global consulting firm with partner profiles and case studies",
        },
        {
            icon: GraduationCap,
            title: "Educational Institutions",
            description: "Universities, colleges, and private schools with complex information architecture serving students, faculty, parents, and alumni.",
            example: "Private university with 200k+ pages and student portal",
        },
        {
            icon: Stethoscope,
            title: "Healthcare Organizations",
            description: "Hospital systems, medical groups, and healthcare networks requiring HIPAA-compliant websites with physician directories and patient resources.",
            example: "Regional hospital network with 15 facility sites",
        },
        {
            icon: Scale,
            title: "Government & Public Sector",
            description: "Government agencies and public institutions requiring accessible, secure websites that serve diverse citizen needs and meet compliance standards.",
            example: "State agency with ADA-compliant citizen services portal",
        },
        {
            icon: Landmark,
            title: "Financial Institutions",
            description: "Banks, investment firms, and insurance companies needing secure, trust-building websites with investor relations and regulatory content.",
            example: "Regional bank with branch locator and IR section",
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
                        Industries We <span style={{ color: "#fab900" }}>Serve</span>
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: "var(--secondary-text)" }}>
                        We have deep expertise in building corporate websites for organizations across industries with complex requirements and high stakeholder expectations.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #fab900, #ee6500)",
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
                                        background: "linear-gradient(135deg, color-mix(in srgb, #fab900 15%, transparent), color-mix(in srgb, #ee6500 15%, transparent))",
                                    }}
                                >
                                    <Icon className="w-7 h-7" style={{ color: "#fab900" }} />
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
                                        backgroundColor: "color-mix(in srgb, #fab900 5%, transparent)",
                                    }}
                                >
                                    <p className="text-xs font-medium" style={{ color: "#fab900" }}>
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
