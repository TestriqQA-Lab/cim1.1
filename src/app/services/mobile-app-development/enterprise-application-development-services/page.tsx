import Hero from "@/components/services/mobile-app-development/enterprise-application-development-services/Hero";
import ServiceOverview from "@/components/services/mobile-app-development/enterprise-application-development-services/ServiceOverview";
import SolutionTypes from "@/components/services/mobile-app-development/enterprise-application-development-services/SolutionTypes";
import TechStack from "@/components/services/mobile-app-development/enterprise-application-development-services/TechStack";
import Process from "@/components/services/mobile-app-development/enterprise-application-development-services/Process";
import WhyChooseUs from "@/components/services/mobile-app-development/enterprise-application-development-services/WhyChooseUs";
import CTA from "@/components/services/mobile-app-development/enterprise-application-development-services/CTA";
import FAQ from "@/components/services/mobile-app-development/enterprise-application-development-services/FAQ";

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
    title: 'Enterprise App Development Services | Secure & Scalable',
    description: 'Expert Enterprise application development services. We build secure, scalable custom mobile and web apps for global enterprises like Manufacturing, Healthcare, and Finance. 95% bug-free, 85+ global clients, 500K+ daily active users, SOC 2/HIPAA/GDPR compliant.',
    url: '/services/mobile-app-development/enterprise-application-development-services',
    keywords: [
        'Enterprise Application Development services',
        'Enterprise Software Development',
        'Enterprise App Development company',
        'Enterprise Mobile App Development',
        'Enterprise Web Applications',
        'SOC 2 compliant app development',
        'HIPAA compliant enterprise apps',
    ],
});

export default function EnterpriseAppDevelopmentPage() {
    const enterpriseSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Enterprise App Development Services | Secure & Scalable",
            description: "Expert Enterprise application development services. We build secure, scalable custom mobile and web apps for global enterprises like Manufacturing, Healthcare, and Finance. 95% bug-free, 85+ global clients, 500K+ daily active users, SOC 2/HIPAA/GDPR compliant.",
            urlPath: "/services/mobile-app-development/enterprise-application-development-services",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/mobile-app-development/enterprise-application-development-services/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/mobile-app-development/enterprise-application-development-services/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/mobile-app-development/enterprise-application-development-services/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Mobile App Development", url: "/services/mobile-app-development" },
            { name: "Enterprise Application Development Services", url: "/services/mobile-app-development/enterprise-application-development-services" },
        ], "https://www.cinuteinfomedia.com/services/mobile-app-development/enterprise-application-development-services/#breadcrumb"),

        generateServiceSchema({
            name: "Enterprise Application Development Services",
            description: "Custom enterprise software development for scalable growth. Driving global innovation in 2026 with secure, scalable custom mobile and web apps for enterprises. 95% bug-free applications, 85+ global enterprise clients, 500K+ daily active users. SOC 2, HIPAA, and GDPR compliant.",
            urlPath: "/services/mobile-app-development/enterprise-application-development-services",
            serviceType: "Enterprise Application Development",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Custom enterprise application quotes based on requirements. Includes consulting and roadmap planning, security architecture, agile development, legacy integration, and 24/7 enterprise support.",
            },
        }),

        generateItemListSchema({
            id: "/services/mobile-app-development/enterprise-application-development-services/#solutionsList",
            name: "Enterprise Application Solutions",
            description: "Comprehensive enterprise solutions from employee mobile apps to executive dashboards and secure communications.",
            items: [
                { name: "Employee Mobile Apps", description: "Streamline internal communications, HR workflows, and employee self-service portals." },
                { name: "Field Service Applications", description: "Provide real-time data access, work order management, and GPS tracking for field agents." },
                { name: "CRM & Sales Apps", description: "Enhance customer relationships, sales pipeline tracking, and revenue analytics." },
                { name: "Workflow & Approval Apps", description: "Automate multi-level business approval processes with audit trails and notifications." },
                { name: "Secure Communications", description: "Encrypted messaging, file sharing, and video conferencing for enterprise teams." },
                { name: "Executive Dashboards", description: "Real-time business intelligence and KPI visualization for data-driven decisions." },
            ],
        }),

        generateItemListSchema({
            id: "/services/mobile-app-development/enterprise-application-development-services/#industryList",
            name: "Enterprise Industry Expertise",
            description: "Industry-specific enterprise application solutions for manufacturing, healthcare, finance, logistics, retail, and government sectors.",
            items: [
                { name: "Manufacturing", description: "IoT-integrated shop floor management, supply chain optimization, and quality control systems." },
                { name: "Healthcare (HIPAA Compliant)", description: "HIPAA-compliant patient portals, EHR integrations, and telemedicine platforms." },
                { name: "Financial Services", description: "Bank-grade trading platforms, risk management systems, and regulatory compliance tools." },
                { name: "Logistics & Supply Chain", description: "Fleet management, warehouse automation, and real-time shipment tracking solutions." },
                { name: "Retail Enterprise", description: "Omnichannel retail management, inventory optimization, and customer analytics systems." },
                { name: "Government & Public Sector", description: "Secure citizen services, e-governance portals, and compliance-driven public sector applications." },
            ],
        }),

        generateFAQSchema([
            { question: "What is enterprise application development?", answer: "It is the process of building complex, secure, and scalable software solutions designed specifically for large organizations to improve internal workflows and productivity." },
            { question: "What are the benefits of custom enterprise software?", answer: "It provides a competitive edge by automating unique business processes, improving operational efficiency, and ensuring technology evolves with business goals." },
            { question: "How long does it take to build an enterprise-grade app?", answer: "A typical project takes between 4 to 9 months, depending on complexity, integrations, and regulatory requirements like SOC 2 or HIPAA." },
            { question: "What is the difference between enterprise and regular app development?", answer: "The primary differences lie in strict security requirements, massive scalability, deep integration with legacy systems (ERP, CRM), and rigorous compliance standards." },
        ]),

        generateHowToSchema({
            name: "Our Security-First Enterprise Development Lifecycle",
            description: "A proven 5-phase security-first development process for building enterprise applications with 95% bug-free delivery, SOC 2/HIPAA/GDPR compliance, and 24/7 enterprise support.",
            steps: [
                { name: "Enterprise Consulting & Roadmap Planning", text: "Strategy alignment, stakeholder interviews, business process assessment, and enterprise technology roadmap creation. Timeline: 2-3 weeks.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/enterprise-application-development-services/#step-consulting" },
                { name: "Security Architecture & Design", text: "Threat modeling, data encryption planning (AES-256), role-based access design, and compliance architecture (SOC 2, HIPAA, GDPR). Timeline: 2-4 weeks.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/enterprise-application-development-services/#step-security" },
                { name: "Development & Continuous QA", text: "Agile development with automated testing, CI/CD pipelines, and continuous quality assurance throughout the build. Timeline: 12-20 weeks.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/enterprise-application-development-services/#step-development" },
                { name: "Integration & Middleware Services", text: "Connecting to ERP (SAP), CRM (Salesforce), ServiceNow, and legacy systems with custom middleware. Timeline: 4-6 weeks.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/enterprise-application-development-services/#step-integration" },
                { name: "Deployment & 24/7 Enterprise Support", text: "Production deployment on AWS/Azure/GCP with proactive monitoring, guaranteed SLAs, and ongoing 24/7 enterprise support. Ongoing.", url: "https://www.cinuteinfomedia.com/services/mobile-app-development/enterprise-application-development-services/#step-deployment" },
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
        <main className="min-h-screen" style={{ "--page-selection-bg": "#2563eb" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(enterpriseSchema) }}
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
