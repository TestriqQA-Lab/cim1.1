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
      "Generate intelligent, context-aware comments and replies on any social media post instantly. Choose your tone — bold, professional, funny, or custom — and engage authentically at scale with AI-powered precision.",
    longDescription:
      "ChimeGenius AI Pro is an AI-powered browser extension and platform that revolutionizes how you engage on social media. Simply click on any comment box across LinkedIn, Instagram, Facebook, X (Twitter), or YouTube — a smart toolbar appears instantly, letting you generate perfectly crafted comments and replies in seconds. Choose from multiple tones like professional, bold, funny, supportive, or witty, and the AI analyzes the original post's context to produce relevant, human-sounding responses. Edit the generated message directly in the comment box before posting. Whether you're a creator building community, a brand manager engaging followers, or a professional networking on LinkedIn, ChimeGenius AI Pro saves hours while keeping your voice authentic.",
    icon: "MessageCircle",
    color: "bg-gradient-to-br from-[#FF6B35] to-[#F72585]",
    accentColor: "#F72585",
    features: [
      { icon: "Sparkles", title: "AI-Powered Comment Generation", description: "Analyze post context — text, images, hashtags, and sentiment — to generate highly relevant, natural-sounding comments and replies in one click." },
      { icon: "Palette", title: "Multiple Tone Styles", description: "Choose from Bold, Professional, Funny, Supportive, Witty, Casual, Thought-Provoking, or create your own custom tone presets for consistent brand voice." },
      { icon: "MousePointerClick", title: "Click-to-Activate Toolbar", description: "Simply click on any comment box on supported platforms and the ChimeGenius toolbar appears automatically — no navigation, no switching tabs." },
      { icon: "PenLine", title: "Edit Before Posting", description: "Every generated comment is fully editable. Refine the AI suggestion, add personal touches, or merge multiple ideas before hitting post." },
      { icon: "Globe", title: "Multi-Platform Support", description: "Works seamlessly across LinkedIn, Instagram, Facebook, X (Twitter), YouTube, Reddit, and more. One tool for all your social engagement." },
      { icon: "Zap", title: "Instant Generation", description: "Powered by advanced LLMs with sub-second response times. Generate, review, and post comments faster than typing them manually." },
    ],
    techStack: ["React", "TypeScript", "Chrome Extension API", "OpenAI", "Claude AI", "Node.js", "Redis", "PostgreSQL", "Vercel", "TailwindCSS"],
    process: [
      { step: 1, title: "Install the Extension", description: "Add ChimeGenius AI Pro to your browser from the Chrome Web Store or Edge Add-ons. One-click installation, zero configuration needed." },
      { step: 2, title: "Click Any Comment Box", description: "Navigate to any social media post and click on the comment or reply box. The ChimeGenius toolbar appears automatically, ready to assist." },
      { step: 3, title: "Choose Your Tone & Generate", description: "Select your preferred tone — Professional, Funny, Bold, Supportive, or Custom. Hit generate and the AI crafts a context-aware comment instantly." },
      { step: 4, title: "Edit & Post", description: "Review the AI-generated comment, make any edits you like, add your personal touch, and post. Engage authentically at greater speed." },
    ],
    faqs: [
      { question: "Which social media platforms does ChimeGenius AI Pro support?", answer: "ChimeGenius AI Pro works on LinkedIn, Instagram, Facebook, X (Twitter), YouTube, Reddit, and is continuously expanding. The browser extension integrates directly into the native comment boxes of each platform." },
      { question: "Can I customize the tone and style of generated comments?", answer: "Absolutely! Choose from pre-built tones like Professional, Bold, Funny, Supportive, Witty, and Casual. You can also create unlimited custom tone presets with specific instructions for your brand voice." },
      { question: "Does the AI read the original post before generating a comment?", answer: "Yes — ChimeGenius AI analyzes the full context of the post including text content, hashtags, mentions, and sentiment before generating a relevant and natural response." },
      { question: "Can I edit the generated comment before posting?", answer: "Of course! Every generated comment appears directly in the comment box where you can freely edit, refine, or completely rewrite it before posting. You're always in control." },
      { question: "Is my data safe? Does ChimeGenius store my comments?", answer: "We take privacy seriously. ChimeGenius processes post context only for generation purposes and does not permanently store the content of posts you interact with. See our Privacy Policy for full details." },
      { question: "Is there a free plan available?", answer: "Yes! We offer a generous free tier with a daily comment generation limit. Pro and Business plans unlock unlimited generations, custom tones, team features, and priority AI models." },
    ],
    stats: [
      { label: "Comments Generated", value: "At scale" },
      { label: "Active Users", value: "Growing" },
      { label: "Platforms Supported", value: "7+" },
      { label: "Avg Time Saved", value: "Significant" },
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
