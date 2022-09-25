import { motion } from 'framer-motion'
import React from 'react'

import { urlFor } from '../../../sanity'
import { Project } from '../../../types/sanity'
import { MotionImage } from '../../motion-image'

type Props = {
  projects: Project[]
}

const Projects = ({ projects }: Props) => {
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
        {projects.map((project) => (
          <motion.div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <MotionImage
              imageProps={{
                src: urlFor(project.image)!.url(),
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
                  {project.title}
                </span>
              </h4>

              <p className="text-center text-lg md:text-left">
                {project.summary}
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
