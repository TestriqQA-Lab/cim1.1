import { Metadata } from "next";
import Hero from "@/components/services/web-design-development/travel-hospitality/Hero";
import ServiceOverview from "@/components/services/web-design-development/travel-hospitality/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/travel-hospitality/SolutionTypes";
import TechStack from "@/components/services/web-design-development/travel-hospitality/TechStack";
import Process from "@/components/services/web-design-development/travel-hospitality/Process";
import WhyChooseUs from "@/components/services/web-design-development/travel-hospitality/WhyChooseUs";
import CTA from "@/components/services/web-design-development/travel-hospitality/CTA";

export const metadata: Metadata = {
    title: "Travel & Hospitality Website Development | Hotel Booking Systems",
    description: "Build powerful travel booking platforms, hotel management systems, and hospitality websites. Real-time availability, multi-channel distribution, and guest experience optimization.",
    keywords: [
        "travel website development",
        "hotel booking system",
        "hospitality website design",
        "tour booking platform",
        "vacation rental website",
        "property management system",
        "channel management",
        "OTA integration",
    ],
    openGraph: {
        title: "Travel & Hospitality Website Development",
        description: "Build powerful travel booking platforms and hospitality management systems.",
        type: "website",
    },
};

export default function TravelHospitalityPage() {
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
