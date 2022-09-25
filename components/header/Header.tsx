import { motion } from 'framer-motion'

import { Social } from '../../types/sanity'
import { NavLink } from '../buttons'
import { SocialIcon } from '../social-icon'

type Props = {
  socials: Social[]
}

const Header = ({ socials }: Props) => {
  return (
    <header className="sticky top-0 p-5 flex items-center justify-between max-w-7xl mx-auto z-20">
      <motion.div
        className="flex flex-row items-center"
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        {socials.map((social) => (
          <SocialIcon key={social._id} url={social?.url} />
        ))}
      </motion.div>

      <NavLink href="#contact">
        <motion.div
          className="flex items-center"
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <SocialIcon className="cursor-pointer" network="email" />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </motion.div>
      </NavLink>
    </header>
  )
}

export default Header
