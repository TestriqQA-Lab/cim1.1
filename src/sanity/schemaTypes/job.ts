import { defineField, defineType } from 'sanity'
import { Briefcase } from 'lucide-react'

export default defineType({
    name: 'job',
    title: 'Job Position',
    type: 'document',
    icon: Briefcase as any,
    fields: [
        defineField({
            name: 'title',
            title: 'Job Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'department',
            title: 'Department',
            type: 'string',
            options: {
                list: [
                    'Engineering',
                    'Design',
                    'Marketing',
                    'Product',
                    'Sales',
                    'HR',
                    'Other'
                ],
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            initialValue: 'Remote',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'type',
            title: 'Employment Type',
            type: 'string',
            options: {
                list: [
                    'Full-time',
                    'Part-time',
                    'Contract',
                    'Freelance',
                    'Internship'
                ],
            },
            initialValue: 'Full-time',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'requirements',
            title: 'Requirements',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'department',
        },
    },
})
