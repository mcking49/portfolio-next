import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check for secret to ensure this is a valid request
  if (req.query.secret !== process.env.ISR_TOKEN) {
    return res.status(401).json({ message: 'Invalid Token ' })
  }

  try {
    await res.revalidate('/')
    return res.json({ revalidated: true })
  } catch (error) {
    return res.status(500).send('Error revalidating')
  }
}
