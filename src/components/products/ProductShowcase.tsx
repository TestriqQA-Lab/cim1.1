"use client";

import { useState } from "react";
import Link from "next/link";
import React from "react";
import { products } from "@/data/products";
import {
    ArrowRight, ShieldCheck, MessageSquare, Workflow,
    BarChart3, Monitor, Share2,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
    ShieldCheck, MessageSquare, Workflow, BarChart3, Monitor, Share2,
};

export default function ProductShowcase() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const purple = "#bc3feb";

    // Vivid accents stay for backgrounds/borders/gradients; TEXT uses the
    // theme-aware AA tokens so the same hue passes in light and dark.
    const textAccent = (c: string) => ({
        "#008ac1": "var(--brand-blue-text)",
        "#00b5ca": "var(--accent-teal-text)",
        "#4e51d2": "var(--accent-indigo-text)",
        "#6db75c": "var(--accent-green-text)",
        "#f72585": "var(--accent-pink-text)",
        "#bc3feb": "var(--brand-purple-text)",
        "#ee6500": "var(--accent-orange-text)",
    }[c?.toLowerCase()] ?? c);

    return (
        <section
            id="products"
            className="py-24 relative overflow-hidden transition-colors duration-300 border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-0 right-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl animate-pulse"
                    style={{ backgroundColor: purple, animationDuration: "4s" }}
                />
                <div
                    className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full opacity-5 blur-3xl animate-pulse"
                    style={{ backgroundColor: "#00efd6", animationDuration: "6s" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span
                            className="px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase border"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: `${purple}30`,
                                color: "var(--brand-purple-text)",
                            }}
                        >
                            Our Products
                        </span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Products That{" "}
                        <span style={{ color: purple }}>Power Business Growth</span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Each product is built from real-world agency experience, solving problems we&apos;ve faced across <strong>300+ client projects</strong>. Enterprise-grade tools, designed for simplicity.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product, idx) => {
                        const Icon = iconMap[product.icon] || ShieldCheck;
                        const isHovered = hoveredCard === idx;

                        return (
                            <div
                                key={product.id}
                                className="group"
                                onMouseEnter={() => setHoveredCard(idx)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <Link
                                    href={`/products/${product.slug}`}
                                    className={`
                                        relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden h-full block
                                        ${isHovered ? "-translate-y-2" : ""}
                                    `}
                                    style={{
                                        borderColor: isHovered ? product.accentColor : "var(--border-color)",
                                        backgroundColor: "var(--card-bg)",
                                        boxShadow: isHovered ? `0 10px 40px ${product.accentColor}20` : "none",
                                    }}
                                >
                                    {/* Hover Gradient BG */}
                                    <div
                                        className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-10" : ""}`}
                                        style={{
                                            background: `radial-gradient(circle at top right, ${product.accentColor}, transparent)`,
                                        }}
                                    />

                                    {/* Icon container */}
                                    <div className="relative mb-6">
                                        <div
                                            className={`
                                                w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500
                                                ${isHovered ? "scale-110" : "scale-100"}
                                            `}
                                            style={{
                                                backgroundColor: isHovered ? product.accentColor : `${product.accentColor}15`,
                                            }}
                                        >
                                            <Icon
                                                className="w-8 h-8 transition-all duration-500"
                                                style={{
                                                    color: isHovered ? "white" : product.accentColor,
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold mb-2 transition-colors duration-300" style={{ color: "var(--foreground)" }}>
                                        {product.name}
                                    </h3>
                                    <p className="text-sm font-semibold mb-3" style={{ color: textAccent(product.accentColor) }}>
                                        {product.tagline}
                                    </p>
                                    <p className="leading-relaxed text-sm mb-6" style={{ color: "var(--secondary-text)" }}>
                                        {product.description}
                                    </p>

                                    {/* Stats */}
                                    <div className="grid grid-cols-2 gap-3 mb-6 pt-4 border-t" style={{ borderColor: "var(--border-color)" }}>
                                        {product.stats.slice(0, 2).map((stat, i) => (
                                            <div key={i}>
                                                <p className="text-lg font-bold" style={{ color: textAccent(product.accentColor) }}>{stat.value}</p>
                                                <p className="text-xs" style={{ color: "var(--secondary-text)" }}>{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <div className="flex items-center gap-2 text-sm font-semibold transition-all" style={{ color: textAccent(product.accentColor) }}>
                                        Learn More
                                        <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? "translate-x-2" : ""}`} />
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
