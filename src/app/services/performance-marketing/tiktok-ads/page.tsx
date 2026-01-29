import Hero from "@/components/services/performance-marketing/tiktok-ads/Hero";
import ServiceOverview from "@/components/services/performance-marketing/tiktok-ads/ServiceOverview";
import SolutionTypes from "@/components/services/performance-marketing/tiktok-ads/SolutionTypes";
import TechStack from "@/components/services/performance-marketing/tiktok-ads/TechStack";
import Process from "@/components/services/performance-marketing/tiktok-ads/Process";
import WhyChooseUs from "@/components/services/performance-marketing/tiktok-ads/WhyChooseUs";
import CTA from "@/components/services/performance-marketing/tiktok-ads/CTA";

export default function TikTokAdsPage() {
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
