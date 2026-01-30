import dynamic from 'next/dynamic';
import Hero from '@/components/services/ai-chatbots-services/Hero';
import ServiceOverview from '@/components/services/ai-chatbots-services/ServiceOverview';

// Lazy load below-the-fold components for better performance
const WhyChooseUs = dynamic(() => import('@/components/services/ai-chatbots-services/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const TypesOfChatbots = dynamic(() => import('@/components/services/ai-chatbots-services/TypesOfChatbots'), {
    loading: () => <div className="py-20" />,
});
const IndustriesAndUseCases = dynamic(() => import('@/components/services/ai-chatbots-services/IndustriesAndUseCases'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/ai-chatbots-services/Process'), {
    loading: () => <div className="py-20" />,
});
const Technologies = dynamic(() => import('@/components/services/ai-chatbots-services/Technologies'), {
    loading: () => <div className="py-20" />,
});
const FAQ = dynamic(() => import('@/components/services/ai-chatbots-services/FAQ'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/ai-chatbots-services/CTA'), {
    loading: () => <div className="py-20" />,
});

import { getPageMetadata } from '@/lib/metadata';

export const metadata = getPageMetadata({
    title: 'AI Chatbot Services | Custom AI Chatbot Development Agency (2026)',
    description: 'Transform customer support with our Enterprise AI Chatbot Platform. We build Custom AI chatbots for eCommerce, SaaS & Healthcare. 300% ROI & 24/7 engagement. Get a Free Strategy Audit!',
    url: '/services/ai-chatbots-services',
    keywords: [
        'AI Chatbot Services',
        'Custom AI Chatbot Development',
        'Enterprise AI Chatbot Platform',
        'AI Service Chatbot',
        'AI Chatbot Agency',
    ],
});

export default function AIPoweredChatbotsPage() {
    return (
        <main className="bg-white dark:bg-black" style={{ scrollPaddingTop: "5rem", scrollMarginTop: "5rem" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Service",
                                "serviceType": "AI Chatbot Development Services",
                                "provider": {
                                    "@type": "Organization",
                                    "name": "Cinute Info Media",
                                    "url": "https://www.cinuteinfomedia.com"
                                },
                                "areaServed": ["US", "EU", "India", "APAC"],
                                "hasOfferCatalog": {
                                    "@type": "OfferCatalog",
                                    "name": "AI Chatbot Solutions",
                                    "itemListElement": [
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "Custom AI Chatbot Development"
                                            }
                                        },
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "Enterprise AI Chatbot Platform"
                                            }
                                        },
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "Ecommerce AI Chatbot"
                                            }
                                        }
                                    ]
                                },
                                "description": "Premier AI Chatbot Agency offering custom development, enterprise platforms, and 24/7 support automation using advanced NLP and LLMs."
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "What are the benefits of using AI chatbots for business?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "AI Chatbot Services maximize efficiency by handling high volumes of queries 24/7 without human fatigue. Key benefits include a 40-60% reduction in customer support costs, increased lead conversion, and scalable multilingual support."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How do AI-powered chatbots improve customer service?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "AI chatbots improve customer service by providing instant, zero-latency responses to inquiries, resolving common issues without wait times and using Sentiment Analysis to escalate complex issues."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What is the difference between a rule-based chatbot and an AI chatbot?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "A rule-based chatbot follows a strict decision tree. A Custom AI Chatbot uses Natural Language Understanding (NLU) and Machine Learning (ML) to understand intent, context, and nuance in unstructured conversations."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How much does it cost to implement an AI chatbot for a business?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Costs vary based on complexity. Simple solutions start from $2,000-$5,000, while fully Custom AI Chatbot Development for Enterprise ranges from $15,000 to $50,000+ depending on integrations and LLM training."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How do I choose the right AI chatbot for my company?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Look for an priority on business goals. For sales, choose Automated lead qualification. For support, ensure CRM integration and Multilingual capabilities. Always check for E-E-A-T compliance."
                                        }
                                    }
                                ]
                            }
                        ]
                    })
                }}
            />
            <Hero />
            <ServiceOverview />
            <WhyChooseUs />
            <TypesOfChatbots />
            <IndustriesAndUseCases />
            <Process />
            <Technologies />
            <FAQ />
            <CTA />
        </main>
    );
}
