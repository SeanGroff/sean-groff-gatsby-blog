import { GetStaticPaths, GetStaticProps } from 'next'
import hydrate from 'next-mdx-remote/hydrate'
import { getAllPostSlugs, getPostData } from '../../src/lib/posts'
import type { Post as PostType } from '../../src/types'

type Props = {
  post: PostType
}

function Post({ post }: Props) {
  const source = hydrate(post.source)
  return <div>{source}</div>
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
