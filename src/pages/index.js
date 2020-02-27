import React from 'react'
import { Link, graphql } from 'gatsby'

import SEO from '../components/SEO'
import Bio from '../components/Bio'
import Layout from '../components/Layout'
import { rhythm } from '../utils/typography'

function BlogIndex({ data, location }) {
  React.useLayoutEffect(() => {
    if (twttr && twttr.widgets) {
      twttr.widgets.load()
    }
  }, [])

  const getEmojisCount = React.useCallback(timeToRead => {
    switch (true) {
      case timeToRead >= 24:
        return 5
      case timeToRead >= 12:
        return 4
      case timeToRead >= 6:
        return 3
      case timeToRead >= 3:
        return 2
      default:
        return 1
    }
  }, [])

  const posts = data.allMdx.edges

  return (
    <Layout location={location} title="Sean Groff">
      <SEO />
      <Bio />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <div key={node.fields.slug}>
            <h3 style={{ marginBottom: rhythm(1 / 4) }}>
              <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <small style={{ paddingRight: '4px' }}>
              {node.frontmatter.date}
            </small>
            <span>
              {Array.from(
                Array(getEmojisCount(node.timeToRead)),
                (_, index) => (
                  <span key={index} role="img" aria-label="nerdy emoji">
                    🤓
                  </span>
                )
              )}
            </span>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
          timeToRead
        }
      }
    }
  }
`
