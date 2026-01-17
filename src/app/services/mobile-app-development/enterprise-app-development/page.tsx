import { Metadata } from "next";
import Hero from "@/components/services/mobile-app-development/enterprise-app-development/Hero";
import ServiceOverview from "@/components/services/mobile-app-development/enterprise-app-development/ServiceOverview";
import SolutionTypes from "@/components/services/mobile-app-development/enterprise-app-development/SolutionTypes";
import TechStack from "@/components/services/mobile-app-development/enterprise-app-development/TechStack";
import Process from "@/components/services/mobile-app-development/enterprise-app-development/Process";
import WhyChooseUs from "@/components/services/mobile-app-development/enterprise-app-development/WhyChooseUs";
import CTA from "@/components/services/mobile-app-development/enterprise-app-development/CTA";

export const metadata: Metadata = {
    title: "Enterprise App Development Services | Secure & Scalable | Testriq",
    description:
        "Expert enterprise mobile app development with SSO, MDM, and SOC 2 compliance. Secure, scalable apps for manufacturing, healthcare, and financial services.",
    keywords: [
        "enterprise app development",
        "enterprise mobile applications",
        "corporate app development",
        "secure mobile apps",
        "SSO integration",
        "MDM compatible apps",
        "SOC 2 compliant apps",
    ],
};

export default function EnterpriseAppDevelopmentPage() {
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
