import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import renderToString from 'next-mdx-remote/render-to-string'
import type { FileName, Post } from '../types'

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

export const getPostData = async (fileName: FileName) => {
  const fileContent = fs.readFileSync(`${postsDirectory}/${fileName}`, 'utf8')
  const { content, data } = matter(fileContent)
  const mdxSource = await renderToString(content)
  return {
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
