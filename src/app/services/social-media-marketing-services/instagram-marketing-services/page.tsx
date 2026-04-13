import Hero from "@/components/services/social-media-marketing-services/instagram-marketing-services/Hero";
import ServiceOverview from "@/components/services/social-media-marketing-services/instagram-marketing-services/ServiceOverview";
import SolutionTypes from "@/components/services/social-media-marketing-services/instagram-marketing-services/SolutionTypes";
import TechStack from "@/components/services/social-media-marketing-services/instagram-marketing-services/TechStack";
import Process from "@/components/services/social-media-marketing-services/instagram-marketing-services/Process";
import WhyChooseUs from "@/components/services/social-media-marketing-services/instagram-marketing-services/WhyChooseUs";
import FAQ from "@/components/services/social-media-marketing-services/instagram-marketing-services/FAQ";
import CTA from "@/components/services/social-media-marketing-services/instagram-marketing-services/CTA";

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
    title: 'Best Instagram Marketing Agency | #1 Instagram Growth & Ads 2026',
    description: 'Global Instagram Marketing Agency helping brands scale with 2026 trend-first strategies. 2B+ monthly users, 95% success rate for high-growth brands, 300% average increases in organic reach & engagement, 4x higher engagement than other platforms.',
    url: '/services/social-media-marketing-services/instagram-marketing-services',
    keywords: [
        'Instagram Marketing Services',
        'Instagram Marketing Agency',
        'Instagram Advertising Services',
        'Instagram Marketing Company',
        'Instagram Management Services',
        'Instagram Reels marketing',
        'Instagram influencer marketing',
    ],
});

export default function InstagramMarketingPage() {
    const igSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Best Instagram Marketing Agency | #1 Instagram Growth & Ads 2026",
            description: "Global Instagram Marketing Agency helping brands scale with 2026 trend-first strategies. 2B+ monthly users, 95% success rate for high-growth brands, 300% average increases in organic reach & engagement, 4x higher engagement than other platforms.",
            urlPath: "/services/social-media-marketing-services/instagram-marketing-services",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/instagram-marketing-services/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/instagram-marketing-services/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/instagram-marketing-services/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Social Media Marketing Services", url: "/services/social-media-marketing-services" },
            { name: "Instagram Marketing Services", url: "/services/social-media-marketing-services/instagram-marketing-services" },
        ], "https://www.cinuteinfomedia.com/services/social-media-marketing-services/instagram-marketing-services/#breadcrumb"),

        generateServiceSchema({
            name: "Instagram Marketing Services",
            description: "Global Instagram Marketing Agency helping brands transition from 'just posting' to high-impact ROI systems using data-driven 2026 trend-first strategies. With 2B+ monthly active users, Instagram is a global marketplace. 95% success rate for high-growth e-commerce brands, 300% average increase in organic reach and engagement, 30+ years combined digital marketing expertise.",
            urlPath: "/services/social-media-marketing-services/instagram-marketing-services",
            serviceType: "Instagram Marketing & Growth",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                price: "1500",
                validFrom: "2025-01-01",
                description: "Instagram marketing services ranging from $1,500 to $10,000+ per month. Includes free Instagram audit, Reels production, ad management, influencer partnerships, and shopping setup.",
            },
        }),

        generateItemListSchema({
            id: "/services/social-media-marketing-services/instagram-marketing-services/#coreServicesList",
            name: "Core Instagram Marketing Services",
            description: "Full-spectrum Instagram marketing from Reels production and content creation to advertising, influencer partnerships, shopping, and retargeting.",
            items: [
                { name: "Instagram Reels Marketing & Production", description: "Viral-worthy short-form video content that hooks viewers in 0.5 seconds with trend-first storytelling." },
                { name: "Custom Instagram Content Creation", description: "Cohesive brand identity and aesthetic design with grid mapping and high-ERO carousel layouts." },
                { name: "Instagram Advertising & Ad Management", description: "Advanced Meta Pixel tracking and Conversion API (CAPI) integration for full-funnel ad optimization." },
                { name: "Influencer Partnerships & UGC", description: "Building trust through User-Generated Content and strategic influencer seeding programs." },
                { name: "Instagram Shopping & Commerce", description: "Setup and optimization of Instagram Shop with shoppable posts and product tagging." },
                { name: "Post-Conversion & Retargeting", description: "Retargeting loops and full-funnel ad strategies for maximum customer lifetime value." },
            ],
        }),

        generateItemListSchema({
            id: "/services/social-media-marketing-services/instagram-marketing-services/#industrySolutionsList",
            name: "Industry-Specific Instagram Solutions",
            description: "Tailored Instagram marketing solutions for e-commerce D2C, fashion & beauty, healthcare, real estate & luxury, and B2B tech.",
            items: [
                { name: "E-commerce & D2C", description: "8.5x average ROAS via automated catalog sync, DPA deployment, and shoppable posts." },
                { name: "Fashion & Beauty", description: "Viral aesthetic mapping with high-production Reels and 'Shop the Look' Stories campaigns." },
                { name: "Healthcare & Medical", description: "Professional trust and compliance via educational Reels and HIPAA-compliant lead generation." },
                { name: "Real Estate & Luxury", description: "High-ticket visual tours featuring drone footage and precision HNI targeting." },
                { name: "B2B & Tech", description: "Thought leadership via value carousels, case study Reels, and webinar lead generation." },
            ],
        }),

        generateFAQSchema([
            { question: "What are Instagram marketing services?", answer: "Instagram marketing services encompass activities like account management, content creation, advertising, influencer outreach, and community engagement to drive brand awareness and sales on the platform." },
            { question: "How much do Instagram marketing services cost?", answer: "Costs vary by scope. Most agencies offer tiers ranging from $1,500 to $10,000+ per month depending on the level of service, content production, and ad spend management required." },
            { question: "What should an Instagram marketing strategy include?", answer: "A comprehensive strategy should include visual brand guidelines, a content calendar (Reels/Stories/Posts), targeted hashtags, ad management, and influencer partnership plans." },
            { question: "Why should businesses use Instagram marketing services?", answer: "To stay ahead of algorithm changes (like Reels and Social Commerce), maintain brand aesthetics, and achieve higher ROI and CTR than in-house management alone can deliver." },
            { question: "How do I choose the best Instagram marketing agency?", answer: "Look for a proven track record (E-E-A-T), industry-specific experience, transparency in reporting, and a focus on ROI rather than just follower counts." },
        ]),

        generateHowToSchema({
            name: "Our 6-Step Instagram Growth Framework",
            description: "A proven 6-step data-driven framework for Instagram marketing that has delivered 95% success rate and 300% average increase in organic reach and engagement.",
            steps: [
                { name: "Account Audit & Optimization", text: "Algorithm signal analysis and conversion trap detection to identify growth opportunities.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/instagram-marketing-services/#step-audit" },
                { name: "Strategy & Hashtag Research", text: "Bespoke content pillars and niche hashtag blueprints tailored to your brand.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/instagram-marketing-services/#step-strategy" },
                { name: "Content Production & Aesthetic Mapping", text: "Grid aesthetic mapping and high-ERO carousel design for cohesive brand identity.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/instagram-marketing-services/#step-content" },
                { name: "Launch & Growth Management", text: "AI-driven peak-time publishing and UGC activation loops for rapid growth.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/instagram-marketing-services/#step-launch" },
                { name: "Ad Deployment & Scaling", text: "Full-funnel setup with CAPI event tracking and budget scaling for maximum ROAS.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/instagram-marketing-services/#step-ads" },
                { name: "Analyze, Report & Iterate", text: "Deep-dive ROI analysis and quarterly roadmap updates for continuous improvement.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/instagram-marketing-services/#step-analyze" },
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
        <main style={{ "--page-selection-bg": "#E1306C" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(igSchema) }}
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
