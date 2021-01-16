import Image from 'next/image'
import Link from 'next/link'
import ReadingTime from '../../src/components/ReadingTime'
import Tags from '../../src/components/Tags'
import { GetStaticProps } from 'next'
import {
  getAllPostFileNames,
  getPostData,
  sortPostsByPublishDate,
} from '../../src/lib/posts'
import { hydrateAllPosts } from '../../src/lib/hydrate'
import { getLongDate } from '../../src/lib/dates'
import type { Post } from '../../src/types'

type Props = {
  posts: Post[]
}

function Posts({ posts }: Props) {
  const hydratedPosts = hydrateAllPosts(posts)

  return (
    <div>
      <ul className="flex flex-col items-center flex-grow-0 gap-4">
        {hydratedPosts.map((post) => {
          const { frontMatter, emojis, readingTime } = post
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
                      <h3 className="mt-1 text-xl font-semibold line-clamp-1">
                        {frontMatter.title}
                      </h3>
                    </a>
                  </Link>
                  <ReadingTime time={readingTime} emojis={emojis} />
                  <div className="mt-4 leading-tight text-gray-600 line-clamp-2">
                    {frontMatter.description}
                  </div>
                  <Tags>{frontMatter.tags}</Tags>
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
