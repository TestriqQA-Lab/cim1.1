import Hero from "@/components/services/performance-marketing/youtube-ads/Hero";
import ServiceOverview from "@/components/services/performance-marketing/youtube-ads/ServiceOverview";
import SolutionTypes from "@/components/services/performance-marketing/youtube-ads/SolutionTypes";
import TechStack from "@/components/services/performance-marketing/youtube-ads/TechStack";
import Process from "@/components/services/performance-marketing/youtube-ads/Process";
import WhyChooseUs from "@/components/services/performance-marketing/youtube-ads/WhyChooseUs";
import CTA from "@/components/services/performance-marketing/youtube-ads/CTA";

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
    title: 'YouTube Ads Agency | YouTube Advertising Services',
    description: 'Captivate with YouTube Ads. Leverage the world\'s second-largest search engine to reach 2B+ monthly active users with compelling video content. +40% brand recall, 2x leads, 3.5x ROAS, -20% CPI, +50% CTR. Video experts, precise targeting, full-funnel strategies, fast turnaround, transparent reporting.',
    url: '/services/performance-marketing/youtube-ads',
    keywords: [
        'YouTube Ads agency',
        'YouTube advertising services',
        'TrueView ads management',
        'YouTube video advertising',
        'Bumper ads YouTube',
        'YouTube Masthead ads',
        'video ad production',
        'YouTube PPC management',
        'YouTube remarketing',
        'Performance Max video',
    ],
});

export default function YouTubeAdsPage() {
    const youtubeAdsSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "YouTube Ads Agency | YouTube Advertising Services",
            description: "Captivate with YouTube Ads. Leverage the world's second-largest search engine to reach 2B+ monthly active users with compelling video content. +40% brand recall, 2x leads, 3.5x ROAS, -20% CPI, +50% CTR. Video experts, precise targeting, full-funnel strategies, fast turnaround, transparent reporting.",
            urlPath: "/services/performance-marketing/youtube-ads",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/performance-marketing/youtube-ads/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/performance-marketing/youtube-ads/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/performance-marketing/youtube-ads/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Performance Marketing", url: "/services/performance-marketing" },
            { name: "YouTube Ads", url: "/services/performance-marketing/youtube-ads" },
        ], "https://www.cinuteinfomedia.com/services/performance-marketing/youtube-ads/#breadcrumb"),

        generateServiceSchema({
            name: "YouTube Ads Management Services",
            description: "Captivate with YouTube Ads. Leverage the world's second-largest search engine to reach 2B+ monthly active users with compelling video content. Specialized team of video strategists and editors delivering +40% brand recall, 2x leads, 3.5x ROAS, -20% CPI, and +50% CTR. Advanced audience segmentation, data-driven optimization based on view rate, CTR, and conversions, full-funnel strategies for awareness, consideration, and action. Tech stack: Google Ads Campaign Manager, YouTube Studio, DV360 Programmatic.",
            urlPath: "/services/performance-marketing/youtube-ads",
            serviceType: "YouTube Video Advertising & Campaign Management",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Get your custom YouTube Ads proposal. Full-service packages covering TrueView In-Stream, Video Discovery, Bumper Ads, Masthead, Non-Skippable, and Performance Max campaigns with video production, targeting, and optimization.",
            },
        }),

        generateItemListSchema({
            id: "/services/performance-marketing/youtube-ads/#adFormatsList",
            name: "YouTube Ad Formats",
            description: "Six YouTube ad formats: TrueView In-Stream skippable, Video Discovery in search, Bumper 6-second, Masthead homepage, Non-Skippable 15-20s, and Performance Max AI-powered.",
            items: [
                { name: "TrueView In-Stream", description: "Skippable ads that play before, during, or after videos. Cost-effective with flexible length, ideal for brand awareness and retargeting." },
                { name: "Video Discovery Ads", description: "Promoted videos in search results and next to related videos. High intent with native look, ideal for subscriber growth and content promotion." },
                { name: "Bumper Ads", description: "Unskippable 6-second ads for reach and frequency. Quick impact, mobile-first format with high recall boost." },
                { name: "Masthead Ads", description: "Premium placement on the YouTube homepage for massive cross-device reach. Ideal for launch events and premium inventory." },
                { name: "Non-Skippable Ads", description: "15-20 second ads that viewers must watch. Guaranteed complete message delivery with premium placement and brand lift." },
                { name: "Performance Max", description: "AI-powered goal-based campaigns accessing all Google video inventory with automated bidding, cross-channel optimization, and conversion focus." },
            ],
        }),

        generateItemListSchema({
            id: "/services/performance-marketing/youtube-ads/#businessObjectivesList",
            name: "YouTube Ads Business Objectives",
            description: "Full-funnel YouTube Ads campaigns for brand awareness (+40% recall), lead generation (2x leads), e-commerce (3.5x ROAS), app installs (-20% CPI), website traffic (+50% CTR), and product launches.",
            items: [
                { name: "Brand Awareness", description: "+40% ad recall with reach and frequency campaigns across TrueView and Bumper formats." },
                { name: "Lead Generation", description: "2x leads through targeted in-stream and discovery ads with lead form extensions." },
                { name: "E-commerce Sales", description: "3.5x ROAS with product-focused video ads and Shopping ad integrations." },
                { name: "App Installs", description: "-20% CPI through optimized app install campaigns targeting high-quality users." },
                { name: "Website Traffic", description: "+50% CTR with targeted traffic campaigns driving qualified visitors to landing pages." },
                { name: "Product Launch", description: "Maximum reach campaigns with Masthead and Non-Skippable formats for launch events." },
            ],
        }),

        generateHowToSchema({
            name: "Our 6-Step YouTube Ads Process",
            description: "A proven 6-step YouTube Ads methodology delivering +40% brand recall, 2x leads, and 3.5x ROAS through audience research, professional video production, and data-driven optimization.",
            steps: [
                { name: "Audience Research", text: "Deep dive into viewer behaviors, interests, and competitor channels. Deliverables: audience personas, keyword analysis, placement lists.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/youtube-ads/#step-audience" },
                { name: "Script & Storyboard", text: "Crafting narratives designed to hook viewers in 5 seconds. Deliverables: video scripts, storyboards, visual style guide.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/youtube-ads/#step-script" },
                { name: "Production & Editing", text: "Creating high-quality video assets optimized for all devices. Deliverables: raw footage, motion graphics, sound design.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/youtube-ads/#step-production" },
                { name: "Campaign Setup", text: "Structuring campaigns with precise targeting and bidding. Deliverables: campaign structure, audience segments, conversion tracking.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/youtube-ads/#step-setup" },
                { name: "Launch & Iterate", text: "Going live and continuously testing creatives and audiences. Deliverables: A/B testing, bid adjustments, creative refresh.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/youtube-ads/#step-launch" },
                { name: "Analysis & Scaling", text: "Detailed reporting and scale-up strategies. Deliverables: ROAS analysis, scaling plan, performance reports.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/youtube-ads/#step-analysis" },
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
        <main style={{ "--page-selection-bg": "#FF0000" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(youtubeAdsSchema) }}
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
