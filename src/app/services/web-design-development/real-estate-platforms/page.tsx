import dynamic from 'next/dynamic';
import Hero from '@/components/services/web-design-development/real-estate-platforms/Hero';
import ServiceOverview from '@/components/services/web-design-development/real-estate-platforms/ServiceOverview';

// Lazy load below-the-fold components for better performance
const WhyChooseUs = dynamic(() => import('@/components/services/web-design-development/real-estate-platforms/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const SolutionTypes = dynamic(() => import('@/components/services/web-design-development/real-estate-platforms/SolutionTypes'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/web-design-development/real-estate-platforms/Process'), {
    loading: () => <div className="py-20" />,
});
const TechStack = dynamic(() => import('@/components/services/web-design-development/real-estate-platforms/TechStack'), {
    loading: () => <div className="py-20" />,
});
const UseCases = dynamic(() => import('@/components/services/web-design-development/real-estate-platforms/UseCases'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/web-design-development/real-estate-platforms/CTA'), {
    loading: () => <div className="py-20" />,
});

import { getPageMetadata } from '@/lib/metadata';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'Real Estate Platform Development | Property Listing & IDX Websites',
    description: 'Build powerful real estate platforms that showcase properties beautifully, capture leads, and integrate with MLS systems. Custom property listing portals, broker platforms, and virtual tour solutions.',
    url: '/services/web-design-development/real-estate-platforms',
    keywords: [
        'Real Estate Website Development',
        'Property Listing Platform',
        'IDX Website Development',
        'MLS Integration',
        'Real Estate Portal Development',
    ],
});

export default function RealEstatePlatformsPage() {
    const serviceSchema = generateServiceSchema({
        name: 'Real Estate Platform Development',
        description: 'Custom real estate platform development for brokerages, agents, and property developers.',
        urlPath: '/services/web-design-development/real-estate-platforms',
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Web Design & Development', url: '/services/web-design-development' },
        { name: 'Real Estate Platforms', url: '/services/web-design-development/real-estate-platforms' },
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
            <CTA />
        </main>
    );
}
