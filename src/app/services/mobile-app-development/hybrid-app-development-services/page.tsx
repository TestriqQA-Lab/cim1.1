import { Metadata } from "next";
import Hero from "@/components/services/mobile-app-development/hybrid-app-development-services/Hero";
import ServiceOverview from "@/components/services/mobile-app-development/hybrid-app-development-services/ServiceOverview";
import SolutionTypes from "@/components/services/mobile-app-development/hybrid-app-development-services/SolutionTypes";
import TechStack from "@/components/services/mobile-app-development/hybrid-app-development-services/TechStack";
import Process from "@/components/services/mobile-app-development/hybrid-app-development-services/Process";
import WhyChooseUs from "@/components/services/mobile-app-development/hybrid-app-development-services/WhyChooseUs";
import FAQ from "@/components/services/mobile-app-development/hybrid-app-development-services/FAQ";
import CTA from "@/components/services/mobile-app-development/hybrid-app-development-services/CTA";

export const metadata: Metadata = {
    title: "Hybrid App Development Services | Top Cross-Platform Agency 2026 \uD83D\uDE80",
    description:
        "Leading hybrid mobile app development company. Build high-performance, single codebase apps for iOS & Android with Ionic & Capacitor. 20%+ CTR boost!",
    keywords: [
        "hybrid app development services",
        "Ionic framework app development agency",
        "Capacitor development solutions",
        "hybrid mobile app development company",
        "cross-platform app development",
        "PWA development",
        "custom hybrid app development for startups",
        "healthcare hybrid applications",
        "IoT hybrid app development",
    ],
};

export default function HybridAppDevelopmentPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "name": "Hybrid App Development Services",
                "provider": {
                    "@type": "Organization",
                    "name": "Cinute Infomedia",
                    "url": "https://www.cinuteinfomedia.com",
                },
                "description":
                    "High-performance hybrid mobile app development services using Ionic and Capacitor. Single codebase solutions for iOS and Android.",
                "areaServed": "Global",
                "serviceType": "Mobile App Development",
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is hybrid app development?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Hybrid app development is a software development approach where a single codebase is written using web technologies and wrapped in a native container to run on multiple platforms.",
                        },
                    },
                    {
                        "@type": "Question",
                        "name": "What are the benefits of hybrid apps vs native apps?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The primary benefits include cost-efficiency, faster time-to-market, and easier maintenance using a single codebase for multiple platforms.",
                        },
                    },
                    {
                        "@type": "Question",
                        "name": "How much does it cost to build a hybrid mobile app?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The cost typically ranges from $15,000 to $60,000+, offering up to 50% savings compared to native builds.",
                        },
                    },
                    {
                        "@type": "Question",
                        "name": "Which frameworks are best for hybrid app development in 2026?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Ionic and Capacitor are the leading frameworks for hybrid development in 2026.",
                        },
                    },
                    {
                        "@type": "Question",
                        "name": "How long does it take to develop a custom hybrid app?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A standard hybrid app MVP can be developed in 8 to 12 weeks.",
                        },
                    },
                ],
            },
        ],
    };

    return (
        <main className="min-h-screen">
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
