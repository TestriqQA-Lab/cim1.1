import dynamic from 'next/dynamic';
import Hero from '@/components/services/ai-powered-chatbots/Hero';
import ServiceOverview from '@/components/services/ai-powered-chatbots/ServiceOverview';

// Lazy load below-the-fold components for better performance
const WhyChooseUs = dynamic(() => import('@/components/services/ai-powered-chatbots/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const TypesOfChatbots = dynamic(() => import('@/components/services/ai-powered-chatbots/TypesOfChatbots'), {
    loading: () => <div className="py-20" />,
});
const IndustriesAndUseCases = dynamic(() => import('@/components/services/ai-powered-chatbots/IndustriesAndUseCases'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/ai-powered-chatbots/Process'), {
    loading: () => <div className="py-20" />,
});
const Technologies = dynamic(() => import('@/components/services/ai-powered-chatbots/Technologies'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/ai-powered-chatbots/CTA'), {
    loading: () => <div className="py-20" />,
});

import { getPageMetadata } from '@/lib/metadata';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'AI-Powered Chatbots | Intelligent Conversational AI Solutions',
    description: 'Deploy intelligent AI chatbots for 24/7 customer support, lead generation, and engagement. Our conversational AI solutions improve customer satisfaction and reduce costs.',
    url: '/services/ai-powered-chatbots',
    keywords: [
        'AI Chatbot Development',
        'AI-Powered Chatbots',
        'Conversational AI Solutions',
        'Chatbot Development Company',
    ],
});

export default function AIPoweredChatbotsPage() {
    const serviceSchema = generateServiceSchema({
        name: 'AI-Powered Chatbots',
        description: 'Custom AI chatbot solutions for business.',
        urlPath: '/services/ai-powered-chatbots',
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'AI Chatbots', url: '/services/ai-powered-chatbots' },
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
            <TypesOfChatbots />
            <IndustriesAndUseCases />
            <Process />
            <Technologies />
            <CTA />
        </main>
    );
}
