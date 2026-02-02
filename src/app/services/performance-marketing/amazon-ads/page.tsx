import Hero from "@/components/services/performance-marketing/amazon-ads/Hero";
import ServiceOverview from "@/components/services/performance-marketing/amazon-ads/ServiceOverview";
import SolutionTypes from "@/components/services/performance-marketing/amazon-ads/SolutionTypes";
import TechStack from "@/components/services/performance-marketing/amazon-ads/TechStack";
import Process from "@/components/services/performance-marketing/amazon-ads/Process";
import WhyChooseUs from "@/components/services/performance-marketing/amazon-ads/WhyChooseUs";
import CTA from "@/components/services/performance-marketing/amazon-ads/CTA";
import { getPageMetadata } from '@/lib/metadata';

export const metadata = getPageMetadata({
    title: "Amazon Ads Agency | Amazon PPC Management Services",
    description: "Boost your sales on Amazon with data-driven PPC campaigns. Our Amazon Ads agency helps you dominate search results and increase ROAS.",
    url: "/services/performance-marketing/amazon-ads",
});

export default function AmazonAdsPage() {
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
