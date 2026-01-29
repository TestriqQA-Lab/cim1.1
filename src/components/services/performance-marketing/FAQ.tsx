"use client";

import React, { useState } from 'react';
import { MessageSquare, ChevronDown } from 'lucide-react';

export default function FAQ() {
    const [faqOpen, setFaqOpen] = useState<number | null>(null);

    const faqs = [
        {
            q: "What is the difference between digital marketing and performance marketing?",
            a: "While digital marketing encompasses all online efforts, performance marketing is specifically focused on paid channels where you pay only for results - clicks, leads, or sales. It is highly measurable and ROI-centric.",
        },
        {
            q: "How much do your performance marketing services cost?",
            a: "We offer flexible pricing models including percentage of ad spend, fixed retainers, or hybrid performance-based fees aimed at ensuring ROI. We tailor our pricing to match your specific goals and budget.",
        },
        {
            q: "How do you measure success in performance marketing?",
            a: "We look beyond clicks. Our primary KPIs are Return on Ad Spend (ROAS), Customer Acquisition Cost (CAC), and Conversion Rate. We focus on metrics that directly impact your bottom line.",
        },
        {
            q: "Do you handle creative assets for ads?",
            a: "Yes! Our in-house creative team designs high-converting banners, writes persuasive ad copy, and edits video ads tailored to each platform. Creative is a crucial driver of performance.",
        },
        {
            q: "Can you help with B2B lead generation?",
            a: "Absolutely. We specialize in B2B performance marketing, leveraging LinkedIn Ads and high-intent Google Search to fill your pipeline with qualified decision-makers.",
        },
    ];

    return (
        <section className="py-20" style={{ backgroundColor: "var(--card-bg)" }}>
            <div className="mx-auto max-w-5xl px-6 md:px-12 xl:px-20">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background)] border border-[var(--border-color)] mb-6">
                        <MessageSquare className="w-4 h-4 text-[var(--brand-orange)]" />
                        <span className="text-sm font-bold tracking-wider uppercase" style={{ color: "var(--foreground)" }}>FAQ</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black mb-6">Frequently Asked Questions</h2>
                    <p className="text-lg text-[var(--secondary-text)] max-w-2xl mx-auto">
                        Answers to common questions about our performance marketing services, pricing, and approach.
                    </p>
                </div>

                <div className="grid gap-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="group rounded-2xl border transition-all duration-300"
                            style={{
                                backgroundColor: "var(--background)",
                                borderColor: faqOpen === i ? "var(--brand-orange)" : "var(--border-color)",
                                borderRadius: '1.25rem'
                            }}
                        >
                            <button
                                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                                className="w-full text-left px-6 py-6 focus:outline-none"
                            >
                                <div className="flex gap-4 items-center justify-between">
                                    <div className="flex gap-4 items-center">
                                        <div
                                            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                                            style={{
                                                backgroundColor: faqOpen === i ? "var(--brand-orange)" : "color-mix(in srgb, var(--brand-orange) 10%, transparent)",
                                                color: faqOpen === i ? "white" : "var(--brand-orange)"
                                            }}
                                        >
                                            <span className="font-bold">{i + 1}</span>
                                        </div>
                                        <h3 className="font-bold text-lg md:text-xl pr-8">{faq.q}</h3>
                                    </div>
                                    <ChevronDown
                                        className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${faqOpen === i ? "rotate-180" : ""}`}
                                        style={{ color: "var(--secondary-text)" }}
                                    />
                                </div>

                                {faqOpen === i && (
                                    <div className="mt-4 pl-14 pr-4 border-t pt-4 animate-in fade-in slide-in-from-top-2 duration-300" style={{ borderColor: "color-mix(in srgb, var(--border-color) 50%, transparent)" }}>
                                        <p className="text-[var(--secondary-text)] leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </div>
                                )}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
