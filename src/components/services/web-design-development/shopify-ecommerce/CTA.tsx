"use client";

import { ArrowRight, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    return (
        <section
            className="py-24 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 blur-3xl"
                    style={{
                        background: "radial-gradient(circle, #96bf48, #5c8a1e, transparent)",
                    }}
                />
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(#96bf48 1px, transparent 1px), linear-gradient(90deg, #96bf48 1px, transparent 1px)`,
                        backgroundSize: "80px 80px",
                    }}
                />
                {/* Floating elements */}
                <div
                    className="absolute top-20 left-20 w-4 h-4 rounded-full animate-pulse"
                    style={{ backgroundColor: "#96bf48", animationDelay: "0s" }}
                />
                <div
                    className="absolute top-40 right-32 w-3 h-3 rounded-full animate-pulse"
                    style={{ backgroundColor: "#5c8a1e", animationDelay: "0.5s" }}
                />
                <div
                    className="absolute bottom-32 left-1/4 w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: "#b4d97c", animationDelay: "1s" }}
                />
                <div
                    className="absolute bottom-20 right-20 w-3 h-3 rounded-full animate-pulse"
                    style={{ backgroundColor: "#96bf48", animationDelay: "1.5s" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div
                    className="relative p-8 md:p-16 rounded-3xl border-2 overflow-hidden"
                    style={{
                        background: "linear-gradient(135deg, var(--card-bg), color-mix(in srgb, #96bf48 5%, var(--card-bg)))",
                        borderColor: "color-mix(in srgb, #96bf48 40%, var(--border-color))",
                    }}
                >
                    {/* Gradient Overlay */}
                    <div
                        className="absolute inset-0 opacity-5"
                        style={{
                            background: "linear-gradient(135deg, #96bf48, #5c8a1e)",
                        }}
                    />

                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border"
                            style={{
                                background: "linear-gradient(135deg, color-mix(in srgb, #96bf48 15%, transparent), color-mix(in srgb, #5c8a1e 10%, transparent))",
                                borderColor: "color-mix(in srgb, #96bf48 40%, transparent)",
                            }}
                        >
                            <ShoppingCart className="w-4 h-4" style={{ color: "#96bf48" }} />
                            <span className="text-sm font-semibold" style={{ color: "#96bf48" }}>
                                Free Consultation
                            </span>
                        </div>

                        {/* Heading */}
                        <h2
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                            style={{ color: "var(--foreground)" }}
                        >
                            Ready to{" "}
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #96bf48, #5c8a1e)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Launch Your Store
                            </span>
                            ?
                        </h2>

                        <p
                            className="text-lg md:text-xl mb-10 leading-relaxed"
                            style={{ color: "var(--secondary-text)" }}
                        >
                            Whether you&apos;re starting fresh or upgrading your existing store,
                            we&apos;ll help you build an e-commerce experience that drives sales.
                        </p>

                        {/* CTA Button */}
                        <div className="flex items-center justify-center">
                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                style={{
                                    background: "linear-gradient(135deg, #96bf48, #5c8a1e)",
                                    color: "#ffffff",
                                    boxShadow: "0 8px 32px rgba(150, 191, 72, 0.4)",
                                }}
                            >
                                Get Free Store Consultation
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Trust indicators */}
                        <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
                            <div className="text-center">
                                <div
                                    className="text-2xl font-bold font-mono"
                                    style={{
                                        background: "linear-gradient(135deg, #96bf48, #5c8a1e)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    100+
                                </div>
                                <div className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Stores Launched
                                </div>
                            </div>
                            <div
                                className="w-px h-8"
                                style={{ backgroundColor: "var(--border-color)" }}
                            />
                            <div className="text-center">
                                <div
                                    className="text-2xl font-bold font-mono"
                                    style={{
                                        background: "linear-gradient(135deg, #96bf48, #5c8a1e)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    $10M+
                                </div>
                                <div className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Client Sales
                                </div>
                            </div>
                            <div
                                className="w-px h-8"
                                style={{ backgroundColor: "var(--border-color)" }}
                            />
                            <div className="text-center">
                                <div
                                    className="text-2xl font-bold font-mono"
                                    style={{
                                        background: "linear-gradient(135deg, #96bf48, #5c8a1e)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    5-Star
                                </div>
                                <div className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Reviews
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
