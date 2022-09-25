import { groq } from 'next-sanity'

import { sanityClient } from '../../sanity'
import { Social } from '../../types/sanity'

const query = groq`
  *[_type == "social"]
`

export function getSocials() {
  return sanityClient.fetch<Social[]>(query)
}
