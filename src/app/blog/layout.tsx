import { Suspense } from "react";
import { Metadata } from "next";
import { blogMetadata } from "@/lib/metadata";
import BlogNavbar from "@/components/blog/BlogNavbar";

export const metadata: Metadata = blogMetadata;

function BlogNavbarFallback() {
    return (
        <nav
            className="sticky top-16 lg:top-20 z-[100] border-b backdrop-blur-md"
            style={{
                backgroundColor: "color-mix(in srgb, var(--background) 95%, transparent)",
                borderColor: "var(--border-color)",
            }}
        >
            <div className="px-4 sm:px-6 md:px-12 xl:px-16">
                <div className="flex items-center justify-between gap-3 py-3 lg:py-4">
                    <div className="h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                    <div className="flex-1 max-w-xl mx-4 hidden md:block">
                        <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
                    </div>
                    <div className="flex gap-2">
                        <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

import { client } from "@/sanity/lib/client";
import { allPostsQuery, categoriesWithPostCountQuery } from "@/sanity/lib/queries";
import { mapSanityPostToBlogPost } from "@/sanity/lib/mapper";

export default async function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [categories, sanityPosts] = await Promise.all([
        client.fetch(categoriesWithPostCountQuery),
        client.fetch(allPostsQuery)
    ]);

    const posts = sanityPosts.map(mapSanityPostToBlogPost);

    return (
        <>
            <Suspense fallback={<BlogNavbarFallback />}>
                <BlogNavbar categories={categories} posts={posts} />
            </Suspense>
            {children}
        </>
    );
}
