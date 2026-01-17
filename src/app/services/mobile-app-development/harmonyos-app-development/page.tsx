import type { Metadata } from "next";
import Hero from "@/components/services/mobile-app-development/harmonyos-app-development/Hero";
import ServiceOverview from "@/components/services/mobile-app-development/harmonyos-app-development/ServiceOverview";
import SolutionTypes from "@/components/services/mobile-app-development/harmonyos-app-development/SolutionTypes";
import TechStack from "@/components/services/mobile-app-development/harmonyos-app-development/TechStack";
import Process from "@/components/services/mobile-app-development/harmonyos-app-development/Process";
import WhyChooseUs from "@/components/services/mobile-app-development/harmonyos-app-development/WhyChooseUs";
import CTA from "@/components/services/mobile-app-development/harmonyos-app-development/CTA";

export const metadata: Metadata = {
    title: "HarmonyOS App Development Services | Huawei AppGallery | TestrIQ",
    description:
        "Expert HarmonyOS app development services. Build distributed apps for Huawei smartphones, tablets, wearables, and IoT devices. HMS Core integration, ArkTS & ArkUI development, AppGallery submission.",
    keywords: [
        "HarmonyOS app development",
        "Huawei app development",
        "AppGallery development",
        "HMS Core services",
        "ArkTS development",
        "ArkUI apps",
        "distributed applications",
        "Huawei wearable apps",
        "HiCar development",
        "Huawei smart TV apps",
    ],
};

export default function HarmonyOSAppDevelopmentPage() {
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
