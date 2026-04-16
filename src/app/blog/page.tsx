import { Suspense } from "react";
import BlogClient from "./BlogClient";
import { client } from "@/sanity/lib/client";
import { allPostsQuery } from "@/sanity/lib/queries";
import { mapSanityPostToBlogPost } from "@/sanity/lib/mapper";
import { getSidebarData } from "@/sanity/lib/data";

import { getPageMetadata } from '@/lib/metadata';
import {
    generateGraphSchema,
    generateOrganizationSchema,
    generateWebSiteSchema,
    generateBreadcrumbSchema,
    generateItemListSchema,
    generateNavigationSchema,
} from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'Blog & Insights | CIM - Digital Marketing & Web Development',
    description: 'Discover expert strategies, industry trends, and actionable insights to elevate your digital presence and grow your business. Explore insights on web development, digital marketing, SEO strategies, UI/UX design, AI & automation, mobile apps, business strategy, and case studies. Updated weekly.',
    url: '/blog',
    keywords: [
        'digital marketing blog',
        'web development insights',
        'SEO strategies',
        'UI/UX design tips',
        'AI automation trends',
        'mobile app development',
        'business growth strategy',
        'digital agency blog',
        'marketing case studies',
        'tech industry insights',
    ],
});

export const revalidate = 60; // Revalidate every minute

function BlogLoadingFallback() {
  return (
    <main
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
      className="min-h-screen"
    >
      <div className="flex items-center justify-center py-32">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[var(--brand-purple)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p style={{ color: "var(--secondary-text)" }}>Loading blog...</p>
        </div>
      </div>
    </main>
  );
}

export default async function BlogPage() {
  // Fetch data from Sanity
  const sanityPosts = await client.fetch(allPostsQuery);
  const blogPosts = sanityPosts.map(mapSanityPostToBlogPost);

  const { categories, popularPosts, tags } = await getSidebarData();

  // Unified @graph schema
  const blogSchema = generateGraphSchema(
      generateOrganizationSchema({
          description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
          slogan: "Build. Market. Scale.",
      }),

      generateWebSiteSchema(),

      {
          "@type": "CollectionPage",
          "@id": "https://www.cinuteinfomedia.com/blog/#collectionpage",
          "url": "https://www.cinuteinfomedia.com/blog",
          "name": "Blog & Insights | CIM - Digital Marketing & Web Development",
          "description": "Discover expert strategies, industry trends, and actionable insights to elevate your digital presence and grow your business. Explore insights on web development, digital marketing, SEO strategies, UI/UX design, AI & automation, mobile apps, business strategy, and case studies. Updated weekly.",
          "isPartOf": {
              "@id": "https://www.cinuteinfomedia.com/#website"
          },
          "about": {
              "@id": "https://www.cinuteinfomedia.com/#organization"
          },
          "breadcrumb": {
              "@id": "https://www.cinuteinfomedia.com/blog/#breadcrumb"
          },
          "mainEntity": {
              "@id": "https://www.cinuteinfomedia.com/blog/#blogCategoriesList"
          },
          "inLanguage": "en-US",
          "datePublished": "2025-01-01",
          "dateModified": "2026-04-15"
      },

      generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
      ], "https://www.cinuteinfomedia.com/blog/#breadcrumb"),

      generateItemListSchema({
          id: "/blog/#blogCategoriesList",
          name: "Blog Categories",
          description: "Eight blog content categories covering all aspects of digital growth: Web Development, Mobile Apps, Digital Marketing, AI & Automation, UI/UX Design, SEO, Business Strategy, and Case Studies.",
          items: [
              { name: "Web Development", url: "/blog/category/web-development" },
              { name: "Mobile Apps", url: "/blog/category/mobile-apps" },
              { name: "Digital Marketing", url: "/blog/category/digital-marketing" },
              { name: "AI & Automation", url: "/blog/category/ai-automation" },
              { name: "UI/UX Design", url: "/blog/category/ui-ux-design" },
              { name: "SEO", url: "/blog/category/seo" },
              { name: "Business Strategy", url: "/blog/category/business-strategy" },
              { name: "Case Studies", url: "/blog/category/case-studies" },
          ],
      }),

      generateNavigationSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema),
        }}
      />
      <Suspense fallback={<BlogLoadingFallback />}>
        <BlogClient
          initialPosts={blogPosts}
          categories={categories}
          popularPosts={popularPosts}
          tags={tags}
        />
      </Suspense>
    </>
  );
}
