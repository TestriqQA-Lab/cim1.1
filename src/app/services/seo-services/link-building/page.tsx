import Hero from "@/components/services/seo-services/link-building/Hero";
import ServiceOverview from "@/components/services/seo-services/link-building/ServiceOverview";
import SolutionTypes from "@/components/services/seo-services/link-building/SolutionTypes";
import TechStack from "@/components/services/seo-services/link-building/TechStack";
import Process from "@/components/services/seo-services/link-building/Process";
import WhyChooseUs from "@/components/services/seo-services/link-building/WhyChooseUs";
import CTA from "@/components/services/seo-services/link-building/CTA";

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
    title: 'Link Building Services | High Quality Backlink Agency',
    description: 'Build authority with quality backlinks. Acquire high-quality, relevant backlinks from DA 50+ authoritative websites. 100% white-hat link building strategies, 3x average traffic growth, niche-relevant placements, and transparent DA/DR reporting.',
    url: '/services/seo-services/link-building',
    keywords: [
        'link building services',
        'backlink agency',
        'white-hat link building',
        'guest posting services',
        'digital PR link building',
        'high authority backlinks',
        'DA 50 backlinks',
        'outreach link building',
        'broken link building',
        'HARO link building',
    ],
});

export default function LinkBuildingPage() {
    const linkBuildingSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Link Building Services | High Quality Backlink Agency",
            description: "Build authority with quality backlinks. Acquire high-quality, relevant backlinks from DA 50+ authoritative websites. 100% white-hat link building strategies, 3x average traffic growth, niche-relevant placements, and transparent DA/DR reporting.",
            urlPath: "/services/seo-services/link-building",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/seo-services/link-building/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/seo-services/link-building/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/seo-services/link-building/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "SEO Services", url: "/services/seo-services" },
            { name: "Link Building Services", url: "/services/seo-services/link-building" },
        ], "https://www.cinuteinfomedia.com/services/seo-services/link-building/#breadcrumb"),

        generateServiceSchema({
            name: "Link Building Services",
            description: "Build authority with quality backlinks from DA 50+ authoritative websites. Our 100% white-hat link building strategies boost domain authority and organic rankings with no PBNs, no spam — only Google-approved tactics. DA 50+ average high-authority links, 3x average traffic growth, niche-relevant placements, transparent DA/DR reporting, dedicated outreach specialists and content writers.",
            urlPath: "/services/seo-services/link-building",
            serviceType: "White-Hat Link Building & Digital PR",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Free link audit and backlink profile analysis included. Custom link building packages based on niche competition, target DA range, and monthly link volume. 100% white-hat, do-follow backlinks with full transparency.",
            },
        }),

        generateItemListSchema({
            id: "/services/seo-services/link-building/#coreServicesList",
            name: "Core Link Building Services",
            description: "Strategic link acquisition through outreach campaigns, guest posting, digital PR, and resource link building — all 100% white-hat and Google-approved.",
            items: [
                { name: "Outreach Campaigns", description: "Strategic outreach to relevant websites and influencers in your niche for natural link acquisition." },
                { name: "Guest Posting", description: "High-quality guest articles on authoritative sites with contextual backlinks to your content." },
                { name: "Digital PR", description: "Earn links through newsworthy content, press releases, and media coverage in your industry." },
                { name: "Resource Link Building", description: "Create linkable assets like guides, tools, and infographics that naturally attract backlinks." },
            ],
        }),

        generateItemListSchema({
            id: "/services/seo-services/link-building/#linkTypesList",
            name: "Link Types We Build",
            description: "Five distinct approaches to acquiring high-quality backlinks: editorial links, guest post links, resource page links, broken link building, and HARO/press links.",
            items: [
                { name: "Editorial Links", description: "Natural links earned through quality content — resource citations, expert quotes, and data references." },
                { name: "Guest Post Links", description: "Contextual links from authored content on industry blogs and partner sites." },
                { name: "Resource Page Links", description: "Links from curated lists on university pages, .edu/.gov sites, or industry roundups." },
                { name: "Broken Link Building", description: "Replacing dead 404 links on other sites with your relevant, high-quality content." },
                { name: "HARO & Press Links", description: "High-authority editorial links earned by responding to journalist queries and media requests." },
            ],
        }),

        generateHowToSchema({
            name: "Our 6-Phase Link Building Methodology",
            description: "A proven 6-phase white-hat link building methodology delivering DA 50+ average backlinks and 3x traffic growth through strategic outreach and content creation.",
            steps: [
                { name: "Research & Analysis", text: "Analyze your backlink profile, conduct competitor audits, perform gap analysis, and map link opportunities.", url: "https://www.cinuteinfomedia.com/services/seo-services/link-building/#step-research" },
                { name: "Prospecting", text: "Build a curated list of relevant sites with DA vetting, relevance scoring, and niche qualification.", url: "https://www.cinuteinfomedia.com/services/seo-services/link-building/#step-prospecting" },
                { name: "Personalized Outreach", text: "Craft custom pitches and nurture relationships with site owners, editors, and journalists.", url: "https://www.cinuteinfomedia.com/services/seo-services/link-building/#step-outreach" },
                { name: "Content Creation", text: "Produce high-quality guest posts, linkable resources, data studies, and infographic designs.", url: "https://www.cinuteinfomedia.com/services/seo-services/link-building/#step-content" },
                { name: "Link Placement", text: "Secure do-follow backlinks with editorial review and strategic anchor text optimization.", url: "https://www.cinuteinfomedia.com/services/seo-services/link-building/#step-placement" },
                { name: "Reporting & Optimization", text: "Monthly reports covering link acquisition metrics, DA/DR tracking, traffic impact, and ROI analysis.", url: "https://www.cinuteinfomedia.com/services/seo-services/link-building/#step-reporting" },
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
        <main style={{ "--page-selection-bg": "#06b6d4" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(linkBuildingSchema) }}
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
