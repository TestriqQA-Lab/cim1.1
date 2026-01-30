import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'tableBlock',
    title: 'Table',
    type: 'object',
    fields: [
        defineField({
            name: 'headers',
            title: 'Headers',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'rows',
            title: 'Rows',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'cells',
                            title: 'Cells',
                            type: 'array',
                            of: [{ type: 'string' }],
                        }),
                    ],
                },
            ],
        }),
    ],
})
