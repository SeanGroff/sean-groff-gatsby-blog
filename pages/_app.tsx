import { theme, ThemeProvider, CSSReset } from '@chakra-ui/react'

// TODO: Customize Theme
const customTheme = {
  ...theme,
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
