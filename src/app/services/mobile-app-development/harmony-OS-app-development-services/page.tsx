import type { Metadata } from "next";
import Hero from "@/components/services/mobile-app-development/harmony-OS-app-development-services/Hero";
import ServiceOverview from "@/components/services/mobile-app-development/harmony-OS-app-development-services/ServiceOverview";
import SolutionTypes from "@/components/services/mobile-app-development/harmony-OS-app-development-services/SolutionTypes";
import TechStack from "@/components/services/mobile-app-development/harmony-OS-app-development-services/TechStack";
import Process from "@/components/services/mobile-app-development/harmony-OS-app-development-services/Process";
import WhyChooseUs from "@/components/services/mobile-app-development/harmony-OS-app-development-services/WhyChooseUs";
import CTA from "@/components/services/mobile-app-development/harmony-OS-app-development-services/CTA";

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
    openGraph: {
        title: "HarmonyOS App Development Services | Huawei AppGallery | TestrIQ",
        description:
            "Expert HarmonyOS app development services. Build distributed apps for Huawei smartphones, tablets, wearables, and IoT devices. HMS Core integration, ArkTS & ArkUI development, AppGallery submission.",
        url: "https://www.cinuteinfomedia.com/services/mobile-app-development/harmony-OS-app-development-services",
        type: "website",
        images: [
            {
                url: "/og-images/harmony-OS-app-development-services.webp",
                width: 1200,
                height: 630,
                alt: "HarmonyOS App Development Services by TestrIQ",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "HarmonyOS App Development Services | Huawei AppGallery | TestrIQ",
        description:
            "Expert HarmonyOS app development services. Build distributed apps for Huawei smartphones, tablets, wearables, and IoT devices. HMS Core integration, ArkTS & ArkUI development, AppGallery submission.",
        images: ["/og-images/harmony-OS-app-development-services.webp"],
    },
    alternates: {
        canonical: "/services/mobile-app-development/harmony-OS-app-development-services",
    },
};

export default function HarmonyOSAppDevelopmentPage() {
    return (
        <main style={{ "--page-selection-bg": "#C7000B" } as React.CSSProperties}>
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
