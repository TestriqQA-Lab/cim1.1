import Hero from "@/components/services/performance-marketing/youtube-ads/Hero";
import ServiceOverview from "@/components/services/performance-marketing/youtube-ads/ServiceOverview";
import SolutionTypes from "@/components/services/performance-marketing/youtube-ads/SolutionTypes";
import TechStack from "@/components/services/performance-marketing/youtube-ads/TechStack";
import Process from "@/components/services/performance-marketing/youtube-ads/Process";
import WhyChooseUs from "@/components/services/performance-marketing/youtube-ads/WhyChooseUs";
import CTA from "@/components/services/performance-marketing/youtube-ads/CTA";

export default function YouTubeAdsPage() {
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
