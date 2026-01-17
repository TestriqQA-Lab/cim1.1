"use client";

import Link from "next/link";
import { ArrowRight, Apple, CheckCircle2 } from "lucide-react";

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
                    background: "radial-gradient(circle at 50% 50%, rgba(0, 122, 255, 0.1), transparent 70%)",
                }}
            />

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div
                    className="relative rounded-[2rem] p-8 md:p-12 lg:p-16 overflow-hidden"
                    style={{
                        background: "linear-gradient(135deg, #007AFF, #0055D4)",
                    }}
                >
                    {/* Decorative elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div
                            className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-20"
                            style={{ background: "#5AC8FA" }}
                        />
                        <div
                            className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full opacity-20"
                            style={{ background: "#5AC8FA" }}
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
                                <Apple className="w-4 h-4 text-white" />
                                <span className="text-sm font-medium text-white">
                                    Start Your iOS Journey
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                                Ready to Build Your{" "}
                                <span className="text-[#5AC8FA]">iOS App?</span>
                            </h2>

                            <p className="text-lg text-white/80 mb-8 max-w-xl">
                                Let&apos;s discuss your app idea and create something extraordinary for the App Store.
                                Our iOS experts are ready to bring your vision to life.
                            </p>

                            {/* Benefits */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-[#5AC8FA]" />
                                        <span className="text-sm text-white">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#007AFF] rounded-full font-semibold transition-all hover:shadow-lg hover:scale-105"
                                >
                                    Get Free Consultation
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>

                                {/* <Link
                                    href="/portfolio"
                                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold transition-all hover:bg-white/10"
                                >
                                    View iOS Portfolio
                                </Link> */}
                            </div>
                        </div>

                        {/* Right Stats */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm text-center">
                                <div className="text-4xl font-bold text-white mb-2">150+</div>
                                <div className="text-sm text-white/70">iOS Apps Delivered</div>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm text-center">
                                <div className="text-4xl font-bold text-white mb-2">4.8★</div>
                                <div className="text-sm text-white/70">App Store Rating</div>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm text-center">
                                <div className="text-4xl font-bold text-white mb-2">98%</div>
                                <div className="text-sm text-white/70">First Submit Approval</div>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm text-center">
                                <div className="text-4xl font-bold text-white mb-2">10M+</div>
                                <div className="text-sm text-white/70">Total Downloads</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
