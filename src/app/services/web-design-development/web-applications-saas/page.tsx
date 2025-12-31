import dynamic from 'next/dynamic';
import Hero from '@/components/services/web-design-development/web-applications-saas/Hero';
import ServiceOverview from '@/components/services/web-design-development/web-applications-saas/ServiceOverview';

// Lazy load below-the-fold components for better performance
const WhyChooseUs = dynamic(() => import('@/components/services/web-design-development/web-applications-saas/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const SolutionTypes = dynamic(() => import('@/components/services/web-design-development/web-applications-saas/SolutionTypes'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/web-design-development/web-applications-saas/Process'), {
    loading: () => <div className="py-20" />,
});
const TechStack = dynamic(() => import('@/components/services/web-design-development/web-applications-saas/TechStack'), {
    loading: () => <div className="py-20" />,
});
const UseCases = dynamic(() => import('@/components/services/web-design-development/web-applications-saas/UseCases'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/web-design-development/web-applications-saas/CTA'), {
    loading: () => <div className="py-20" />,
});

import { getPageMetadata } from '@/lib/metadata';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'Web Application & SaaS Development | Custom Software Development',
    description: 'Build scalable web applications and SaaS platforms with multi-tenant architecture, subscription billing, and enterprise-grade security. From MVP to production-ready products.',
    url: '/services/web-design-development/web-applications-saas',
    keywords: [
        'Web Application Development',
        'SaaS Development',
        'Custom Software Development',
        'Multi-Tenant Architecture',
        'MVP Development',
    ],
});

export default function WebApplicationsSaaSPage() {
    const serviceSchema = generateServiceSchema({
        name: 'Web Application & SaaS Development',
        description: 'Custom web application and SaaS platform development with scalable architecture.',
        urlPath: '/services/web-design-development/web-applications-saas',
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Web Design & Development', url: '/services/web-design-development' },
        { name: 'Web Applications & SaaS', url: '/services/web-design-development/web-applications-saas' },
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
