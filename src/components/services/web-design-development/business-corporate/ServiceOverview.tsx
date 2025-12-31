"use client";

import { Building2, Target, TrendingUp, Users, FileText, Globe } from "lucide-react";

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
                                "linear-gradient(90deg, color-mix(in srgb, #fab900 8%, transparent), color-mix(in srgb, #ee6500 8%, transparent))",
                            borderColor: "color-mix(in srgb, #fab900 20%, transparent)",
                            color: "#fab900",
                        }}
                    >
                        <Building2 className="w-4 h-4" />
                        <span className="text-sm font-semibold">Service Overview</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Your <span style={{ color: "#fab900" }}>Digital Headquarters</span> for Business Excellence
                    </h2>

                    <div
                        className="w-24 h-1.5 mx-auto mb-8 rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #fab900, #ee6500)",
                        }}
                    />
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <p className="text-lg" style={{ color: "var(--foreground)", fontWeight: 500 }}>
                            A <span style={{ color: "#fab900", fontWeight: 700 }}>corporate website</span> is more than a digital brochure—it's the foundation of your organization's online identity and the first impression for investors, partners, and potential clients.
                        </p>

                        <p style={{ color: "var(--secondary-text)", fontSize: "1.1rem", lineHeight: "1.8" }}>
                            We specialize in creating sophisticated digital platforms for established businesses, multinational corporations, and institutional organizations. Our corporate websites are designed to communicate authority, build stakeholder confidence, and drive strategic business objectives.
                        </p>

                        <p style={{ color: "var(--secondary-text)", fontSize: "1.1rem", lineHeight: "1.8" }}>
                            From investor relations portals to global enterprise sites with multi-region support, we engineer solutions that meet the rigorous standards of modern corporate governance and brand excellence.
                        </p>

                        <div className="pt-4">
                            <h3 className="text-xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                                The Corporate Web Imperative
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "78% of B2B buyers research vendors online before first contact",
                                    "Professional websites increase perceived company value by 75%",
                                    "Investor confidence directly correlates with digital presence quality",
                                    "Regulatory compliance requires proper digital documentation",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span
                                            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold mt-0.5"
                                            style={{
                                                background: "linear-gradient(90deg, #fab900, #ee6500)",
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
                                icon: Target,
                                title: "Strategic Positioning",
                                description: "Every element is designed to reinforce your market position and communicate your unique value proposition to key stakeholders."
                            },
                            {
                                icon: TrendingUp,
                                title: "Lead Generation Engine",
                                description: "Integrated lead capture systems and analytics that turn website visitors into qualified business opportunities."
                            },
                            {
                                icon: Users,
                                title: "Stakeholder Communication",
                                description: "Dedicated sections for investors, media, partners, and employees with role-appropriate content and access controls."
                            },
                            {
                                icon: FileText,
                                title: "Content Management",
                                description: "Enterprise CMS integration allowing marketing teams to update content without technical dependencies."
                            },
                            {
                                icon: Globe,
                                title: "Global Scalability",
                                description: "Multi-language, multi-region architecture supporting international expansion and localized experiences."
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
                                                background: "linear-gradient(135deg, color-mix(in srgb, #fab900 15%, transparent), color-mix(in srgb, #ee6500 15%, transparent))",
                                            }}
                                        >
                                            <Icon className="w-6 h-6" style={{ color: "#fab900" }} />
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
