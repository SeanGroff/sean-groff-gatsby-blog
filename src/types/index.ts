import { MdxRemote } from 'next-mdx-remote/types'

export type FrontMatter = {
  title: string
  description: string
  date: string
  categories: string | string[]
  featuredImage?: string | undefined
  tags: string[]
}

export type AnyObject = {
  [key: string]: any
}

export type Post = {
  source: MdxRemote.Source
  frontMatter: FrontMatter | AnyObject
  slug: string
}

export type FileName = string
