"use client";

import { Zap, TrendingUp, Shield, Smartphone, RefreshCw, BarChart3 } from "lucide-react";

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: Zap,
            title: "Lightning-Fast Performance",
            description: "Sub-3-second load times optimized for mobile shoppers. Speed directly impacts conversion-every 100ms delay costs 1% in sales.",
            color: "from-[#008ac1] to-[#00b5ca]",
        },
        {
            icon: TrendingUp,
            title: "Proven CRO Expertise",
            description: "Our conversion rate optimization strategies have helped stores achieve 40%+ improvement in checkout completion rates.",
            color: "from-[#fab900] to-[#ee6500]",
        },
        {
            icon: Shield,
            title: "PCI-DSS Compliance",
            description: "Bank-grade security protecting customer payment data. Full compliance with payment industry security standards.",
            color: "from-[#00efd6] to-[#00b5ca]",
        },
        {
            icon: Smartphone,
            title: "Mobile-First Commerce",
            description: "73% of e-commerce happens on mobile. We design thumb-friendly interfaces optimized for on-the-go shopping.",
            color: "from-[#bc3feb] to-[#fab900]",
        },
        {
            icon: RefreshCw,
            title: "Scalable Architecture",
            description: "Built to handle traffic spikes during flash sales, Black Friday, and viral moments without performance degradation.",
            color: "from-[#008ac1] to-[#bc3feb]",
        },
        {
            icon: BarChart3,
            title: "Revenue Analytics",
            description: "Custom dashboards tracking customer lifetime value, product margins, and return on ad spend to optimize profitability.",
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
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Why <span style={{ color: "#00b5ca" }}>High-Growth Brands</span> Choose Us
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: "var(--secondary-text)" }}>
                        We don't just build online stores-we engineer revenue engines with measurable ROI and scalable growth potential.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #00b5ca, #00efd6)",
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
