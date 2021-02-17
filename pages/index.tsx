import Image from 'next/image'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import SectionTitle from '../src/components/SectionTitle'
import ReadingTime from '../src/components/ReadingTime'
import Tags from '../src/components/Tags'
import {
  getAllPostFileNames,
  getPostData,
  sortPostsByPublishDate,
} from '../src/lib/posts'
import { getLongDate } from '../src/lib/dates'
import { hydrateAllPosts } from '../src/lib/hydrate'
import type { Post } from '../src/types'

type Props = {
  posts: Post[]
}

function Home({ posts }: Props) {
  const hydratedPosts = hydrateAllPosts(posts)

  return (
    <main className="grid w-full max-w-screen-lg grid-cols-3 grid-rows-1 mx-auto">
      <section className="col-span-2 row-span-full">
        <p className="text-2xl">👋 I'm Sean Groff</p>
        <h1 className="text-3xl">
          ⚛ I'm a Software Engineering Manager focused on Frontend development
          with React
        </h1>
        <p>👨‍💻 More about what I do</p>
        <SectionTitle>Recent Blog Posts</SectionTitle>
        <ul className="flex flex-col items-center flex-grow-0 gap-10">
          {hydratedPosts.map((post) => {
            const { frontMatter, emojis, readingTime } = post
            const formattedDate = getLongDate(frontMatter.date)
            return (
              <li key={frontMatter.title}>
                <Link href={post.slug}>
                  <a>
                    <div className="overflow-hidden bg-white rounded-lg shadow-md group">
                      {frontMatter?.featuredImage && (
                        <Image
                          src={`/${frontMatter.featuredImage}`}
                          alt={`Featured image for the ${frontMatter.title} article`}
                          height={400}
                          width={682}
                        />
                      )}
                      <div className="max-w-lg p-6 md:max-w-none">
                        <div className="text-sm text-gray-600">
                          {formattedDate}
                        </div>
                        <h3 className="mt-1 text-xl font-semibold line-clamp-1 group-hover:text-purple-600">
                          {frontMatter.title}
                        </h3>
                        <ReadingTime time={readingTime} emojis={emojis} />
                        <div className="mt-4 leading-tight text-gray-600 line-clamp-2">
                          {frontMatter.description}
                        </div>
                        <Tags>{frontMatter.tags}</Tags>
                      </div>
                    </div>
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>
      <section className="col-span-1 row-span-full">
        <SectionTitle>Favorite Blog Posts</SectionTitle>
      </section>
    </main>
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

export default Home
