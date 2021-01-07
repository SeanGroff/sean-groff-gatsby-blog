import GitHub from './GitHub'
import Twitter from './Twitter'

function Footer() {
  return (
    <footer>
      <span>{`© Sean Groff ${new Date().getFullYear()}`}</span>
      <span>
        <GitHub />
        <Twitter />
      </span>
    </footer>
  )
}

export default Footer
