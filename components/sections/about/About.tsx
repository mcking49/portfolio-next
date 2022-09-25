import { motion } from 'framer-motion'
import React from 'react'

import { urlFor } from '../../../sanity'
import { PageInfo } from '../../../types/sanity'
import { MotionImage } from '../../motion-image'

type Props = {
  pageInfo: PageInfo
}

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left pt-[90px] md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <MotionImage
        imageProps={{
          src: urlFor(pageInfo.profilePic).url(),
          layout: 'fill',
          priority: true,
          objectFit: 'cover',
          objectPosition: 'top',
        }}
        motionProps={{
          className:
            'relative -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] overflow-hidden',
          initial: {
            x: -200,
            opacity: 0,
          },
          whileInView: {
            x: 0,
            opacity: 1,
          },
          transition: {
            duration: 0.8,
          },
        }}
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{' '}
          <span className="underline decoration-[#F7Ab0A]/50">little</span>{' '}
          background
        </h4>
        <p className="text-base">
          Hi, I&apos;m Miten! I am currently a web developer who loves to make
          awesome web apps using popular frontend frameworks like Angular, Vue
          and React. I believe that one day, the Web will make the App Store
          obsolete! If you disagree, add me on LinkedIn and let&apos;s have a
          heated debate (just kidding). In my spare time I like to do a lot of
          things like making short highlight videos of my trips and significant
          events in my life, or building computers, watching too many movies and
          TV shows, going out adventuring, and supporting the Lakers. If you
          would like to get to know me more, or just want to have a chat, feel
          free to connect with me. I would love to hear from you. In the
          meantime, below you will find some of the project&apos;s I&apos;ve
          worked on over the years.
        </p>
      </div>
    </motion.div>
  )
}

export default About
