import React from 'react'
import PropTypes from 'prop-types'
import { Global, css } from '@emotion/core'

function GlobalStyle(props) {
  return (
    <Global
      styles={css`
        .dark-mode {
          background-color: #131217;
          color: #f8f7f4;
          transition: all 0.3s ease-in;
        }
        .light-mode {
          background-color: #f8f7f4;
          color: #131217;
          transition: all 0.3s ease-in;
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
