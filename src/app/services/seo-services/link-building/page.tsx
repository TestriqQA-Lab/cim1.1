import Hero from "@/components/services/seo-services/link-building/Hero";
import ServiceOverview from "@/components/services/seo-services/link-building/ServiceOverview";
import SolutionTypes from "@/components/services/seo-services/link-building/SolutionTypes";
import TechStack from "@/components/services/seo-services/link-building/TechStack";
import Process from "@/components/services/seo-services/link-building/Process";
import WhyChooseUs from "@/components/services/seo-services/link-building/WhyChooseUs";
import CTA from "@/components/services/seo-services/link-building/CTA";

export default function LinkBuildingPage() {
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
