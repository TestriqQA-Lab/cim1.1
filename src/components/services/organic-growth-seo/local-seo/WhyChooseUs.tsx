"use client";

import { useState } from "react";
import { Check, MapPin, Search, Users, Phone, BarChart } from "lucide-react";

export default function WhyChooseUs() {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    // Local SEO Amber theme color
    const localAmber = "#F59E0B";

    const reasons = [
        {
            icon: MapPin,
            title: "Proximity Focus",
            description: "We master the art of ranking for 'near me' searches in your target radius.",
        },
        {
            icon: Search,
            title: "Exclusive Strategies",
            description: "Proprietary tactics to outrank competitors in the Local Map Pack.",
        },
        {
            icon: Users,
            title: "Real Humans",
            description: "We manually verify citations. No automated bots messing up your data.",
        },
        {
            icon: Phone,
            title: "Call Tracking",
            description: "Transparent reporting on exactly how many leads our work generates.",
        },
        {
            icon: BarChart,
            title: "Conversion Optimization",
            description: "We don't just drive traffic; we optimize your GMB profile to convert it.",
        },
        {
            icon: Check,
            title: "No Lock-in Contracts",
            description: "We earn your business every single month with results.",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Header Area */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-24">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                                Why Trust Us With Your <span style={{ color: localAmber }}>Local Market?</span>
                            </h2>
                            <p className="text-lg mb-8 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                We understand the nuances of local search algorithms that national agencies often miss.
                            </p>

                            <div
                                className="p-6 rounded-2xl border bg-opacity-50 backdrop-blur-sm"
                                style={{
                                    borderColor: `${localAmber}30`,
                                    backgroundColor: `${localAmber}05`
                                }}
                            >
                                <div className="text-4xl font-bold mb-2" style={{ color: localAmber }}>93%</div>
                                <p style={{ color: "var(--secondary-text)" }}>Of clients stay with us for more than 12 months.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Grid */}
                    <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
                        {reasons.map((reason, idx) => {
                            const Icon = reason.icon;
                            const isHovered = hoveredIdx === idx;

                            return (
                                <div
                                    key={idx}
                                    className="p-8 rounded-3xl border transition-all duration-300"
                                    style={{
                                        borderColor: isHovered ? localAmber : "var(--border-color)",
                                        backgroundColor: "var(--card-bg)",
                                        transform: isHovered ? "translateY(-5px)" : "none",
                                        boxShadow: isHovered ? `0 10px 30px ${localAmber}10` : "none"
                                    }}
                                    onMouseEnter={() => setHoveredIdx(idx)}
                                    onMouseLeave={() => setHoveredIdx(null)}
                                >
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
                                        style={{
                                            backgroundColor: isHovered ? localAmber : `${localAmber}15`,
                                            color: isHovered ? "white" : localAmber
                                        }}
                                    >
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                        {reason.title}
                                    </h4>
                                    <p className="leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                        {reason.description}
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
