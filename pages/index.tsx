import Link from '../src/components/Link'
import SectionTitle from '../src/components/SectionTitle'

function Home() {
  return (
    <main className="grid w-full max-w-screen-lg grid-cols-3 grid-rows-1 mx-auto">
      <section className="col-span-2 row-span-full">
        <p className="text-2xl">👋 I'm Sean Groff</p>
        <h1 className="text-3xl">
          ⚛ I'm a Software Engineering Manager focused on Frontend development
          with React
        </h1>
        <p>👨‍💻 More about what I do</p>
        <SectionTitle>Recent Blog Posts</SectionTitle>
        <Link href="/posts">Browse All Blog Posts</Link>
      </section>
      <section className="col-span-1 row-span-full">
        <SectionTitle>Favorite Blog Posts</SectionTitle>
      </section>
    </main>
  )
}

export default Home
