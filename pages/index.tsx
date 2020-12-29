import Head from 'next/head'
import { Box, Text } from '@chakra-ui/react'
import Blog from '../components/Blog'

function Home() {
  return (
    <Box>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as="main">
        <Text as="h1">Hello, World!</Text>
        <Blog />
      </Box>

      <Box as="footer">
        <Text>Placeholder footer</Text>
      </Box>
    </Box>
  )
}

export default Home
