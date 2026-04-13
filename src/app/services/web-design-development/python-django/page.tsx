import Hero from "@/components/services/web-design-development/python-django/Hero";
import ServiceOverview from "@/components/services/web-design-development/python-django/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/python-django/SolutionTypes";
import TechStack from "@/components/services/web-design-development/python-django/TechStack";
import Process from "@/components/services/web-design-development/python-django/Process";
import WhyChooseUs from "@/components/services/web-design-development/python-django/WhyChooseUs";
import CTA from "@/components/services/web-design-development/python-django/CTA";

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
    title: 'Python & Django Development Services | Scalable Enterprise Solutions',
    description: 'From enterprise web applications to powerful APIs, we leverage Python\'s versatility and Django\'s rapid development to build secure, scalable solutions. 200+ apps delivered with 8+ years experience.',
    url: '/services/web-design-development/python-django',
    keywords: [
        'python development services',
        'django development company',
        'python web application',
        'django rest framework',
        'fastapi development',
        'python saas development',
        'django enterprise solutions',
        'python api development',
    ],
});

export default function PythonDjangoPage() {
    const pythonSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Python & Django Development Services | Scalable Enterprise Solutions",
            description: "From enterprise web applications to powerful APIs, we leverage Python's versatility and Django's rapid development to build secure, scalable solutions. 200+ apps delivered with 8+ years experience.",
            urlPath: "/services/web-design-development/python-django",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/web-design-development/python-django/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/web-design-development/python-django/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/web-design-development/python-django/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Web Design & Development", url: "/services/web-design-development" },
            { name: "Python & Django Development", url: "/services/web-design-development/python-django" },
        ], "https://www.cinuteinfomedia.com/services/web-design-development/python-django/#breadcrumb"),

        generateServiceSchema({
            name: "Python & Django Development Services",
            description: "Scalable solutions with Python & Django. From enterprise web applications to powerful APIs, we leverage Python 3.13's versatility and Django 5.1's rapid development to build secure, scalable solutions. 200+ apps delivered, 8+ years experience, enterprise-grade architecture.",
            urlPath: "/services/web-design-development/python-django",
            serviceType: "Python & Django Web Application Development",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Start your Python & Django project with a free consultation. Custom Django applications, FastAPI backends, SaaS platforms, AI/ML integrations, and enterprise solutions.",
            },
        }),

        generateItemListSchema({
            id: "/services/web-design-development/python-django/#servicesList",
            name: "Comprehensive Python & Django Services",
            description: "Full-spectrum Python development services from custom Django apps to legacy migration and performance scaling.",
            items: [
                { name: "Custom Django Applications", description: "Bespoke web applications built with Django, the most robust Python framework, tailored to your business." },
                { name: "API Development", description: "High-performance RESTful and GraphQL APIs using Django Rest Framework and FastAPI." },
                { name: "Django CMS Solutions", description: "Flexible content management systems with Wagtail or custom Django admin tailored to editorial needs." },
                { name: "E-commerce with Django", description: "Custom online stores and marketplaces using Django Oscar or bespoke e-commerce solutions." },
                { name: "Legacy Migration", description: "Migrate outdated systems to modern Django architecture with zero data loss and improved performance." },
                { name: "Performance & Scaling", description: "Optimize and scale with Celery, Redis, caching strategies, and database optimization for high-traffic apps." },
            ],
        }),

        generateItemListSchema({
            id: "/services/web-design-development/python-django/#solutionsList",
            name: "Python & Django Solutions We Build",
            description: "Industry-specific solutions from enterprise web apps to AI/ML integrations and data-driven dashboards.",
            items: [
                { name: "Enterprise Web Applications", description: "Robust, secure, and scalable web solutions with role-based access, audit trails, and complex workflows." },
                { name: "SaaS Platforms", description: "Multi-tenant applications with subscription management, user isolation, billing integration, and scalable infrastructure." },
                { name: "Content Management Systems", description: "Flexible CMS solutions with Wagtail or custom Django admin featuring drag-and-drop editing and SEO tools." },
                { name: "API-First Backends", description: "Headless architectures and microservices with robust RESTful and GraphQL API layers with rate limiting." },
                { name: "AI/ML Integrations", description: "Leverage Python's ML ecosystem to integrate intelligent features with model integration and data pipelines." },
                { name: "Data-Driven Dashboards", description: "Real-time visualization of complex data sets with interactive filtering, reporting, and analytics." },
            ],
        }),

        generateHowToSchema({
            name: "Our Python & Django Development Process",
            description: "A structured 5-step agile methodology for building Python & Django solutions, delivering 200+ apps with enterprise-grade architecture.",
            steps: [
                { name: "Discovery & Architecture", text: "Requirement gathering, tech stack selection, and architecture design. Deliverable: Technical roadmap and wireframes. Timeline: 1-2 weeks.", url: "https://www.cinuteinfomedia.com/services/web-design-development/python-django/#step-discovery" },
                { name: "Database Design & Modeling", text: "Schema normalization, ORM optimization, and indexing strategy. Deliverable: Data schema and API specifications. Timeline: 1-2 weeks.", url: "https://www.cinuteinfomedia.com/services/web-design-development/python-django/#step-database" },
                { name: "Development & APIs", text: "Django/FastAPI implementation, business logic development, and third-party integrations. Deliverable: Working application and API docs. Timeline: 4-8 weeks.", url: "https://www.cinuteinfomedia.com/services/web-design-development/python-django/#step-development" },
                { name: "Testing & Security Audit", text: "Unit and integration testing, API security testing, and penetration testing. Deliverable: QA and security report. Timeline: 2 weeks.", url: "https://www.cinuteinfomedia.com/services/web-design-development/python-django/#step-testing" },
                { name: "Deployment & Monitoring", text: "Docker containerization, CI/CD pipeline setup, and cloud deployment on AWS/GCP. Deliverable: Live application and monitoring. Timeline: 1 week.", url: "https://www.cinuteinfomedia.com/services/web-design-development/python-django/#step-deployment" },
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
        <main className="min-h-screen" style={{ "--page-selection-bg": "#306998" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pythonSchema) }}
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
