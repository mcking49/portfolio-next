export let PUBLIC_URL = process.env.NEXT_PUBLIC_BASE_URL

if (process.env.NODE_ENV === 'production') {
  PUBLIC_URL = process.env.NEXT_PUBLIC_VERCEL_URL
}
