import type { Metadata } from "next";
import Hero from "@/components/services/organic-growth-seo/local-seo/Hero";
import ServiceOverview from "@/components/services/organic-growth-seo/local-seo/ServiceOverview";
import SolutionTypes from "@/components/services/organic-growth-seo/local-seo/SolutionTypes";
import TechStack from "@/components/services/organic-growth-seo/local-seo/TechStack";
import Process from "@/components/services/organic-growth-seo/local-seo/Process";
import WhyChooseUs from "@/components/services/organic-growth-seo/local-seo/WhyChooseUs";
import CTA from "@/components/services/organic-growth-seo/local-seo/CTA";

export const metadata: Metadata = {
    title: "Local SEO Services | Google Maps Optimization & Local Rankings",
    description:
        "Dominate local search results and attract nearby customers. Our Local SEO services include GMB optimization, citation building, and reputation management.",
    keywords: [
        "local SEO services",
        "Google Maps optimization",
        "GMB management",
        "local citation building",
        "near me SEO",
        "local business ranking",
        "local search marketing",
    ],
};

export default function LocalSEOPage() {
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
