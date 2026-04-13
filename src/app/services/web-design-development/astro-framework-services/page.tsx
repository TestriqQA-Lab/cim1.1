import Hero from "@/components/services/web-design-development/astro-framework-services/Hero";
import ServiceOverview from "@/components/services/web-design-development/astro-framework-services/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/astro-framework-services/SolutionTypes";
import TechStack from "@/components/services/web-design-development/astro-framework-services/TechStack";
import Process from "@/components/services/web-design-development/astro-framework-services/Process";
import WhyChooseUs from "@/components/services/web-design-development/astro-framework-services/WhyChooseUs";
import FAQ from "@/components/services/web-design-development/astro-framework-services/FAQ";
import CTA from "@/components/services/web-design-development/astro-framework-services/CTA";

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
    title: 'Expert Astro Framework Services | 100% PageSpeed 🚀 2026',
    description: 'Build blazing-fast content sites, marketing pages, and modern web applications with our expert Astro framework services. 100% PageSpeed scores guaranteed.',
    url: '/services/web-design-development/astro-framework-services',
    keywords: [
        'Astro framework services',
        'Astro JS development',
        'Astro development agency',
        'custom Astro website',
        'Astro performance optimization',
        'static site generation',
        'islands architecture',
    ],
});

export default function AstroFrameworkPage() {
    const astroSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Expert Astro Framework Services | 100% PageSpeed 🚀 2026",
            description: "Build blazing-fast content sites, marketing pages, and modern web applications with our expert Astro framework services. 100% PageSpeed scores guaranteed.",
            urlPath: "/services/web-design-development/astro-framework-services",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/web-design-development/astro-framework-services/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/web-design-development/astro-framework-services/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/web-design-development/astro-framework-services/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Web Design & Development", url: "/services/web-design-development" },
            { name: "Astro Framework Services", url: "/services/web-design-development/astro-framework-services" },
        ], "https://www.cinuteinfomedia.com/services/web-design-development/astro-framework-services/#breadcrumb"),

        generateServiceSchema({
            name: "Astro Framework Development Services",
            description: "Lightning-fast sites with Astro Framework Services. As a leading Astro development agency, we harness Astro's revolutionary Islands Architecture and zero JavaScript by default to deliver custom Astro website development that achieves 100% PageSpeed scores and sub-1-second load times. 100+ sites delivered.",
            urlPath: "/services/web-design-development/astro-framework-services",
            serviceType: "Astro Framework Web Development",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                price: "3000",
                validFrom: "2025-01-01",
                description: "Astro framework development starting from $3,000 for simple sites up to $40,000+ for enterprise documentation portals. Free Astro consultation available.",
            },
        }),

        generateItemListSchema({
            id: "/services/web-design-development/astro-framework-services/#servicesList",
            name: "What We Build with Astro",
            description: "Comprehensive Astro framework services from marketing pages to multi-framework migrations.",
            items: [
                { name: "Marketing & Landing Pages", description: "High-converting Astro development for marketing landing pages that load instantly and rank higher in search results." },
                { name: "Content-Driven Websites", description: "High-performance blogs, portfolios, and publishing platforms with built-in MDX support and optimized content delivery." },
                { name: "E-commerce Storefronts", description: "Product catalogs and storefronts that convert, integrated with Shopify or headless CMS platforms." },
                { name: "Documentation Sites", description: "SaaS documentation sites, developer portals, and knowledge bases built with Astro's content collections." },
                { name: "Multi-Framework Projects", description: "React and Vue components in a single project using Astro's islands architecture for selective hydration." },
                { name: "Migration to Astro", description: "Migration services from Next.js or Gatsby to Astro, reducing bundle sizes by up to 90%." },
            ],
        }),

        generateItemListSchema({
            id: "/services/web-design-development/astro-framework-services/#solutionsList",
            name: "Astro Solutions We Deliver",
            description: "Industry-specific Astro solutions from marketing websites to e-commerce catalogs and blog platforms.",
            items: [
                { name: "Marketing Websites", description: "High-converting marketing websites with 100% PageSpeed scores and instant loading." },
                { name: "Corporate Sites", description: "Professional corporate websites with modern design and enterprise-grade performance." },
                { name: "Portfolio & Personal", description: "Stunning portfolio and personal websites showcasing work with minimal JavaScript overhead." },
                { name: "Documentation Portals", description: "Developer documentation and knowledge bases with fast search and organized content." },
                { name: "E-commerce Catalogs", description: "Product catalog storefronts integrated with headless commerce platforms." },
                { name: "Blog Platforms", description: "Content-first blog platforms with MDX support, RSS feeds, and SEO optimization." },
            ],
        }),

        generateFAQSchema([
            { question: "What are the benefits of Astro framework for my business?", answer: "Astro delivers 98-100 PageSpeed scores, sub-1-second load times, 25-40% better conversion rates, 30-50% lower hosting costs, and 40% faster development time compared to traditional frameworks." },
            { question: "How much does Astro framework development cost?", answer: "Costs vary by project scope: Simple sites ($3,000-$8,000, 2-3 weeks), Blog platforms ($8,000-$15,000, 3-5 weeks), E-commerce ($15,000-$30,000, 5-8 weeks), Documentation portals ($20,000-$40,000, 6-10 weeks), and Enterprise ($40,000+, 10-16 weeks)." },
            { question: "How to choose the right Astro development agency?", answer: "Look for agencies with 5+ live Astro projects, technical certifications, a portfolio showcasing performance metrics, and dedicated support SLAs for ongoing maintenance." },
            { question: "What is the difference between Astro and Next.js?", answer: "Astro is static-first with zero JavaScript by default, producing 10-50 KB bundles ideal for content sites. Next.js is JavaScript-heavy with 200-500 KB bundles, better suited for highly dynamic web applications." },
            { question: "How long does Astro development take?", answer: "Timelines depend on complexity: Small projects take 3-4 weeks, Medium projects 6-8 weeks, Large projects 12-14 weeks, and Enterprise projects 16-20 weeks." },
            { question: "Can Astro handle e-commerce and dynamic content?", answer: "Yes, Astro fully supports e-commerce and dynamic content via headless CMS integrations, Shopify SDK, Stripe payment integration, and interactive 'islands' for selective client-side hydration." },
            { question: "What post-launch support and maintenance do you provide?", answer: "We offer three tiers: Standard ($500/month), Premium ($1,200/month), and Enterprise (custom pricing). All plans include performance monitoring, security updates, and content deployment support." },
        ], "https://www.cinuteinfomedia.com/services/web-design-development/astro-framework-services/#faq"),

        generateHowToSchema({
            name: "Our Astro Development Process",
            description: "A proven 5-step methodology for building Astro framework websites that achieve 100% PageSpeed scores and sub-1-second load times.",
            steps: [
                { name: "Discovery & Content Strategy", text: "Content analysis, audience mapping, and defining optimal architecture for your Astro-powered site.", url: "https://www.cinuteinfomedia.com/services/web-design-development/astro-framework-services/#step-discovery" },
                { name: "Design & Component Planning", text: "Visual design system creation and islands architecture planning for selective hydration and maximum performance.", url: "https://www.cinuteinfomedia.com/services/web-design-development/astro-framework-services/#step-design" },
                { name: "Development & Integration", text: "Content-driven application development with CMS integration, component building, and API connections. Timeline: 15-25 days.", url: "https://www.cinuteinfomedia.com/services/web-design-development/astro-framework-services/#step-development" },
                { name: "Performance Optimization", text: "Fine-tuning for Core Web Vitals excellence, image optimization, CSS purging, and zero-JS validation.", url: "https://www.cinuteinfomedia.com/services/web-design-development/astro-framework-services/#step-optimization" },
                { name: "Deployment & Analytics", text: "Edge deployment on Vercel or Netlify, analytics setup, and ongoing support configuration. Timeline: 3-5 days.", url: "https://www.cinuteinfomedia.com/services/web-design-development/astro-framework-services/#step-deployment" },
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
        <main className="min-h-screen" style={{ "--page-selection-bg": "#7C3AED" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(astroSchema) }}
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
