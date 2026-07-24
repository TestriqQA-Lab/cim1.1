// ============================================================================
// PRODUCT SUPPORT DATA
// ============================================================================

export interface SupportChannel {
    icon: string; // lucide icon name
    title: string;
    description: string;
    action?: string; // link label
    href?: string;
}

export interface SupportFAQ {
    question: string;
    answer: string;
}

export interface ProductSupport {
    slug: string;
    productName: string;
    supportEmail: string;
    supportPhone: string;
    responseTime: string;
    intro: string;
    channels: SupportChannel[];
    commonIssues: SupportFAQ[];
}

export const productSupportData: ProductSupport[] = [
    {
        slug: "chimegenius-ai-pro",
        productName: "ChimeGenius AI Pro",
        supportEmail: "support@cinuteinfomedia.com",
        supportPhone: "+91-9004988859",
        responseTime: "Within 4 business hours",
        intro: "Need help with the browser extension, comment generation, tone customization, or account settings? Our support team is here to ensure your ChimeGenius experience is smooth and productive.",
        channels: [
            { icon: "Mail", title: "Email Support", description: "Describe your issue with the extension version and browser details. Our team responds within 4 business hours.", action: "Send Email", href: "mailto:support@cinuteinfomedia.com" },
            { icon: "MessageSquare", title: "Live Chat", description: "Get real-time help with extension setup, tone configuration, and generation issues (Mon–Fri, 9 AM – 7 PM IST).", action: "Start Chat", href: "/contact" },
            { icon: "BookOpen", title: "User Guide", description: "Step-by-step guide for installing the extension, configuring tones, using on different platforms, and managing your account.", action: "Read Guide", href: "/contact" },
            { icon: "HelpCircle", title: "FAQ & Troubleshooting", description: "Browse answers to commonly asked questions and quick fixes for known issues with the browser extension.", action: "View FAQ", href: "/contact" },
        ],
        commonIssues: [
            { question: "The toolbar is not appearing when I click the comment box", answer: "Ensure the ChimeGenius extension is enabled in your browser's extension settings. Try refreshing the page. If the issue persists, check if another extension is conflicting by disabling other extensions temporarily." },
            { question: "Generated comments seem generic or irrelevant", answer: "Make sure the post has visible text content for the AI to analyze. For image-only posts, the AI may generate broader responses. Try selecting a more specific tone preset for better results." },
            { question: "The extension is not working on a specific platform", answer: "ChimeGenius currently supports LinkedIn, Instagram, Facebook, X (Twitter), YouTube, and Reddit. Ensure you're using the latest extension version. Some platform UI updates may temporarily affect compatibility — we release patches quickly." },
            { question: "I've reached my daily generation limit", answer: "Free tier users have a daily limit on comment generations. Upgrade to Pro or Business plan for unlimited generations. Your limit resets at midnight UTC daily." },
        ],
    },
];

export function getProductSupportBySlug(slug: string): ProductSupport | undefined {
    return productSupportData.find((p) => p.slug === slug);
}
