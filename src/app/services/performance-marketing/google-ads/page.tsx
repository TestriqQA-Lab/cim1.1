import Hero from "@/components/services/performance-marketing/google-ads/Hero";
import ServiceOverview from "@/components/services/performance-marketing/google-ads/ServiceOverview";
import SolutionTypes from "@/components/services/performance-marketing/google-ads/SolutionTypes";
import TechStack from "@/components/services/performance-marketing/google-ads/TechStack";
import Process from "@/components/services/performance-marketing/google-ads/Process";
import WhyChooseUs from "@/components/services/performance-marketing/google-ads/WhyChooseUs";
import CTA from "@/components/services/performance-marketing/google-ads/CTA";

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
    title: 'Google Ads Agency | Google PPC Management Services',
    description: 'Maximize ROI with Google Ads. Capture high-intent searchers at the exact moment they\'re looking for your products or services. Google Premier Partner certified experts delivering 500% average ROAS, $10M+ ad spend managed, 150+ happy clients.',
    url: '/services/performance-marketing/google-ads',
    keywords: [
        'Google Ads agency',
        'Google PPC management',
        'Google Ads management services',
        'search campaign management',
        'Google Shopping ads',
        'Performance Max campaigns',
        'YouTube advertising',
        'Google Display Network',
        'PPC optimization',
        'Google Ads audit',
    ],
});

export default function GoogleAdsPage() {
    const googleAdsSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Google Ads Agency | Google PPC Management Services",
            description: "Maximize ROI with Google Ads. Capture high-intent searchers at the exact moment they're looking for your products or services. Google Premier Partner certified experts delivering 500% average ROAS, $10M+ ad spend managed, 150+ happy clients.",
            urlPath: "/services/performance-marketing/google-ads",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/performance-marketing/google-ads/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/performance-marketing/google-ads/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/performance-marketing/google-ads/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Performance Marketing", url: "/services/performance-marketing" },
            { name: "Google Ads", url: "/services/performance-marketing/google-ads" },
        ], "https://www.cinuteinfomedia.com/services/performance-marketing/google-ads/#breadcrumb"),

        generateServiceSchema({
            name: "Google Ads Management Services",
            description: "Maximize ROI with Google Ads. Capture high-intent searchers at the exact moment they're looking for your products or services. Google Premier Partner certified experts delivering 500% average ROAS, $10M+ ad spend managed, 150+ happy clients. Full-service Google PPC management across Search, Display, Shopping, YouTube, Performance Max, and App campaigns. Tech stack includes GA4, GTM, Looker Studio, Supermetrics, Zapier, HubSpot, Optmyzr, and Semrush.",
            urlPath: "/services/performance-marketing/google-ads",
            serviceType: "Google Ads PPC Management & Optimization",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Free Google Ads audit with account analysis, wasted spend identification, and growth roadmap. Custom management packages based on ad spend level, campaign complexity, and business goals.",
            },
        }),

        generateItemListSchema({
            id: "/services/performance-marketing/google-ads/#campaignTypesList",
            name: "Google Ads Campaign Types",
            description: "Full-service Google Ads management across 6 campaign types: Search, Display Network, Shopping, YouTube, Performance Max, and App campaigns.",
            items: [
                { name: "Search Campaigns", description: "Reach users actively searching for your keywords with text ads on Google Search results." },
                { name: "Display Network", description: "Build awareness with visual ads across 2M+ websites in the Google Display Network." },
                { name: "Shopping Ads", description: "Boost ecommerce sales with image-based product listings in Google Shopping results." },
                { name: "YouTube Ads", description: "Engage audiences with video ads on the world's second-largest search engine." },
                { name: "Performance Max", description: "AI-powered campaigns that optimize across all Google channels automatically for maximum conversions." },
                { name: "App Campaigns", description: "Drive app installs and engagement across Google's entire ecosystem including Search, Play, and YouTube." },
            ],
        }),

        generateItemListSchema({
            id: "/services/performance-marketing/google-ads/#businessSolutionsList",
            name: "Google Ads Business Solutions",
            description: "Specialized Google Ads solutions for e-commerce, lead generation, brand awareness, B2B marketing, local businesses, and remarketing.",
            items: [
                { name: "E-commerce", description: "Maximize sales and ROAS for online stores with Shopping, Search, and Performance Max campaigns." },
                { name: "Lead Generation", description: "High-quality leads for B2B and service businesses with intent-based search targeting." },
                { name: "Brand Awareness", description: "Reach and frequency campaigns for market dominance across Display and YouTube." },
                { name: "B2B Marketing", description: "Target decision-makers with intent-based search and remarketing across the buying journey." },
                { name: "Local Business", description: "Near-me searches, Map Pack visibility, and location-based ad extensions for foot traffic." },
                { name: "Remarketing", description: "Re-engage visitors who didn't convert with dynamic remarketing and RLSA campaigns." },
            ],
        }),

        generateHowToSchema({
            name: "Our 6-Step Google Ads Management Process",
            description: "A proven 6-step Google Ads methodology delivering 500% average ROAS, managing $10M+ in ad spend for 150+ happy clients.",
            steps: [
                { name: "Account Audit", text: "Deep analysis of current campaigns, tracking setup, wasted spend identification, and performance benchmarking.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/google-ads/#step-audit" },
                { name: "Strategy Development", text: "Keyword research, competitor analysis, goal setting, and custom campaign architecture planning.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/google-ads/#step-strategy" },
                { name: "Campaign Setup", text: "Campaign architecture build, ad copy creation, conversion tracking via GTM and GA4, and landing page alignment.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/google-ads/#step-setup" },
                { name: "Launch & Monitor", text: "Controlled launch with real-time monitoring, budget pacing, and early performance signals analysis.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/google-ads/#step-launch" },
                { name: "Optimize & Scale", text: "Continuous A/B testing, bid automation with Optmyzr, negative keyword filtering, and audience expansion.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/google-ads/#step-optimize" },
                { name: "Report & Iterate", text: "Transparent weekly/monthly reporting via Looker Studio with strategic roadmap updates and scaling recommendations.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/google-ads/#step-report" },
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
        <main style={{ "--page-selection-bg": "#4285f4" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(googleAdsSchema) }}
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
