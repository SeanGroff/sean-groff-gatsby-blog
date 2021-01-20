import GitHub from './GitHub'
import Twitter from './Twitter'

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-around p-8">
      <span>{`© Sean Groff ${new Date().getFullYear()}`}</span>
      <span className="flex flex-row items-center justify-around w-20 mt-5">
        <GitHub />
        <Twitter />
      </span>
    </footer>
  )
}

export default Footer
