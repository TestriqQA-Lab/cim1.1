import { Metadata } from "next";
import Hero from "@/components/services/mobile-app-development/ios-app-development/Hero";
import ServiceOverview from "@/components/services/mobile-app-development/ios-app-development/ServiceOverview";
import SolutionTypes from "@/components/services/mobile-app-development/ios-app-development/SolutionTypes";
import TechStack from "@/components/services/mobile-app-development/ios-app-development/TechStack";
import Process from "@/components/services/mobile-app-development/ios-app-development/Process";
import WhyChooseUs from "@/components/services/mobile-app-development/ios-app-development/WhyChooseUs";
import CTA from "@/components/services/mobile-app-development/ios-app-development/CTA";

export const metadata: Metadata = {
    title: "iOS App Development Services | Custom iPhone & iPad Apps | Testriq",
    description:
        "Expert iOS app development services. We build native Swift and SwiftUI applications for iPhone, iPad, and Apple Watch with App Store optimization.",
    keywords: [
        "iOS app development",
        "iPhone app development",
        "iPad app development",
        "Swift development",
        "SwiftUI development",
        "iOS developer",
        "Apple app development",
        "App Store optimization",
    ],
};

export default function iOSAppDevelopmentPage() {
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
