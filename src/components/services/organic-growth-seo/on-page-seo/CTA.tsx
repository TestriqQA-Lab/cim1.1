"use client";

import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    // SEO Green theme color
    const seoGreen = "#22C55E";

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
                    {/* Decorative SEO icons */}
                    <div className="absolute top-8 left-8 opacity-5">
                        <FileText className="w-24 h-24" style={{ color: seoGreen }} />
                    </div>
                    <div className="absolute bottom-8 right-8 opacity-5">
                        <FileText className="w-32 h-32" style={{ color: seoGreen }} />
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight" style={{ color: "var(--foreground)" }}>
                        Ready to Rank <br />
                        <span style={{ color: seoGreen }}>Higher?</span>
                    </h2>

                    <p className="text-xl max-w-2xl mx-auto mb-10" style={{ color: "var(--secondary-text)" }}>
                        Get a comprehensive on-page SEO audit and discover opportunities to improve your rankings.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-6 py-3 md:px-10 md:py-5 rounded-full font-bold text-base md:text-lg text-white transition-all transform hover:scale-105 hover:shadow-lg"
                            style={{
                                backgroundColor: seoGreen,
                                boxShadow: `0 4px 20px ${seoGreen}40`
                            }}
                        >
                            Get Free SEO Audit
                            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2" />
                        </Link>
                    </div>

                    {/* Stats strip */}
                    <div className="mt-16 pt-8 border-t flex flex-wrap justify-center gap-12 md:gap-24 opacity-70" style={{ borderColor: "var(--border-color)" }}>
                        <div className="text-center">
                            <p className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>100+</p>
                            <p className="text-sm uppercase tracking-widest" style={{ color: "var(--secondary-text)" }}>SEO Elements</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>24-48hrs</p>
                            <p className="text-sm uppercase tracking-widest" style={{ color: "var(--secondary-text)" }}>Audit Delivery</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>Free</p>
                            <p className="text-sm uppercase tracking-widest" style={{ color: "var(--secondary-text)" }}>Initial Consultation</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
