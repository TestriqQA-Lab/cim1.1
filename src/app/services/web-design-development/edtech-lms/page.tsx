import dynamic from 'next/dynamic';
import Hero from '@/components/services/web-design-development/edtech-lms/Hero';
import ServiceOverview from '@/components/services/web-design-development/edtech-lms/ServiceOverview';

const WhyChooseUs = dynamic(() => import('@/components/services/web-design-development/edtech-lms/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const SolutionTypes = dynamic(() => import('@/components/services/web-design-development/edtech-lms/SolutionTypes'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/web-design-development/edtech-lms/Process'), {
    loading: () => <div className="py-20" />,
});
const TechStack = dynamic(() => import('@/components/services/web-design-development/edtech-lms/TechStack'), {
    loading: () => <div className="py-20" />,
});
const UseCases = dynamic(() => import('@/components/services/web-design-development/edtech-lms/UseCases'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/web-design-development/edtech-lms/CTA'), {
    loading: () => <div className="py-20" />,
});

import { getPageMetadata } from '@/lib/metadata';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'EdTech & LMS Development | Custom Learning Management Systems',
    description: 'Build powerful online course platforms, learning management systems, and educational apps. We create engaging EdTech solutions with video streaming, quizzes, certifications, and analytics.',
    url: '/services/web-design-development/edtech-lms',
    keywords: [
        'LMS Development',
        'EdTech Platform Development',
        'Online Course Platform',
        'Learning Management System',
        'E-Learning Development',
        'Educational App Development',
    ],
});

export default function EdTechLMSPage() {
    const serviceSchema = generateServiceSchema({
        name: 'EdTech & LMS Development',
        description: 'Custom e-learning platforms and learning management systems for education and training.',
        urlPath: '/services/web-design-development/edtech-lms',
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Web Design & Development', url: '/services/web-design-development' },
        { name: 'EdTech & LMS', url: '/services/web-design-development/edtech-lms' },
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
