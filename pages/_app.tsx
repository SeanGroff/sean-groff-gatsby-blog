import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="Sean Grof"
        description="Sean Groff - Web Developer creating awesome content for JavaScript and React"
      />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
