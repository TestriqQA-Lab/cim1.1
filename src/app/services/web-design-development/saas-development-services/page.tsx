import dynamic from 'next/dynamic';
import Hero from '@/components/services/web-design-development/saas-development-services/Hero';
import ServiceOverview from '@/components/services/web-design-development/saas-development-services/ServiceOverview';

// Lazy load below-the-fold components for better performance
const WhyChooseUs = dynamic(() => import('@/components/services/web-design-development/saas-development-services/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const SolutionTypes = dynamic(() => import('@/components/services/web-design-development/saas-development-services/SolutionTypes'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/web-design-development/saas-development-services/Process'), {
    loading: () => <div className="py-20" />,
});
const TechStack = dynamic(() => import('@/components/services/web-design-development/saas-development-services/TechStack'), {
    loading: () => <div className="py-20" />,
});
const UseCases = dynamic(() => import('@/components/services/web-design-development/saas-development-services/UseCases'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/web-design-development/saas-development-services/CTA'), {
    loading: () => <div className="py-20" />,
});
const FAQ = dynamic(() => import('@/components/services/web-design-development/saas-development-services/FAQ'), {
    loading: () => <div className="py-20" />,
});

import { getPageMetadata } from '@/lib/metadata';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'Custom SaaS Development Company | SaaS Web App Services',
    description: 'Leading SaaS development company building scalable web applications with multi-tenant architecture, subscription billing & enterprise security. Get free audit!',
    url: '/services/web-design-development/saas-development-services',
    keywords: [
        'SaaS Development Company',
        'Custom SaaS Development',
        'SaaS Web Application Development',
        'SaaS App Development Services',
        'Multi-Tenant Architecture',
        'MVP Development Services',
    ],
});

export default function WebApplicationsSaaSPage() {
    // Comprehensive JSON-LD Schema
    const combinedSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://www.cinuteinfomedia.com/#organization",
                "name": "Cinute Infomedia",
                "url": "https://www.cinuteinfomedia.com",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.cinuteinfomedia.com/logo.png"
                },
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-XXXXXXXXXX",
                    "contactType": "Sales",
                    "availableLanguage": ["English", "Hindi"]
                },
                "sameAs": [
                    "https://www.linkedin.com/company/cinute-infomedia",
                    "https://twitter.com/cinuteinfomedia"
                ]
            },
            {
                "@type": "Service",
                "@id": "https://www.cinuteinfomedia.com/services/web-design-development/saas-development-services#service",
                "serviceType": "SaaS Development Company",
                "provider": {
                    "@id": "https://www.cinuteinfomedia.com/#organization"
                },
                "areaServed": ["US", "EU", "India", "APAC", "Global"],
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "SaaS Web Application Development Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Custom SaaS Development",
                                "description": "Bespoke SaaS platforms with multi-tenant architecture, subscription billing, and enterprise security."
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "SaaS MVP Development",
                                "description": "Rapid prototyping and minimum viable products delivered in 4-8 weeks for market validation."
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Scalable SaaS App Development",
                                "description": "Cloud-based SaaS applications with microservices architecture and auto-scaling capabilities."
                            }
                        }
                    ]
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is SaaS web application development?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "SaaS web application development is the process of building cloud-based software platforms delivered over the internet via subscription models. Unlike traditional software, SaaS applications are hosted on cloud infrastructure (AWS, GCP, Azure), support multiple users (multi-tenancy), and offer features like automated billing, user management, and API integrations."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How much does SaaS development cost in India?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "SaaS development costs in India range from $15,000 for a basic MVP (6-8 weeks) to $100,000+ for enterprise-grade platforms. Factors affecting cost include feature complexity, tech stack, third-party integrations, and team composition. Average hourly rates: $25-50/hour for mid-senior developers in India."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are the best SaaS development companies in Mumbai?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Top SaaS development companies in Mumbai have proven track records in cloud-based platforms, multi-tenant architecture, and agile methodologies. Key criteria include portfolio of launched SaaS products, technical expertise in React/Node.js/AWS, security certifications (ISO 27001, SOC 2), and post-launch support services."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How to build a scalable SaaS app?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "To build a scalable SaaS application: 1) Choose microservices or modular architecture 2) Implement database sharding 3) Use managed cloud services 4) Optimize database queries with caching 5) Configure load balancing 6) Integrate CDN for static assets 7) Set up monitoring and alerting 8) Configure auto-scaling policies with Kubernetes or AWS."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are the steps to develop a custom SaaS platform?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Steps to develop custom SaaS platform: 1) Discovery & Requirements Gathering 2) Technical Architecture Design 3) UI/UX Prototyping 4) Agile Development with 2-week sprints 5) Quality Assurance testing 6) Beta Launch with limited users 7) Production Deployment 8) Iterative Feature Development. Timeline: 3-6 months for MVP, 6-12 months for full platform."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long does it take to build a SaaS MVP?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A SaaS MVP typically takes 6-12 weeks to develop with 10-15 core features. Timeline depends on feature complexity, user roles, third-party integrations, and team size. Using modern frameworks like Next.js, Supabase, and Vercel can reduce development time to 4-6 weeks."
                        }
                    }
                ]
            },
            {
                "@type": "WebPage",
                "@id": "https://www.cinuteinfomedia.com/services/web-design-development/saas-development-services#webpage",
                "url": "https://www.cinuteinfomedia.com/services/web-design-development/saas-development-services",
                "name": "Custom SaaS Development Company | SaaS Web App Services",
                "description": "Leading SaaS development company building scalable web applications with multi-tenant architecture, subscription billing & enterprise security. Get free audit!",
                "inLanguage": "en-US",
                "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://www.cinuteinfomedia.com/#website"
                }
            }
        ]
    };

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Web Design & Development', url: '/services/web-design-development' },
        { name: 'Web Applications & SaaS', url: '/services/web-design-development/saas-development-services' },
    ]);

    return (
        <main className="bg-white dark:bg-black" style={{ scrollPaddingTop: "5rem", scrollMarginTop: "5rem" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Hero />
            <ServiceOverview />
            <WhyChooseUs />
            <SolutionTypes />
            <Process />
            <TechStack />
            <UseCases />
            <FAQ />
            <CTA />
        </main>
    );
}
