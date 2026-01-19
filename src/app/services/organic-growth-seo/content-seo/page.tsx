import type { Metadata } from "next";
import Hero from "@/components/services/organic-growth-seo/content-seo/Hero";
import ServiceOverview from "@/components/services/organic-growth-seo/content-seo/ServiceOverview";
import SolutionTypes from "@/components/services/organic-growth-seo/content-seo/SolutionTypes";
import TechStack from "@/components/services/organic-growth-seo/content-seo/TechStack";
import Process from "@/components/services/organic-growth-seo/content-seo/Process";
import WhyChooseUs from "@/components/services/organic-growth-seo/content-seo/WhyChooseUs";
import CTA from "@/components/services/organic-growth-seo/content-seo/CTA";

export const metadata: Metadata = {
    title: "Content SEO & Blogging Services | High-Ranking Content Strategy",
    description:
        "Drive organic traffic and engagement with our data-driven content SEO and blogging services. We create high-quality, optimized content that ranks and converts.",
    keywords: [
        "content SEO",
        "blog writing services",
        "content strategy",
        "SEO copywriting",
        "topic clusters",
        "keyword research",
        "content marketing",
        "blog optimization",
    ],
};

export default function ContentSEOPage() {
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
