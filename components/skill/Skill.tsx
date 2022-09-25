import React from 'react'

import { urlFor } from '../../sanity'
import { Skill } from '../../types/sanity'
import { MotionImage } from '../motion-image'

type Props = {
  directionLeft?: boolean
  skill: Skill
}

const Skill = ({ directionLeft = false, skill }: Props) => {
  let image = urlFor(skill.image)!.url()

  return (
    <MotionImage
      imageProps={{
        src: image,
        objectFit: 'contain',
        layout: 'fill',
        objectPosition: 'center',
      }}
      motionProps={{
        className:
          'relative overflow-hidden h-24 w-24 rounded-md xl:w-32 xl:h-32',
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
