import { BlogPost, Author, ContentBlock } from '@/data/blog';
import { urlFor } from './image';

export function mapSanityPostToBlogPost(sanityPost: any): BlogPost {
    return {
        id: sanityPost._id,
        title: sanityPost.title,
        slug: sanityPost.slug,
        excerpt: sanityPost.excerpt || '',
        content: sanityPost.markdownContent || '', // Fallback to markdown if blocks fail
        contentBlocks: mapSanityBlocksToContentBlocks(sanityPost.content),
        author: mapSanityAuthorToAuthor(sanityPost.author),
        category: sanityPost.category?.name || 'Uncategorized',
        tags: sanityPost.tags || [],
        image: sanityPost.mainImage ? urlFor(sanityPost.mainImage).url() : '',
        publishedAt: sanityPost.publishedAt,
        readTime: sanityPost.readTime || 5,
        featured: sanityPost.featured || false,
        seo: sanityPost.seo,
    };
}

export function mapSanityAuthorToAuthor(sanityAuthor: any): Author {
    if (!sanityAuthor) {
        return {
            id: 'unknown',
            name: 'Unknown Author',
            title: '',
            bio: '',
            image: '',
            email: '',
        }
    }
    return {
        id: sanityAuthor._id || sanityAuthor.slug, // Use slug or ID
        name: sanityAuthor.name,
        title: sanityAuthor.title || '',
        bio: sanityAuthor.bio || '',
        image: sanityAuthor.image ? urlFor(sanityAuthor.image).url() : '',
        email: sanityAuthor.email || '',
        social: sanityAuthor.social,
        postsCount: sanityAuthor.postsCount,
    };
}

export function mapSanityBlocksToContentBlocks(sanityBlocks: any[]): ContentBlock[] {
    if (!sanityBlocks || !Array.isArray(sanityBlocks)) return [];

    const contentBlocks: ContentBlock[] = [];
    let currentListBlock: any = null;

    for (const block of sanityBlocks) {
        // Handle List Items
        if (block._type === 'block' && block.listItem) {
            const listStyle = block.listItem === 'number' ? 'numbered' : 'bullet';
            const content = block.children?.map((c: any) => c.text).join('');

            if (currentListBlock && currentListBlock.style === listStyle) {
                // Continue existing list
                currentListBlock.items.push(content);
            } else {
                // Start new list. Push previous list if it exists.
                if (currentListBlock) {
                    contentBlocks.push(currentListBlock);
                }
                currentListBlock = {
                    id: block._key,
                    type: 'list',
                    style: listStyle,
                    items: [content]
                };
            }
        } else {
            // If we encounter a non-list block, close any open list
            if (currentListBlock) {
                contentBlocks.push(currentListBlock);
                currentListBlock = null;
            }

            // --- Handle other blocks ---

            if (block._type === 'block') {
                // Headings
                if (block.style === 'h1' || block.style === 'h2' || block.style === 'h3') {
                    contentBlocks.push({
                        id: block._key,
                        type: 'text',
                        variant: block.style,
                        content: block.children?.map((c: any) => c.text).join('')
                    });
                    continue;
                }

                // Paragraphs (default)
                contentBlocks.push({
                    id: block._key,
                    type: 'text',
                    variant: 'paragraph',
                    content: block.children?.map((c: any) => c.text).join('')
                });
                continue;
            }

            if (block._type === 'image') {
                contentBlocks.push({
                    id: block._key,
                    type: 'image',
                    src: block.asset ? urlFor(block.asset).url() : '',
                    alt: block.alt || '',
                    caption: block.caption
                });
                continue;
            }

            if (block._type === 'codeBlock') {
                contentBlocks.push({
                    id: block._key,
                    type: 'code',
                    language: block.language,
                    code: block.code,
                    filename: block.filename
                });
                continue;
            }

            if (block._type === 'quoteBlock') {
                contentBlocks.push({
                    id: block._key,
                    type: 'quote',
                    content: block.content,
                    author: block.author
                });
                continue;
            }

            if (block._type === 'callout') {
                contentBlocks.push({
                    id: block._key,
                    type: 'callout',
                    variant: block.variant,
                    title: block.title,
                    content: block.content
                });
                continue;
            }

            if (block._type === 'tableBlock') {
                // Adapter for @sanity/table
                // The plugin returns: { rows: [{ cells: ["val1", "val2"], _type: "tableRow", _key: "..." }] }
                // We assume the first row is the header
                const rawRows = block.rows || [];
                const headers = rawRows.length > 0 ? rawRows[0].cells : [];
                const rows = rawRows.length > 1 ? rawRows.slice(1).map((r: any) => r.cells) : [];

                contentBlocks.push({
                    id: block._key,
                    type: 'table',
                    headers: headers,
                    rows: rows
                });
                continue;
            }
        }
    }

    // Push any remaining list block at the end
    if (currentListBlock) {
        contentBlocks.push(currentListBlock);
    }

    return contentBlocks.filter(Boolean) as ContentBlock[];
}
