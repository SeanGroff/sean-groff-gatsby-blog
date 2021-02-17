type Props = {
  children: string
}

function SectionTitle({ children }: Props) {
  return (
    <h2 className="mb-8 font-medium tracking-wider uppercase text-large">
      {children}
    </h2>
  )
}

export default SectionTitle
