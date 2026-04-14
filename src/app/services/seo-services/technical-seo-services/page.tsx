import Hero from "@/components/services/seo-services/technical-seo-services/Hero";
import ServiceOverview from "@/components/services/seo-services/technical-seo-services/ServiceOverview";
import SolutionTypes from "@/components/services/seo-services/technical-seo-services/SolutionTypes";
import TechStack from "@/components/services/seo-services/technical-seo-services/TechStack";
import Process from "@/components/services/seo-services/technical-seo-services/Process";
import WhyChooseUs from "@/components/services/seo-services/technical-seo-services/WhyChooseUs";
import CTA from "@/components/services/seo-services/technical-seo-services/CTA";

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
    title: 'Professional Technical SEO Services 2026 | Technical SEO Agency',
    description: 'Expert Technical SEO Services for 2026 peak performance. Stop letting technical debt bury your rankings. 200+ checkpoint audits, 100% mobile-first, <2s load time, 99.9% uptime, all-green Core Web Vitals. 1M+ pages crawled, 60% average speed boost, 300% traffic growth.',
    url: '/services/seo-services/technical-seo-services',
    keywords: [
        'technical SEO',
        'technical SEO services',
        'technical SEO company',
        'technical SEO agency',
        'website performance analysis',
        'professional website speed optimization services',
        'technical SEO consulting',
        'Core Web Vitals optimization services',
        'technical SEO audit',
        'mobile-first indexing',
    ],
});

export default function TechnicalSEOPage() {
    const techSeoSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Professional Technical SEO Services 2026 | Technical SEO Agency",
            description: "Expert Technical SEO Services for 2026 peak performance. Stop letting technical debt bury your rankings. 200+ checkpoint audits, 100% mobile-first, <2s load time, 99.9% uptime, all-green Core Web Vitals. 1M+ pages crawled, 60% average speed boost, 300% traffic growth.",
            urlPath: "/services/seo-services/technical-seo-services",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/seo-services/technical-seo-services/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/seo-services/technical-seo-services/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/seo-services/technical-seo-services/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "SEO Services", url: "/services/seo-services" },
            { name: "Technical SEO Services", url: "/services/seo-services/technical-seo-services" },
        ], "https://www.cinuteinfomedia.com/services/seo-services/technical-seo-services/#breadcrumb"),

        generateServiceSchema({
            name: "Technical SEO Services",
            description: "Expert Technical SEO Services for 2026 peak performance. We specialize in building a flawless technical foundation that search engines love. From website performance analysis to advanced technical SEO consulting for the global stage. 1M+ pages crawled, 60% average speed boost, 300% traffic growth, 30+ years global expertise, 95% bug-free implementation, 100% mobile-first, <2s load time target, 99.9% server uptime, all-green Core Web Vitals.",
            urlPath: "/services/seo-services/technical-seo-services",
            serviceType: "Technical SEO Audit & Optimization",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Free technical SEO audit with 200+ checkpoint analysis, zero-obligation consultation, and 48-hour delivery of findings. Custom packages for ecommerce, enterprise, SaaS, and international websites.",
            },
        }),

        generateItemListSchema({
            id: "/services/seo-services/technical-seo-services/#coreServicesList",
            name: "Core Technical SEO Services",
            description: "Full-spectrum technical SEO from site speed and mobile-first optimization to HTTPS security, XML sitemaps, international hreflang, and scalable website architecture.",
            items: [
                { name: "Website Performance Analysis & Site Speed", description: "Eliminating bottlenecks with server-side rendering, edge caching, and <2s load time targeting." },
                { name: "Mobile-First Indexing Optimization", description: "100% compliance with Google's mobile-first approach ensuring perfect rendering across all devices." },
                { name: "HTTPS, SSL & Security for SEO", description: "Implementation of HSTS security headers, SSL across all subdomains, and malware protection." },
                { name: "XML Sitemap & Robots.txt Optimization", description: "Guiding search engines to valuable content and preventing crawl waste for efficient indexation." },
                { name: "Technical SEO for International Websites", description: "Hreflang implementation and geo-targeting across US, EU, and APAC for global search visibility." },
                { name: "Scalable Website Architecture", description: "Internal link structure optimization and authority distribution for sites of all sizes." },
            ],
        }),

        generateItemListSchema({
            id: "/services/seo-services/technical-seo-services/#industrySolutionsList",
            name: "Industry-Specific Technical SEO Solutions",
            description: "Tailored technical SEO for ecommerce, large enterprise, news & media, SaaS, and marketplace/real estate platforms.",
            items: [
                { name: "Ecommerce", description: "Handling large-scale catalogs (Shopify, Magento), faceted navigation, and canonical error resolution." },
                { name: "Large Enterprise", description: "Crawl budget management and CDN configuration for sites with 100K+ pages." },
                { name: "News & Media", description: "Accelerated indexation and News-optimized schema for top-story placement in Google News." },
                { name: "SaaS", description: "Performance optimization for JavaScript-heavy applications and high-conversion landing pages." },
                { name: "Marketplace & Real Estate", description: "Efficient crawling and indexation for high-volume, dynamic listing platforms." },
            ],
        }),

        generateHowToSchema({
            name: "6 Steps to Flawless Technical Performance",
            description: "A proven 6-step technical SEO methodology delivering 60% average speed boost, 300% traffic growth, and all-green Core Web Vitals through 200+ checkpoint audits.",
            steps: [
                { name: "Comprehensive Technical SEO Audit", text: "Checking 200+ checkpoints from 404 errors to server response times to identify every technical issue.", url: "https://www.cinuteinfomedia.com/services/seo-services/technical-seo-services/#step-audit" },
                { name: "Crawl & Indexability Optimization", text: "Fixing robots.txt, XML sitemaps, and ensuring efficient crawling and proper indexation by search engines.", url: "https://www.cinuteinfomedia.com/services/seo-services/technical-seo-services/#step-crawl" },
                { name: "Speed & Core Web Vitals Fixes", text: "Implementation of speed optimizations to hit all-green LCP, INP, and CLS scores.", url: "https://www.cinuteinfomedia.com/services/seo-services/technical-seo-services/#step-speed" },
                { name: "Security & SSL Deployment", text: "Robust HTTPS and SSL implementation across all subdomains with HSTS security headers.", url: "https://www.cinuteinfomedia.com/services/seo-services/technical-seo-services/#step-security" },
                { name: "Schema Markup Implementation", text: "Deploying JSON-LD structured data for rich snippets, FAQ rich results, and AI Overview visibility.", url: "https://www.cinuteinfomedia.com/services/seo-services/technical-seo-services/#step-schema" },
                { name: "Ongoing Technical Monitoring", text: "Regular audits to prevent new technical debt from deployments and algorithm updates.", url: "https://www.cinuteinfomedia.com/services/seo-services/technical-seo-services/#step-monitoring" },
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
        <main style={{ "--page-selection-bg": "#8B5CF6" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(techSeoSchema) }}
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
