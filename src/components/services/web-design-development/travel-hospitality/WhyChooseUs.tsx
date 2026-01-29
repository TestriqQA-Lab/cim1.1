"use client";

import { Zap, Globe, Shield, Users, BarChart3, HeadphonesIcon, Sparkles } from "lucide-react";

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: Zap,
            title: "Real-time Availability",
            description: "Lightning-fast booking engines with instant availability updates across all channels - no more overbookings.",
            color: "#0d9488",
        },
        {
            icon: Globe,
            title: "Multi-channel Distribution",
            description: "Seamless integration with OTAs, metasearch engines, and direct booking channels from a single dashboard.",
            color: "#0d9488",
        },
        {
            icon: Shield,
            title: "Secure Payments",
            description: "PCI-compliant payment processing with multi-currency support and fraud protection built-in.",
            color: "#0d9488",
        },
        {
            icon: Users,
            title: "Guest Experience",
            description: "Personalized booking journeys, loyalty programs, and automated pre/post-stay communication.",
            color: "#0d9488",
        },
        {
            icon: BarChart3,
            title: "Revenue Optimization",
            description: "Dynamic pricing tools, demand forecasting, and comprehensive analytics to maximize RevPAR.",
            color: "#0d9488",
        },
        {
            icon: HeadphonesIcon,
            title: "24/7 Support",
            description: "Round-the-clock technical support because hospitality never sleeps - neither does our team.",
            color: "#0d9488",
        },
    ];

    const stats = [
        { value: "40%", label: "Booking Increase" },
        { value: "60%", label: "Fewer Manual Tasks" },
        { value: "99.9%", label: "Uptime Guarantee" },
        { value: "24/7", label: "Support Available" },
    ];

    return (
        <section
            className="py-20 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(13, 148, 136, 0.05)",
                            borderColor: "rgba(13, 148, 136, 0.2)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "#0d9488" }} />
                        <span className="text-sm font-medium" style={{ color: "#0d9488" }}>
                            Why Choose Us
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6"
                        style={{ color: "var(--foreground)" }}
                    >
                        Why <span style={{ color: "#0d9488" }}>Choose Us</span>
                    </h2>
                    <p
                        className="text-xl max-w-3xl mx-auto mb-8"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        We understand hospitality - from boutique hotels to global chains, we deliver platforms that drive bookings and delight guests.
                    </p>
                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{ backgroundColor: "#0d9488" }}
                    />
                </div>

                {/* Reasons Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {reasons.map((reason, idx) => {
                        const Icon = reason.icon;
                        return (
                            <div
                                key={idx}
                                className="p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg group"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                                    style={{ backgroundColor: reason.color }}
                                >
                                    <Icon className="w-7 h-7 text-white" />
                                </div>

                                <h3
                                    className="text-xl font-bold mb-2"
                                    style={{ color: "var(--foreground)" }}
                                >
                                    {reason.title}
                                </h3>

                                <p
                                    className="text-sm"
                                    style={{ color: "var(--secondary-text)" }}
                                >
                                    {reason.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Stats Section */}
                <div
                    className="p-8 rounded-3xl border"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                    }}
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <div
                                    className="text-4xl md:text-5xl font-bold mb-2"
                                    style={{
                                        color: "#0d9488",
                                    }}
                                >
                                    {stat.value}
                                </div>
                                <p
                                    className="text-sm font-medium"
                                    style={{ color: "var(--secondary-text)" }}
                                >
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
