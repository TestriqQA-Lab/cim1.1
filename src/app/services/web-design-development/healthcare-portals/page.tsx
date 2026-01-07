import dynamic from 'next/dynamic';
import Hero from '@/components/services/web-design-development/healthcare-portals/Hero';
import ServiceOverview from '@/components/services/web-design-development/healthcare-portals/ServiceOverview';

// Lazy load below-the-fold components for better performance
const WhyChooseUs = dynamic(() => import('@/components/services/web-design-development/healthcare-portals/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const SolutionTypes = dynamic(() => import('@/components/services/web-design-development/healthcare-portals/SolutionTypes'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/web-design-development/healthcare-portals/Process'), {
    loading: () => <div className="py-20" />,
});
const TechStack = dynamic(() => import('@/components/services/web-design-development/healthcare-portals/TechStack'), {
    loading: () => <div className="py-20" />,
});
const UseCases = dynamic(() => import('@/components/services/web-design-development/healthcare-portals/UseCases'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/web-design-development/healthcare-portals/CTA'), {
    loading: () => <div className="py-20" />,
});

import { getPageMetadata } from '@/lib/metadata';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'Healthcare Portal Development | HIPAA-Compliant Patient Portals',
    description: 'Build secure, HIPAA-compliant patient portals, telehealth platforms, and healthcare management systems that improve patient outcomes and streamline provider workflows.',
    url: '/services/web-design-development/healthcare-portals',
    keywords: [
        'Healthcare Portal Development',
        'HIPAA Compliant Website',
        'Patient Portal Development',
        'Telehealth Platform',
        'Healthcare Web Development',
    ],
});

export default function HealthcarePortalsPage() {
    const serviceSchema = generateServiceSchema({
        name: 'Healthcare Portal Development',
        description: 'Custom healthcare portal development for hospitals, clinics, and healthcare organizations.',
        urlPath: '/services/web-design-development/healthcare-portals',
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Web Design & Development', url: '/services/web-design-development' },
        { name: 'Healthcare Portals', url: '/services/web-design-development/healthcare-portals' },
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
