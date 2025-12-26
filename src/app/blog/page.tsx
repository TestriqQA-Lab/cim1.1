import { Suspense } from "react";
import BlogClient from "./BlogClient";
import { blogMetadata } from "@/lib/metadata";
import { blogPosts } from "@/data/blog";
import { generateBlogCollectionSchema } from "@/lib/schema";

export const metadata = blogMetadata;

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

export default function BlogPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Cinute Infomedia Blog",
    description: "Expert insights on web development, digital marketing, and business growth.",
    url: "https://www.cinuteinfomedia.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Cinute Infomedia",
    },
    blogPost: blogPosts.slice(0, 10).map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.publishedAt,
      author: {
        "@type": "Person",
        name: post.author.name,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Suspense fallback={<BlogLoadingFallback />}>
        <BlogClient />
      </Suspense>
    </>
  );
}
