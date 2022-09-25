import { groq } from 'next-sanity'

import { sanityClient } from '../../sanity'
import { Project } from '../../types/sanity'

const query = groq`
  *[_type == "project"] {
    ...,
    technologies[]->
  }
`

export function getProjects() {
  return sanityClient.fetch<Project[]>(query)
}
