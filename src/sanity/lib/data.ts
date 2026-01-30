import { client } from "./client";
import { categoriesQuery, moreStoriesQuery } from "./queries";
import { mapSanityPostToBlogPost } from "./mapper";
import { BlogPost } from "@/data/blog";

export async function getSidebarData(): Promise<{
    categories: string[];
    popularPosts: BlogPost[];
    tags: string[];
}> {
    const [categories, popularPostsRaw] = await Promise.all([
        client.fetch(categoriesQuery),
        client.fetch(moreStoriesQuery, { limit: 5, skip: "" }), // Using recent posts as popular for now
    ]);

    const popularPosts = popularPostsRaw.map(mapSanityPostToBlogPost);
    // Get all tags from popular posts as a simplified "tags" list for now, 
    // or we could query all tags. 
    // Let's assume tags come from the posts we fetched to avoid over-fetching.
    const tags = Array.from(new Set(popularPosts.flatMap((p: { tags: string[] }) => p.tags))) as string[];

    return {
        categories: categories.map((c: any) => c.name as string),
        popularPosts,
        tags
    };
}
