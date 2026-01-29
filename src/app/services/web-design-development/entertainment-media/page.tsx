import { Metadata } from "next";
import Hero from "@/components/services/web-design-development/entertainment-media/Hero";
import ServiceOverview from "@/components/services/web-design-development/entertainment-media/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/entertainment-media/SolutionTypes";
import TechStack from "@/components/services/web-design-development/entertainment-media/TechStack";
import Process from "@/components/services/web-design-development/entertainment-media/Process";
import WhyChooseUs from "@/components/services/web-design-development/entertainment-media/WhyChooseUs";
import CTA from "@/components/services/web-design-development/entertainment-media/CTA";

export const metadata: Metadata = {
    title: "Entertainment & Media Website Development | Streaming Platforms",
    description: "Build powerful streaming platforms, content management systems, and engaging entertainment experiences. Video on demand, live streaming, music platforms, and podcast solutions.",
    keywords: [
        "entertainment website development",
        "streaming platform development",
        "video on demand platform",
        "music streaming website",
        "podcast platform development",
        "OTT platform development",
        "live streaming website",
        "media content management",
    ],
    openGraph: {
        title: "Entertainment & Media Website Development",
        description: "Build powerful streaming platforms and content management systems.",
        type: "website",
    },
};

export default function EntertainmentMediaPage() {
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
