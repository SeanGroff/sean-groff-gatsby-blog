import React, { memo } from 'react'

import ShareButton from '../styles/ShareButton'

const TwitterShare = memo(() => (
  <ShareButton>
    <a
      className="twitter-share-button"
      data-size="small"
      href="https://twitter.com/intent/tweet"
    >
      Tweet
    </a>
  </ShareButton>
))

export default TwitterShare
