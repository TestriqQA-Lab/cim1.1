import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'callout',
    title: 'Callout',
    type: 'object',
    fields: [
        defineField({
            name: 'variant',
            title: 'Variant',
            type: 'string',
            options: {
                list: [
                    { title: 'Info', value: 'info' },
                    { title: 'Warning', value: 'warning' },
                    { title: 'Tip', value: 'tip' },
                    { title: 'Note', value: 'note' },
                ],
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'text',
            validation: (rule) => rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'content',
            variant: 'variant',
        },
        prepare({ title, subtitle, variant }) {
            const emojis: Record<string, string> = {
                info: 'ℹ️',
                warning: '⚠️',
                tip: '💡',
                note: '📝',
            }
            return {
                title: title || (variant ? variant.charAt(0).toUpperCase() + variant.slice(1) : 'Callout'),
                subtitle: subtitle,
                media: () => emojis[variant as string] || '📌',
            }
        },
    },
})
