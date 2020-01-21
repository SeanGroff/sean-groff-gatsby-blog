import React from 'react'
import Switch from 'react-switch'

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
    <label>
      <Switch
        checked={darkMode.value}
        checkedIcon={<IconCool />}
        uncheckedIcon={<IconGhost />}
        onChange={darkMode.toggle}
      />
    </label>
  )
}

export default DarkModeButton
