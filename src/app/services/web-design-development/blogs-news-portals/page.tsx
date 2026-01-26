import dynamic from 'next/dynamic';
import Hero from '@/components/services/web-design-development/blogs-news-portals/Hero';
import ServiceOverview from '@/components/services/web-design-development/blogs-news-portals/ServiceOverview';

// Lazy load below-the-fold components
const WhyChooseUs = dynamic(() => import('@/components/services/web-design-development/blogs-news-portals/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const SolutionTypes = dynamic(() => import('@/components/services/web-design-development/blogs-news-portals/SolutionTypes'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/web-design-development/blogs-news-portals/Process'), {
    loading: () => <div className="py-20" />,
});
const TechStack = dynamic(() => import('@/components/services/web-design-development/blogs-news-portals/TechStack'), {
    loading: () => <div className="py-20" />,
});
const UseCases = dynamic(() => import('@/components/services/web-design-development/blogs-news-portals/UseCases'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/web-design-development/blogs-news-portals/CTA'), {
    loading: () => <div className="py-20" />,
});
const FAQ = dynamic(() => import('@/components/services/web-design-development/blogs-news-portals/FAQ'), {
    loading: () => <div className="py-20" />,
});

import { getPageMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'Web Portal Development Services | News Portal & Blog Design Agency',
    description: 'Scale with trusted Blogs & News Portals Development. Custom CMS, SEO-ready architectures & monetization solutions for global media. Get a quote! 📈',
    url: '/services/web-design-development/blogs-news-portals',
    keywords: [
        'Web Portal development Services',
        'Blog Design services',
        'Digital Publishing Solutions',
        'Website Management Services',
        'Blog writing services'
    ],
});

export default function BlogsNewsPortalsPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "serviceType": "Blogs & News Portals Development",
                "provider": {
                    "@type": "Organization",
                    "name": "Cinute Infomedia",
                    "url": "https://www.cinuteinfomedia.com"
                },
                "areaServed": "Global",
                "description": "Professional Web Portal development and Blog Design services. Specializing in high-performance digital publishing solutions, custom news portals, and scalable CMS architectures.",
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Digital Publishing Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Custom News Portal Design"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "WordPress Blog Development"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "News Portal SEO & Monetization"
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
                        "name": "How much does it cost to build a professional news portal?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The cost varies based on complexity. A basic WordPress blog development starts from $3,000, while a robust custom news portal design can range from $15,000 to $50,000+."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the best CMS for a high-traffic news website?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We recommend Headless CMS architectures (like Strapi with Next.js) or optimized WordPress VIP for high scalability and performance."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How can I improve my blog's search engine ranking?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Focus on Topical Authority, E-E-A-T signals, and technical health. Use schema markup, optimize site speed, and implement a solid content strategy."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are the essential features of a modern news portal?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Key features include mobile responsiveness, fast loading speeds, multi-author management, paywalls, and interactive user engagement tools."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do I monetize a news portal or business blog?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Monetization strategies include display ads, sponsored content, subscription paywalls, and affiliate marketing modules."
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
        { name: 'Blogs & News Portals', url: '/services/web-design-development/blogs-news-portals' },
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
