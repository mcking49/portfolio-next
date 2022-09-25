import { PUBLIC_URL } from '../lib/env'
import { Social } from '../types/sanity'

export const fetchSocials = async () => {
  const res = await fetch(`${PUBLIC_URL}/api/getSocials`)

  const data = await res.json()
  const socials: Social[] = data.socials

  return socials
}
