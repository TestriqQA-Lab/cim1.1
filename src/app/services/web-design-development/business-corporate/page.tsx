import dynamic from 'next/dynamic';
import Hero from '@/components/services/web-design-development/business-corporate/Hero';
import ServiceOverview from '@/components/services/web-design-development/business-corporate/ServiceOverview';

// Lazy load below-the-fold components for better performance
const WhyChooseUs = dynamic(() => import('@/components/services/web-design-development/business-corporate/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const SolutionTypes = dynamic(() => import('@/components/services/web-design-development/business-corporate/SolutionTypes'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/web-design-development/business-corporate/Process'), {
    loading: () => <div className="py-20" />,
});
const TechStack = dynamic(() => import('@/components/services/web-design-development/business-corporate/TechStack'), {
    loading: () => <div className="py-20" />,
});
const UseCases = dynamic(() => import('@/components/services/web-design-development/business-corporate/UseCases'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/web-design-development/business-corporate/CTA'), {
    loading: () => <div className="py-20" />,
});

import { getPageMetadata } from '@/lib/metadata';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'Business & Corporate Website Development | Enterprise Web Solutions',
    description: 'Build a professional corporate website that establishes trust and authority. Our enterprise web development services deliver scalable, brand-aligned digital platforms for corporations, institutions, and established businesses.',
    url: '/services/web-design-development/business-corporate',
    keywords: [
        'Corporate Website Development',
        'Business Website Design',
        'Enterprise Web Solutions',
        'Professional Website Development',
        'Corporate Web Design',
    ],
});

export default function BusinessCorporatePage() {
    const serviceSchema = generateServiceSchema({
        name: 'Business & Corporate Website Development',
        description: 'Enterprise-grade corporate website development for established businesses and institutions.',
        urlPath: '/services/web-design-development/business-corporate',
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Web Design & Development', url: '/services/web-design-development' },
        { name: 'Business & Corporate', url: '/services/web-design-development/business-corporate' },
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
