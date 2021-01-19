import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import mdxPrism from 'mdx-prism'
import readingTime from 'reading-time'
import renderToString from 'next-mdx-remote/render-to-string'
import type { FileName, Post } from '../types'
import MDXComponents from '../components/MDXComponents'

const getEmojisByReadingTime = (time: number) => {
  const threeMinutes = 3
  const fiveMinutes = 5
  const tenMinutes = 10
  const twentyMinutes = 20

  if (time <= threeMinutes) {
    return '☕️'
  }
  if (time <= fiveMinutes) {
    return '☕️ ☕️'
  }
  if (time <= tenMinutes) {
    return '☕️ ☕️ ☕️'
  }
  if (time <= twentyMinutes) {
    return '☕️ ☕️ ☕️ ☕️'
  }

  return '☕️ ☕️ ☕️ ☕️ ☕️'
}

export const postsDirectory = path.join(process.cwd(), 'src/posts')
const fileNames = fs.readdirSync(postsDirectory)

const _createSlugFromFileName = (fileName: FileName) => {
  return `/posts/${fileName?.replace(/\.mdx$/, '')}`
}

export const getAllPostSlugs = () => {
  return fileNames.map((fileName) => {
    return { params: { slug: fileName.replace(/\.mdx$/, '') } }
  })
}

export const getAllPostFileNames = () => {
  return fileNames
}

export const getPostData = async (fileName: FileName): Promise<Post> => {
  const fileContent = fs.readFileSync(`${postsDirectory}/${fileName}`, 'utf8')
  const { content, data } = matter(fileContent)
  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        require('remark-slug'),
        require('remark-autolink-headings'),
      ],
      rehypePlugins: [mdxPrism],
    },
  })
  const { minutes } = readingTime(content)

  return {
    readingTime: Math.ceil(minutes),
    emojis: getEmojisByReadingTime(Math.ceil(minutes)),
    source: mdxSource,
    frontMatter: data,
    slug: _createSlugFromFileName(fileName),
  }
}

export const sortPostsByPublishDate = (posts: Post[]) => {
  return [...posts].sort((a, b) => {
    return Date.parse(b.frontMatter.date) - Date.parse(a.frontMatter.date)
  })
}
