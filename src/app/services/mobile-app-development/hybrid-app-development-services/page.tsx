import Hero from "@/components/services/mobile-app-development/hybrid-app-development-services/Hero";
import ServiceOverview from "@/components/services/mobile-app-development/hybrid-app-development-services/ServiceOverview";
import SolutionTypes from "@/components/services/mobile-app-development/hybrid-app-development-services/SolutionTypes";
import TechStack from "@/components/services/mobile-app-development/hybrid-app-development-services/TechStack";
import Process from "@/components/services/mobile-app-development/hybrid-app-development-services/Process";
import WhyChooseUs from "@/components/services/mobile-app-development/hybrid-app-development-services/WhyChooseUs";
import FAQ from "@/components/services/mobile-app-development/hybrid-app-development-services/FAQ";
import CTA from "@/components/services/mobile-app-development/hybrid-app-development-services/CTA";

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
    title: 'Hybrid App Development Services | Top Cross-Platform Agency 2026',
    description: 'Premier hybrid app development company leveraging Ionic, Capacitor, and PWA technologies. Single codebase efficiency that slashes time-to-market by 60%. 120+ global hybrid apps delivered, 95% bug-free deployment rate, 50% cost savings.',
    url: '/services/mobile-app-development/hybrid-app-development-services',
    keywords: [
        'hybrid app development services',
        'Ionic framework app development agency',
        'Capacitor development solutions',
        'hybrid mobile app development company',
        'cross-platform app development',
        'PWA development',
        'custom hybrid app development for startups',
        'healthcare hybrid applications',
        'IoT hybrid app development',
    ],
});

export default function HybridAppDevelopmentPage() {
    const hybridSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Hybrid App Development Services | Top Cross-Platform Agency 2026",
            description: "Premier hybrid app development company leveraging Ionic, Capacitor, and PWA technologies. Single codebase efficiency that slashes time-to-market by 60%. 120+ global hybrid apps delivered, 95% bug-free deployment rate, 50% cost savings.",
            urlPath: "/services/mobile-app-development/hybrid-app-development-services",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/mobile-app-development/hybrid-app-development-services/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/mobile-app-development/hybrid-app-development-services/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/mobile-app-development/hybrid-app-development-services/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Mobile App Development", url: "/services/mobile-app-development" },
            { name: "Hybrid App Development Services", url: "/services/mobile-app-development/hybrid-app-development-services" },
        ], "https://www.cinuteinfomedia.com/services/mobile-app-development/hybrid-app-development-services/#breadcrumb"),

        generateServiceSchema({
            name: "Hybrid App Development Services",
            description: "Premier hybrid app development services using Ionic, Capacitor, and PWA. Forge a formidable mobile presence with the speed of web development and the punch of native performance. Single codebase efficiency that slashes time-to-market by 60%. 120+ global hybrid apps delivered, 95% bug-free deployment rate, 50% development cost savings, 3x user reach.",
            urlPath: "/services/mobile-app-development/hybrid-app-development-services",
            serviceType: "Hybrid Mobile App Development",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                price: "15000",
                validFrom: "2025-01-01",
                description: "Hybrid app development typically ranges from $15,000 to $60,000+ based on features and complexity. Includes modern SEO & EEAT strategy integration for post-2025 visibility.",
            },
        }),

        generateItemListSchema({
            id: "/services/mobile-app-development/hybrid-app-development-services/#servicesList",
            name: "Core Hybrid App Development Services",
            description: "Comprehensive hybrid app services from Ionic and Capacitor development to PWA, native conversion, custom plugins, and store deployment.",
            items: [
                { name: "Ionic Framework App Development", description: "Building lightning-fast apps using Angular, React, or Vue with performance optimization for a smooth native feel." },
                { name: "Capacitor & Native Bridge Integration", description: "Accessing native features like GPS, Camera, Biometrics, and Push Notifications with custom API integration." },
                { name: "Scalable Progressive Web Apps (PWA)", description: "Future-proof installable web apps with offline functionality and high browser-based engagement." },
                { name: "Native to Hybrid App Conversion", description: "Modernizing siloed native apps into a unified, maintainable cross-platform architecture." },
                { name: "Custom Plugin & Native Container Dev", description: "Building custom native bridges for complex IoT connectivity or specialized hardware integration." },
                { name: "App Store & Play Store Deployment", description: "Navigating global compliance and store submission for iOS and Android with guaranteed approval." },
            ],
        }),

        generateItemListSchema({
            id: "/services/mobile-app-development/hybrid-app-development-services/#solutionsList",
            name: "Hybrid Solutions for Every Use Case",
            description: "Industry-specific hybrid app solutions for startups, e-commerce, B2B, healthcare, wearables/IoT, and media/EdTech.",
            items: [
                { name: "Startups & MVPs", description: "Dual-market iOS/Android launches with feature-rich MVPs to validate business models quickly." },
                { name: "E-commerce & Retail", description: "High-conversion shopping apps with secure payment gateways and AR-powered product previews." },
                { name: "B2B Internal Operations", description: "Secure internal business tools with ERP/CRM integration and robust data encryption." },
                { name: "Healthcare (HIPAA-Compliant)", description: "Secure telehealth and patient records portals strictly following HIPAA data privacy guidelines." },
                { name: "Wearable & IoT", description: "Real-time data visualization and cross-device control syncing with smartwatches and IoT devices." },
                { name: "Content, Media & EdTech", description: "LMS-integrated solutions supporting offline reading, video streaming, and progress tracking." },
            ],
        }),

        generateFAQSchema([
            { question: "What is hybrid app development?", answer: "Hybrid app development is a method using a single web-based codebase (HTML, CSS, JavaScript) wrapped in a native container to run on both iOS and Android platforms simultaneously." },
            { question: "What are the benefits of hybrid apps vs native apps?", answer: "Hybrid apps offer 50% cost savings compared to separate native builds, 60% faster launch timelines, and easier maintenance with a single codebase for both platforms." },
            { question: "How much does hybrid app development cost?", answer: "Hybrid app development typically ranges from $15,000 to $60,000+ based on features, complexity, and integrations required." },
            { question: "What are the best hybrid app development frameworks in 2026?", answer: "Ionic and Capacitor are the recommended frameworks for 2026, offering modern tooling, native bridge access, and excellent performance with web technologies." },
            { question: "How long does it take to develop a hybrid app?", answer: "Most hybrid app projects take 3 to 6 months from discovery to launch, depending on features and complexity." },
        ]),

        generateHowToSchema({
            name: "Our 6-Phase Hybrid Development Process",
            description: "A proven 6-phase agile methodology for building hybrid apps that has delivered 120+ global apps with 95% bug-free deployment and 60% faster time-to-market.",
            steps: [
                { name: "Strategic Requirements Analysis", text: "ROI assessment and hybrid viability check to ensure the right approach for your business goals. Timeline: 1-2 weeks.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/hybrid-app-development-services/#step-analysis" },
                { name: "Hybrid Mobile App Design (UI/UX)", text: "High-fidelity cross-platform optimized interfaces following both iOS and Android design conventions. Timeline: 2-3 weeks.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/hybrid-app-development-services/#step-design" },
                { name: "Agile Development & Coding", text: "Modular clean code with single codebase efficiency using Ionic, Capacitor, and web technologies. Timeline: 6-10 weeks.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/hybrid-app-development-services/#step-development" },
                { name: "Hybrid App Testing & QA", text: "Real-device testing ensuring 99.9% crash-free sessions across iOS and Android platforms. Timeline: 2-3 weeks.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/hybrid-app-development-services/#step-testing" },
                { name: "Global Deployment & Store Approval", text: "Security standards compliance and simultaneous submission to both App Store and Google Play Store. Timeline: 1-2 weeks.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/hybrid-app-development-services/#step-deployment" },
                { name: "Post-Launch Maintenance & Scaling", text: "24/7 support, regular OS compatibility updates, performance tuning, and feature enhancements. Ongoing.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/hybrid-app-development-services/#step-maintenance" },
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
        <main className="min-h-screen" style={{ "--page-selection-bg": "#00b4d8" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(hybridSchema) }}
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
