"use client";

import { Search, PenTool, Layout, Zap, Link2, BarChart, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Process() {
    // E-commerce SEO Light Blue theme color
    const commerceBlue = "#0EA5E9";

    const steps = [
        {
            icon: Search,
            title: "Technical Audit",
            description: "Deep crawl of your store to identify indexing issues, orphan pages, and crawl budget wasters.",
            animation: "slide-right"
        },
        {
            icon: PenTool,
            title: "Keyword Mapping",
            description: "Assigning high-value transactional keywords to specific product and category pages.",
            animation: "slide-left"
        },
        {
            icon: Layout,
            title: "Site Architecture",
            description: "Refining URL structure and internal linking to pass authority to key products.",
            animation: "fade-up"
        },
        {
            icon: Zap,
            title: "On-Page Optimization",
            description: "Enhancing product descriptions, meta tags, and schema markup for maximum CTR.",
            animation: "scale"
        },
        {
            icon: Link2,
            title: "Link Acquisition",
            description: "Building high-quality backlinks from relevant industry niches to boost domain power.",
            animation: "rotate"
        },
        {
            icon: BarChart,
            title: "Revenue Reporting",
            description: "Tracking rankings, traffic, and most importantly - revenue generated from organic search.",
            animation: "flip"
        },
    ];

    return (
        <>
            <style jsx>{`
                @keyframes slideRight {
                    from { opacity: 0; transform: translateX(-50px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes slideLeft {
                    from { opacity: 0; transform: translateX(50px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes scaleIn {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }
                @keyframes rotateIn {
                    from { opacity: 0; transform: rotate(-5deg) scale(0.95); }
                    to { opacity: 1; transform: rotate(0) scale(1); }
                }
                @keyframes flipIn {
                    from { opacity: 0; transform: perspective(1000px) rotateY(-15deg); }
                    to { opacity: 1; transform: perspective(1000px) rotateY(0); }
                }

                .animate-slide-right { animation: slideRight 0.6s ease-out forwards; }
                .animate-slide-left { animation: slideLeft 0.6s ease-out forwards; }
                .animate-fade-up { animation: fadeUp 0.6s ease-out forwards; }
                .animate-scale { animation: scaleIn 0.6s ease-out forwards; }
                .animate-rotate { animation: rotateIn 0.6s ease-out forwards; }
                .animate-flip { animation: flipIn 0.6s ease-out forwards; }

                .process-card {
                    opacity: 0;
                    animation-delay: calc(var(--index) * 0.15s);
                }

                .gradient-border {
                    position: relative;
                    background: var(--card-bg);
                    border-radius: 1.5rem;
                }
                .gradient-border::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: 1.5rem;
                    padding: 2px;
                    background: linear-gradient(135deg, ${commerceBlue}40, transparent, ${commerceBlue}20);
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                .gradient-border:hover::before { opacity: 1; }

                .icon-float { animation: float 3s ease-in-out infinite; }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }

                .step-number { transition: all 0.3s ease; }
                .process-card:hover .step-number {
                    transform: scale(1.5) rotate(5deg);
                    opacity: 0.08 !important;
                }
            `}</style>

            <section
                id="process"
                className="py-24 relative overflow-hidden border-t"
                style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
            >
                {/* Animated Background Circles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div
                        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl opacity-10"
                        style={{ backgroundColor: commerceBlue }}
                    />
                    <div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl opacity-10"
                        style={{ backgroundColor: commerceBlue }}
                    />
                </div>

                <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                            Our E-commerce <span style={{ color: commerceBlue }}>Playbook</span>
                        </h2>
                        <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                            A rigorous 6-step process designed to scale store revenue.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div
                            className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 hidden md:block"
                            style={{
                                background: `linear-gradient(to bottom, ${commerceBlue}00, ${commerceBlue}40, ${commerceBlue}00)`
                            }}
                        />

                        <div className="space-y-12">
                            {steps.map((step, idx) => {
                                const Icon = step.icon;
                                const isEven = idx % 2 === 0;

                                return (
                                    <div
                                        key={idx}
                                        className={`flex flex-col md:flex-row items-start ${isEven ? "md:flex-row-reverse" : ""} gap-8 md:gap-0 relative`}
                                    >
                                        {/* Timeline Node */}
                                        <div
                                            className="absolute left-6 md:left-1/2 w-5 h-5 rounded-full border-4 z-10 transform -translate-x-1/2 mt-8 hidden md:block shadow-lg"
                                            style={{
                                                borderColor: commerceBlue,
                                                backgroundColor: "var(--background)",
                                                boxShadow: `0 0 20px ${commerceBlue}60`
                                            }}
                                        >
                                            <div
                                                className="absolute inset-0 rounded-full animate-ping"
                                                style={{ backgroundColor: commerceBlue, opacity: 0.3 }}
                                            />
                                        </div>

                                        {/* Content Card */}
                                        <div className={`w-full md:w-1/2 px-0 md:px-12 ${isEven ? "md:text-left" : "md:text-right"}`}>
                                            <div
                                                className={`process-card animate-${step.animation} gradient-border p-8 rounded-3xl border transition-all duration-500 hover:shadow-2xl group relative`}
                                                style={{
                                                    '--index': idx,
                                                    borderColor: "var(--border-color)",
                                                    backgroundColor: "var(--card-bg)",
                                                    boxShadow: `0 4px 20px rgba(0, 0, 0, 0.05)`
                                                } as React.CSSProperties}
                                            >
                                                {/* Top Accent Line */}
                                                <div
                                                    className="absolute top-0 left-8 right-8 h-1 rounded-full transition-all duration-300 group-hover:left-4 group-hover:right-4"
                                                    style={{
                                                        background: `linear-gradient(90deg, transparent, ${commerceBlue}, transparent)`
                                                    }}
                                                />

                                                <div className="flex items-start justify-between mb-6">
                                                    <div
                                                        className={`
                                                            w-16 h-16 rounded-2xl flex items-center justify-center 
                                                            transition-all duration-300 group-hover:scale-110 group-hover:rotate-6
                                                            relative
                                                        `}
                                                        style={{
                                                            background: `linear-gradient(135deg, ${commerceBlue}20, ${commerceBlue}10)`,
                                                            boxShadow: `0 8px 16px ${commerceBlue}20`
                                                        }}
                                                    >
                                                        {/* Icon Glow */}
                                                        <div
                                                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                            style={{
                                                                boxShadow: `0 0 30px ${commerceBlue}60`
                                                            }}
                                                        />
                                                        <Icon className="w-8 h-8 relative z-10 icon-float" style={{ color: commerceBlue }} />
                                                    </div>

                                                    {/* Check Icon */}
                                                    <div
                                                        className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100"
                                                        style={{
                                                            backgroundColor: `${commerceBlue}20`
                                                        }}
                                                    >
                                                        <CheckCircle className="w-5 h-5" style={{ color: commerceBlue }} />
                                                    </div>
                                                </div>

                                                <h3 className="text-2xl font-bold mb-4 transition-colors duration-300 group-hover:text-[--hover-text]" style={{ color: "var(--foreground)" }}>
                                                    {step.title}
                                                </h3>

                                                <p className="leading-relaxed mb-4" style={{ color: "var(--secondary-text)" }}>
                                                    {step.description}
                                                </p>

                                                {/* Number Watermark */}
                                                <div
                                                    className="step-number absolute top-4 right-6 text-6xl font-black opacity-[0.5] pointer-events-none"
                                                    style={{ color: commerceBlue }}
                                                >
                                                    0{idx + 1}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Spacer for the other side */}
                                        <div className="w-full md:w-1/2 hidden md:block" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
