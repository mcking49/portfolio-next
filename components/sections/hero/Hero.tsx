import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Hi! I'm Miten!", '<FullStackDeveloper andProductOwner />'],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div>
      <h1 className="font-mono">
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" cursorStyle="_" />
      </h1>
    </div>
  )
}

export default Hero
