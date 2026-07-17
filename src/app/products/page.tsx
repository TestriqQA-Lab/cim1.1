import Hero from "@/components/products/Hero";
import ProductShowcase from "@/components/products/ProductShowcase";
import WhyOurProducts from "@/components/products/WhyOurProducts";
import CTA from "@/components/products/CTA";
import { getPageMetadata } from "@/lib/metadata";
import {
    generateGraphSchema,
    generateOrganizationSchema,
    generateWebSiteSchema,
    generateWebPageSchema,
    generateBreadcrumbSchema,
    generateItemListSchema,
    generateNavigationSchema,
} from "@/lib/schema";
import { products } from "@/data/products";

export const metadata = getPageMetadata({
    title: "Our Products | AI-Powered Digital Tools | Cinute InfoMedia",
    description:
        "Explore powerful digital products built by Cinute InfoMedia — AI testing platforms, chatbot builders, workflow automation engines, analytics dashboards, and more. Battle-tested tools for modern businesses.",
    url: "/products",
    keywords: [
        "digital products",
        "AI tools",
        "SaaS products",
        "QA automation platform",
        "AI chatbot builder",
        "workflow automation",
        "marketing analytics",
        "website builder",
        "social media management",
    ],
    image: "/og-images/Services.webp",
});

export default function ProductsPage() {
    const productsSchema = generateGraphSchema(
        generateOrganizationSchema({
            description:
                "Cinute InfoMedia (CIM) is a digital growth agency that builds AI-powered products and tools for businesses worldwide.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Our Products | AI-Powered Digital Tools",
            description:
                "Explore powerful digital products built by Cinute InfoMedia — AI testing platforms, chatbot builders, workflow automation, analytics dashboards, and more.",
            urlPath: "/products",
            datePublished: "2025-01-01",
            dateModified: "2026-05-16",
        }),

        generateBreadcrumbSchema(
            [
                { name: "Home", url: "/" },
                { name: "Products", url: "/products" },
            ],
            "https://www.cinuteinfomedia.com/products/#breadcrumb"
        ),

        generateItemListSchema({
            id: "/products/#productList",
            name: "CIM Product Suite",
            description:
                "AI-powered digital tools and platforms built by Cinute InfoMedia for businesses worldwide.",
            items: products.map((p) => ({
                name: p.name,
                url: `/products/${p.slug}`,
                description: p.tagline,
            })),
        }),

        generateNavigationSchema([
            { name: "Home", url: "/" },
            {
                name: "Services",
                url: "/services",
            },
            { name: "Products", url: "/products" },
            { name: "Blog", url: "/blog" },
            { name: "About", url: "/about" },
            { name: "Careers", url: "/careers" },
            { name: "Contact", url: "/contact" },
        ])
    );

    return (
        <main style={{ scrollPaddingTop: "5rem", scrollMarginTop: "5rem" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(productsSchema),
                }}
            />
            <Hero />
            <ProductShowcase />
            <WhyOurProducts />
            <CTA />
        </main>
    );
}
