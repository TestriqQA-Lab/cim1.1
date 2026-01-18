import type { Metadata } from "next";
import Hero from "@/components/services/social-media-marketing/facebook-advertising/Hero";
import ServiceOverview from "@/components/services/social-media-marketing/facebook-advertising/ServiceOverview";
import SolutionTypes from "@/components/services/social-media-marketing/facebook-advertising/SolutionTypes";
import TechStack from "@/components/services/social-media-marketing/facebook-advertising/TechStack";
import Process from "@/components/services/social-media-marketing/facebook-advertising/Process";
import WhyChooseUs from "@/components/services/social-media-marketing/facebook-advertising/WhyChooseUs";
import CTA from "@/components/services/social-media-marketing/facebook-advertising/CTA";

export const metadata: Metadata = {
    title: "Facebook Advertising Agency | Meta Ads Management | TestrIQ",
    description:
        "Expert Facebook advertising and Meta Ads management services. Drive leads, sales, and ROI with precision-targeted Facebook and Instagram ad campaigns. Get a free audit today.",
    keywords: [
        "Facebook advertising",
        "Facebook ads agency",
        "Meta ads management",
        "Facebook marketing",
        "Instagram advertising",
        "Facebook lead generation",
        "Facebook retargeting",
        "social media advertising",
        "Facebook ads expert",
        "Meta Business Partner",
    ],
};

export default function FacebookAdvertisingPage() {
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
