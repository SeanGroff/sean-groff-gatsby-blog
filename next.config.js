const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = {
  ...withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  }),
  images: {
    domain: 'cloudinary.com',
  },
}
