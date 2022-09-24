import { motion } from 'framer-motion'
import React from 'react'

import { MotionImage } from '../../motion-image'

type Props = {}

const Projects = ({}: Props) => {
  const projects = [1, 2, 3, 4, 5]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-10 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <motion.div
            key={project}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <MotionImage
              imageProps={{
                src: 'https://mitenchauhan.com/_nuxt/img/c64fbc0.jpg',
                layout: 'fill',
                objectFit: 'contain',
                objectPosition: 'center',
              }}
              motionProps={{
                className: 'relative h-96 w-96 overflow-hidden',
                initial: {
                  y: -300,
                  opacity: 0,
                },
                transition: { duration: 1.2 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
              }}
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{' '}
                Physique
              </h4>

              <p className="text-center text-lg md:text-left">
                During the COVID-19 outbreak, Physique Studio was forced to
                close their private gym and rehab center as NZ entered lockdown.
                In order to continue providing their services to their clients,
                we created an app to post custom workouts that can be tailored
                to each clients needs. Available on Android, iOS and Web.
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  )
}

export default Projects
