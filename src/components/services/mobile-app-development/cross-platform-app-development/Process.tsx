"use client";

import { useState } from "react";
import {
    Search,
    Palette,
    Code,
    TestTube2,
    Rocket,
    CheckCircle2,
} from "lucide-react";

export default function Process() {
    const [activeStep, setActiveStep] = useState<number | null>(null);

    const steps = [
        {
            icon: Search,
            title: "Discovery & Planning",
            description: "We analyze your requirements, evaluate platform needs, and create a cross-platform development strategy.",
            details: [
                "Requirements gathering & analysis",
                "Platform feature comparison",
                "Technology selection (RN vs Flutter)",
                "Architecture planning",
                "Timeline & milestones",
            ],
            duration: "1-2 Weeks",
        },
        {
            icon: Palette,
            title: "UI/UX Design",
            description: "Our designers create platform-adaptive interfaces that feel native on both iOS and Android.",
            details: [
                "Wireframing & prototyping",
                "Platform-specific adaptations",
                "Design system creation",
                "Interactive prototypes",
                "User testing",
            ],
            duration: "2-3 Weeks",
        },
        {
            icon: Code,
            title: "Development",
            description: "Expert developers build your app using shared codebase with platform-specific optimizations where needed.",
            details: [
                "Shared codebase development",
                "Platform-specific modules",
                "State management setup",
                "API integration",
                "Performance optimization",
            ],
            duration: "6-12 Weeks",
        },
        {
            icon: TestTube2,
            title: "Testing & QA",
            description: "Comprehensive testing on both platforms across multiple devices and OS versions.",
            details: [
                "Cross-platform testing",
                "Device compatibility testing",
                "Performance profiling",
                "User acceptance testing",
                "Beta testing programs",
            ],
            duration: "2-3 Weeks",
        },
        {
            icon: Rocket,
            title: "Dual Store Launch",
            description: "We submit to both App Store and Play Store simultaneously with optimized listings.",
            details: [
                "App Store submission",
                "Play Store submission",
                "ASO optimization",
                "Metadata & screenshots",
                "Post-launch monitoring",
            ],
            duration: "1-2 Weeks",
        },
    ];

    return (
        <section id="process" className="py-24 relative overflow-hidden bg-background">
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Our Cross-Platform</span>{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #667eea, #764ba2)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Development Process
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        A proven methodology that delivers your app to both platforms efficiently and effectively.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div
                        className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 hidden lg:block"
                        style={{
                            background: "linear-gradient(180deg, #667eea, #764ba2, #667eea)",
                        }}
                    />

                    {/* Steps */}
                    <div className="space-y-12">
                        {steps.map((step, idx) => {
                            const Icon = step.icon;
                            const isActive = activeStep === idx;
                            const isEven = idx % 2 === 0;

                            return (
                                <div
                                    key={idx}
                                    className={`
                                        relative flex flex-col md:flex-row items-center gap-8
                                        ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}
                                    `}
                                    onMouseEnter={() => setActiveStep(idx)}
                                    onMouseLeave={() => setActiveStep(null)}
                                >
                                    {/* Step Number Circle */}
                                    <div
                                        className="absolute left-8 lg:left-1/2 transform -translate-x-1/2 hidden lg:flex"
                                        style={{ zIndex: 10 }}
                                    >
                                        <div
                                            className={`
                                                w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl
                                                transition-all duration-300
                                                ${isActive ? "scale-110 shadow-lg" : "scale-100"}
                                            `}
                                            style={{
                                                background: "linear-gradient(135deg, #667eea, #764ba2)",
                                                boxShadow: isActive ? "0 8px 30px rgba(102, 126, 234, 0.4)" : "none",
                                            }}
                                        >
                                            {idx + 1}
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div
                                        className={`
                                            w-full lg:w-[calc(50%-60px)] p-8 rounded-3xl border transition-all duration-300 cursor-pointer
                                            ${isActive ? "shadow-xl -translate-y-2" : "hover:shadow-lg"}
                                            ${isEven ? "lg:mr-auto" : "lg:ml-auto"}
                                        `}
                                        style={{
                                            backgroundColor: "var(--card-bg)",
                                            borderColor: isActive ? "#667eea" : "var(--border-color)",
                                        }}
                                    >
                                        <div className="flex items-start gap-4">
                                            {/* Mobile Step Number */}
                                            <div
                                                className="lg:hidden w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                                                style={{ background: "linear-gradient(135deg, #667eea, #764ba2)" }}
                                            >
                                                {idx + 1}
                                            </div>

                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div
                                                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                                                        style={{ backgroundColor: "rgba(102, 126, 234, 0.1)" }}
                                                    >
                                                        <Icon className="w-5 h-5 text-[#667eea]" />
                                                    </div>
                                                    <div
                                                        className="px-3 py-1 rounded-full text-xs font-semibold"
                                                        style={{
                                                            backgroundColor: "rgba(118, 75, 162, 0.1)",
                                                            color: "#764ba2",
                                                        }}
                                                    >
                                                        {step.duration}
                                                    </div>
                                                </div>

                                                <h3 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                                    {step.title}
                                                </h3>
                                                <p className="mb-4" style={{ color: "var(--secondary-text)" }}>
                                                    {step.description}
                                                </p>

                                                {/* Expandable Details */}
                                                <div
                                                    className={`
                                                        space-y-2 overflow-hidden transition-all duration-300
                                                        ${isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                                                    `}
                                                >
                                                    {step.details.map((detail, dIdx) => (
                                                        <div key={dIdx} className="flex items-center gap-2">
                                                            <CheckCircle2 className="w-4 h-4 text-[#667eea] flex-shrink-0" />
                                                            <span className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                                                {detail}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
