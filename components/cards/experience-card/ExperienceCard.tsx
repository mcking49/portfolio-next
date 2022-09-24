import React from 'react'

import { MotionImage } from '../../motion-image'
import saferme from '../../../public/saferme.webp'
import reactIcon from '../../../public/react.png'

type Props = {}

const ExperienceCard = ({}: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <MotionImage
        imageProps={{
          src: saferme,
          layout: 'fill',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        motionProps={{
          className:
            'relative w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] overflow-hidden',
          initial: {
            y: -100,
            opacity: 0,
          },
          whileInView: {
            opacity: 1,
            y: 0,
          },
          viewport: { once: true },
        }}
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">
          Senior Developer &amp; Product Owner
        </h4>

        <p className="font-bold text-2xl mt-1">SaferMe</p>

        <div className="flex space-x-2 my-2">
          <MotionImage
            imageProps={{
              src: reactIcon,
              objectFit: 'contain',
              layout: 'fill',
              objectPosition: 'center',
            }}
            motionProps={{
              className: 'relative overflow-hidden h-10 w-10 rounded-full',
            }}
          />
          <MotionImage
            imageProps={{
              src: reactIcon,
              objectFit: 'contain',
              layout: 'fill',
              objectPosition: 'center',
            }}
            motionProps={{
              className: 'relative overflow-hidden h-10 w-10 rounded-full',
            }}
          />
          <MotionImage
            imageProps={{
              src: reactIcon,
              objectFit: 'contain',
              layout: 'fill',
              objectPosition: 'center',
            }}
            motionProps={{
              className: 'relative overflow-hidden h-10 w-10 rounded-full',
            }}
          />
        </div>

        <p className="uppercase my-5 text-gray-300">
          started work ... - ended ...
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>asdf</li>
          <li>asdf</li>
          <li>asdf</li>
          <li>adf</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
