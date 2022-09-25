import { groq } from 'next-sanity'

import { sanityClient } from '../../sanity'
import { Experience } from '../../types/sanity'

const query = groq`
  *[_type == "experience"] {
    ...,
    technologies[]->
  }
`

export function getExperiences() {
  return sanityClient.fetch<Experience[]>(query)
}
