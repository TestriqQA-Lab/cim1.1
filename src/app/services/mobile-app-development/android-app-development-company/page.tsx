import Hero from "@/components/services/mobile-app-development/android-app-development-company/Hero";
import ServiceOverview from "@/components/services/mobile-app-development/android-app-development-company/ServiceOverview";
import SolutionTypes from "@/components/services/mobile-app-development/android-app-development-company/SolutionTypes";
import TechStack from "@/components/services/mobile-app-development/android-app-development-company/TechStack";
import Process from "@/components/services/mobile-app-development/android-app-development-company/Process";
import WhyChooseUs from "@/components/services/mobile-app-development/android-app-development-company/WhyChooseUs";
import CTA from "@/components/services/mobile-app-development/android-app-development-company/CTA";
import FAQ from "@/components/services/mobile-app-development/android-app-development-company/FAQ";

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
    title: 'Android App Development Services | Top Company',
    description: 'Premier Android app development company building powerful, high-performance apps for smartphones, tablets, Wear OS, Android TV, and Android Auto. 300+ Android apps delivered, 99.9% crash-free rate, 50+ certified developers.',
    url: '/services/mobile-app-development/android-app-development-company',
    keywords: [
        'Android App Development Services',
        'custom Android app development',
        'Android app development company',
        'native Android development',
        'Kotlin app development',
        'Android app maintenance',
        'Jetpack Compose development',
        'Wear OS app development',
    ],
});

export default function AndroidAppDevelopmentPage() {
    const androidSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Android App Development Services | Top Company",
            description: "Premier Android app development company building powerful, high-performance apps for smartphones, tablets, Wear OS, Android TV, and Android Auto. 300+ Android apps delivered, 99.9% crash-free rate, 50+ certified developers.",
            urlPath: "/services/mobile-app-development/android-app-development-company",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/mobile-app-development/android-app-development-company/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/mobile-app-development/android-app-development-company/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/mobile-app-development/android-app-development-company/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Mobile App Development", url: "/services/mobile-app-development" },
            { name: "Android App Development Services", url: "/services/mobile-app-development/android-app-development-company" },
        ], "https://www.cinuteinfomedia.com/services/mobile-app-development/android-app-development-company/#breadcrumb"),

        generateServiceSchema({
            name: "Android App Development Services",
            description: "Premier Android app development services driving global business growth. Build powerful Android apps for every device — smartphones, tablets, Wear OS, Android TV, and Android Auto. 300+ Android apps delivered, 99.9% crash-free rate, 50+ certified Kotlin/Java developers.",
            urlPath: "/services/mobile-app-development/android-app-development-company",
            serviceType: "Android App Development",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                price: "10000",
                validFrom: "2025-01-01",
                description: "Android app development starting from $10,000 for MVPs up to $150,000+ for enterprise applications. Book a free consultation today.",
            },
        }),

        generateItemListSchema({
            id: "/services/mobile-app-development/android-app-development-company/#devicesList",
            name: "Complete Android Ecosystem Development",
            description: "Full Android ecosystem coverage from phone and tablet apps to Wear OS, Android TV, Android Auto, and App Store Optimization.",
            items: [
                { name: "Android Phone Apps", description: "Custom native apps built with Kotlin/Java, optimized for 120Hz scrolling and modern Material Design 3." },
                { name: "Android Tablet Apps", description: "Adaptive layouts and multi-window support for enterprise and education applications." },
                { name: "Wear OS Apps", description: "Companion apps for health tracking and notifications for Pixel Watch and Galaxy Watch." },
                { name: "Android TV & OTT Apps", description: "Immersive streaming platforms using the Leanback library for large-screen experiences." },
                { name: "Android Auto Apps", description: "Voice-enabled, seamless vehicle infotainment integration for in-car experiences." },
                { name: "App Store Optimization (ASO)", description: "Data-driven Google Play Store ranking optimization for organic growth and higher visibility." },
            ],
        }),

        generateItemListSchema({
            id: "/services/mobile-app-development/android-app-development-company/#industrySolutionsList",
            name: "Android Solutions for Every Industry",
            description: "Industry-specific Android app solutions for e-commerce, enterprise, healthcare, fintech, gaming, and AI/ML.",
            items: [
                { name: "E-commerce & Retail", description: "Shopping apps with Google Pay integration, AR product previews, and personalized recommendation engines." },
                { name: "B2B & Enterprise", description: "Secure employee portals and ERP-integrated inventory trackers with SSO authentication." },
                { name: "Healthcare (HIPAA)", description: "Telemedicine and secure health records applications with HIPAA and GDPR compliance." },
                { name: "Fintech & Banking", description: "Digital wallets with biometric authentication, fraud detection, and bank-grade encryption." },
                { name: "Gaming & Entertainment", description: "High-performance 2D/3D games built with Unity and Android NDK for immersive experiences." },
                { name: "On-Device AI/ML", description: "Offline image recognition and predictive text using TensorFlow Lite and ML Kit." },
            ],
        }),

        generateFAQSchema([
            { question: "How much does it cost to develop an Android app?", answer: "MVPs typically range from $10,000 to $25,000, while enterprise-grade applications can range from $50,000 to $150,000+. The cost depends on complexity, features, and integrations required." },
            { question: "What programming language do you use for Android development?", answer: "Kotlin is our primary standard as recommended by Google. We also support Java for legacy projects and C++ for NDK-based performance-critical modules." },
            { question: "How long does Android app development take?", answer: "Standard apps take 3-6 months from discovery to launch. We also offer 8-week Sprint packages for MVPs that need rapid market validation." },
            { question: "Should I choose native or hybrid Android development?", answer: "Native development is best for performance-critical apps and hardware access. Hybrid frameworks like Flutter and React Native are ideal when speed-to-market and cost savings are priorities." },
            { question: "Do you handle Google Play Store publishing?", answer: "Yes, we provide end-to-end Play Store management from account setup to listing optimization and guaranteed approval." },
            { question: "Can you migrate legacy Android apps to modern architecture?", answer: "Absolutely. We specialize in Java to Kotlin migrations, monolith to microservices modernization, and upgrading legacy apps to the latest Android standards." },
            { question: "Do you integrate AI/ML features into Android apps?", answer: "Yes, we integrate TensorFlow Lite and ML Kit for on-device, privacy-focused offline features including image recognition, natural language processing, and predictive analytics." },
        ]),

        generateHowToSchema({
            name: "Our 6-Step Agile Android Development Process",
            description: "A proven 6-step agile methodology for building Android apps that has delivered 300+ apps with 99.9% crash-free rate across 50+ real device testing.",
            steps: [
                { name: "Discovery & Strategy", text: "Market analysis, user personas, and Technical Specification Document (TSD) creation. Timeline: 1-2 weeks.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/android-app-development-company/#step-discovery" },
                { name: "UI/UX Design", text: "Material Design 3 principles, wireframes, and interactive prototypes with usability testing. Timeline: 2-3 weeks.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/android-app-development-company/#step-design" },
                { name: "Development", text: "Kotlin-first approach with MVVM/Clean Architecture, Jetpack Compose, and continuous integration. Timeline: 6-12 weeks.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/android-app-development-company/#step-development" },
                { name: "Testing & QA", text: "Rigorous testing on 50+ real devices covering battery, memory, network, and security scenarios. Timeline: 2-3 weeks.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/android-app-development-company/#step-testing" },
                { name: "Deployment & ASO", text: "Google Play Store submission, listing optimization, and App Store Optimization for organic visibility. Timeline: 1-2 weeks.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/android-app-development-company/#step-deployment" },
                { name: "Maintenance & Support", text: "Ongoing OS updates, security patches, performance tuning, and feature enhancements with dedicated SLA.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/android-app-development-company/#step-maintenance" },
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
        <main className="min-h-screen" style={{ "--page-selection-bg": "#3DDC84" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(androidSchema) }}
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
