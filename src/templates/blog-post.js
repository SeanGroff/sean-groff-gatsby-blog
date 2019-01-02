import React, { PureComponent } from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import TwitterShare from '../components/TwitterShare'
import { rhythm, scale } from '../utils/typography'
import theme from '../utils/theme'
import '../styles/theme.css'

class BlogPostTemplate extends PureComponent {
  componentDidMount() {
    if (twttr && twttr.widgets) {
      twttr.widgets.load()
    }
  }

  render() {
    const { data, location, pageContext } = this.props
    const post = data.markdownRemark
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = post.excerpt
    const { previous, next } = pageContext

    return (
      <Layout location={location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <h1>{post.frontmatter.title}</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ ...scale(-1 / 5), margin: 0 }}>{post.frontmatter.date}</p>
          <TwitterShare />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
                style={{ boxShadow: 'none', color: `${theme.colors.primary}` }}
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
                style={{ boxShadow: 'none', color: `${theme.colors.primary}` }}
              >
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
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
