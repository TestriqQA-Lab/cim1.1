import type { Metadata } from "next";
import Hero from "@/components/services/organic-growth-seo/technical-seo/Hero";
import ServiceOverview from "@/components/services/organic-growth-seo/technical-seo/ServiceOverview";
import SolutionTypes from "@/components/services/organic-growth-seo/technical-seo/SolutionTypes";
import TechStack from "@/components/services/organic-growth-seo/technical-seo/TechStack";
import Process from "@/components/services/organic-growth-seo/technical-seo/Process";
import WhyChooseUs from "@/components/services/organic-growth-seo/technical-seo/WhyChooseUs";
import CTA from "@/components/services/organic-growth-seo/technical-seo/CTA";

export const metadata: Metadata = {
    title: "Technical SEO Services | Site Speed, Crawling & Core Web Vitals",
    description:
        "Professional technical SEO services to optimize site speed, crawlability, mobile-first indexing, and Core Web Vitals for improved search rankings.",
    keywords: [
        "technical SEO",
        "technical SEO services",
        "site speed optimization",
        "Core Web Vitals",
        "mobile-first indexing",
        "crawl optimization",
        "XML sitemap",
        "robots.txt",
        "structured data",
        "page speed optimization",
    ],
};

export default function TechnicalSEOPage() {
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
