import type { Metadata } from "next";
import Hero from "@/components/services/seo-services/on-page-seo-services/Hero";
import ServiceOverview from "@/components/services/seo-services/on-page-seo-services/ServiceOverview";
import SolutionTypes from "@/components/services/seo-services/on-page-seo-services/SolutionTypes";
import TechStack from "@/components/services/seo-services/on-page-seo-services/TechStack";
import Process from "@/components/services/seo-services/on-page-seo-services/Process";
import WhyChooseUs from "@/components/services/seo-services/on-page-seo-services/WhyChooseUs";
import FAQ from "@/components/services/seo-services/on-page-seo-services/FAQ";
import CTA from "@/components/services/seo-services/on-page-seo-services/CTA";

export const metadata: Metadata = {
    title: "Hire Expert On-Page SEO Services | Boost Organic Traffic 2026",
    description:
        "Scaling ROI with data-backed On-page SEO optimization. Rank #1, fix Core Web Vitals, and dominate SERPs with high-E-E-A-T technical audits. Get a free audit today!",
    alternates: {
        canonical: "/services/seo-services/on-page-seo-services",
    },
    keywords: [
        "on-page SEO",
        "on-page SEO services",
        "title tag optimization",
        "meta description optimization",
        "content optimization",
        "internal linking",
        "header tags SEO",
        "image optimization SEO",
        "schema markup",
        "core web vitals",
    ],
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "On-Page SEO Services",
    "provider": {
        "@type": "Organization",
        "name": "Cinute Infomedia",
        "url": "https://www.cinuteinfomedia.com"
    },
    "areaServed": "Global",
    "description": "Professional on-page SEO optimization services including technical audits, keyword mapping, content optimization, and schema implementation to boost search rankings.",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "SEO Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "On-page SEO Technical Audit"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "E-commerce SEO Optimization"
                }
            }
        ]
    },
    "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is included in on-page SEO services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our services include technical audits, keyword mapping, content optimization, image SEO, and schema markup."
                }
            }
        ]
    }
};

export default function OnPageSEOPage() {
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero />
            <ServiceOverview />
            <SolutionTypes />
            <TechStack />
            <Process />
            <WhyChooseUs />
            <FAQ />
            <CTA />
        </main>
    );
}
