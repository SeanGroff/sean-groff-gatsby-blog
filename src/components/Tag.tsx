type Props = {
  children: string
}

function Tag({ children }: Props) {
  return (
    <span className="px-4 py-1 mr-2 text-xs font-semibold leading-loose tracking-wider text-gray-800 uppercase bg-gray-100 rounded-full">
      {children}{' '}
    </span>
  )
}

export default Tag
