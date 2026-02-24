import Hero from "@/components/services/performance-marketing/x-ads/Hero";
import ServiceOverview from "@/components/services/performance-marketing/x-ads/ServiceOverview";
import SolutionTypes from "@/components/services/performance-marketing/x-ads/SolutionTypes";
import TechStack from "@/components/services/performance-marketing/x-ads/TechStack";
import Process from "@/components/services/performance-marketing/x-ads/Process";
import WhyChooseUs from "@/components/services/performance-marketing/x-ads/WhyChooseUs";
import CTA from "@/components/services/performance-marketing/x-ads/CTA";
import { getPageMetadata } from '@/lib/metadata';

export const metadata = getPageMetadata({
    title: "X Ads Agency | Twitter Advertising Services",
    description: "Join the conversation and amplify your message with X (Twitter) Ads. We help you reach real-time audiences and drive engagement.",
    url: "/services/performance-marketing/x-ads",
});

export default function XAdsPage() {
    return (
        <main className="min-h-screen bg-black" style={{ "--page-selection-bg": "#1D9BF0" } as React.CSSProperties}>
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
