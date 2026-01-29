import { Metadata } from "next";
import Hero from "@/components/services/web-design-development/shopify-ecommerce/Hero";
import ServiceOverview from "@/components/services/web-design-development/shopify-ecommerce/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/shopify-ecommerce/SolutionTypes";
import TechStack from "@/components/services/web-design-development/shopify-ecommerce/TechStack";
import Process from "@/components/services/web-design-development/shopify-ecommerce/Process";
import WhyChooseUs from "@/components/services/web-design-development/shopify-ecommerce/WhyChooseUs";
import CTA from "@/components/services/web-design-development/shopify-ecommerce/CTA";

export const metadata: Metadata = {
    title: "Shopify & E-commerce Development | Custom Online Stores",
    description: "Expert e-commerce development services for Shopify, WooCommerce, BigCommerce, and Magento. Custom themes, payment integration, and conversion optimization.",
    keywords: [
        "shopify development",
        "woocommerce development",
        "ecommerce website",
        "online store development",
        "bigcommerce",
        "magento development",
        "custom ecommerce",
        "payment gateway integration",
    ],
    openGraph: {
        title: "Shopify & E-commerce Development Services",
        description: "Build powerful online stores that drive sales and growth.",
        type: "website",
    },
};

export default function ShopifyEcommercePage() {
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
