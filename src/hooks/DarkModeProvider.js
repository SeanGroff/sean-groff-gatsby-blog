import React from 'react'

import {
  DarkModeStateContext,
  SetDarkModeContext,
} from '../context/DarkModeContext'

const toggleDarkModeReducer = (prevState, _) => !prevState

function DarkModeProvider({ children }) {
  const [isDarkMode, setDarkMode] = React.useReducer(
    toggleDarkModeReducer,
    false
  )
  return (
    <DarkModeStateContext.Provider value={isDarkMode}>
      <SetDarkModeContext.Provider value={setDarkMode}>
        {children}
      </SetDarkModeContext.Provider>
    </DarkModeStateContext.Provider>
  )
}

export default DarkModeProvider
