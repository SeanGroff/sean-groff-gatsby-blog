import { MdxRemote } from 'next-mdx-remote/types'

export type FrontMatter = {
  title: string
  date: string
  categories: string | string[]
  featuredImage?: string | undefined
  tags: string[]
}

export type Post = {
  source: MdxRemote.Source
  frontMatter: FrontMatter
  slug: string
}

export type FileName = string | string[] | undefined
