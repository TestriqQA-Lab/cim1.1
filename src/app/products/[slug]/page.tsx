import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products, getProductBySlug, getAllProductSlugs } from "@/data/products";
import ProductHero from "@/components/products/detail/ProductHero";
import Features from "@/components/products/detail/Features";
import HowItWorks from "@/components/products/detail/HowItWorks";
import TechStack from "@/components/products/detail/TechStack";
import FAQ from "@/components/products/detail/FAQ";
import ProductCTA from "@/components/products/detail/ProductCTA";
import ProductLinks from "@/components/products/detail/ProductLinks";
import {
    generateGraphSchema,
    generateOrganizationSchema,
    generateWebSiteSchema,
    generateWebPageSchema,
    generateBreadcrumbSchema,
    generateFAQSchema,
    generateNavigationSchema,
} from "@/lib/schema";

// SSG — pre-render all product pages at build time
export async function generateStaticParams() {
    return getAllProductSlugs().map((slug) => ({ slug }));
}

// Dynamic metadata per product
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
        return { title: "Product Not Found" };
    }

    const url = `https://www.cinuteinfomedia.com/products/${product.slug}`;

    return {
        title: `${product.name} — ${product.tagline} | Cinute InfoMedia`,
        description: product.description,
        keywords: [
            product.name,
            product.tagline,
            ...product.techStack.slice(0, 5),
            "Cinute InfoMedia",
            "AI tools",
            "digital products",
        ],
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: `${product.name} — ${product.tagline}`,
            description: product.description,
            url,
            type: "website",
            images: [
                {
                    url: "/og-images/Services.webp",
                    width: 1200,
                    height: 630,
                    alt: `${product.name} by Cinute InfoMedia`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${product.name} — ${product.tagline}`,
            description: product.description,
            images: ["/og-images/Services.webp"],
        },
    };
}

export default async function ProductPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    const siteUrl = "https://www.cinuteinfomedia.com";

    // JSON-LD: SoftwareApplication schema
    const productSchema = generateGraphSchema(
        generateOrganizationSchema({
            description:
                "Cinute InfoMedia (CIM) is a digital growth agency building AI-powered products and tools for businesses worldwide.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: `${product.name} — ${product.tagline}`,
            description: product.description,
            urlPath: `/products/${product.slug}`,
            datePublished: "2025-01-01",
            dateModified: "2026-05-16",
        }),

        generateBreadcrumbSchema(
            [
                { name: "Home", url: "/" },
                { name: "Products", url: "/products" },
                { name: product.name, url: `/products/${product.slug}` },
            ],
            `${siteUrl}/products/${product.slug}/#breadcrumb`
        ),

        // SoftwareApplication schema
        {
            "@type": "SoftwareApplication",
            "@id": `${siteUrl}/products/${product.slug}/#software`,
            name: product.name,
            description: product.longDescription,
            url: `${siteUrl}/products/${product.slug}`,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "Free trial available. Contact for pricing.",
                url: `${siteUrl}/contact`,
            },
            provider: {
                "@id": `${siteUrl}/#organization`,
            },
            featureList: product.features.map((f) => f.title).join(", "),
        },

        generateFAQSchema(
            product.faqs.map((faq) => ({
                question: faq.question,
                answer: faq.answer,
            })),
            `${siteUrl}/products/${product.slug}/#faq`
        ),

        generateNavigationSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Products", url: "/products" },
            { name: "Blog", url: "/blog" },
            { name: "About", url: "/about" },
            { name: "Careers", url: "/careers" },
            { name: "Contact", url: "/contact" },
        ])
    );

    return (
        <main
            style={{
                "--page-selection-bg": product.accentColor,
                scrollPaddingTop: "5rem",
                scrollMarginTop: "5rem",
            } as React.CSSProperties}
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(productSchema),
                }}
            />
            <ProductHero product={product} />
            <Features product={product} />
            <HowItWorks product={product} />
            <TechStack product={product} />
            <FAQ product={product} />
            <ProductCTA product={product} />
            <ProductLinks product={product} />
        </main>
    );
}
