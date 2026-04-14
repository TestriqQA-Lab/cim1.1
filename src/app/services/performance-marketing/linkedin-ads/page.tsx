import Hero from "@/components/services/performance-marketing/linkedin-ads/Hero";
import ServiceOverview from "@/components/services/performance-marketing/linkedin-ads/ServiceOverview";
import SolutionTypes from "@/components/services/performance-marketing/linkedin-ads/SolutionTypes";
import TechStack from "@/components/services/performance-marketing/linkedin-ads/TechStack";
import Process from "@/components/services/performance-marketing/linkedin-ads/Process";
import WhyChooseUs from "@/components/services/performance-marketing/linkedin-ads/WhyChooseUs";
import CTA from "@/components/services/performance-marketing/linkedin-ads/CTA";

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
    title: 'LinkedIn Ads Agency | B2B Advertising Services',
    description: 'Reach decision-makers with LinkedIn Ads. Target 900M+ professionals by job title, company, industry, and seniority. The ultimate B2B advertising platform. Certified LinkedIn Partner, 67M+ companies targetable, 100+ enterprise clients, campaigns live within 7 days.',
    url: '/services/performance-marketing/linkedin-ads',
    keywords: [
        'LinkedIn Ads agency',
        'B2B advertising services',
        'LinkedIn PPC management',
        'LinkedIn lead generation',
        'LinkedIn Sponsored Content',
        'LinkedIn InMail ads',
        'account-based marketing LinkedIn',
        'LinkedIn B2B marketing',
        'LinkedIn dynamic ads',
        'LinkedIn advertising agency',
    ],
});

export default function LinkedInAdsPage() {
    const linkedinAdsSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "LinkedIn Ads Agency | B2B Advertising Services",
            description: "Reach decision-makers with LinkedIn Ads. Target 900M+ professionals by job title, company, industry, and seniority. The ultimate B2B advertising platform. Certified LinkedIn Partner, 67M+ companies targetable, 100+ enterprise clients, campaigns live within 7 days.",
            urlPath: "/services/performance-marketing/linkedin-ads",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/performance-marketing/linkedin-ads/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/performance-marketing/linkedin-ads/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/performance-marketing/linkedin-ads/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Performance Marketing", url: "/services/performance-marketing" },
            { name: "LinkedIn Ads", url: "/services/performance-marketing/linkedin-ads" },
        ], "https://www.cinuteinfomedia.com/services/performance-marketing/linkedin-ads/#breadcrumb"),

        generateServiceSchema({
            name: "LinkedIn Ads Management Services",
            description: "Reach decision-makers with LinkedIn Ads. Target 900M+ professionals by job title, company, industry, and seniority — the ultimate B2B advertising platform. Certified LinkedIn Partner with 100+ enterprise clients. 67M+ companies targetable, campaigns live within 7 days. Full-service LinkedIn advertising across Sponsored Content, Message Ads, Lead Gen Forms, Dynamic Ads, Video Ads, and Text & Display Ads.",
            urlPath: "/services/performance-marketing/linkedin-ads",
            serviceType: "LinkedIn Ads B2B Advertising Management",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Free LinkedIn Ads audit with account analysis, targeting recommendations, and growth roadmap. Custom management packages for enterprise sales, B2B lead generation, ABM, recruitment, and thought leadership campaigns.",
            },
        }),

        generateItemListSchema({
            id: "/services/performance-marketing/linkedin-ads/#adFormatsList",
            name: "LinkedIn Ad Formats",
            description: "Full-service LinkedIn advertising across 6 ad formats: Sponsored Content, Message Ads, Lead Gen Forms, Dynamic Ads, Video Ads, and Text & Display Ads.",
            items: [
                { name: "Sponsored Content", description: "Native ads in feed including Single Image, Carousel, Video, and Document formats. Best for brand awareness and thought leadership." },
                { name: "Message Ads", description: "Direct messages to inbox including Conversation Ads, Message Ads, and InMail. Best for lead generation and event promotion." },
                { name: "Lead Gen Forms", description: "Pre-filled forms for high-quality B2B lead capture with seamless mobile experience." },
                { name: "Dynamic Ads", description: "Personalized ads using member profile data including Follower Ads, Spotlight Ads, and Jobs Ads." },
                { name: "Video Ads", description: "Engaging video content for brand storytelling, product demos, and professional engagement." },
                { name: "Text & Display Ads", description: "Simple, cost-effective PPC ads for brand awareness on LinkedIn's right rail and top banner." },
            ],
        }),

        generateItemListSchema({
            id: "/services/performance-marketing/linkedin-ads/#b2bSolutionsList",
            name: "B2B LinkedIn Ads Solutions",
            description: "Specialized LinkedIn Ads solutions for enterprise sales, B2B lead generation, education, recruitment, account-based marketing (ABM), and thought leadership.",
            items: [
                { name: "Enterprise Sales", description: "Reach C-suite executives with targeting by company size 1000+, seniority Director+, and industry." },
                { name: "B2B Lead Generation", description: "Generate high-quality leads with Lead Gen Forms targeting by job function, skills, and company." },
                { name: "Education & Training", description: "Promote courses and certifications targeting by degrees, fields of study, and member schools." },
                { name: "Recruitment Ads", description: "Attract top talent with Jobs Ads targeting by skills, experience, and current companies." },
                { name: "Account-Based Marketing (ABM)", description: "Precision targeting for high-value accounts using company lists, contact targeting, and website retargeting." },
                { name: "Thought Leadership", description: "Build authority through executive profile ads with follower lookalikes and engagement retargeting." },
            ],
        }),

        generateHowToSchema({
            name: "Our 6-Step LinkedIn Ads Process",
            description: "A proven 6-step LinkedIn Ads methodology for B2B advertising, targeting 900M+ professionals across 67M+ companies with campaigns live within 7 days.",
            steps: [
                { name: "Account Audit", text: "Deep analysis of LinkedIn presence, competitive landscape, and opportunity mapping for B2B growth.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/linkedin-ads/#step-audit" },
                { name: "Targeting Strategy", text: "ICP (Ideal Customer Profile) development and audience segmentation using LinkedIn's professional data.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/linkedin-ads/#step-targeting" },
                { name: "Creative Development", text: "Designing professional B2B creatives, ad copy, and video content optimized for A/B testing.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/linkedin-ads/#step-creative" },
                { name: "Campaign Launch", text: "Setting up LinkedIn Insight Tags, conversion tracking, UTM strategies, and structured campaign launch.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/linkedin-ads/#step-launch" },
                { name: "Optimize & Test", text: "Continuous bid optimization, audience refinement, and creative testing for peak performance.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/linkedin-ads/#step-optimize" },
                { name: "Scale & Report", text: "Budget scaling, executive reporting, and strategy iteration based on campaign performance data.", url: "https://www.cinuteinfomedia.com/services/performance-marketing/linkedin-ads/#step-scale" },
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
        <main style={{ "--page-selection-bg": "#0a66c2" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(linkedinAdsSchema) }}
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
