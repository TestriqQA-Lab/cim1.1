import type { Metadata } from "next";
import Hero from "@/components/services/web-design-development/wordpress-development/Hero";
import ServiceOverview from "@/components/services/web-design-development/wordpress-development/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/wordpress-development/SolutionTypes";
import TechStack from "@/components/services/web-design-development/wordpress-development/TechStack";
import Process from "@/components/services/web-design-development/wordpress-development/Process";
import WhyChooseUs from "@/components/services/web-design-development/wordpress-development/WhyChooseUs";
import FAQ from "@/components/services/web-design-development/wordpress-development/FAQ";
import CTA from "@/components/services/web-design-development/wordpress-development/CTA";

export const metadata: Metadata = {
    title: "WordPress Development Services | Custom & Enterprise WP Agency",
    description: "Scale your business with #1 WordPress development services. Custom themes, WooCommerce & 2026-ready SEO optimization. Get a bug-free, high-ROI site today!",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "WordPress Development Services",
    "provider": {
        "@type": "Organization",
        "name": "Cinute Infomedia",
        "url": "https://www.cinuteinfomedia.com"
    },
    "areaServed": "Global",
    "description": "Professional WordPress development services including custom themes, WooCommerce, plugin development, and speed optimization for 2026.",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "WordPress Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Custom WordPress Website Design and Development"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "WooCommerce Development and Customization"
                }
            }
        ]
    },
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.cinuteinfomedia.com/services/web-design-development/wordpress-development"
    }
};

export default function WordPressDevelopmentPage() {
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
