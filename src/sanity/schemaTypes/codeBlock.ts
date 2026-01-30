import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'codeBlock',
    title: 'Code Block',
    type: 'code',
    options: {
        withFilename: true,
    },
}) as any
