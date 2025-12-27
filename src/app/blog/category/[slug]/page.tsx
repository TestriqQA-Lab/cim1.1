import { categoryDetails, categories, getCategorySlug, getCategoryDetails, getBlogPostsByCategory } from "@/data/blog";
import CategoryClient from "./CategoryClient";
import { generateCategoryMetadata } from "@/lib/metadata";
import { generateBlogCollectionSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return categoryDetails.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryDetails.find((c) => c.slug === slug);

  if (!category) return {};

  const posts = getBlogPostsByCategory(category.name);
  return generateCategoryMetadata(category.name, posts.length, category.slug);
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const categoryName = categories.find((cat) => getCategorySlug(cat) === slug);
  const categoryInfo = getCategoryDetails(slug);

  if (!categoryName || !categoryInfo) {
    notFound();
  }

  const posts = getBlogPostsByCategory(categoryName);
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
      <CategoryClient categoryName={categoryName} categoryInfo={categoryInfo} />
    </>
  );
}
