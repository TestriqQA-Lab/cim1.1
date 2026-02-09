import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'contactButton',
    title: 'Contact Us Button',
    type: 'object',
    fields: [
        defineField({
            name: 'text',
            title: 'Button Text',
            type: 'string',
            initialValue: 'Contact Us',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'variant',
            title: 'Button Style',
            type: 'string',
            options: {
                list: [
                    { title: 'Primary (Purple)', value: 'primary' },
                    { title: 'Secondary (Outline)', value: 'secondary' },
                ],
            },
            initialValue: 'primary',
        }),
    ],
    preview: {
        select: {
            text: 'text',
            variant: 'variant',
        },
        prepare({ text, variant }) {
            return {
                title: text || 'Contact Us',
                subtitle: `Contact Button (${variant})`,
            }
        },
    },
})
