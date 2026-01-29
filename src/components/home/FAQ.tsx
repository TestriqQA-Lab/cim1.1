"use client";

import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';

export default function FAQ() {
    const [faqOpen, setFaqOpen] = useState<number | null>(null);

    const faqs = [
        {
            q: "What makes Cinute InfoMedia different from other web development companies?",
            a: "We combine technical excellence with business strategy. Unlike typical web development agencies that just code to specs, we act as your growth partner - providing strategic guidance, data-driven recommendations, and continuous optimization. Our 95% client retention rate and 300+ successful projects speak to our partnership approach.",
        },
        {
            q: "What web development services do you offer?",
            a: "We offer comprehensive solutions including custom website development (corporate, e-commerce, SaaS), mobile app development (iOS, Android, cross-platform), web applications with modern frameworks (Next.js, React, Laravel), WordPress development, e-commerce development (Shopify, WooCommerce), Progressive Web Apps (PWA), and API development & integrations.",
        },
        {
            q: "How much does professional website development cost?",
            a: "Website development costs vary based on complexity, features, and scope. Our projects typically range from $5,000 for basic corporate websites to $50,000+ for enterprise e-commerce platforms or custom SaaS applications. We provide transparent, fixed-price quotes after understanding your requirements during the free consultation.",
        },
        {
            q: "Do you provide SEO services with web development?",
            a: "Yes! Every website we build includes foundational technical SEO - optimized code structure, mobile responsiveness, fast loading speeds, semantic HTML, and proper schema markup. We also offer comprehensive SEO services as an ongoing engagement, including keyword strategy, content optimization, link building, and performance tracking.",
        },
        {
            q: "What is your web development process and timeline?",
            a: "Our proven 6-phase Agile methodology: Discovery & Planning (1-2 weeks), Design & Prototyping (2-3 weeks), Development & Coding (4-10 weeks), Testing & QA (1-2 weeks), Deployment & Launch (1 week), and Post-Launch Support (ongoing). Typical corporate website: 8-10 weeks | E-commerce platform: 12-16 weeks | Custom SaaS: 16-24 weeks.",
        },
        {
            q: "Do you work with businesses outside India?",
            a: "Absolutely! While we're based in India, 60% of our clients are in the US, EU, UK, and APAC regions. We have extensive experience with global time zones, international compliance requirements (GDPR, ADA, WCAG), and multi-currency/multi-language implementations.",
        },
        {
            q: "What happens after my website launches?",
            a: "We don't believe in 'launch and abandon.' Every web development project includes 30 days of post-launch support. After that, we offer flexible maintenance packages covering security updates, performance monitoring, content updates, and continuous optimization. Many clients transition to our ongoing digital marketing services for sustained growth.",
        },
        {
            q: "Can you integrate AI and automation into my website?",
            a: "Yes! We're pioneers in AI-driven web solutions including AI-powered chatbots for customer support, workflow automation (CRM, email, reporting), personalized user experiences with machine learning, intelligent search and recommendation engines, and pred ictive analytics dashboards.",
        },
    ];

    return (
        <section className="py-20" style={{ backgroundColor: "var(--card-bg)" }}>
            <div className="mx-auto max-w-5xl px-6 md:px-12 xl:px-20">
                <div style={{ textAlign: "center", marginBottom: 24 }}>
                    <div style={{ display: "inline-flex", gap: 8, padding: "8px 16px", borderRadius: 999, backgroundColor: "var(--background)", border: "1px solid var(--border-color)", marginBottom: 12 }}>
                        <MessageSquare className="w-4 h-4" style={{ color: "var(--brand-cyan)" }} />
                        <span style={{ fontWeight: 700 }}>FAQ</span>
                    </div>
                    <h2 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: 8 }}>Frequently Asked Questions</h2>
                    <p style={{ color: "var(--secondary-text)" }}>Answers to common questions about services, pricing and timelines</p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {faqs.map((faq, i) => (
                        <div key={i} style={{ backgroundColor: "var(--background)", border: "1px solid var(--border-color)", padding: 20, borderRadius: 12, transition: "all 0.3s" }} className="hover:shadow-md">
                            <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} style={{ width: "100%", textAlign: "left", background: "transparent", border: "none", padding: 0 }}>
                                <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                                    <div style={{ width: 40, height: 40, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(90deg, var(--brand-blue), var(--brand-cyan))", color: "#fff", flexShrink: 0 }}>
                                        <MessageSquare className="w-5 h-5" />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontWeight: 700, marginBottom: 8 }}>{faq.q}</div>
                                        {faqOpen === i && <div style={{ color: "var(--foreground)", marginTop: 8 }}>{faq.a}</div>}
                                    </div>
                                </div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
