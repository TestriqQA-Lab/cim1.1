import dynamic from 'next/dynamic';
import Hero from '@/components/services/web-design-development/ecommerce-development-company/Hero';
import ServiceOverview from '@/components/services/web-design-development/ecommerce-development-company/ServiceOverview';

// Lazy load below-the-fold components for better performance
const WhyChooseUs = dynamic(() => import('@/components/services/web-design-development/ecommerce-development-company/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const SolutionTypes = dynamic(() => import('@/components/services/web-design-development/ecommerce-development-company/SolutionTypes'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/web-design-development/ecommerce-development-company/Process'), {
    loading: () => <div className="py-20" />,
});
const TechStack = dynamic(() => import('@/components/services/web-design-development/ecommerce-development-company/TechStack'), {
    loading: () => <div className="py-20" />,
});
const UseCases = dynamic(() => import('@/components/services/web-design-development/ecommerce-development-company/UseCases'), {
    loading: () => <div className="py-20" />,
});
const FAQ = dynamic(() => import('@/components/services/web-design-development/ecommerce-development-company/FAQ'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/web-design-development/ecommerce-development-company/CTA'), {
    loading: () => <div className="py-20" />,
});

import { getPageMetadata } from '@/lib/metadata';

export const metadata = getPageMetadata({
    title: 'E-commerce Website Development Services | Top Custom Store Agency 🚀',
    description: 'Scale your brand with our expert E-commerce Website Development Services. 15+ years building high-ROI Magento, Shopify, & custom stores. Get a fast quote! 📈',
    url: '/services/web-design-development/ecommerce-development-company',
    keywords: [
        'E-commerce Development',
        'Online Store Development',
        'Shopify Development',
        'WooCommerce Development',
        'E-commerce Website Design',
    ],
});

export default function EcommerceStoresPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://www.cinuteinfomedia.com/#organization",
                "name": "Cinute Info Media",
                "url": "https://www.cinuteinfomedia.com/",
                "logo": "https://www.cinuteinfomedia.com/logo.png",
                "description": "Global Web Design and Development & Digital Marketing Agency",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+1-555-010-9999",
                    "contactType": "customer service"
                }
            },
            {
                "@type": "Service",
                "name": "E-commerce Website Development Services",
                "provider": {
                    "@id": "https://www.cinuteinfomedia.com/#organization"
                },
                "serviceType": "E-commerce Development",
                "description": "Custom e-commerce store development, Shopify optimization, and B2B platform solutions designed for high ROI.",
                "areaServed": ["US", "EU", "India", "APAC"],
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "E-commerce Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Shopify Store Development"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "B2B E-commerce Platforms"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Ecommerce SEO and Digital Marketing"
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
                        "name": "How much does it cost to build an ecommerce store?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Pricing varies based on complexity. A basic Shopify store development project might start at $3k, while a custom solution for enterprise B2B can range from $20k to $100k+."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the best ecommerce platform for small businesses?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "For most small businesses, WooCommerce development or Shopify offers the best balance of ease-of-use and scalability."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How can I improve my ecommerce store's conversion rate?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Start with speed and trust. Our Ecommerce conversion rate optimization (CRO) audits often reveal that speeding up page loads and adding clear trust signals are the quickest wins."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long does it take to launch a custom ecommerce store?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A template-based store can go live in 2-4 weeks. A fully custom project typically takes 8-12 weeks depending on requirements."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can you help migrate my store from Magento to Shopify?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, our Magento to Shopify migration services ensure product data, customer history, and SEO rankings are preserved with zero downtime."
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
