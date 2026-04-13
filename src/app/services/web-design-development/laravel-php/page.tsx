import Hero from "@/components/services/web-design-development/laravel-php/Hero";
import ServiceOverview from "@/components/services/web-design-development/laravel-php/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/laravel-php/SolutionTypes";
import TechStack from "@/components/services/web-design-development/laravel-php/TechStack";
import Process from "@/components/services/web-design-development/laravel-php/Process";
import WhyChooseUs from "@/components/services/web-design-development/laravel-php/WhyChooseUs";
import CTA from "@/components/services/web-design-development/laravel-php/CTA";

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
    title: 'Laravel & PHP Development Services - Enterprise Solutions',
    description: 'Build scalable, secure, and maintainable web applications with Laravel and PHP. Enterprise-grade solutions with 100+ projects delivered, 5+ years experience, and 24/7 support.',
    url: '/services/web-design-development/laravel-php',
    keywords: [
        'laravel development services',
        'php development company',
        'laravel web application',
        'custom laravel development',
        'laravel saas development',
        'php enterprise solutions',
        'laravel api development',
        'laravel migration services',
    ],
});

export default function LaravelPhpPage() {
    const laravelSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Laravel & PHP Development Services - Enterprise Solutions",
            description: "Build scalable, secure, and maintainable web applications with Laravel and PHP. Enterprise-grade solutions with 100+ projects delivered, 5+ years experience, and 24/7 support.",
            urlPath: "/services/web-design-development/laravel-php",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/web-design-development/laravel-php/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/web-design-development/laravel-php/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/web-design-development/laravel-php/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Web Design & Development", url: "/services/web-design-development" },
            { name: "Laravel & PHP Development", url: "/services/web-design-development/laravel-php" },
        ], "https://www.cinuteinfomedia.com/services/web-design-development/laravel-php/#breadcrumb"),

        generateServiceSchema({
            name: "Laravel & PHP Development Services",
            description: "Build scalable, secure, and maintainable web applications with the world's most popular PHP framework. Enterprise-grade solutions tailored to your business with 100+ projects delivered, 5+ years experience, and 24/7 support & maintenance.",
            urlPath: "/services/web-design-development/laravel-php",
            serviceType: "Laravel & PHP Web Application Development",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Schedule a call for custom Laravel & PHP development. Enterprise ERP, CRM, SaaS applications, e-commerce platforms, and API backends.",
            },
        }),

        generateItemListSchema({
            id: "/services/web-design-development/laravel-php/#itemList",
            name: "Laravel & PHP Development Solutions",
            description: "Comprehensive Laravel and PHP development services from custom web applications to enterprise portals and SaaS platforms.",
            items: [
                { name: "Custom Laravel Development", description: "Tailor-made web applications built from scratch to meet unique business requirements with clean, maintainable code." },
                { name: "SaaS Application Development", description: "Scalable multi-tenant SaaS platforms with subscription management, role-based access, and robust billing systems." },
                { name: "API Development & Integration", description: "RESTful and GraphQL API development for mobile apps and third-party integrations with Stripe, Salesforce, and more." },
                { name: "Legacy to Laravel Migration", description: "Upgrading outdated PHP applications or migrating from other frameworks to Laravel for better performance and security." },
                { name: "Enterprise Web Portals", description: "Scalable and secure portals for large organizations with complex workflows, multiple user roles, and advanced permissions." },
                { name: "Performance & Security Audits", description: "In-depth analysis to identify performance bottlenecks and security vulnerabilities in existing Laravel applications." },
            ],
        }),

        generateHowToSchema({
            name: "Our Laravel Development Process",
            description: "A structured 5-step agile methodology for building enterprise-grade Laravel applications with 100+ projects successfully delivered.",
            steps: [
                { name: "Discovery & Planning", text: "Requirements gathering, database schema design, architecture planning, and defining project scope and milestones.", url: "https://www.cinuteinfomedia.com/services/web-design-development/laravel-php/#step-discovery" },
                { name: "UI/UX Design", text: "Wireframing, high-fidelity mockups, component design, and user flow mapping for intuitive interfaces.", url: "https://www.cinuteinfomedia.com/services/web-design-development/laravel-php/#step-design" },
                { name: "Agile Development", text: "Sprint planning, feature implementation using Laravel best practices, code reviews, and daily standups.", url: "https://www.cinuteinfomedia.com/services/web-design-development/laravel-php/#step-development" },
                { name: "Testing & QA", text: "Unit testing with Pest/PHPUnit, integration testing, browser testing with Laravel Dusk, and security scanning.", url: "https://www.cinuteinfomedia.com/services/web-design-development/laravel-php/#step-testing" },
                { name: "Deployment", text: "CI/CD pipeline setup, server provisioning with Laravel Forge, environment configuration, and performance tuning.", url: "https://www.cinuteinfomedia.com/services/web-design-development/laravel-php/#step-deployment" },
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
        <main className="min-h-screen" style={{ "--page-selection-bg": "#FF2D20" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(laravelSchema) }}
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
