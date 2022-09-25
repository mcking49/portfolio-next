import { groq } from 'next-sanity'

import { sanityClient } from '../../sanity'
import { Skill } from '../../types/sanity'

const query = groq`
  *[_type == "skill"]
`

export function getSkills() {
  return sanityClient.fetch<Skill[]>(query)
}
