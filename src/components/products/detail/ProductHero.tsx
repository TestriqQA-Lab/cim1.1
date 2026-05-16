"use client";

import Link from "next/link";
import React from "react";
import { ChevronRight, ArrowRight, ShieldCheck, MessageSquare, Workflow, BarChart3, Monitor, Share2 } from "lucide-react";
import type { Product } from "@/data/products";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
    ShieldCheck, MessageSquare, Workflow, BarChart3, Monitor, Share2,
};

export default function ProductHero({ product }: { product: Product }) {
    const Icon = iconMap[product.icon] || ShieldCheck;
    const color = product.accentColor;

    return (
        <section className="relative min-h-screen pt-14 pb-16 transition-colors duration-300 overflow-hidden" style={{ backgroundColor: "var(--background)" }}>
            <div className="absolute inset-0 z-0" style={{ backgroundImage: `radial-gradient(circle at 15% 50%, ${color}14, transparent 25%), radial-gradient(circle at 85% 30%, ${color}0a, transparent 25%), radial-gradient(circle at 50% 80%, ${color}08, transparent 25%)` }}>
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
            </div>
            <style jsx>{`
                @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes float-gentle { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
                @keyframes pulse-glow { 0%, 100% { box-shadow: 0 0 20px ${color}1a; } 50% { box-shadow: 0 0 40px ${color}33; } }
                .animate-slideUp { animation: slideUp 0.6s ease-out forwards; }
                .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
                .animate-float-gentle { animation: float-gentle 4s ease-in-out infinite; }
                .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
                .delay-100 { animation-delay: 0.1s; } .delay-200 { animation-delay: 0.2s; } .delay-300 { animation-delay: 0.3s; } .delay-400 { animation-delay: 0.4s; } .delay-500 { animation-delay: 0.5s; }
            `}</style>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="space-y-8 text-center lg:text-left">
                        <nav className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1 text-sm" style={{ color: "var(--secondary-text)" }}>
                            <Link href="/" className="hover:underline">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/products" className="hover:underline">Products</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span style={{ color }}>{product.name}</span>
                        </nav>

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm animate-fadeIn" style={{ backgroundColor: `${color}10`, borderColor: `${color}30` }}>
                            <Icon className="w-4 h-4" style={{ color }} />
                            <span className="text-sm font-medium" style={{ color }}>{product.tagline}</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight animate-slideUp" style={{ color: "var(--foreground)" }}>
                            <span className="relative inline-block" style={{ color }}>
                                {product.name}
                                <svg className="absolute w-full h-3 -bottom-2 left-0 opacity-50" style={{ color }} viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 animate-slideUp delay-100" style={{ color: "var(--secondary-text)" }}>
                            {product.longDescription}
                        </p>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-slideUp delay-300">
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white transition-all transform hover:scale-105 hover:shadow-lg" style={{ backgroundColor: color }}>
                                Get Started <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold border transition-all hover:bg-accent" style={{ borderColor: "var(--border-color)", color: "var(--foreground)" }}>
                                Schedule Demo
                            </Link>
                        </div>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-6 border-t animate-slideUp delay-400" style={{ borderColor: "var(--border-color)" }}>
                            {product.stats.map((stat, i) => (
                                <React.Fragment key={i}>
                                    {i > 0 && <div className="w-px h-10 hidden sm:block" style={{ backgroundColor: "var(--border-color)" }} />}
                                    <div className="text-center lg:text-left">
                                        <h4 className="text-3xl font-bold" style={{ color }}>{stat.value}</h4>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>{stat.label}</p>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    <div className="relative hidden lg:flex flex-col gap-6 animate-fadeIn delay-500">
                        <div className="relative flex items-center justify-center">
                            <div className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden border flex items-center justify-center animate-float-gentle" style={{ borderColor: `${color}30`, backgroundColor: "var(--card-bg)", boxShadow: `0 0 50px ${color}10` }}>
                                <div className="flex flex-col items-center justify-center gap-4 p-12">
                                    <div className={`w-24 h-24 rounded-3xl ${product.color} p-5 shadow-xl`}>
                                        <Icon className="w-full h-full text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>{product.name}</h3>
                                    <p className="text-center text-sm max-w-xs" style={{ color: "var(--secondary-text)" }}>{product.tagline}</p>
                                    <div className="grid grid-cols-2 gap-3 w-full mt-4">
                                        {product.stats.slice(0, 4).map((s, i) => (
                                            <div key={i} className="p-3 rounded-xl border text-center" style={{ borderColor: `${color}20`, backgroundColor: `${color}08` }}>
                                                <p className="text-lg font-bold" style={{ color }}>{s.value}</p>
                                                <p className="text-xs" style={{ color: "var(--secondary-text)" }}>{s.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="absolute w-72 h-72 rounded-full border opacity-20" style={{ borderColor: color }} />
                                <div className="absolute w-96 h-96 rounded-full border opacity-10" style={{ borderColor: color }} />
                            </div>
                        </div>

                        <div className="p-5 rounded-2xl border mt-4" style={{ borderColor: "var(--border-color)", backgroundColor: "var(--card-bg)" }}>
                            <p className="text-sm font-semibold mb-3" style={{ color: "var(--foreground)" }}>Technologies Used</p>
                            <div className="flex flex-wrap gap-2">
                                {product.techStack.slice(0, 6).map((tech, idx) => (
                                    <span key={idx} className="px-3 py-1.5 rounded-full text-xs font-medium border" style={{ borderColor: `${color}30`, backgroundColor: "var(--background)", color: "var(--secondary-text)" }}>{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
