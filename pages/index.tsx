import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { Header } from '../components/header'
import { MotionImage } from '../components/motion-image'
import {
  About,
  Contact,
  Experience,
  Hero,
  Skills,
} from '../components/sections'
import { Projects } from '../components/sections/projects'

const Home: NextPage = () => {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Miten Chauhan | Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer z-30">
          <div className="flex items-center justify-center">
            <MotionImage
              imageProps={{
                src: 'https://mitenchauhan.com/_nuxt/img/122f864.png',
                layout: 'fill',
                objectFit: 'cover',
                priority: true,
              }}
              motionProps={{
                className:
                  'h-10 w-10 rounded-full relative overflow-hidden filter grayscale hover:grayscale-0 cursor-pointer',
              }}
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home
