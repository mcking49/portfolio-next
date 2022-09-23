import { motion } from 'framer-motion'

import { SocialIcon } from '../social-icon'

const Header = () => {
  return (
    <header className="sticky top-0 p-5 flex items-center justify-between max-w-7xl mx-auto z-20">
      <motion.div
        className="flex flex-row items-center"
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <SocialIcon url="https://www.linkedin.com/in/mitenchauhan" />
        <SocialIcon url="https://github.com/mcking49" />
      </motion.div>

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
    </header>
  )
}

export default Header
