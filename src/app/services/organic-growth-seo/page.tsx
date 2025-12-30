import dynamic from 'next/dynamic';
import Hero from '@/components/services/organic-growth-seo/Hero';
import ServiceOverview from '@/components/services/organic-growth-seo/ServiceOverview';

// Lazy load below-the-fold components for better performance
const WhyChooseUs = dynamic(() => import('@/components/services/organic-growth-seo/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const Techniques = dynamic(() => import('@/components/services/organic-growth-seo/Techniques'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/organic-growth-seo/Process'), {
    loading: () => <div className="py-20" />,
});
const ToolsReporting = dynamic(() => import('@/components/services/organic-growth-seo/ToolsReporting'), {
    loading: () => <div className="py-20" />,
});
const Industries = dynamic(() => import('@/components/services/organic-growth-seo/Industries'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/organic-growth-seo/CTA'), {
    loading: () => <div className="py-20" />,
});

import { getPageMetadata } from '@/lib/metadata';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'Organic Growth & SEO Services | Search Engine Optimization Company',
    description: 'Drive sustainable traffic and high-intent leads with our data-driven Organic SEO Services. Professional SEO Agency focused on long-term growth and measurable results.',
    url: '/services/organic-growth-seo',
    keywords: [
        'Organic SEO Services',
        'Search Engine Optimization Company',
        'Organic Traffic Growth',
        'SEO Agency',
    ],
});

export default function OrganicGrowthSEOPage() {
    const serviceSchema = generateServiceSchema({
        name: 'Organic Growth & SEO',
        description: 'Data-driven SEO strategies for sustainable business growth.',
        urlPath: '/services/organic-growth-seo',
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Organic SEO', url: '/services/organic-growth-seo' },
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
            <CTA />
        </main>
    );
}
