import Hero from "@/components/services/performance-marketing/youtube-ads/Hero";
import ServiceOverview from "@/components/services/performance-marketing/youtube-ads/ServiceOverview";
import SolutionTypes from "@/components/services/performance-marketing/youtube-ads/SolutionTypes";
import TechStack from "@/components/services/performance-marketing/youtube-ads/TechStack";
import Process from "@/components/services/performance-marketing/youtube-ads/Process";
import WhyChooseUs from "@/components/services/performance-marketing/youtube-ads/WhyChooseUs";
import CTA from "@/components/services/performance-marketing/youtube-ads/CTA";
import { getPageMetadata } from '@/lib/metadata';

export const metadata = getPageMetadata({
    title: "YouTube Ads Agency | YouTube Advertising Services",
    description: "Engage your audience with compelling video ads on YouTube. Our YouTube Ads agency manages TrueView, Bumper, and Discovery ads for impact.",
    url: "/services/performance-marketing/youtube-ads",
});

export default function YouTubeAdsPage() {
    return (
        <main style={{ "--page-selection-bg": "#FF0000" } as React.CSSProperties}>
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
