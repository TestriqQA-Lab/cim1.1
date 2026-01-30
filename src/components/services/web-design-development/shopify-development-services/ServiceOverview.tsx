"use client";

import { Palette, CreditCard, Package, Globe, TrendingUp, Smartphone, ShoppingCart } from "lucide-react";

export default function ServiceOverview() {
    const highlights = [
        {
            icon: ShoppingCart,
            title: "Custom Shopify Store Design",
            description: "Providing bespoke Shopify store design services that blend unique brand aesthetics with optimized user journeys for maximum conversions.",
        },
        {
            icon: CreditCard,
            title: "Shopify Plus Development",
            description: "Enterprise-grade scaling for high-volume merchants, featuring mobile-first architecture and bespoke checkout automation via Shopify Flow.",
        },
        {
            icon: Package,
            title: "Custom Theme Development",
            description: "Building headless and traditional storefronts utilizing React, Liquid, and Next.js, optimized for 2026 Core Web Vitals and app-like speed.",
        },
        {
            icon: Globe,
            title: "Shopify Migration & Int'l SEO",
            description: "Ensuring 100% data integrity and international SEO continuity when moving from Magento or WooCommerce with zero downtime.",
        },
        {
            icon: TrendingUp,
            title: "App Development & Integration",
            description: "Custom-built apps and secure bridges for ERP, CRM (Salesforce/HubSpot), or Inventory Management systems.",
        },
        {
            icon: Smartphone,
            title: "Shopify SEO & Marketing",
            description: "Comprehensive technical audits and product page optimization to align with 2026 AI Overviews and helpful content signals.",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, #96bf48 1px, transparent 0)`,
                        backgroundSize: "48px 48px",
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)",
                        }}
                    >
                        <TrendingUp className="w-4 h-4" style={{ color: "#96bf48" }} />
                        <span className="text-sm font-medium" style={{ color: "#96bf48" }}>
                            Build a Revenue-Driving Store
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Core{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #96bf48, #5c8a1e)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                WebkitBoxDecorationBreak: "clone",
                            }}
                        >
                            Shopify Services
                        </span>{" "}
                        for Growth
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        We provide end-to-end Shopify solutions designed to scale your brand,
                        optimize performance, and dominate the 2026 e-commerce landscape.
                    </p>
                </div>

                {/* Highlights Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {highlights.map((highlight, idx) => {
                        const Icon = highlight.icon;
                        return (
                            <div
                                key={idx}
                                className="group p-6 rounded-2xl border transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                                    style={{
                                        background: "linear-gradient(135deg, #96bf48, #5c8a1e)",
                                        boxShadow: "0 4px 16px rgba(150, 191, 72, 0.3)",
                                    }}
                                >
                                    <Icon className="w-7 h-7 text-white" />
                                </div>
                                <h3
                                    className="text-xl font-bold mb-2"
                                    style={{ color: "var(--foreground)" }}
                                >
                                    {highlight.title}
                                </h3>
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{ color: "var(--secondary-text)" }}
                                >
                                    {highlight.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
