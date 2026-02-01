import Hero from "@/components/services/performance-marketing/google-ads/Hero";
import ServiceOverview from "@/components/services/performance-marketing/google-ads/ServiceOverview";
import SolutionTypes from "@/components/services/performance-marketing/google-ads/SolutionTypes";
import TechStack from "@/components/services/performance-marketing/google-ads/TechStack";
import Process from "@/components/services/performance-marketing/google-ads/Process";
import WhyChooseUs from "@/components/services/performance-marketing/google-ads/WhyChooseUs";
import CTA from "@/components/services/performance-marketing/google-ads/CTA";
import { getPageMetadata } from '@/lib/metadata';

export const metadata = getPageMetadata({
    title: "Google Ads Agency | Google PPC Management Services",
    description: "Drive instant traffic and leads with our expert Google Ads management. specialized in Search, Display, Shopping, and Video campaigns.",
    url: "/services/performance-marketing/google-ads",
});

export default function GoogleAdsPage() {
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
