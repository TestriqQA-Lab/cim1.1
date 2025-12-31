"use client";

import { Building2, Users, FileText, ShieldCheck, Globe, Landmark } from "lucide-react";

export default function SolutionTypes() {
    const solutions = [
        {
            icon: Building2,
            title: "Corporate Websites",
            description: "Flagship digital presence for established companies, featuring brand storytelling, leadership profiles, and company milestones that communicate organizational excellence.",
            features: ["Executive profiles", "Company history timeline", "Mission & values", "News & press releases"],
            color: "from-[#008ac1] to-[#00b5ca]",
        },
        {
            icon: Users,
            title: "Company Portals",
            description: "Secure internal platforms for employees, partners, and clients with role-based access, document management, and integrated communication tools.",
            features: ["Employee directories", "Document repositories", "Partner dashboards", "Secure file sharing"],
            color: "from-[#bc3feb] to-[#fab900]",
        },
        {
            icon: Landmark,
            title: "Investor Relations Sites",
            description: "Dedicated platforms for stakeholder communication with financial reports, stock information, governance documents, and regulatory filings.",
            features: ["Stock ticker integration", "Annual reports library", "Earnings call archives", "ESG disclosures"],
            color: "from-[#fab900] to-[#ee6500]",
        },
        {
            icon: FileText,
            title: "Brand-Focused Microsites",
            description: "Campaign-specific digital experiences that extend your brand for product launches, initiatives, or targeted marketing efforts.",
            features: ["Campaign landing pages", "Product showcases", "Event microsites", "Brand storytelling"],
            color: "from-[#00efd6] to-[#00b5ca]",
        },
        {
            icon: ShieldCheck,
            title: "Compliance Websites",
            description: "Regulatory-compliant platforms for industries with strict documentation requirements—healthcare, finance, legal, and government sectors.",
            features: ["WCAG accessibility", "GDPR compliance", "SOX documentation", "Audit trail logging"],
            color: "from-[#008ac1] to-[#bc3feb]",
        },
        {
            icon: Globe,
            title: "Multi-Regional Platforms",
            description: "Global enterprise websites supporting multiple languages, regional content variations, and localized experiences for international audiences.",
            features: ["Multi-language CMS", "Regional content rules", "Currency localization", "Geo-targeted content"],
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
                        <span style={{ color: "#fab900" }}>Corporate Web Solutions</span> We Deliver
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: "var(--secondary-text)" }}>
                        From flagship corporate sites to specialized portals, we build digital platforms tailored to enterprise requirements and stakeholder expectations.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #fab900, #ee6500)",
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
