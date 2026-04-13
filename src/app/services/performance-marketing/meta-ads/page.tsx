import Hero from "@/components/services/performance-marketing/meta-ads/Hero";
import ServiceOverview from "@/components/services/performance-marketing/meta-ads/ServiceOverview";
import SolutionTypes from "@/components/services/performance-marketing/meta-ads/SolutionTypes";
import TechStack from "@/components/services/performance-marketing/meta-ads/TechStack";
import Process from "@/components/services/performance-marketing/meta-ads/Process";
import WhyChooseUs from "@/components/services/performance-marketing/meta-ads/WhyChooseUs";
import CTA from "@/components/services/performance-marketing/meta-ads/CTA";
import { getPageMetadata } from '@/lib/metadata';

export const metadata = getPageMetadata({
    title: "Meta Ads Agency | Facebook & Instagram Advertising",
    description: "Scale your brand with high-converting Facebook and Instagram ads. Our Meta Ads agency delivers creative strategies for maximum engagement.",
    url: "/services/performance-marketing/meta-ads",
    image: "/og-images/meta_ads.webp",
});

export default function MetaAdsPage() {
    return (
        <main style={{ "--page-selection-bg": "#1877f2" } as React.CSSProperties}>
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
