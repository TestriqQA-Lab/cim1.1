import { BlogPost, Author, ContentBlock } from '@/data/blog';
import { Job } from '@/types/careers';
import { urlFor } from './image';

/**
 * Serializes Sanity Portable Text block children with marks into HTML
 * Handles links, bold, italic, and other inline formatting
 */
function serializePortableTextBlock(block: any): string {
    if (!block.children || !Array.isArray(block.children)) return '';

    return block.children.map((child: any) => {
        let text = child.text || '';

        // Apply marks (links, bold, italic, etc.)
        if (child.marks && Array.isArray(child.marks) && child.marks.length > 0) {
            // Process marks in reverse to handle nested formatting correctly
            const marks = [...child.marks].reverse();

            marks.forEach((mark: string) => {
                // Find mark definition for links
                const markDef = block.markDefs?.find((def: any) => def._key === mark);

                if (markDef?._type === 'link') {
                    // Handle links with proper styling
                    const href = markDef.href || '#';
                    text = `<a href="${href}" class="text-[var(--brand-purple)] hover:underline transition-colors">${text}</a>`;
                } else if (mark === 'strong') {
                    text = `<strong style='color: var(--foreground)'>${text}</strong>`;
                } else if (mark === 'em') {
                    text = `<em>${text}</em>`;
                } else if (mark === 'code') {
                    text = `<code>${text}</code>`;
                }
            });
        }

        return text;
    }).join('');
}

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
        schema: sanityPost.schema,
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
        seo: sanityAuthor.seo,
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
                        content: serializePortableTextBlock(block)
                    });
                    continue;
                }

                // Paragraphs (default)
                contentBlocks.push({
                    id: block._key,
                    type: 'text',
                    variant: 'paragraph',
                    content: serializePortableTextBlock(block)
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

            if (block._type === 'contactButton') {
                contentBlocks.push({
                    id: block._key,
                    type: 'contactButton',
                    text: block.text || 'Contact Us',
                    variant: block.variant || 'primary'
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

export function mapSanityJobToJob(sanityJob: any): Job {
    return {
        id: sanityJob._id,
        title: sanityJob.title,
        department: sanityJob.department,
        location: sanityJob.location,
        type: sanityJob.type,
        description: sanityJob.description,
        requirements: sanityJob.requirements || [],
    };
}
