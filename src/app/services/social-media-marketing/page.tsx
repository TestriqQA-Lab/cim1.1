import dynamic from 'next/dynamic';
import Hero from '@/components/services/social-media-marketing/Hero';
import ServiceOverview from '@/components/services/social-media-marketing/ServiceOverview';

// Lazy load below-the-fold components for better performance
const WhyChooseUs = dynamic(() => import('@/components/services/social-media-marketing/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const TypesOfServices = dynamic(() => import('@/components/services/social-media-marketing/TypesOfServices'), {
    loading: () => <div className="py-20" />,
});
const Platforms = dynamic(() => import('@/components/services/social-media-marketing/Platforms'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/social-media-marketing/Process'), {
    loading: () => <div className="py-20" />,
});
const Analytics = dynamic(() => import('@/components/services/social-media-marketing/Analytics'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/social-media-marketing/CTA'), {
    loading: () => <div className="py-20" />,
});

import { getPageMetadata } from '@/lib/metadata';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'Social Media Marketing Services | Data-Driven SMM Agency',
    description: 'Elevate your brand with our expert Social Media Marketing Services. Specialized in Instagram Marketing, Paid Social Advertising, and full-service digital strategy.',
    url: '/services/social-media-marketing',
    keywords: [
        'Social Media Marketing Services',
        'Social Media Management Company',
        'Instagram Marketing Agency',
        'Facebook Ad Management',
        'LinkedIn B2B Marketing',
        'Paid Social Media Advertising',
        'Social Media Content Strategy',
    ],
});

export default function SocialMediaMarketingPage() {
    const serviceSchema = generateServiceSchema({
        name: 'Social Media Marketing',
        description: 'Comprehensive social media growth and management services.',
        urlPath: '/services/social-media-marketing',
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Social Media Marketing', url: '/services/social-media-marketing' },
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
            <TypesOfServices />
            <Platforms />
            <Process />
            <Analytics />
            <CTA />
        </main>
    );
}
