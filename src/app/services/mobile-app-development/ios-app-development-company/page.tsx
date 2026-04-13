import Hero from "@/components/services/mobile-app-development/ios-app-development-company/Hero";
import ServiceOverview from "@/components/services/mobile-app-development/ios-app-development-company/ServiceOverview";
import SolutionTypes from "@/components/services/mobile-app-development/ios-app-development-company/SolutionTypes";
import TechStack from "@/components/services/mobile-app-development/ios-app-development-company/TechStack";
import Process from "@/components/services/mobile-app-development/ios-app-development-company/Process";
import WhyChooseUs from "@/components/services/mobile-app-development/ios-app-development-company/WhyChooseUs";
import CTA from "@/components/services/mobile-app-development/ios-app-development-company/CTA";

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
    title: 'iOS App Development Services | Custom iPhone & iPad Apps for Global Brands',
    description: 'Transforming business vision into native iOS experiences. Leading iOS app development company specializing in custom iPhone, iPad, Apple Watch, and tvOS applications using Swift and SwiftUI. 150+ iOS apps delivered, 4.8★ avg App Store rating, 98% first submit approval.',
    url: '/services/mobile-app-development/ios-app-development-company',
    keywords: [
        'iOS App Development Services',
        'iOS App Development Company',
        'iPhone App Development services',
        'Custom iPhone app development',
        'iPad application development',
        'Apple Watch app development',
        'SwiftUI development',
        'Enterprise iOS solutions',
        'iOS app security',
        'App Store Optimization',
    ],
});

export default function iOSAppDevelopmentPage() {
    const iosSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "iOS App Development Services | Custom iPhone & iPad Apps for Global Brands",
            description: "Transforming business vision into native iOS experiences. Leading iOS app development company specializing in custom iPhone, iPad, Apple Watch, and tvOS applications using Swift and SwiftUI. 150+ iOS apps delivered, 4.8★ avg App Store rating, 98% first submit approval.",
            urlPath: "/services/mobile-app-development/ios-app-development-company",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/mobile-app-development/ios-app-development-company/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/mobile-app-development/ios-app-development-company/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/mobile-app-development/ios-app-development-company/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Mobile App Development", url: "/services/mobile-app-development" },
            { name: "iOS App Development Services", url: "/services/mobile-app-development/ios-app-development-company" },
        ], "https://www.cinuteinfomedia.com/services/mobile-app-development/ios-app-development-company/#breadcrumb"),

        generateServiceSchema({
            name: "iOS App Development Services",
            description: "Transforming business vision into native iOS experiences. We specialize in crafting high-impact, user-centric applications using Swift and SwiftUI that strictly adhere to Apple's Human Interface Guidelines (HIG). 150+ iOS apps delivered, 4.8★ average App Store rating, 98% first submit approval rate, 10M+ total downloads.",
            urlPath: "/services/mobile-app-development/ios-app-development-company",
            serviceType: "iOS App Development",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Book a free iOS audit today. Includes free project consultation, detailed proposal and timeline, fixed price guarantee, and post-launch support.",
            },
        }),

        generateItemListSchema({
            id: "/services/mobile-app-development/ios-app-development-company/#ecosystemList",
            name: "Complete Apple Ecosystem Development",
            description: "Full Apple ecosystem coverage from iPhone and iPad apps to Apple Watch, Apple TV, iCloud, and App Store Optimization.",
            items: [
                { name: "iPhone App Development", description: "Custom iPhone app development for startups and Fortune 500s with native Swift performance." },
                { name: "iPad App Development", description: "Adaptive layouts for POS systems, dashboards, and enterprise applications optimized for iPad screens." },
                { name: "Apple Watch Apps", description: "Glanceable, actionable experiences for health monitoring, notifications, and connectivity." },
                { name: "Apple TV Apps", description: "Immersive tvOS streaming apps and interactive entertainment platforms." },
                { name: "iCloud Integration", description: "CloudKit implementation with real-time data synchronization across Apple devices." },
                { name: "App Store Optimization (ASO)", description: "Visibility optimization of app visuals, descriptions, keywords, and conversion funnel." },
            ],
        }),

        generateItemListSchema({
            id: "/services/mobile-app-development/ios-app-development-company/#industrySolutionsList",
            name: "iOS Solutions for Every Industry",
            description: "Industry-specific iOS app solutions for e-commerce, enterprise, healthcare, fintech, gaming, and education.",
            items: [
                { name: "E-commerce & Retail", description: "Apple Pay integration, ARKit product visualization, and personalized recommendation engines." },
                { name: "Enterprise & B2B", description: "Secure MDM-compatible apps featuring SSO, VPN tunneling, and custom analytics dashboards." },
                { name: "Healthcare & Fitness", description: "HIPAA-compliant apps with patient portals, HealthKit integration, and telemedicine features." },
                { name: "Fintech & Banking", description: "Biometric authentication (FaceID/TouchID), Metal visualization, and bank-grade data privacy." },
                { name: "Gaming & Entertainment", description: "Console-quality games using Metal, SpriteKit, and SceneKit with Game Center integration." },
                { name: "Education & eLearning", description: "Interactive learning apps leveraging ClassKit, PencilKit, and AR for immersive education." },
            ],
        }),

        generateHowToSchema({
            name: "Our iOS App Development Process",
            description: "A proven 5-step methodology for building native iOS apps that has delivered 150+ apps with a 4.8★ App Store rating and 98% first submit approval.",
            steps: [
                { name: "Discovery & Strategy", text: "Understanding business goals, monetization analysis, competitive audit, and technical roadmap creation. Timeline: 1-2 weeks.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/ios-app-development-company/#step-discovery" },
                { name: "UI/UX Design", text: "High-fidelity prototypes following Apple's Human Interface Guidelines, with focus on visionOS and Spatial computing. Timeline: 2-3 weeks.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/ios-app-development-company/#step-design" },
                { name: "Development", text: "Agile sprints using Swift/SwiftUI, clean architecture, daily standups, and continuous integration. Timeline: 6-12 weeks.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/ios-app-development-company/#step-development" },
                { name: "Testing & QA", text: "Functional, performance, and security testing across devices. Beta testing via TestFlight. Timeline: 2-3 weeks.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/ios-app-development-company/#step-testing" },
                { name: "Deployment & Support", text: "App Store submission, CI/CD automation, post-launch maintenance, and ongoing performance optimization. Ongoing.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/ios-app-development-company/#step-deployment" },
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
        <main className="min-h-screen" style={{ "--page-selection-bg": "#007AFF" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(iosSchema) }}
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
