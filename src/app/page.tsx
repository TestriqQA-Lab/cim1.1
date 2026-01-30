import { Metadata } from "next";
import HomeClient from "./HomeClient";
import { getPageMetadata } from "@/lib/metadata";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  ...getPageMetadata({
    title: "Web Development Company 🚀 | AI-Powered Digital Solutions",
    description: "Leading web development company delivering custom websites, mobile apps & AI-driven marketing. 320% ROI proven. 300+ global projects. Free audit today! ✨",
    url: "/",
    keywords: [
      "web development company",
      "best web development company in india",
      "custom website development",
      "web design and development company",
      "professional website development"
    ],
  }),
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Mumbai, India",
  },
};

import { client } from "@/sanity/lib/client";
import { moreStoriesQuery } from "@/sanity/lib/queries";
import { mapSanityPostToBlogPost } from "@/sanity/lib/mapper";

export const revalidate = 60;

export default async function Home() {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();

  // Fetch latest 3 posts
  const sanityPosts = await client.fetch(moreStoriesQuery, { limit: 3, skip: "" });
  const latestPosts = sanityPosts.map(mapSanityPostToBlogPost);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <HomeClient latestPosts={latestPosts} />
    </>
  );
}
