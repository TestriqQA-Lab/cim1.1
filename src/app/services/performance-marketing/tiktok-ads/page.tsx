import Hero from "@/components/services/performance-marketing/tiktok-ads/Hero";
import ServiceOverview from "@/components/services/performance-marketing/tiktok-ads/ServiceOverview";
import SolutionTypes from "@/components/services/performance-marketing/tiktok-ads/SolutionTypes";
import TechStack from "@/components/services/performance-marketing/tiktok-ads/TechStack";
import Process from "@/components/services/performance-marketing/tiktok-ads/Process";
import WhyChooseUs from "@/components/services/performance-marketing/tiktok-ads/WhyChooseUs";
import CTA from "@/components/services/performance-marketing/tiktok-ads/CTA";

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
    title: 'TikTok Ads Agency | TikTok Advertising Services',
    description: 'Go viral with TikTok Ads. Capture Gen Z and Millennials with short-form video ads that drive engagement, awareness, and conversions. TikTok Marketing Partner certified. 1B+ monthly active users, 2.5% avg CTR, 500+ videos created, 50M+ views generated.',
    url: '/services/performance-marketing/tiktok-ads',
    keywords: [
        'TikTok Ads agency',
        'TikTok advertising services',
        'TikTok Marketing Partner',
        'In-Feed ads TikTok',
        'Spark Ads TikTok',
        'TikTok Shop ads',
        'short-form video advertising',
        'TikTok PPC management',
        'Branded Hashtag Challenge',
        'TikTok lead generation',
    ],
});

export default function TikTokAdsPage() {
    const tiktokAdsSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "TikTok Ads Agency | TikTok Advertising Services",
            description: "Go viral with TikTok Ads. Capture Gen Z and Millennials with short-form video ads that drive engagement, awareness, and conversions. TikTok Marketing Partner certified. 1B+ monthly active users, 2.5% avg CTR, 500+ videos created, 50M+ views generated.",
            urlPath: "/services/performance-marketing/tiktok-ads",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/performance-marketing/tiktok-ads/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/performance-marketing/tiktok-ads/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/performance-marketing/tiktok-ads/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Performance Marketing", url: "/services/performance-marketing" },
            { name: "TikTok Ads", url: "/services/performance-marketing/tiktok-ads" },
        ], "https://www.cinuteinfomedia.com/services/performance-marketing/tiktok-ads/#breadcrumb"),

        generateServiceSchema({
            name: "TikTok Ads Management Services",
            description: "Go viral with TikTok Ads. Capture Gen Z and Millennials with short-form video ads that drive engagement, awareness, and conversions. Certified TikTok Marketing Partner with direct platform support. 1B+ monthly active users reached, 2.5% average CTR, 500+ scroll-stopping videos created, 50M+ views generated. In-house creative production team that lives on the platform and knows the culture. Full transparency with 24/7 access to real-time performance dashboards. Tech stack: TikTok Ads Manager, CapCut, Canva, Figma, Triple Whale, Northbeam, TikTok Pixel & Events API.",
            urlPath: "/services/performance-marketing/tiktok-ads",
            serviceType: "TikTok Advertising & Short-Form Video Marketing",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Free TikTok Ads audit with account analysis, creative review, and growth roadmap. Custom packages covering In-Feed Ads, TopView, Spark Ads, Branded Hashtag Challenges, Shopping Ads, and Lead Gen campaigns.",
            },
        }),

        generateItemListSchema({
            id: "/services/performance-marketing/tiktok-ads/#adSolutionsList",
            name: "TikTok Ad Solutions",
            description: "Six TikTok ad formats: In-Feed Ads, TopView premium placement, Spark Ads for organic boosting, Branded Hashtag Challenges, Shopping Ads, and Lead Generation.",
            items: [
                { name: "In-Feed Ads", description: "Native video ads in the 'For You' feed — up to 60 seconds with CTA buttons, sound-on, and full-screen experience." },
                { name: "TopView Ads", description: "Premium first-view placement for maximum visibility — 60s video, 100% share of voice, maximum awareness." },
                { name: "Spark Ads", description: "Boosting organic posts or creator content for authentic engagement — native feel, social proof, Duets enabled." },
                { name: "Branded Hashtag Challenge", description: "Viral UGC-driven campaigns with 6-day run, custom landing page, and massive viral potential." },
                { name: "Shopping Ads", description: "Product-focused ads with catalog integration — product tags, catalog sync, and dynamic product ads." },
                { name: "Lead Generation", description: "Native instant forms for low-friction lead capture — in-app forms, CRM integration, and pre-filled data." },
            ],
        }),

        generateItemListSchema({
            id: "/services/performance-marketing/tiktok-ads/#campaignObjectivesList",
            name: "TikTok Campaign Objectives",
            description: "Full-funnel TikTok campaign objectives: brand awareness, community building, e-commerce sales, traffic & clicks, app installs, and retargeting.",
            items: [
                { name: "Brand Awareness", description: "Reach and frequency optimization with Brand Lift studies for maximum top-of-funnel impact." },
                { name: "Community Building", description: "Driving follower growth and profile engagement to build loyal brand communities." },
                { name: "E-commerce Sales", description: "TikTok Shop integration and Catalog Sales for direct-to-consumer conversions." },
                { name: "Traffic & Clicks", description: "Optimized landing page visits with Conversion API tracking for precise measurement." },
                { name: "App Installs", description: "Driving quality app downloads and in-app event optimization." },
                { name: "Retargeting", description: "Re-engaging past viewers and website visitors with Lookalike audience expansion." },
            ],
        }),

        generateHowToSchema({
            name: "Our 6-Step TikTok Ads Process",
            description: "A proven 6-step TikTok Ads methodology delivering 2.5% avg CTR, 50M+ views, and 500+ scroll-stopping videos for brands targeting Gen Z and Millennials.",
            steps: [
                { name: "Discovery & Research", text: "Account audit, audience research, and competitor analysis to identify viral opportunity gaps.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/tiktok-ads/#step-discovery" },
                { name: "Strategy Development", text: "Building content pillars, targeting plans, and budget allocation aligned with business goals.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/tiktok-ads/#step-strategy" },
                { name: "Creative Production", text: "Producing native-style scroll-stopping video ads that feel organic to the TikTok platform.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/tiktok-ads/#step-creative" },
                { name: "Campaign Launch", text: "Technical implementation with TikTok Pixel and Events API for precise conversion tracking.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/tiktok-ads/#step-launch" },
                { name: "Optimize & Test", text: "Continuous A/B testing of creatives, audiences, and bids to maximize ROI.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/tiktok-ads/#step-optimize" },
                { name: "Scale & Report", text: "Aggressive scaling of winning creatives with transparent weekly performance reporting.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/tiktok-ads/#step-scale" },
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
        <main style={{ "--page-selection-bg": "#ff0050" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(tiktokAdsSchema) }}
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
