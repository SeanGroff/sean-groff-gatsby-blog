import type { Emojis } from '../types'

type Props = {
  time: number
  emojis: Emojis
}

function ReadingTime({ time, emojis }: Props) {
  return (
    <div className="flex items-center mt-1 text-gray-600">
      <span className="pr-1 text-sm font-semibold text-gray-800">{time}</span>
      <span className="text-xs tracking-wider uppercase">minute read</span>
      <span className="px-1 text-gray-800">•</span>
      <span className="text-xl leading-none">{emojis}</span>
    </div>
  )
}

export default ReadingTime
