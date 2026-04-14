import Hero from "@/components/services/seo-services/seo-content-writing-services/Hero";
import ServiceOverview from "@/components/services/seo-services/seo-content-writing-services/ServiceOverview";
import SolutionTypes from "@/components/services/seo-services/seo-content-writing-services/SolutionTypes";
import TechStack from "@/components/services/seo-services/seo-content-writing-services/TechStack";
import Process from "@/components/services/seo-services/seo-content-writing-services/Process";
import WhyChooseUs from "@/components/services/seo-services/seo-content-writing-services/WhyChooseUs";
import CTA from "@/components/services/seo-services/seo-content-writing-services/CTA";

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
    title: 'SEO Content Services | Content SEO Agency & Writing 2026 | +200% ROI',
    description: 'Drive exponential ROI with strategic SEO content. Precision-engineered content that ranks #1, satisfies 2026 Google E-E-A-T signals, and converts high-intent traffic. 5M+ words written, $10M+ revenue driven, 2x content ROI, 10x traffic growth, 200% engagement lift.',
    url: '/services/seo-services/seo-content-writing-services',
    keywords: [
        'content SEO',
        'SEO content services',
        'blog writing services',
        'content strategy',
        'SEO copywriting agency',
        'topic clusters SEO',
        'keyword research for content',
        'content marketing',
        'EEAT content strategy',
        'semantic content writing',
    ],
});

export default function ContentSEOPage() {
    const contentSeoSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "SEO Content Services | Content SEO Agency & Writing 2026 | +200% ROI",
            description: "Drive exponential ROI with strategic SEO content. Precision-engineered content that ranks #1, satisfies 2026 Google E-E-A-T signals, and converts high-intent traffic. 5M+ words written, $10M+ revenue driven, 2x content ROI, 10x traffic growth, 200% engagement lift.",
            urlPath: "/services/seo-services/seo-content-writing-services",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/seo-services/seo-content-writing-services/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/seo-services/seo-content-writing-services/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/seo-services/seo-content-writing-services/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "SEO Services", url: "/services/seo-services" },
            { name: "SEO Content Writing Services", url: "/services/seo-services/seo-content-writing-services" },
        ], "https://www.cinuteinfomedia.com/services/seo-services/seo-content-writing-services/#breadcrumb"),

        generateServiceSchema({
            name: "SEO Content Writing Services",
            description: "Drive exponential ROI with strategic SEO content. We craft precision-engineered content that ranks #1 globally, satisfies 2026 Google E-E-A-T signals, and converts high-intent traffic into loyal customers. 5M+ words written, $10M+ revenue driven, 2x content ROI in 12 months, 10x content traffic growth, 200% engagement rate lift, 30% lift in MQLs within 6 months, 100% original human-verified content, 50+ enterprise-scale projects.",
            urlPath: "/services/seo-services/seo-content-writing-services",
            serviceType: "SEO Content Strategy, Writing & Optimization",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Free website content health audit and free content strategy audit available. Custom packages include SEO content strategy, long-form article writing (1500-2500 words), content optimization, SEO copywriting, content audits, and ongoing content refresh services.",
            },
        }),

        generateItemListSchema({
            id: "/services/seo-services/seo-content-writing-services/#coreServicesList",
            name: "Core SEO Content Services",
            description: "Full-spectrum SEO content from strategy and writing to optimization, copywriting, audits, and content refresh aligned with 2026 Google E-E-A-T guidelines.",
            items: [
                { name: "SEO Content Strategy", description: "Topic clusters, gap analysis, and 2026 trend forecasting for dominant topical authority." },
                { name: "SEO Content Writing Services", description: "High-E-E-A-T, long-form articles (1500-2500 words) with data-driven insights driving 300%+ traffic growth." },
                { name: "Content Optimization Services", description: "Metadata refresh, internal link audits, and LSI integration for 50%+ rank recovery." },
                { name: "SEO Copywriting Agency", description: "Conversion-focused landing pages elevating CTR by 20% and conversion by 15%." },
                { name: "SEO Content Audit", description: "Technical readiness and E-E-A-T scoring to identify high-ROI low-hanging fruits." },
                { name: "SEO Content Refresh", description: "Post-2025 algorithm alignment and stat updates to maintain AI Overview leadership." },
            ],
        }),

        generateItemListSchema({
            id: "/services/seo-services/seo-content-writing-services/#industriesList",
            name: "Industries Mastered",
            description: "Industry-specific SEO content expertise for B2B SaaS/technology, e-commerce, law firms, medical practices, real estate, and education/non-profits.",
            items: [
                { name: "B2B Technology & SaaS", description: "High-convert SEO content for B2B lead generation with 95%+ accuracy for fintech." },
                { name: "E-commerce Brands", description: "Strategic product descriptions and high-intent buying guides for online stores." },
                { name: "Law Firms", description: "Authoritative content following strict legal compliance and expertise benchmarks." },
                { name: "Medical Practices", description: "High-trust YMYL standard content for healthcare and medical services." },
                { name: "Real Estate", description: "Hyper-local SEO content to dominate local property searches." },
                { name: "Education & Non-Profits", description: "Purpose-driven narratives and educational SEO clusters for academic institutions." },
            ],
        }),

        generateHowToSchema({
            name: "The 6-Phase Content Lifecycle",
            description: "A proven 6-phase strategic content lifecycle that has produced 5M+ words, driven $10M+ revenue, and delivered 2x content ROI in 12 months.",
            steps: [
                { name: "Deep Search Intent Analysis", text: "Analyzing the 'why' behind the search to identify missed opportunities and user pain points.", url: "https://www.cinuteinfomedia.com/services/seo-services/seo-content-writing-services/#step-intent" },
                { name: "Strategy & Topic Clusters", text: "Creating pillar-cluster patterns to distribute topical authority across the domain.", url: "https://www.cinuteinfomedia.com/services/seo-services/seo-content-writing-services/#step-strategy" },
                { name: "High-E-E-A-T Content Creation", text: "Subject matter experts craft long-form content (1500-2500 words) solving user pain points with data-driven insights.", url: "https://www.cinuteinfomedia.com/services/seo-services/seo-content-writing-services/#step-creation" },
                { name: "Semantic Content Optimization", text: "Natural LSI and semantic keyword integration using Surfer SEO and Clearscope for search dominance.", url: "https://www.cinuteinfomedia.com/services/seo-services/seo-content-writing-services/#step-optimization" },
                { name: "Performance & Engagement Tracking", text: "Monitoring metrics and dwell time to ensure content is read, engaged with, and acted upon.", url: "https://www.cinuteinfomedia.com/services/seo-services/seo-content-writing-services/#step-tracking" },
                { name: "Continuous SEO Content Refresh", text: "Regular updates to align with 2026 Google guidelines and maintain AI Overview leadership.", url: "https://www.cinuteinfomedia.com/services/seo-services/seo-content-writing-services/#step-refresh" },
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
        <main style={{ "--page-selection-bg": "#10b981" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSeoSchema) }}
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
