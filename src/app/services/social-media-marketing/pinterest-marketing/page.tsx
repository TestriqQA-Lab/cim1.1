import type { Metadata } from "next";
import Hero from "@/components/services/social-media-marketing/pinterest-marketing/Hero";
import ServiceOverview from "@/components/services/social-media-marketing/pinterest-marketing/ServiceOverview";
import SolutionTypes from "@/components/services/social-media-marketing/pinterest-marketing/SolutionTypes";
import TechStack from "@/components/services/social-media-marketing/pinterest-marketing/TechStack";
import Process from "@/components/services/social-media-marketing/pinterest-marketing/Process";
import WhyChooseUs from "@/components/services/social-media-marketing/pinterest-marketing/WhyChooseUs";
import CTA from "@/components/services/social-media-marketing/pinterest-marketing/CTA";

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
};

export default function PinterestMarketingPage() {
    return (
        <main>
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
