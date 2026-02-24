import CategoryClient from "./CategoryClient";
import { generateCategoryMetadata } from "@/lib/metadata";
import { generateBlogCollectionSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { categoryQuery, categoryPostsQuery, categoriesQuery } from "@/sanity/lib/queries";
import { mapSanityPostToBlogPost } from "@/sanity/lib/mapper";
import { getSidebarData } from "@/sanity/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 60;

export async function generateStaticParams() {
  const categories = await client.fetch(categoriesQuery);
  return categories.map((category: any) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = await client.fetch(categoryQuery, { slug });

  if (!category) return {};

  // For metadata counts, we might need a separate query or just fetch posts
  const posts = await client.fetch(categoryPostsQuery, { slug });

  return generateCategoryMetadata(category.name, posts.length, category.slug);
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;

  // Fetch from Sanity
  const categoryInfo = await client.fetch(categoryQuery, { slug });

  if (!categoryInfo) {
    notFound();
  }

  // Normalize nullable Sanity array fields — some categories may not have these filled yet
  const normalizedCategoryInfo = {
    ...categoryInfo,
    relatedTopics: categoryInfo.relatedTopics ?? [],
    featuredTags: categoryInfo.featuredTags ?? [],
  };

  const sanityPosts = await client.fetch(categoryPostsQuery, { slug });
  const posts = sanityPosts.map(mapSanityPostToBlogPost);

  const { categories, popularPosts, tags } = await getSidebarData();

  const collectionSchema = generateBlogCollectionSchema(
    `${categoryInfo.name} Articles`,
    categoryInfo.description,
    `/blog/category/${slug}`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: categoryInfo.name, url: `/blog/category/${slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CategoryClient
        categoryName={normalizedCategoryInfo.name}
        categoryInfo={normalizedCategoryInfo}
        posts={posts}
        categories={categories}
        popularPosts={popularPosts}
        tags={tags}
      />
    </>
  );
}
