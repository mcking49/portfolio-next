import { Cursor, useTypewriter } from 'react-simple-typewriter'

import { BackgroundCircles } from '../../background-circles'
import { NavLink } from '../../buttons'
import { MotionImage } from '../../motion-image'

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Hi, i'm Miten!", '<FullStackDeveloper andProductOwner />'],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      <MotionImage
        imageProps={{
          src: 'https://mitenchauhan.com/_nuxt/img/122f864.png',
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

      <div className="px-10 z-10">
        <h2 className="text-sm uppercase text-gray-500 tracking-[16px]">
          Software Engineer
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
      </div>
    </div>
  )
}

export default Hero
