"use client";

import { ShoppingCart, CreditCard, Package, BarChart3, Mail, Search } from "lucide-react";

export default function TechStack() {
    const technologies = [
        {
            category: "E-commerce Platforms",
            icon: ShoppingCart,
            items: [
                { name: "Shopify Plus", description: "Enterprise e-commerce" },
                { name: "WooCommerce", description: "WordPress commerce" },
                { name: "BigCommerce", description: "Scalable SaaS platform" },
            ],
        },
        {
            category: "Payment Processing",
            icon: CreditCard,
            items: [
                { name: "Stripe", description: "Global payments" },
                { name: "PayPal Commerce", description: "Trusted checkout" },
                { name: "Klarna/Afterpay", description: "BNPL options" },
            ],
        },
        {
            category: "Fulfillment & Shipping",
            icon: Package,
            items: [
                { name: "ShipStation", description: "Multi-carrier shipping" },
                { name: "ShipBob", description: "3PL fulfillment" },
                { name: "Returnly", description: "Returns management" },
            ],
        },
        {
            category: "Analytics & CRO",
            icon: BarChart3,
            items: [
                { name: "Google Analytics 4", description: "E-commerce tracking" },
                { name: "Hotjar", description: "Behavior analytics" },
                { name: "Optimizely", description: "A/B testing" },
            ],
        },
        {
            category: "Marketing Automation",
            icon: Mail,
            items: [
                { name: "Klaviyo", description: "E-commerce email" },
                { name: "Attentive", description: "SMS marketing" },
                { name: "Yotpo", description: "Reviews & UGC" },
            ],
        },
        {
            category: "Search & Discovery",
            icon: Search,
            items: [
                { name: "Algolia", description: "Instant search" },
                { name: "Nosto", description: "Personalization" },
                { name: "Rebuy", description: "Smart recommendations" },
            ],
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
                        <span style={{ color: "#00b5ca" }}>Commerce</span> Technology Stack
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: "var(--secondary-text)" }}>
                        We integrate best-in-class e-commerce tools to create a seamless selling system from first click to delivery.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #00b5ca, #00efd6)",
                        }}
                    />
                </div>

                {/* Tech Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technologies.map((tech, idx) => {
                        const Icon = tech.icon;
                        return (
                            <div
                                key={idx}
                                className="p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{
                                            background: "linear-gradient(135deg, #00b5ca, #00efd6)",
                                        }}
                                    >
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold" style={{ color: "var(--foreground)" }}>
                                        {tech.category}
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    {tech.items.map((item, iidx) => (
                                        <div key={iidx} className="flex items-start gap-3">
                                            <div
                                                className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                                                style={{ backgroundColor: "#00b5ca" }}
                                            />
                                            <div>
                                                <p className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>
                                                    {item.name}
                                                </p>
                                                <p className="text-xs" style={{ color: "var(--secondary-text)" }}>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
