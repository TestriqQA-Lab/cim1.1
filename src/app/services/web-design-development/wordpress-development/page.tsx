import type { Metadata } from "next";
import Hero from "@/components/services/web-design-development/wordpress-development/Hero";
import ServiceOverview from "@/components/services/web-design-development/wordpress-development/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/wordpress-development/SolutionTypes";
import TechStack from "@/components/services/web-design-development/wordpress-development/TechStack";
import Process from "@/components/services/web-design-development/wordpress-development/Process";
import WhyChooseUs from "@/components/services/web-design-development/wordpress-development/WhyChooseUs";
import CTA from "@/components/services/web-design-development/wordpress-development/CTA";

export const metadata: Metadata = {
    title: "WordPress Development Services - Custom Themes & WooCommerce",
    description: "Expert WordPress development services for custom themes, WooCommerce stores, plugins, and enterprise solutions. We build fast, secure, and scalable WordPress websites.",
};

export default function WordPressDevelopmentPage() {
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
