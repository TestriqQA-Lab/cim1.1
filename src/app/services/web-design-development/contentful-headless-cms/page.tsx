import Hero from "@/components/services/web-design-development/contentful-headless-cms/Hero";
import ServiceOverview from "@/components/services/web-design-development/contentful-headless-cms/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/contentful-headless-cms/SolutionTypes";
import TechStack from "@/components/services/web-design-development/contentful-headless-cms/TechStack";
import Process from "@/components/services/web-design-development/contentful-headless-cms/Process";
import WhyChooseUs from "@/components/services/web-design-development/contentful-headless-cms/WhyChooseUs";
import CTA from "@/components/services/web-design-development/contentful-headless-cms/CTA";

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
    title: 'Contentful Headless CMS Development Services | Composable Content Platform',
    description: 'Build composable experiences with Contentful, the enterprise-grade composable content platform. Power omnichannel experiences with structured content, powerful APIs, and infinite scalability. 99.99% uptime SLA.',
    url: '/services/web-design-development/contentful-headless-cms',
    keywords: [
        'contentful development services',
        'contentful headless cms',
        'contentful api development',
        'contentful app framework',
        'composable content platform',
        'contentful migration services',
        'contentful frontend integration',
        'contentful content modeling',
    ],
});

export default function ContentfulHeadlessCMSPage() {
    const contentfulSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Contentful Headless CMS Development Services | Composable Content Platform",
            description: "Build composable experiences with Contentful, the enterprise-grade composable content platform. Power omnichannel experiences with structured content, powerful APIs, and infinite scalability. 99.99% uptime SLA.",
            urlPath: "/services/web-design-development/contentful-headless-cms",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/web-design-development/contentful-headless-cms/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/web-design-development/contentful-headless-cms/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/web-design-development/contentful-headless-cms/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Web Design & Development", url: "/services/web-design-development" },
            { name: "Contentful Headless CMS Development", url: "/services/web-design-development/contentful-headless-cms" },
        ], "https://www.cinuteinfomedia.com/services/web-design-development/contentful-headless-cms/#breadcrumb"),

        generateServiceSchema({
            name: "Contentful Headless CMS Development Services",
            description: "Build composable experiences with Contentful, the enterprise-grade composable content platform. Power omnichannel experiences with structured content, Content Graph, GraphQL & REST APIs, 99.99% uptime SLA, and 99ms average response times across 200+ global CDN points of presence. SOC 2 Type II certified and GDPR compliant.",
            urlPath: "/services/web-design-development/contentful-headless-cms",
            serviceType: "Contentful Headless CMS Development",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Free Contentful consultation available. Content modeling, API development, App Framework extensions, frontend integration, migration services, and premium support.",
            },
        }),

        generateItemListSchema({
            id: "/services/web-design-development/contentful-headless-cms/#servicesList",
            name: "Comprehensive Contentful Solutions",
            description: "Full-spectrum Contentful CMS services from content modeling to migration, App Framework development, and ongoing support.",
            items: [
                { name: "Content Modeling", description: "Design flexible, reusable content types with structured fields, references, and rich text for omnichannel delivery." },
                { name: "API Development", description: "Build custom integrations with Contentful's GraphQL and REST APIs, webhooks, and content management SDK." },
                { name: "App Framework Development", description: "Extend Contentful's web app with custom apps, field editors, and sidebar widgets using App Framework." },
                { name: "Frontend Integration", description: "Connect Contentful with React, Next.js, Gatsby, Vue, or any frontend framework for blazing-fast sites." },
                { name: "Migration Services", description: "Seamlessly migrate from legacy CMS platforms to Contentful with zero content loss and minimal downtime." },
                { name: "Support & Training", description: "Comprehensive support with editor training, documentation, and ongoing maintenance for your Contentful implementation." },
            ],
        }),

        generateItemListSchema({
            id: "/services/web-design-development/contentful-headless-cms/#solutionsList",
            name: "Contentful Solutions We Build",
            description: "Industry-specific Contentful solutions from e-commerce experiences to global multi-language websites and digital products.",
            items: [
                { name: "E-commerce Experiences", description: "Headless commerce with Contentful powering product content, marketing pages, and personalized shopping experiences." },
                { name: "Marketing Websites", description: "High-performance marketing sites with dynamic content, campaign pages, and real-time updates without deploys." },
                { name: "Mobile Applications", description: "Power iOS and Android apps with Contentful's APIs for real-time content updates without app store releases." },
                { name: "Enterprise Portals", description: "Internal knowledge bases, documentation sites, and employee portals with role-based content access." },
                { name: "Digital Products", description: "SaaS applications with content-driven onboarding, help centers, and in-app messaging powered by Contentful." },
                { name: "Global Websites", description: "Multi-region, multi-language websites with localized content management and regional content variations." },
            ],
        }),

        generateHowToSchema({
            name: "Our Contentful Development Process",
            description: "A structured 5-step methodology for building composable content experiences with Contentful's enterprise-grade platform and 99.99% uptime SLA.",
            steps: [
                { name: "Discovery & Strategy", text: "Understanding your content strategy, channel requirements, and integration landscape for the Contentful implementation.", url: "https://www.cinuteinfomedia.com/services/web-design-development/contentful-headless-cms/#step-discovery" },
                { name: "Content Modeling", text: "Designing reusable content types, components, and relationships in Contentful's composable architecture.", url: "https://www.cinuteinfomedia.com/services/web-design-development/contentful-headless-cms/#step-modeling" },
                { name: "Development & Integration", text: "Building frontend applications and integrating with Contentful's GraphQL and REST APIs for omnichannel delivery.", url: "https://www.cinuteinfomedia.com/services/web-design-development/contentful-headless-cms/#step-development" },
                { name: "Testing & Migration", text: "Quality assurance, content migration from legacy systems, and editor training for the Contentful admin panel.", url: "https://www.cinuteinfomedia.com/services/web-design-development/contentful-headless-cms/#step-testing" },
                { name: "Launch & Optimize", text: "Production deployment with monitoring, analytics setup, and ongoing optimization for performance excellence.", url: "https://www.cinuteinfomedia.com/services/web-design-development/contentful-headless-cms/#step-launch" },
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
        <main className="min-h-screen" style={{ "--page-selection-bg": "#0286FF" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contentfulSchema) }}
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
