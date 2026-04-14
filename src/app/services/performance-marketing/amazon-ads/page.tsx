import Hero from "@/components/services/performance-marketing/amazon-ads/Hero";
import ServiceOverview from "@/components/services/performance-marketing/amazon-ads/ServiceOverview";
import SolutionTypes from "@/components/services/performance-marketing/amazon-ads/SolutionTypes";
import TechStack from "@/components/services/performance-marketing/amazon-ads/TechStack";
import Process from "@/components/services/performance-marketing/amazon-ads/Process";
import WhyChooseUs from "@/components/services/performance-marketing/amazon-ads/WhyChooseUs";
import CTA from "@/components/services/performance-marketing/amazon-ads/CTA";

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
    title: 'Amazon Ads Agency | Amazon PPC Management Services',
    description: 'Dominate the marketplace. Scale your sales on the world\'s largest e-commerce platform with data-driven advertising strategies. 10x average ROAS, Amazon Verified Partner with access to beta features, profitable growth focused on net profit, TACOS optimization for long-term brand health, proven Best Seller status track record.',
    url: '/services/performance-marketing/amazon-ads',
    keywords: [
        'Amazon Ads agency',
        'Amazon PPC management',
        'Sponsored Products ads',
        'Sponsored Brands ads',
        'Amazon DSP advertising',
        'Amazon marketplace optimization',
        'ACOS optimization',
        'Amazon seller advertising',
        'Amazon advertising agency',
        'Amazon FBA PPC',
    ],
});

export default function AmazonAdsPage() {
    const amazonAdsSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Amazon Ads Agency | Amazon PPC Management Services",
            description: "Dominate the marketplace. Scale your sales on the world's largest e-commerce platform with data-driven advertising strategies. 10x average ROAS, Amazon Verified Partner with access to beta features, profitable growth focused on net profit, TACOS optimization for long-term brand health, proven Best Seller status track record.",
            urlPath: "/services/performance-marketing/amazon-ads",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/performance-marketing/amazon-ads/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/performance-marketing/amazon-ads/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/performance-marketing/amazon-ads/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Performance Marketing", url: "/services/performance-marketing" },
            { name: "Amazon Ads", url: "/services/performance-marketing/amazon-ads" },
        ], "https://www.cinuteinfomedia.com/services/performance-marketing/amazon-ads/#breadcrumb"),

        generateServiceSchema({
            name: "Amazon Ads Management Services",
            description: "Dominate the marketplace and scale your sales on the world's largest e-commerce platform with data-driven advertising strategies. 10x average ROAS, Amazon Verified Partner with access to beta features and dedicated support. Profitable growth focused on increasing net profit, not just vanity revenue metrics. TACOS (Total ACOS) optimization for long-term brand health, proven track record building Best Seller status brands. Tech-enabled with proprietary API tools for real-time bid adjustments. Tech stack: Amazon Advertising Console, Seller Central, Amazon DSP, Helium 10, Jungle Scout, Pacvue, DataHawk, Keepa, Teikametrics.",
            urlPath: "/services/performance-marketing/amazon-ads",
            serviceType: "Amazon Ads PPC Management & Marketplace Optimization",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Free Amazon Ads audit and marketplace analysis. Join agencies and brands generating millions in revenue on Amazon. Custom management packages covering Sponsored Products, Sponsored Brands, Sponsored Display, Amazon DSP, and Video Ads.",
            },
        }),

        generateItemListSchema({
            id: "/services/performance-marketing/amazon-ads/#adSolutionsList",
            name: "Amazon Ad Solutions",
            description: "Comprehensive Amazon advertising across 6 ad formats: Sponsored Products, Sponsored Brands, Sponsored Display, Amazon Stores, Video Ads, and Amazon DSP.",
            items: [
                { name: "Sponsored Products", description: "Promote individual product listings on search results and product pages for immediate visibility." },
                { name: "Sponsored Brands", description: "Showcase your brand and product portfolio with custom headlines at the top of search results." },
                { name: "Sponsored Display", description: "Reach audiences on and off Amazon with auto-generated display ads and retargeting." },
                { name: "Amazon Stores", description: "Build a dedicated multi-page brand destination on Amazon for immersive shopping experiences." },
                { name: "Video Ads", description: "Engage shoppers with autoplay video in search results and product detail pages." },
                { name: "Amazon DSP", description: "Programmatically buy display, video, and audio ads at scale across Amazon's network and beyond." },
            ],
        }),

        generateItemListSchema({
            id: "/services/performance-marketing/amazon-ads/#strategicObjectivesList",
            name: "Strategic Amazon Ads Objectives",
            description: "Six strategic objectives for Amazon marketplace dominance: search visibility, brand defense, sales growth, new customer acquisition, ACOS reduction, and market share expansion.",
            items: [
                { name: "Search Visibility", description: "Own top spots for high-value keywords through keyword research, bid optimization, negative keywords, and search term isolation." },
                { name: "Brand Defense", description: "Protect branded keywords from competitors with brand protection, competitor conquering, share of voice, and trademark defense." },
                { name: "Sales Growth", description: "Accelerate sales velocity and BSR ranking through velocity campaigns, coupon strategy, deal promotion, and listing optimization." },
                { name: "New Customer Acquisition", description: "Reach shoppers who haven't bought from you yet via audience targeting, category targeting, retargeting, and lookalike audiences." },
                { name: "ACOS Reduction", description: "Optimize spend for maximum profitability through waste reduction, bid management strategy, placement optimization, and dayparting." },
                { name: "Market Share Expansion", description: "Aggressively expand digital shelf space through shelf analysis, category dominance, cross-selling, and bundling strategies." },
            ],
        }),

        generateHowToSchema({
            name: "Path to Best Seller — Our 6-Step Amazon Ads Process",
            description: "A proven 6-step Amazon Ads methodology delivering 10x average ROAS and Best Seller status through listing optimization, granular campaign structure, and TACOS management.",
            steps: [
                { name: "Listing Audit", text: "Deep dive into product content, SEO keywords, and conversion rate readiness assessment.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/amazon-ads/#step-audit" },
                { name: "Retail Readiness", text: "Optimizing titles, bullets, images, and A+ content for maximum conversion before ad spend.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/amazon-ads/#step-retail" },
                { name: "Campaign Structure", text: "Building a granular account structure for portfolio-level control and budget management.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/amazon-ads/#step-structure" },
                { name: "Bid Management", text: "Aggressive bid testing to find the sweet spot between volume and ACOS with real-time API tools.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/amazon-ads/#step-bids" },
                { name: "Brand Defense", text: "Strategies to block competitors from stealing your product page traffic and branded keywords.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/amazon-ads/#step-defense" },
                { name: "Scale & Grow", text: "Expanding into new categories and ad formats like DSP and Video for marketplace dominance.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/amazon-ads/#step-scale" },
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
        <main style={{ "--page-selection-bg": "#FF9900" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(amazonAdsSchema) }}
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
