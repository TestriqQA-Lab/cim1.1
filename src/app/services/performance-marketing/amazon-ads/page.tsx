import Hero from "@/components/services/performance-marketing/amazon-ads/Hero";
import ServiceOverview from "@/components/services/performance-marketing/amazon-ads/ServiceOverview";
import SolutionTypes from "@/components/services/performance-marketing/amazon-ads/SolutionTypes";
import TechStack from "@/components/services/performance-marketing/amazon-ads/TechStack";
import Process from "@/components/services/performance-marketing/amazon-ads/Process";
import WhyChooseUs from "@/components/services/performance-marketing/amazon-ads/WhyChooseUs";
import CTA from "@/components/services/performance-marketing/amazon-ads/CTA";

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
