"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Building2 } from "lucide-react";

export default function CTA() {
    const benefits = [
        "Free enterprise consultation",
        "Security assessment included",
        "Custom SLA options",
        "Dedicated account manager",
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-background">
            {/* Background */}
            <div
                className="absolute inset-0 opacity-50"
                style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.1), transparent 70%)",
                }}
            />

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div
                    className="relative rounded-[2rem] p-8 md:p-12 lg:p-16 overflow-hidden"
                    style={{
                        backgroundColor: "#2563eb",
                    }}
                >
                    {/* Decorative elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div
                            className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-20"
                            style={{ backgroundColor: "white" }}
                        />
                        <div
                            className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full opacity-20"
                            style={{ backgroundColor: "white" }}
                        />
                        {/* Grid pattern */}
                        <div
                            className="absolute inset-0 opacity-10"
                            style={{
                                backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
                                backgroundSize: "40px 40px",
                            }}
                        />
                    </div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                                <Building2 className="w-4 h-4 text-white" />
                                <span className="text-sm font-medium text-white">
                                    Enterprise-Grade Solutions
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                                Ready for{" "}
                                <span className="text-white/80">Enterprise Scale?</span>
                            </h2>

                            <p className="text-lg text-white/80 mb-8 max-w-xl">
                                Let&apos;s discuss your enterprise mobile strategy. Our team of experts will help you
                                navigate security, compliance, and integration requirements.
                            </p>

                            {/* Benefits */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-white/80" />
                                        <span className="text-sm text-white">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2563eb] rounded-full font-semibold transition-all hover:shadow-lg hover:scale-105"
                                >
                                    Schedule Consultation
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </div>
                        </div>

                        {/* Right Stats */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-6">
                            <div className="p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-sm text-center">
                                <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">85+</div>
                                <div className="text-xs sm:text-sm text-white/70">Enterprise Clients</div>
                            </div>
                            <div className="p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-sm text-center">
                                <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">500K+</div>
                                <div className="text-xs sm:text-sm text-white/70">Active Users</div>
                            </div>
                            <div className="p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-sm text-center">
                                <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">99.9%</div>
                                <div className="text-xs sm:text-sm text-white/70">Uptime SLA</div>
                            </div>
                            <div className="p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-sm text-center">
                                <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">24/7</div>
                                <div className="text-xs sm:text-sm text-white/70">Support Available</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
