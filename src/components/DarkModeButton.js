import React from 'react'
import Toggle from 'react-toggle'

import IconGhost from './IconGhost'
import IconCool from './IconCool'
import {
  DarkModeStateContext,
  SetDarkModeContext,
} from '../context/DarkModeContext'
import '../styles/toggle.css'

function DarkModeButton() {
  const isDarkMode = React.useContext(DarkModeStateContext)
  const setDarkMode = React.useContext(SetDarkModeContext)
  const handleChange = event => {
    const value = event.target.checked
    setDarkMode(value)
    return value
  }

  return (
    <span>
      <Toggle
        aria-label="Dark Mode Toggle"
        defaultChecked={isDarkMode}
        icons={{ checked: <IconCool />, unchecked: <IconGhost /> }}
        onChange={handleChange}
      />
    </span>
  )
}

export default DarkModeButton
