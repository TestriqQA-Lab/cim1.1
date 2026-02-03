import { defineField, defineType } from 'sanity'

// We will define the custom blocks here to be used in the Portable Text array

export const calloutBlock = defineType({
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
            initialValue: 'info',
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
        }),
    ],
})


export const codeBlock = defineType({
    name: 'codeBlock', // Renamed to avoid conflict with standard code types if any
    title: 'Code Block',
    type: 'object',
    fields: [
        defineField({
            name: 'language',
            title: 'Language',
            type: 'string',
            initialValue: 'javascript'
        }),
        defineField({
            name: 'filename',
            title: 'Filename',
            type: 'string',
        }),
        defineField({
            name: 'code',
            title: 'Code',
            type: 'text',
            rows: 10
        })
    ]
})

export const tableBlock = defineType({
    name: 'tableBlock',
    title: 'Table',
    type: 'object',
    fields: [
        defineField({
            name: 'headers',
            title: 'Headers',
            type: 'array',
            of: [{ type: 'string' }]
        }),
        defineField({
            name: 'rows',
            title: 'Rows',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    {
                        name: 'cells',
                        title: 'Cells',
                        type: 'array',
                        of: [{ type: 'string' }]
                    }
                ]
            }]
        })
    ]
})

export const quoteBlock = defineType({
    name: 'quoteBlock',
    title: 'Quote',
    type: 'object',
    fields: [
        defineField({ name: 'content', title: 'Content', type: 'text' }),
        defineField({ name: 'author', title: 'Author', type: 'string' }),
    ]
})
