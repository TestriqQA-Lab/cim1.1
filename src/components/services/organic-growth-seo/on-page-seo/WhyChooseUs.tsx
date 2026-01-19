"use client";

import { useState } from "react";
import { CheckCircle, TrendingUp, Target, Award, Clock, Users } from "lucide-react";

export default function WhyChooseUs() {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    // SEO Green theme color
    const seoGreen = "#22C55E";

    const benefits = [
        {
            icon: CheckCircle,
            title: "Proven Methodology",
            description: "Data-driven approach based on years of SEO experience and algorithm updates.",
        },
        {
            icon: TrendingUp,
            title: "Measurable Results",
            description: "Clear reporting on rankings, traffic, and conversion improvements.",
        },
        {
            icon: Target,
            title: "Strategic Focus",
            description: "Prioritizing high-impact optimizations that drive real business results.",
        },
        {
            icon: Award,
            title: "Industry Expertise",
            description: "Deep knowledge of SEO best practices and Google guidelines.",
        },
        {
            icon: Clock,
            title: "Long-Term Value",
            description: "Sustainable optimizations that continue to perform over time.",
        },
        {
            icon: Users,
            title: "Dedicated Support",
            description: "Expert team available to answer questions and provide guidance.",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                            Why Choose <span style={{ color: seoGreen }}>Us</span>
                        </h2>
                        <p className="text-lg mb-8 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                            We focus on sustainable on-page SEO that builds authority and drives
                            organic traffic growth month after month.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6">
                            <div
                                className="p-6 rounded-2xl border"
                                style={{ borderColor: "var(--border-color)", backgroundColor: "var(--card-bg)" }}
                            >
                                <h4 className="text-3xl font-bold mb-2" style={{ color: seoGreen }}>500+</h4>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Pages Optimized</p>
                            </div>
                            <div
                                className="p-6 rounded-2xl border"
                                style={{ borderColor: "var(--border-color)", backgroundColor: "var(--card-bg)" }}
                            >
                                <h4 className="text-3xl font-bold mb-2" style={{ color: seoGreen }}>45%</h4>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Avg. Traffic Increase</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        {benefits.map((benefit, idx) => {
                            const Icon = benefit.icon;
                            const isHovered = hoveredIdx === idx;

                            return (
                                <div
                                    key={idx}
                                    className="p-6 rounded-2xl border transition-all duration-300 cursor-pointer"
                                    style={{
                                        borderColor: isHovered ? seoGreen : "var(--border-color)",
                                        backgroundColor: "var(--card-bg)",
                                        transform: isHovered ? "translateY(-4px)" : "none",
                                        boxShadow: isHovered ? `0 10px 30px ${seoGreen}15` : "none"
                                    }}
                                    onMouseEnter={() => setHoveredIdx(idx)}
                                    onMouseLeave={() => setHoveredIdx(null)}
                                >
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                                        style={{
                                            backgroundColor: isHovered ? seoGreen : `${seoGreen}15`,
                                        }}
                                    >
                                        <Icon
                                            className="w-6 h-6 transition-colors duration-300"
                                            style={{ color: isHovered ? "white" : seoGreen }}
                                        />
                                    </div>
                                    <h4 className="font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                        {benefit.title}
                                    </h4>
                                    <p className="text-sm leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                        {benefit.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
