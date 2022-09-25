import React from 'react'

import { MotionImage } from '../../motion-image'
import { Experience } from '../../../types/sanity'
import { urlFor } from '../../../sanity'
import { monthYear } from '../../../utils/date/formats'

type Props = {
  experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
  const imageSrc = urlFor(experience.companyImage)?.url()
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      {imageSrc && (
        <MotionImage
          imageProps={{
            src: imageSrc,
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
      )}

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>

        <p className="font-bold text-2xl mt-1">{experience.company}</p>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map(
            (technology) =>
              technology.image && (
                <MotionImage
                  key={technology._id}
                  imageProps={{
                    src: urlFor(technology.image)!.url(),
                    objectFit: 'contain',
                    layout: 'fill',
                    objectPosition: 'center',
                  }}
                  motionProps={{
                    className: 'relative overflow-hidden h-10 w-10 rounded-md',
                  }}
                />
              )
          )}
        </div>

        <p className="uppercase my-5 text-gray-300">
          {monthYear(new Date(experience.dateStarted!))} -{' '}
          {experience.isCurrentlyWorkingHere
            ? 'Present'
            : new Date(experience.dateEnded!).toDateString()}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          {experience.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
