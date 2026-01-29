import dynamic from 'next/dynamic';
import Hero from '@/components/services/additional-support-services/Hero';
import SupportServices from '@/components/services/additional-support-services/SupportServices';

// Lazy load below-the-fold components for better performance
const SupportPlans = dynamic(() => import('@/components/services/additional-support-services/SupportPlans'), {
    loading: () => <div className="py-20" />,
});
const FAQ = dynamic(() => import('@/components/services/additional-support-services/FAQ'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/additional-support-services/CTA'), {
    loading: () => <div className="py-20" />,
});

import { getPageMetadata } from '@/lib/metadata';

export const metadata = getPageMetadata({
    title: 'Business Support Services | Outsourced Administrative & IT Support 24/7',
    description: 'Scale faster with our varied Business Support Services. From Outsourced Administrative tasks to IT Business Support & Virtual Assistants. Get a Quick Quote! 🚀',
    url: '/services/additional-support-services',
    keywords: [
        'Business Support Services',
        'Outsourced Administrative',
        'IT Business Support',
        'Virtual Assistants',
        'Managed Support Services',
    ],
});

export default function AdditionalSupportServicesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "name": "Additional Support Services",
                "provider": {
                    "@type": "Organization",
                    "name": "Cinute Info Media",
                    "url": "https://www.cinuteinfomedia.com",
                    "logo": "https://www.cinuteinfomedia.com/logo.png"
                },
                "serviceType": "Business Support Services",
                "areaServed": ["US", "EU", "India", "APAC"],
                "description": "Comprehensive Business Support Services including IT Support, Outsourced Administrative tasks, and Managed Support Services for global businesses.",
                "offers": {
                    "@type": "Offer",
                    "priceCurrency": "USD",
                    "price": "Custom",
                    "availability": "https://schema.org/InStock"
                },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Support Packages",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Essential Support Package"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Professional Support Package"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Enterprise Support Package"
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
                        "name": "What are additional support services in business?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Additional support services encompass external assistance for non-core business activities, including IT business support, outsourced administrative tasks, data management, and customer service."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why should businesses outsource their support services?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Outsourcing offers unique Cost-Effective Solutions and instant Scalability. By leveraging Managed Support services, you gain access to expert talent and advanced technology without overhead."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are the benefits of supplementary business support?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Benefits include increased Operational Efficiency, access to Core Competencies, Workflow Automation, and reduced operational risks."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do I choose the right business support service provider?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Look for E-E-A-T signals: proven experience, technical expertise, and clear communication. We offer transparent SLAs and global service coverage."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is included in a business support services package?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Packages can include Professional virtual assistant support, basic IT monitoring, and Outsourced back-office support solutions."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <main className="bg-white dark:bg-black" style={{ scrollPaddingTop: "5rem", scrollMarginTop: "5rem" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero />
            <SupportServices />
            <SupportPlans />
            <FAQ />
            <CTA />
        </main>
    );
}
