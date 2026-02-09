"use client";

import { TextBlock as TextBlockType } from "@/data/blog";

interface TextBlockProps {
    block: TextBlockType;
}

export default function TextBlock({ block }: TextBlockProps) {
    // Strip HTML tags for ID generation
    const cleanText = block.content.replace(/<[^>]*>/g, '');
    const id = cleanText
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");

    switch (block.variant) {
        case "h1":
            return (
                <h1
                    id={id}
                    className="text-3xl font-bold mb-6 mt-8 scroll-mt-24"
                    style={{ color: "var(--foreground)" }}
                    dangerouslySetInnerHTML={{ __html: block.content }}
                />
            );
        case "h2":
            return (
                <h2
                    id={id}
                    className="text-2xl font-bold mb-4 mt-8 scroll-mt-24"
                    style={{ color: "var(--foreground)" }}
                    dangerouslySetInnerHTML={{ __html: block.content }}
                />
            );
        case "h3":
            return (
                <h3
                    id={id}
                    className="text-xl font-bold mb-3 mt-6 scroll-mt-24"
                    style={{ color: "var(--foreground)" }}
                    dangerouslySetInnerHTML={{ __html: block.content }}
                />
            );
        case "paragraph":
        default:
            return (
                <p
                    className="mb-4 leading-relaxed"
                    style={{ color: "var(--secondary-text)" }}
                    dangerouslySetInnerHTML={{
                        __html: block.content
                            .replace(
                                /\*\*(.+?)\*\*/g,
                                "<strong style='color: var(--foreground)'>$1</strong>"
                            )
                            .replace(
                                /\[([^\]]+)\]\(([^)]+)\)/g,
                                "<a href='$2' class='text-[var(--brand-purple)] transition-colors'>$1</a>"
                            ),
                    }}
                />
            );
    }
}
