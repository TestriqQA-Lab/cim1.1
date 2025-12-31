"use client";

import { Shield, Award, Zap, Clock, Headphones, Lock } from "lucide-react";

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: Shield,
            title: "Enterprise Security Standards",
            description: "SOC 2 compliant development practices with enterprise-grade security protocols protecting your corporate data and reputation.",
            color: "from-[#008ac1] to-[#00b5ca]",
        },
        {
            icon: Award,
            title: "Fortune 500 Experience",
            description: "Proven track record with multinational corporations, understanding the unique requirements of large-scale enterprise websites.",
            color: "from-[#fab900] to-[#ee6500]",
        },
        {
            icon: Zap,
            title: "Performance Excellence",
            description: "Sub-second load times and 99.99% uptime SLAs ensure your corporate presence is always available and lightning fast.",
            color: "from-[#00efd6] to-[#00b5ca]",
        },
        {
            icon: Clock,
            title: "On-Time Delivery",
            description: "Rigorous project management with milestone-based delivery ensuring your corporate website launches when stakeholders expect it.",
            color: "from-[#bc3feb] to-[#fab900]",
        },
        {
            icon: Headphones,
            title: "Dedicated Account Management",
            description: "A single point of contact who understands your business, ensuring seamless communication throughout the project lifecycle.",
            color: "from-[#008ac1] to-[#bc3feb]",
        },
        {
            icon: Lock,
            title: "Regulatory Compliance",
            description: "WCAG 2.1 accessibility, GDPR data handling, and industry-specific compliance built into every corporate website we deliver.",
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
                        Why <span style={{ color: "#fab900" }}>Leading Enterprises</span> Choose Us
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: "var(--secondary-text)" }}>
                        We understand that corporate websites require a different caliber of expertise—one that balances brand excellence with technical rigor.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #fab900, #ee6500)",
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
