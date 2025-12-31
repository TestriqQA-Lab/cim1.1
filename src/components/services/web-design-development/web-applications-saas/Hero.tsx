"use client";

import { ArrowRight, Home, ChevronRight, Code2, Layers, Database, Zap, Shield, RefreshCw } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            className="relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, #008ac1 12%, transparent)",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-cyan) 12%, transparent)",
                        animationDelay: "1s",
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 py-12 relative">
                {/* Breadcrumbs */}
                <nav
                    className="flex items-center gap-1 text-sm mb-5 justify-center lg:justify-start flex-wrap"
                    aria-label="Breadcrumb"
                >
                    <Link
                        href="/"
                        className="flex items-center gap-1 hover:underline transition-colors p-2"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        <Home className="w-4 h-4" />
                        Home
                    </Link>
                    <ChevronRight className="w-4 h-4" style={{ color: "var(--secondary-text)" }} />
                    <Link
                        href="/services"
                        className="hover:underline transition-colors p-2"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Services
                    </Link>
                    <ChevronRight className="w-4 h-4" style={{ color: "var(--secondary-text)" }} />
                    <Link
                        href="/services/web-design-development"
                        className="hover:underline transition-colors p-2"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Web Design
                    </Link>
                    <ChevronRight className="w-4 h-4" style={{ color: "var(--secondary-text)" }} />
                    <span
                        className="font-semibold p-2"
                        style={{ color: "#008ac1" }}
                    >
                        Web Apps & SaaS
                    </span>
                </nav>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* LEFT CONTENT */}
                    <div className="text-center lg:text-left">
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border transition-colors"
                            style={{
                                background:
                                    "linear-gradient(90deg, color-mix(in srgb, #008ac1 8%, transparent), color-mix(in srgb, #bc3feb 8%, transparent))",
                                borderColor: "color-mix(in srgb, #008ac1 20%, transparent)",
                                color: "#008ac1",
                            }}
                        >
                            <Code2 className="w-4 h-4" style={{ color: "#008ac1" }} />
                            <span className="text-sm font-semibold">Web Applications & SaaS Development</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    background: "#008ac1",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                Build Products That Scale
                            </span>
                        </h1>

                        {/* Underline */}
                        <div
                            className="w-32 h-1.5 mb-8 rounded-full lg:mx-0 mx-auto"
                            style={{
                                background: "linear-gradient(90deg, #008ac1, #bc3feb)",
                            }}
                        />

                        {/* Tagline */}
                        <p className="text-xl md:text-2xl mb-8" style={{ color: "var(--secondary-text)" }}>
                            Custom <span style={{ color: "#008ac1", fontWeight: 700 }}>web applications and SaaS platforms</span> engineered for multi-tenancy, subscription billing, and enterprise-grade scalability.
                        </p>

                        {/* Feature Highlights */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #008ac1 8%, transparent)",
                                }}
                            >
                                <Layers className="w-5 h-5 flex-shrink-0" style={{ color: "#008ac1" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Multi-Tenant
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #008ac1 8%, transparent)",
                                }}
                            >
                                <Database className="w-5 h-5 flex-shrink-0" style={{ color: "#008ac1" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    API-First
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #008ac1 8%, transparent)",
                                }}
                            >
                                <Zap className="w-5 h-5 flex-shrink-0" style={{ color: "#008ac1" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Real-Time
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #008ac1 8%, transparent)",
                                }}
                            >
                                <Shield className="w-5 h-5 flex-shrink-0" style={{ color: "#008ac1" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Enterprise Security
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #008ac1 8%, transparent)",
                                }}
                            >
                                <RefreshCw className="w-5 h-5 flex-shrink-0" style={{ color: "#008ac1" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Auto-Scaling
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #008ac1 8%, transparent)",
                                }}
                            >
                                <Code2 className="w-5 h-5 flex-shrink-0" style={{ color: "#008ac1" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Clean Architecture
                                </span>
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-3 gap-4 mb-8 p-6 rounded-2xl"
                            style={{
                                backgroundColor: "color-mix(in srgb, var(--card-bg) 50%, transparent)",
                                border: "1px solid var(--border-color)",
                            }}
                        >
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold mb-1"
                                    style={{
                                        background: "linear-gradient(90deg, #bc3feb, #008ac1)",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    50+
                                </div>
                                <div className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>
                                    SaaS Products Built
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold mb-1"
                                    style={{
                                        background: "linear-gradient(90deg, #bc3feb, #008ac1)",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    1M+
                                </div>
                                <div className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>
                                    End Users Served
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold mb-1"
                                    style={{
                                        background: "linear-gradient(90deg, #bc3feb, #008ac1)",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    99.9%
                                </div>
                                <div className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Uptime SLA
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-2xl text-sm md:text-base font-semibold bg-gradient-to-r from-[#008ac1] to-[#00b5ca] text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            >
                                Start Your SaaS Project
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-2xl text-sm md:text-base font-semibold border transition-all duration-300"
                                style={{
                                    borderColor: "var(--border-color)",
                                    color: "var(--foreground)",
                                }}
                            >
                                Discuss Your MVP
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT VISUAL ELEMENT */}
                    <div className="relative hidden lg:flex flex-col items-center justify-center">
                        <div
                            className="absolute inset-0 rounded-3xl blur-2xl"
                            style={{
                                background:
                                    "linear-gradient(135deg, color-mix(in srgb, #008ac1 15%, transparent), color-mix(in srgb, #bc3feb 15%, transparent))",
                            }}
                        />
                        <Image
                            src="/images/services-images/web-development-illustration.png"
                            alt="Web Application and SaaS Development"
                            width={500}
                            height={400}
                            className="relative z-10 rounded-2xl"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
