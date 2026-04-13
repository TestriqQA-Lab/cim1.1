import Hero from "@/components/services/mobile-app-development/harmony-OS-app-development-services/Hero";
import ServiceOverview from "@/components/services/mobile-app-development/harmony-OS-app-development-services/ServiceOverview";
import SolutionTypes from "@/components/services/mobile-app-development/harmony-OS-app-development-services/SolutionTypes";
import TechStack from "@/components/services/mobile-app-development/harmony-OS-app-development-services/TechStack";
import Process from "@/components/services/mobile-app-development/harmony-OS-app-development-services/Process";
import WhyChooseUs from "@/components/services/mobile-app-development/harmony-OS-app-development-services/WhyChooseUs";
import CTA from "@/components/services/mobile-app-development/harmony-OS-app-development-services/CTA";

import { getPageMetadata } from '@/lib/metadata';
import {
    generateGraphSchema,
    generateOrganizationSchema,
    generateWebSiteSchema,
    generateWebPageSchema,
    generateBreadcrumbSchema,
    generateServiceSchema,
    generateItemListSchema,
    generateHowToSchema,
    generateNavigationSchema,
} from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'HarmonyOS App Development Services | Huawei AppGallery',
    description: 'Build next-generation distributed apps for Huawei\'s HarmonyOS ecosystem. Create applications that run seamlessly across smartphones, tablets, wearables, smart TVs, and IoT devices. 700M+ HarmonyOS users, 200+ countries, 2.5M+ developers, 100+ HMS Core services.',
    url: '/services/mobile-app-development/harmony-OS-app-development-services',
    keywords: [
        'HarmonyOS app development',
        'Huawei app development',
        'AppGallery development',
        'HMS Core services',
        'ArkTS development',
        'ArkUI apps',
        'distributed applications',
        'Huawei wearable apps',
        'HiCar development',
        'Huawei smart TV apps',
    ],
});

export default function HarmonyOSAppDevelopmentPage() {
    const harmonySchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "HarmonyOS App Development Services | Huawei AppGallery",
            description: "Build next-generation distributed apps for Huawei's HarmonyOS ecosystem. Create applications that run seamlessly across smartphones, tablets, wearables, smart TVs, and IoT devices. 700M+ HarmonyOS users, 200+ countries, 2.5M+ developers, 100+ HMS Core services.",
            urlPath: "/services/mobile-app-development/harmony-OS-app-development-services",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/mobile-app-development/harmony-OS-app-development-services/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/mobile-app-development/harmony-OS-app-development-services/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/mobile-app-development/harmony-OS-app-development-services/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Mobile App Development", url: "/services/mobile-app-development" },
            { name: "HarmonyOS App Development Services", url: "/services/mobile-app-development/harmony-OS-app-development-services" },
        ], "https://www.cinuteinfomedia.com/services/mobile-app-development/harmony-OS-app-development-services/#breadcrumb"),

        generateServiceSchema({
            name: "HarmonyOS App Development Services",
            description: "Distributed apps, seamless experience. Build next-generation apps for Huawei's HarmonyOS ecosystem using ArkTS and ArkUI. Create distributed applications that run seamlessly across smartphones, tablets, wearables, smart TVs, and IoT devices. 700M+ HarmonyOS users, 200+ countries covered, 2.5M+ registered developers, 100+ HMS Core services.",
            urlPath: "/services/mobile-app-development/harmony-OS-app-development-services",
            serviceType: "HarmonyOS App Development",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Free HarmonyOS consultation available. Custom distributed app development, HMS Core integration, AppGallery publishing, and multi-device solutions tailored to enterprise needs.",
            },
        }),

        generateItemListSchema({
            id: "/services/mobile-app-development/harmony-OS-app-development-services/#devicesList",
            name: "HarmonyOS Development Services",
            description: "Full HarmonyOS ecosystem coverage from phone and wearable apps to smart TV, automotive, IoT, and distributed applications.",
            items: [
                { name: "HarmonyOS Phone Apps", description: "Native applications for Huawei smartphones using ArkTS and ArkUI with full access to HMS Core services." },
                { name: "Wearable & Watch Apps", description: "Lightweight apps for Huawei Watch series and fitness bands with health tracking features." },
                { name: "Smart TV & Vision Apps", description: "Applications for Huawei Vision smart TVs with rich media and voice control." },
                { name: "Automotive HarmonyOS", description: "In-vehicle infotainment and HiCar applications with seamless phone-to-car connectivity." },
                { name: "IoT Device Apps", description: "Smart home and IoT control panels for the HiLink ecosystem." },
                { name: "Distributed Applications", description: "Cross-device apps using HarmonyOS distributed capabilities for seamless task sharing." },
            ],
        }),

        generateItemListSchema({
            id: "/services/mobile-app-development/harmony-OS-app-development-services/#industrySolutionsList",
            name: "HarmonyOS Industry Solutions",
            description: "Industry-specific HarmonyOS solutions for e-commerce, health & fitness, gaming, education, fintech, and smart home.",
            items: [
                { name: "E-commerce Apps", description: "Optimized for AppGallery with HMS payment and push notifications for seamless shopping." },
                { name: "Health & Fitness", description: "Leveraging Huawei Health Kit and syncing with wearables for comprehensive health tracking." },
                { name: "Gaming Apps", description: "High-performance games using HarmonyOS graphics APIs and Huawei Game Center integration." },
                { name: "Education Apps", description: "Multi-device screen sharing and distributed learning features for interactive classrooms." },
                { name: "Fintech Apps", description: "Secure financial apps with HMS Safety Detect and FIDO authentication for bank-grade security." },
                { name: "Smart Home Apps", description: "IoT control and automation for HiLink devices with unified device management." },
            ],
        }),

        generateHowToSchema({
            name: "Our HarmonyOS Development Process",
            description: "A structured 5-phase methodology for building distributed HarmonyOS applications across 700M+ devices in 200+ countries.",
            steps: [
                { name: "Discovery & Planning", text: "Requirements analysis, device strategy, and HMS services selection for the HarmonyOS project. Timeline: 1-2 weeks.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/harmony-OS-app-development-services/#step-discovery" },
                { name: "UI/UX Design", text: "Adaptive layouts following HarmonyOS design guidelines for multi-device consistency. Timeline: 2-3 weeks.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/harmony-OS-app-development-services/#step-design" },
                { name: "Development", text: "Agile development using ArkTS/ArkUI with HMS Core integration and distributed features. Timeline: 8-16 weeks.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/harmony-OS-app-development-services/#step-development" },
                { name: "Testing & QA", text: "Testing across multiple devices using DevEco tools and real device cloud for quality assurance. Timeline: 2-3 weeks.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/harmony-OS-app-development-services/#step-testing" },
                { name: "AppGallery Launch", text: "Submission to Huawei AppGallery with optimization for discoverability and ongoing maintenance. Timeline: 1-2 weeks.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/harmony-OS-app-development-services/#step-launch" },
            ],
        }),

        generateNavigationSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Blog", url: "/blog" },
            { name: "About", url: "/about" },
            { name: "Careers", url: "/careers" },
            { name: "Contact", url: "/contact" },
        ])
    );

    return (
        <main style={{ "--page-selection-bg": "#C7000B" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(harmonySchema) }}
            />
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
