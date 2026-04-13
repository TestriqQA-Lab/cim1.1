import Hero from "@/components/services/web-design-development/java-spring-boot/Hero";
import ServiceOverview from "@/components/services/web-design-development/java-spring-boot/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/java-spring-boot/SolutionTypes";
import TechStack from "@/components/services/web-design-development/java-spring-boot/TechStack";
import Process from "@/components/services/web-design-development/java-spring-boot/Process";
import WhyChooseUs from "@/components/services/web-design-development/java-spring-boot/WhyChooseUs";
import CTA from "@/components/services/web-design-development/java-spring-boot/CTA";

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
    title: 'Java & Spring Boot Development Services | Enterprise Applications',
    description: 'Build scalable, secure, and high-performance enterprise applications with the world\'s most trusted technology stack. Java 25, Spring Boot 3.4, microservices, and cloud-native architecture.',
    url: '/services/web-design-development/java-spring-boot',
    keywords: [
        'java development services',
        'spring boot development',
        'enterprise java applications',
        'microservices architecture',
        'spring cloud development',
        'java api development',
        'legacy java modernization',
        'spring boot consulting',
    ],
});

export default function JavaSpringBootPage() {
    const javaSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Java & Spring Boot Development Services | Enterprise Applications",
            description: "Build scalable, secure, and high-performance enterprise applications with the world's most trusted technology stack. Java 25, Spring Boot 3.4, microservices, and cloud-native architecture.",
            urlPath: "/services/web-design-development/java-spring-boot",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/web-design-development/java-spring-boot/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/web-design-development/java-spring-boot/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/web-design-development/java-spring-boot/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Web Design & Development", url: "/services/web-design-development" },
            { name: "Java & Spring Boot Development", url: "/services/web-design-development/java-spring-boot" },
        ], "https://www.cinuteinfomedia.com/services/web-design-development/java-spring-boot/#breadcrumb"),

        generateServiceSchema({
            name: "Java & Spring Boot Development Services",
            description: "Robust enterprise applications with Java & Spring Boot. Build scalable, secure, and high-performance systems with the world's most trusted technology stack. 10+ years experience, 500+ projects delivered, billions of transactions processed daily with sub-millisecond response times.",
            urlPath: "/services/web-design-development/java-spring-boot",
            serviceType: "Java & Spring Boot Enterprise Development",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Free enterprise consultation for Java & Spring Boot development. Custom enterprise applications, microservices, API development, legacy modernization, and cloud-native solutions.",
            },
        }),

        generateItemListSchema({
            id: "/services/web-design-development/java-spring-boot/#servicesList",
            name: "Core Java & Spring Boot Services",
            description: "Full-spectrum Java development services from enterprise applications to legacy modernization and performance tuning.",
            items: [
                { name: "Enterprise Applications", description: "Mission-critical enterprise systems built with Java and Spring Boot for high availability and scalability." },
                { name: "Microservices Architecture", description: "Decompose monoliths into independently deployable, scalable microservices with Spring Cloud and service mesh." },
                { name: "RESTful & GraphQL APIs", description: "High-performance API development with Spring MVC, WebFlux, and reactive programming for real-time data." },
                { name: "Security Implementation", description: "Enterprise security with Spring Security, OAuth 2.0, JWT authentication, and role-based access control." },
                { name: "Legacy Modernization", description: "Migrate and modernize legacy Java applications to Spring Boot 3.4 with improved performance and maintainability." },
                { name: "Performance Optimization", description: "JVM tuning, caching strategies, database optimization, and profiling for sub-millisecond response times." },
            ],
        }),

        generateItemListSchema({
            id: "/services/web-design-development/java-spring-boot/#solutionsList",
            name: "Industry Solutions We Build",
            description: "Enterprise Java solutions tailored for banking, healthcare, e-commerce, logistics, analytics, and government sectors.",
            items: [
                { name: "Banking & FinTech", description: "Secure, PCI-DSS compliant financial systems for payment processing, trading, and risk management." },
                { name: "Healthcare Systems", description: "HIPAA-compliant healthcare platforms for patient management, EHR integration, and telemedicine." },
                { name: "E-commerce Platforms", description: "High-volume e-commerce systems with inventory management, order processing, and payment gateways." },
                { name: "Logistics & Supply Chain", description: "Real-time tracking and supply chain management with route optimization and warehouse automation." },
                { name: "Data Analytics Platforms", description: "Big data processing and analytics dashboards for business intelligence and real-time reporting." },
                { name: "Government & Public Sector", description: "Secure, compliant government portals and citizen service platforms with high availability." },
            ],
        }),

        generateHowToSchema({
            name: "Our Enterprise Java Development Process",
            description: "A structured 5-step enterprise methodology for building mission-critical Java & Spring Boot applications with 500+ projects delivered.",
            steps: [
                { name: "Discovery & Architecture", text: "Requirements analysis, system architecture design, technology stack validation, and project roadmap creation. Timeline: 1-2 weeks.", url: "https://www.cinuteinfomedia.com/services/web-design-development/java-spring-boot/#step-discovery" },
                { name: "System Design & Prototyping", text: "Database schema design, API contract definition, microservice boundaries, and proof-of-concept development. Timeline: 1-2 weeks.", url: "https://www.cinuteinfomedia.com/services/web-design-development/java-spring-boot/#step-design" },
                { name: "Agile Development", text: "Sprint-based development using Java 25 and Spring Boot 3.4, code reviews, CI/CD pipeline setup, and iterative delivery. Timeline: 4-8 weeks.", url: "https://www.cinuteinfomedia.com/services/web-design-development/java-spring-boot/#step-development" },
                { name: "Testing & Security Audit", text: "JUnit/Mockito unit testing, integration testing, load testing, penetration testing, and OWASP compliance validation. Timeline: 1-2 weeks.", url: "https://www.cinuteinfomedia.com/services/web-design-development/java-spring-boot/#step-testing" },
                { name: "Deployment & Operations", text: "Docker containerization, Kubernetes orchestration, cloud deployment on AWS/Azure/GCP, and real-time monitoring setup. Timeline: 1 week.", url: "https://www.cinuteinfomedia.com/services/web-design-development/java-spring-boot/#step-deployment" },
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
        <main className="min-h-screen" style={{ "--page-selection-bg": "#6DB33F" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(javaSchema) }}
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
