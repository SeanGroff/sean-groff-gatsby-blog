const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = {
  ...withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  }),
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/seangroff/image/upload',
  },
}
