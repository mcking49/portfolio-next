import { motion } from 'framer-motion'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

import { urlFor } from '../../../sanity'
import { PageInfo } from '../../../types/sanity'
import { BackgroundCircles } from '../../background-circles'
import { NavLink } from '../../buttons'
import { MotionImage } from '../../motion-image'

type Props = {
  pageInfo: PageInfo
}

const Hero = ({ pageInfo }: Props) => {
  const [text] = useTypewriter({
    words: [
      `Hi, i'm ${pageInfo?.name}!`,
      ...(pageInfo?.headingHighlights || []),
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden pt-[90px]">
      <BackgroundCircles />

      <MotionImage
        imageProps={{
          src: urlFor(pageInfo?.heroImage)!.url(),
          alt: 'Profile picture',
          layout: 'fill',
          objectFit: 'cover',
          priority: true,
        }}
        motionProps={{
          className: 'relative rounded-full h-32 w-32 mx-auto z-10',
          initial: {
            opacity: 0,
            scale: 0.5,
          },
          animate: {
            opacity: 1,
            scale: 1,
          },
          transition: {
            duration: 3.5,
          },
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 3, type: 'spring' }}
        className="px-10 z-10"
      >
        <h2 className="text-sm uppercase text-gray-500 tracking-[16px]">
          {pageInfo.role}
        </h2>
        <h1 className="font-mono mt-2 text-5xl lg:text-6xl font-semibold">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" cursorStyle="_" />
        </h1>

        <div className="mt-5">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero
