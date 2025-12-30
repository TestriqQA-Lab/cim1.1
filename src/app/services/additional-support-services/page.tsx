import dynamic from 'next/dynamic';
import Hero from '@/components/services/additional-support-services/Hero';
import SupportServices from '@/components/services/additional-support-services/SupportServices';

// Lazy load below-the-fold components for better performance
const SupportPlans = dynamic(() => import('@/components/services/additional-support-services/SupportPlans'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/additional-support-services/CTA'), {
    loading: () => <div className="py-20" />,
});

import { getPageMetadata } from '@/lib/metadata';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'Additional Support Services | Ongoing Maintenance & Support',
    description: 'Comprehensive additional support services including 24/7 technical support, system monitoring, security management, and backup solutions.',
    url: '/services/additional-support-services',
    keywords: [
        'Technical Support Services',
        '24/7 IT Support',
        'System Monitoring',
        'Maintenance Services',
    ],
});

export default function AdditionalSupportServicesPage() {
    const serviceSchema = generateServiceSchema({
        name: 'Additional Support Services',
        description: 'Ongoing technical maintenance and support.',
        urlPath: '/services/additional-support-services',
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Support Services', url: '/services/additional-support-services' },
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
            <SupportServices />
            <SupportPlans />
            <CTA />
        </main>
    );
}
