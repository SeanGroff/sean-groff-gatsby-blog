import Head from 'next/head'
import Link from 'next/link'

function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello, World!</h1>
        <Link href="/posts">
          <a>Browse All Articles</a>
        </Link>
      </main>

      <footer>
        <p>Placeholder footer</p>
      </footer>
    </div>
  )
}

export default Home
