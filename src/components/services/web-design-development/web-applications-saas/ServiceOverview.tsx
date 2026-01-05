"use client";

import { Code2, Layers, Database, Zap, Lock, Settings } from "lucide-react";

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
                                "linear-gradient(90deg, color-mix(in srgb, #008ac1 8%, transparent), color-mix(in srgb, #bc3feb 8%, transparent))",
                            borderColor: "color-mix(in srgb, #008ac1 20%, transparent)",
                            color: "#008ac1",
                        }}
                    >
                        <Code2 className="w-4 h-4" />
                        <span className="text-sm font-semibold">Service Overview</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Your <span style={{ color: "#008ac1" }}>Digital Product Partner</span> From Concept to Scale
                    </h2>

                    <div
                        className="w-24 h-1.5 mx-auto mb-8 rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #008ac1, #bc3feb)",
                        }}
                    />
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-start mx-auto">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <p className="text-lg" style={{ color: "var(--foreground)", fontWeight: 500 }}>
                            A <span style={{ color: "#008ac1", fontWeight: 700 }}>web application</span> or <span style={{ color: "#008ac1", fontWeight: 700 }}>SaaS platform</span> is not a website—it's a software product that solves real problems, automates workflows, and generates recurring revenue.
                        </p>

                        <p style={{ color: "var(--secondary-text)", fontSize: "1.1rem", lineHeight: "1.8" }}>
                            We specialize in building custom web applications and SaaS platforms that handle complex business logic, scale to millions of users, and maintain enterprise-grade security. From internal B2B tools to customer-facing B2C platforms, we architect systems designed for growth.
                        </p>

                        <p style={{ color: "var(--secondary-text)", fontSize: "1.1rem", lineHeight: "1.8" }}>
                            Whether you're launching an MVP to validate your idea or scaling an existing product, we bring the technical expertise and product thinking to turn your vision into a market-ready solution.
                        </p>

                        <div className="pt-4">
                            <h3 className="text-xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                                The SaaS Opportunity
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "SaaS market projected to reach $908B by 2030",
                                    "Recurring revenue models create predictable cash flow",
                                    "Cloud-native architecture enables global distribution",
                                    "Product-market fit drives exponential growth",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span
                                            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold mt-0.5"
                                            style={{
                                                background: "linear-gradient(90deg, #008ac1, #bc3feb)",
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

                    {/* Right Content - Visual Illustration */}
                    <div className="relative h-[600px] w-full flex items-center justify-center hidden lg:flex">
                        {/* Connecting Lines (SVG) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                            {/* Lines from center to satellites */}
                            <line x1="50%" y1="50%" x2="15%" y2="15%" stroke="#008ac1" strokeWidth="2" strokeDasharray="5,5" className="opacity-30" />
                            <line x1="50%" y1="50%" x2="85%" y2="15%" stroke="#bc3feb" strokeWidth="2" strokeDasharray="5,5" className="opacity-30" />
                            <line x1="50%" y1="50%" x2="10%" y2="55%" stroke="#008ac1" strokeWidth="2" strokeDasharray="5,5" className="opacity-30" />
                            <line x1="50%" y1="50%" x2="90%" y2="55%" stroke="#bc3feb" strokeWidth="2" strokeDasharray="5,5" className="opacity-30" />
                            <line x1="50%" y1="50%" x2="50%" y2="90%" stroke="#008ac1" strokeWidth="2" strokeDasharray="5,5" className="opacity-30" />
                            {/* Orbiting circles */}
                            <circle cx="50%" cy="50%" r="120" fill="none" stroke="url(#orbit-gradient)" strokeWidth="1" className="opacity-20" />
                            <circle cx="50%" cy="50%" r="200" fill="none" stroke="url(#orbit-gradient)" strokeWidth="1" className="opacity-10" />
                            <defs>
                                <linearGradient id="orbit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#008ac1" />
                                    <stop offset="100%" stopColor="#bc3feb" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Central Hub */}
                        <div className="relative z-20 flex flex-col items-center justify-center">
                            <div className="w-36 h-36 rounded-full flex items-center justify-center shadow-2xl relative">
                                <div className="absolute inset-0 rounded-full opacity-15" style={{ background: "linear-gradient(135deg, #008ac1, #bc3feb)", animation: "pulse 6s ease-in-out infinite" }}></div>
                                <div className="absolute inset-0 rounded-full" style={{ background: "linear-gradient(135deg, #008ac1, #bc3feb)" }}></div>
                                <Code2 className="w-16 h-16 text-white relative z-10" />
                            </div>
                            <div className="mt-4 px-5 py-2.5 rounded-xl backdrop-blur-md border shadow-lg text-center" style={{ backgroundColor: "var(--card-bg)", borderColor: "rgba(0, 138, 193, 0.2)" }}>
                                <span className="font-bold text-lg" style={{ color: "var(--foreground)" }}>SaaS Platform</span>
                            </div>
                        </div>

                        {/* Satellite: Multi-Tenant (Top Left) */}
                        <div className="absolute top-[5%] left-[5%] z-20" style={{ animation: "bounce 8s ease-in-out 0s infinite" }}>
                            <div className="flex flex-col items-center gap-3 p-4 rounded-xl shadow-lg border backdrop-blur-md max-w-[140px]"
                                style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                <div className="p-3 rounded-lg" style={{ background: "linear-gradient(135deg, rgba(0, 138, 193, 0.15), rgba(188, 63, 235, 0.1))" }}>
                                    <Layers className="w-6 h-6" style={{ color: "#008ac1" }} />
                                </div>
                                <span className="text-sm font-bold text-center" style={{ color: "var(--foreground)" }}>Multi-Tenant</span>
                            </div>
                        </div>

                        {/* Satellite: API-First (Top Right) */}
                        <div className="absolute top-[5%] right-[5%] z-20" style={{ animation: "bounce 8s ease-in-out 1s infinite" }}>
                            <div className="flex flex-col items-center gap-3 p-4 rounded-xl shadow-lg border backdrop-blur-md max-w-[140px]"
                                style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                <div className="p-3 rounded-lg" style={{ background: "linear-gradient(135deg, rgba(188, 63, 235, 0.15), rgba(0, 138, 193, 0.1))" }}>
                                    <Database className="w-6 h-6" style={{ color: "#bc3feb" }} />
                                </div>
                                <span className="text-sm font-bold text-center" style={{ color: "var(--foreground)" }}>API-First</span>
                            </div>
                        </div>

                        {/* Satellite: Real-Time (Middle Left) */}
                        <div className="absolute top-[45%] left-[0%] z-20" style={{ animation: "bounce 8s ease-in-out 2s infinite" }}>
                            <div className="flex flex-col items-center gap-3 p-4 rounded-xl shadow-lg border backdrop-blur-md max-w-[140px]"
                                style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                <div className="p-3 rounded-lg" style={{ background: "linear-gradient(135deg, rgba(0, 138, 193, 0.15), rgba(188, 63, 235, 0.1))" }}>
                                    <Zap className="w-6 h-6" style={{ color: "#008ac1" }} />
                                </div>
                                <span className="text-sm font-bold text-center" style={{ color: "var(--foreground)" }}>Real-Time</span>
                            </div>
                        </div>

                        {/* Satellite: Security (Middle Right) */}
                        <div className="absolute top-[45%] right-[0%] z-20" style={{ animation: "bounce 8s ease-in-out 3s infinite" }}>
                            <div className="flex flex-col items-center gap-3 p-4 rounded-xl shadow-lg border backdrop-blur-md max-w-[140px]"
                                style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                <div className="p-3 rounded-lg" style={{ background: "linear-gradient(135deg, rgba(188, 63, 235, 0.15), rgba(0, 138, 193, 0.1))" }}>
                                    <Lock className="w-6 h-6" style={{ color: "#bc3feb" }} />
                                </div>
                                <span className="text-sm font-bold text-center" style={{ color: "var(--foreground)" }}>Security</span>
                            </div>
                        </div>

                        {/* Satellite: Billing (Bottom Center) */}
                        <div className="absolute bottom-[2%] left-[50%] -translate-x-1/2 z-20" style={{ animation: "bounce 8s ease-in-out 4s infinite" }}>
                            <div className="flex flex-col items-center gap-3 p-4 rounded-xl shadow-lg border backdrop-blur-md max-w-[140px]"
                                style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                <div className="p-3 rounded-lg" style={{ background: "linear-gradient(135deg, rgba(0, 138, 193, 0.15), rgba(188, 63, 235, 0.1))" }}>
                                    <Settings className="w-6 h-6" style={{ color: "#008ac1" }} />
                                </div>
                                <span className="text-sm font-bold text-center" style={{ color: "var(--foreground)" }}>Billing</span>
                            </div>
                        </div>

                        {/* Floating Decorative Elements */}
                        <div className="absolute top-[30%] left-[30%] w-3 h-3 rounded-full" style={{ background: "#008ac1", animation: "pulse 4s ease-in-out 0.5s infinite" }} />
                        <div className="absolute top-[60%] right-[25%] w-2 h-2 rounded-full" style={{ background: "#bc3feb", animation: "pulse 4s ease-in-out 1.5s infinite" }} />
                        <div className="absolute bottom-[25%] left-[20%] w-2 h-2 rounded-full" style={{ background: "#008ac1", animation: "pulse 4s ease-in-out 2.5s infinite" }} />
                    </div>
                </div>
            </div>
        </section>
    );
}
