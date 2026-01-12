import { Metadata } from "next";
import Hero from "@/components/services/web-design-development/strapi-headless-cms/Hero";
import ServiceOverview from "@/components/services/web-design-development/strapi-headless-cms/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/strapi-headless-cms/SolutionTypes";
import TechStack from "@/components/services/web-design-development/strapi-headless-cms/TechStack";
import Process from "@/components/services/web-design-development/strapi-headless-cms/Process";
import WhyChooseUs from "@/components/services/web-design-development/strapi-headless-cms/WhyChooseUs";
import CTA from "@/components/services/web-design-development/strapi-headless-cms/CTA";

export const metadata: Metadata = {
    title: "Strapi Headless CMS Development Services | Testriq",
    description:
        "Expert Strapi headless CMS development services. Build flexible, API-first content infrastructure with REST, GraphQL, and seamless frontend integrations.",
};

export default function StrapiHeadlessCMSPage() {
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
