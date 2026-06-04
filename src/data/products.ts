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
      { label: "Comments Generated", value: "5M+" },
      { label: "Active Users", value: "50K+" },
      { label: "Platforms Supported", value: "7+" },
      { label: "Avg Time Saved", value: "Significant" },
    ],
    supportUrl: "/products/chimegenius-ai-pro/support",
    privacyUrl: "/products/chimegenius-ai-pro/privacy-policy",
  },
  {
    id: "testriq-qa",
    name: "TestriqQA",
    slug: "testriq-qa",
    tagline: "AI-Powered QA & Testing Automation",
    description:
      "Revolutionize your software testing with intelligent automation. TestriqQA uses AI to detect bugs, generate test cases, and ensure production-grade quality at lightning speed.",
    longDescription:
      "TestriqQA is an enterprise-grade QA automation platform that leverages artificial intelligence to transform how teams test software. From automated regression testing to visual UI comparison and performance benchmarking, TestriqQA covers every aspect of quality assurance. Our AI engine learns from your codebase to proactively identify potential failure points before they reach production.",
    icon: "ShieldCheck",
    color: "bg-gradient-to-br from-[#6B00D7] to-[#bc3feb]",
    accentColor: "#bc3feb",
    features: [
      { icon: "Brain", title: "AI Test Generation", description: "Automatically generate comprehensive test suites from your codebase using machine learning models trained on millions of test patterns." },
      { icon: "Eye", title: "Visual Regression Testing", description: "Pixel-perfect screenshot comparison across browsers and devices. Catch UI regressions before your users do." },
      { icon: "Zap", title: "Parallel Execution", description: "Run thousands of tests simultaneously across cloud infrastructure. Reduce test cycles from hours to minutes." },
      { icon: "GitBranch", title: "CI/CD Integration", description: "Seamless integration with GitHub Actions, GitLab CI, Jenkins, and all major CI/CD pipelines." },
      { icon: "BarChart3", title: "Smart Analytics", description: "Real-time dashboards with flakiness detection, coverage maps, and trend analysis for informed decision-making." },
      { icon: "Shield", title: "Security Scanning", description: "Built-in OWASP vulnerability scanning and dependency audit. Ship secure code with confidence." },
    ],
    techStack: ["React", "Node.js", "Python", "TensorFlow", "Selenium", "Playwright", "Docker", "Kubernetes", "AWS", "PostgreSQL"],
    process: [
      { step: 1, title: "Connect Repository", description: "Link your GitHub, GitLab, or Bitbucket repository. TestriqQA auto-discovers your project structure and frameworks." },
      { step: 2, title: "AI Analyzes Code", description: "Our AI engine scans your codebase, identifies critical paths, and generates intelligent test scenarios." },
      { step: 3, title: "Run & Monitor", description: "Execute tests in parallel across cloud infrastructure. Monitor results in real-time via the dashboard." },
      { step: 4, title: "Ship with Confidence", description: "Get detailed reports, fix suggestions, and green-light deployments with confidence scores." },
    ],
    faqs: [
      { question: "What programming languages does TestriqQA support?", answer: "TestriqQA supports JavaScript/TypeScript, Python, Java, C#, Ruby, Go, and PHP. Our AI engine adapts to your tech stack automatically." },
      { question: "Can TestriqQA integrate with our existing CI/CD pipeline?", answer: "Yes! We offer native integrations with GitHub Actions, GitLab CI, Jenkins, CircleCI, Azure DevOps, and more. Setup takes under 5 minutes." },
      { question: "How does the AI test generation work?", answer: "Our ML models analyze your codebase, user flows, and API contracts to generate comprehensive test suites. The AI learns from test results to continuously improve coverage." },
      { question: "Is there a free trial available?", answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card required to get started." },
      { question: "What kind of support do you offer?", answer: "We provide 24/7 email support, priority Slack channels for enterprise customers, and dedicated onboarding assistance for all plans." },
    ],
    stats: [
      { label: "Test Cases Generated", value: "2M+" },
      { label: "Bugs Detected", value: "500K+" },
      { label: "Time Saved", value: "Significant" },
      { label: "Teams Using", value: "1,200+" },
    ],
    supportUrl: "/products/testriq-qa/support",
    privacyUrl: "/products/testriq-qa/privacy-policy",
  },
  {
    id: "cim-chatbot",
    name: "CIM ChatBot",
    slug: "cim-chatbot",
    tagline: "Intelligent Conversational AI for Business",
    description:
      "Deploy smart AI chatbots that handle customer support, qualify leads, and drive conversions — no coding required. Built with RAG technology for accurate, contextual responses.",
    longDescription:
      "CIM ChatBot is a no-code AI chatbot platform that empowers businesses to build intelligent conversational agents in minutes. Powered by advanced RAG (Retrieval-Augmented Generation) technology, our chatbots deliver accurate, context-aware responses by learning directly from your knowledge base, documents, and FAQs. From customer support automation to lead qualification and appointment scheduling, CIM ChatBot handles it all.",
    icon: "MessageSquare",
    color: "bg-gradient-to-br from-[#4e51d2] to-[#7c3aed]",
    accentColor: "#4e51d2",
    features: [
      { icon: "BookOpen", title: "Knowledge Base RAG", description: "Upload documents, FAQs, and website content. The chatbot learns your business and answers with precision." },
      { icon: "Globe", title: "Multi-Channel Deploy", description: "Deploy across your website, WhatsApp, Facebook Messenger, Instagram, Slack, and Telegram from one dashboard." },
      { icon: "UserCheck", title: "Lead Qualification", description: "Automatically qualify leads with intelligent conversational flows. Score and route hot leads to your sales team." },
      { icon: "Languages", title: "50+ Languages", description: "Communicate with customers in their native language. Real-time translation with cultural context awareness." },
      { icon: "BarChart", title: "Analytics Dashboard", description: "Track conversation metrics, customer satisfaction scores, and conversion rates in real-time." },
      { icon: "Workflow", title: "CRM Integration", description: "Native integrations with HubSpot, Salesforce, Zoho, and 100+ tools via Zapier and Make." },
    ],
    techStack: ["Next.js", "Python", "OpenAI", "LangChain", "Pinecone", "Redis", "WebSocket", "AWS Lambda", "Twilio", "MongoDB"],
    process: [
      { step: 1, title: "Train Your Bot", description: "Upload your knowledge base — documents, FAQs, website URLs. Our AI processes and indexes everything automatically." },
      { step: 2, title: "Customize Flows", description: "Design conversation flows with our visual builder. Set up lead qualification rules, handoff triggers, and automated responses." },
      { step: 3, title: "Deploy Everywhere", description: "One click to deploy across website widget, WhatsApp, Messenger, and more. Customize branding to match your identity." },
      { step: 4, title: "Optimize & Scale", description: "Monitor performance, train on new data, and scale handling capacity as your business grows." },
    ],
    faqs: [
      { question: "Do I need coding skills to use CIM ChatBot?", answer: "Not at all! CIM ChatBot is a completely no-code platform. Build, train, and deploy chatbots using our visual drag-and-drop interface." },
      { question: "How accurate are the AI responses?", answer: "Using RAG technology, our chatbots achieve high accuracy by grounding responses in your actual business data rather than generic AI hallucinations." },
      { question: "Can the chatbot hand off to a human agent?", answer: "Yes! You can configure automatic handoff rules based on sentiment, topic complexity, or customer request. Seamless transition to live agents." },
      { question: "What channels does CIM ChatBot support?", answer: "Website widget, WhatsApp Business, Facebook Messenger, Instagram DMs, Slack, Telegram, SMS, and custom API integration." },
      { question: "How long does setup take?", answer: "Most businesses are up and running within 30 minutes. Upload your content, customize the look, and deploy — it's that simple." },
    ],
    stats: [
      { label: "Messages Handled", value: "10M+" },
      { label: "Resolution Rate", value: "High" },
      { label: "Languages", value: "50+" },
      { label: "Active Bots", value: "3,500+" },
    ],
    supportUrl: "/products/cim-chatbot/support",
    privacyUrl: "/products/cim-chatbot/privacy-policy",
  },
  {
    id: "cim-autoflow",
    name: "CIM AutoFlow",
    slug: "cim-autoflow",
    tagline: "AI Workflow Automation Engine",
    description:
      "Automate repetitive business processes with intelligent workflows. Connect your tools, set triggers, and let AI handle the rest — from lead nurturing to invoice processing.",
    longDescription:
      "CIM AutoFlow is a powerful workflow automation platform designed for businesses that want to eliminate manual, repetitive tasks. With our visual workflow builder and AI-powered decision engine, you can create complex automation pipelines that connect your CRM, email, accounting, and 200+ other tools. From automated lead nurturing sequences to intelligent document processing, AutoFlow transforms how your team works.",
    icon: "Workflow",
    color: "bg-gradient-to-br from-[#fab900] to-[#ee6500]",
    accentColor: "#ee6500",
    features: [
      { icon: "Puzzle", title: "200+ Integrations", description: "Connect with Salesforce, HubSpot, Google Workspace, Slack, Stripe, QuickBooks, and 200+ more tools natively." },
      { icon: "Brain", title: "AI Decision Engine", description: "Let AI analyze data patterns and make intelligent routing decisions. Smart branching based on context and history." },
      { icon: "Mail", title: "Email Automation", description: "Build drip campaigns, follow-up sequences, and personalized email workflows with dynamic content insertion." },
      { icon: "FileText", title: "Document Processing", description: "Extract data from invoices, contracts, and forms using AI-powered OCR. Auto-populate your systems." },
      { icon: "Clock", title: "Scheduled Triggers", description: "Time-based, event-based, and webhook triggers. Run workflows on schedule or in response to real-time events." },
      { icon: "GitMerge", title: "Conditional Logic", description: "Complex if/then branching, loops, and parallel processing. Build enterprise-grade automation without code." },
    ],
    techStack: ["React", "Node.js", "Python", "Apache Kafka", "Redis", "PostgreSQL", "Docker", "AWS SQS", "OpenAI", "GraphQL"],
    process: [
      { step: 1, title: "Connect Your Tools", description: "Link your existing business tools — CRM, email, accounting, project management. OAuth-based secure connections." },
      { step: 2, title: "Build Workflows", description: "Use our visual drag-and-drop builder to create automation flows. Add triggers, conditions, and actions." },
      { step: 3, title: "Test & Activate", description: "Run test executions to verify your workflows. Debug with step-by-step execution logs." },
      { step: 4, title: "Monitor & Optimize", description: "Track execution history, success rates, and time saved. AI suggests optimization improvements." },
    ],
    faqs: [
      { question: "How many automations can I create?", answer: "Our plans range from 10 active workflows (Starter) to unlimited workflows (Enterprise). Each workflow can have unlimited steps and branches." },
      { question: "What tools does AutoFlow integrate with?", answer: "200+ native integrations including Salesforce, HubSpot, Google Workspace, Slack, Stripe, Shopify, QuickBooks, and more. Plus, custom API and webhook support." },
      { question: "Is my data secure?", answer: "Absolutely. We use AES-256 encryption at rest, TLS 1.3 in transit, SOC 2 Type II compliance, and GDPR-compliant data processing. Your credentials are stored in isolated vaults." },
      { question: "Can I process documents and forms automatically?", answer: "Yes! Our AI-powered OCR can extract data from invoices, receipts, contracts, and forms. The extracted data flows directly into your connected systems." },
      { question: "Do you offer team collaboration features?", answer: "Yes — role-based access control, shared workflow libraries, version history, comments, and approval workflows for team collaboration." },
    ],
    stats: [
      { label: "Workflows Running", value: "50K+" },
      { label: "Hours Saved Monthly", value: "1M+" },
      { label: "Integrations", value: "200+" },
      { label: "Uptime", value: "99.99%" },
    ],
    supportUrl: "/products/cim-autoflow/support",
    privacyUrl: "/products/cim-autoflow/privacy-policy",
  },
  {
    id: "cim-analytics",
    name: "CIM Analytics",
    slug: "cim-analytics",
    tagline: "Real-Time Marketing & SEO Dashboard",
    description:
      "Unified analytics platform that brings all your marketing data into one beautiful dashboard. Track SEO rankings, ad performance, social metrics, and ROI in real-time.",
    longDescription:
      "CIM Analytics is a comprehensive marketing analytics platform that consolidates data from Google Analytics, Search Console, ad platforms, social media, and CRM systems into a single, actionable dashboard. Stop switching between 10+ tabs — get a unified view of your entire digital marketing performance with AI-powered insights, custom reports, and predictive forecasting.",
    icon: "BarChart3",
    color: "bg-gradient-to-br from-[#008ac1] to-[#00b5ca]",
    accentColor: "#008ac1",
    features: [
      { icon: "LayoutDashboard", title: "Unified Dashboard", description: "All your marketing data in one place. Google Analytics, Search Console, Meta Ads, Google Ads, and social media metrics unified." },
      { icon: "TrendingUp", title: "SEO Rank Tracker", description: "Track keyword rankings across Google, Bing, and YouTube. Daily updates with SERP feature tracking and competitor comparison." },
      { icon: "Target", title: "Ad Performance", description: "Cross-platform ad analytics for Google, Meta, LinkedIn, and TikTok Ads. ROAS calculation and budget optimization suggestions." },
      { icon: "PieChart", title: "Custom Reports", description: "Drag-and-drop report builder. Create branded PDF reports for clients with automatic scheduling and delivery." },
      { icon: "Lightbulb", title: "AI Insights", description: "Proactive anomaly detection, trend identification, and actionable recommendations powered by machine learning." },
      { icon: "Users", title: "Client Portals", description: "White-labeled client dashboards with custom branding. Give clients real-time access to their performance metrics." },
    ],
    techStack: ["Next.js", "Python", "ClickHouse", "Redis", "Apache Airflow", "TensorFlow", "D3.js", "Google APIs", "Meta API", "AWS"],
    process: [
      { step: 1, title: "Connect Data Sources", description: "One-click OAuth connections to Google Analytics, Search Console, ad platforms, and social media accounts." },
      { step: 2, title: "Configure Dashboards", description: "Choose from 50+ pre-built dashboard templates or create custom views with our drag-and-drop builder." },
      { step: 3, title: "Set Alerts & Goals", description: "Define KPIs, set automated alerts for anomalies, and track progress toward marketing goals." },
      { step: 4, title: "Generate Insights", description: "Let AI analyze your data and surface actionable insights. Schedule automated reports for stakeholders." },
    ],
    faqs: [
      { question: "What data sources does CIM Analytics support?", answer: "Google Analytics 4, Google Search Console, Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads, YouTube Analytics, Instagram, Facebook, Twitter, HubSpot, Salesforce, and 50+ more via API." },
      { question: "Can I create white-labeled reports for my clients?", answer: "Yes! Full white-labeling support — add your agency logo, colors, and custom domain. Schedule automated PDF report delivery to clients." },
      { question: "How often is the data updated?", answer: "Most data sources sync every 15 minutes to 1 hour. SEO keyword rankings update daily. Real-time data available for website analytics via our tracking pixel." },
      { question: "Is CIM Analytics suitable for agencies?", answer: "Absolutely! We have dedicated agency plans with multi-client management, team collaboration, client portals, and bulk reporting features." },
      { question: "What makes this different from Google Analytics?", answer: "CIM Analytics unifies data across ALL your marketing channels — not just website traffic. Plus, AI-powered insights, cross-channel attribution, and beautiful client-ready reports." },
    ],
    stats: [
      { label: "Data Points Processed", value: "5B+" },
      { label: "Reports Generated", value: "100K+" },
      { label: "Data Sources", value: "50+" },
      { label: "Agencies Using", value: "800+" },
    ],
    supportUrl: "/products/cim-analytics/support",
    privacyUrl: "/products/cim-analytics/privacy-policy",
  },
  {
    id: "cim-sitebuilder",
    name: "CIM SiteBuilder",
    slug: "cim-sitebuilder",
    tagline: "Next-Gen Website Builder with AI",
    description:
      "Build stunning, high-performance websites in minutes with AI-powered design. Drag-and-drop builder backed by Next.js for blazing-fast Core Web Vitals scores.",
    longDescription:
      "CIM SiteBuilder combines the simplicity of drag-and-drop website building with the performance of modern frameworks like Next.js. Unlike traditional website builders that generate bloated code, SiteBuilder produces clean, optimized code that scores 95+ on Google PageSpeed. With AI-powered design suggestions, SEO optimization, and one-click deployment, it's the fastest way to launch a professional website.",
    icon: "Monitor",
    color: "bg-gradient-to-br from-[#6db75c] to-[#4a9e3f]",
    accentColor: "#6db75c",
    features: [
      { icon: "MousePointer2", title: "Drag & Drop Builder", description: "Intuitive visual editor with 100+ pre-built components. No coding required — just drag, drop, and customize." },
      { icon: "Sparkles", title: "AI Design Assistant", description: "Describe your vision and AI generates a complete website design. Adjust colors, layouts, and content with natural language." },
      { icon: "Gauge", title: "95+ PageSpeed", description: "Every site is automatically optimized for Core Web Vitals. Server-side rendering, image optimization, and lazy loading built-in." },
      { icon: "Search", title: "SEO Autopilot", description: "Automatic meta tags, schema markup, sitemap generation, and content optimization suggestions. SEO handled for you." },
      { icon: "ShoppingCart", title: "E-commerce Ready", description: "Built-in Stripe and PayPal integration. Product catalogs, shopping carts, and checkout flows out of the box." },
      { icon: "Rocket", title: "One-Click Deploy", description: "Deploy to Vercel, Netlify, or AWS with a single click. Custom domain setup and SSL certificates included." },
    ],
    techStack: ["Next.js", "React", "TypeScript", "TailwindCSS", "Vercel", "Stripe", "Sanity CMS", "Cloudflare", "PostgreSQL", "Prisma"],
    process: [
      { step: 1, title: "Choose Template", description: "Start with 200+ professionally designed templates for every industry, or let AI generate a custom design from your description." },
      { step: 2, title: "Customize & Build", description: "Use the visual editor to add sections, modify content, upload images, and fine-tune your design to perfection." },
      { step: 3, title: "Optimize & Preview", description: "AI auto-optimizes for SEO and performance. Preview across desktop, tablet, and mobile in real-time." },
      { step: 4, title: "Launch & Grow", description: "One-click deployment with custom domain. Built-in analytics to track visitors, conversions, and growth." },
    ],
    faqs: [
      { question: "Do I need coding skills to use CIM SiteBuilder?", answer: "Not at all! Our visual drag-and-drop builder is designed for non-technical users. However, developers can access the code directly for advanced customizations." },
      { question: "How fast are the websites built with SiteBuilder?", answer: "Extremely fast! Every site scores 95+ on Google PageSpeed Insights out of the box. We use Next.js server-side rendering, automatic image optimization, and edge caching." },
      { question: "Can I use my own domain?", answer: "Yes! Connect any custom domain with free SSL certificates. We also provide free subdomains on cimsites.com for testing." },
      { question: "Is e-commerce included?", answer: "Yes — Stripe and PayPal integration is built-in. Create product pages, shopping carts, checkout flows, and order management without any plugins." },
      { question: "Can I export the code?", answer: "Absolutely! Export clean Next.js/React code at any time. No vendor lock-in — your code, your hosting, your choice." },
    ],
    stats: [
      { label: "Websites Launched", value: "10K+" },
      { label: "Avg PageSpeed", value: "97" },
      { label: "Templates", value: "200+" },
      { label: "Uptime", value: "99.99%" },
    ],
    supportUrl: "/products/cim-sitebuilder/support",
    privacyUrl: "/products/cim-sitebuilder/privacy-policy",
  },
  {
    id: "cim-socialhub",
    name: "CIM SocialHub",
    slug: "cim-socialhub",
    tagline: "All-in-One Social Media Management",
    description:
      "Schedule, publish, and analyze your social media content across all platforms from one dashboard. AI-powered content suggestions and optimal posting times.",
    longDescription:
      "CIM SocialHub is a comprehensive social media management platform designed for brands and agencies. Manage all your social accounts — Instagram, Facebook, LinkedIn, Twitter, TikTok, Pinterest, and YouTube — from a single unified dashboard. With AI-powered content creation, smart scheduling, team collaboration, and in-depth analytics, SocialHub helps you grow your social presence faster.",
    icon: "Share2",
    color: "bg-gradient-to-br from-[#00b5ca] to-[#00efd6]",
    accentColor: "#00b5ca",
    features: [
      { icon: "CalendarDays", title: "Visual Scheduler", description: "Drag-and-drop content calendar. Schedule posts across all platforms with optimal timing recommendations." },
      { icon: "Wand2", title: "AI Content Creator", description: "Generate engaging captions, hashtags, and visual concepts with AI. Create a month's content in minutes." },
      { icon: "BarChart2", title: "Deep Analytics", description: "Track engagement, reach, follower growth, and competitor performance. Exportable reports for clients." },
      { icon: "Users", title: "Team Collaboration", description: "Approval workflows, content calendars, role-based permissions, and internal commenting for seamless teamwork." },
      { icon: "Inbox", title: "Unified Inbox", description: "Manage all DMs, comments, and mentions across platforms in one inbox. Never miss a customer interaction." },
      { icon: "Hash", title: "Hashtag Research", description: "AI-powered hashtag suggestions based on trending topics, competitor analysis, and audience behavior." },
    ],
    techStack: ["Next.js", "Node.js", "Python", "Redis", "PostgreSQL", "Meta API", "Twitter API", "LinkedIn API", "TikTok API", "Bull Queue"],
    process: [
      { step: 1, title: "Connect Accounts", description: "Link your social media accounts with secure OAuth. Support for Instagram, Facebook, LinkedIn, Twitter, TikTok, Pinterest, and YouTube." },
      { step: 2, title: "Plan Content", description: "Use the visual calendar to plan your content strategy. AI suggests optimal posting times and content ideas." },
      { step: 3, title: "Create & Schedule", description: "Create posts with our built-in editor. Add images, videos, carousels, and stories. Schedule or publish instantly." },
      { step: 4, title: "Analyze & Grow", description: "Track performance metrics, identify top-performing content, and refine your strategy with AI-powered insights." },
    ],
    faqs: [
      { question: "Which social platforms does SocialHub support?", answer: "Instagram (Posts, Stories, Reels), Facebook (Pages, Groups), LinkedIn (Personal, Company), Twitter/X, TikTok, Pinterest, and YouTube. More platforms added regularly." },
      { question: "Can I manage multiple clients?", answer: "Yes! Our agency plan supports unlimited client workspaces. Each client gets their own dashboard, content calendar, and reporting." },
      { question: "Does SocialHub support video content?", answer: "Absolutely! Upload and schedule videos for Reels, TikToks, YouTube Shorts, and Stories. Built-in video trimming and caption overlay tools." },
      { question: "How does the AI content creator work?", answer: "Describe your topic, target audience, and tone. AI generates multiple caption variants, hashtag sets, and even image concept suggestions based on trending formats." },
      { question: "Is there a mobile app?", answer: "Yes! iOS and Android apps available for on-the-go content management, quick posts, and notification management." },
    ],
    stats: [
      { label: "Posts Scheduled", value: "25M+" },
      { label: "Accounts Managed", value: "15K+" },
      { label: "Engagement Boost", value: "Strong" },
      { label: "Platforms", value: "7+" },
    ],
    supportUrl: "/products/cim-socialhub/support",
    privacyUrl: "/products/cim-socialhub/privacy-policy",
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
