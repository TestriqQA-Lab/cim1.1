import dynamic from 'next/dynamic';
import Hero from '@/components/services/performance-marketing/Hero';
import ServiceOverview from '@/components/services/performance-marketing/ServiceOverview';

// Lazy load below-the-fold components for better performance
const AdPlatforms = dynamic(() => import('@/components/services/performance-marketing/AdPlatforms'), {
    loading: () => <div className="py-20" />,
});
const WhyChooseUs = dynamic(() => import('@/components/services/performance-marketing/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const CampaignTypes = dynamic(() => import('@/components/services/performance-marketing/CampaignTypes'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/performance-marketing/Process'), {
    loading: () => <div className="py-20" />,
});
const CaseStudies = dynamic(() => import('@/components/services/performance-marketing/CaseStudies'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/performance-marketing/CTA'), {
    loading: () => <div className="py-20" />,
});
const FAQ = dynamic(() => import('@/components/services/performance-marketing/FAQ'), {
    loading: () => <div className="py-20" />,
});

import { getPageMetadata } from '@/lib/metadata';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'Performance Marketing Agency | Global ROI-Driven Advertising Services',
    description: 'Scale your business with our data-driven Performance Marketing Services. Expert PPC, Paid Social, Programmatic & B2B Lead Gen strategies. 10x Your ROAS today.',
    url: '/services/performance-marketing',
    keywords: [
        'Performance Marketing',
        'PPC Advertising',
        'Paid Social Media',
        'Google Ads Management',
        'Programmatic Advertising',
        'B2B Lead Generation',
        'Digital Marketing ROI'
    ],
});

export default function PerformanceMarketingPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "name": "Performance Marketing Services",
                "itemReviewed": "Performance Marketing Agency",
                "provider": {
                    "@type": "Organization",
                    "name": "Cinute Info Media",
                    "url": "https://www.cinuteinfomedia.com",
                    "logo": "https://www.cinuteinfomedia.com/assets/logo.png",
                    "sameAs": [
                        "https://www.linkedin.com/company/cinuteinfomedia",
                        "https://twitter.com/cinuteinfomedia"
                    ]
                },
                "serviceType": "Digital Marketing",
                "areaServed": ["World", "US", "EU", "India", "APAC"],
                "description": "Data-driven performance marketing services including PPC, Paid Social, and Programmatic advertising designed to maximize ROAS and minimize CAC for global brands.",
                "offers": {
                    "@type": "Offer",
                    "priceCurrency": "USD",
                    "price": "Custom",
                    "description": "Customized performance marketing packages based on ad spend and scope."
                },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Advertising Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "PPC Advertising"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Paid Social Media Marketing"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Retargeting & Remarketing"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Programmatic Advertising"
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
                        "name": "What is the difference between digital marketing and performance marketing?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "While digital marketing encompasses all online efforts, performance marketing is specifically focused on paid channels where you pay only for results-clicks, leads, or sales. It is highly measurable and ROI-centric."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How much do your performance marketing services cost?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We offer flexible pricing models including percentage of ad spend, fixed retainers, or hybrid performance-based fees aimed at ensuring ROI."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do you measure success in performance marketing?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We look beyond clicks. Our primary KPIs are Return on Ad Spend (ROAS), Customer Acquisition Cost (CAC), and Conversion Rate."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do you handle creative assets for ads?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes! Our in-house creative team designs high-converting banners, writes persuasive ad copy, and edits video ads tailored to each platform."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can you help with B2B lead generation?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely. We specialize in B2B performance marketing, leveraging LinkedIn Ads and high-intent Google Search to fill your pipeline with qualified decision-makers."
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
            <ServiceOverview />
            <AdPlatforms />
            <WhyChooseUs />
            <CampaignTypes />
            <Process />
            <CaseStudies />
            <FAQ />
            <CTA />
        </main>
    );
}
