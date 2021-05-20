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

const favoriteBlogPostSlugs = [
  'useeffect-state-trap',
  'es-2020',
  'useReducer',
  'react-refs',
  'component-did-catch',
]

function Home({ posts }: Props) {
  const hydratedPosts = hydrateAllPosts(posts)
  const favoriteBlogPosts = hydratedPosts.filter((post) =>
    favoriteBlogPostSlugs.includes(post.slug.split('/')[2])
  )

  return (
    <main className="grid w-full grid-cols-3 grid-rows-1 gap-16">
      <section className="col-span-2 row-span-full">
        <p className="pt-8 text-2xl">I'm Sean Groff 👋</p>
        <h1 className="pt-8 text-3xl capitalize">
          I'm a Software Engineering Manager focused on React Frontend
          development
        </h1>
        <p className="pt-8">More about what I do</p>
        <SectionTitle>Blog Posts</SectionTitle>
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
                      <div className="max-w-md p-6 md:max-w-none">
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
        <ul>
          {favoriteBlogPosts.map((blogPost) => (
            <li key={blogPost.slug} className="pb-4 leading-snug">
              {blogPost.frontMatter.title}
            </li>
          ))}
        </ul>
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
