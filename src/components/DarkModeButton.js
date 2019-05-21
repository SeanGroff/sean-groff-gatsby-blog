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
  return (
    <span>
      <Toggle
        aria-label="Dark Mode Toggle"
        defaultChecked={isDarkMode}
        icons={{ checked: <IconCool />, unchecked: <IconGhost /> }}
        onChange={setDarkMode}
      />
    </span>
  )
}

export default DarkModeButton
