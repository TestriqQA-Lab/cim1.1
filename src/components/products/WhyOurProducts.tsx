"use client";

import { useState } from "react";
import { Award, Cpu, Shield, Headphones, Zap, Globe, Sparkles } from "lucide-react";

export default function WhyOurProducts() {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
    const purple = "#bc3feb";

    const benefits = [
        { icon: Cpu, title: "Agency-Grade Engineering", description: "Built by developers who've delivered 300+ client projects. Real-world problem-solving, not theoretical features." },
        { icon: Shield, title: "Enterprise-Ready Security", description: "SOC 2-aligned infrastructure, AES-256 encryption, and GDPR-ready data processing built into every product." },
        { icon: Zap, title: "AI-Powered Intelligence", description: "Cutting-edge AI — from ML automation to NLP and predictive analytics powering every product." },
        { icon: Globe, title: "Global Scale Architecture", description: "Cloud-native, edge-deployed architecture handling millions of requests with high availability." },
        { icon: Headphones, title: "Dedicated 24/7 Support", description: "Priority Slack channels, dedicated account managers, and comprehensive documentation for every product." },
        { icon: Award, title: "Proven Battle-Tested Results", description: "30K+ businesses trust our products. Transparent metrics and verifiable case studies back every claim." },
    ];

    return (
        <section className="py-24 relative overflow-hidden border-t" style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}>
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border" style={{ backgroundColor: `${purple}15`, borderColor: `${purple}40` }}>
                            <Sparkles className="w-4 h-4" style={{ color: purple }} />
                            <span className="text-sm font-medium" style={{ color: purple }}>Why Choose Us</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                            Built by Experts. <span style={{ color: purple }}>Trusted by Thousands.</span>
                        </h2>
                        <p className="text-lg mb-8 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                            We don&apos;t just build software — we craft solutions born from <strong>real agency expertise</strong> and refined by thousands of production deployments.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl border" style={{ borderColor: "var(--border-color)", backgroundColor: "var(--card-bg)" }}>
                                <h4 className="text-3xl font-bold mb-2" style={{ color: purple }}>300+</h4>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Client Projects Delivered</p>
                            </div>
                            <div className="p-6 rounded-2xl border" style={{ borderColor: "var(--border-color)", backgroundColor: "var(--card-bg)" }}>
                                <h4 className="text-3xl font-bold mb-2" style={{ color: purple }}>99.99%</h4>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Platform Uptime</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {benefits.map((benefit, idx) => {
                            const Icon = benefit.icon;
                            const isHovered = hoveredIdx === idx;
                            return (
                                <div key={idx} className="p-6 rounded-2xl border transition-all duration-300 cursor-pointer" style={{ borderColor: isHovered ? purple : "var(--border-color)", backgroundColor: "var(--card-bg)", transform: isHovered ? "translateY(-4px)" : "none", boxShadow: isHovered ? `0 10px 30px ${purple}15` : "none" }} onMouseEnter={() => setHoveredIdx(idx)} onMouseLeave={() => setHoveredIdx(null)}>
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300" style={{ backgroundColor: isHovered ? purple : `${purple}15` }}>
                                        <Icon className="w-6 h-6 transition-colors duration-300" style={{ color: isHovered ? "white" : purple }} />
                                    </div>
                                    <h4 className="font-bold mb-2" style={{ color: "var(--foreground)" }}>{benefit.title}</h4>
                                    <p className="text-sm leading-relaxed" style={{ color: "var(--secondary-text)" }}>{benefit.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
