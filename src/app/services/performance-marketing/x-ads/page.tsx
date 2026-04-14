import Hero from "@/components/services/performance-marketing/x-ads/Hero";
import ServiceOverview from "@/components/services/performance-marketing/x-ads/ServiceOverview";
import SolutionTypes from "@/components/services/performance-marketing/x-ads/SolutionTypes";
import TechStack from "@/components/services/performance-marketing/x-ads/TechStack";
import Process from "@/components/services/performance-marketing/x-ads/Process";
import WhyChooseUs from "@/components/services/performance-marketing/x-ads/WhyChooseUs";
import CTA from "@/components/services/performance-marketing/x-ads/CTA";

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
    title: 'X Ads Agency | Twitter Advertising Services',
    description: 'Ignite the conversation. Connect with the most influential audiences on the world\'s digital town square. #1 platform for brand interaction, viral reach trending, real-time conversations. +28% brand follower growth, +45% launch awareness, 90% video completion rate.',
    url: '/services/performance-marketing/x-ads',
    keywords: [
        'X Ads agency',
        'Twitter advertising services',
        'X Trend Takeover',
        'Twitter PPC management',
        'X conversation ads',
        'Twitter follower campaigns',
        'X vertical video ads',
        'Twitter Amplify sponsorships',
        'X performance ads',
        'real-time social advertising',
    ],
});

export default function XAdsPage() {
    const xAdsSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "X Ads Agency | Twitter Advertising Services",
            description: "Ignite the conversation. Connect with the most influential audiences on the world's digital town square. #1 platform for brand interaction, viral reach trending, real-time conversations. +28% brand follower growth, +45% launch awareness, 90% video completion rate.",
            urlPath: "/services/performance-marketing/x-ads",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/performance-marketing/x-ads/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/performance-marketing/x-ads/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/performance-marketing/x-ads/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Performance Marketing", url: "/services/performance-marketing" },
            { name: "X Ads", url: "/services/performance-marketing/x-ads" },
        ], "https://www.cinuteinfomedia.com/services/performance-marketing/x-ads/#breadcrumb"),

        generateServiceSchema({
            name: "X (Twitter) Ads Management Services",
            description: "Ignite the conversation. Connect with the most influential audiences when they are most receptive. Drive relevance and results on the world's digital town square. #1 platform for brand interaction with viral reach and real-time conversations. +28% brand follower growth, +45% launch awareness, 90% video completion rate. Reach exclusive influential users not active on other social platforms. #1 source for breaking news and product launches. Tech stack: X Ad Composer, Creative Studio, Adobe Premiere, X Pixel, GA4, Moat (Oracle) viewability, Keyword Targeting, Follower Lookalikes, Conversation Targeting.",
            urlPath: "/services/performance-marketing/x-ads",
            serviceType: "X (Twitter) Advertising & Real-Time Marketing",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Custom X Ads packages based on campaign objectives. Full-service management covering Trend Takeover, Vertical Video Ads, Conversation Ads, Amplify Sponsorships, Follower Campaigns, and Performance Ads.",
            },
        }),

        generateItemListSchema({
            id: "/services/performance-marketing/x-ads/#adFormatsList",
            name: "X Ad Formats",
            description: "Six X (Twitter) ad formats that stop the scroll: Trend Takeover, Vertical Video Ads, Conversation Ads, Amplify Sponsorships, Follower Campaigns, and Performance Ads.",
            items: [
                { name: "Trend Takeover", description: "Own the #1 spot on the Explore tab for 24 hours with massive reach and cultural impact." },
                { name: "Vertical Video Ads", description: "Immersive, full-screen video ads for high engagement and scroll-stopping impact." },
                { name: "Conversation Ads", description: "Prompt users to tweet with customizable hashtags and buttons for viral potential." },
                { name: "Amplify Sponsorships", description: "Align with premium video content from top publishers for brand-safe placements." },
                { name: "Follower Campaigns", description: "Promote your account to grow your community with targeted follower acquisition." },
                { name: "Performance Ads", description: "Drive app installs and website clicks with measurable ROI and conversion tracking." },
            ],
        }),

        generateItemListSchema({
            id: "/services/performance-marketing/x-ads/#targetingCategoriesList",
            name: "X Ads Targeting & Campaign Categories",
            description: "Four strategic X Ads campaign categories: product launch (+40% brand recall), app installs with App Cards, cultural relevance real-time engagement, and precision targeting via keyword, conversational, and follower-lookalike.",
            items: [
                { name: "Launch & Connect", description: "Create buzz for new product launches with +40% brand recall using Trend Takeover and Amplify combinations." },
                { name: "App Installs", description: "Drive high-intent app downloads with App Cards and performance-optimized bidding." },
                { name: "Cultural Relevance", description: "Real-time engagement during live events, moments, and trending conversations." },
                { name: "Precision Targeting", description: "Keyword, conversational, and follower-lookalike targeting for precise audience reach." },
            ],
        }),

        generateHowToSchema({
            name: "Our 4-Step X Ads Campaign Velocity Process",
            description: "A fast-execution 4-step X Ads methodology delivering +28% follower growth, +45% launch awareness, and 90% video completion rate through real-time conversation targeting.",
            steps: [
                { name: "Setup & Pixel", text: "Install X Pixel and configure conversion events for precise tracking and attribution.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/x-ads/#step-setup" },
                { name: "Creative Strategy", text: "Design 'Stop the Scroll' assets optimized for mobile with native-feel creatives.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/x-ads/#step-creative" },
                { name: "Launch & Amplify", text: "Deploy campaigns targeting high-intent conversations and trending topics for maximum relevance.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/x-ads/#step-launch" },
                { name: "Analysis & Scale", text: "Optimize based on engagement and CPA metrics, scale winning creatives and audiences.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/x-ads/#step-scale" },
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
        <main className="min-h-screen bg-black" style={{ "--page-selection-bg": "#1D9BF0" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(xAdsSchema) }}
            />
            <Hero />
            <ServiceOverview />
            <SolutionTypes />
            <TechStack />
            <div id="process">
                <Process />
            </div>
            <WhyChooseUs />
            <CTA />
        </main>
    );
}
