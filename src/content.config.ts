import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import config from "@/config";

export const BLOG_PATH = "src/content/posts";

const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(config.site.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
    }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    ogImage: z.string().optional(),
    canonicalURL: z.string().optional(),
  }),
});

const albums = defineCollection({
  loader: glob({
    pattern: "**/*.{yaml,yml,json}",
    base: "./src/content/albums",
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    province: z.object({
      name: z.string(),
      slug: z.string(),
      adcode: z.number(),
    }),
    city: z.string().optional(),
    description: z.string(),
    cover: z.string(),
    publishedAt: z.coerce.date(),
    photos: z.array(
      z.object({
        src: z.string(),
        width: z.number().positive(),
        height: z.number().positive(),
        alt: z.string(),
        caption: z.string().optional(),
        takenAt: z.coerce.date().optional(),
        location: z.string().optional(),
      })
    ),
  }),
});

export const collections = { posts, pages, albums };
