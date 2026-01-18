"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Facebook } from "lucide-react";

export default function CTA() {
    const benefits = [
        "Free account audit",
        "Custom strategy",
        "No long-term contracts",
        "Performance guarantee",
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-background">
            {/* Background */}
            <div
                className="absolute inset-0 opacity-50"
                style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(24, 119, 242, 0.1), transparent 70%)",
                }}
            />

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div
                    className="relative rounded-[2rem] p-8 md:p-12 lg:p-16 overflow-hidden"
                    style={{
                        backgroundColor: "#1877F2",
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
                                <Facebook className="w-4 h-4 text-white" />
                                <span className="text-sm font-medium text-white">
                                    Meta Ads Experts
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                                Ready to Scale with{" "}
                                <span className="text-white/80">Facebook Ads?</span>
                            </h2>

                            <p className="text-lg text-white/80 mb-8 max-w-xl">
                                Get a free audit of your current Facebook advertising and discover
                                opportunities to improve your ROAS and scale profitably.
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
                                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1877F2] rounded-full font-semibold transition-all hover:shadow-lg hover:scale-105"
                                >
                                    Get Free Audit
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </div>
                        </div>

                        {/* Right Stats */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-6">
                            <div className="p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-sm text-center">
                                <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">3B+</div>
                                <div className="text-xs sm:text-sm text-white/70">Meta Users</div>
                            </div>
                            <div className="p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-sm text-center">
                                <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">8.5x</div>
                                <div className="text-xs sm:text-sm text-white/70">Avg. ROAS</div>
                            </div>
                            <div className="p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-sm text-center">
                                <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">500+</div>
                                <div className="text-xs sm:text-sm text-white/70">Campaigns Managed</div>
                            </div>
                            <div className="p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-sm text-center">
                                <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">45%</div>
                                <div className="text-xs sm:text-sm text-white/70">Lower CPA</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
