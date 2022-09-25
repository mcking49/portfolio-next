import React from 'react'

import { MotionImage } from '../motion-image'

type Props = {
  directionLeft?: boolean
}

const Skill = ({ directionLeft = false }: Props) => {
  return (
    <MotionImage
      imageProps={{
        src: '',
        objectFit: 'contain',
        layout: 'fill',
        objectPosition: 'center',
      }}
      motionProps={{
        className:
          'relative overflow-hidden h-24 w-24 rounded-full border border-gray-500 xl:w-32 xl:h-32',
        initial: {
          x: directionLeft ? -200 : 200,
          opacity: 0,
        },
        transition: { duration: 1 },
        whileInView: { opacity: 1, x: 0 },
      }}
    />
  )
}

export default Skill
