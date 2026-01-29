import Hero from "@/components/services/performance-marketing/x-ads/Hero";
import ServiceOverview from "@/components/services/performance-marketing/x-ads/ServiceOverview";
import SolutionTypes from "@/components/services/performance-marketing/x-ads/SolutionTypes";
import TechStack from "@/components/services/performance-marketing/x-ads/TechStack";
import Process from "@/components/services/performance-marketing/x-ads/Process";
import WhyChooseUs from "@/components/services/performance-marketing/x-ads/WhyChooseUs";
import CTA from "@/components/services/performance-marketing/x-ads/CTA";

export default function XAdsPage() {
    return (
        <main className="min-h-screen bg-black">
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
