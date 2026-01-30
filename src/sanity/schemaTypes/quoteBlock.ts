import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'quoteBlock',
    title: 'Quote',
    type: 'object',
    fields: [
        defineField({
            name: 'content',
            title: 'Quote Content',
            type: 'text',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'string',
        }),
    ],
    preview: {
        select: {
            title: 'content',
            subtitle: 'author',
        },
        prepare({ title, subtitle }) {
            return {
                title: title,
                subtitle: subtitle ? `- ${subtitle}` : 'Quote',
            }
        },
    },
})
