"use client";

import { ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    // E-commerce SEO Light Blue theme color
    const commerceBlue = "#0EA5E9";

    return (
        <section className="py-24 relative overflow-hidden border-t" style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}>
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[500px] opacity-10"
                    style={{
                        background: `radial-gradient(ellipse at bottom, ${commerceBlue}, transparent 70%)`
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div
                    className="relative rounded-3xl overflow-hidden border p-12 md:p-20 text-center"
                    style={{
                        background: "linear-gradient(180deg, var(--card-bg) 0%, var(--background) 100%)",
                        borderColor: "var(--border-color)"
                    }}
                >
                    <div className="absolute top-10 left-10 opacity-5 animate-bounce delay-1000 duration-[3000ms]">
                        <ShoppingBag className="w-16 h-16" style={{ color: commerceBlue }} />
                    </div>
                    <div className="absolute bottom-10 right-10 opacity-5 animate-bounce delay-500 duration-[4000ms]">
                        <ShoppingBag className="w-24 h-24" style={{ color: commerceBlue }} />
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight" style={{ color: "var(--foreground)" }}>
                        Ready To Scale Your <br />
                        <span style={{ color: commerceBlue }}>Online Revenue?</span>
                    </h2>

                    <p className="text-xl max-w-2xl mx-auto mb-10" style={{ color: "var(--secondary-text)" }}>
                        Don&apos;t leave sales on the table. Get a custom audit and see how much faster you could be growing.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-6 py-3 md:px-10 md:py-5 rounded-full font-bold text-base md:text-lg text-white transition-all transform hover:scale-105 hover:shadow-lg"
                            style={{
                                backgroundColor: commerceBlue,
                                boxShadow: `0 4px 20px ${commerceBlue}40`
                            }}
                        >
                            Get Free E-commerce Audit
                            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
