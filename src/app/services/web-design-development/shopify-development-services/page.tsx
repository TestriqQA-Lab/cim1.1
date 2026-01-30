import { Metadata } from "next";
import Hero from "@/components/services/web-design-development/shopify-development-services/Hero";
import ServiceOverview from "@/components/services/web-design-development/shopify-development-services/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/shopify-development-services/SolutionTypes";
import TechStack from "@/components/services/web-design-development/shopify-development-services/TechStack";
import Process from "@/components/services/web-design-development/shopify-development-services/Process";
import WhyChooseUs from "@/components/services/web-design-development/shopify-development-services/WhyChooseUs";
import CTA from "@/components/services/web-design-development/shopify-development-services/CTA";

export const metadata: Metadata = {
    title: "Best Shopify Development Services | Top Shopify Marketing Agency 2026",
    description: "Scale your brand with expert Shopify development services. From custom theme design to Shopify Plus migration & SEO optimization. Get a 20%+ CTR boost today!",
    keywords: [
        "Shopify services",
        "Shopify development services",
        "Shopify store design services",
        "Shopify marketing agency",
        "Shopify SEO services",
        "Shopify Plus development",
        "Hire Shopify expert",
    ],
    alternates: {
        canonical: "/services/web-design-development/shopify-development-services",
    },
    openGraph: {
        title: "Best Shopify Development Services | Top Shopify Marketing Agency 2026",
        description: "Scale your brand with expert Shopify development services. From custom theme design to Shopify Plus migration & SEO optimization.",
        type: "website",
    },
};

export default function ShopifyEcommercePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Shopify Development Services",
        "provider": {
            "@type": "Organization",
            "name": "Cinute Infomedia",
            "url": "https://www.cinuteinfomedia.com"
        },
        "areaServed": "Global",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Shopify Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Shopify Store Design"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Shopify Plus Development"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Shopify Migration and SEO"
                    }
                }
            ]
        },
        "mainEntity": {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What are the benefits of using Shopify for ecommerce?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Shopify offers high reliability, security, and a massive ecosystem, making it the top choice for global scaling in 2026."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How much do professional Shopify development services cost?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Costs range from $5,000 for startups to $100,000+ for enterprise Shopify Plus and headless projects."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you integrate Shopify POS with retail software?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we provide seamless Shopify POS integration for unified online and offline retail management."
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
            <CTA />
        </main>
    );
}
