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

import { getPageMetadata } from '@/lib/metadata';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'Performance Marketing Services | Data-Driven Advertising Agency',
    description: 'Maximize your ROI with our data-driven Performance Marketing Services. Expert PPC, paid social, programmatic advertising, and conversion optimization.',
    url: '/services/performance-marketing',
    keywords: [
        'Performance Marketing',
        'PPC Advertising',
        'Paid Social Media',
        'Google Ads Management',
    ],
});

export default function PerformanceMarketingPage() {
    const serviceSchema = generateServiceSchema({
        name: 'Performance Marketing',
        description: 'ROI-focused digital advertising and performance marketing.',
        urlPath: '/services/performance-marketing',
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Performance Marketing', url: '/services/performance-marketing' },
    ]);

    return (
        <main className="bg-white dark:bg-black">
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
            <AdPlatforms />
            <WhyChooseUs />
            <CampaignTypes />
            <Process />
            <CaseStudies />
            <CTA />
        </main>
    );
}
