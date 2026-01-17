import { Metadata } from "next";
import Hero from "@/components/services/mobile-app-development/hybrid-app-development/Hero";
import ServiceOverview from "@/components/services/mobile-app-development/hybrid-app-development/ServiceOverview";
import SolutionTypes from "@/components/services/mobile-app-development/hybrid-app-development/SolutionTypes";
import TechStack from "@/components/services/mobile-app-development/hybrid-app-development/TechStack";
import Process from "@/components/services/mobile-app-development/hybrid-app-development/Process";
import WhyChooseUs from "@/components/services/mobile-app-development/hybrid-app-development/WhyChooseUs";
import CTA from "@/components/services/mobile-app-development/hybrid-app-development/CTA";

export const metadata: Metadata = {
    title: "Hybrid App Development Services | Ionic & Capacitor | Testriq",
    description:
        "Expert hybrid app development with Ionic and Capacitor. Build iOS and Android apps using web technologies. Save 50% on development costs.",
    keywords: [
        "hybrid app development",
        "Ionic development",
        "Capacitor development",
        "Cordova development",
        "PWA development",
        "mobile app development",
        "web to mobile",
    ],
};

export default function HybridAppDevelopmentPage() {
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
