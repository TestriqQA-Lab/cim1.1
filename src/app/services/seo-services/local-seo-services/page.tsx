import Hero from "@/components/services/seo-services/local-seo-services/Hero";
import ServiceOverview from "@/components/services/seo-services/local-seo-services/ServiceOverview";
import SolutionTypes from "@/components/services/seo-services/local-seo-services/SolutionTypes";
import TechStack from "@/components/services/seo-services/local-seo-services/TechStack";
import Process from "@/components/services/seo-services/local-seo-services/Process";
import WhyChooseUs from "@/components/services/seo-services/local-seo-services/WhyChooseUs";
import FAQ from "@/components/services/seo-services/local-seo-services/FAQ";
import CTA from "@/components/services/seo-services/local-seo-services/CTA";

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
    title: 'Local SEO Services, Google Maps Marketing Agency 2026',
    description: 'Dominate local search and attract high-intent customers. Rank in the top 3 Google Map Pack results and become visible to 83% of consumers searching for local businesses. 87% of clients in top 3 results, 3x local calls, 500+ businesses across 15+ industries, 340% review growth, 92% retention.',
    url: '/services/seo-services/local-seo-services',
    keywords: [
        'local SEO services',
        'Google Maps marketing agency',
        'local SEO company',
        'Google Business Profile optimization',
        'local SEO for small business',
        'GMB optimization services',
        'local citation building',
        'near me SEO',
        'Google Map Pack optimization',
        'local search engine optimization',
    ],
});

export default function LocalSEOPage() {
    const localSeoSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Local SEO Services, Google Maps Marketing Agency 2026",
            description: "Dominate local search and attract high-intent customers. Rank in the top 3 Google Map Pack results and become visible to 83% of consumers searching for local businesses. 87% of clients in top 3 results, 3x local calls, 500+ businesses across 15+ industries, 340% review growth, 92% retention.",
            urlPath: "/services/seo-services/local-seo-services",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/seo-services/local-seo-services/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/seo-services/local-seo-services/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/seo-services/local-seo-services/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "SEO Services", url: "/services/seo-services" },
            { name: "Local SEO Services", url: "/services/seo-services/local-seo-services" },
        ], "https://www.cinuteinfomedia.com/services/seo-services/local-seo-services/#breadcrumb"),

        generateServiceSchema({
            name: "Local SEO Services",
            description: "Dominate local search and attract high-intent customers in your area. Rank in the top 3 Google Map Pack results and become visible to 83% of consumers searching for local businesses. 87% of clients in top 3 Map Pack results, 3x increase in inbound phone leads, 500+ businesses served across 15+ industries, 340% review growth, 92% client retention rate, $12-$18 ROI for every $1 spent.",
            urlPath: "/services/seo-services/local-seo-services",
            serviceType: "Local SEO & Google Maps Marketing",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                price: "800",
                validFrom: "2025-01-01",
                description: "Local SEO services: Single-Location SMB $800-$1,500/mo, Multi-Location (2-5) $1,500-$3,500/mo, Franchise/Enterprise (6+) $3,500-$8,000/mo. Free local SEO audit included. 90-day performance guarantee: top 5 Map Pack for 3 primary keywords or we work free until achieved.",
            },
        }),

        generateItemListSchema({
            id: "/services/seo-services/local-seo-services/#coreServicesList",
            name: "Core Local SEO Solutions",
            description: "Full-spectrum local SEO from Google Business Profile management and citation building to review management, on-page localization, Map Pack optimization, and mobile/near-me search.",
            items: [
                { name: "Google Business Profile Management", description: "Complete setup, verification, and ongoing optimization including Q&As, posts, booking buttons, and product catalogs." },
                { name: "Local Citations & NAP Consistency", description: "Building authoritative citations across 50+ high-DA directories with manual audit and correction of inconsistencies." },
                { name: "Review Management & Reputation SEO", description: "Automated SMS/email review request workflows and professional response management boosting Google's local ranking signals." },
                { name: "On-Page Localization & Schema", description: "Location-specific keywords, geo-targeted content, and dedicated landing pages with unique LocalBusiness schema markup." },
                { name: "Google Map Pack Optimization", description: "Proprietary tactics to secure the Local 3-Pack by optimizing for proximity, relevance, and prominence signals." },
                { name: "Mobile & 'Near Me' Search Optimization", description: "Flawless mobile experience with 2-second load times catering to 76% of local searches on mobile devices." },
            ],
        }),

        generateItemListSchema({
            id: "/services/seo-services/local-seo-services/#industrySolutionsList",
            name: "Industry-Specific Local SEO Solutions",
            description: "Tailored local SEO strategies for hospitality, medical/dental, legal services, home services, local retail, and real estate.",
            items: [
                { name: "Hospitality", description: "Rank #1 for 'best restaurants near me' with reservation schema driving 42% more table bookings." },
                { name: "Medical & Dental", description: "#1 for 'doctor near me' using HIPAA-compliant review strategies and medical schema markup." },
                { name: "Legal Services", description: "Dominating practice area + city keywords with citations on Avvo, Justia, and FindLaw." },
                { name: "Home Services", description: "Radius targeting for emergency plumber/HVAC queries. Clients average 198% more service calls from Maps." },
                { name: "Local Retail", description: "Product inventory feeds synced to GBP driving 67% increase in store visits." },
                { name: "Real Estate", description: "Hyperlocal content targeting neighborhoods with MLS integration. 83% more buyer/seller inquiries." },
            ],
        }),

        generateFAQSchema([
            { question: "What is local SEO and how does it work?", answer: "Local SEO focuses on appearing in the Google Map Pack and geo-modified organic results by optimizing for Proximity (distance), Relevance (matching query), and Prominence (reputation/reviews)." },
            { question: "How much do local SEO services cost per month in 2026?", answer: "Single-Location SMB: $800-$1,500/month. Multi-Location (2-5): $1,500-$3,500/month. Franchise/Enterprise (6+): $3,500-$8,000/month." },
            { question: "How do I rank my business on Google Maps?", answer: "Focus on GBP optimization, identical NAP consistency across 50+ directories, consistent 5-star reviews, and local backlinks from chambers of commerce or news sites." },
            { question: "What is the difference between SEO and local SEO?", answer: "Traditional SEO targets broad keywords for digital traffic; local SEO targets users with local intent (e.g., 'near me') to drive physical store visits and local calls." },
            { question: "How long does it take to see results from local SEO?", answer: "Initial impressions and reviews increase in 30 days; Map Pack rankings improve in 60 days; dominance of #1-#3 positions usually achieved within 6 months." },
        ]),

        generateHowToSchema({
            name: "Our 6-Phase Local SEO Process",
            description: "A proven 6-phase local SEO methodology that gets 87% of clients into the top 3 Map Pack results with 3x local calls and 340% review growth.",
            steps: [
                { name: "Local Presence Audit & Competitor Analysis", text: "Deep-dive into 20+ ranking factors to create a 12-month Local SEO Roadmap.", url: "https://www.cinuteinfomedia.com/services/seo-services/local-seo-services/#step-audit" },
                { name: "Google Business Profile Optimization", text: "Category selection, 20+ geotagged photos, and attribute enhancement. Timeline: 7-10 business days.", url: "https://www.cinuteinfomedia.com/services/seo-services/local-seo-services/#step-gbp" },
                { name: "On-Page Localization & Schema Implementation", text: "Installing LocalBusiness schema and creating geo-targeted pages. SEO Impact: 40-60% ranking increase within 30 days.", url: "https://www.cinuteinfomedia.com/services/seo-services/local-seo-services/#step-localization" },
                { name: "Citation Building & Data Cleanup", text: "Auditing existing citations and building 50+ new high-authority listings with 100% data synchronization.", url: "https://www.cinuteinfomedia.com/services/seo-services/local-seo-services/#step-citations" },
                { name: "Reputation Strategy & Review Generation", text: "Automated review request systems (SMS/Email) and response management boosting CTR by 15%.", url: "https://www.cinuteinfomedia.com/services/seo-services/local-seo-services/#step-reviews" },
                { name: "Monthly Reporting & Continuous Optimization", text: "Real-time dashboards showing Map Pack rankings, call volume, and store visits with monthly strategy calls.", url: "https://www.cinuteinfomedia.com/services/seo-services/local-seo-services/#step-reporting" },
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
        <main style={{ "--page-selection-bg": "#F59E0B" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localSeoSchema) }}
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
