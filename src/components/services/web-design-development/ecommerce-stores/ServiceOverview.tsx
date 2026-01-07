"use client";

import { ShoppingCart, TrendingUp, CreditCard, Package, BarChart3, Users } from "lucide-react";

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
                                "linear-gradient(90deg, color-mix(in srgb, #00b5ca 8%, transparent), color-mix(in srgb, #00efd6 8%, transparent))",
                            borderColor: "color-mix(in srgb, #00b5ca 20%, transparent)",
                            color: "#00b5ca",
                        }}
                    >
                        <ShoppingCart className="w-4 h-4" />
                        <span className="text-sm font-semibold">Service Overview</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Your <span style={{ color: "#00b5ca" }}>24/7 Sales Machine</span> That Never Stops Selling
                    </h2>

                    <div
                        className="w-24 h-1.5 mx-auto mb-8 rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #00b5ca, #00efd6)",
                        }}
                    />
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-start mx-auto">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <p className="text-lg" style={{ color: "var(--foreground)", fontWeight: 500 }}>
                            An <span style={{ color: "#00b5ca", fontWeight: 700 }}>e-commerce store</span> isn't just a product catalog—it's a sophisticated sales engine designed to guide shoppers from discovery to checkout with minimal friction and maximum conversion.
                        </p>

                        <p style={{ color: "var(--secondary-text)", fontSize: "1.1rem", lineHeight: "1.8" }}>
                            We build online stores that combine beautiful product presentation with proven conversion optimization techniques. Every element—from product pages to checkout flows—is engineered to reduce abandonment and increase average order value.
                        </p>

                        <p style={{ color: "var(--secondary-text)", fontSize: "1.1rem", lineHeight: "1.8" }}>
                            Whether you're launching your first D2C brand or scaling an established retail operation, we create e-commerce experiences that turn casual browsers into repeat customers and brand advocates.
                        </p>

                        <div className="pt-4">
                            <h3 className="text-xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                                The E-commerce Imperative
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "Global e-commerce sales reached $5.8 trillion in 2023",
                                    "53% of mobile users abandon sites that take over 3 seconds to load",
                                    "Cart abandonment rate averages 70%—optimization is critical",
                                    "Personalized experiences increase revenue by up to 40%",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span
                                            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold mt-0.5"
                                            style={{
                                                background: "linear-gradient(90deg, #00b5ca, #00efd6)",
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
                                icon: TrendingUp,
                                title: "Conversion Rate Optimization",
                                description: "Data-driven design decisions with A/B tested checkout flows, product page layouts, and upsell strategies that maximize revenue per visitor."
                            },
                            {
                                icon: CreditCard,
                                title: "Seamless Payment Experience",
                                description: "Support for 100+ payment methods including digital wallets, BNPL options, and localized payment preferences for global customers."
                            },
                            {
                                icon: Package,
                                title: "Inventory & Fulfillment",
                                description: "Real-time inventory sync across channels, automated low-stock alerts, and integration with fulfillment partners like ShipBob and Deliverr."
                            },
                            {
                                icon: BarChart3,
                                title: "Advanced Analytics",
                                description: "Custom dashboards tracking revenue, AOV, customer lifetime value, and product performance to inform merchandising decisions."
                            },
                            {
                                icon: Users,
                                title: "Customer Retention",
                                description: "Loyalty programs, subscription capabilities, and personalized recommendations that turn one-time buyers into repeat customers."
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
                                                background: "linear-gradient(135deg, color-mix(in srgb, #00b5ca 15%, transparent), color-mix(in srgb, #00efd6 15%, transparent))",
                                            }}
                                        >
                                            <Icon className="w-6 h-6" style={{ color: "#00b5ca" }} />
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
