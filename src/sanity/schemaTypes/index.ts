import { type SchemaTypeDefinition } from 'sanity'
import author from './author'
import category from './category'
import post from './post'
import codeBlock from './codeBlock'
import callout from './callout'
import quoteBlock from './quoteBlock'
import tableBlock from './tableBlock'
import contactButton from './contactButton'
import job from './job'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [author, category, post, codeBlock, callout, quoteBlock, tableBlock, contactButton, job],
}
