import Image from 'next/image'
import Link from 'next/link'
import hydrate from 'next-mdx-remote/hydrate'
import { GetStaticProps } from 'next'
import { getAllPostFileNames, getPostData } from '../../src/lib/posts'
import type { Post } from '../../src/types'

type Props = {
  posts: Post[]
}

function Posts({ posts }: Props) {
  const _posts = posts.map((post) => {
    const source = hydrate(post.source)
    return { source, frontMatter: post.frontMatter, slug: post.slug }
  })

  return (
    <div>
      <ul>
        {_posts.map((post) => {
          const { frontMatter } = post
          return (
            <li key={frontMatter.title}>
              <Link href={post.slug}>
                <a>
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
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const postFilenames = getAllPostFileNames()

  const posts = await Promise.all(
    postFilenames.map(async (filename) => await getPostData(filename))
  )

  return {
    props: {
      posts,
    },
  }
}

export default Posts
