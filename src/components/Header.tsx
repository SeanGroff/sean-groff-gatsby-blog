import Link from 'next/link'
// TODO: Logo
// TODO: Algolia Search
// TODO: Dark Mode Toggle

function Header() {
  return (
    <header className="py-12">
      <Link href="/">
        <a className="text-2xl font-semibold tracking-wider">
          <i className="pr-3">🇺🇸</i>
          Sean Groff
        </a>
      </Link>
    </header>
  )
}

export default Header
