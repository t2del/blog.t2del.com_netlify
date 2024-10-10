import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		heroImageScroll: z.string().optional(),
		heroThumb: z.string().optional(),
		imgalt: z.string().optional(),
		status: z.string().optional(),
		author: z.string().optional(),
		customclass: z.string().optional(),
	}),
});

export const collections = { blog };
