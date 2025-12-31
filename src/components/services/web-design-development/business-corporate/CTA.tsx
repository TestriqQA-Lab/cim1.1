"use client";

import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";

export default function CTA() {
    return (
        <section
            className="py-16 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="max-w-6xl mx-auto px-6 md:px-12 xl:px-20">
                {/* Main CTA Card */}
                <div
                    className="relative rounded-3xl p-8 md:p-16 border text-center overflow-hidden"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                    }}
                >
                    {/* Glow Effect */}
                    <div
                        className="absolute inset-0 rounded-3xl"
                        style={{
                            opacity: 0.1,
                            background: "linear-gradient(135deg, #fab900, var(--brand-cyan), #ee6500)",
                            filter: "blur(30px)",
                        }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                            style={{
                                background:
                                    "linear-gradient(90deg, color-mix(in srgb, #fab900 8%, transparent), color-mix(in srgb, #ee6500 8%, transparent))",
                                borderColor: "color-mix(in srgb, #fab900 20%, transparent)",
                                color: "#fab900",
                            }}
                        >
                            <Building2 className="w-4 h-4" />
                            <span className="text-sm font-semibold">Start Your Corporate Website Project</span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    background:
                                        "linear-gradient(90deg, #fab900, var(--brand-cyan), #ee6500)",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                Ready to Elevate Your Corporate Presence?
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12" style={{ color: "var(--secondary-text)" }}>
                            Join hundreds of enterprises that trust us to build their digital headquarters. Schedule a consultation to discuss your corporate website requirements with our enterprise team.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-2xl text-sm md:text-base font-semibold bg-gradient-to-r from-[#008ac1] to-[#00b5ca] text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            >
                                Build Your Corporate Website
                                <ArrowRight className="w-5 h-5" />
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-2xl text-sm md:text-base font-semibold border transition-all duration-300"
                                style={{
                                    borderColor: "var(--border-color)",
                                    color: "var(--foreground)",
                                }}
                            >
                                Schedule Executive Consultation
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>

                        {/* Bottom Text */}
                        <p className="mt-8" style={{ color: "var(--secondary-text)", fontSize: "0.95rem" }}>
                            Typical project timeline: 8-16 weeks from kickoff to launch.
                        </p>
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {[
                        {
                            number: "200+",
                            label: "Corporate Sites Delivered",
                        },
                        {
                            number: "99.9%",
                            label: "Uptime Guarantee",
                        },
                        {
                            number: "Fortune 500",
                            label: "Client Experience",
                        },
                    ].map((indicator, idx) => (
                        <div key={idx}>
                            <div
                                className="text-4xl font-bold mb-2"
                                style={{
                                    background: "linear-gradient(90deg, #fab900, #ee6500)",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                {indicator.number}
                            </div>
                            <p style={{ color: "var(--secondary-text)" }}>{indicator.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
