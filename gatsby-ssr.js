import React from 'react'
import { ThemeProvider } from 'emotion-theming'

import DarkModeProvider from './src/context/DarkModeProvider'
import theme from './src/utils/theme'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <DarkModeProvider>{element}</DarkModeProvider>
  </ThemeProvider>
)
