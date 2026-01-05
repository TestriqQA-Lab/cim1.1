"use client";

import { ArrowRight, Home, ChevronRight, Zap, MousePointerClick, TrendingUp, Timer, Target } from "lucide-react";
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
                        backgroundColor: "color-mix(in srgb, #10b981 12%, transparent)",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, #0ea5e9 12%, transparent)",
                        animationDelay: "1s",
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 py-12 relative">
                {/* Breadcrumbs */}
                <nav
                    className="flex items-center gap-2 text-sm mb-8 animate-fadeIn"
                    aria-label="Breadcrumb"
                    style={{ animationDelay: "0.1s", animationFillMode: "both" }}
                >
                    <Link
                        href="/"
                        className="flex items-center gap-1 hover:underline transition-colors"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        <Home className="w-4 h-4" />
                        Home
                    </Link>

                    <ChevronRight className="w-4 h-4" style={{ color: "var(--secondary-text)" }} />

                    <Link
                        href="/services"
                        className="hover:underline transition-colors"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Services
                    </Link>

                    <ChevronRight className="w-4 h-4" style={{ color: "var(--secondary-text)" }} />

                    <Link
                        href="/services/web-design-development"
                        className="hover:underline transition-colors"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Web Design
                    </Link>

                    <ChevronRight className="w-4 h-4" style={{ color: "var(--secondary-text)" }} />

                    <span
                        className="font-semibold"
                        style={{ color: "#10b981" }}
                    >
                        Landing Pages
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
                                    "linear-gradient(90deg, color-mix(in srgb, #10b981 8%, transparent), color-mix(in srgb, #0ea5e9 8%, transparent))",
                                borderColor: "color-mix(in srgb, #10b981 20%, transparent)",
                                color: "#10b981",
                            }}
                        >
                            <Target className="w-4 h-4" style={{ color: "#10b981" }} />
                            <span className="text-sm font-semibold">High-Conversion Landing Pages</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    background: "#10b981",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                Convert Traffic
                            </span>
                            <br />
                            <span style={{ color: "var(--foreground)" }}>Into Revenue</span>
                        </h1>

                        {/* Underline */}
                        <div
                            className="h-1.5 w-32 rounded-full mb-6 mx-auto lg:mx-0"
                            style={{
                                background: "linear-gradient(90deg, #10b981, #0ea5e9)",
                            }}
                        />

                        {/* Description */}
                        <p className="text-xl mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0" style={{ color: "var(--secondary-text)" }}>
                            Turn visitors into customers with lightning-fast, persuasive landing pages. We design for maximum conversion, speed, and ROI.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                                style={{
                                    background: "linear-gradient(135deg, #10b981, #0ea5e9)",
                                    boxShadow: "0 8px 20px -4px rgba(16, 185, 129, 0.5)",
                                }}
                            >
                                Start Converting
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#process"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:bg-opacity-80"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    color: "var(--foreground)",
                                    border: "1px solid var(--border-color)",
                                }}
                            >
                                How We Work
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="mt-12 grid grid-cols-3 gap-8 border-t pt-8" style={{ borderColor: "var(--border-color)" }}>
                            <div>
                                <div className="text-3xl font-bold mb-1" style={{ color: "#10b981" }}>3x</div>
                                <div className="text-sm" style={{ color: "var(--secondary-text)" }}>Avg. ROI Increase</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-1" style={{ color: "#0ea5e9" }}>&lt;1s</div>
                                <div className="text-sm" style={{ color: "var(--secondary-text)" }}>Load Time</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-1" style={{ color: "#10b981" }}>20%+</div>
                                <div className="text-sm" style={{ color: "var(--secondary-text)" }}>Conversion Rate</div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CONTENT - VISUAL */}
                    <div className="relative hidden lg:block">
                        <div className="relative z-10 animate-float">
                            <Image
                                src="/images/services-images/web-design-development/landing-page.svg"
                                alt="High-Conversion Landing Page"
                                width={600}
                                height={450}
                                className="w-full h-auto drop-shadow-2xl"
                                priority
                            />
                        </div>

                        {/* Related Content Section */}
                        <div className="mt-10 pt-8 border-t border-dashed" style={{ borderColor: "var(--border-color)" }}>
                            <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "var(--secondary-text)" }}>
                                Related Content
                            </p>
                            <div className="space-y-4">
                                <Link
                                    href="/services/web-design-development/web-applications-saas"
                                    className="flex items-center gap-4 group p-3 rounded-xl transition-colors hover:bg-black/5 dark:hover:bg-white/5"
                                >
                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-100/50 dark:bg-blue-900/30 text-blue-600">
                                        <Zap className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm group-hover:text-blue-600 transition-colors" style={{ color: "var(--foreground)" }}>
                                            Web Applications & SaaS
                                        </h4>
                                        <p className="text-xs" style={{ color: "var(--secondary-text)" }}>
                                            Scalable software solutions
                                        </p>
                                    </div>
                                    <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
                                </Link>

                                <Link
                                    href="/services/web-design-development/e-commerce-stores"
                                    className="flex items-center gap-4 group p-3 rounded-xl transition-colors hover:bg-black/5 dark:hover:bg-white/5"
                                >
                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-purple-100/50 dark:bg-purple-900/30 text-purple-600">
                                        <TrendingUp className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm group-hover:text-purple-600 transition-colors" style={{ color: "var(--foreground)" }}>
                                            E-commerce Stores
                                        </h4>
                                        <p className="text-xs" style={{ color: "var(--secondary-text)" }}>
                                            High-performance online shops
                                        </p>
                                    </div>
                                    <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-purple-600" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 4s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}
