// src/content.config.ts
import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()).default([]),
    excerpt: z.string(),
    featured: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
  }),
})

const tilCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/til' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tag: z.string(),
    summary: z.string(),
  }),
})

const perspectivesCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/perspectives' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    topic: z.string(),
    excerpt: z.string(),
  }),
})

const tutorialsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/tutorials' }),
  schema: z.object({
    title: z.string(),
    niche: z.string(),
    summary: z.string(),
    date: z.string().optional(),
  }),
})

export const collections = {
  blog: blogCollection,
  til: tilCollection,
  perspectives: perspectivesCollection,
  tutorials: tutorialsCollection,
}
