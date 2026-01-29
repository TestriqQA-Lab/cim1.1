import dynamic from 'next/dynamic';
import Hero from '@/components/services/web-design-development/Hero';
import ServiceOverview from '@/components/services/web-design-development/ServiceOverview';

// Lazy load below-the-fold components for better performance
const WhyChooseUs = dynamic(() => import('@/components/services/web-design-development/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const WebsiteTypes = dynamic(() => import('@/components/services/web-design-development/WebsiteTypes'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/web-design-development/Process'), {
    loading: () => <div className="py-20" />,
});
const Technologies = dynamic(() => import('@/components/services/web-design-development/Technologies'), {
    loading: () => <div className="py-20" />,
});
const SEOPerformance = dynamic(() => import('@/components/services/web-design-development/SEOPerformance'), {
    loading: () => <div className="py-20" />,
});
const FAQ = dynamic(() => import('@/components/services/web-design-development/WebDesignFAQ'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/web-design-development/CTA'), {
    loading: () => <div className="py-20" />,
});

import { getPageMetadata } from '@/lib/metadata';

export const metadata = getPageMetadata({
    title: 'Web Development Company | Custom Website Development 2026',
    description: 'Leading Web Development Agency delivering custom web design services, responsive websites & scalable solutions. 95% client satisfaction. Get free audit today!',
    url: '/services/web-design-development',
    keywords: [
        'Web Development Company',
        'Custom Website Development',
        'Web Design Services',
        'Responsive Web Design',
        'Professional Web Design Agency',
        'Custom Web Development Agency',
        'Affordable Website Development',
    ],
});

export default function WebDesignDevelopmentPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": "CIM Web Development Company",
                "url": "https://www.cinuteinfomedia.com",
                "logo": "https://www.cinuteinfomedia.com/logo.png",
                "description": "Leading web development company delivering custom website development, responsive web design services, and enterprise-grade web solutions globally.",
                "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "US"
                },
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+1-555-123-4567",
                    "contactType": "Customer Service",
                    "availableLanguage": ["English", "Hindi", "Spanish"]
                },
                "sameAs": [
                    "https://www.linkedin.com/company/cim",
                    "https://twitter.com/cim",
                    "https://www.facebook.com/cim"
                ],
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "247",
                    "bestRating": "5",
                    "worstRating": "1"
                }
            },
            {
                "@type": "Service",
                "serviceType": "Web Development Services",
                "provider": {
                    "@type": "Organization",
                    "name": "CIM Web Development Company"
                },
                "areaServed": ["US", "EU", "India", "APAC"],
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Web Development Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Custom Website Development",
                                "description": "Tailored web solutions built with modern frameworks"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Responsive Web Design",
                                "description": "Mobile-first design ensuring perfect rendering across all devices"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Web Application Development",
                                "description": "Scalable SaaS and enterprise web applications"
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
                        "name": "How do I choose the right web design and development partner?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Selecting the right web development company requires evaluating portfolio quality, technical expertise, client testimonials, process transparency, and post-launch support. Review case studies in your industry, verify modern technology skills (React, Next.js), check 4.5+ star ratings, and schedule consultations with 3-5 agencies to compare approaches."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What should I look for in a web design and development agency?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Key criteria include: modern framework expertise (React, Vue, Next.js), UI/UX design portfolio, industry-specific experience, Agile project management, 24/7 support SLAs, accessibility compliance, and ROI-focused approach. Verify certifications, check code quality samples, and assess communication during initial conversations."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How to evaluate a professional web design agency?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Use a 10-point framework: request case studies with documented results, assess technical stack and coding standards, contact previous client references, review code samples, verify certifications (Google Partner, AWS), analyze their own website performance, get detailed pricing breakdowns, and evaluate cultural fit. Avoid agencies with no portfolio, poor communication, or unrealistic promises."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What questions should I ask before hiring a web design agency?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Essential questions cover: recommended technology stack and rationale, security measures, mobile responsiveness approach, Core Web Vitals optimization, project timeline, scope change handling, communication cadence, client references, pricing transparency, post-launch support, code ownership, SEO strategy, scalability planning, and training provision."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How to choose a web design company for long-term growth?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Evaluate scalability factors: platform architecture for 10x traffic growth, modular design for easy feature additions, modern well-supported frameworks, comprehensive documentation. Look for partnership indicators: retention programs, quarterly performance reviews, proactive optimization suggestions, continuous security monitoring, and flexible retainer options."
                        }
                    }
                ]
            },
            {
                "@type": "WebPage",
                "name": "Web Design & Development Services",
                "description": "Professional web development company offering custom website development, responsive web design, and enterprise web solutions with 95% client satisfaction.",
                "url": "https://www.cinuteinfomedia.com/services/web-design-development",
                "breadcrumb": {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": "https://www.cinuteinfomedia.com"
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Services",
                            "item": "https://www.cinuteinfomedia.com/services"
                        },
                        {
                            "@type": "ListItem",
                            "position": 3,
                            "name": "Web Design & Development",
                            "item": "https://www.cinuteinfomedia.com/services/web-design-development"
                        }
                    ]
                }
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
            <WhyChooseUs />
            <WebsiteTypes />
            <Process />
            <Technologies />
            <SEOPerformance />
            <FAQ />
            <CTA />
        </main>
    );
}
