import Image from 'next/image'
import Link from 'next/link'
import hydrate from 'next-mdx-remote/hydrate'
import { GetStaticProps } from 'next'
import {
  getAllPostFileNames,
  getPostData,
  sortPostsByPublishDate,
} from '../../src/lib/posts'
import { getLongDate } from '../../src/lib/dates'
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
      <ul className="flex flex-col items-center flex-grow-0 gap-4">
        {_posts.map((post) => {
          const { frontMatter } = post
          const formattedDate = getLongDate(frontMatter.date)
          return (
            <li key={frontMatter.title}>
              <div className="max-w-screen-sm overflow-hidden bg-white border rounded-lg">
                {frontMatter?.featuredImage && (
                  <Image
                    src={`/${frontMatter.featuredImage}`}
                    alt={`Featured image for the ${frontMatter.title} article`}
                    height={384}
                    width={640}
                  />
                )}
                <div className="max-w-lg p-6 md:max-w-none">
                  <div className="text-sm text-gray-600">{formattedDate}</div>
                  <Link href={post.slug}>
                    <a>
                      <h3 className="mt-2 text-xl font-semibold truncate">
                        {frontMatter.title}
                      </h3>
                    </a>
                  </Link>
                  <div className="mt-6 leading-tight text-gray-600">
                    {frontMatter.description}
                  </div>
                  <div className="mt-6 text-gray-500">
                    {frontMatter.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-4 py-1 mr-2 text-xs font-semibold leading-loose tracking-wider text-gray-900 uppercase bg-gray-100 rounded-full"
                      >
                        {tag}{' '}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
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
  const sortedPosts = sortPostsByPublishDate(posts)

  return {
    props: {
      posts: sortedPosts,
    },
  }
}

export default Posts
