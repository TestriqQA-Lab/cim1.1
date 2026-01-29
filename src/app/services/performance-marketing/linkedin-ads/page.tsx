import Hero from "@/components/services/performance-marketing/linkedin-ads/Hero";
import ServiceOverview from "@/components/services/performance-marketing/linkedin-ads/ServiceOverview";
import SolutionTypes from "@/components/services/performance-marketing/linkedin-ads/SolutionTypes";
import TechStack from "@/components/services/performance-marketing/linkedin-ads/TechStack";
import Process from "@/components/services/performance-marketing/linkedin-ads/Process";
import WhyChooseUs from "@/components/services/performance-marketing/linkedin-ads/WhyChooseUs";
import CTA from "@/components/services/performance-marketing/linkedin-ads/CTA";

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
