import React from 'react'

import DarkModeProvider from './src/hooks/DarkModeProvider'

export const wrapRootElement = ({ element }) => (
  <DarkModeProvider>{element}</DarkModeProvider>
)
