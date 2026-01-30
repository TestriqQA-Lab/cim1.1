import { Metadata } from "next";
import Hero from "@/components/services/web-design-development/astro-framework/Hero";
import ServiceOverview from "@/components/services/web-design-development/astro-framework/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/astro-framework/SolutionTypes";
import TechStack from "@/components/services/web-design-development/astro-framework/TechStack";
import Process from "@/components/services/web-design-development/astro-framework/Process";
import WhyChooseUs from "@/components/services/web-design-development/astro-framework/WhyChooseUs";
import FAQ from "@/components/services/web-design-development/astro-framework/FAQ";
import CTA from "@/components/services/web-design-development/astro-framework/CTA";

export const metadata: Metadata = {
    title: "Expert Astro Framework Services | 100% PageSpeed 🚀 2026",
    description:
        "Top Astro development agency delivering lightning-fast sites with Islands Architecture. Custom Astro JS services for content-rich sites. Free audit today!",
    keywords: [
        "Astro framework services",
        "Astro JS development",
        "Astro development agency",
        "custom Astro website",
        "Astro performance optimization",
        "static site generation",
        "islands architecture"
    ]
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "name": "Cinute Infomedia",
            "url": "https://www.cinuteinfomedia.com",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.cinuteinfomedia.com/logo.png",
                "width": 250,
                "height": 60
            },
            "description": "Leading Astro development agency delivering lightning-fast websites with 100% PageSpeed scores and exceptional SEO performance.",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Web Dev Street",
                "addressLocality": "San Francisco",
                "addressRegion": "CA",
                "postalCode": "94105",
                "addressCountry": "US"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "Sales",
                "email": "astro@yourcompany.com",
                "availableLanguage": ["English", "Spanish", "French"]
            },
            "sameAs": [
                "https://twitter.com/yourcompany",
                "https://linkedin.com/company/yourcompany",
                "https://github.com/yourcompany"
            ],
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "127",
                "bestRating": "5"
            }
        },
        {
            "@type": "Service",
            "serviceType": "Astro Framework Development Services",
            "provider": {
                "@type": "Organization",
                "name": "Cinute Infomedia"
            },
            "areaServed": {
                "@type": "Place",
                "name": "Worldwide"
            },
            "description": "Expert Astro JS development services including custom website development, migration services, performance optimization, headless CMS integration, and ongoing maintenance for content-rich sites, ecommerce, and marketing pages.",
            "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "USD",
                "lowPrice": "3000",
                "highPrice": "50000",
                "offerCount": "6",
                "offers": [
                    {
                        "@type": "Offer",
                        "name": "Simple Marketing Site",
                        "price": "5500",
                        "priceCurrency": "USD",
                        "description": "5-10 page marketing site with custom design"
                    },
                    {
                        "@type": "Offer",
                        "name": "Content-Rich Blog/Portfolio",
                        "price": "11500",
                        "priceCurrency": "USD",
                        "description": "20-50 page content site with CMS integration"
                    },
                    {
                        "@type": "Offer",
                        "name": "E-commerce Catalog",
                        "price": "22500",
                        "priceCurrency": "USD",
                        "description": "100+ product catalog with headless CMS"
                    },
                    {
                        "@type": "Offer",
                        "name": "Documentation Portal",
                        "price": "30000",
                        "priceCurrency": "USD",
                        "description": "500+ page docs with search and versioning"
                    }
                ]
            },
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Astro Development Services",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Custom Astro Website Development",
                            "description": "Tailored Astro sites with custom design, component development, and CMS integration"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Astro Migration Services",
                            "description": "Migrate from Next.js, Gatsby, WordPress to Astro for 70% performance improvement"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Astro Performance Optimization",
                            "description": "Core Web Vitals tuning, PageSpeed optimization, bundle analysis"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Astro Headless CMS Integration",
                            "description": "Connect Strapi, Contentful, Sanity, WordPress with Astro"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Astro Maintenance & Support",
                            "description": "24/7 support, bug fixes, content updates, security patches"
                        }
                    }
                ]
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What are the benefits of using Astro.js for business?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Astro.js delivers exceptional performance with zero JavaScript by default, resulting in 98-100 PageSpeed scores, sub-1-second load times, and superior SEO rankings. Businesses benefit from higher conversion rates (25-40% better), lower costs (30-50% reduction in hosting), better SEO rankings, 40% faster development, and flexibility to mix React, Vue, Svelte components."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How much does it cost to build a custom Astro.js website?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Astro website costs vary by scope: Simple Marketing Site (5-10 pages) costs $3,000-$8,000 taking 2-3 weeks; Content-Rich Blog/Portfolio (20-50 pages) costs $8,000-$15,000 taking 3-5 weeks; E-commerce Catalog (100+ products) costs $15,000-$30,000 taking 5-8 weeks; Documentation Portal (500+ pages) costs $20,000-$40,000 taking 6-10 weeks; Enterprise Multi-Site Platforms start at $40,000+ taking 10-16 weeks."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do I choose the best Astro development agency?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Choose an Astro development agency based on: 1) Proven track record with 5+ live Astro projects and PageSpeed reports, 2) Technical expertise with team certifications and framework proficiency, 3) Performance portfolio with Core Web Vitals data, 4) Industry experience in your domain, 5) Process transparency with clear communication and code reviews, 6) Support SLA with maintenance and ongoing support availability."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the difference between Astro.js and Next.js?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Astro.js outputs static HTML with zero JavaScript by default, achieving 98-100 PageSpeed scores and <1s load times, ideal for content sites, blogs, and marketing pages. Next.js is JavaScript-heavy with React runtime, achieving 85-95 PageSpeed and 1-3s load times, best for dynamic apps and SaaS. Astro bundles are 10-50 KB vs Next.js 200-500 KB, resulting in lower hosting costs and better SEO."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long does it take to develop an Astro.js web application?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Development timelines vary by complexity: Small projects (5-10 pages) take 3-4 weeks, Medium projects (20-50 pages) take 6-8 weeks, Large projects (100+ pages) take 12-14 weeks, Enterprise projects (multi-site platforms) take 16-20 weeks. Most Astro projects launch 30% faster than React/Next.js equivalents due to simplified build processes."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can Astro handle e-commerce and dynamic content?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes! Astro supports e-commerce with product catalogs via headless CMS integration, shopping carts via Shopify Buy SDK or custom islands, checkout integration with Stripe/PayPal, inventory sync via APIs, and search/filtering. Dynamic content is handled through user authentication with islands (React/Vue), forms with validation, real-time data via server endpoints, and personalized content."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you offer ongoing Astro maintenance and support?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes! We offer Standard Support ($500/month) with content updates, 48-hour bug fixes, CMS training, monthly reports, and security updates; Premium Support ($1,200/month) with 24/7 emergency support, 15 hours development time, A/B testing, and quarterly audits; Enterprise Support (custom pricing) with dedicated account manager, 1-hour SLA, unlimited updates, and multi-site management."
                    }
                }
            ]
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.cinuteinfomedia.com"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Services",
                    "item": "https://www.cinuteinfomedia.com/services"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Web Design & Development",
                    "item": "https://www.cinuteinfomedia.com/services/web-design-development"
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Astro Framework",
                    "item": "https://www.cinuteinfomedia.com/services/web-design-development/astro-framework"
                }
            ]
        }
    ]
};

export default function AstroFrameworkPage() {
    return (
        <main className="min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero />
            <ServiceOverview />
            <SolutionTypes />
            <TechStack />
            <Process />
            <WhyChooseUs />
            <FAQ />
            <CTA />
        </main>
    );
}
