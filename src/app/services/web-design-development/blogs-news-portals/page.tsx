import dynamic from 'next/dynamic';
import Hero from '@/components/services/web-design-development/blogs-news-portals/Hero';
import ServiceOverview from '@/components/services/web-design-development/blogs-news-portals/ServiceOverview';

// Lazy load below-the-fold components
const WhyChooseUs = dynamic(() => import('@/components/services/web-design-development/blogs-news-portals/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const SolutionTypes = dynamic(() => import('@/components/services/web-design-development/blogs-news-portals/SolutionTypes'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/web-design-development/blogs-news-portals/Process'), {
    loading: () => <div className="py-20" />,
});
const TechStack = dynamic(() => import('@/components/services/web-design-development/blogs-news-portals/TechStack'), {
    loading: () => <div className="py-20" />,
});
const UseCases = dynamic(() => import('@/components/services/web-design-development/blogs-news-portals/UseCases'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/web-design-development/blogs-news-portals/CTA'), {
    loading: () => <div className="py-20" />,
});

import { getPageMetadata } from '@/lib/metadata';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'Blogs & News Portal Development | Web Design Services',
    description: 'Build engaging blogs and high-traffic news portals with powerful CMS, SEO optimization, and reader engagement features. Drive traffic and build authority.',
    url: '/services/web-design-development/blogs-news-portals',
    keywords: [
        'Blog Development',
        'News Portal Design',
        'Content Management System',
        'WordPress Development',
        'Headless CMS',
        'Publishing Platform',
    ],
});

export default function BlogsNewsPortalsPage() {
    const serviceSchema = generateServiceSchema({
        name: 'Blogs & News Portal Development',
        description: 'Professional blog and news portal development services with modern CMS platforms.',
        urlPath: '/services/web-design-development/blogs-news-portals',
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Web Design & Development', url: '/services/web-design-development' },
        { name: 'Blogs & News Portals', url: '/services/web-design-development/blogs-news-portals' },
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
