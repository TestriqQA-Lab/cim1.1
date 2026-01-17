import { Metadata } from "next";
import Hero from "@/components/services/mobile-app-development/android-app-development/Hero";
import ServiceOverview from "@/components/services/mobile-app-development/android-app-development/ServiceOverview";
import SolutionTypes from "@/components/services/mobile-app-development/android-app-development/SolutionTypes";
import TechStack from "@/components/services/mobile-app-development/android-app-development/TechStack";
import Process from "@/components/services/mobile-app-development/android-app-development/Process";
import WhyChooseUs from "@/components/services/mobile-app-development/android-app-development/WhyChooseUs";
import CTA from "@/components/services/mobile-app-development/android-app-development/CTA";

export const metadata: Metadata = {
    title: "Android App Development Services | Custom Android Apps | Testriq",
    description:
        "Expert Android app development services. We build native Kotlin and Java applications for phones, tablets, and wearables with Play Store optimization.",
    keywords: [
        "Android app development",
        "Kotlin app development",
        "Android developer",
        "Play Store optimization",
        "Jetpack Compose",
        "Android Studio",
        "mobile app development",
    ],
};

export default function AndroidAppDevelopmentPage() {
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
