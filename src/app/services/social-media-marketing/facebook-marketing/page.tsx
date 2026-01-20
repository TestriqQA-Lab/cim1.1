import type { Metadata } from "next";
import Hero from "@/components/services/social-media-marketing/facebook-marketing/Hero";
import ServiceOverview from "@/components/services/social-media-marketing/facebook-marketing/ServiceOverview";
import SolutionTypes from "@/components/services/social-media-marketing/facebook-marketing/SolutionTypes";
import TechStack from "@/components/services/social-media-marketing/facebook-marketing/TechStack";
import Process from "@/components/services/social-media-marketing/facebook-marketing/Process";
import WhyChooseUs from "@/components/services/social-media-marketing/facebook-marketing/WhyChooseUs";
import CTA from "@/components/services/social-media-marketing/facebook-marketing/CTA";

export const metadata: Metadata = {
    title: "Facebook Marketing Agency | Social Media Growth Services | TestrIQ",
    description:
        "Comprehensive Facebook marketing and social media growth services. Drive brand awareness, loyalty, and ROI with precision-targeted organic and paid strategies. Get a free proposal today.",
    keywords: [
        "Facebook marketing",
        "Facebook marketing agency",
        "Meta marketing management",
        "Social media growth",
        "Facebook community management",
        "Facebook lead generation",
        "Facebook branding",
        "social media strategy",
        "Facebook marketing expert",
    ],
};

export default function FacebookMarketingPage() {
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
