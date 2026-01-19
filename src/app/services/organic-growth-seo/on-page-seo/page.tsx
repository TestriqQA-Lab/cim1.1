import type { Metadata } from "next";
import Hero from "@/components/services/organic-growth-seo/on-page-seo/Hero";
import ServiceOverview from "@/components/services/organic-growth-seo/on-page-seo/ServiceOverview";
import SolutionTypes from "@/components/services/organic-growth-seo/on-page-seo/SolutionTypes";
import TechStack from "@/components/services/organic-growth-seo/on-page-seo/TechStack";
import Process from "@/components/services/organic-growth-seo/on-page-seo/Process";
import WhyChooseUs from "@/components/services/organic-growth-seo/on-page-seo/WhyChooseUs";
import CTA from "@/components/services/organic-growth-seo/on-page-seo/CTA";

export const metadata: Metadata = {
    title: "On-Page SEO Services | Title Tags, Meta & Content Optimization",
    description:
        "Professional on-page SEO services to optimize your website content, title tags, meta descriptions, headers, and internal linking for higher search rankings.",
    keywords: [
        "on-page SEO",
        "on-page SEO services",
        "title tag optimization",
        "meta description optimization",
        "content optimization",
        "internal linking",
        "header tags SEO",
        "image optimization SEO",
        "schema markup",
        "core web vitals",
    ],
};

export default function OnPageSEOPage() {
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
