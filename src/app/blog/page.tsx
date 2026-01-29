import { Suspense } from "react";
import { blogPosts } from "@/data/blog";
import BlogClient from "./BlogClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights | CIM - Digital Marketing & Web Development",
  description: "Explore expert insights on web development, digital marketing, SEO strategies, and business growth.",
  alternates: {
    canonical: "https://cim.com/blog",
  },
};

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
  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "CIM Blog",
    description: "Expert insights on web development, digital marketing, and business growth.",
    url: "https://cim.com/blog",
    publisher: {
      "@type": "Organization",
      name: "CIM",
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <Suspense fallback={<BlogLoadingFallback />}>
        <BlogClient initialPosts={blogPosts} />
      </Suspense>
    </>
  );
}
