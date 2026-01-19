"use client";

import { ArrowRight, Settings } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    // Technical SEO Purple theme color
    const techPurple = "#8B5CF6";

    return (
        <section className="py-24 relative overflow-hidden border-t" style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}>
            {/* Background Gradient */}
            <div
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-50"
            />

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div
                    className="relative rounded-3xl overflow-hidden border p-12 md:p-16 text-center"
                    style={{
                        background: "linear-gradient(135deg, var(--card-bg) 0%, var(--background) 100%)",
                        borderColor: "var(--border-color)"
                    }}
                >
                    {/* Decorative icons */}
                    <div className="absolute top-8 left-8 opacity-5">
                        <Settings className="w-24 h-24" style={{ color: techPurple }} />
                    </div>
                    <div className="absolute bottom-8 right-8 opacity-5">
                        <Settings className="w-32 h-32" style={{ color: techPurple }} />
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight" style={{ color: "var(--foreground)" }}>
                        Fix Your Technical <br />
                        <span style={{ color: techPurple }}>SEO Issues</span>
                    </h2>

                    <p className="text-xl max-w-2xl mx-auto mb-10" style={{ color: "var(--secondary-text)" }}>
                        Get a comprehensive technical SEO audit and uncover hidden issues affecting your rankings.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-6 py-3 md:px-10 md:py-5 rounded-full font-bold text-base md:text-lg text-white transition-all transform hover:scale-105 hover:shadow-lg"
                            style={{
                                backgroundColor: techPurple,
                                boxShadow: `0 4px 20px ${techPurple}40`
                            }}
                        >
                            Get Free Technical Audit
                            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2" />
                        </Link>
                    </div>

                    {/* Stats strip */}
                    <div className="mt-16 pt-8 border-t flex flex-wrap justify-center gap-12 md:gap-24 opacity-70" style={{ borderColor: "var(--border-color)" }}>
                        <div className="text-center">
                            <p className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>200+</p>
                            <p className="text-sm uppercase tracking-widest" style={{ color: "var(--secondary-text)" }}>Checkpoints</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>48hrs</p>
                            <p className="text-sm uppercase tracking-widest" style={{ color: "var(--secondary-text)" }}>Delivery</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>Free</p>
                            <p className="text-sm uppercase tracking-widest" style={{ color: "var(--secondary-text)" }}>Consultation</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
