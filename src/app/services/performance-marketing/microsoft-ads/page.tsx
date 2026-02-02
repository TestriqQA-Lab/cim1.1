import Hero from "@/components/services/performance-marketing/microsoft-ads/Hero";
import ServiceOverview from "@/components/services/performance-marketing/microsoft-ads/ServiceOverview";
import SolutionTypes from "@/components/services/performance-marketing/microsoft-ads/SolutionTypes";
import TechStack from "@/components/services/performance-marketing/microsoft-ads/TechStack";
import Process from "@/components/services/performance-marketing/microsoft-ads/Process";
import WhyChooseUs from "@/components/services/performance-marketing/microsoft-ads/WhyChooseUs";
import CTA from "@/components/services/performance-marketing/microsoft-ads/CTA";
import { getPageMetadata } from '@/lib/metadata';

export const metadata = getPageMetadata({
    title: "Microsoft Ads Agency | Bing Advertising Services",
    description: "Reach high-value audiences on Bing, Yahoo, and AOL with our expert Microsoft Ads management services. Maximize ROI with targeted campaigns.",
    url: "/services/performance-marketing/microsoft-ads",
});

export default function MicrosoftAdsPage() {
    return (
        <main className="min-h-screen bg-background">
            <Hero />
            <ServiceOverview />
            <SolutionTypes />
            <TechStack />
            <div id="process">
                <Process />
            </div>
            <WhyChooseUs />
            <CTA />
        </main>
    );
}
