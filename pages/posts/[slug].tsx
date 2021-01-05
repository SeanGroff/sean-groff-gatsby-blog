import Head from 'next/head'
import hydrate from 'next-mdx-remote/hydrate'
import { GetStaticPaths, GetStaticProps } from 'next'
import { TwitterShareButton } from 'react-share'
import { getAllPostSlugs, getPostData } from '../../src/lib/posts'
import {
  baseUrl,
  cloudinaryUrl,
  myFullName,
  twitterUsername,
} from '../../src/constants'
import type { Post as PostType } from '../../src/types'

type Props = {
  post: PostType
}

function Post({ post }: Props) {
  const source = hydrate(post.source)
  const title = post.frontMatter.title
  const titleAndAuthor = `${title} by ${myFullName} ${twitterUsername}`
  const description = post.frontMatter.description
  const featuredImage = post.frontMatter?.featuredImage
  const cloudinaryImageUrl = `${cloudinaryUrl}/${featuredImage}`

  return (
    <div>
      <Head>
        <title>{titleAndAuthor}</title>
        <meta name="description" content={description} />
        <meta name="image" content={cloudinaryImageUrl} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={twitterUsername} />
        <meta name="twitter:title" content={titleAndAuthor} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={cloudinaryImageUrl} />
      </Head>
      {source}
      <div style={{ marginTop: 16 }}>
        {/* TODO: Test Share button in Production */}
        <TwitterShareButton
          title={titleAndAuthor}
          url={`${baseUrl}${post.slug}`}
        >
          Click here to share this article on Twitter ❤️
        </TwitterShareButton>
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostSlugs()
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const fileName = `${params?.slug}.mdx`
  const post = await getPostData(fileName)
  return { props: { post } }
}

export default Post
