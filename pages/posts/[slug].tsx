import hydrate from 'next-mdx-remote/hydrate'
import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
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
      <NextSeo
        title={titleAndAuthor}
        description={description}
        openGraph={{
          title: titleAndAuthor,
          description,
          type: 'website',
          images: [
            {
              url: cloudinaryImageUrl,
              width: 800,
              height: 600,
              alt: 'Blog post featured image',
            },
          ],
        }}
        twitter={{
          handle: twitterUsername,
          site: twitterUsername,
          cardType: 'summary_large_image',
        }}
      />
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
