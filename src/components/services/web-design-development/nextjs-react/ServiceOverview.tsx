"use client";

import { Zap, Shield, Globe, Code2, Layers, Rocket } from "lucide-react";

export default function ServiceOverview() {
    const highlights = [
        {
            icon: Zap,
            title: "Blazing Fast Performance",
            description: "Automatic code splitting, image optimization, and edge caching deliver sub-second page loads.",
        },
        {
            icon: Shield,
            title: "Type-Safe Development",
            description: "Full TypeScript support with strict typing catches errors at compile time, not runtime.",
        },
        {
            icon: Globe,
            title: "SEO-First Architecture",
            description: "Server-side rendering and static generation ensure perfect indexability and Core Web Vitals.",
        },
        {
            icon: Code2,
            title: "Server Components",
            description: "Render components on the server to reduce client JavaScript and improve performance.",
        },
        {
            icon: Layers,
            title: "Flexible Rendering",
            description: "Choose SSR, SSG, or ISR per page. Mix and match for optimal performance.",
        },
        {
            icon: Rocket,
            title: "Edge-Ready Deployment",
            description: "Deploy globally with Vercel Edge Functions for near-instant response times worldwide.",
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
                        backgroundImage: `radial-gradient(circle at 2px 2px, #61dafb 1px, transparent 0)`,
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
                        <Code2 className="w-4 h-4" style={{ color: "#61dafb" }} />
                        <span className="text-sm font-medium" style={{ color: "#61dafb" }}>
                            Why Next.js & React
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        The{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #61dafb, #00d4ff)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Modern Stack
                        </span>{" "}
                        for Modern Apps
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Build production-ready applications with the most popular React framework,
                        trusted by leading startups and enterprises worldwide.
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
                                        background: "linear-gradient(135deg, #61dafb, #00d4ff)",
                                        boxShadow: "0 4px 16px rgba(97, 218, 251, 0.3)",
                                    }}
                                >
                                    <Icon className="w-7 h-7 text-black" />
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
