import { PUBLIC_URL } from '../lib/env'
import { Project } from '../types/sanity'

export const fetchProjects = async () => {
  const res = await fetch(`${PUBLIC_URL}/api/getProjects`)

  const data = await res.json()
  const projects: Project[] = data.projects

  return projects
}
