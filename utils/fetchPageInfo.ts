import { PUBLIC_URL } from '../lib/env'
import { PageInfo } from '../types/sanity'

export const fetchPageInfo = async () => {
  const res = await fetch(`${PUBLIC_URL}/api/getPageInfo`)

  const data = await res.json()
  const pageInfo: PageInfo = data.pageInfo

  return pageInfo
}
