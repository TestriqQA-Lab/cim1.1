import Hero from "@/components/services/mobile-app-development/cross-platform-app-development-company/Hero";
import ServiceOverview from "@/components/services/mobile-app-development/cross-platform-app-development-company/ServiceOverview";
import SolutionTypes from "@/components/services/mobile-app-development/cross-platform-app-development-company/SolutionTypes";
import TechStack from "@/components/services/mobile-app-development/cross-platform-app-development-company/TechStack";
import Process from "@/components/services/mobile-app-development/cross-platform-app-development-company/Process";
import WhyChooseUs from "@/components/services/mobile-app-development/cross-platform-app-development-company/WhyChooseUs";
import CTA from "@/components/services/mobile-app-development/cross-platform-app-development-company/CTA";
import FAQ from "@/components/services/mobile-app-development/cross-platform-app-development-company/FAQ";

import { getPageMetadata } from '@/lib/metadata';
import {
    generateGraphSchema,
    generateOrganizationSchema,
    generateWebSiteSchema,
    generateWebPageSchema,
    generateBreadcrumbSchema,
    generateServiceSchema,
    generateItemListSchema,
    generateFAQSchema,
    generateHowToSchema,
    generateNavigationSchema,
} from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'Cross-Platform App Development Services | React Native & Flutter',
    description: 'Enterprise-grade multi-platform solutions. React Native & Flutter experts delivering 100% native-like performance and scalability for global brands. 150+ cross-platform apps delivered since 2015, 70% faster development, 40% cost efficiency.',
    url: '/services/mobile-app-development/cross-platform-app-development-company',
    keywords: [
        'cross platform app development',
        'React Native development',
        'Flutter development',
        'hybrid app development',
        'mobile app development',
        'iOS Android app',
        'single codebase',
        'cross-platform migration',
    ],
});

export default function CrossPlatformAppDevelopmentPage() {
    const crossPlatformSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Cross-Platform App Development Services | React Native & Flutter",
            description: "Enterprise-grade multi-platform solutions. React Native & Flutter experts delivering 100% native-like performance and scalability for global brands. 150+ cross-platform apps delivered since 2015, 70% faster development, 40% cost efficiency.",
            urlPath: "/services/mobile-app-development/cross-platform-app-development-company",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/mobile-app-development/cross-platform-app-development-company/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/mobile-app-development/cross-platform-app-development-company/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/mobile-app-development/cross-platform-app-development-company/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Mobile App Development", url: "/services/mobile-app-development" },
            { name: "Cross-Platform App Development", url: "/services/mobile-app-development/cross-platform-app-development-company" },
        ], "https://www.cinuteinfomedia.com/services/mobile-app-development/cross-platform-app-development-company/#breadcrumb"),

        generateServiceSchema({
            name: "Cross-Platform App Development Services",
            description: "Enterprise-grade multi-platform solutions using React Native and Flutter. Delivering 100% native-like performance and scalability for global brands. 150+ cross-platform apps delivered since 2015, 70% faster development time, 40% cost efficiency, 2x platform reach with a single codebase.",
            urlPath: "/services/mobile-app-development/cross-platform-app-development-company",
            serviceType: "Cross-Platform Mobile App Development",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Free project consultation with tech stack recommendation and cost & time estimate. Cross-platform development is 30-40% cheaper than building two separate native apps.",
            },
        }),

        generateItemListSchema({
            id: "/services/mobile-app-development/cross-platform-app-development-company/#servicesList",
            name: "Core Cross-Platform Development Services",
            description: "Comprehensive cross-platform services from custom app solutions to migration, PWA, and ongoing support.",
            items: [
                { name: "Custom Cross-Platform Application Solutions", description: "Bespoke mobile apps with a single codebase for iOS and Android, ensuring consistent brand identity and UX." },
                { name: "Flutter and React Native Development", description: "High-performance, visually stunning apps leveraging Google's Flutter and Meta's React Native frameworks." },
                { name: "Cross-Platform App Migration & Modernization", description: "Porting legacy or native apps to efficient cross-platform frameworks while preserving data integrity." },
                { name: "Progressive Web App (PWA) Development", description: "App-like experiences in the browser with fast loading and offline capabilities." },
                { name: "Cross-Platform App Maintenance & Support", description: "24/7 support, iOS 19/Android 16 ready OS updates, and continuous performance tuning." },
                { name: "Custom API Integration for Multi-Platform Apps", description: "Securely connecting apps to cloud backends, payment gateways, ERPs, and third-party services." },
            ],
        }),

        generateItemListSchema({
            id: "/services/mobile-app-development/cross-platform-app-development-company/#industrySolutionsList",
            name: "Cross-Platform Solutions for Every Industry",
            description: "Industry-specific cross-platform solutions for startups, e-commerce, enterprise, social apps, on-demand services, and fintech/healthcare.",
            items: [
                { name: "Startups & MVPs", description: "Rapid delivery to gather user feedback and secure funding with minimal time-to-market." },
                { name: "E-commerce & Retail Solutions", description: "Shoppable apps with unified inventory management and secure checkout across platforms." },
                { name: "Enterprise Mobility", description: "Streamlined internal operations integrated with SAP, Salesforce, and Oracle enterprise systems." },
                { name: "Social & Chat Applications", description: "Real-time social apps with live messaging, video calling, and community features." },
                { name: "On-Demand Services", description: "Uber-style booking and tracking apps with geolocation and real-time notifications." },
                { name: "Fintech & Healthcare (HIPAA Compliant)", description: "Secure apps with biometric authentication and regulatory compliance for finance and healthcare." },
            ],
        }),

        generateFAQSchema([
            { question: "What is cross-platform app development?", answer: "Cross-platform app development involves building mobile applications compatible with multiple operating systems, such as iOS and Android, using a single codebase. This approach saves time and reduces costs compared to native development." },
            { question: "Which is better: Flutter or React Native in 2026?", answer: "Both are excellent choices. React Native is ideal if you have an existing web team (JavaScript/React) and complex native dependencies. Flutter is superior for highly branded, custom UI-heavy apps with its Skia rendering engine." },
            { question: "How much does it cost to build a cross-platform app?", answer: "The cost varies based on complexity, features, and design. Generally, cross-platform development is 30-40% cheaper than building two separate native apps." },
            { question: "What are the benefits of cross-platform vs native development?", answer: "Cross-platform offers faster time-to-market, lower costs, and easier maintenance. Modern frameworks offer near-native performance for 95% of business apps." },
            { question: "How long does it take to develop a multi-platform mobile app?", answer: "A typical MVP can be delivered in 3-4 months. More complex enterprise solutions may take 6-8 months." },
            { question: "Can you convert my existing native app to cross-platform?", answer: "Yes, we specialize in migrating native iOS and Android apps to Flutter or React Native, preserving data while reducing maintenance costs by 50%." },
            { question: "Do cross-platform apps support native device features?", answer: "Absolutely. Both Flutter and React Native provide bridges and native modules to access Camera, GPS, Bluetooth, and Biometric sensors with native-level performance." },
        ]),

        generateHowToSchema({
            name: "Our Cross-Platform Development Process",
            description: "A proven 5-step agile methodology for building cross-platform apps with 70% faster development time and 40% cost efficiency.",
            steps: [
                { name: "Discovery & Planning", text: "Defining mobile app design and UI/UX strategy, selecting Flutter vs. React Native based on project needs. Timeline: 1-2 weeks.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/cross-platform-app-development-company/#step-discovery" },
                { name: "UI/UX Design", text: "Platform-adaptive designs respecting both iOS Human Interface Guidelines and Android Material Design conventions. Timeline: 2-3 weeks.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/cross-platform-app-development-company/#step-design" },
                { name: "Agile Development", text: "Two-week sprints focused on core features and functional builds using React Native or Flutter. Timeline: 6-12 weeks.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/cross-platform-app-development-company/#step-development" },
                { name: "Testing & QA", text: "Rigorous testing across devices and OS versions targeting 99.9% crash-free sessions. Timeline: 2-3 weeks.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/cross-platform-app-development-company/#step-testing" },
                { name: "Dual Store Launch", text: "Metadata optimization (ASO) and simultaneous submission to both App Store and Google Play Store. Timeline: 1-2 weeks.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/cross-platform-app-development-company/#step-launch" },
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
        <main className="min-h-screen" style={{ "--page-selection-bg": "#667eea" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(crossPlatformSchema) }}
            />
            <Hero />
            <ServiceOverview />
            <SolutionTypes />
            <TechStack />
            <Process />
            <WhyChooseUs />
            <FAQ />
            <CTA />
        </main>
    );
}
