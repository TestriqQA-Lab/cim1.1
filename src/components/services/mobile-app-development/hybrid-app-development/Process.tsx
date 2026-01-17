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
            title: "Requirements Analysis",
            description: "We evaluate your project needs and determine if hybrid is the right approach for your use case.",
            details: [
                "Feature requirements review",
                "Platform capability assessment",
                "Hybrid vs native evaluation",
                "Technology selection",
                "Project scoping",
            ],
            duration: "1-2 Weeks",
        },
        {
            icon: Palette,
            title: "UI/UX Design",
            description: "Design mobile-optimized interfaces that work beautifully across iOS and Android platforms.",
            details: [
                "Mobile-first wireframes",
                "Cross-platform UI patterns",
                "Component library setup",
                "Interactive prototypes",
                "Usability testing",
            ],
            duration: "2-3 Weeks",
        },
        {
            icon: Code,
            title: "Development",
            description: "Build your app using modern web technologies with native plugin integration for device features.",
            details: [
                "Ionic/Capacitor setup",
                "Component development",
                "Plugin integration",
                "API connections",
                "Performance tuning",
            ],
            duration: "6-10 Weeks",
        },
        {
            icon: TestTube2,
            title: "Testing & QA",
            description: "Comprehensive testing on real devices to ensure native-like performance and reliability.",
            details: [
                "Cross-device testing",
                "Platform-specific QA",
                "Performance profiling",
                "Plugin compatibility",
                "User acceptance testing",
            ],
            duration: "2-3 Weeks",
        },
        {
            icon: Rocket,
            title: "Store Deployment",
            description: "Submit to both app stores with optimized listings and handle the approval process.",
            details: [
                "Build configuration",
                "Store asset preparation",
                "App Store submission",
                "Play Store submission",
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
                        <span style={{ color: "var(--foreground)" }}>Our Hybrid App</span>{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #00b4d8, #0077b6)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Development Process
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        A streamlined methodology that leverages web development speed for mobile app delivery.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div
                        className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 hidden lg:block"
                        style={{
                            background: "linear-gradient(180deg, #00b4d8, #0077b6, #00b4d8)",
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
                                                background: "linear-gradient(135deg, #00b4d8, #0077b6)",
                                                boxShadow: isActive ? "0 8px 30px rgba(0, 180, 216, 0.4)" : "none",
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
                                            borderColor: isActive ? "#00b4d8" : "var(--border-color)",
                                        }}
                                    >
                                        <div className="flex items-start gap-4">
                                            {/* Mobile Step Number */}
                                            <div
                                                className="lg:hidden w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                                                style={{ background: "linear-gradient(135deg, #00b4d8, #0077b6)" }}
                                            >
                                                {idx + 1}
                                            </div>

                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div
                                                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                                                        style={{ backgroundColor: "rgba(0, 180, 216, 0.1)" }}
                                                    >
                                                        <Icon className="w-5 h-5 text-[#00b4d8]" />
                                                    </div>
                                                    <div
                                                        className="px-3 py-1 rounded-full text-xs font-semibold"
                                                        style={{
                                                            backgroundColor: "rgba(0, 119, 182, 0.1)",
                                                            color: "#0077b6",
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
                                                            <CheckCircle2 className="w-4 h-4 text-[#00b4d8] flex-shrink-0" />
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
