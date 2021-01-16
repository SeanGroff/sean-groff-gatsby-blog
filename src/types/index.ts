import { MdxRemote } from 'next-mdx-remote/types'
import type { ReactNode } from 'react'

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

export type Emojis =
  | '☕️'
  | '☕️ ☕️'
  | '☕️ ☕️ ☕️'
  | '☕️ ☕️ ☕️ ☕️'
  | '☕️ ☕️ ☕️ ☕️ ☕️'

export type Post = {
  source: MdxRemote.Source | ReactNode
  frontMatter: FrontMatter | AnyObject
  emojis: Emojis
  readingTime: number
  slug: string
}

export type FileName = string
