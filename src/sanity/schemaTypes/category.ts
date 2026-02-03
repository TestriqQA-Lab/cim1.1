import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'longDescription',
            title: 'Long Description',
            type: 'text',
        }),
        defineField({
            name: 'icon',
            title: 'Icon Name (Lucide)',
            type: 'string',
            description: 'Name of the Lucide icon to use (e.g., "Code", "Smartphone")',
        }),
        defineField({
            name: 'color',
            title: 'Color Hex',
            type: 'string',
            description: 'Hex color code (e.g., #6B00D7)',
        }),
        defineField({
            name: 'relatedTopics',
            title: 'Related Topics',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'featuredTags',
            title: 'Featured Tags',
            type: 'array',
            of: [{ type: 'string' }],
        }),
    ],
})
