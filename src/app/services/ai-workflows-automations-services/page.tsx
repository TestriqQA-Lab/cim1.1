import dynamic from 'next/dynamic';
import Hero from '@/components/services/ai-workflows-automations-services/Hero';
import ServiceOverview from '@/components/services/ai-workflows-automations-services/ServiceOverview';

// Lazy load below-the-fold components for better performance
const WhyChooseUs = dynamic(() => import('@/components/services/ai-workflows-automations-services/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const TypesOfAutomations = dynamic(() => import('@/components/services/ai-workflows-automations-services/TypesOfAutomations'), {
    loading: () => <div className="py-20" />,
});
const IndustriesAndUseCases = dynamic(() => import('@/components/services/ai-workflows-automations-services/IndustriesAndUseCases'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/ai-workflows-automations-services/Process'), {
    loading: () => <div className="py-20" />,
});
const Technologies = dynamic(() => import('@/components/services/ai-workflows-automations-services/Technologies'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/ai-workflows-automations-services/CTA'), {
    loading: () => <div className="py-20" />,
});
const FAQ = dynamic(() => import('@/components/services/ai-workflows-automations-services/FAQ'), {
    loading: () => <div className="py-20" />,
});

import { getPageMetadata } from '@/lib/metadata';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'AI Workflow Automation Services | Custom Agentic AI Agency | Enterprise & SME',
    description: 'Scale faster with expert AI Business Process Automation. We build custom agentic workflows, LLM integrations, and ROI-driven automation solutions for global enterprises.',
    url: '/services/ai-workflows-automations-services',
    keywords: [
        'AI Workflow Automation',
        'Business Process Automation',
        'AI Automation Services',
        'Intelligent Automation Solutions',
        'Agentic AI Agency',
        'Custom AI Workflows'
    ],
});

export default function AIWorkflowsAutomationsPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "AI Workflow Automation Services",
        "provider": {
            "@type": "Organization",
            "name": "Cinute Info Media",
            "url": "https://www.cinuteinfomedia.com"
        },
        "description": "Enterprise-grade AI Business Process Automation and custom agentic workflow solutions. We automate operations, sales, and support for global businesses.",
        "areaServed": ["US", "EU", "India", "APAC"],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "AI Automation Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Business Process Automation"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "AI Chatbot Development"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Data & Reporting Automation"
                    }
                }
            ]
        },
        "mainEntity": {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What are the benefits of AI workflow automation for businesses?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "AI workflow automation drastically reduces operational costs, minimizes human error, and accelerates process execution. It allows your team to focus on high-value strategic work rather than repetitive data entry."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do I implement AI into my existing business workflows?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Start by identifying repetitive, rule-based tasks. We then assess your tech stack and design a Human-in-the-Loop (HITL) AI System that integrates smoothly without disrupting daily operations."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the difference between RPA and AI automation?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "RPA (Robotic Process Automation) strictly follows pre-programmed rules. AI Automation uses Machine Learning to understand context, make decisions, and handle unstructured data."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How much does it cost to hire an AI automation agency?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Costs vary based on complexity. Simple low-code setups are more affordable, while enterprise solutions require custom development. We focus on delivering ROI-positive solutions."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What are the best AI workflow automation tools in 2026?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Top tools include n8n for self-hosted privacy, LangChain for building agents, and enterprise platforms like UiPath enhanced with GenAI capabilities."
                    }
                }
            ]
        }
    };

    return (
        <main className="bg-white dark:bg-black" style={{ scrollPaddingTop: "5rem", scrollMarginTop: "5rem" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <Hero />
            <ServiceOverview />
            <WhyChooseUs />
            <TypesOfAutomations />
            <IndustriesAndUseCases />
            <Process />
            <Technologies />
            <FAQ />
            <CTA />
        </main>
    );
}
