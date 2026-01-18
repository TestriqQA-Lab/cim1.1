import type { Metadata } from "next";
import Hero from "@/components/services/social-media-marketing/linkedin-marketing/Hero";
import ServiceOverview from "@/components/services/social-media-marketing/linkedin-marketing/ServiceOverview";
import SolutionTypes from "@/components/services/social-media-marketing/linkedin-marketing/SolutionTypes";
import TechStack from "@/components/services/social-media-marketing/linkedin-marketing/TechStack";
import Process from "@/components/services/social-media-marketing/linkedin-marketing/Process";
import WhyChooseUs from "@/components/services/social-media-marketing/linkedin-marketing/WhyChooseUs";
import CTA from "@/components/services/social-media-marketing/linkedin-marketing/CTA";

export const metadata: Metadata = {
    title: "LinkedIn Marketing Agency | B2B Lead Generation | TestrIQ",
    description:
        "Expert LinkedIn marketing services for B2B lead generation. Sponsored content, InMail campaigns, and account-based marketing. Reach 1B+ professionals.",
    keywords: [
        "LinkedIn marketing",
        "LinkedIn ads agency",
        "B2B lead generation",
        "LinkedIn advertising",
        "LinkedIn InMail campaigns",
        "LinkedIn sponsored content",
        "account-based marketing",
        "LinkedIn Sales Navigator",
        "B2B social media marketing",
        "LinkedIn strategy",
    ],
};

export default function LinkedInMarketingPage() {
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
