"use client";

import { useState } from "react";
import {
    ShoppingCart,
    ShoppingBag,
    Globe,
    Server,
    Gem,
    CreditCard,
    Layers,
    Sparkles,
    Home,
} from "lucide-react";

export default function SolutionTypes() {
    const [activeIdx, setActiveIdx] = useState<number | null>(null);

    // E-commerce SEO Light Blue theme color
    const commerceBlue = "#0EA5E9";

    const platforms = [
        {
            id: "shopify",
            title: "Shopify SEO",
            description: "Shopify-Specific Optimization: Master Shopify's Liquid template structure, app ecosystem, and built-in limitations. We optimize Shopify collection pages, implement 301 redirects, fix duplicate content issues from /collections/ and /products/ URLs, and leverage Shopify apps for reviews and schema. Perfect for ecommerce SEO for small business and DTC brands.",
            icon: ShoppingBag,
            color: "#96bf48", // Shopify green
        },
        {
            id: "magento",
            title: "Magento SEO",
            description: "Enterprise-Grade Magento SEO: Complex technical optimization for large-scale Adobe Commerce stores managing 10,000+ SKUs. We configure layered navigation SEO, optimize MySQL queries, implement Varnish caching, fix canonical chains, and manage multi-store/multi-language instances. Ideal for enterprise ecommerce SEO services for large brands.",
            icon: LayersIcon,
            color: "#f46f25", // Magento orange
        },
        {
            id: "woocommerce",
            title: "WooCommerce",
            description: "WordPress + WooCommerce Power: Leverage WordPress flexibility with WooCommerce ecommerce functionality. We optimize product schema, category taxonomies, WooCommerce-specific permalinks, and integrate Yoast/RankMath for perfect on-page optimization. Great for content-rich stores needing ecommerce content marketing and SEO strategy.",
            icon: ShoppingCart,
            color: "#96588a", // WooCommerce purple
        },
        {
            id: "bigcommerce",
            title: "BigCommerce",
            description: "BigCommerce SaaS Excellence: Strategic implementation for BigCommerce's robust SaaS environment. Optimize faceted search, custom fields, AMP pages, and headless BigCommerce builds. We handle 301 redirects, CDN optimization, and BigCommerce's unique URL structure for maximum rankings.",
            icon: Globe,
            color: "var(--secondary-text)", // BigCommerce black/dark
        },
        {
            id: "fashion",
            title: "Fashion & Apparel",
            description: "Ecommerce SEO for Fashion and Apparel Brands: Visual-heavy strategies for clothing, accessories, and luxury goods. Optimize size/color variants, seasonal collections, and visual search optimization.",
            icon: Gem,
            color: commerceBlue,
        },
        {
            id: "electronics",
            title: "Electronics & Tech",
            description: "Ecommerce SEO for Electronics and Tech Stores: Technical spec optimization, comparison pages, and detailed product specifications that rank for high-value tech queries.",
            icon: Server,
            color: "#3B82F6",
        },
        {
            id: "health",
            title: "Health & Beauty",
            description: "Ecommerce SEO for Health and Beauty Products: Navigate supplement/cosmetic regulations, optimize ingredient-focused content, and build authority with scientific backing.",
            icon: Sparkles,
            color: "#EC4899",
        },
        {
            id: "home",
            title: "Home & Furniture",
            description: "Ecommerce SEO for Home and Furniture Stores: Large-item optimization, room-specific categories, style guides, and visual merchandising SEO tactics.",
            icon: Home,
            color: "#F59E0B",
        },
    ];

    function LayersIcon(props: any) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
            </svg>
        )
    }

    return (
        <section
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: `${commerceBlue}15`,
                            borderColor: `${commerceBlue}40`,
                        }}
                    >
                        <Layers className="w-4 h-4" style={{ color: commerceBlue }} />
                        <span className="text-sm font-medium" style={{ color: commerceBlue }}>
                            Platform Expertise
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Platform & Industry <span style={{ color: commerceBlue }}>Expertise</span>
                    </h2>
                    <p className="text-lg text-gray-400">
                        Whether you&apos;re on a SaaS platform or custom headless build, we tailor ecommerce SEO services to your technology stack and industry vertical.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {platforms.map((platform, idx) => {
                        const Icon = platform.icon;
                        const isActive = activeIdx === idx;

                        return (
                            <div
                                key={platform.id}
                                className="group relative cursor-pointer"
                                onMouseEnter={() => setActiveIdx(idx)}
                                onMouseLeave={() => setActiveIdx(null)}
                            >
                                <div
                                    className={`
                                        h-full p-8 rounded-3xl border transition-all duration-300
                                        ${isActive ? "scale-[1.02]" : ""}
                                    `}
                                    style={{
                                        borderColor: isActive ? platform.color : "var(--border-color)",
                                        backgroundColor: "var(--card-bg)",
                                        boxShadow: isActive ? `0 10px 40px -10px ${platform.color}20` : "none"
                                    }}
                                >
                                    <div className="flex items-start justify-between mb-8">
                                        <div
                                            className="w-14 h-14 rounded-full flex items-center justify-center transition-colors duration-300"
                                            style={{
                                                backgroundColor: isActive ? platform.color : `${platform.color}15`,
                                                color: isActive ? "white" : platform.color
                                            }}
                                        >
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        {idx < 4 && (
                                            <div
                                                className="px-3 py-1 rounded-full text-xs font-medium border transition-colors duration-300"
                                                style={{
                                                    borderColor: isActive ? platform.color : "var(--border-color)",
                                                    color: isActive ? platform.color : "var(--secondary-text)"
                                                }}
                                            >
                                                Platform
                                            </div>
                                        )}
                                    </div>

                                    <h3
                                        className="text-xl font-bold mb-3 transition-colors duration-300"
                                        style={{ color: isActive ? platform.color : "var(--foreground)" }}
                                    >
                                        {platform.title}
                                    </h3>
                                    <p className="leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                        {platform.description}
                                    </p>

                                    {/* Bottom indicator */}
                                    <div
                                        className="absolute bottom-0 left-8 right-8 h-1 rounded-t-full transition-all duration-300"
                                        style={{
                                            backgroundColor: platform.color,
                                            opacity: isActive ? 1 : 0,
                                            transform: isActive ? "translateY(0)" : "translateY(4px)"
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
