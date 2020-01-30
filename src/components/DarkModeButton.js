import React from 'react'
import Toggle from 'react-toggle'

import IconGhost from './IconGhost'
import IconCool from './IconCool'
import '../styles/toggle.css'

function DarkModeButton({ value, onChange }) {
  return (
    <span>
      <Toggle
        checked={value}
        aria-label="Dark Mode Toggle"
        icons={{ checked: <IconCool />, unchecked: <IconGhost /> }}
        onChange={onChange}
      />
    </span>
  )
}

export default DarkModeButton
