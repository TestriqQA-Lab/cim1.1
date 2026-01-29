import { Metadata } from "next";
import BlogCategoriesClient from "./BlogCategoriesClient";
import { getPageMetadata } from "@/lib/metadata";
import { generateBlogCollectionSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = getPageMetadata({
  title: "Blog Categories | Cinute Infomedia",
  description: "Explore our blog articles organized by category. From web development to digital marketing, find the insights you need.",
  url: "/blog/categories"
});

export default function BlogCategoriesPage() {
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
      <BlogCategoriesClient />
    </>
  );
}
