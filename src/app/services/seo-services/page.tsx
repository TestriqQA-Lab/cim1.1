import dynamic from 'next/dynamic';
import Hero from '@/components/services/seo-services/Hero';
import ServiceOverview from '@/components/services/seo-services/ServiceOverview';

// Lazy load below-the-fold components for better performance
const WhyChooseUs = dynamic(() => import('@/components/services/seo-services/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const Techniques = dynamic(() => import('@/components/services/seo-services/Techniques'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/seo-services/Process'), {
    loading: () => <div className="py-20" />,
});
const ToolsReporting = dynamic(() => import('@/components/services/seo-services/ToolsReporting'), {
    loading: () => <div className="py-20" />,
});
const Industries = dynamic(() => import('@/components/services/seo-services/Industries'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/seo-services/CTA'), {
    loading: () => <div className="py-20" />,
});
const FAQ = dynamic(() => import('@/components/services/seo-services/FAQ'), {
    loading: () => <div className="py-20" />,
});

import { getPageMetadata } from '@/lib/metadata';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'Organic Growth & SEO Services | Top Rated Global SEO Agency (2026)',
    description: 'Scale Your Business with Data-Driven Organic Search Strategies Designed for the 2026 Algorithms. Stop relying on paid ads.',
    url: '/services/seo-services',
    keywords: [
        'Organic SEO Services',
        'Top Rated Global SEO Agency',
        'Organic Traffic Growth',
        'SEO Agency',
    ],
});

export default function OrganicGrowthSEOPage() {
    const serviceSchema = generateServiceSchema({
        name: 'Organic Growth & SEO',
        description: 'Data-driven SEO strategies for sustainable business growth.',
        urlPath: '/services/seo-services',
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Organic SEO', url: '/services/seo-services' },
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
            <Techniques />
            <Process />
            <ToolsReporting />
            <Industries />
            <FAQ />
            <CTA />
        </main>
    );
}
