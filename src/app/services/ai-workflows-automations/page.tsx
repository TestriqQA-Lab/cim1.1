import dynamic from 'next/dynamic';
import Hero from '@/components/services/ai-workflows-automations/Hero';
import ServiceOverview from '@/components/services/ai-workflows-automations/ServiceOverview';

// Lazy load below-the-fold components for better performance
const WhyChooseUs = dynamic(() => import('@/components/services/ai-workflows-automations/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const TypesOfAutomations = dynamic(() => import('@/components/services/ai-workflows-automations/TypesOfAutomations'), {
    loading: () => <div className="py-20" />,
});
const IndustriesAndUseCases = dynamic(() => import('@/components/services/ai-workflows-automations/IndustriesAndUseCases'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/ai-workflows-automations/Process'), {
    loading: () => <div className="py-20" />,
});
const Technologies = dynamic(() => import('@/components/services/ai-workflows-automations/Technologies'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/ai-workflows-automations/CTA'), {
    loading: () => <div className="py-20" />,
});

import { getPageMetadata } from '@/lib/metadata';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'AI Workflows & Automations | Intelligent Business Automation',
    description: 'Transform your operations with AI-powered workflows and intelligent automation. Reduce costs, eliminate errors, and scale your business.',
    url: '/services/ai-workflows-automations',
    keywords: [
        'AI Workflow Automation',
        'Business Process Automation',
        'AI Automation Services',
        'Intelligent Automation Solutions',
    ],
});

export default function AIWorkflowsAutomationsPage() {
    const serviceSchema = generateServiceSchema({
        name: 'AI Workflows & Automations',
        description: 'Intelligent automation for modern business operations.',
        urlPath: '/services/ai-workflows-automations',
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'AI Workflows', url: '/services/ai-workflows-automations' },
    ]);

    return (
        <main className="bg-white dark:bg-black">
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
            <TypesOfAutomations />
            <IndustriesAndUseCases />
            <Process />
            <Technologies />
            <CTA />
        </main>
    );
}
