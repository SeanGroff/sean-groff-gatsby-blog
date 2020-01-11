import React from 'react'

import DarkModeProvider from './src/context/DarkModeProvider'

export const wrapRootElement = ({ element }) => (
  <DarkModeProvider>{element}</DarkModeProvider>
)
