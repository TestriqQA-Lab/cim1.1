import Hero from "@/components/services/seo-services/ecommerce-seo-services/Hero";
import ServiceOverview from "@/components/services/seo-services/ecommerce-seo-services/ServiceOverview";
import SolutionTypes from "@/components/services/seo-services/ecommerce-seo-services/SolutionTypes";
import TechStack from "@/components/services/seo-services/ecommerce-seo-services/TechStack";
import Process from "@/components/services/seo-services/ecommerce-seo-services/Process";
import WhyChooseUs from "@/components/services/seo-services/ecommerce-seo-services/WhyChooseUs";
import FAQ from "@/components/services/seo-services/ecommerce-seo-services/FAQ";
import CTA from "@/components/services/seo-services/ecommerce-seo-services/CTA";

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
    title: 'Ecommerce SEO Services | Shopify, Magento & WooCommerce 2026',
    description: 'Turn traffic into revenue with data-driven ecommerce SEO optimization. 200% average ROI, $50M+ revenue driven, 10K+ top rankings, 300%+ organic revenue increase in 6 months, 50+ client case studies, 10,000+ product pages managed at scale.',
    url: '/services/seo-services/ecommerce-seo-services',
    keywords: [
        'ecommerce SEO services',
        'Shopify SEO',
        'Magento SEO',
        'WooCommerce SEO',
        'online store optimization',
        'product page SEO',
        'technical ecommerce audit',
        'ecommerce SEO agency',
        'BigCommerce SEO',
        'ecommerce conversion rate optimization',
    ],
});

export default function EcommerceSEOPage() {
    const ecommerceSeoSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Ecommerce SEO Services | Shopify, Magento & WooCommerce 2026",
            description: "Turn traffic into revenue with data-driven ecommerce SEO optimization. 200% average ROI, $50M+ revenue driven, 10K+ top rankings, 300%+ organic revenue increase in 6 months, 50+ client case studies, 10,000+ product pages managed at scale.",
            urlPath: "/services/seo-services/ecommerce-seo-services",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/seo-services/ecommerce-seo-services/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/seo-services/ecommerce-seo-services/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/seo-services/ecommerce-seo-services/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "SEO Services", url: "/services/seo-services" },
            { name: "Ecommerce SEO Services", url: "/services/seo-services/ecommerce-seo-services" },
        ], "https://www.cinuteinfomedia.com/services/seo-services/ecommerce-seo-services/#breadcrumb"),

        generateServiceSchema({
            name: "Ecommerce SEO Services",
            description: "Turn traffic into revenue with data-driven ecommerce SEO optimization delivering 200% average ROI. $50M+ revenue driven through strategic product page SEO, technical fixes, and conversion-focused strategies. 10K+ top rankings achieved, 300%+ average increase in organic revenue in first 6 months, 50+ client case studies, 10,000+ product pages managed at scale. Shopify, Magento, WooCommerce, and BigCommerce expertise.",
            urlPath: "/services/seo-services/ecommerce-seo-services",
            serviceType: "Ecommerce SEO & Product Page Optimization",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                price: "2500",
                validFrom: "2025-01-01",
                description: "Ecommerce SEO services from $2,500 to $15,000+ per month depending on SKU count, competition, and platform complexity. Free ecommerce SEO audit included with technical issues, keyword opportunities, revenue potential, and custom roadmap to double organic sales.",
            },
        }),

        generateItemListSchema({
            id: "/services/seo-services/ecommerce-seo-services/#coreServicesList",
            name: "Core Ecommerce SEO Services",
            description: "Full-spectrum ecommerce SEO from product page optimization and faceted navigation to technical SEO, schema markup, mobile-first speed, and conversion rate optimization.",
            items: [
                { name: "Product Page Optimization", description: "Compelling titles, descriptions, and meta tags optimized for high-intent buyer keywords and semantic search." },
                { name: "Category Architecture & Faceted Navigation SEO", description: "Canonical tags, parameter handling, and crawl budget optimization to solve faceted navigation issues." },
                { name: "Technical SEO for Ecommerce Websites", description: "Identifying indexing issues, duplicate content, orphaned products, and optimizing Core Web Vitals (LCP, FID, CLS)." },
                { name: "Schema Markup for Ecommerce Products", description: "Product, Review, Offer, and Breadcrumb structured data for rich snippets increasing CTR by 30-40%." },
                { name: "Mobile-First Ecommerce SEO & Page Speed", description: "Sub-2-second load times through image optimization, lazy loading, and caching strategies." },
                { name: "Ecommerce Conversion Rate Optimization (CRO)", description: "A/B testing layouts, CTA optimization, and streamlined checkout flows using heat mapping and behavior analysis." },
            ],
        }),

        generateItemListSchema({
            id: "/services/seo-services/ecommerce-seo-services/#platformExpertiseList",
            name: "Ecommerce Platform & Industry Expertise",
            description: "Specialized ecommerce SEO for Shopify, Magento, WooCommerce, and BigCommerce platforms across fashion, electronics, health, and home industries.",
            items: [
                { name: "Shopify SEO", description: "Liquid structure optimization, collection page fixes, and SMB/DTC-focused SEO strategies." },
                { name: "Magento SEO", description: "Enterprise-scale optimization for 10K+ SKUs with Varnish caching and complex catalog management." },
                { name: "WooCommerce SEO", description: "WordPress flexibility with content-heavy SEO strategies and plugin optimization." },
                { name: "BigCommerce SEO", description: "SaaS excellence with mid-market focus and headless commerce builds." },
                { name: "Fashion & Apparel", description: "Visual search optimization, seasonal collections, and style-based product discovery." },
                { name: "Electronics & Tech", description: "Specification-heavy product optimization and comparison content strategies." },
                { name: "Health & Beauty", description: "Regulatory compliance content and ingredient-focused SEO for health products." },
                { name: "Home & Furniture", description: "Style guides, room inspiration content, and visual merchandising SEO." },
            ],
        }),

        generateFAQSchema([
            { question: "What is ecommerce SEO and why is it important?", answer: "Ecommerce SEO optimizes online stores for product searches. It is critical as 44% of online shoppers start with Google, organic search drives 37% of ecommerce traffic with a 2.4% conversion rate." },
            { question: "How much do ecommerce SEO services cost in 2026?", answer: "Ecommerce SEO services cost $2,500 to $15,000+ per month depending on SKU count, competition level, and platform complexity." },
            { question: "How do I optimize my ecommerce product pages for SEO?", answer: "Write unique 300+ word descriptions, use high-res images with descriptive alt text, implement Product schema markup, and ensure fast mobile response times." },
            { question: "What is the best ecommerce platform for SEO in 2026?", answer: "Shopify is best for SMB/DTC brands, WooCommerce for content-heavy stores, Magento for enterprise with 100K+ SKUs, and BigCommerce for mid-market businesses." },
            { question: "How long does it take to see results from ecommerce SEO?", answer: "Technical wins are visible in 60-90 days. Significant organic revenue growth typically materializes in 6-12 months of consistent optimization." },
            { question: "What are ecommerce SEO ranking factors for 2026?", answer: "Core Web Vitals performance, semantic search relevance, Product schema completeness, and high-quality editorial backlinks are the key ranking factors." },
            { question: "Do you offer ecommerce SEO for international markets?", answer: "Yes, our international ecommerce SEO includes hreflang implementation, multi-regional technical SEO, and localized keyword research for global markets." },
        ]),

        generateHowToSchema({
            name: "Our 6-Step Ecommerce SEO Playbook",
            description: "A proven 6-step ecommerce SEO playbook that has driven $50M+ in revenue, 200% average ROI, and 300%+ organic revenue growth in the first 6 months.",
            steps: [
                { name: "Comprehensive Technical Ecommerce SEO Audit", text: "Deep crawl using enterprise tools to create a 40+ page audit report with prioritized fixes.", url: "https://www.cinuteinfomedia.com/services/seo-services/ecommerce-seo-services/#step-audit" },
                { name: "Keyword Research & Mapping", text: "Researching transactional keywords and mapping them to products and categories for 2026 ranking factors.", url: "https://www.cinuteinfomedia.com/services/seo-services/ecommerce-seo-services/#step-keywords" },
                { name: "Site Architecture & Internal Linking Optimization", text: "Hub-and-spoke linking, fixing orphan pages, and refining breadcrumb navigation.", url: "https://www.cinuteinfomedia.com/services/seo-services/ecommerce-seo-services/#step-architecture" },
                { name: "On-Page Optimization & Schema Implementation", text: "Optimized titles (50-60 chars), meta descriptions (150-155 chars), and 300+ word unique product descriptions.", url: "https://www.cinuteinfomedia.com/services/seo-services/ecommerce-seo-services/#step-onpage" },
                { name: "Ecommerce Link Building & Authority Services", text: "Digital PR, influencer outreach, and building high-quality editorial links from relevant niches.", url: "https://www.cinuteinfomedia.com/services/seo-services/ecommerce-seo-services/#step-links" },
                { name: "Revenue Reporting & Monthly Maintenance", text: "Tracking organic revenue, ROI, and technical health scores with monthly reporting.", url: "https://www.cinuteinfomedia.com/services/seo-services/ecommerce-seo-services/#step-reporting" },
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
        <main style={{ "--page-selection-bg": "#0EA5E9" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(ecommerceSeoSchema) }}
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
