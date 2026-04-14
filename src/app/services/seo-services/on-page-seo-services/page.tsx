import Hero from "@/components/services/seo-services/on-page-seo-services/Hero";
import ServiceOverview from "@/components/services/seo-services/on-page-seo-services/ServiceOverview";
import SolutionTypes from "@/components/services/seo-services/on-page-seo-services/SolutionTypes";
import TechStack from "@/components/services/seo-services/on-page-seo-services/TechStack";
import Process from "@/components/services/seo-services/on-page-seo-services/Process";
import WhyChooseUs from "@/components/services/seo-services/on-page-seo-services/WhyChooseUs";
import FAQ from "@/components/services/seo-services/on-page-seo-services/FAQ";
import CTA from "@/components/services/seo-services/on-page-seo-services/CTA";

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
    title: 'Hire Expert On-Page SEO Services | Boost Organic Traffic 2026',
    description: 'Expert On-Page SEO Services for 2026 growth. Bridge the gap between good content and Google\'s #1 spot with E-E-A-T signals and advanced on-site optimization. 250+ SEO elements optimized, 98% Core Web Vitals score, 4.5x traffic growth, 30+ years combined experience.',
    url: '/services/seo-services/on-page-seo-services',
    keywords: [
        'on-page SEO',
        'on-page SEO services',
        'title tag optimization',
        'meta description optimization',
        'content optimization',
        'internal linking',
        'header tags SEO',
        'image optimization SEO',
        'schema markup',
        'core web vitals',
    ],
});

export default function OnPageSEOPage() {
    const onPageSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Hire Expert On-Page SEO Services | Boost Organic Traffic 2026",
            description: "Expert On-Page SEO Services for 2026 growth. Bridge the gap between good content and Google's #1 spot with E-E-A-T signals and advanced on-site optimization. 250+ SEO elements optimized, 98% Core Web Vitals score, 4.5x traffic growth, 30+ years combined experience.",
            urlPath: "/services/seo-services/on-page-seo-services",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/seo-services/on-page-seo-services/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/seo-services/on-page-seo-services/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/seo-services/on-page-seo-services/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "SEO Services", url: "/services/seo-services" },
            { name: "On-Page SEO Services", url: "/services/seo-services/on-page-seo-services" },
        ], "https://www.cinuteinfomedia.com/services/seo-services/on-page-seo-services/#breadcrumb"),

        generateServiceSchema({
            name: "On-Page SEO Services",
            description: "Expert On-Page SEO Services for 2026 growth. We bridge the gap between good content and Google's #1 spot by integrating 2026 E-E-A-T signals and advanced on-site SEO. 250+ SEO elements optimized per site, 98% average Core Web Vitals score, 4.5x traffic growth, 30+ years combined experience, ROI-first 80/20 optimization strategy.",
            urlPath: "/services/seo-services/on-page-seo-services",
            serviceType: "On-Page SEO Optimization",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                price: "1500",
                validFrom: "2025-01-01",
                description: "On-Page SEO services from $1,500 to $5,000+ per month depending on site size and competition. Free on-page SEO audit included. Covers title tags, meta descriptions, image optimization, internal linking, Core Web Vitals, and schema markup.",
            },
        }),

        generateItemListSchema({
            id: "/services/seo-services/on-page-seo-services/#coreServicesList",
            name: "Core On-Page SEO Services",
            description: "Comprehensive on-page SEO from title tag optimization and meta engineering to image optimization, internal linking, Core Web Vitals, and schema markup.",
            items: [
                { name: "Multi-Step Title Tag Optimization", description: "Precision engineering of title tags for maximum click-through rate optimization in SERPs." },
                { name: "Meta Description & Snippet Engineering", description: "Crafting compelling meta descriptions and rich snippets optimized for 2026 search intent." },
                { name: "Performance-First Image Optimization", description: "High-quality visuals that load in milliseconds with proper alt text, compression, and WebP formats." },
                { name: "Advanced Internal Linking Strategy", description: "Semantic silos to distribute link equity and rank priority pages faster with contextual anchor text." },
                { name: "Core Web Vitals & Page Speed", description: "Optimizing LCP, FID/INP, and CLS for a seamless 2026 user experience and 98% CWV scores." },
                { name: "High E-E-A-T Schema Markup", description: "Implementing custom JSON-LD structured data for rich snippets, AI Overviews, and search authority." },
            ],
        }),

        generateItemListSchema({
            id: "/services/seo-services/on-page-seo-services/#industryNichesList",
            name: "Industry Niches We Optimize",
            description: "On-page SEO optimization for e-commerce, SaaS/tech, healthcare/YMYL, law firms, real estate, and WordPress/CMS platforms.",
            items: [
                { name: "E-commerce Websites", description: "Product page optimization, category structure, and conversion-focused on-page SEO for online stores." },
                { name: "SaaS & Tech Companies", description: "Feature page optimization, comparison content, and developer documentation on-page SEO." },
                { name: "Medical Practices & Healthcare", description: "YMYL-compliant on-page SEO with medical content review and patient acquisition focus." },
                { name: "Law Firms & Legal Services", description: "Practice area page optimization and local on-page SEO for legal client acquisition." },
                { name: "Real Estate & Property Portals", description: "Listing page optimization, neighborhood content, and local search on-page signals." },
                { name: "WordPress & CMS Optimization", description: "Platform-specific on-page SEO for WordPress, Webflow, Shopify, and custom CMS sites." },
            ],
        }),

        generateFAQSchema([
            { question: "What is included in on-page SEO services?", answer: "Our services include a comprehensive on-page SEO technical audit, keyword mapping, title tag and meta description optimization, image compression, internal linking, Core Web Vitals fixes, and schema markup implementation." },
            { question: "How much do professional on-page SEO services cost in 2026?", answer: "The on-page SEO cost for business websites in 2026 typically ranges from $1,500 to $5,000+ per month, depending on site size and competition level." },
            { question: "Why is on-page SEO important for website ranking?", answer: "It tells Google exactly what your content is about. Without it, even the best content lacks the relevance signals needed to rank, especially for 2026 AI-driven algorithm updates." },
            { question: "How long does it take to see results from on-page SEO?", answer: "Technical fixes show impact in weeks, but sustainable organic growth typically takes 3-6 months. Clients often see a 20%+ CTR lift within 60 days." },
            { question: "What is the difference between on-page and off-page SEO?", answer: "On-page refers to optimizations made directly on your site (content, HTML, speed), while off-page refers to external signals like backlinks and social proof." },
        ]),

        generateHowToSchema({
            name: "6 Steps to On-Page SEO Dominance",
            description: "A proven 6-step on-page SEO methodology that optimizes 250+ elements per site, achieves 98% Core Web Vitals scores, and delivers 4.5x traffic growth.",
            steps: [
                { name: "Audit", text: "Identify technical bottlenecks from broken tags to thin content through a comprehensive on-page SEO audit.", url: "https://www.cinuteinfomedia.com/services/seo-services/on-page-seo-services/#step-audit" },
                { name: "Keyword Mapping", text: "Assign high-intent keywords to specific pages to avoid cannibalization and maximize relevance.", url: "https://www.cinuteinfomedia.com/services/seo-services/on-page-seo-services/#step-keywords" },
                { name: "Technical Implementation", text: "Hands-on optimization of H1s, meta tags, and advanced on-site techniques for maximum search visibility.", url: "https://www.cinuteinfomedia.com/services/seo-services/on-page-seo-services/#step-technical" },
                { name: "Content & E-E-A-T Enhancement", text: "Elevating content with expert insights, author credentials, and 2026 E-E-A-T signals.", url: "https://www.cinuteinfomedia.com/services/seo-services/on-page-seo-services/#step-content" },
                { name: "Schema Deployment", text: "Adding structured data (JSON-LD) for Featured Snippets, rich results, and AI Overview eligibility.", url: "https://www.cinuteinfomedia.com/services/seo-services/on-page-seo-services/#step-schema" },
                { name: "Monitoring", text: "Daily tracking of rankings, page speed, Core Web Vitals, and on-page performance metrics.", url: "https://www.cinuteinfomedia.com/services/seo-services/on-page-seo-services/#step-monitoring" },
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
        <main style={{ "--page-selection-bg": "#22C55E" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(onPageSchema) }}
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
