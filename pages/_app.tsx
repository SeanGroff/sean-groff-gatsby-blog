import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="Sean Grof"
        description="Sean Groff - Web Developer creating awesome content for JavaScript and React"
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
