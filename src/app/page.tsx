import { Metadata } from "next";
import HomeClient from "./HomeClient";
import { getPageMetadata } from "@/lib/metadata";
import {
  generateGraphSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateWebPageSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateServiceListSchema,
  generateReviewSchema,
  generateHowToSchema,
  generateNavigationSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  ...getPageMetadata({
    title: "Web Development Company | AI-Powered Digital Solutions",
    description: "Leading web development company delivering custom websites, mobile apps & AI-driven marketing. 320% ROI proven. 300+ global projects. Free audit today! ✨",
    url: "/",
    keywords: [
      "web development company",
      "best web development company in india",
      "custom website development",
      "web design and development company",
      "professional website development"
    ],
  }),
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Mumbai, India",
  },
};

import { client } from "@/sanity/lib/client";
import { moreStoriesQuery } from "@/sanity/lib/queries";
import { mapSanityPostToBlogPost } from "@/sanity/lib/mapper";

export const revalidate = 60;

export default async function Home() {
  // Fetch latest 3 posts
  const sanityPosts = await client.fetch(moreStoriesQuery, { limit: 3, skip: "" });
  const latestPosts = sanityPosts.map(mapSanityPostToBlogPost);

  // Generate all schemas using utility functions
  const homePageSchema = generateGraphSchema(
    generateOrganizationSchema(),

    generateWebSiteSchema(),

    generateWebPageSchema({
      name: "Web Development Company | AI-Powered Digital Solutions",
      description: "Leading web development company delivering custom websites, mobile apps & AI-driven marketing. 320% ROI proven. 300+ global projects. Free audit today!",
      urlPath: "",
      datePublished: "2014-01-01",
      dateModified: "2026-03-02",
    }),

    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
    ]),

    generateFAQSchema([
      {
        question: "What makes Cinute InfoMedia different from other web development companies?",
        answer: "We combine technical excellence with business strategy. Unlike typical web development agencies that just code to specs, we act as your growth partner - providing strategic guidance, data-driven recommendations, and continuous optimization. Our 95% client retention rate and 300+ successful projects speak to our partnership approach.",
      },
      {
        question: "What web development services do you offer?",
        answer: "We offer comprehensive solutions including custom website development (corporate, e-commerce, SaaS), mobile app development (iOS, Android, cross-platform), web applications with modern frameworks (Next.js, React, Laravel), WordPress development, e-commerce development (Shopify, WooCommerce), Progressive Web Apps (PWA), and API development & integrations.",
      },
      {
        question: "How much does professional website development cost?",
        answer: "Website development costs vary based on complexity, features, and scope. Our projects typically range from $5,000 for basic corporate websites to $50,000+ for enterprise e-commerce platforms or custom SaaS applications. We provide transparent, fixed-price quotes after understanding your requirements during the free consultation.",
      },
      {
        question: "Do you provide SEO services with web development?",
        answer: "Yes! Every website we build includes foundational technical SEO - optimized code structure, mobile responsiveness, fast loading speeds, semantic HTML, and proper schema markup. We also offer comprehensive SEO services as an ongoing engagement, including keyword strategy, content optimization, link building, and performance tracking.",
      },
      {
        question: "What is your web development process and timeline?",
        answer: "Our proven 6-phase Agile methodology: Discovery & Planning (1-2 weeks), Design & Prototyping (2-3 weeks), Development & Coding (4-10 weeks), Testing & QA (1-2 weeks), Deployment & Launch (1 week), and Post-Launch Support (ongoing). Typical corporate website: 8-10 weeks | E-commerce platform: 12-16 weeks | Custom SaaS: 16-24 weeks.",
      },
      {
        question: "Do you work with businesses outside India?",
        answer: "Absolutely! While we're based in India, 60% of our clients are in the US, EU, UK, and APAC regions. We have extensive experience with global time zones, international compliance requirements (GDPR, ADA, WCAG), and multi-currency/multi-language implementations.",
      },
      {
        question: "What happens after my website launches?",
        answer: "We don't believe in 'launch and abandon.' Every web development project includes 30 days of post-launch support. After that, we offer flexible maintenance packages covering security updates, performance monitoring, content updates, and continuous optimization. Many clients transition to our ongoing digital marketing services for sustained growth.",
      },
      {
        question: "Can you integrate AI and automation into my website?",
        answer: "Yes! We're pioneers in AI-driven web solutions including AI-powered chatbots for customer support, workflow automation (CRM, email, reporting), personalized user experiences with machine learning, intelligent search and recommendation engines, and predictive analytics dashboards.",
      },
    ]),

    generateServiceListSchema([
      {
        name: "Web Design & Development",
        url: "/services/web-design-development",
        description: "Business & corporate websites, web applications & SaaS platforms, e-commerce ecosystems. Key Results: Sub-2s load times, 300% organic growth.",
      },
      {
        name: "Mobile App Development",
        url: "/services/mobile-app-development",
        description: "Native iOS & Android app development, cross-platform (React Native, Flutter), enterprise mobile applications. Key Results: 40% faster time-to-market, 98.7% bug-free.",
      },
      {
        name: "Social Media Marketing",
        url: "/services/social-media-marketing-services",
        description: "Platform-specific strategies for Facebook, Instagram, LinkedIn. Paid social media advertising and influencer marketing campaigns. Key Results: 300% ROI on paid campaigns, 10x engagement.",
      },
      {
        name: "AI Workflows & Automations",
        url: "/services/ai-workflows-automations-services",
        description: "Business process automation, document processing & OCR, CRM/ERP integrations (Salesforce, HubSpot). Key Results: 200+ hours saved monthly, 60% cost reduction.",
      },
      {
        name: "AI-Powered Chatbots",
        url: "/services/ai-chatbots-services",
        description: "Custom AI chatbot development, e-commerce sales & support bots, WhatsApp & social media automation. Key Results: 300% ROI, 70% reduction in support costs.",
      },
      {
        name: "Organic Growth & SEO",
        url: "/services/seo-services",
        description: "Technical SEO & site audits, on-page & off-page optimization, content strategy & marketing. Key Results: 3x organic traffic in 6 months, #1 rankings.",
      },
      {
        name: "Performance Marketing",
        url: "/services/performance-marketing",
        description: "Google Ads & PPC management, paid social campaigns (Meta, LinkedIn, TikTok), retargeting & remarketing strategies. Key Results: 10x ROAS, precision targeting.",
      },
      {
        name: "Brand Identity Design",
        url: "/services/brand-identity-design",
        description: "Strategic logo design, brand style guide development, complete visual identity systems. Key Results: 95% client retention, award-winning designs.",
      },
    ]),

    generateReviewSchema({
      reviewBody: "The AI chatbot they built has transformed our customer support. We're saving 200+ hours monthly while providing better, faster service to our students.",
      authorName: "CDPL Institute",
      authorType: "Organization",
      ratingValue: "5",
    }),

    generateHowToSchema({
      name: "Your 4-Step Digital Audit & Growth Roadmap",
      description: "Every successful project starts with understanding where you are and where you want to go. Our proven 4-step framework has guided 300+ businesses to digital excellence.",
      totalTime: "PT4W",
      steps: [
        {
          name: "Discovery & Goal Setting",
          text: "Define your current digital footprint, target audience, and key performance indicators.",
          url: "https://www.cinuteinfomedia.com/#step-discovery",
        },
        {
          name: "Technical Audit",
          text: "In-depth analysis of your website, SEO, and performance infrastructure.",
          url: "https://www.cinuteinfomedia.com/#step-audit",
        },
        {
          name: "Strategy Blueprint",
          text: "A customized plan outlining immediate wins and long-term growth strategies.",
          url: "https://www.cinuteinfomedia.com/#step-strategy",
        },
        {
          name: "Execution & Optimization",
          text: "Implementing the plan with continuous monitoring and data-driven adjustments.",
          url: "https://www.cinuteinfomedia.com/#step-execution",
        },
      ],
    }),

    generateNavigationSchema([
      { name: "Home", url: "/" },
      {
        name: "Services",
        url: "/services",
        children: [
          { name: "Web Design & Development", url: "/services/web-design-development" },
          { name: "Mobile App Development", url: "/services/mobile-app-development" },
          { name: "Social Media Marketing", url: "/services/social-media-marketing-services" },
          { name: "AI Workflows & Automations", url: "/services/ai-workflows-automations-services" },
          { name: "AI-Powered Chatbots", url: "/services/ai-chatbots-services" },
          { name: "Organic Growth & SEO", url: "/services/seo-services" },
          { name: "Performance Marketing", url: "/services/performance-marketing" },
          { name: "Brand Identity & Design", url: "/services/brand-identity-design" },
          { name: "Additional Support Services", url: "/services/additional-support-services" },
        ],
      },
      { name: "Blog", url: "/blog" },
      { name: "About", url: "/about" },
      { name: "Careers", url: "/careers" },
      { name: "Contact", url: "/contact" },
    ])
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <HomeClient latestPosts={latestPosts} />
    </>
  );
}
