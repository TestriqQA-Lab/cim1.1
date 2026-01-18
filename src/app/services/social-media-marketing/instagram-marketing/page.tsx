import type { Metadata } from "next";
import Hero from "@/components/services/social-media-marketing/instagram-marketing/Hero";
import ServiceOverview from "@/components/services/social-media-marketing/instagram-marketing/ServiceOverview";
import SolutionTypes from "@/components/services/social-media-marketing/instagram-marketing/SolutionTypes";
import TechStack from "@/components/services/social-media-marketing/instagram-marketing/TechStack";
import Process from "@/components/services/social-media-marketing/instagram-marketing/Process";
import WhyChooseUs from "@/components/services/social-media-marketing/instagram-marketing/WhyChooseUs";
import CTA from "@/components/services/social-media-marketing/instagram-marketing/CTA";

export const metadata: Metadata = {
    title: "Instagram Marketing Agency | Instagram Ads & Growth | TestrIQ",
    description:
        "Expert Instagram marketing services to grow your brand. Reels strategy, influencer marketing, Instagram ads, and content creation. Reach 2B+ users. Get a free audit.",
    keywords: [
        "Instagram marketing",
        "Instagram ads agency",
        "Instagram growth",
        "Instagram Reels marketing",
        "Instagram influencer marketing",
        "Instagram content creation",
        "Instagram advertising",
        "Instagram Shopping",
        "social media marketing",
        "Instagram strategy",
    ],
};

export default function InstagramMarketingPage() {
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
