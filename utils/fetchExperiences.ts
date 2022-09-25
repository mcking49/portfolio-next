import { PUBLIC_URL } from '../lib/env'
import { Experience } from '../types/sanity'

export const fetchExperiences = async () => {
  const res = await fetch(`${PUBLIC_URL}/api/getExperience`)

  const data = await res.json()
  const experiences: Experience[] = data.experiences

  return experiences
}
