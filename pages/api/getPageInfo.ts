import { groq } from 'next-sanity'

import { sanityClient } from '../../sanity'
import { PageInfo } from '../../types/sanity'

const query = groq`
  *[_type == "pageInfo"][0]
`

export function getPageInfo() {
  return sanityClient.fetch<PageInfo>(query)
}
