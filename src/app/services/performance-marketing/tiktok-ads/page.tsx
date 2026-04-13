import Hero from "@/components/services/performance-marketing/tiktok-ads/Hero";
import ServiceOverview from "@/components/services/performance-marketing/tiktok-ads/ServiceOverview";
import SolutionTypes from "@/components/services/performance-marketing/tiktok-ads/SolutionTypes";
import TechStack from "@/components/services/performance-marketing/tiktok-ads/TechStack";
import Process from "@/components/services/performance-marketing/tiktok-ads/Process";
import WhyChooseUs from "@/components/services/performance-marketing/tiktok-ads/WhyChooseUs";
import CTA from "@/components/services/performance-marketing/tiktok-ads/CTA";
import { getPageMetadata } from '@/lib/metadata';

export const metadata = getPageMetadata({
    title: "TikTok Ads Agency | TikTok Advertising Services",
    description: "Go viral and reach Gen Z audiences with creative TikTok advertising campaigns. Our agency helps you leverage the power of short-form video.",
    url: "/services/performance-marketing/tiktok-ads",
    image: "/og-images/tiktok_ads.webp",
});

export default function TikTokAdsPage() {
    return (
        <main style={{ "--page-selection-bg": "#ff0050" } as React.CSSProperties}>
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
