import React from 'react'
import Toggle from 'react-toggle'

import useDarkMode from 'use-dark-mode'
import IconGhost from './IconGhost'
import IconCool from './IconCool'
import '../styles/toggle.css'

const useInitializeDarkMode = (enableDarkMode, disableDarkMode) => {
  React.useLayoutEffect(() => {
    const initializeIsDarkMode = isDarkMode => {
      if (isDarkMode) {
        enableDarkMode()
      } else {
        disableDarkMode()
      }
    }

    const darkModeCache = localStorage.getItem('darkMode')
    const isDarkMode = darkModeCache ? JSON.parse(darkModeCache) : null

    initializeIsDarkMode(isDarkMode)
  }, [disableDarkMode, enableDarkMode])
}

function DarkModeButton() {
  const darkMode = useDarkMode()
  useInitializeDarkMode(darkMode.enable, darkMode.disable)

  return (
    <span>
      <Toggle
        defaultChecked={darkMode.value}
        aria-label="Dark Mode Toggle"
        icons={{ checked: <IconCool />, unchecked: <IconGhost /> }}
        onChange={darkMode.toggle}
      />
    </span>
  )
}

export default DarkModeButton
