import React from 'react'
import Toggle from 'react-toggle'

import useDarkMode from 'use-dark-mode'
import IconGhost from './IconGhost'
import IconCool from './IconCool'
import '../styles/toggle.css'

function DarkModeButton() {
  const darkMode = useDarkMode()

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
