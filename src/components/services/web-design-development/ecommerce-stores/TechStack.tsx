"use client";

import { ShoppingCart, CreditCard, Package, BarChart3, Mail, Search } from "lucide-react";
import Image from "next/image";

export default function TechStack() {
    const technologies = [
        {
            category: "E-commerce Platforms",
            icon: ShoppingCart,
            items: [
                { name: "Shopify Plus", description: "Enterprise e-commerce", logos: ["/images/techstack_logos/shopify-logo.png"] },
                { name: "WooCommerce", description: "WordPress commerce", logos: ["/images/techstack_logos/WooCommerce-logo.png"] },
                { name: "BigCommerce", description: "Scalable SaaS platform", logos: ["/images/techstack_logos/bigcommerce-logo.png"] },
            ],
        },
        {
            category: "Payment Processing",
            icon: CreditCard,
            items: [
                { name: "Stripe", description: "Global payments", logos: ["/images/techstack_logos/Stripe-logo.png"] },
                { name: "PayPal Commerce", description: "Trusted checkout", logos: ["/images/techstack_logos/paypal-logo.png"] },
                { name: "Klarna/Afterpay", description: "BNPL options", logos: ["/images/techstack_logos/Klarna-logo.jpg", "/images/techstack_logos/afterpay-logo.webp"] },
            ],
        },
        {
            category: "Fulfillment & Shipping",
            icon: Package,
            items: [
                { name: "ShipStation", description: "Multi-carrier shipping", logos: ["/images/techstack_logos/ShipStation-logo.png"] },
                { name: "ShipBob", description: "3PL fulfillment", logos: ["/images/techstack_logos/ShipBob-logo.png"] },
                { name: "Returnly", description: "Returns management", logos: ["/images/techstack_logos/returnly-logo.svg"] },
            ],
        },
        {
            category: "Analytics & CRO",
            icon: BarChart3,
            items: [
                { name: "Google Analytics 4", description: "E-commerce tracking", logos: ["/images/techstack_logos/google-tag-manager-logo.svg"] },
                { name: "Hotjar", description: "Behavior analytics", logos: ["/images/techstack_logos/Hotjar-logo.png"] },
                { name: "Optimizely", description: "A/B testing", logos: ["/images/techstack_logos/Optimizely-logo.webp"] },
            ],
        },
        {
            category: "Marketing Automation",
            icon: Mail,
            items: [
                { name: "Klaviyo", description: "E-commerce email", logos: ["/images/techstack_logos/Klaviyo-logo.png"] },
                { name: "Attentive", description: "SMS marketing", logos: ["/images/techstack_logos/Attentive-logo.png"] },
                { name: "Yotpo", description: "Reviews & UGC", logos: ["/images/techstack_logos/Yotpo-Logo.png"] },
            ],
        },
        {
            category: "Search & Discovery",
            icon: Search,
            items: [
                { name: "Algolia", description: "Instant search", logos: ["/images/techstack_logos/algolia-logo.webp"] },
                { name: "Nosto", description: "Personalization", logos: ["/images/techstack_logos/nosto-logo.png"] },
                { name: "Rebuy", description: "Smart recommendations", logos: ["/images/techstack_logos/rebuy-logo.webp"] },
            ],
        },
    ];

    return (
        <section
            className="py-16 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
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
                                        <div key={iidx} className="flex items-center justify-between gap-4">
                                            <div className="flex items-start gap-3 flex-1 min-w-0">
                                                <div
                                                    className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                                                    style={{ backgroundColor: "#00b5ca" }}
                                                />
                                                <div className="min-w-0">
                                                    <p className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>
                                                        {item.name}
                                                    </p>
                                                    <p className="text-xs" style={{ color: "var(--secondary-text)" }}>
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                            {item.logos.length > 0 && (
                                                <div className="flex items-center gap-2 flex-shrink-0">
                                                    {item.logos.map((logo, lidx) => (
                                                        <div
                                                            key={lidx}
                                                            className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
                                                            style={{
                                                                backgroundColor: "var(--background)",
                                                                border: "1px solid var(--border-color)",
                                                            }}
                                                        >
                                                            <Image
                                                                src={logo}
                                                                alt={`${item.name} logo`}
                                                                width={32}
                                                                height={32}
                                                                className="object-contain"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
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
