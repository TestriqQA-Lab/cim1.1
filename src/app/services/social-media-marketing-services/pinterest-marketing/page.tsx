import type { Metadata } from "next";
import Hero from "@/components/services/social-media-marketing-services/pinterest-marketing/Hero";
import ServiceOverview from "@/components/services/social-media-marketing-services/pinterest-marketing/ServiceOverview";
import SolutionTypes from "@/components/services/social-media-marketing-services/pinterest-marketing/SolutionTypes";
import TechStack from "@/components/services/social-media-marketing-services/pinterest-marketing/TechStack";
import Process from "@/components/services/social-media-marketing-services/pinterest-marketing/Process";
import WhyChooseUs from "@/components/services/social-media-marketing-services/pinterest-marketing/WhyChooseUs";
import CTA from "@/components/services/social-media-marketing-services/pinterest-marketing/CTA";

export const metadata: Metadata = {
    title: "Pinterest Marketing Agency | Visual Discovery & Shopping Ads",
    description:
        "Drive traffic and sales with Pinterest marketing. Shoppable pins, promoted content, and visual discovery strategies for e-commerce and lifestyle brands.",
    keywords: [
        "Pinterest marketing",
        "Pinterest ads agency",
        "Pinterest advertising",
        "shoppable pins",
        "Pinterest SEO",
        "visual discovery marketing",
        "Pinterest for business",
        "Pinterest shopping ads",
        "idea pins",
        "Pinterest strategy",
    ],
    openGraph: {
        title: "Pinterest Marketing Agency | Visual Discovery & Shopping Ads",
        description: "Drive traffic and sales with Pinterest marketing. Shoppable pins, promoted content, and visual discovery strategies for e-commerce and lifestyle brands.",
        url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/pinterest-marketing",
        type: "website",
        images: [
            {
                url: "/og-images/pinterest-marketing.webp",
                width: 1200,
                height: 630,
                alt: "Pinterest Marketing Agency | Visual Discovery & Shopping Ads by Cinute Infomedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Pinterest Marketing Agency | Visual Discovery & Shopping Ads",
        description: "Drive traffic and sales with Pinterest marketing. Shoppable pins, promoted content, and visual discovery strategies for e-commerce and lifestyle brands.",
        images: ["/og-images/pinterest-marketing.webp"],
    },
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/pinterest-marketing",
    },
};

export default function PinterestMarketingPage() {
    return (
        <main style={{ "--page-selection-bg": "#E60023" } as React.CSSProperties}>
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
