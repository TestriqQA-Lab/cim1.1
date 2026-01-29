import { Metadata } from "next";
import Hero from "@/components/services/web-design-development/contentful-headless-cms/Hero";
import ServiceOverview from "@/components/services/web-design-development/contentful-headless-cms/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/contentful-headless-cms/SolutionTypes";
import TechStack from "@/components/services/web-design-development/contentful-headless-cms/TechStack";
import Process from "@/components/services/web-design-development/contentful-headless-cms/Process";
import WhyChooseUs from "@/components/services/web-design-development/contentful-headless-cms/WhyChooseUs";
import CTA from "@/components/services/web-design-development/contentful-headless-cms/CTA";

export const metadata: Metadata = {
    title: "Contentful Headless CMS Development Services | Testriq",
    description:
        "Expert Contentful headless CMS development services. Build composable content platforms with GraphQL, REST APIs, and seamless frontend integrations.",
};

export default function ContentfulHeadlessCMSPage() {
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
