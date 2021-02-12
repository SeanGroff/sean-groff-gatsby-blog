import NextLink from 'next/link'

type Props = {
  children: string
  href: string
}

function Link({ children, href }: Props) {
  return (
    <NextLink href={href}>
      <a className="font-semibold text-gray-900 hover:text-purple-600">
        {children}
      </a>
    </NextLink>
  )
}

export default Link
