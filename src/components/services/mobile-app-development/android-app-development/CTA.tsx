"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Android } from "@/components/Icons";

export default function CTA() {
    const benefits = [
        "Free project consultation",
        "Detailed proposal & timeline",
        "Fixed price guarantee",
        "Post-launch support included",
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-background">
            {/* Background gradient */}
            <div
                className="absolute inset-0 opacity-50"
                style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(61, 220, 132, 0.1), transparent 70%)",
                }}
            />

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div
                    className="relative rounded-[2rem] p-8 md:p-12 lg:p-16 overflow-hidden"
                    style={{
                        background: "linear-gradient(135deg, #3DDC84, #078C3C)",
                    }}
                >
                    {/* Decorative elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div
                            className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-20"
                            style={{ background: "#78C257" }}
                        />
                        <div
                            className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full opacity-20"
                            style={{ background: "#78C257" }}
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
                                <Android className="w-4 h-4 text-white" />
                                <span className="text-sm font-medium text-white">
                                    Start Your Android Journey
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                                Ready to Dominate the{" "}
                                <span className="text-[#073042]">Android Market?</span>
                            </h2>

                            <p className="text-lg text-white/80 mb-8 max-w-xl">
                                Don&apos;t settle for average. Partner with the agency that defines <strong>Android excellence</strong>.
                            </p>

                            {/* Benefits */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-[#073042]" />
                                        <span className="text-sm text-white">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#3DDC84] rounded-full font-semibold transition-all hover:shadow-lg hover:scale-105"
                                >
                                    Let&apos;s discuss your project today!
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>

                                {/* <Link
                                    href="/portfolio"
                                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold transition-all hover:bg-white/10"
                                >
                                    View Android Portfolio
                                </Link> */}
                            </div>
                        </div>

                        {/* Right Stats */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-6">
                            <div className="p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-sm text-center">
                                <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">300+</div>
                                <div className="text-xs sm:text-sm text-white/70">Android Apps Delivered</div>
                            </div>
                            <div className="p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-sm text-center">
                                <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">4.7★</div>
                                <div className="text-xs sm:text-sm text-white/70">Play Store Rating</div>
                            </div>
                            <div className="p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-sm text-center">
                                <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">99.9%</div>
                                <div className="text-xs sm:text-sm text-white/70">Crash-Free Impact</div>
                            </div>
                            <div className="p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-sm text-center">
                                <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">50+</div>
                                <div className="text-xs sm:text-sm text-white/70">Certified Developers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
