import Hero from "@/components/services/performance-marketing/microsoft-ads/Hero";
import ServiceOverview from "@/components/services/performance-marketing/microsoft-ads/ServiceOverview";
import SolutionTypes from "@/components/services/performance-marketing/microsoft-ads/SolutionTypes";
import TechStack from "@/components/services/performance-marketing/microsoft-ads/TechStack";
import Process from "@/components/services/performance-marketing/microsoft-ads/Process";
import WhyChooseUs from "@/components/services/performance-marketing/microsoft-ads/WhyChooseUs";
import CTA from "@/components/services/performance-marketing/microsoft-ads/CTA";

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
    title: 'Microsoft Ads Agency | Bing Advertising Services',
    description: 'Expand beyond Google. Tap into the Microsoft Search Network and connect with 60M+ unique desktop searchers across Bing, Yahoo, AOL, and LinkedIn. 24% desktop market share, 30-40% lower CPCs vs Google, higher purchasing power users, exclusive premium partners like Wall Street Journal.',
    url: '/services/performance-marketing/microsoft-ads',
    keywords: [
        'Microsoft Ads agency',
        'Bing advertising services',
        'Bing PPC management',
        'Microsoft Search Network',
        'LinkedIn profile targeting',
        'Bing Shopping campaigns',
        'Microsoft Audience Network',
        'Bing Ads management',
        'Microsoft Ads optimization',
        'Bing search advertising',
    ],
});

export default function MicrosoftAdsPage() {
    const microsoftAdsSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Microsoft Ads Agency | Bing Advertising Services",
            description: "Expand beyond Google. Tap into the Microsoft Search Network and connect with 60M+ unique desktop searchers across Bing, Yahoo, AOL, and LinkedIn. 24% desktop market share, 30-40% lower CPCs vs Google, higher purchasing power users, exclusive premium partners like Wall Street Journal.",
            urlPath: "/services/performance-marketing/microsoft-ads",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/performance-marketing/microsoft-ads/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/performance-marketing/microsoft-ads/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/performance-marketing/microsoft-ads/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Performance Marketing", url: "/services/performance-marketing" },
            { name: "Microsoft Ads", url: "/services/performance-marketing/microsoft-ads" },
        ], "https://www.cinuteinfomedia.com/services/performance-marketing/microsoft-ads/#breadcrumb"),

        generateServiceSchema({
            name: "Microsoft Ads Management Services",
            description: "Expand beyond Google. Tap into the Microsoft Search Network and connect with 60M+ unique desktop searchers across Bing, Yahoo, AOL, and LinkedIn. 24% desktop market share with 30-40% lower CPCs compared to Google Ads. Users with higher household incomes and higher purchasing power. Less competition means better ad positions. Exclusive premium placements on Wall Street Journal, AOL, and InfoSpace. LinkedIn Profile Targeting for B2B with 2x higher conversion rate. 900M+ monthly users via Audience Intelligence across Outlook, Edge, and MSN.",
            urlPath: "/services/performance-marketing/microsoft-ads",
            serviceType: "Microsoft Ads & Bing PPC Management",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Free Microsoft Ads audit and strategy consultation. Custom packages covering Search Ads, Audience Network, LinkedIn Profile Targeting, Shopping Campaigns, Multimedia Ads, and Local Inventory. Average 35% CPC savings versus Google Ads.",
            },
        }),

        generateItemListSchema({
            id: "/services/performance-marketing/microsoft-ads/#adTypesList",
            name: "Microsoft Ad Types",
            description: "Six Microsoft advertising solutions: Search Ads on Bing/Yahoo/AOL, Audience Network on MSN/Outlook/Edge, LinkedIn Profile Targeting, Shopping Campaigns, Multimedia Ads, and Local Inventory.",
            items: [
                { name: "Search Ads", description: "Capture high-intent traffic on Bing, Yahoo, and AOL search results." },
                { name: "Audience Network", description: "Extend reach to premium sites like MSN, Outlook, and Edge with native placements." },
                { name: "LinkedIn Profile Targeting", description: "Target users based on LinkedIn profile data including Job Function, Industry, and Company — 2x higher conversion rate." },
                { name: "Shopping Campaigns", description: "Showcase products visually with product listing ads in Bing Shopping results." },
                { name: "Multimedia Ads", description: "Engage users with rich visual ads on right-hand rails for higher engagement." },
                { name: "Local Inventory Ads", description: "Drive foot traffic by showcasing in-store product availability to nearby searchers." },
            ],
        }),

        generateItemListSchema({
            id: "/services/performance-marketing/microsoft-ads/#strategicAdvantagesList",
            name: "Microsoft Ads Strategic Advantages",
            description: "Four key strategic advantages: B2B LinkedIn targeting with 2x conversion rate, Audience Intelligence across 900M+ users, 24% desktop market dominance, and cross-channel unified attribution.",
            items: [
                { name: "B2B Targeting via LinkedIn Data", description: "Target by Company, Job Function, and Industry directly within search campaigns. 2x higher conversion rate using LinkedIn profile data." },
                { name: "Audience Intelligence", description: "Leverage Microsoft's graph to reach 900M+ monthly users on Outlook, Edge, and MSN with high-accuracy intent signals." },
                { name: "Desktop Dominance", description: "24% desktop market share capturing users with higher purchasing power and household incomes." },
                { name: "Cross-Channel Attribution", description: "Manage and optimize campaigns holistically with unified attribution to drive efficiency across channels." },
            ],
        }),

        generateHowToSchema({
            name: "Our 4-Step Microsoft Ads Execution Framework",
            description: "A streamlined 4-step execution framework for Microsoft Ads delivering 35% average CPC savings and reaching 60M+ unique desktop searchers with higher purchasing power.",
            steps: [
                { name: "Import & Setup", text: "Seamlessly import high-performing Google Ads campaigns or structure new ones from scratch with optimized settings.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/microsoft-ads/#step-import" },
                { name: "Keyword Expansion", text: "Identify unique keywords and opportunities specific to the Bing search landscape that competitors miss.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/microsoft-ads/#step-keywords" },
                { name: "Audience Calibration", text: "Fine-tune targeting using LinkedIn profile data for precise B2B reach by job function, industry, and company.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/microsoft-ads/#step-audience" },
                { name: "Scale & Optimize", text: "Expand to the Audience Network and optimize for ROAS across all placements with continuous A/B testing.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/microsoft-ads/#step-scale" },
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
        <main className="min-h-screen bg-background" style={{ "--page-selection-bg": "#0078D4" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(microsoftAdsSchema) }}
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
