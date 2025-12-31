"use client";

import { ShoppingBag, Store, Building2, RefreshCw, Layers } from "lucide-react";

export default function SolutionTypes() {
    const solutions = [
        {
            icon: ShoppingBag,
            title: "B2C Online Stores",
            description: "Direct-to-consumer retail experiences with stunning product presentation, seamless checkout, and post-purchase engagement automation.",
            features: ["Product galleries", "Wishlist & favorites", "Reviews & ratings", "Social sharing"],
            color: "from-[#008ac1] to-[#00b5ca]",
        },
        {
            icon: Building2,
            title: "B2B E-commerce Platforms",
            description: "Wholesale and trade portals with tiered pricing, quote systems, bulk ordering, and account management for business buyers.",
            features: ["Custom pricing tiers", "Quote requests", "Bulk order tools", "Account hierarchies"],
            color: "from-[#bc3feb] to-[#fab900]",
        },
        {
            icon: Store,
            title: "Marketplace Solutions",
            description: "Multi-vendor platforms connecting buyers with multiple sellers, featuring vendor dashboards, commission management, and unified checkout.",
            features: ["Vendor onboarding", "Split payments", "Seller analytics", "Dispute resolution"],
            color: "from-[#fab900] to-[#ee6500]",
        },
        {
            icon: RefreshCw,
            title: "Subscription Commerce",
            description: "Recurring revenue models with flexible billing cycles, subscriber portals, and churn reduction tools for subscription-based products.",
            features: ["Recurring billing", "Skip/pause options", "Subscriber portal", "Renewal reminders"],
            color: "from-[#00efd6] to-[#00b5ca]",
        },
        {
            icon: Layers,
            title: "Headless Commerce",
            description: "API-first architectures separating frontend presentation from commerce backend, enabling omnichannel experiences and maximum flexibility.",
            features: ["API-first design", "Custom frontends", "Omnichannel ready", "Future-proof stack"],
            color: "from-[#008ac1] to-[#bc3feb]",
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
                        <span style={{ color: "#00b5ca" }}>E-commerce Solutions</span> We Build
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: "var(--secondary-text)" }}>
                        From single-brand D2C stores to complex multi-vendor marketplaces, we build commerce platforms tailored to your business model.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #00b5ca, #00efd6)",
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
