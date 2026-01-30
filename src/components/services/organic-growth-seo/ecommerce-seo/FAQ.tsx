"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    // E-commerce SEO Light Blue theme color
    const commerceBlue = "#0EA5E9";

    const faqs = [
        {
            question: "What is ecommerce SEO and why is it important?",
            answer: "Ecommerce SEO is the process of optimizing online stores to rank higher in search engines for product-related searches, driving organic traffic that converts into sales. Unlike traditional SEO, ecommerce SEO strategy focuses on product page optimization, schema markup for ecommerce products, faceted navigation SEO, and technical challenges unique to large product catalogs.\n\nIt's critical because 44% of shoppers begin their buying journey with Google search, and organic search drives 37% of all ecommerce traffic with the highest conversion rates (2.4% vs. 1.8% for paid). Strategic ecommerce SEO optimization delivers sustainable, long-term revenue growth without ongoing ad spend."
        },
        {
            question: "How much do ecommerce SEO services cost in 2026?",
            answer: "Ecommerce SEO cost for business 2026 varies by store size and complexity:\n\n• Small Online Stores (100-500 products): $1,500-$3,000/month\n• Mid-Size Ecommerce (500-5,000 products): $3,000-$7,000/month\n• Enterprise Brands (5,000+ products): $7,000-$15,000/month\n• Custom/Headless: $10,000-$25,000/month\n\nPricing includes technical SEO for ecommerce websites, on-page optimization, content creation, link building, and monthly reporting. Most clients see 3-5x ROI within 6-9 months. One-time ecommerce SEO audit and strategy services range from $2,500-$8,000."
        },
        {
            question: "How do I optimize my ecommerce product pages for SEO?",
            answer: "Optimizing ecommerce product page SEO requires:\n\n• Unique Product Descriptions (300+ words with natural keyword integration, benefits-focused)\n• Optimized Title Tags (Primary keyword + brand + modifier, under 60 chars)\n• Compelling Meta Descriptions (150-155 chars with CTR hooks and pricing/benefits)\n• Schema Markup (Product, Offer, Review, AggregateRating structured data)\n• High-Quality Images (Alt text with descriptive keywords, compressed for speed)\n• User-Generated Content (Customer reviews, Q&A sections)\n• Internal Linking (Link to related products, categories, buying guides)\n• Technical Optimization (Fast load speed, mobile-responsive, clean URL structure)\n\nFocus on user intent for ecommerce search - answer questions buyers have during purchase decisions."
        },
        {
            question: "What is the best ecommerce platform for SEO in 2026?",
            answer: "The best platform depends on your needs:\n\n• Shopify: Best for small businesses/DTC brands - easy optimization, strong app ecosystem for ecommerce SEO services for Shopify stores\n• WooCommerce: Best for content-heavy stores - WordPress flexibility enables advanced ecommerce content marketing and SEO strategy\n• Magento/Adobe Commerce: Best for enterprise - handles 100,000+ SKUs with advanced ecommerce SEO services for Magento websites\n• BigCommerce: Best for mid-market - built-in SEO features, scalable SaaS infrastructure\n\nAll platforms can rank well with proper ecommerce website optimization. Technical expertise matters more than platform choice."
        },
        {
            question: "How long does it take to see results from ecommerce SEO?",
            answer: "Ecommerce SEO timeline:\n\n• 30-60 days: Technical fixes implemented, indexation improves, low-competition keywords begin ranking\n• 60-90 days: Category pages rank for mid-competition keywords, organic traffic increases 25-50%\n• 90-120 days: Product pages gain traction, featured snippets appear, traffic up 50-100%\n• 6 months: Significant rankings for competitive keywords, 150-300% traffic increase, measurable revenue growth\n• 12 months: Market dominance, 300-500% traffic increase, sustainable revenue from organic search\n\nResults vary based on competition, starting authority, and implementation speed. Ecommerce SEO for international markets may take longer due to geo-targeting complexity."
        },
        {
            question: "What are ecommerce SEO ranking factors for 2026?",
            answer: "Top ecommerce SEO ranking factors post-December 2025 core update:\n\n• Core Web Vitals (LCP <2.5s, FID <100ms, CLS <0.1)\n• Helpful Product Content (Unique descriptions answering buyer questions)\n• E-E-A-T Signals (Author expertise, brand trust, verified reviews)\n• Schema Markup (Rich snippets with pricing, availability, ratings)\n• Mobile-First Experience (Responsive design, touch-friendly, fast mobile load)\n• User Engagement (Low bounce rate, time on page, add-to-cart rate)\n• Link Authority (Quality backlinks from industry sites)\n• Semantic Search Optimization (Natural language, topic coverage)\n• Internal Linking (Strategic flow of authority to money pages)\n• Technical Health (No errors, proper canonicals, clean indexing)"
        },
        {
            question: "Do you offer ecommerce SEO for international markets?",
            answer: "Yes, our ecommerce SEO for international markets services include:\n\n• Hreflang Implementation (Proper language/region targeting)\n• Multi-Language Content (Native translation, cultural localization)\n• Geo-Targeting Setup (ccTLDs, subfolders, or subdomains)\n• International Link Building (Region-specific authority)\n• Currency/Shipping Optimization (Local payment methods, shipping calculators)\n\nWe serve clients across US, EU, UK, India, APAC, and Latin America with localized ecommerce SEO strategy."
        }
    ];

    return (
        <section
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span
                            className="px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase border"
                            style={{
                                backgroundColor: `${commerceBlue}10`,
                                borderColor: `${commerceBlue}30`,
                                color: commerceBlue,
                            }}
                        >
                            FAQ
                        </span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Frequently Asked <span style={{ color: commerceBlue }}>Questions</span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--foreground)" }}
                    >
                        Everything you need to know about our ecommerce SEO services.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;

                        return (
                            <div
                                key={idx}
                                className="rounded-2xl border transition-all duration-300"
                                style={{
                                    borderColor: isOpen ? commerceBlue : "var(--border-color)",
                                    backgroundColor: "var(--card-bg)",
                                }}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                                    className="w-full p-6 flex items-start justify-between gap-4 text-left"
                                >
                                    <div className="flex items-start gap-4 flex-1">
                                        <div
                                            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                                            style={{
                                                backgroundColor: isOpen ? commerceBlue : `${commerceBlue}15`,
                                                color: isOpen ? "white" : commerceBlue
                                            }}
                                        >
                                            <HelpCircle className="w-5 h-5" />
                                        </div>
                                        <h3
                                            className="text-lg md:text-xl font-bold transition-colors duration-300"
                                            style={{ color: isOpen ? commerceBlue : "var(--foreground)" }}
                                        >
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <ChevronDown
                                        className="w-6 h-6 flex-shrink-0 transition-transform duration-300"
                                        style={{
                                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                                            color: isOpen ? commerceBlue : "var(--secondary-text)"
                                        }}
                                    />
                                </button>

                                <div
                                    className="overflow-hidden transition-all duration-300"
                                    style={{
                                        maxHeight: isOpen ? "1000px" : "0",
                                        opacity: isOpen ? 1 : 0
                                    }}
                                >
                                    <div className="px-6 pb-6 pl-20">
                                        <p
                                            className="leading-relaxed whitespace-pre-line" style={{ color: "var(--foreground)" }}
                                        >
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
