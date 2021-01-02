import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Image from 'next/image'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import { GetStaticProps } from 'next'
import { MdxRemote } from 'next-mdx-remote/types'

type FrontMatter = {
  title: string
  date: string
  categories: string | string[]
  featuredImage?: string | undefined
  tags: string[]
}

type Post = {
  source: MdxRemote.Source
  frontMatter: FrontMatter
}

type Props = {
  posts: Post[]
}

function Posts({ posts }: Props) {
  const _posts = posts.map((post) => {
    const source = hydrate(post.source)
    return { source, frontMatter: post.frontMatter }
  })

  return (
    <div>
      <ul>
        {_posts.map((post) => {
          const { frontMatter } = post
          return (
            <li key={frontMatter.title}>
              <h3>{frontMatter.title}</h3>
              {frontMatter?.featuredImage && (
                <Image
                  src={`/${frontMatter.featuredImage}`}
                  alt={`Featured image for the ${frontMatter.title} article`}
                  width={400}
                  height={200}
                />
              )}
              <p>{frontMatter.date}</p>
              {frontMatter.tags.map((tag) => (
                <span key={tag} style={{ marginRight: 4 }}>
                  {tag}
                </span>
              ))}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), 'pages/posts')
  const filenames = fs.readdirSync(postsDirectory)
  const postFilenames = filenames.filter(
    (filename) => filename.split('.')[1] === 'mdx'
  )

  const posts = await Promise.all(
    postFilenames.map(async (filename) => {
      const fileContent = fs.readFileSync(
        `${postsDirectory}/${filename}`,
        'utf8'
      )
      const { content, data } = matter(fileContent)
      const mdxSource = await renderToString(content)
      return { source: mdxSource, frontMatter: data }
    })
  )

  return {
    props: {
      posts,
    },
  }
}

export default Posts
