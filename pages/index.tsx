import Link from 'next/link'

function Home() {
  return (
    <main className="grid w-full max-w-screen-lg mx-auto">
      <section id="garden">
        <h1>Main Content Area</h1>
        <Link href="/posts">
          <a>Browse All Articles</a>
        </Link>
        <section id="wilderness">Right Sidebar</section>
      </section>
    </main>
  )
}

export default Home
