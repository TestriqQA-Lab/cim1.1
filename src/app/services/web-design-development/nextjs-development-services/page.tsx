import { Metadata } from "next";
import Hero from "@/components/services/web-design-development/nextjs-development-services/Hero";
import ServiceOverview from "@/components/services/web-design-development/nextjs-development-services/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/nextjs-development-services/SolutionTypes";
import TechStack from "@/components/services/web-design-development/nextjs-development-services/TechStack";
import Process from "@/components/services/web-design-development/nextjs-development-services/Process";
import WhyChooseUs from "@/components/services/web-design-development/nextjs-development-services/WhyChooseUs";
import FAQ from "@/components/services/web-design-development/nextjs-development-services/FAQ";
import CTA from "@/components/services/web-design-development/nextjs-development-services/CTA";

export const metadata: Metadata = {
    title: "Next.js Development Agency | Expert React JS Development Company 2026",
    description: "Premier Next.js 16 development services. Hire React 19 developers for Enterprise, SaaS & E-commerce. Boost Core Web Vitals & ROI.",
    alternates: {
        canonical: "/services/web-design-development/nextjs-development-services",
    },
    keywords: [
        "next.js development agency",
        "react js development company",
        "next.js development services",
        "react development services",
        "next.js for enterprise",
        "next.js for saas",
        "next.js for e-commerce",
        "core web vitals optimization",
        "react development agency",
        "next.js server-side rendering",
    ],
    openGraph: {
        title: "Next.js Development Agency | Expert React JS Development Company 2026",
        description: "Premier Next.js development services for high-performance apps. Hire React developers for Enterprise, SaaS & E-commerce.",
        type: "website",
    },
};

export default function NextjsReactPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Next.js & React Development Services",
        "description": "Professional Next.js and React JS development services for global enterprises and startups, focusing on high performance, SSR, and SEO optimization.",
        "provider": {
            "@type": "Organization",
            "name": "Cinute Infomedia",
            "url": "https://www.cinuteinfomedia.com"
        },
        "serviceType": "Web Development",
        "areaServed": "Global",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Development Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Custom React Development"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Next.js Performance Optimization"
                    }
                }
            ]
        },
        "mainEntity": {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What are the benefits of using Next.js for business in 2026?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Next.js offers superior performance, better SEO through SSR/ISR, and improved developer experience. Its ability to deliver near-instant load times and optimize Core Web Vitals is crucial for maintaining top rankings."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How much does it cost to build a custom Next.js website?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Costs range from $5,000 for marketing sites to $50,000+ for complex enterprise SaaS platforms, depending on features and integrations."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do I choose the best React development agency?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Look for a proven track record (E-E-A-T), expertise in latest React/Next.js features (App Router/Server Components), and a focus on performance-driven results."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the difference between Next.js and React?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "React is a UI library; Next.js is a framework built on top of it that adds routing, SSR, SSG, and API routes out of the box for production-ready apps."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long does it take to develop a Next.js web application?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Standard projects take 4-12 weeks. Small sites take 4-6 weeks, while complex enterprise apps can take 3-6 months or more."
                    }
                }
            ]
        }
    };

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
