"use client";

import { useState } from "react";
import { Camera, Code2, Palette, Briefcase, Mic, GraduationCap, ArrowUpRight } from "lucide-react";

export default function UseCases() {
    const [activeIndex, setActiveIndex] = useState(0);

    const industries = [
        {
            icon: Camera,
            title: "Photographers",
            description: "Photographers and videographers who need to showcase their visual work beautifully.",
            metrics: ["Gallery showcases", "Client galleries", "Booking system"],
            bgColor: "#06b6d4",
        },
        {
            icon: Code2,
            title: "Developers",
            description: "Software developers and engineers showcasing projects, skills, and contributions.",
            metrics: ["GitHub integration", "Project demos", "Tech stack display"],
            bgColor: "#0891b2",
        },
        {
            icon: Palette,
            title: "Designers",
            description: "Graphic, UI/UX, and product designers displaying their creative work and process.",
            metrics: ["Case studies", "Design process", "Tool expertise"],
            bgColor: "#14b8a6",
        },
        {
            icon: Briefcase,
            title: "Freelancers",
            description: "Independent professionals who need to attract and convert potential clients.",
            metrics: ["Service offerings", "Testimonials", "Inquiry forms"],
            bgColor: "#0d9488",
        },
        {
            icon: Mic,
            title: "Speakers & Coaches",
            description: "Public speakers, coaches, and consultants building their personal brand.",
            metrics: ["Speaking reel", "Event history", "Booking calendar"],
            bgColor: "#06b6d4",
        },
        {
            icon: GraduationCap,
            title: "Job Seekers",
            description: "Professionals looking to stand out in their job search with a unique online presence.",
            metrics: ["Resume showcase", "Project highlights", "LinkedIn sync"],
            bgColor: "#0891b2",
        },
    ];

    return (
        <section
            className="py-20 transition-colors duration-300"
            style={{ backgroundColor: "color-mix(in srgb, #06b6d4 2%, var(--background))" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Who We <span style={{ color: "#06b6d4" }}>Help</span>
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We&apos;ve helped creatives and professionals across many fields build portfolios that get results.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto mt-6 rounded-full"
                        style={{ background: "linear-gradient(90deg, #06b6d4, #0891b2)" }}
                    />
                </div>

                {/* Industries Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry, idx) => {
                        const Icon = industry.icon;
                        const isActive = activeIndex === idx;

                        return (
                            <div
                                key={idx}
                                className="relative p-6 rounded-2xl border cursor-pointer transition-all duration-500 overflow-hidden group"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: isActive ? industry.bgColor : "var(--border-color)",
                                    transform: isActive ? "scale(1.02)" : "scale(1)",
                                    boxShadow: isActive ? `0 15px 30px -10px ${industry.bgColor}25` : "none"
                                }}
                                onMouseEnter={() => setActiveIndex(idx)}
                            >
                                {/* Background Gradient */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: `linear-gradient(135deg, ${industry.bgColor}08, ${industry.bgColor}15)`,
                                    }}
                                />

                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex items-start gap-4 mb-4">
                                        <div
                                            className="p-3 rounded-xl transition-all duration-300"
                                            style={{
                                                background: isActive
                                                    ? `linear-gradient(135deg, ${industry.bgColor}, #0891b2)`
                                                    : `${industry.bgColor}15`,
                                            }}
                                        >
                                            <Icon
                                                className="w-6 h-6 transition-colors"
                                                style={{ color: isActive ? "white" : industry.bgColor }}
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold" style={{ color: "var(--foreground)" }}>
                                                {industry.title}
                                            </h3>
                                        </div>
                                        <ArrowUpRight
                                            className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                            style={{ color: industry.bgColor }}
                                        />
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm mb-4" style={{ color: "var(--secondary-text)" }}>
                                        {industry.description}
                                    </p>

                                    {/* Metrics */}
                                    <div className="space-y-2">
                                        {industry.metrics.map((metric, midx) => (
                                            <div key={midx} className="flex items-center gap-2 text-xs">
                                                <div
                                                    className="w-1.5 h-1.5 rounded-full"
                                                    style={{ backgroundColor: industry.bgColor }}
                                                />
                                                <span style={{ color: "var(--secondary-text)" }}>{metric}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
