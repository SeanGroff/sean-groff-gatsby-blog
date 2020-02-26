import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import TwitterShare from '../components/TwitterShare'
import { rhythm, scale } from '../utils/typography'
import theme from '../utils/theme'
import '../styles/theme.css'

function BlogPostTemplate({ data, location, pageContext }) {
  React.useLayoutEffect(() => {
    if (twttr && twttr.widgets) {
      twttr.widgets.load()
    }
  })

  const post = data.mdx
  const featuredImage = post.frontmatter.featuredImage
  const featuredImgFluid =
    featuredImage &&
    featuredImage.childImageSharp &&
    featuredImage.childImageSharp.fluid
  const featuredImgFluidSrc =
    featuredImage &&
    featuredImage.childImageSharp &&
    featuredImage.childImageSharp.fluid &&
    featuredImage.childImageSharp.fluid.src
  const siteDescription = post.excerpt
  const seo = data.site.siteMetadata
  const { previous, next } = pageContext

  return (
    <Layout location={location} title="Sean Groff">
      <Helmet htmlAttributes={{ lang: 'en' }}>
        {/* General tags */}
        <title>{`${post.frontmatter.title} by Sean Groff @_SeanGroff`}</title>
        <meta name="description" content={siteDescription} />
        <meta name="image" content={seo.image} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={seo.userTwitter} />
        <meta
          name="twitter:title"
          content={`${post.frontmatter.title} by Sean Groff @_SeanGroff`}
        />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={featuredImgFluidSrc} />
      </Helmet>
      <h1>{post.frontmatter.title}</h1>
      {featuredImgFluid && <Img fluid={featuredImgFluid} />}
      <div
        css={{
          display: 'flex',
          justifyContent: `${featuredImgFluid ? 'flex-end' : null}`,
          paddingTop: `${featuredImgFluid ? '8px' : null}`,
          alignItems: 'center',
        }}
      >
        <p style={{ ...scale(-1 / 5), margin: 0 }}>{post.frontmatter.date}</p>
        <TwitterShare />
      </div>
      <MDXRenderer
        style={{
          color: `${theme.colors.offWhite}`,
          backgroundColor: `${theme.colors.black}`,
          padding: '0 32px',
        }}
      >
        {post.body}
      </MDXRenderer>
      <hr style={{ marginBottom: rhythm(1) }} />
      <Bio />

      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          listStyle: 'none',
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Link
              to={previous.fields.slug}
              rel="prev"
              style={{
                boxShadow: 'none',
                color: `${theme.colors.primary}`,
              }}
            >
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link
              to={next.fields.slug}
              rel="next"
              style={{
                boxShadow: 'none',
                color: `${theme.colors.primary}`,
              }}
            >
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        description
        canonicalUrl
        image
        author {
          name
        }
        organization {
          name
          url
          logo
        }
        social {
          twitter
          fbAppID
        }
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
