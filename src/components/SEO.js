import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const SEO = memo(({ description, title }) => {
  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      meta={[{ name: 'description', content: description }]}
      title={title}
      link={[{ rel: 'shortcut icon', type: 'image/png', href: 'favicon.ico' }]}
    />
  )
})

SEO.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default SEO
