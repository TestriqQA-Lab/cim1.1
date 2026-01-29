import { Metadata } from "next";
import Hero from "@/components/services/web-design-development/headless-traditional-cms/Hero";
import ServiceOverview from "@/components/services/web-design-development/headless-traditional-cms/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/headless-traditional-cms/SolutionTypes";
import TechStack from "@/components/services/web-design-development/headless-traditional-cms/TechStack";
import Process from "@/components/services/web-design-development/headless-traditional-cms/Process";
import WhyChooseUs from "@/components/services/web-design-development/headless-traditional-cms/WhyChooseUs";
import CTA from "@/components/services/web-design-development/headless-traditional-cms/CTA";

export const metadata: Metadata = {
    title: "Headless & Traditional CMS Development | WordPress, Strapi, Contentful",
    description: "Expert CMS development services for headless platforms like Contentful, Strapi, Sanity and traditional systems like WordPress and Drupal. API-first architecture, content modeling, and seamless integrations.",
    keywords: [
        "headless cms development",
        "wordpress development",
        "contentful development",
        "strapi development",
        "sanity cms",
        "drupal development",
        "cms integration",
        "content management system",
    ],
    openGraph: {
        title: "Headless & Traditional CMS Development Services",
        description: "Expert CMS development for headless and traditional platforms.",
        type: "website",
    },
};

export default function HeadlessTraditionalCMSPage() {
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
