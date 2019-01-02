import React from 'react'

import TwitterFollow from './TwitterFollow'
import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'
import 'typeface-montserrat'
import 'typeface-merriweather'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Sean Groff`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column'}}>
        <p style={{marginBottom: rhythm(0.25)}}>
          Written by <strong>Sean Groff</strong> who lives and works in Kansas
          City as a Software Engineer.{' '}
        </p>
        <TwitterFollow />
        </div>
      </div>
    )
  }
}

export default Bio
