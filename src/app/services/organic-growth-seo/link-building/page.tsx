import Hero from "@/components/services/organic-growth-seo/link-building/Hero";
import ServiceOverview from "@/components/services/organic-growth-seo/link-building/ServiceOverview";
import SolutionTypes from "@/components/services/organic-growth-seo/link-building/SolutionTypes";
import TechStack from "@/components/services/organic-growth-seo/link-building/TechStack";
import Process from "@/components/services/organic-growth-seo/link-building/Process";
import WhyChooseUs from "@/components/services/organic-growth-seo/link-building/WhyChooseUs";
import CTA from "@/components/services/organic-growth-seo/link-building/CTA";

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
