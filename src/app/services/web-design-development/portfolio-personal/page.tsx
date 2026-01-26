import dynamic from 'next/dynamic';
import Hero from '@/components/services/web-design-development/portfolio-personal/Hero';
import ServiceOverview from '@/components/services/web-design-development/portfolio-personal/ServiceOverview';

// Lazy load below-the-fold components
const WhyChooseUs = dynamic(() => import('@/components/services/web-design-development/portfolio-personal/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const SolutionTypes = dynamic(() => import('@/components/services/web-design-development/portfolio-personal/SolutionTypes'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/web-design-development/portfolio-personal/Process'), {
    loading: () => <div className="py-20" />,
});
const TechStack = dynamic(() => import('@/components/services/web-design-development/portfolio-personal/TechStack'), {
    loading: () => <div className="py-20" />,
});
const UseCases = dynamic(() => import('@/components/services/web-design-development/portfolio-personal/UseCases'), {
    loading: () => <div className="py-20" />,
});
const FAQ = dynamic(() => import('@/components/services/web-design-development/portfolio-personal/FAQ'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/web-design-development/portfolio-personal/CTA'), {
    loading: () => <div className="py-20" />,
});

import { getPageMetadata } from '@/lib/metadata';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'Personal Branding Services & Portfolio Website Design | Build Your Brand 2026 🚀',
    description: 'Elevate your digital presence with global Personal Branding Services & Portfolio Website Design. Expert development for creatives, execs & founders. Get a Free Strategy Audit! ⚡',
    url: '/services/web-design-development/portfolio-personal',
    keywords: [
        'Personal Branding Services',
        'Portfolio Website Design',
        'Personal Brand Strategy',
        'Executive Personal Branding',
        'Custom Portfolio Development',
        'Online Reputation Management',
        'Personal Brand Audit',
        'Next.js Portfolio'
    ],
});

export default function PortfolioPersonalPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "serviceType": "Portfolio & Personal Website Development",
                "provider": {
                    "@type": "Organization",
                    "name": "Cinute Info Media",
                    "url": "https://www.cinuteinfomedia.com"
                },
                "areaServed": "Global",
                "description": "Premium personal branding services and custom portfolio website design for creatives, executives, and professionals. Expert SEO and E-E-A-T focused development.",
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Personal Branding Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Custom Portfolio Website Design"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Personal Brand Strategy"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Online Reputation Management"
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
                        "name": "What is included in personal branding services?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Our comprehensive personal branding services include a custom website design, logo and visual identity creation, professional bio writing, SEO optimization for your name (Entity SEO), and social media profile integration."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do I build a professional online portfolio?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Building a professional portfolio starts with strategy. Identify your target audience and curate your best work. We focus on clean, responsive design, fast speeds, and compelling case studies, preferably on a custom platform you own."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why is personal branding important for executives?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Personal brand strategy for corporate executives establishes authority, attracts talent, and opens doors for opportunities. It differentiates you in a crowded market and gives you control over your professional narrative."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How can I improve my personal brand's search ranking?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Improving rankings requires technical SEO and content strategy. We focus on optimizing for your name, securing backlinks, creating thought leadership content, and implementing Schema markup for Brand SERP management."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are the best platforms for a personal portfolio website?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "While builders exist, the best platform for growth is often a custom-coded solution (Next.js, React) or a headless CMS. This offers superior speed, SEO capabilities, and design flexibility compared to standard templates."
                        }
                    }
                ]
            }
        ]
    };

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Web Design & Development', url: '/services/web-design-development' },
        { name: 'Portfolio & Personal', url: '/services/web-design-development/portfolio-personal' },
    ]);

    return (
        <main className="bg-white dark:bg-black" style={{ scrollPaddingTop: "5rem", scrollMarginTop: "5rem" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
