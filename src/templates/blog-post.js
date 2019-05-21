import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import TwitterShare from '../components/TwitterShare'
import { rhythm, scale } from '../utils/typography'
import theme from '../utils/theme'
import { DarkModeStateContext } from '../context/DarkModeContext'
import '../styles/theme.css'

function BlogPostTemplate({ data, location, pageContext }) {
  React.useLayoutEffect(() => {
    if (twttr && twttr.widgets) {
      twttr.widgets.load()
    }
  })
  const isDarkMode = React.useContext(DarkModeStateContext)
  const post = data.markdownRemark
  const siteDescription = post.excerpt
  const { previous, next } = pageContext

  return (
    <Layout location={location} title="Sean Groff">
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={`${post.frontmatter.title} by Sean Groff @_SeanGroff`}
      />
      <h1>{post.frontmatter.title}</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ ...scale(-1 / 5), margin: 0 }}>{post.frontmatter.date}</p>
        <TwitterShare />
      </div>
      <div
        style={{
          color: `${theme.colors[isDarkMode ? 'offWhite' : 'black']}`,
          backgroundColor: `${theme.colors[isDarkMode ? 'black' : 'offWhite']}`,
          padding: '0 32px',
        }}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
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
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
