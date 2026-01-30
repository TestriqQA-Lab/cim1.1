import type { Metadata } from "next";
import Hero from "@/components/services/social-media-marketing-services/instagram-marketing-services/Hero";
import ServiceOverview from "@/components/services/social-media-marketing-services/instagram-marketing-services/ServiceOverview";
import SolutionTypes from "@/components/services/social-media-marketing-services/instagram-marketing-services/SolutionTypes";
import TechStack from "@/components/services/social-media-marketing-services/instagram-marketing-services/TechStack";
import Process from "@/components/services/social-media-marketing-services/instagram-marketing-services/Process";
import WhyChooseUs from "@/components/services/social-media-marketing-services/instagram-marketing-services/WhyChooseUs";
import FAQ from "@/components/services/social-media-marketing-services/instagram-marketing-services/FAQ";
import CTA from "@/components/services/social-media-marketing-services/instagram-marketing-services/CTA";

export const metadata: Metadata = {
    title: "Best Instagram Marketing Agency | #1 Instagram Growth & Ads 2026",
    description:
        "Supercharge your brand with the top Instagram Marketing Company. Expert Reels, Influencer Marketing, and Instagram Advertising Services. Get a 20% CTR boost!",
    keywords: [
        "Instagram Marketing Services",
        "Instagram Marketing Agency",
        "Instagram Advertising Services",
        "Instagram Marketing Company",
        "Instagram Management Services",
    ],
};

export default function InstagramMarketingPage() {
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Instagram Marketing Services",
                        "provider": {
                            "@type": "Organization",
                            "name": "Cinute Infomedia",
                            "url": "https://www.cinuteinfomedia.com"
                        },
                        "areaServed": "Global",
                        "description": "Expert Instagram Marketing Services including Reels production, ad management, and organic growth strategies for global brands.",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://www.cinuteinfomedia.com/services/social-media-marketing-services/instagram-marketing-services"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Instagram Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Instagram Reels Production"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Instagram Advertising Management"
                                    }
                                }
                            ]
                        }
                    })
                }}
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
