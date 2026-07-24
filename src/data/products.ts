// ============================================================================
// PRODUCT DATA — Static product catalog for Cinute InfoMedia
// ============================================================================

export interface ProductFeature {
  icon: string; // lucide icon name
  title: string;
  description: string;
}

export interface ProductStep {
  step: number;
  title: string;
  description: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: string; // lucide icon name
  color: string; // gradient CSS
  accentColor: string; // single brand color
  features: ProductFeature[];
  techStack: string[];
  process: ProductStep[];
  faqs: ProductFAQ[];
  stats: { label: string; value: string }[];
  supportUrl: string;
  privacyUrl: string;
  demoVideoUrl?: string; // Optional URL for product video demo
  extensionUrl?: string; // Optional Chrome Web Store / Edge Add-ons URL for browser-extension products

  // --- Optional SEO / page-copy overrides -----------------------------------
  // When omitted, the page falls back to its derived defaults (meta title built
  // from name + tagline) and to the components' built-in section headings, so
  // products that don't set these render exactly as before.
  seoTitle?: string;          // explicit <title>, replaces "{name} — {tagline} | Cinute InfoMedia"
  seoDescription?: string;    // explicit meta description, replaces `description`
  heroHeadline?: string;      // <h1> — keyword-led headline instead of the brand name
  heroSubheadline?: string;   // supporting line directly under the <h1>
  heroBody?: string[];        // hero paragraphs, replaces `longDescription` in the hero
  ctaPrimaryLabel?: string;   // hero primary button label
  ctaSecondaryLabel?: string; // hero secondary button label
  featuresHeading?: string;
  featuresIntro?: string;
  howItWorksHeading?: string;
  faqHeading?: string;
  closingCtaHeading?: string;
  closingCtaBody?: string;
  closingCtaLabel?: string;
}

// ============================================================================
// PRODUCT CATALOG
// ============================================================================

export const products: Product[] = [
  {
    id: "chimegenius-ai-pro",
    name: "ChimeGenius AI Pro",
    slug: "chimegenius-ai-pro",
    tagline: "Smart Comment & Reply Generator",
    description:
      "Generate smart, context-aware comments & replies on LinkedIn, Instagram, Facebook, X and YouTube instantly. Free AI Chrome extension — try it now.",
    longDescription:
      "ChimeGenius AI Pro is an AI comment generator and browser extension that helps you write smarter replies on LinkedIn, Instagram, Facebook, X (Twitter), and YouTube in seconds. Click any comment box and a smart AI toolbar appears instantly — generating relevant, human-sounding comments based on the original post's context. Choose from tones like professional, bold, funny, supportive, or witty, then edit the AI-generated comment before posting. Whether you're a creator, a brand manager, or a professional growing your LinkedIn presence, this AI reply generator helps you engage authentically at scale — without spending hours typing.",

    // --- SEO / page copy (from the ChimeGenius AI Pro SEO rewrite) ----------
    seoTitle: "ChimeGenius AI Pro – AI Comment Generator Chrome Extension",
    seoDescription:
      "Generate smart, context-aware comments & replies on LinkedIn, Instagram, Facebook, X and YouTube instantly. Free AI Chrome extension — try it now.",
    heroHeadline: "AI Comment & Reply Generator for LinkedIn, Instagram & More",
    heroSubheadline:
      "ChimeGenius AI Pro — the AI-powered Chrome extension for smarter social media engagement",
    heroBody: [
      "ChimeGenius AI Pro is an AI comment generator and browser extension that helps you write smarter replies on LinkedIn, Instagram, Facebook, X (Twitter), and YouTube in seconds. Click any comment box and a smart AI toolbar appears instantly — generating relevant, human-sounding comments based on the original post's context.",
      "Choose from tones like professional, bold, funny, supportive, or witty, then edit the AI-generated comment before posting. Whether you're a creator, a brand manager, or a professional growing your LinkedIn presence, this AI reply generator helps you engage authentically at scale — without spending hours typing.",
    ],
    ctaPrimaryLabel: "Add to Chrome — Free AI Comment Generator",
    ctaSecondaryLabel: "Schedule a Demo",
    featuresHeading: "AI Comment Generator Features Built for Social Media Growth",
    featuresIntro:
      "Everything you need to automate social engagement — powered by advanced AI models and built for speed.",
    howItWorksHeading: "How the AI Comment Generator Works",
    faqHeading: "ChimeGenius AI Pro FAQs",
    closingCtaHeading: "Try the Free AI Comment Generator Today",
    closingCtaBody:
      "Join thousands of creators, brands, and professionals using ChimeGenius AI Pro to save time and grow their social media presence with AI-powered comments and replies.",
    closingCtaLabel: "Get Started Free",

    icon: "MessageCircle",
    color: "bg-gradient-to-br from-[#FF6B35] to-[#F72585]",
    accentColor: "#F72585",
    features: [
      { icon: "Sparkles", title: "AI-Powered Comment Generation", description: "Analyzes post context — text, images, hashtags, and sentiment — to generate relevant, natural-sounding comments and replies in one click." },
      { icon: "Palette", title: "Custom Tone AI Comment Styles", description: "Choose Bold, Professional, Funny, Supportive, Witty, Casual, or Thought-Provoking tones, or create your own custom tone preset for consistent brand voice." },
      { icon: "MousePointerClick", title: "One-Click AI Comment Toolbar", description: "Click any comment box on a supported platform and the ChimeGenius AI toolbar appears automatically — no tab-switching required." },
      { icon: "PenLine", title: "Editable AI-Generated Replies", description: "Every AI comment is fully editable. Refine the suggestion, add a personal touch, or rewrite it entirely before posting." },
      { icon: "Globe", title: "Multi-Platform Comment Generator", description: "Works across LinkedIn, Instagram, Facebook, X (Twitter), YouTube, Reddit, and more — one AI tool for all your social engagement." },
      { icon: "Zap", title: "Instant AI Reply Generation", description: "Built on advanced LLMs with sub-second response times — generate, review, and post faster than typing manually." },
    ],
    techStack: ["React", "TypeScript", "Chrome Extension API", "OpenAI", "Claude AI", "Node.js", "Redis", "PostgreSQL", "Vercel", "TailwindCSS"],
    process: [
      { step: 1, title: "Install the Chrome Extension", description: "Add ChimeGenius AI Pro from the Chrome Web Store or Edge Add-ons. One-click install, zero setup." },
      { step: 2, title: "Click Any Comment Box", description: "Go to any LinkedIn, Instagram, or X post and click the comment field. The AI toolbar appears automatically." },
      { step: 3, title: "Choose a Tone & Generate", description: "Pick Professional, Funny, Bold, Supportive, or Custom, then generate a context-aware comment instantly." },
      { step: 4, title: "Edit & Post", description: "Review, personalize, and post your AI-generated reply in seconds." },
    ],
    faqs: [
      { question: "What social media platforms does the AI comment generator support?", answer: "ChimeGenius AI Pro works on LinkedIn, Instagram, Facebook, X (Twitter), YouTube, and Reddit, with more platforms added regularly. The Chrome extension integrates directly into each platform's native comment box." },
      { question: "Can I customize the tone of AI-generated comments?", answer: "Yes — choose from Professional, Bold, Funny, Supportive, Witty, or Casual tones, or create unlimited custom tone presets for your brand voice." },
      { question: "Does the AI read the post before generating a comment?", answer: "Yes. ChimeGenius AI analyzes the full post context — text, hashtags, mentions, and sentiment — before generating a relevant, natural response." },
      { question: "Can I edit AI-generated comments before posting?", answer: "Absolutely. Every comment appears in the comment box, fully editable, so you stay in control before you post." },
      { question: "Is my data safe with ChimeGenius AI Pro?", answer: "Yes. ChimeGenius processes post context only for generation and does not permanently store post content. See our Privacy Policy for details." },
      { question: "Is there a free AI comment generator plan?", answer: "Yes — a free tier is available with a daily generation limit. Pro and Business plans unlock unlimited AI comment generation, custom tones, and team features." },
    ],
    stats: [
      { label: "Comments Generated", value: "At Scale" },
      { label: "Active Users", value: "Growing" },
      { label: "Social Platforms Supported", value: "7+" },
      { label: "Avg. Time Saved", value: "Significant" },
    ],
    supportUrl: "/products/chimegenius-ai-pro/support",
    privacyUrl: "/products/chimegenius-ai-pro/privacy-policy",
    extensionUrl: "https://chromewebstore.google.com/detail/pnolpjljedjpmbjimpkhhimapgffidbk?utm_source=item-share-cb",
  },
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
