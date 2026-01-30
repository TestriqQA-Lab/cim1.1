// import { getAuthorByName, authors, getBlogPostsByAuthor } from "@/data/blog"; // Removed
import AuthorClient from "./AuthorClient";
import { generateAuthorMetadata } from "@/lib/metadata";
import { generateAuthorSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { authorQuery, authorPostsQuery, authorsQuery } from "@/sanity/lib/queries";
import { mapSanityAuthorToAuthor, mapSanityPostToBlogPost } from "@/sanity/lib/mapper";

type Props = {
  params: Promise<{ name: string }>;
};

export const revalidate = 60;

export async function generateStaticParams() {
  const authors = await client.fetch(authorsQuery);
  return authors.map((author: any) => ({
    name: author.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;
  // name param corresponds to slug
  const sanityAuthor = await client.fetch(authorQuery, { slug: name });

  if (!sanityAuthor) return {};
  const author = mapSanityAuthorToAuthor(sanityAuthor);

  // We need post count for metadata
  const sanityPosts = await client.fetch(authorPostsQuery, { slug: name });

  return generateAuthorMetadata(author.name, author.bio, author.image, sanityPosts.length);
}

export default async function AuthorPage({ params }: Props) {
  const { name } = await params;

  // Fetch from Sanity
  const sanityAuthor = await client.fetch(authorQuery, { slug: name });

  if (!sanityAuthor) {
    notFound();
  }
  const author = mapSanityAuthorToAuthor(sanityAuthor);

  const sanityPosts = await client.fetch(authorPostsQuery, { slug: name });
  const posts = sanityPosts.map(mapSanityPostToBlogPost);

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
      <AuthorClient author={author} posts={posts} />
    </>
  );
}
