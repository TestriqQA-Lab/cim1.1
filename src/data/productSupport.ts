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
    {
        slug: "testriq-qa",
        productName: "TestriqQA",
        supportEmail: "support@testriq.com",
        supportPhone: "+91-9004988859",
        responseTime: "Within 4 business hours",
        intro: "Our dedicated support team is here to help you get the most out of TestriqQA. Whether you're facing issues with test generation, CI/CD integration, or dashboard analytics, we're just a message away.",
        channels: [
            { icon: "Mail", title: "Email Support", description: "Send us a detailed description of your issue and our engineering team will respond within 4 business hours.", action: "Send Email", href: "mailto:support@testriq.com" },
            { icon: "MessageSquare", title: "Live Chat", description: "Chat with our support team in real-time during business hours (Mon–Fri, 9 AM – 7 PM IST).", action: "Start Chat", href: "/contact" },
            { icon: "BookOpen", title: "Documentation", description: "Browse our comprehensive docs for setup guides, API references, troubleshooting tips, and best practices.", action: "View Docs", href: "/contact" },
            { icon: "Users", title: "Community Forum", description: "Connect with other TestriqQA users, share test strategies, and get peer support from the community.", action: "Join Community", href: "/contact" },
        ],
        commonIssues: [
            { question: "My tests are failing after a codebase update", answer: "TestriqQA's AI automatically adapts to code changes, but major refactors may require re-running the analysis. Go to Settings → Re-analyze Repository to trigger a fresh scan." },
            { question: "CI/CD pipeline integration is not triggering tests", answer: "Ensure your webhook is correctly configured in your CI/CD settings. Check that the TestriqQA API key is set as an environment variable and that the correct branch patterns are defined." },
            { question: "Visual regression tests show false positives", answer: "Adjust the pixel tolerance threshold in your test configuration. Minor rendering differences across environments can sometimes trigger false positives — we recommend a 0.1% threshold." },
            { question: "Dashboard data is not updating", answer: "Data syncs every 5 minutes. If you're seeing stale data, try a hard refresh (Ctrl+Shift+R). For persistent issues, check your browser's console for API errors and contact support." },
        ],
    },
    {
        slug: "cim-chatbot",
        productName: "CIM ChatBot",
        supportEmail: "support@cinuteinfomedia.com",
        supportPhone: "+91-9004988859",
        responseTime: "Within 4 business hours",
        intro: "Need help with your chatbot setup, knowledge base training, or multi-channel deployment? Our support team specializes in conversational AI and is ready to assist you.",
        channels: [
            { icon: "Mail", title: "Email Support", description: "Reach out with your chatbot configuration questions. Include your bot ID for faster resolution.", action: "Send Email", href: "mailto:support@cinuteinfomedia.com" },
            { icon: "MessageSquare", title: "Live Chat", description: "Ironically, you can chat with our human support team to get help with your chatbot (Mon–Fri, 9 AM – 7 PM IST).", action: "Start Chat", href: "/contact" },
            { icon: "BookOpen", title: "Knowledge Base", description: "Step-by-step guides for chatbot training, channel integration, lead flow setup, and analytics configuration.", action: "Browse Guides", href: "/contact" },
            { icon: "Video", title: "Video Tutorials", description: "Watch walkthrough videos covering chatbot setup, RAG configuration, and advanced conversation design.", action: "Watch Videos", href: "/contact" },
        ],
        commonIssues: [
            { question: "My chatbot gives incorrect answers", answer: "Review your knowledge base content for accuracy. The chatbot's responses are grounded in the data you provide. Update or add documents via the Knowledge Base tab and re-index." },
            { question: "WhatsApp integration is not connecting", answer: "Ensure you have a verified WhatsApp Business account and that the Twilio/Meta webhook URL matches your CIM ChatBot dashboard. Re-authenticate if the token has expired." },
            { question: "Chatbot responses are too slow", answer: "Response latency typically depends on the complexity of your knowledge base. Consider breaking large documents into smaller, focused sections for faster retrieval." },
            { question: "Lead data is not syncing to my CRM", answer: "Verify that your CRM integration (HubSpot, Salesforce, etc.) is connected with valid OAuth credentials. Check the Integrations → Sync Logs for error details." },
        ],
    },
    {
        slug: "cim-autoflow",
        productName: "CIM AutoFlow",
        supportEmail: "support@cinuteinfomedia.com",
        supportPhone: "+91-9004988859",
        responseTime: "Within 4 business hours",
        intro: "Running into issues with your workflows, integrations, or triggers? Our automation experts are here to help you build, debug, and optimize your business processes.",
        channels: [
            { icon: "Mail", title: "Email Support", description: "Describe your workflow issue with the workflow ID and our team will diagnose and respond within 4 business hours.", action: "Send Email", href: "mailto:support@cinuteinfomedia.com" },
            { icon: "MessageSquare", title: "Live Chat", description: "Get real-time help with workflow configuration, trigger setup, and debugging (Mon–Fri, 9 AM – 7 PM IST).", action: "Start Chat", href: "/contact" },
            { icon: "BookOpen", title: "Automation Guides", description: "Explore templates, integration guides, and best practices for building effective automation workflows.", action: "View Guides", href: "/contact" },
            { icon: "Zap", title: "Workflow Templates", description: "Browse 100+ pre-built workflow templates for common business processes. Clone and customize instantly.", action: "Browse Templates", href: "/contact" },
        ],
        commonIssues: [
            { question: "My workflow is not triggering", answer: "Check that your trigger conditions are correctly configured. For webhook triggers, verify the endpoint URL is accessible. For scheduled triggers, confirm the timezone and cron expression." },
            { question: "Integration credentials expired", answer: "OAuth tokens expire periodically. Go to Settings → Integrations, disconnect the affected service, and reconnect with fresh credentials." },
            { question: "Workflow execution failed with an error", answer: "Open the Execution Logs for the specific workflow run. Each step shows detailed input/output data and error messages. Contact support with the execution ID for complex issues." },
            { question: "Data is not mapping correctly between apps", answer: "Review your field mappings in the workflow action step. Ensure source and destination field types match. Use the Transform step to convert data formats if needed." },
        ],
    },
    {
        slug: "cim-analytics",
        productName: "CIM Analytics",
        supportEmail: "support@cinuteinfomedia.com",
        supportPhone: "+91-9004988859",
        responseTime: "Within 4 business hours",
        intro: "Having trouble connecting data sources, configuring dashboards, or generating reports? Our analytics support team is ready to help you get insights flowing.",
        channels: [
            { icon: "Mail", title: "Email Support", description: "Send us your dashboard or data source query. Include screenshots if possible for faster diagnosis.", action: "Send Email", href: "mailto:support@cinuteinfomedia.com" },
            { icon: "MessageSquare", title: "Live Chat", description: "Chat with our analytics specialists during business hours (Mon–Fri, 9 AM – 7 PM IST).", action: "Start Chat", href: "/contact" },
            { icon: "BookOpen", title: "Analytics Docs", description: "Guides for connecting data sources, building custom dashboards, configuring alerts, and generating reports.", action: "View Docs", href: "/contact" },
            { icon: "Presentation", title: "Webinars", description: "Join live webinars on marketing analytics best practices, dashboard design, and data-driven decision making.", action: "Register", href: "/contact" },
        ],
        commonIssues: [
            { question: "Google Analytics data is not syncing", answer: "Re-authenticate your Google Analytics connection via Settings → Data Sources. Ensure you've granted read-only access to the correct GA4 property." },
            { question: "Dashboard shows no data for a specific date range", answer: "Some data sources have processing delays (up to 48 hours for certain ad platforms). Check the data source status indicator for sync timestamps." },
            { question: "Report PDF export is failing", answer: "Large reports with many widgets may timeout. Try reducing the number of widgets or splitting into multiple reports. Contact support if the issue persists." },
            { question: "Client portal is showing wrong data", answer: "Verify the client portal data source filters. Each portal should be scoped to the correct accounts and properties. Check Portals → Settings → Data Filters." },
        ],
    },
    {
        slug: "cim-sitebuilder",
        productName: "CIM SiteBuilder",
        supportEmail: "support@cinuteinfomedia.com",
        supportPhone: "+91-9004988859",
        responseTime: "Within 4 business hours",
        intro: "Need help with your website design, deployment, domain setup, or performance optimization? Our web experts are here to ensure your site looks perfect and loads fast.",
        channels: [
            { icon: "Mail", title: "Email Support", description: "Describe your website issue or design question. Include your site URL for faster troubleshooting.", action: "Send Email", href: "mailto:support@cinuteinfomedia.com" },
            { icon: "MessageSquare", title: "Live Chat", description: "Get instant help with the visual editor, component customization, and deployment issues (Mon–Fri, 9 AM – 7 PM IST).", action: "Start Chat", href: "/contact" },
            { icon: "BookOpen", title: "Builder Docs", description: "Comprehensive guides for using the drag-and-drop builder, custom components, SEO settings, and e-commerce setup.", action: "View Docs", href: "/contact" },
            { icon: "Palette", title: "Design Gallery", description: "Browse professionally designed templates and section examples for inspiration and quick implementation.", action: "Browse Gallery", href: "/contact" },
        ],
        commonIssues: [
            { question: "My custom domain is not connecting", answer: "Ensure your DNS records (CNAME or A record) are correctly pointing to our servers. DNS propagation can take up to 48 hours. Check Settings → Domains for verification status." },
            { question: "Site PageSpeed score dropped", answer: "Check if you've added large unoptimized images or external scripts. SiteBuilder auto-optimizes, but third-party embeds can affect scores. Use the Performance tab for recommendations." },
            { question: "E-commerce checkout is not processing payments", answer: "Verify your Stripe or PayPal API keys are correctly entered in Settings → Payments. Test with the built-in sandbox mode before going live." },
            { question: "Changes are not reflecting after publish", answer: "Clear your browser cache and CDN cache. Go to Settings → Deployment → Purge Cache. Changes typically propagate within 1-2 minutes." },
        ],
    },
    {
        slug: "cim-socialhub",
        productName: "CIM SocialHub",
        supportEmail: "support@cinuteinfomedia.com",
        supportPhone: "+91-9004988859",
        responseTime: "Within 4 business hours",
        intro: "Having trouble with social account connections, post scheduling, or analytics tracking? Our social media experts are here to help you manage your presence effectively.",
        channels: [
            { icon: "Mail", title: "Email Support", description: "Reach out with your social media management query. Include your connected account details for faster assistance.", action: "Send Email", href: "mailto:support@cinuteinfomedia.com" },
            { icon: "MessageSquare", title: "Live Chat", description: "Chat with our social media specialists during business hours (Mon–Fri, 9 AM – 7 PM IST).", action: "Start Chat", href: "/contact" },
            { icon: "BookOpen", title: "Help Center", description: "Guides for connecting social accounts, scheduling posts, setting up the unified inbox, and generating analytics reports.", action: "Visit Help Center", href: "/contact" },
            { icon: "Calendar", title: "Book a Call", description: "Schedule a one-on-one consultation with our social media strategist for personalized guidance and best practices.", action: "Book Now", href: "/contact" },
        ],
        commonIssues: [
            { question: "Instagram account disconnected", answer: "Instagram requires periodic re-authentication due to Meta's API policies. Go to Settings → Connected Accounts → Instagram and click 'Reconnect'. Ensure your Instagram account is a Business or Creator account." },
            { question: "Scheduled posts are not publishing", answer: "Check that the connected account still has valid permissions. For Instagram, ensure your Facebook Page is linked. Review the Publishing Queue for error messages." },
            { question: "Analytics data is inconsistent with platform native data", answer: "Minor discrepancies are normal due to API data processing delays and timezone differences. Our data syncs every 15 minutes. For significant gaps, re-sync the account." },
            { question: "Unified inbox is not showing all messages", answer: "Verify that inbox permissions are granted for each connected platform. Some platforms (e.g., Instagram DMs) require additional OAuth scopes. Reconnect with full permissions." },
        ],
    },
];

export function getProductSupportBySlug(slug: string): ProductSupport | undefined {
    return productSupportData.find((p) => p.slug === slug);
}
