import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft)
  const sorted = posts.sort((a, b) => new Date(b.data.date) - new Date(a.data.date))

  return rss({
    title: 'Iliass Tahiri — Geomechanics & Materials',
    description: 'Research notes, engineering insights, and practical guides on geomechanics, concrete durability, and AI tools for engineers.',
    site: context.site,
    items: sorted.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.date),
      description: post.data.excerpt,
      link: `/blog/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  })
}
