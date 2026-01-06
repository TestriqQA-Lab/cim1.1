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
const CTA = dynamic(() => import('@/components/services/web-design-development/portfolio-personal/CTA'), {
    loading: () => <div className="py-20" />,
});

import { getPageMetadata } from '@/lib/metadata';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'Portfolio & Personal Website Design | Web Design Services',
    description: 'Create stunning portfolio and personal websites that showcase your work, build your brand, and attract dream clients. Custom designs for creatives and professionals.',
    url: '/services/web-design-development/portfolio-personal',
    keywords: [
        'Portfolio Website Design',
        'Personal Website Development',
        'Creative Portfolio',
        'Professional Portfolio',
        'Photographer Portfolio',
        'Developer Portfolio',
    ],
});

export default function PortfolioPersonalPage() {
    const serviceSchema = generateServiceSchema({
        name: 'Portfolio & Personal Website Design',
        description: 'Professional portfolio and personal website design services for creatives and professionals.',
        urlPath: '/services/web-design-development/portfolio-personal',
    });

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
            <CTA />
        </main>
    );
}
