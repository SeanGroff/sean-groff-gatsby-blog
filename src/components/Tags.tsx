import Tag from './Tag'

type Props = {
  children: string[]
}

function Tags({ children }: Props) {
  return (
    <div className="mt-6 line-clamp-1">
      {children.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </div>
  )
}

export default Tags
