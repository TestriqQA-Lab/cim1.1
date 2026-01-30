import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'codeBlock',
    title: 'Code Block',
    type: 'object',
    fields: [
        defineField({
            name: 'code',
            title: 'Code',
            type: 'text',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'language',
            title: 'Language',
            type: 'string',
            description: 'e.g., javascript, python, css',
        }),
        defineField({
            name: 'filename',
            title: 'Filename',
            type: 'string',
        }),
    ],
})
