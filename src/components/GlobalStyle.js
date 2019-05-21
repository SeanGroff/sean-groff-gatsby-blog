import React from 'react'
import PropTypes from 'prop-types'
import { Global, css } from '@emotion/core'

import { DarkModeStateContext } from '../context/DarkModeContext'

function GlobalStyle(props) {
  const isDarkMode = React.useContext(DarkModeStateContext)
  const bgColor = isDarkMode ? 'black' : 'offWhite'
  const textColor = isDarkMode ? 'offWhite' : 'black'

  return (
    <Global
      styles={css`
        body {
          background: ${props.theme.colors[bgColor]};
          color: ${props.theme.colors[textColor]};
        }
        a {
          color: ${props.theme.colors.primary};
        }
      `}
    />
  )
}

GlobalStyle.propTypes = {
  theme: PropTypes.object.isRequired,
}

export default GlobalStyle
