import Hero from "@/components/services/web-design-development/strapi-headless-cms/Hero";
import ServiceOverview from "@/components/services/web-design-development/strapi-headless-cms/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/strapi-headless-cms/SolutionTypes";
import TechStack from "@/components/services/web-design-development/strapi-headless-cms/TechStack";
import Process from "@/components/services/web-design-development/strapi-headless-cms/Process";
import WhyChooseUs from "@/components/services/web-design-development/strapi-headless-cms/WhyChooseUs";
import CTA from "@/components/services/web-design-development/strapi-headless-cms/CTA";

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
    title: 'Strapi Headless CMS Development Services | API-First Content Platform',
    description: 'Build omnichannel experiences with Strapi, the leading open-source headless CMS. Deliver content anywhere with powerful REST & GraphQL APIs, TypeScript support, and complete customization freedom.',
    url: '/services/web-design-development/strapi-headless-cms',
    keywords: [
        'strapi development services',
        'strapi headless cms',
        'strapi api development',
        'strapi plugin development',
        'headless cms development',
        'strapi migration services',
        'strapi frontend integration',
        'strapi content modeling',
    ],
});

export default function StrapiHeadlessCMSPage() {
    const strapiSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Strapi Headless CMS Development Services | API-First Content Platform",
            description: "Build omnichannel experiences with Strapi, the leading open-source headless CMS. Deliver content anywhere with powerful REST & GraphQL APIs, TypeScript support, and complete customization freedom.",
            urlPath: "/services/web-design-development/strapi-headless-cms",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/web-design-development/strapi-headless-cms/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/web-design-development/strapi-headless-cms/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/web-design-development/strapi-headless-cms/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Web Design & Development", url: "/services/web-design-development" },
            { name: "Strapi Headless CMS Development", url: "/services/web-design-development/strapi-headless-cms" },
        ], "https://www.cinuteinfomedia.com/services/web-design-development/strapi-headless-cms/#breadcrumb"),

        generateServiceSchema({
            name: "Strapi Headless CMS Development Services",
            description: "Build omnichannel experiences with Strapi, the leading open-source headless CMS. Strapi v5 with REST & GraphQL APIs, TypeScript native support, and complete customization freedom. 75K+ GitHub stars, 700K+ projects created, 100+ plugins available.",
            urlPath: "/services/web-design-development/strapi-headless-cms",
            serviceType: "Strapi Headless CMS Development",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Free Strapi consultation available. Custom content modeling, API development, plugin development, frontend integration, migration services, and 24/7 support.",
            },
        }),

        generateItemListSchema({
            id: "/services/web-design-development/strapi-headless-cms/#servicesList",
            name: "Core Strapi Development Services",
            description: "Comprehensive Strapi CMS services from custom content modeling to migration and ongoing support.",
            items: [
                { name: "Custom Content Modeling", description: "Design flexible content types with custom fields, relations, and components tailored to your content strategy." },
                { name: "API Development", description: "Build powerful REST and GraphQL APIs with custom endpoints, middleware, and authentication." },
                { name: "Plugin Development", description: "Extend Strapi's functionality with custom plugins or integrate from the marketplace ecosystem." },
                { name: "Frontend Integration", description: "Seamlessly connect Strapi with React, Next.js, Vue, Nuxt, or any frontend framework." },
                { name: "Migration Services", description: "Migrate from WordPress, Contentful, or legacy CMS platforms to Strapi with zero data loss." },
                { name: "Support & Maintenance", description: "Ongoing support with security updates, performance optimization, and 24/7 technical assistance." },
            ],
        }),

        generateItemListSchema({
            id: "/services/web-design-development/strapi-headless-cms/#solutionsList",
            name: "Strapi Solutions We Build",
            description: "Industry-specific Strapi solutions from e-commerce platforms to SaaS products and multi-platform content delivery.",
            items: [
                { name: "E-commerce Platforms", description: "Headless commerce integrations with Shopify, Medusa, or custom storefronts powered by Strapi content." },
                { name: "Marketing Websites", description: "Lightning-fast marketing sites with dynamic content and A/B testing capabilities." },
                { name: "Mobile Applications", description: "Power iOS and Android apps with real-time content delivery via Strapi REST and GraphQL APIs." },
                { name: "Multi-Platform Delivery", description: "Unified content source for web, mobile, IoT, digital signage, and emerging platforms." },
                { name: "SaaS Products", description: "Build multi-tenant SaaS applications managing user content and configurations with Strapi backend." },
                { name: "Content Portals", description: "Media sites, documentation hubs, and knowledge bases with powerful search and structured content." },
            ],
        }),

        generateHowToSchema({
            name: "Our Strapi Development Process",
            description: "A structured 5-step methodology for building Strapi headless CMS solutions with API-first architecture and omnichannel content delivery.",
            steps: [
                { name: "Discovery & Requirements", text: "Content audit, API planning, and technical specification. Timeline: 1-2 weeks.", url: "https://www.cinuteinfomedia.com/services/web-design-development/strapi-headless-cms/#step-discovery" },
                { name: "Content Modeling", text: "Designing content types, relationships, components, and dynamic zones in the Strapi admin panel.", url: "https://www.cinuteinfomedia.com/services/web-design-development/strapi-headless-cms/#step-modeling" },
                { name: "Strapi Development & Integrations", text: "Custom endpoints, webhooks, plugin development, and third-party service integrations. Timeline: 3-6 weeks.", url: "https://www.cinuteinfomedia.com/services/web-design-development/strapi-headless-cms/#step-development" },
                { name: "Testing & Integration", text: "API testing, frontend integration validation, performance benchmarks, and security auditing.", url: "https://www.cinuteinfomedia.com/services/web-design-development/strapi-headless-cms/#step-testing" },
                { name: "Deploy & Support", text: "Production deployment with monitoring, CI/CD pipelines, and ongoing technical assistance.", url: "https://www.cinuteinfomedia.com/services/web-design-development/strapi-headless-cms/#step-deploy" },
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
        <main className="min-h-screen" style={{ "--page-selection-bg": "#4945FF" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(strapiSchema) }}
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
