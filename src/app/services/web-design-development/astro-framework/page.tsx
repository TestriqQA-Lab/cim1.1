import { Metadata } from "next";
import Hero from "@/components/services/web-design-development/astro-framework/Hero";
import ServiceOverview from "@/components/services/web-design-development/astro-framework/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/astro-framework/SolutionTypes";
import TechStack from "@/components/services/web-design-development/astro-framework/TechStack";
import Process from "@/components/services/web-design-development/astro-framework/Process";
import WhyChooseUs from "@/components/services/web-design-development/astro-framework/WhyChooseUs";
import CTA from "@/components/services/web-design-development/astro-framework/CTA";

export const metadata: Metadata = {
    title: "Astro Framework Development Services | Testriq",
    description:
        "Expert Astro framework development services. We build lightning-fast websites with Islands Architecture, zero JavaScript by default, and multi-framework support.",
};

export default function AstroFrameworkPage() {
    return (
        <main className="min-h-screen">
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
