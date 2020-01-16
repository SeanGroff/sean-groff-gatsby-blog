import React from 'react'
import Toggle from 'react-toggle'

import IconGhost from './IconGhost'
import IconCool from './IconCool'
import '../styles/toggle.css'

function DarkModeButton({ isDarkMode, setDarkMode }) {
  const handleChange = event => {
    const value = event.target.checked
    setDarkMode(value)
  }

  return (
    <span>
      <Toggle
        aria-label="Dark Mode Toggle"
        checked={isDarkMode}
        icons={{ checked: <IconCool />, unchecked: <IconGhost /> }}
        onChange={handleChange}
      />
    </span>
  )
}

export default DarkModeButton
