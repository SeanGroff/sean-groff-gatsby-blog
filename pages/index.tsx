import Head from 'next/head'
import Blog from '../components/Blog'

function Home() {
  return (
    <div>
      <Head>
        <title>Sean Groff</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello, World!</h1>
        <Blog />
      </main>

      <footer>
        <p>Placeholder footer</p>
      </footer>
    </div>
  )
}

export default Home
