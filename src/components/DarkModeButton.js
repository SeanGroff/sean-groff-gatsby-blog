import React from 'react'
import Toggle from 'react-toggle'

import IconGhost from './IconGhost'
import IconCool from './IconCool'
import '../styles/toggle.css'

function DarkModeButton({ isDarkMode, setDarkMode }) {
  const handleChange = event => {
    console.log('handleChange')
    const value = event.target.checked
    console.log('value ', value)
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
