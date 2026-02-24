import Hero from "@/components/services/seo-services/link-building/Hero";
import ServiceOverview from "@/components/services/seo-services/link-building/ServiceOverview";
import SolutionTypes from "@/components/services/seo-services/link-building/SolutionTypes";
import TechStack from "@/components/services/seo-services/link-building/TechStack";
import Process from "@/components/services/seo-services/link-building/Process";
import WhyChooseUs from "@/components/services/seo-services/link-building/WhyChooseUs";
import CTA from "@/components/services/seo-services/link-building/CTA";
import { getPageMetadata } from '@/lib/metadata';

export const metadata = getPageMetadata({
    title: "Link Building Services | High Quality Backlink Agency",
    description: "Boost your domain authority and search rankings with our ethical white-hat link building services. High-quality backlinks that drive results.",
    url: "/services/seo-services/link-building",
});

export default function LinkBuildingPage() {
    return (
        <main style={{ "--page-selection-bg": "#06b6d4" } as React.CSSProperties}>
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
