import Hero from "@/components/services/web-design-development/wordpress-development-services/Hero";
import ServiceOverview from "@/components/services/web-design-development/wordpress-development-services/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/wordpress-development-services/SolutionTypes";
import TechStack from "@/components/services/web-design-development/wordpress-development-services/TechStack";
import Process from "@/components/services/web-design-development/wordpress-development-services/Process";
import WhyChooseUs from "@/components/services/web-design-development/wordpress-development-services/WhyChooseUs";
import FAQ from "@/components/services/web-design-development/wordpress-development-services/FAQ";
import CTA from "@/components/services/web-design-development/wordpress-development-services/CTA";

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
    title: 'WordPress Development Services | Custom & Enterprise WP Agency',
    description: 'Scale your business with enterprise-grade WordPress development services built for the 2026 digital landscape. From custom-engineered themes to complex WooCommerce solutions.',
    url: '/services/web-design-development/wordpress-development-services',
    keywords: [
        'wordpress development services',
        'custom wordpress development',
        'wordpress agency',
        'woocommerce development',
        'wordpress theme development',
        'wordpress plugin development',
        'enterprise wordpress',
        'wordpress migration services',
    ],
});

export default function WordPressDevelopmentPage() {
    const wpSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "WordPress Development Services | Custom & Enterprise WP Agency",
            description: "Scale your business with enterprise-grade WordPress development services built for the 2026 digital landscape. From custom-engineered themes to complex WooCommerce solutions.",
            urlPath: "/services/web-design-development/wordpress-development-services",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/web-design-development/wordpress-development-services/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/web-design-development/wordpress-development-services/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/web-design-development/wordpress-development-services/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Web Design & Development", url: "/services/web-design-development" },
            { name: "WordPress Development Services", url: "/services/web-design-development/wordpress-development-services" },
        ], "https://www.cinuteinfomedia.com/services/web-design-development/wordpress-development-services/#breadcrumb"),

        generateServiceSchema({
            name: "Custom WordPress Development Services & Enterprise WP Agency",
            description: "Enterprise-grade WordPress development services built for the 2026 digital landscape. From custom-engineered themes to complex WooCommerce solutions, we blend technical mastery with ROI-driven marketing. 500+ projects delivered, 95% bug-free deployment, 300% traffic growth.",
            urlPath: "/services/web-design-development/wordpress-development-services",
            serviceType: "WordPress Development & WooCommerce",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                price: "3000",
                validFrom: "2025-01-01",
                description: "WordPress development starting from $3,000 for standard business sites up to $25,000+ for enterprise portals and complex e-commerce builds. Get a quick quote today.",
            },
        }),

        generateItemListSchema({
            id: "/services/web-design-development/wordpress-development-services/#servicesList",
            name: "Comprehensive WordPress Development Services",
            description: "Full-spectrum WordPress services from custom theme development to security hardening.",
            items: [
                { name: "WordPress Theme Development", description: "Pixel-perfect, lightweight, and custom-coded themes optimized for performance and brand identity." },
                { name: "WooCommerce Development", description: "End-to-end e-commerce development including custom plugins, API integrations, and optimized checkout flows." },
                { name: "WordPress Plugin Development", description: "Custom-built plugins engineered for speed, security, and unique business features." },
                { name: "WordPress Migration", description: "Zero data loss migrations from any CMS to WordPress with full SEO retention and URL mapping." },
                { name: "Performance & Speed Optimization", description: "90+ PageSpeed scores, optimized Core Web Vitals, and server-side caching for lightning-fast loading." },
                { name: "Security & Hardening", description: "Enterprise-level security audits, malware protection, firewall configuration, and PCI compliance." },
            ],
        }),

        generateItemListSchema({
            id: "/services/web-design-development/wordpress-development-services/#solutionsList",
            name: "WordPress Solutions We Build",
            description: "Industry-specific WordPress solutions from blog platforms to headless enterprise architectures.",
            items: [
                { name: "Blog & Publishing Platforms", description: "Lightning-fast editorial interfaces optimized for global SEO and content distribution." },
                { name: "WooCommerce E-commerce Stores", description: "Scalable online shops for high-volume transactions with custom checkout and inventory management." },
                { name: "Membership & LMS", description: "Advanced sites for online courses with automated billing, gated content, and progress tracking." },
                { name: "Enterprise & Corporate Portals", description: "Stable, secure, and accessible (WCAG 2.2 compliant) solutions for large organizations." },
                { name: "Multisite & Global Networks", description: "Management of hundreds of sub-sites from a single dashboard with centralized control." },
                { name: "Headless WordPress Solutions", description: "React/Next.js frontend powered by WordPress backend for unmatched speed, flexibility, and security." },
            ],
        }),

        generateFAQSchema([
            { question: "What are the benefits of custom WordPress development?", answer: "Custom WordPress development ensures your site is built specifically for your brand's needs, without the bloat of pre-made themes. This leads to faster load times, better security, and a unique user experience that increases conversions." },
            { question: "How much does it cost to build a custom WordPress website in 2026?", answer: "The WordPress development cost varies by complexity. A standard business site may range from $3,000 to $10,000, while enterprise portals or complex e-commerce builds can exceed $25,000. Contact us for a precise quote." },
            { question: "How do I choose the best WordPress development agency?", answer: "Look for an agency with a deep portfolio, transparent WordPress maintenance and support services, and verifiable reviews. A top-tier agency should prioritize SEO, speed, and mobile responsiveness." },
            { question: "What is included in WordPress maintenance services?", answer: "Our WordPress maintenance services include weekly core/plugin updates, daily backups, 24/7 security monitoring, and uptime checks to ensure your business never goes offline." },
            { question: "How long does it take to develop a custom WordPress site?", answer: "A custom project typically takes 4-12 weeks depending on features like WooCommerce development or WordPress API integration. We provide a detailed timeline during the discovery phase." },
        ], "https://www.cinuteinfomedia.com/services/web-design-development/wordpress-development-services/#faq"),

        generateHowToSchema({
            name: "Our WordPress Development Process",
            description: "A proven 5-step methodology for building WordPress solutions that have delivered 500+ projects with 95% bug-free deployment and 300% traffic growth.",
            steps: [
                { name: "Discovery & Strategy", text: "Technical roadmap creation and ROI goal alignment with stakeholder interviews and competitive analysis.", url: "https://www.cinuteinfomedia.com/services/web-design-development/wordpress-development-services/#step-discovery" },
                { name: "Design & Prototyping", text: "User-centric UI/UX mockups tailored to your brand with interactive prototypes and design system creation.", url: "https://www.cinuteinfomedia.com/services/web-design-development/wordpress-development-services/#step-design" },
                { name: "Custom Development", text: "Clean, scalable code using the latest WordPress 6.7+ ecosystem, Gutenberg blocks, and custom plugins.", url: "https://www.cinuteinfomedia.com/services/web-design-development/wordpress-development-services/#step-development" },
                { name: "SEO & QA", text: "Rigorous testing, speed optimization, Core Web Vitals tuning, and comprehensive SEO checks.", url: "https://www.cinuteinfomedia.com/services/web-design-development/wordpress-development-services/#step-qa" },
                { name: "Launch & Support", text: "Seamless deployment on WP Engine or AWS, analytics setup, and proactive post-launch maintenance.", url: "https://www.cinuteinfomedia.com/services/web-design-development/wordpress-development-services/#step-launch" },
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
        <main className="min-h-screen" style={{ "--page-selection-bg": "#0073AA" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(wpSchema) }}
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
