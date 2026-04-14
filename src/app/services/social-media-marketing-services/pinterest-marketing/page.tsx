import Hero from "@/components/services/social-media-marketing-services/pinterest-marketing/Hero";
import ServiceOverview from "@/components/services/social-media-marketing-services/pinterest-marketing/ServiceOverview";
import SolutionTypes from "@/components/services/social-media-marketing-services/pinterest-marketing/SolutionTypes";
import TechStack from "@/components/services/social-media-marketing-services/pinterest-marketing/TechStack";
import Process from "@/components/services/social-media-marketing-services/pinterest-marketing/Process";
import WhyChooseUs from "@/components/services/social-media-marketing-services/pinterest-marketing/WhyChooseUs";
import CTA from "@/components/services/social-media-marketing-services/pinterest-marketing/CTA";

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
    title: 'Pinterest Marketing Agency | Visual Discovery & Shopping Ads',
    description: 'Inspire and convert with visual discovery. Pinterest marketing services helping brands leverage visual search with 450M+ monthly active users, 97% unbranded searches, 2x higher ROAS, 10M+ impressions, 500K+ pin saves, and 3x higher conversion rate.',
    url: '/services/social-media-marketing-services/pinterest-marketing',
    keywords: [
        'Pinterest marketing',
        'Pinterest ads agency',
        'Pinterest advertising',
        'shoppable pins',
        'Pinterest SEO',
        'visual discovery marketing',
        'Pinterest for business',
        'Pinterest shopping ads',
        'idea pins',
        'Pinterest strategy',
    ],
});

export default function PinterestMarketingPage() {
    const pinterestSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Pinterest Marketing Agency | Visual Discovery & Shopping Ads",
            description: "Inspire and convert with visual discovery. Pinterest marketing services helping brands leverage visual search with 450M+ monthly active users, 97% unbranded searches, 2x higher ROAS, 10M+ impressions, 500K+ pin saves, and 3x higher conversion rate.",
            urlPath: "/services/social-media-marketing-services/pinterest-marketing",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/pinterest-marketing/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/pinterest-marketing/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/pinterest-marketing/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Social Media Marketing Services", url: "/services/social-media-marketing-services" },
            { name: "Pinterest Marketing", url: "/services/social-media-marketing-services/pinterest-marketing" },
        ], "https://www.cinuteinfomedia.com/services/social-media-marketing-services/pinterest-marketing/#breadcrumb"),

        generateServiceSchema({
            name: "Pinterest Marketing Services",
            description: "Inspire and convert with visual discovery. Pinterest marketing services helping brands leverage the power of visual search. 450M+ monthly active users, 97% unbranded searches — users are open to new brands. 2x higher ROAS vs other social platforms, 10M+ impressions generated, 500K+ pin saves, 2.5x average ROAS, 3x higher conversion rate.",
            urlPath: "/services/social-media-marketing-services/pinterest-marketing",
            serviceType: "Pinterest Marketing & Visual Discovery Ads",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Free Pinterest audit available. Custom packages include promoted pins, shopping ads, catalog integration, Pinterest SEO, trend analysis, and comprehensive analytics reporting.",
            },
        }),

        generateItemListSchema({
            id: "/services/social-media-marketing-services/pinterest-marketing/#coreServicesList",
            name: "Core Pinterest Marketing Services",
            description: "Full-spectrum Pinterest marketing from advertising and pin strategy to shopping catalog integration, trend analysis, Pinterest SEO, and analytics.",
            items: [
                { name: "Pinterest Advertising", description: "Promoted Pins, Shopping Ads, and Video campaigns to reach high-intent buyers in the visual discovery feed." },
                { name: "Pin Strategy & Creation", description: "Designing eye-catching pins optimized for discovery across Standard, Video, Carousel, Idea, and Collection formats." },
                { name: "Shopping Catalog Integration", description: "Seamless sync of product catalogs for shoppable pins with real-time inventory and pricing updates." },
                { name: "Trend Analysis", description: "Leveraging Pinterest Trends for seasonal and timely content to capture high-intent search traffic." },
                { name: "Pinterest SEO", description: "Optimization of boards, pins, and descriptions with high-intent keywords for maximum organic discoverability." },
                { name: "Analytics & Insights", description: "Comprehensive reporting on audience behavior, pin performance, saves, clicks, and conversions." },
            ],
        }),

        generateItemListSchema({
            id: "/services/social-media-marketing-services/pinterest-marketing/#industrySolutionsList",
            name: "Industry-Specific Pinterest Solutions",
            description: "Tailored Pinterest marketing solutions for e-commerce, home & decor, food & recipes, fashion & beauty, weddings & events, and education & DIY.",
            items: [
                { name: "E-commerce & Retail", description: "Shoppable pins for direct sales with automated product catalog sync and conversion tracking." },
                { name: "Home & Decor", description: "Visualizing spaces with style boards and room inspiration pins for interior design brands." },
                { name: "Food & Recipes", description: "Driving saves and purchases through recipe pins with step-by-step visual instructions." },
                { name: "Fashion & Beauty", description: "Showcasing seasonal trends, beauty looks, and outfit inspiration with shoppable pins." },
                { name: "Weddings & Events", description: "Reaching couples planning events with venue, decor, and vendor inspiration boards." },
                { name: "Education & DIY", description: "Tutorial and how-to pins to build authority and drive organic engagement." },
            ],
        }),

        generateHowToSchema({
            name: "Our 6-Step Pinterest Marketing Process",
            description: "A proven 6-step methodology for Pinterest marketing that has generated 10M+ impressions, 500K+ pin saves, and 2.5x average ROAS for clients.",
            steps: [
                { name: "Pinterest Audit", text: "Competitor analysis, keyword research, and opportunity identification to find growth levers.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/pinterest-marketing/#step-audit" },
                { name: "Visual Strategy", text: "Developing pin designs and content calendars aligned with Pinterest Trends for seasonal relevance.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/pinterest-marketing/#step-strategy" },
                { name: "Board Architecture", text: "Strategic keyword placement across boards and pin descriptions for maximum discoverability.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/pinterest-marketing/#step-boards" },
                { name: "Pin Publishing", text: "Consistent scheduling and fresh pin creation across Standard, Video, Carousel, and Idea formats.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/pinterest-marketing/#step-publishing" },
                { name: "Performance Tracking", text: "Monitoring saves, clicks, impressions, and conversions with detailed analytics dashboards.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/pinterest-marketing/#step-tracking" },
                { name: "Continuous Optimization", text: "Refining pin designs, copy, and targeting while adapting to algorithm changes for sustained growth.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/pinterest-marketing/#step-optimization" },
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
        <main style={{ "--page-selection-bg": "#E60023" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pinterestSchema) }}
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
