import { Metadata } from "next";
import Hero from "@/components/services/mobile-app-development/cross-platform-app-development/Hero";
import ServiceOverview from "@/components/services/mobile-app-development/cross-platform-app-development/ServiceOverview";
import SolutionTypes from "@/components/services/mobile-app-development/cross-platform-app-development/SolutionTypes";
import TechStack from "@/components/services/mobile-app-development/cross-platform-app-development/TechStack";
import Process from "@/components/services/mobile-app-development/cross-platform-app-development/Process";
import WhyChooseUs from "@/components/services/mobile-app-development/cross-platform-app-development/WhyChooseUs";
import CTA from "@/components/services/mobile-app-development/cross-platform-app-development/CTA";

export const metadata: Metadata = {
    title: "Cross-Platform App Development Services | React Native & Flutter | Testriq",
    description:
        "Expert cross-platform app development with React Native and Flutter. Build iOS and Android apps from a single codebase. Save 40% on development costs.",
    keywords: [
        "cross platform app development",
        "React Native development",
        "Flutter development",
        "hybrid app development",
        "mobile app development",
        "iOS Android app",
        "single codebase",
    ],
};

export default function CrossPlatformAppDevelopmentPage() {
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
