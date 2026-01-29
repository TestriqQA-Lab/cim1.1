import { getAuthorByName, authors, getBlogPostsByAuthor } from "@/data/blog";
import AuthorClient from "./AuthorClient";
import { generateAuthorMetadata } from "@/lib/metadata";
import { generateAuthorSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: Promise<{ name: string }>;
};

export async function generateStaticParams() {
  return authors.map((author) => ({
    name: author.name.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;
  const authorName = name.replace(/-/g, " ");
  const author = getAuthorByName(authorName);

  if (!author) return {};

  const authorPosts = getBlogPostsByAuthor(author.id);
  return generateAuthorMetadata(author.name, author.bio, author.image, authorPosts.length);
}

export default async function AuthorPage({ params }: Props) {
  const { name } = await params;
  const authorName = name.replace(/-/g, " ");
  const author = getAuthorByName(authorName);

  if (!author) {
    notFound();
  }

  const authorSchema = generateAuthorSchema(author);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: author.name, url: `/blog/author/${name}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AuthorClient author={author} />
    </>
  );
}
