import React from 'react'
import { Link, graphql } from 'gatsby'
import { ThemeProvider } from 'emotion-theming'

import SEO from '../components/SEO'
import Bio from '../components/Bio'
import Layout from '../components/Layout'
import { rhythm } from '../utils/typography'
import theme from '../utils/theme'

function BlogIndex({ data, location }) {
  React.useLayoutEffect(() => {
    if (twttr && twttr.widgets) {
      twttr.widgets.load()
    }
  }, [])

  const getEmojisCount = React.useCallback(timeToRead => {
    switch (true) {
      case timeToRead >= 20:
        return 5
      case timeToRead >= 15:
        return 4
      case timeToRead >= 10:
        return 3
      case timeToRead >= 5:
        return 2
      default:
        return 1
    }
  }, [])

  const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description
  const posts = data.allMarkdownRemark.edges
  return (
    <ThemeProvider theme={theme}>
      <Layout location={location} title="Sean Groff">
        <SEO description={siteDescription} title={siteTitle} />
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
    </ThemeProvider>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
