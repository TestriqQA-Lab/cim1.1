import Hero from "@/components/services/web-design-development/drupal-cms/Hero";
import ServiceOverview from "@/components/services/web-design-development/drupal-cms/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/drupal-cms/SolutionTypes";
import TechStack from "@/components/services/web-design-development/drupal-cms/TechStack";
import Process from "@/components/services/web-design-development/drupal-cms/Process";
import WhyChooseUs from "@/components/services/web-design-development/drupal-cms/WhyChooseUs";
import CTA from "@/components/services/web-design-development/drupal-cms/CTA";

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
    title: 'Drupal CMS Development Services | Enterprise & Government Solutions',
    description: 'Build secure, scalable, and multilingual digital experiences with Drupal CMS. Trusted by governments, enterprises, and leading organizations worldwide. Drupal 10/11, multisite, headless CMS, 100+ languages.',
    url: '/services/web-design-development/drupal-cms',
    keywords: [
        'drupal development services',
        'drupal cms development',
        'enterprise drupal solutions',
        'drupal migration services',
        'drupal multisite management',
        'drupal government websites',
        'drupal headless cms',
        'drupal module development',
    ],
});

export default function DrupalCMSPage() {
    const drupalSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Drupal CMS Development Services | Enterprise & Government Solutions",
            description: "Build secure, scalable, and multilingual digital experiences with Drupal CMS. Trusted by governments, enterprises, and leading organizations worldwide. Drupal 10/11, multisite, headless CMS, 100+ languages.",
            urlPath: "/services/web-design-development/drupal-cms",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/web-design-development/drupal-cms/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/web-design-development/drupal-cms/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/web-design-development/drupal-cms/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Web Design & Development", url: "/services/web-design-development" },
            { name: "Drupal CMS Development", url: "/services/web-design-development/drupal-cms" },
        ], "https://www.cinuteinfomedia.com/services/web-design-development/drupal-cms/#breadcrumb"),

        generateServiceSchema({
            name: "Drupal CMS Development Services",
            description: "Powerful websites with Drupal CMS. Build secure, scalable, and multilingual digital experiences trusted by governments, enterprises, and leading organizations worldwide. Enterprise security, multilingual excellence with 100+ languages, certified Drupal experts, and scalable architecture.",
            urlPath: "/services/web-design-development/drupal-cms",
            serviceType: "Drupal CMS Development & Enterprise Solutions",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Free Drupal consultation available. Custom Drupal development, Drupal 10/11 migration, multisite management, headless CMS, and enterprise security solutions.",
            },
        }),

        generateItemListSchema({
            id: "/services/web-design-development/drupal-cms/#servicesList",
            name: "Comprehensive Drupal Solutions",
            description: "Full-spectrum Drupal CMS services from custom development to migration, multisite management, and 24/7 support.",
            items: [
                { name: "Custom Drupal Development", description: "Bespoke Drupal websites tailored to specific business needs with custom themes and functionality." },
                { name: "Module & Theme Development", description: "Custom modules for unique functionality and brand-aligned themes built with Twig templating." },
                { name: "Migration & Upgrades", description: "Seamless migration from Drupal 7/8/9 to Drupal 10/11 or from other platforms with zero data loss." },
                { name: "Multisite Management", description: "Centralized management of multiple sites from a single codebase with shared configurations." },
                { name: "API & Integration", description: "Connectivity with CRM, ERP, and marketing tools via REST and GraphQL APIs." },
                { name: "Support & Maintenance", description: "24/7 technical support, performance optimization, and security updates for Drupal sites." },
            ],
        }),

        generateItemListSchema({
            id: "/services/web-design-development/drupal-cms/#solutionsList",
            name: "Drupal Industry Solutions",
            description: "Industry-specific Drupal solutions for government, education, healthcare, non-profit, media, and enterprise sectors.",
            items: [
                { name: "Government Portals", description: "Secure and compliant platforms for government agencies with accessibility standards and multilingual support." },
                { name: "Higher Education", description: "Portals and LMS for academic institutions with student management and course delivery." },
                { name: "Healthcare Organizations", description: "HIPAA-compliant portals and provider directories for healthcare institutions." },
                { name: "Non-Profit & NGOs", description: "Platforms for fundraising, cause awareness, and donor management." },
                { name: "Media & Publishing", description: "High-traffic editorial and subscription platforms with robust content workflows." },
                { name: "Enterprise Corporations", description: "Large-scale corporate websites and intranets with complex user roles and permissions." },
            ],
        }),

        generateHowToSchema({
            name: "Our Drupal Development Process",
            description: "A structured 5-step methodology for building secure, scalable Drupal CMS solutions trusted by governments and enterprises worldwide.",
            steps: [
                { name: "Discovery & Planning", text: "Defining goals, user roles, content types, and technical requirements for the Drupal solution.", url: "https://www.cinuteinfomedia.com/services/web-design-development/drupal-cms/#step-discovery" },
                { name: "Architecture & Design", text: "Content modeling, taxonomy planning, and high-performance theme design with Twig templating.", url: "https://www.cinuteinfomedia.com/services/web-design-development/drupal-cms/#step-architecture" },
                { name: "Drupal Development", text: "Custom module coding, theme implementation, API integrations, and Drupal 10/11 configuration.", url: "https://www.cinuteinfomedia.com/services/web-design-development/drupal-cms/#step-development" },
                { name: "Testing & Quality Assurance", text: "Comprehensive checks for accessibility (WCAG), security scanning, performance testing, and cross-browser validation.", url: "https://www.cinuteinfomedia.com/services/web-design-development/drupal-cms/#step-testing" },
                { name: "Launch & Support", text: "Production deployment on Acquia/Pantheon/AWS, team training, and ongoing 24/7 technical support.", url: "https://www.cinuteinfomedia.com/services/web-design-development/drupal-cms/#step-launch" },
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
        <main className="min-h-screen" style={{ "--page-selection-bg": "#0678BE" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(drupalSchema) }}
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
