import Hero from "@/components/services/performance-marketing/microsoft-ads/Hero";
import ServiceOverview from "@/components/services/performance-marketing/microsoft-ads/ServiceOverview";
import SolutionTypes from "@/components/services/performance-marketing/microsoft-ads/SolutionTypes";
import TechStack from "@/components/services/performance-marketing/microsoft-ads/TechStack";
import Process from "@/components/services/performance-marketing/microsoft-ads/Process";
import WhyChooseUs from "@/components/services/performance-marketing/microsoft-ads/WhyChooseUs";
import CTA from "@/components/services/performance-marketing/microsoft-ads/CTA";

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
