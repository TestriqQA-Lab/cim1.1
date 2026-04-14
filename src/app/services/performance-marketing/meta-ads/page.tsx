import Hero from "@/components/services/performance-marketing/meta-ads/Hero";
import ServiceOverview from "@/components/services/performance-marketing/meta-ads/ServiceOverview";
import SolutionTypes from "@/components/services/performance-marketing/meta-ads/SolutionTypes";
import TechStack from "@/components/services/performance-marketing/meta-ads/TechStack";
import Process from "@/components/services/performance-marketing/meta-ads/Process";
import WhyChooseUs from "@/components/services/performance-marketing/meta-ads/WhyChooseUs";
import CTA from "@/components/services/performance-marketing/meta-ads/CTA";

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
    title: 'Meta Ads Agency | Facebook & Instagram Advertising',
    description: 'Reach 3 Billion users with Meta Ads. Leverage Facebook, Instagram, and Messenger to connect with your ideal customers. Meta Business Partner certified. 400% average ROAS across 300+ campaigns, 500+ creatives produced, 100+ weekly data points, dedicated 3-person team per account.',
    url: '/services/performance-marketing/meta-ads',
    keywords: [
        'Meta Ads agency',
        'Facebook advertising',
        'Instagram ads management',
        'Meta Business Partner',
        'Facebook Ads manager',
        'Instagram Reels ads',
        'dynamic product ads',
        'social media advertising',
        'Meta Pixel optimization',
        'Facebook retargeting',
    ],
});

export default function MetaAdsPage() {
    const metaAdsSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Meta Ads Agency | Facebook & Instagram Advertising",
            description: "Reach 3 Billion users with Meta Ads. Leverage Facebook, Instagram, and Messenger to connect with your ideal customers. Meta Business Partner certified. 400% average ROAS across 300+ campaigns, 500+ creatives produced, 100+ weekly data points, dedicated 3-person team per account.",
            urlPath: "/services/performance-marketing/meta-ads",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/performance-marketing/meta-ads/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/performance-marketing/meta-ads/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/performance-marketing/meta-ads/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Performance Marketing", url: "/services/performance-marketing" },
            { name: "Meta Ads", url: "/services/performance-marketing/meta-ads" },
        ], "https://www.cinuteinfomedia.com/services/performance-marketing/meta-ads/#breadcrumb"),

        generateServiceSchema({
            name: "Meta Ads Management Services",
            description: "Reach 3 Billion users with Meta Ads. Leverage Facebook, Instagram, and Messenger to connect with your ideal customers with data-driven strategies delivering exceptional ROAS. Meta Business Partner certified with direct access to Meta support. 400% average ROAS across 300+ campaigns, 500+ creatives produced by in-house team, weekly optimization based on 100+ data points, dedicated 3-person team (strategist, designer, analyst) per account. Tech stack: Meta Ads Manager, Meta Business Suite, Meta Pixel, GA4, Triple Whale, Northbeam, Canva, CapCut, Figma, Midjourney.",
            urlPath: "/services/performance-marketing/meta-ads",
            serviceType: "Meta Ads (Facebook & Instagram) Advertising Management",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Free account audit and discover how to boost your ROAS by 50% or more. Custom Meta Ads management packages based on ad spend level, creative needs, and campaign objectives.",
            },
        }),

        generateItemListSchema({
            id: "/services/performance-marketing/meta-ads/#platformsList",
            name: "Meta Advertising Platforms",
            description: "Full-service advertising management across Facebook, Instagram, and Messenger with precision targeting and creative excellence.",
            items: [
                { name: "Facebook Ads", description: "Precision-targeted campaigns on News Feed, Stories, Marketplace, and Video placements." },
                { name: "Instagram Ads", description: "Visual formats including Reels, Stories, Feed Posts, and Explore placements." },
                { name: "Messenger Ads", description: "Click-to-Chat, Sponsored Messages, Story Ads, and Inbox Ads for direct conversations." },
            ],
        }),

        generateItemListSchema({
            id: "/services/performance-marketing/meta-ads/#campaignObjectivesList",
            name: "Campaign Objectives & Ad Formats",
            description: "Full-funnel Meta Ads campaigns covering Awareness, Consideration, and Conversion objectives across 9+ ad formats including Dynamic Ads, Collection Ads, and Playable Ads.",
            items: [
                { name: "Awareness Campaigns", description: "Reach, Brand Lift, Ad Recall, and Video Views for top-of-funnel visibility." },
                { name: "Consideration Campaigns", description: "Engagement, Traffic, Messages, and Video Views for mid-funnel nurturing." },
                { name: "Conversion Campaigns", description: "Purchases, Leads, Add to Cart, and Checkout for bottom-funnel revenue." },
                { name: "Dynamic Product Ads", description: "Automated product catalog ads showing personalized products to interested shoppers." },
                { name: "Collection Ads", description: "Immersive mobile shopping experience with instant storefront and product browsing." },
                { name: "Catalog Sales Ads", description: "Automated ads from your product feed for retargeting and cross-selling." },
                { name: "Shop Ads", description: "Drive traffic directly to your Facebook or Instagram shop for seamless purchases." },
                { name: "Rewarded Video Ads", description: "High-engagement video ads within the Meta Audience Network for app promotion." },
                { name: "Playable Ads", description: "Interactive try-before-you-buy ad format for apps and gaming advertisers." },
            ],
        }),

        generateHowToSchema({
            name: "Our 6-Step Meta Ads Process",
            description: "A proven 6-step Meta Ads methodology delivering 400% average ROAS across 300+ campaigns with 500+ creatives and weekly optimization cycles.",
            steps: [
                { name: "Discovery & Strategy", text: "Audience research, competitor analysis, and campaign roadmap creation aligned with business goals.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/meta-ads/#step-discovery" },
                { name: "Audience Building", text: "Custom audiences, Lookalike audiences, and interest-based targeting for precision reach.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/meta-ads/#step-audience" },
                { name: "Creative Production", text: "Ad creatives, copy variations, and video content produced with Canva, CapCut, Figma, and Midjourney.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/meta-ads/#step-creative" },
                { name: "Campaign Launch", text: "Meta Pixel configuration, conversion event setup, and structured campaign launch.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/meta-ads/#step-launch" },
                { name: "Optimization", text: "Continuous A/B testing, bid optimization, and creative iteration based on 100+ data points weekly.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/meta-ads/#step-optimization" },
                { name: "Scale & Iterate", text: "Budget scaling, channel expansion, and LTV (Lifetime Value) optimization for sustained growth.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/meta-ads/#step-scale" },
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
        <main style={{ "--page-selection-bg": "#1877f2" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(metaAdsSchema) }}
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
