import Hero from "@/components/services/social-media-marketing-services/facebook-marketing-services/Hero";
import ServiceOverview from "@/components/services/social-media-marketing-services/facebook-marketing-services/ServiceOverview";
import SolutionTypes from "@/components/services/social-media-marketing-services/facebook-marketing-services/SolutionTypes";
import TechStack from "@/components/services/social-media-marketing-services/facebook-marketing-services/TechStack";
import Process from "@/components/services/social-media-marketing-services/facebook-marketing-services/Process";
import WhyChooseUs from "@/components/services/social-media-marketing-services/facebook-marketing-services/WhyChooseUs";
import CTA from "@/components/services/social-media-marketing-services/facebook-marketing-services/CTA";

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
    title: 'Facebook Marketing Services | Lead Gen & Ads Management Agency',
    description: 'Scale your business with premier Facebook Marketing Services. Meta Business Partner agency leveraging latest Meta AI algorithms and high-E-E-A-T content principles. 3B+ Meta users, 8.5x average ROAS, 45% lower CPA, 500+ campaigns managed.',
    url: '/services/social-media-marketing-services/facebook-marketing-services',
    keywords: [
        'Facebook marketing services',
        'Facebook marketing agency',
        'Facebook ads management services',
        'Facebook marketing company',
        'Facebook marketing expert',
        'social media strategy',
        'Meta ads management',
    ],
});

export default function FacebookMarketingPage() {
    const fbSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Facebook Marketing Services | Lead Gen & Ads Management Agency",
            description: "Scale your business with premier Facebook Marketing Services. Meta Business Partner agency leveraging latest Meta AI algorithms and high-E-E-A-T content principles. 3B+ Meta users, 8.5x average ROAS, 45% lower CPA, 500+ campaigns managed.",
            urlPath: "/services/social-media-marketing-services/facebook-marketing-services",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/facebook-marketing-services/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/facebook-marketing-services/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/facebook-marketing-services/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Social Media Marketing Services", url: "/services/social-media-marketing-services" },
            { name: "Facebook Marketing Services", url: "/services/social-media-marketing-services/facebook-marketing-services" },
        ], "https://www.cinuteinfomedia.com/services/social-media-marketing-services/facebook-marketing-services/#breadcrumb"),

        generateServiceSchema({
            name: "Facebook Marketing Services",
            description: "Scale your business with premier Facebook Marketing Services. As a Meta Business Partner, we leverage the latest Meta AI algorithms and high-E-E-A-T content principles to drive measurable growth. 3B+ Meta daily active users, 8.5x average ROAS, 45% lower CPA, 500+ campaigns managed.",
            urlPath: "/services/social-media-marketing-services/facebook-marketing-services",
            serviceType: "Facebook Marketing & Ads Management",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Free Facebook account audit available. Custom strategies, no long-term contracts, and performance guarantees. Includes lead generation ads, e-commerce DPAs, video/Reels campaigns, and retargeting.",
            },
        }),

        generateItemListSchema({
            id: "/services/social-media-marketing-services/facebook-marketing-services/#adServicesList",
            name: "Comprehensive Facebook Advertising Services",
            description: "Full-spectrum Facebook ad services from lead generation and e-commerce catalog ads to video campaigns, lookalike audiences, retargeting, and messenger ads.",
            items: [
                { name: "Lead Generation Ads", description: "High-intent lead forms with CRM sync achieving 50% CPL reduction through optimized targeting." },
                { name: "E-commerce & Catalog Ads (DPAs)", description: "Advantage+ Shopping and dynamic retargeting delivering 12x ROAS growth for product catalogs." },
                { name: "Video & Reels Campaigns", description: "Thumb-stopping short-form video content driving 80% higher engagement across Facebook and Instagram." },
                { name: "Lookalike & Custom Audiences", description: "Targeting high-value mirror audiences for 250% higher CTR using Meta's AI-powered audience tools." },
                { name: "Retargeting & Remarketing", description: "Abandoned cart recovery and cross-device tracking delivering 3x conversion increase." },
                { name: "Messenger & WhatsApp Ads", description: "Conversational commerce and automated chat flows achieving 70% higher open rates." },
            ],
        }),

        generateItemListSchema({
            id: "/services/social-media-marketing-services/facebook-marketing-services/#industrySolutionsList",
            name: "Industry-Specific Facebook Marketing Solutions",
            description: "Tailored Facebook marketing solutions for e-commerce, B2B, real estate, education, healthcare, and professional services.",
            items: [
                { name: "E-commerce Brands", description: "Product catalog sync and Shopify integration with 12x ROAS growth through dynamic product ads." },
                { name: "B2B Companies", description: "Whitepaper lead generation and LinkedIn mirror targeting achieving $12 average CPL." },
                { name: "Real Estate", description: "Map-based targeting and virtual tour ads with 90% lead quality rate for property listings." },
                { name: "Education & Courses", description: "Enrollment and webinar funnels delivering 300% scaling results for educational institutions." },
                { name: "Healthcare Services", description: "HIPAA-compliant strategies and patient outreach campaigns for healthcare providers." },
                { name: "Professional Services", description: "Authority building campaigns for consulting, legal, and financial services firms." },
            ],
        }),

        generateHowToSchema({
            name: "Our 6-Phase Facebook Ads Execution Process",
            description: "A proven 6-phase execution methodology for Facebook marketing that has delivered 500+ campaigns with 8.5x average ROAS and 45% lower CPA.",
            steps: [
                { name: "Account Audit & Research", text: "Deep-dive audit of existing Facebook ad accounts, competitor analysis, and opportunity identification. Timeline: 1 week.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/facebook-marketing-services/#step-audit" },
                { name: "Strategy & Audience Building", text: "Funnel architecture design, target persona development, and custom/lookalike audience creation. Timeline: 1 week.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/facebook-marketing-services/#step-strategy" },
                { name: "Creative Development", text: "Designing high-performance ad visuals, persuasive copy, and A/B test variants. Timeline: 2 weeks.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/facebook-marketing-services/#step-creative" },
                { name: "Launch & Tracking", text: "Technical setup, Facebook Pixel installation, Conversion API (CAPI) validation, and campaign launch. Ongoing.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/facebook-marketing-services/#step-launch" },
                { name: "Optimization & Scaling", text: "Daily performance monitoring, budget re-allocation, and audience expansion for maximum ROI. Ongoing.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/facebook-marketing-services/#step-optimization" },
                { name: "Reporting & Iteration", text: "Transparent BI dashboards, monthly strategy reviews, and data-driven campaign iterations. Monthly.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/facebook-marketing-services/#step-reporting" },
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
        <main style={{ "--page-selection-bg": "#1877F2" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(fbSchema) }}
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
