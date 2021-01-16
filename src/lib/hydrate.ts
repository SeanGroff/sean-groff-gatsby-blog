import hydrate from 'next-mdx-remote/hydrate'
import type { Post } from '../types'

export const hydrateAllPosts = (posts: Post[]) => {
  return posts.map(
    (post): Post => {
      const source = hydrate(post.source)
      return {
        source,
        emojis: post.emojis,
        frontMatter: post.frontMatter,
        readingTime: post.readingTime,
        slug: post.slug,
      }
    }
  )
}
