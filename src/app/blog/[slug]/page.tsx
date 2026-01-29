import { getBlogPostBySlug, blogPosts } from "@/data/blog";
import BlogDetailClient from "./BlogDetailClient";
import { generateBlogPostMetadata } from "@/lib/metadata";
import { generateBlogPostSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) return {};

  return generateBlogPostMetadata(
    post.title,
    post.excerpt,
    post.image,
    post.slug,
    post.publishedAt,
    post.author.name
  );
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const blogSchema = generateBlogPostSchema(post);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.category, url: `/blog/category/${post.category.toLowerCase().replace(/\s+/g, "-")}` },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogDetailClient post={post} />
    </>
  );
}
