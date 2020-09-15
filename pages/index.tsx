import Head from 'next/head'
import { Box, Text } from '@chakra-ui/core'

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as="main">
        <Text as="h1">Hello, World!</Text>
      </Box>

      <Box as="footer">
        <Text>Placeholder footer</Text>
      </Box>
    </Box>
  )
}
