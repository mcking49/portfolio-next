import Link from 'next/link'
import type { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  href: string
}

const NavLink: FC<Props> = ({ children, href }) => (
  <Link href={href}>
    <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40">
      {children}
    </button>
  </Link>
)

export default NavLink
