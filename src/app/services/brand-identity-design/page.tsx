import dynamic from 'next/dynamic';
import Hero from '@/components/services/brand-identity-design/Hero';
import ServiceOverview from '@/components/services/brand-identity-design/ServiceOverview';

// Lazy load below-the-fold components for better performance
// Lazy load below-the-fold components for better performance
const BrandElements = dynamic(() => import('@/components/services/brand-identity-design/BrandElements'), {
    loading: () => <div className="py-20" />,
});
const WhyChooseUs = dynamic(() => import('@/components/services/brand-identity-design/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const DesignProcess = dynamic(() => import('@/components/services/brand-identity-design/DesignProcess'), {
    loading: () => <div className="py-20" />,
});
const DesignTools = dynamic(() => import('@/components/services/brand-identity-design/DesignTools'), {
    loading: () => <div className="py-20" />,
});
const BrandPackages = dynamic(() => import('@/components/services/brand-identity-design/BrandPackages'), {
    loading: () => <div className="py-20" />,
});
const Faq = dynamic(() => import('@/components/services/brand-identity-design/Faq'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/brand-identity-design/CTA'), {
    loading: () => <div className="py-20" />,
});

import { getPageMetadata } from '@/lib/metadata';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'Global Brand Identity Design Services | Award-Winning Agency (2026)',
    description: 'Transform your business with our world-class brand identity design services. We craft custom logos, visual systems & strategies for startups & enterprises. 300% ROI.',
    url: '/services/brand-identity-design',
    keywords: [
        'Brand Identity Design',
        'Logo Design',
        'Visual Identity',
        'Brand Guidelines',
        'Creative Branding Agency',
        'Rebranding Services',
        'Corporate Identity',
    ],
});

export default function BrandIdentityDesignPage() {
    // Service Schema
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Cinute Infomedia",
        "image": "https://www.cinuteinfomedia.com/images/brand-identity-service.jpg",
        "@id": "https://www.cinuteinfomedia.com/services/brand-identity-design",
        "url": "https://www.cinuteinfomedia.com/services/brand-identity-design",
        "telephone": "+1-123-456-7890",
        "priceRange": "$$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Tech Park",
            "addressLocality": "Silicon Valley",
            "addressRegion": "CA",
            "postalCode": "94000",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 37.4224764,
            "longitude": -122.0842499
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        },
        "sameAs": [
            "https://www.facebook.com/cinuteinfomedia",
            "https://twitter.com/cinuteinfomedia",
            "https://www.linkedin.com/company/cinuteinfomedia"
        ],
        "serviceArea": {
            "@type": "AdministrativeArea",
            "name": "Global"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "150"
        },
        "areaServed": ["US", "EU", "India", "APAC"],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Brand Identity Design Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Logo Design Strategy"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Corporate Rebranding"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Brand Style Guides"
                    }
                }
            ]
        }
    };

    // FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
            "@type": "Question",
            "name": "What is brand identity design and why is it important?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Brand identity design is the creation of all visual and verbal elements that represent your company, including your logo, color palette, typography, and voice. It is crucial because it builds Brand Recognition and Awareness, creates trust with customers, and differentiates you from competitors in a crowded global market."
            }
        }, {
            "@type": "Question",
            "name": "What is the difference between branding and brand identity?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Branding is the holistic process of shaping how your audience perceives your company (the 'why' and 'feeling'). Brand identity is the tangible collection of visual tools (the 'what')-logo, fonts, colors-that you use to communicate that brand."
            }
        }, {
            "@type": "Question",
            "name": "How long does the brand identity design process take?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "For a standard brand identity design for startups, the timeline is typically 2-4 weeks. For comprehensive corporate rebranding services or enterprise systems involving extensive guidelines and collateral, the process can take 6-12 weeks."
            }
        }, {
            "@type": "Question",
            "name": "How much does brand identity design cost?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Costs vary based on scope. An affordable brand identity design service for a small business might start from $1,500 - $3,000. Comprehensive agencies packages for B2B or SaaS companies often range from $5,000 to $20,000+."
            }
        }, {
            "@type": "Question",
            "name": "What are the key elements of a brand identity?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The key elements include a primary Logo, Color Palette, Typography (Fonts), Imagery/Photography Style, Iconography, Brand Voice/Tone, and a Brand Style Guide to govern their usage."
            }
        }]
    };

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Brand Identity', url: '/services/brand-identity-design' },
    ]);

    return (
        <main className="bg-white dark:bg-black" style={{ scrollPaddingTop: "5rem", scrollMarginTop: "5rem" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Hero />
            <ServiceOverview />
            <BrandElements />
            <WhyChooseUs />
            <DesignProcess />
            <DesignTools />
            <BrandPackages />
            <Faq />
            <CTA />
        </main>
    );
}
