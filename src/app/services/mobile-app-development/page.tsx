import dynamic from 'next/dynamic';
import Hero from '@/components/services/mobile-app-development/Hero';
import ServiceOverview from '@/components/services/mobile-app-development/ServiceOverview';

// Lazy load below-the-fold components for better performance
const WhyChooseUs = dynamic(() => import('@/components/services/mobile-app-development/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const AppTypes = dynamic(() => import('@/components/services/mobile-app-development/AppTypes'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/mobile-app-development/Process'), {
    loading: () => <div className="py-20" />,
});
const Technologies = dynamic(() => import('@/components/services/mobile-app-development/Technologies'), {
    loading: () => <div className="py-20" />,
});
const SecurityAndSEO = dynamic(() => import('@/components/services/mobile-app-development/SecurityAndSEO'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/mobile-app-development/CTA'), {
    loading: () => <div className="py-20" />,
});

import { getPageMetadata } from '@/lib/metadata';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'Custom Mobile App Development Services | iOS & Android App Company',
    description: 'Expert Mobile App Development Company building high-performance, secure, and user-centric Custom Mobile App Solutions for iOS, Android, and Cross-Platform needs.',
    url: '/services/mobile-app-development',
    keywords: [
        'Mobile App Development Company',
        'Android App Development Services',
        'iOS App Development',
        'Cross Platform Mobile Apps',
        'Custom Mobile App Solutions',
    ],
});

export default function MobileAppDevelopmentPage() {
    const serviceSchema = generateServiceSchema({
        name: 'Mobile App Development',
        description: 'Native and cross-platform mobile application development.',
        urlPath: '/services/mobile-app-development',
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Mobile App Development', url: '/services/mobile-app-development' },
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
            <AppTypes />
            <Process />
            <Technologies />
            <SecurityAndSEO />
            <CTA />
        </main>
    );
}
