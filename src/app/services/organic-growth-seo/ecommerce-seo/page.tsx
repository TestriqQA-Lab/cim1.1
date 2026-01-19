import type { Metadata } from "next";
import Hero from "@/components/services/organic-growth-seo/ecommerce-seo/Hero";
import ServiceOverview from "@/components/services/organic-growth-seo/ecommerce-seo/ServiceOverview";
import SolutionTypes from "@/components/services/organic-growth-seo/ecommerce-seo/SolutionTypes";
import TechStack from "@/components/services/organic-growth-seo/ecommerce-seo/TechStack";
import Process from "@/components/services/organic-growth-seo/ecommerce-seo/Process";
import WhyChooseUs from "@/components/services/organic-growth-seo/ecommerce-seo/WhyChooseUs";
import CTA from "@/components/services/organic-growth-seo/ecommerce-seo/CTA";

export const metadata: Metadata = {
    title: "E-commerce SEO Services | Shopify, Magento & Enterprise SEO",
    description:
        "Drive more qualified traffic and revenue to your online store. Our E-commerce SEO services specialize in product optimization, technical audits, and platform-specific strategies.",
    keywords: [
        "ecommerce SEO services",
        "Shopify SEO",
        "Magento SEO",
        "WooCommerce SEO",
        "online store optimization",
        "product page SEO",
        "technical ecommerce audit",
    ],
};

export default function EcommerceSEOPage() {
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
