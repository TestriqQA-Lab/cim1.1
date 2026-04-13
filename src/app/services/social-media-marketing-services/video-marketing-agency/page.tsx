import React from "react";
import Hero from "@/components/services/social-media-marketing-services/video-marketing-agency/Hero";
import ServiceOverview from "@/components/services/social-media-marketing-services/video-marketing-agency/ServiceOverview";
import SolutionTypes from "@/components/services/social-media-marketing-services/video-marketing-agency/SolutionTypes";
import TechStack from "@/components/services/social-media-marketing-services/video-marketing-agency/TechStack";
import Process from "@/components/services/social-media-marketing-services/video-marketing-agency/Process";
import WhyChooseUs from "@/components/services/social-media-marketing-services/video-marketing-agency/WhyChooseUs";
import FAQ from "@/components/services/social-media-marketing-services/video-marketing-agency/FAQ";
import CTA from "@/components/services/social-media-marketing-services/video-marketing-agency/CTA";

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
    title: 'YouTube Marketing Services | Top Agency for ROI & Growth',
    description: 'Elite YouTube Marketing Services by a globally recognized YouTube marketing agency with 30+ years combined expertise. We engineer high-conversion video ecosystems — not just posts. 300% traffic growth, 25% CPA reduction, 95% client retention.',
    url: '/services/social-media-marketing-services/video-marketing-agency',
    keywords: [
        'YouTube marketing services',
        'YouTube marketing agency',
        'YouTube ads management',
        'video marketing agency',
        'YouTube SEO services',
        'YouTube Shorts marketing',
        'video advertising agency',
    ],
});

export default function YouTubeMarketingPage() {
    const ytSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "YouTube Marketing Services | Top Agency for ROI & Growth",
            description: "Elite YouTube Marketing Services by a globally recognized YouTube marketing agency with 30+ years combined expertise. We engineer high-conversion video ecosystems — not just posts. 300% traffic growth, 25% CPA reduction, 95% client retention.",
            urlPath: "/services/social-media-marketing-services/video-marketing-agency",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/video-marketing-agency/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/video-marketing-agency/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/video-marketing-agency/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Social Media Marketing Services", url: "/services/social-media-marketing-services" },
            { name: "YouTube Marketing Services", url: "/services/social-media-marketing-services/video-marketing-agency" },
        ], "https://www.cinuteinfomedia.com/services/social-media-marketing-services/video-marketing-agency/#breadcrumb"),

        generateServiceSchema({
            name: "YouTube Marketing Services",
            description: "Elite YouTube Marketing Services by a globally recognized YouTube marketing agency. We don't just post videos — we engineer high-conversion ecosystems with ROI-first strategies, EEAT-certified content, and advanced video marketing. 300% traffic growth, 25% CPA reduction, 95% client retention, 24/7 expert support.",
            urlPath: "/services/social-media-marketing-services/video-marketing-agency",
            serviceType: "YouTube Video Marketing & Ads Management",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                price: "1500",
                validFrom: "2025-01-01",
                description: "YouTube marketing services from $1,500 to $10,000+ per month depending on ad spend and production needs. Includes free channel audit, custom video strategy, competitor analysis, and campaign forecast.",
            },
        }),

        generateItemListSchema({
            id: "/services/social-media-marketing-services/video-marketing-agency/#coreServicesList",
            name: "Comprehensive YouTube Marketing Solutions",
            description: "Full-spectrum YouTube marketing from ads and PPC to SEO, B2B lead gen, e-commerce ads, influencer marketing, and Shorts strategy.",
            items: [
                { name: "YouTube Ads & PPC", description: "Expertly managed TrueView, Bumper, and In-stream ads with advanced targeting and bid optimization." },
                { name: "YouTube SEO Services", description: "Advanced video SEO for 2026 AI Overviews covering titles, descriptions, transcripts, and thumbnails." },
                { name: "B2B Lead Generation", description: "Authority-building content and remarketing ads designed to generate high-quality B2B leads." },
                { name: "E-commerce Video Ads", description: "Direct-to-consumer shoppable ads using YouTube Action formats for high-intent product campaigns." },
                { name: "Influencer Marketing", description: "Access to a verified creator network with full ROI tracking and campaign management." },
                { name: "YouTube Shorts Strategy", description: "High-retention frameworks for viral growth, channel subscriptions, and brand awareness." },
            ],
        }),

        generateItemListSchema({
            id: "/services/social-media-marketing-services/video-marketing-agency/#industrySolutionsList",
            name: "Sector-Specific YouTube Solutions",
            description: "Tailored YouTube marketing strategies for financial services, real estate, startups, B2B tech/SaaS, e-commerce/retail, and health/wellness.",
            items: [
                { name: "Financial Services", description: "High-trust content for fintech and banking with 40% lead volume boost through educational videos." },
                { name: "Real Estate Agents", description: "Immersive property tours and neighborhood spotlights optimized for local search visibility." },
                { name: "Growth for Startups", description: "Agile, cost-effective video marketing models for rapid startup scaling and brand building." },
                { name: "B2B Tech & SaaS", description: "Software demos and founder-led thought leadership videos for SaaS growth and conversions." },
                { name: "E-commerce & Retail", description: "Drive sales with shoppable ads, product showcases, and high-intent viewer targeting." },
                { name: "Health & Wellness", description: "Patient stories, expert AMAs, and trust-building educational content for healthcare brands." },
            ],
        }),

        generateFAQSchema([
            { question: "How much do YouTube marketing services cost?", answer: "YouTube marketing services range from $1,500 to $10,000+ per month depending on ad spend and production needs." },
            { question: "How long does it take to see ROI from YouTube marketing?", answer: "YouTube SEO takes 3-6 months for organic results. YouTube Ads show performance signals in 30-60 days with proper optimization." },
            { question: "What are the benefits of hiring a YouTube advertising agency?", answer: "A specialized agency delivers 25% lower CPA, expert scaling, and access to advanced Google-certified YouTube ads managers." },
            { question: "What is included in a full-service YouTube ads management package?", answer: "Full-service packages include strategy development, script writing, high-CTR thumbnail design, ad management, and monthly ROI reporting." },
            { question: "How do I choose the best YouTube marketing service?", answer: "Match the agency's framework — Growth, Leads, or Sales — with your specific business goals. Look for proven case studies and transparent reporting." },
            { question: "Do you offer YouTube Shorts marketing strategies?", answer: "Yes, we provide specialized high-retention frameworks for viral growth and channel subscriptions through YouTube Shorts." },
        ]),

        generateHowToSchema({
            name: "Our 6-Phase YouTube Marketing Process",
            description: "A proven 6-phase methodology for YouTube marketing that delivers 300% traffic growth, 25% CPA reduction, and 95% client retention.",
            steps: [
                { name: "Channel Audit & Strategy", text: "Historical data analysis and technical SEO hygiene check for the YouTube channel. Timeline: Week 1.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/video-marketing-agency/#step-audit" },
                { name: "Content & Scripting", text: "Video script writing with LSI keywords and EEAT signals for search optimization. Timeline: Week 1-2.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/video-marketing-agency/#step-scripting" },
                { name: "Production Support", text: "Professional video production and high-CTR thumbnail design for maximum click-through. Timeline: Week 2-3.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/video-marketing-agency/#step-production" },
                { name: "Launch & Management", text: "Deployment across TrueView, In-stream, and Discovery ad formats with precise targeting. Timeline: Week 3-4.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/video-marketing-agency/#step-launch" },
                { name: "Optimization & Testing", text: "A/B creative testing and real-time bid optimization for continuous performance improvement. Ongoing.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/video-marketing-agency/#step-optimization" },
                { name: "Reporting & ROI", text: "Custom dashboards tracking every dollar from impression to conversion with transparent monthly reporting. Monthly.", url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/video-marketing-agency/#step-reporting" },
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
        <main className="min-h-screen" style={{ "--page-selection-bg": "#FF0000" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(ytSchema) }}
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
