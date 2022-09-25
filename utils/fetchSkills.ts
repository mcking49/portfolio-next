import { PUBLIC_URL } from '../lib/env'
import { Skill } from '../types/sanity'

export const fetchSkills = async () => {
  const res = await fetch(`${PUBLIC_URL}/api/getSkills`)

  const data = await res.json()
  const skills: Skill[] = data.skills

  return skills
}
