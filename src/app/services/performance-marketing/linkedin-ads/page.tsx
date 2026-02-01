import Hero from "@/components/services/performance-marketing/linkedin-ads/Hero";
import ServiceOverview from "@/components/services/performance-marketing/linkedin-ads/ServiceOverview";
import SolutionTypes from "@/components/services/performance-marketing/linkedin-ads/SolutionTypes";
import TechStack from "@/components/services/performance-marketing/linkedin-ads/TechStack";
import Process from "@/components/services/performance-marketing/linkedin-ads/Process";
import WhyChooseUs from "@/components/services/performance-marketing/linkedin-ads/WhyChooseUs";
import CTA from "@/components/services/performance-marketing/linkedin-ads/CTA";
import { getPageMetadata } from '@/lib/metadata';

export const metadata = getPageMetadata({
    title: "LinkedIn Ads Agency | B2B Advertising Services",
    description: "Target decision-makers and generate high-quality B2B leads with our LinkedIn Ads management services. precise targeting for professional growth.",
    url: "/services/performance-marketing/linkedin-ads",
});

export default function LinkedInAdsPage() {
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
