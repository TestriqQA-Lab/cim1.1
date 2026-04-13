import Hero from "@/components/services/social-media-marketing-services/linkedin-marketing-services/Hero";
import ServiceOverview from "@/components/services/social-media-marketing-services/linkedin-marketing-services/ServiceOverview";
import SolutionTypes from "@/components/services/social-media-marketing-services/linkedin-marketing-services/SolutionTypes";
import TechStack from "@/components/services/social-media-marketing-services/linkedin-marketing-services/TechStack";
import Process from "@/components/services/social-media-marketing-services/linkedin-marketing-services/Process";
import WhyChooseUs from "@/components/services/social-media-marketing-services/linkedin-marketing-services/WhyChooseUs";
import FAQ from "@/components/services/social-media-marketing-services/linkedin-marketing-services/FAQ";
import CTA from "@/components/services/social-media-marketing-services/linkedin-marketing-services/CTA";

import { getPageMetadata } from '@/lib/metadata';
import {
    generateGraphSchema,
    generateOrganizationSchema,
    generateWebSiteSchema,
    generateWebPageSchema,
    generateBreadcrumbSchema,
    generateServiceSchema,
    generateItemListSchema,
    generateFAQSchema,
    generateHowToSchema,
    generateNavigationSchema,
} from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'LinkedIn Marketing Services | #1 B2B Lead Generation Agency 2026',
    description: 'Reach 1.2B+ professionals with elite, data-driven LinkedIn marketing strategies. We build high-conversion B2B engines — not just ads. Qualified lead generation, industry authority, measurable revenue. 300% traffic growth, 20% CTR lifts, up to 40% CPL reduction.',
    url: '/services/social-media-marketing-services/linkedin-marketing-services',
    keywords: [
        'LinkedIn marketing',
        'LinkedIn ads agency',
        'B2B lead generation',
        'LinkedIn advertising',
        'LinkedIn InMail campaigns',
        'LinkedIn sponsored content',
        'account-based marketing',
        'LinkedIn Sales Navigator',
        'B2B social media marketing',
        'LinkedIn strategy',
    ],
});

export default function LinkedInMarketingPage() {
    const linkedinSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "LinkedIn Marketing Services | #1 B2B Lead Generation Agency 2026",
            description: "Reach 1.2B+ professionals with elite, data-driven LinkedIn marketing strategies. We build high-conversion B2B engines — not just ads. Qualified lead generation, industry authority, measurable revenue. 300% traffic growth, 20% CTR lifts, up to 40% CPL reduction.",
            urlPath: "/services/social-media-marketing-services/linkedin-marketing-services",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/linkedin-marketing-services/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/linkedin-marketing-services/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/linkedin-marketing-services/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Social Media Marketing Services", url: "/services/social-media-marketing-services" },
            { name: "LinkedIn Marketing Services", url: "/services/social-media-marketing-services/linkedin-marketing-services" },
        ], "https://www.cinuteinfomedia.com/services/social-media-marketing-services/linkedin-marketing-services/#breadcrumb"),

        generateServiceSchema({
            name: "LinkedIn Marketing Services",
            description: "LinkedIn Marketing Services for B2B Growth. Reach 1.2B+ professionals with elite, data-driven LinkedIn marketing strategies. We don't just run ads — we build high-conversion B2B engines that generate qualified leads, establish industry authority, and drive measurable revenue in the 2026 AI-search era. 300% traffic growth, 20% CTR lifts, up to 40% CPL reduction.",
            urlPath: "/services/social-media-marketing-services/linkedin-marketing-services",
            serviceType: "LinkedIn B2B Marketing & Lead Generation",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                price: "1500",
                validFrom: "2025-01-01",
                description: "LinkedIn marketing services from $1,500 to $5,000+ per month. Free LinkedIn account audit, no long-term contracts. Includes ads management, lead generation, InMail campaigns, thought leadership, and bi-weekly ROI reports.",
            },
        }),

        generateItemListSchema({
            id: "/services/social-media-marketing-services/linkedin-marketing-services/#coreServicesList",
            name: "Core LinkedIn Marketing Services",
            description: "Full-spectrum LinkedIn marketing from ads management and lead generation to InMail campaigns, thought leadership, page optimization, and analytics.",
            items: [
                { name: "LinkedIn Ads Management", description: "Full-funnel campaigns including Sponsored Content, InMail, and Video Ads with advanced targeting." },
                { name: "LinkedIn Lead Generation Services", description: "High-intent B2B leads via native Lead Gen Forms with CRM integration and ABM strategies." },
                { name: "Personalized InMail & Message Ads", description: "Hyper-personalized direct messaging for C-suite outreach and decision-maker engagement." },
                { name: "B2B Content Marketing & Thought Leadership", description: "LinkedIn Newsletters, LinkedIn Live strategies, and executive ghostwriting for industry authority." },
                { name: "LinkedIn Company Page Optimization", description: "Professional profile and page management with follower growth and brand consistency." },
                { name: "ROI Tracking & Analytics", description: "LinkedIn Insight Tags, Matched Audiences, and bi-weekly performance reporting dashboards." },
            ],
        }),

        generateItemListSchema({
            id: "/services/social-media-marketing-services/linkedin-marketing-services/#industrySolutionsList",
            name: "LinkedIn Industry Solutions",
            description: "Industry-specific LinkedIn marketing solutions for Technology & SaaS, Professional Services, Healthcare & Pharma, Financial Services, and Recruiting & HR.",
            items: [
                { name: "Technology & SaaS", description: "Product demo funnels, developer outreach, and webinar-driven lead nurturing for SaaS growth." },
                { name: "Professional Services", description: "Authority building for consulting, legal, and advisory firms through executive thought leadership." },
                { name: "Healthcare & Pharma", description: "HCP outreach, clinical research awareness, and compliant healthcare marketing campaigns." },
                { name: "Financial Services", description: "Investor relations, wealth management lead gen, and fintech positioning on LinkedIn." },
                { name: "Recruiting & HR", description: "Employer branding, talent acquisition campaigns, and recruitment marketing on LinkedIn." },
            ],
        }),

        generateFAQSchema([
            { question: "How much do LinkedIn marketing services cost?", answer: "LinkedIn marketing services typically range from $1,500 to $5,000+ per month for management, depending on ad spend and campaign complexity." },
            { question: "Why should I hire a LinkedIn marketing agency?", answer: "A specialized agency provides deep targeting expertise, access to beta features, and can reduce your CPL by up to 40% through optimized campaigns and proven B2B strategies." },
            { question: "How does LinkedIn lead generation work?", answer: "We use native Lead Gen Forms, hyper-targeted account lists (ABM), and personalized InMail to attract high-intent B2B leads directly within the LinkedIn platform." },
            { question: "What is included in your LinkedIn marketing services?", answer: "Our packages include audience research, creative design, A/B testing, LinkedIn Pixel setup, campaign management, and bi-weekly ROI reports." },
            { question: "How long does it take to see results from LinkedIn marketing?", answer: "Brand awareness results are often immediate. Optimal lead generation scaling typically occurs after 30-60 days of campaign optimization and learning." },
        ]),

        generateHowToSchema({
            name: "Our 6-Phase LinkedIn Marketing Framework",
            description: "A proven 6-phase B2B framework for LinkedIn marketing that delivers 300% traffic growth, 20% CTR lifts, and up to 40% CPL reduction.",
            steps: [
                { name: "Account & Audience Audit", text: "Deep analysis of existing LinkedIn presence, audience insights, and competitive benchmarking. Timeline: Week 1.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/linkedin-marketing-services/#step-audit" },
                { name: "Strategy Development", text: "ABM targeting, funnel architecture, and campaign roadmap tailored to B2B goals. Timeline: Week 2.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/linkedin-marketing-services/#step-strategy" },
                { name: "Creative & Copy Excellence", text: "High-conversion ad creatives, InMail templates, and thought leadership content production. Timeline: Week 2-3.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/linkedin-marketing-services/#step-creative" },
                { name: "Campaign Launch", text: "Multi-format campaign deployment with LinkedIn Insight Tag setup and tracking validation. Timeline: Week 3.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/linkedin-marketing-services/#step-launch" },
                { name: "AI-Driven Optimization", text: "Continuous A/B testing, bid optimization, and audience refinement using AI-powered insights. Ongoing.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/linkedin-marketing-services/#step-optimization" },
                { name: "Scaling & ROI Reporting", text: "Budget scaling, new audience expansion, and transparent bi-weekly ROI dashboards. Ongoing.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/linkedin-marketing-services/#step-scaling" },
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
        <main style={{ "--page-selection-bg": "#0A66C2" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(linkedinSchema) }}
            />
            <Hero />
            <ServiceOverview />
            <SolutionTypes />
            <TechStack />
            <Process />
            <WhyChooseUs />
            <FAQ />
            <CTA />
        </main>
    );
}
