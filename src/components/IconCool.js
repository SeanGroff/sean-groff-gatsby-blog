import React, { memo } from 'react'

import cool from '../assets/cool_emoji.png'

const IconCool = memo(() => {
  return <img alt="Sunglasses emoji" src={cool} width={16} height={16} />
})

export default IconCool
