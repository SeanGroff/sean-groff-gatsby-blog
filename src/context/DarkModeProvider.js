import React from 'react'

import { useLocalStorage } from '../hooks'
import { DarkModeStateContext, SetDarkModeContext } from './DarkModeContext'

function DarkModeProvider({ children }) {
  const [isDarkMode, setDarkMode] = useLocalStorage('isDarkMode', false)
  return (
    <DarkModeStateContext.Provider value={isDarkMode}>
      <SetDarkModeContext.Provider value={setDarkMode}>
        {children}
      </SetDarkModeContext.Provider>
    </DarkModeStateContext.Provider>
  )
}

export default DarkModeProvider
