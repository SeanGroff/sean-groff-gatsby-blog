import React from 'react'
import { Link } from 'gatsby'

import GlobalStyle from './GlobalStyle'
import Footer from './Footer'
import { rhythm, scale } from '../utils/typography'
import theme from '../utils/theme'

function Layout({ children, location, title }) {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: `${theme.colors.primary}`,
          }}
          to={'/'}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: 'Montserrat, sans-serif',
          marginTop: 0,
          marginBottom: rhythm(-1),
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: `${theme.colors.primary}`,
          }}
          to={'/'}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <React.Fragment>
      <GlobalStyle theme={theme} />
      <div
        css={{
          backgroundColor: `${theme.colors.black}`,
          color: `${theme.colors.offWhite}`,
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: ` ${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
          }}
        >
          {header}
        </div>
        {children}
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Layout
