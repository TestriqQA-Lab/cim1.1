"use client";

import Link from "next/link";
import { ChevronRight, Box, ArrowRight, Layers, Sparkles, Cpu } from "lucide-react";

export default function Hero() {
    const purple = "#bc3feb";

    return (
        <section
            className="relative min-h-screen pt-14 pb-16 transition-colors duration-300 overflow-hidden"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `
                        radial-gradient(circle at 20% 50%, rgba(188, 63, 235, 0.08), transparent 25%),
                        radial-gradient(circle at 80% 30%, rgba(0, 239, 214, 0.05), transparent 25%),
                        radial-gradient(circle at 50% 80%, rgba(188, 63, 235, 0.03), transparent 25%)
                    `,
                }}
            >
                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(${purple} 1px, transparent 1px), linear-gradient(90deg, ${purple} 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            <style jsx>{`
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes float-gentle {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes pulse-glow {
                    0%, 100% { box-shadow: 0 0 20px rgba(188, 63, 235, 0.1); }
                    50% { box-shadow: 0 0 40px rgba(188, 63, 235, 0.2); }
                }
                .animate-slideUp { animation: slideUp 0.6s ease-out forwards; }
                .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
                .animate-float-gentle { animation: float-gentle 4s ease-in-out infinite; }
                .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
                .delay-100 { animation-delay: 0.1s; }
                .delay-200 { animation-delay: 0.2s; }
                .delay-300 { animation-delay: 0.3s; }
                .delay-400 { animation-delay: 0.4s; }
                .delay-500 { animation-delay: 0.5s; }
            `}</style>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Text Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        {/* Breadcrumbs */}
                        <nav className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1 text-sm" style={{ color: "var(--secondary-text)" }}>
                            <Link href="/" className="hover:underline">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span style={{ color: purple }}>Products</span>
                        </nav>

                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm animate-fadeIn"
                            style={{
                                backgroundColor: `${purple}10`,
                                borderColor: `${purple}30`,
                            }}
                        >
                            <Box className="w-4 h-4" style={{ color: purple }} />
                            <span className="text-sm font-medium" style={{ color: purple }}>Built by Cinute InfoMedia</span>
                        </div>

                        {/* Title */}
                        <h1
                            className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight animate-slideUp"
                            style={{ color: "var(--foreground)" }}
                        >
                            Powerful{" "}
                            <span className="relative inline-block" style={{ color: purple }}>
                                Digital Products
                                <svg
                                    className="absolute w-full h-3 -bottom-2 left-0 opacity-50"
                                    style={{ color: purple }}
                                    viewBox="0 0 100 10"
                                    preserveAspectRatio="none"
                                >
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </span>{" "}
                            for Modern Businesses
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 animate-slideUp delay-100" style={{ color: "var(--secondary-text)" }}>
                            Proprietary <strong>AI-powered tools</strong> and <strong>SaaS platforms</strong> crafted from years of agency expertise. Each product is battle-tested across 300+ client engagements and designed for enterprise-scale performance.
                        </p>

                        <p className="text-base md:text-lg animate-slideUp delay-200" style={{ color: "var(--secondary-text)" }}>
                            From automated QA testing to intelligent chatbots and workflow automation — our product suite helps businesses <strong>save time, reduce costs, and scale faster</strong>.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-slideUp delay-300">
                            <Link
                                href="#products"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white transition-all transform hover:scale-105 hover:shadow-lg"
                                style={{ backgroundColor: purple }}
                            >
                                Explore Products
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold border transition-all hover:bg-accent"
                                style={{
                                    borderColor: "var(--border-color)",
                                    color: "var(--foreground)"
                                }}
                            >
                                Schedule a Demo
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-6 border-t animate-slideUp delay-400" style={{ borderColor: "var(--border-color)" }}>
                            <div className="text-center lg:text-left">
                                <h4 className="text-3xl font-bold" style={{ color: purple }}>6</h4>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Products</p>
                            </div>
                            <div className="w-px h-10 hidden sm:block" style={{ backgroundColor: "var(--border-color)" }} />
                            <div className="text-center lg:text-left">
                                <h4 className="text-3xl font-bold" style={{ color: purple }}>30K+</h4>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Businesses Served</p>
                            </div>
                            <div className="w-px h-10 hidden sm:block" style={{ backgroundColor: "var(--border-color)" }} />
                            <div className="text-center lg:text-left">
                                <h4 className="text-3xl font-bold" style={{ color: purple }}>99.99%</h4>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Uptime</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="relative hidden lg:flex flex-col gap-6 animate-fadeIn delay-500">
                        {/* Main Visual Container */}
                        <div className="relative flex items-center justify-center">
                            <div
                                className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden border flex items-center justify-center animate-float-gentle"
                                style={{
                                    borderColor: `${purple}30`,
                                    backgroundColor: "var(--card-bg)",
                                    boxShadow: `0 0 50px ${purple}10`
                                }}
                            >
                                {/* Product Grid Visual */}
                                <div className="grid grid-cols-2 gap-4 p-8">
                                    {[
                                        { icon: "🛡️", label: "TestriqQA", color: "#bc3feb" },
                                        { icon: "💬", label: "ChatBot", color: "#4e51d2" },
                                        { icon: "⚡", label: "AutoFlow", color: "#ee6500" },
                                        { icon: "📊", label: "Analytics", color: "#008ac1" },
                                    ].map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="p-6 rounded-2xl border text-center transition-all duration-300 hover:scale-105"
                                            style={{
                                                borderColor: `${item.color}30`,
                                                backgroundColor: `${item.color}08`,
                                            }}
                                        >
                                            <span className="text-4xl block mb-2">{item.icon}</span>
                                            <p className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>{item.label}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Decorative circles */}
                                <div className="absolute w-72 h-72 rounded-full border opacity-20" style={{ borderColor: purple }} />
                                <div className="absolute w-96 h-96 rounded-full border opacity-10" style={{ borderColor: purple }} />
                            </div>

                            {/* Floating Info Card - Bottom Left */}
                            <div
                                className="absolute -bottom-4 -left-4 p-4 rounded-2xl border shadow-xl animate-pulse-glow"
                                style={{
                                    borderColor: "var(--border-color)",
                                    backgroundColor: "var(--card-bg)"
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: `${purple}15` }}
                                    >
                                        <Cpu className="w-6 h-6" style={{ color: purple }} />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>AI-Powered</p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Smart Automation</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats Card - Top Right */}
                            <div
                                className="absolute -top-4 -right-4 p-4 rounded-2xl border shadow-xl"
                                style={{
                                    borderColor: "var(--border-color)",
                                    backgroundColor: "var(--card-bg)"
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: `${purple}15` }}
                                    >
                                        <Sparkles className="w-6 h-6" style={{ color: purple }} />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>300+</p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Client Deployments</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Platform Pills */}
                        <div
                            className="p-5 rounded-2xl border mt-4"
                            style={{ borderColor: "var(--border-color)", backgroundColor: "var(--card-bg)" }}
                        >
                            <p className="text-sm font-semibold mb-3" style={{ color: "var(--foreground)" }}>
                                Product Categories
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["QA & Testing", "AI Chatbots", "Workflow Automation", "Marketing Analytics", "Website Builder", "Social Media"].map((cat, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 rounded-full text-xs font-medium border"
                                        style={{
                                            borderColor: `${purple}30`,
                                            backgroundColor: "var(--background)",
                                            color: "var(--secondary-text)"
                                        }}
                                    >
                                        {cat}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
