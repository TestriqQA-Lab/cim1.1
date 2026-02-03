import { Metadata } from "next";
import BlogCategoriesClient from "./BlogCategoriesClient";
import { getPageMetadata } from "@/lib/metadata";
import { generateBlogCollectionSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = getPageMetadata({
  title: "Blog Categories | Cinute Infomedia",
  description: "Explore our blog articles organized by category. From web development to digital marketing, find the insights you need.",
  url: "/blog/categories"
});

import { client } from "@/sanity/lib/client";
import { allPostsQuery, categoriesQuery } from "@/sanity/lib/queries";
import { mapSanityPostToBlogPost } from "@/sanity/lib/mapper";
import { getSidebarData } from "@/sanity/lib/data";

export const revalidate = 60;

export default async function BlogCategoriesPage() {
  const [sanityPosts, categories] = await Promise.all([
    client.fetch(allPostsQuery),
    client.fetch(categoriesQuery)
  ]);

  const posts = sanityPosts.map(mapSanityPostToBlogPost);
  const { popularPosts, tags } = await getSidebarData();
  const sidebarCategories = categories.map((c: any) => c.name);

  // ... rest of the code

  const jsonLd = [
    generateBlogCollectionSchema(
      "Blog Categories",
      "Explore our blog articles organized by category.",
      "/blog/categories"
    ),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Blog", url: "/blog" },
      { name: "Categories", url: "/blog/categories" }
    ])
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogCategoriesClient
        categories={categories}
        posts={posts}
        sidebarCategories={sidebarCategories}
        popularPosts={popularPosts}
        tags={tags}
      />
    </>
  );
}
