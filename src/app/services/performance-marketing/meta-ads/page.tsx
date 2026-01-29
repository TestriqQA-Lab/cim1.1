import Hero from "@/components/services/performance-marketing/meta-ads/Hero";
import ServiceOverview from "@/components/services/performance-marketing/meta-ads/ServiceOverview";
import SolutionTypes from "@/components/services/performance-marketing/meta-ads/SolutionTypes";
import TechStack from "@/components/services/performance-marketing/meta-ads/TechStack";
import Process from "@/components/services/performance-marketing/meta-ads/Process";
import WhyChooseUs from "@/components/services/performance-marketing/meta-ads/WhyChooseUs";
import CTA from "@/components/services/performance-marketing/meta-ads/CTA";

export default function MetaAdsPage() {
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
