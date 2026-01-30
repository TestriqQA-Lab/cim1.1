"use client";

import { useState, useEffect } from "react";
import {
    ShoppingCart,
    Building2,
    Heart,
    Wallet,
    Gamepad2,
    Cpu,
    ArrowRight,
    CheckCircle2,
    Sparkles,
} from "lucide-react";

export default function SolutionTypes() {
    const [activeSolution, setActiveSolution] = useState<number | null>(null);
    const [columns, setColumns] = useState(1);

    useEffect(() => {
        const updateColumns = () => {
            if (window.innerWidth >= 1024) {
                setColumns(3);
            } else if (window.innerWidth >= 768) {
                setColumns(2);
            } else {
                setColumns(1);
            }
        };

        updateColumns();
        window.addEventListener("resize", updateColumns);
        return () => window.removeEventListener("resize", updateColumns);
    }, []);

    const solutions = [
        {
            icon: ShoppingCart,
            title: "Ecommerce and Retail Android App Solutions",
            description: "Boost sales with custom shopping apps. Features include Google Pay integration, AR product previews, AI recommendations, and 1-click checkout.",
            features: [
                "45% mobile conversion uplift",
                "Google Pay integration",
                "AR product previews",
                "1-click checkout",
            ],
            gradient: "from-[#3DDC84] to-[#78C257]",
        },
        {
            icon: Building2,
            title: "B2B Android App Development",
            description: "Streamline workflows with secure enterprise mobility solutions. We build employee portals, inventory trackers, and CRM apps integrated with your existing ERP.",
            features: [
                "Employee portals",
                "Inventory trackers",
                "CRM integration",
                "Secure data handling",
            ],
            gradient: "from-[#78C257] to-[#3DDC84]",
        },
        {
            icon: Heart,
            title: "Healthcare and HIPAA-Compliant Apps",
            description: "Patient-first apps with telemedicine features, appointment booking, and secure health record access. Fully compliant with HIPAA, GDPR, and Google Play Protect.",
            features: [
                "Telemedicine features",
                "HIPAA compliance",
                "Secure health records",
                "Appointment booking",
            ],
            gradient: "from-[#073042] to-[#3DDC84]",
        },
        {
            icon: Wallet,
            title: "Fintech & Banking Apps",
            description: "Fort Knox-level security for digital wallets and trading platforms. We implement biometric auth, real-time fraud detection, and custom API integration.",
            features: [
                "Biometric auth",
                "Real-time fraud detection",
                "Custom API integration",
                "Bank-grade security",
            ],
            gradient: "from-[#3DDC84] to-[#073042]",
        },
        {
            icon: Gamepad2,
            title: "Gaming & Entertainment",
            description: "Immersive 2D/3D games built with Unity and native Android NDK. High-performance rendering for lag-free multiplayer experiences.",
            features: [
                "Unity & Native NDK",
                "High-performance rendering",
                "Multiplayer support",
                "Immersive 3D graphics",
            ],
            gradient: "from-[#78C257] to-[#073042]",
        },
        {
            icon: Cpu,
            title: "On-Device AI and Machine Learning",
            description: "Leverage TensorFlow Lite and ML Kit for offline smarts. Features include image recognition, voice assistants, and predictive text without server costs.",
            features: [
                "TensorFlow Lite",
                "Offline capabilities",
                "Image recognition",
                "Voice assistants",
            ],
            gradient: "from-[#073042] to-[#78C257]",
        },
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(61, 220, 132, 0.1)",
                            borderColor: "rgba(61, 220, 132, 0.2)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "#3DDC84" }} />
                        <span className="text-sm font-medium" style={{ color: "#3DDC84" }}>
                            Industry Solutions
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Android Solutions for</span>{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #3DDC84, #78C257)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Every Industry
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        From consumer apps to enterprise solutions, we build Android applications tailored to your industry needs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, idx) => {
                        const Icon = solution.icon;
                        const currentRow = activeSolution !== null ? Math.floor(activeSolution / columns) : -1;
                        const cardRow = Math.floor(idx / columns);
                        const isActive = currentRow === cardRow;

                        return (
                            <div
                                key={idx}
                                className={`
                                    relative p-8 rounded-3xl border transition-all duration-300 cursor-pointer overflow-hidden group
                                    ${isActive ? "ring-2 ring-[#3DDC84] ring-offset-2" : "hover:border-[#3DDC84]/50"}
                                `}
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                                onMouseEnter={() => {
                                    if (window.matchMedia("(hover: hover)").matches) {
                                        setActiveSolution(idx);
                                    }
                                }}
                                onMouseLeave={() => {
                                    if (window.matchMedia("(hover: hover)").matches) {
                                        setActiveSolution(null);
                                    }
                                }}
                                onClick={() => {
                                    if (!window.matchMedia("(hover: hover)").matches) {
                                        setActiveSolution(activeSolution === idx ? null : idx);
                                    }
                                }}
                            >
                                {/* Gradient Background on Hover */}
                                <div
                                    className={`
                                        absolute inset-0 opacity-0 transition-opacity duration-500
                                        ${isActive ? "opacity-5" : ""}
                                    `}
                                    style={{
                                        background: `linear-gradient(135deg, #3DDC84, #78C257)`,
                                    }}
                                />

                                {/* Icon */}
                                <div
                                    className={`
                                        w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300
                                        ${isActive ? "scale-110 rotate-3" : ""}
                                    `}
                                    style={{
                                        background: isActive
                                            ? `linear-gradient(135deg, #3DDC84, #78C257)`
                                            : "rgba(61, 220, 132, 0.1)",
                                    }}
                                >
                                    <Icon
                                        className={`w-6 h-6 transition-colors duration-300 ${isActive ? "text-white" : "text-[#3DDC84]"
                                            }`}
                                    />
                                </div>

                                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>{solution.title}</h3>
                                <p className="text-sm mb-6 line-clamp-3" style={{ color: "var(--secondary-text)" }}>
                                    {solution.description}
                                </p>

                                {/* Features List */}
                                <div
                                    className={`
                                        space-y-3 transition-all duration-300 overflow-hidden
                                        ${isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                                    `}
                                >
                                    {solution.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-center gap-2 text-sm" style={{ color: "var(--secondary-text)" }}>
                                            <CheckCircle2 className="w-4 h-4 text-[#3DDC84]" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Arrow */}
                                <div
                                    className={`
                                        absolute bottom-8 right-8 transition-all duration-300 transform
                                        ${isActive ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}
                                    `}
                                >
                                    <ArrowRight className="w-5 h-5 text-[#3DDC84]" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
