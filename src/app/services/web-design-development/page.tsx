import dynamic from 'next/dynamic';
import Hero from '@/components/services/web-design-development/Hero';
import ServiceOverview from '@/components/services/web-design-development/ServiceOverview';

// Lazy load below-the-fold components for better performance
const WhyChooseUs = dynamic(() => import('@/components/services/web-design-development/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const WebsiteTypes = dynamic(() => import('@/components/services/web-design-development/WebsiteTypes'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/web-design-development/Process'), {
    loading: () => <div className="py-20" />,
});
const Technologies = dynamic(() => import('@/components/services/web-design-development/Technologies'), {
    loading: () => <div className="py-20" />,
});
const SEOPerformance = dynamic(() => import('@/components/services/web-design-development/SEOPerformance'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/web-design-development/CTA'), {
    loading: () => <div className="py-20" />,
});

import { getPageMetadata } from '@/lib/metadata';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'Web Design & Development Services | Custom Website Development Company',
    description: 'Partner with a leading Web Development Company for Custom Website Development, Responsive Web Design, and enterprise-grade Web Design Services. We build fast, scalable, and SEO-optimized web solutions.',
    url: '/services/web-design-development',
    keywords: [
        'Web Design Services',
        'Web Development Company',
        'Custom Website Development',
        'Responsive Web Design',
        'E-commerce Web Development',
    ],
});

export default function WebDesignDevelopmentPage() {
    const serviceSchema = generateServiceSchema({
        name: 'Web Design & Development',
        description: 'Custom, high-performance web development solutions.',
        urlPath: '/services/web-design-development',
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Web Design & Development', url: '/services/web-design-development' },
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
            <WebsiteTypes />
            <Process />
            <Technologies />
            <SEOPerformance />
            <CTA />
        </main>
    );
}
