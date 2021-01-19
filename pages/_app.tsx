import { DefaultSeo } from 'next-seo'
import { MDXProvider } from '@mdx-js/react'
import type { AppProps } from 'next/app'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import MDXComponents from '../src/components/MDXComponents'
import 'prism-theme-night-owl'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={MDXComponents}>
      <DefaultSeo
        title="Sean Groff"
        description="Sean Groff - Web Developer creating awesome content for JavaScript and React"
      />
      <Header />
      <main className="p-4 antialiased text-gray-900 bg-gray-200">
        <Component {...pageProps} />
      </main>
      <Footer />
    </MDXProvider>
  )
}

export default MyApp
