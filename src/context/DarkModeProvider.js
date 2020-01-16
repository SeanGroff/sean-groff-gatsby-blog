import React from 'react'

import { DarkModeStateContext } from './DarkModeContext'

function DarkModeProvider({ children }) {
  return (
    <DarkModeStateContext.Provider value={true}>
      {children}
    </DarkModeStateContext.Provider>
  )
}

export default DarkModeProvider
