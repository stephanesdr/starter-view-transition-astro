import { z, reference, defineCollection } from 'astro:content';

const articleCollection = defineCollection({
    type: 'content', 
    schema: z.object({
        title: z.string(),
        canonicalURL: z.string().url(),
        image: z.string().optional(),
        tags: z.array(reference('tags')),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional()
    }),
});

const tagCollection = defineCollection({
    type: 'data', 
    schema: z.object({
        title: z.string(),
        canonicalURL: z.string().url(),
        image: z.string().optional(),
        articles: z.array(reference('articles')),
    }),
});

const authorCollection = defineCollection({
    type: 'data', 
    schema: z.object({
        username: z.string(),
        lastname: z.string(),
        firstname: z.string(),
        canonicalURL: z.string().url(),
        blogs: z.array(z.string()),
        image: z.string().optional(),
    }),
});

export const collections = {
    'articles': articleCollection,
    'tags': tagCollection,
    'authors': authorCollection,
};