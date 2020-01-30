import React from 'react'
import { Link } from 'gatsby'
import useDarkMode from 'use-dark-mode'

import GlobalStyle from './GlobalStyle'
import DarkModeButton from './DarkModeButton'
import Footer from './Footer'
import { rhythm, scale } from '../utils/typography'
import theme from '../utils/theme'

const useToggle = darkModeToggle => {
  const [isToggleChecked, setIsToggleChecked] = React.useState(null)

  const _initializeToggle = React.useCallback(isDarkMode => {
    setIsToggleChecked(isDarkMode)
  }, [])

  React.useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      const isDarkMode = JSON.parse(localStorage.getItem('darkMode'))
      _initializeToggle(isDarkMode)
    }
  }, [_initializeToggle])

  const handleToggle = React.useCallback(() => {
    setIsToggleChecked(!isToggleChecked)
    darkModeToggle()
  }, [darkModeToggle, isToggleChecked])

  return [isToggleChecked, handleToggle]
}

function Layout({ children, location, title }) {
  const darkMode = useDarkMode()
  const [isToggleChecked, setIsToggleChecked] = useToggle(darkMode.toggle)

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
          <DarkModeButton
            value={isToggleChecked}
            onChange={setIsToggleChecked}
          />
        </div>
        {children}
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Layout
