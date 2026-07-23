"use client";

import { ArrowRight, Box } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    const purple = "#bc3feb";

    return (
        <section className="py-24 relative overflow-hidden border-t" style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}>
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-50" />
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="relative rounded-3xl overflow-hidden border p-8 md:p-16 text-center" style={{ background: "linear-gradient(135deg, var(--card-bg) 0%, var(--background) 100%)", borderColor: "var(--border-color)" }}>
                    <div className="absolute top-8 left-8 opacity-5">
                        <Box className="w-24 h-24" style={{ color: purple }} />
                    </div>
                    <div className="absolute bottom-8 right-8 opacity-5">
                        <Box className="w-32 h-32" style={{ color: purple }} />
                    </div>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight" style={{ color: "var(--foreground)" }}>
                        Ready to Transform Your <br />
                        <span style={{ color: purple }}>
                            <Link href="/contact" className="hover:underline">Business Workflow?</Link>
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10" style={{ color: "var(--secondary-text)" }}>
                        Schedule a personalized demo to see how our products can streamline your operations, boost productivity, and drive measurable results.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-4 md:px-10 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg text-white transition-all transform hover:scale-105 hover:shadow-lg" style={{ backgroundColor: "#a21caf", boxShadow: `0 4px 20px ${purple}40` }}>
                            Schedule a Demo
                            <ArrowRight className="w-4 h-4 md:w-6 md:h-6 ml-2 flex-shrink-0" />
                        </Link>
                    </div>
                    <div className="mt-16 pt-8 border-t flex flex-wrap justify-center gap-12 md:gap-24" style={{ borderColor: "var(--border-color)" }}>
                        <div className="text-center">
                            <p className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>6</p>
                            <p className="text-sm uppercase tracking-widest" style={{ color: "var(--secondary-text)" }}>Products Available</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>30K+</p>
                            <p className="text-sm uppercase tracking-widest" style={{ color: "var(--secondary-text)" }}>Businesses Served</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>Free</p>
                            <p className="text-sm uppercase tracking-widest" style={{ color: "var(--secondary-text)" }}>Trial Available</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
